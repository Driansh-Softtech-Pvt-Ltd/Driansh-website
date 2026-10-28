import { mailer, MAIL_FROM } from "@/lib/mailer";
import { saveLead } from "@/lib/leads";
import { escapeHtml } from "@/lib/security";
import { contactSchema, type ContactFormData } from "@/validations/contact-schema";
import { interestLabel } from "@/constants/contact";
import type { LeadType } from "@/models/lead-constants";

/*
 * One path for every enquiry, whatever asked for it.
 *
 * The contact form (a server action) and POST /api/leads both land here, so a
 * lead captured by an external form is validated, stored, labelled and mailed
 * exactly like one typed on the site. Keeping two copies of this was the easy
 * way to let them drift.
 */

export interface IntakeOutcome {
  ok: boolean;
  /** Written to MongoDB. */
  saved: boolean;
  /** Handed to the mail transport. */
  mailed: boolean;
  message: string;
  /** Why each half failed, for the server log and the API's response. */
  errors: { save?: string; mail?: string };
}

const SUCCESS_MESSAGE = "Thank you! We'll contact you soon.";

/** Interests that mean "show me the product", so they can be filtered as demos. */
const DEMO_INTERESTS = new Set(["engageone-demo", "contactcenter-demo"]);

/** A demo request is still a contact, but worth telling apart in the dashboard. */
export function leadTypeFor(interest?: string): LeadType {
  return interest && DEMO_INTERESTS.has(interest) ? "demo" : "contact";
}

/**
 * Validate, store and announce one enquiry.
 *
 * A lead is not lost because one dependency is down: the save and the email are
 * attempted independently, and either one succeeding is a success for the
 * visitor -- the lead is either in the dashboard or in somebody's inbox. Only
 * losing both is worth asking them to try again.
 */
export async function intakeLead(input: unknown): Promise<IntakeOutcome> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      saved: false,
      mailed: false,
      message: "Please check the form fields and try again.",
      errors: { save: "validation" },
    };
  }

  const data = parsed.data;

  // Honeypot filled in: report success so bots don't retry, but store nothing.
  if (data.website) {
    return { ok: true, saved: false, mailed: false, message: SUCCESS_MESSAGE, errors: {} };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { website: _honeypot, attribution, ...contact } = data;

  const interest = interestLabel(contact.interest);
  const details = [interest && `Interested in: ${interest}`, contact.teamSize && `Team size: ${contact.teamSize}`]
    .filter(Boolean)
    .join(" · ");

  const errors: IntakeOutcome["errors"] = {};

  let saved = false;
  try {
    await saveLead({
      type: leadTypeFor(contact.interest),
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      company: contact.company,
      message: details ? `${details}\n\n${contact.message}` : contact.message,
      newsletter: Boolean(contact.consent),
      source: attribution,
    });
    if (contact.consent) {
      await saveLead({ type: "newsletter", email: contact.email, source: attribution });
    }
    saved = true;
  } catch (error) {
    errors.save = error instanceof Error ? error.message : String(error);
    console.error("[lead-intake] could not save the lead:", errors.save);
  }

  let mailed = false;
  try {
    const to = process.env.MAIL_TO;
    if (!to) throw new Error("MAIL_TO is not configured");

    await mailer.sendMail({
      from: MAIL_FROM,
      to,
      replyTo: contact.email,
      subject: `New website enquiry${interest ? `: ${interest}` : ""} — ${contact.name}`,
      html: buildContactEmail(contact, interest),
    });
    mailed = true;
  } catch (error) {
    errors.mail = error instanceof Error ? error.message : String(error);
    console.error("[lead-intake] could not send the notification:", errors.mail);
  }

  if (!saved && !mailed) {
    return {
      ok: false,
      saved,
      mailed,
      message: "Failed to send your message. Please try again later.",
      errors,
    };
  }

  return { ok: true, saved, mailed, message: SUCCESS_MESSAGE, errors };
}

export function buildContactEmail(
  data: Omit<ContactFormData, "website" | "attribution">,
  interest?: string
): string {
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
          ${interest ? `<tr><td style="padding: 6px 0;"><strong>Interested in:</strong></td><td>${escapeHtml(interest)}</td></tr>` : ""}
          ${data.teamSize ? `<tr><td style="padding: 6px 0;"><strong>Team size:</strong></td><td>${escapeHtml(data.teamSize)}</td></tr>` : ""}
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
