"use server";

import { mailer } from "@/lib/mailer";
import type { ContactFormData } from "@/validations/contact-schema";

export const sendMail = async (formData: ContactFormData) => {
  try {
    const html = `
      <div style="font-family: Arial, sans-serif; color: #202124; line-height: 1.6;">
        <p style="margin-bottom: 16px;">Hello,</p>
        
        <p style="margin-bottom: 16px;">
          You’ve received a new contact form submission from your website.
        </p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />

        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 6px 0; width: 120px;"><strong>Name:</strong></td><td>${formData.name}</td></tr>
          ${formData.phone ? `<tr><td style="padding: 6px 0;"><strong>Phone:</strong></td><td>${formData.phone}</td></tr>` : ""}
          <tr><td style="padding: 6px 0;"><strong>Email:</strong></td><td>${formData.email}</td></tr>
          ${formData.company ? `<tr><td style="padding: 6px 0;"><strong>Website:</strong></td><td>${formData.company}</td></tr>` : ""}
        </table>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />

        <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; margin: 0;">${formData.message}</p>

        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

        <p style="color: #777; font-size: 12px; margin-top: 12px;">
          Sent automatically from your website contact form.
        </p>
      </div>
    `;

    await mailer.sendMail({
      to: process.env.MAIL_TO,
      replyTo: formData.email,
      subject: "Contact Form Inquiry From Website",
      html,
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Error while sending mail:", error);
    }
    throw new Error("Failed to send contact form email.");
  }
};
