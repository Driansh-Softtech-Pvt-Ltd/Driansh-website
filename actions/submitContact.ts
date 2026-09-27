"use server";

import dbConnect from "@/lib/db";
import { mailer } from "@/lib/mailer";
import { escapeHtml, isRateLimited } from "@/lib/security";
import ContactModel from "@/models/contact.model";
import NewsletterModel from "@/models/newsletter.model";
import { contactSchema, type ContactFormData } from "@/validations/contact-schema";

type SubmitResult = { success: boolean; message: string };

const SUCCESS: SubmitResult = {
  success: true,
  message: "Thank you! We'll contact you soon.",
};

export const submitContact = async (input: ContactFormData): Promise<SubmitResult> => {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please check the form fields and try again." };
  }
  const data = parsed.data;

  // Honeypot filled in: pretend it worked so bots don't retry.
  if (data.website) return SUCCESS;

  if (await isRateLimited("contact")) {
    return { success: false, message: "Too many requests. Please try again later." };
  }

  const { website: _honeypot, ...contact } = data;

  try {
    await dbConnect();
    await ContactModel.create(contact);
    if (contact.consent) {
      await NewsletterModel.updateOne(
        { email: contact.email },
        { $set: { subscribed: true }, $setOnInsert: { source: "contact-form" } },
        { upsert: true }
      );
    }
  } catch (error) {
    // Still try to deliver the email so the lead isn't lost.
    console.error("Failed to save contact in DB:", error);
  }

  try {
    await mailer.sendMail({
      to: process.env.MAIL_TO,
      replyTo: contact.email,
      subject: "Contact Form Inquiry From Website",
      html: buildContactEmail(contact),
    });
  } catch (error) {
    console.error("Error while sending mail:", error);
    return {
      success: false,
      message: "Failed to send your message. Please try again later.",
    };
  }

  return SUCCESS;
};

function buildContactEmail(data: Omit<ContactFormData, "website">): string {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const company = escapeHtml(data.company);
  const message = escapeHtml(data.message);

  return `
      <div style="font-family: Arial, sans-serif; color: #202124; line-height: 1.6;">
        <p style="margin-bottom: 16px;">Hello,</p>

        <p style="margin-bottom: 16px;">
          You’ve received a new contact form submission from your website.
        </p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />

        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 6px 0; width: 120px;"><strong>Name:</strong></td><td>${name}</td></tr>
          ${phone ? `<tr><td style="padding: 6px 0;"><strong>Phone:</strong></td><td>${phone}</td></tr>` : ""}
          <tr><td style="padding: 6px 0;"><strong>Email:</strong></td><td>${email}</td></tr>
          ${company ? `<tr><td style="padding: 6px 0;"><strong>Company:</strong></td><td>${company}</td></tr>` : ""}
          <tr><td style="padding: 6px 0;"><strong>Newsletter:</strong></td><td>${data.consent ? "Yes" : "No"}</td></tr>
        </table>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />

        <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; margin: 0;">${message}</p>

        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

        <p style="color: #777; font-size: 12px; margin-top: 12px;">
          Sent automatically from your website contact form.
        </p>
      </div>
    `;
}
