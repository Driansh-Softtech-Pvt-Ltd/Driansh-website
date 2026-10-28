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
  /** Pushed to the Contact Center as a dialable lead. */
  forwarded: boolean;
  message: string;
  /** Why each part failed, for the server log and the API's response. */
  errors: { save?: string; mail?: string; forward?: string };
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
      forwarded: false,
      message: "Please check the form fields and try again.",
      errors: { save: "validation" },
    };
  }

  const data = parsed.data;

  // Honeypot filled in: report success so bots don't retry, but store nothing.
  if (data.website) {
    return { ok: true, saved: false, mailed: false, forwarded: false, message: SUCCESS_MESSAGE, errors: {} };
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

  // Hand it to the dialer as well, when one is configured and the enquiry left
  // a number. This is the slowest of the three and the least important -- an
  // enquiry nobody can call is still an enquiry -- so it runs last and its
  // failure never reaches the visitor.
  const forwarded = await forwardToContactCenter(contact, errors);

  if (!saved && !mailed) {
    return {
      ok: false,
      saved,
      mailed,
      forwarded,
      message: "Failed to send your message. Please try again later.",
      errors,
    };
  }

  return { ok: true, saved, mailed, forwarded, message: SUCCESS_MESSAGE, errors };
}

/**
 * Push the enquiry into the Contact Center so an agent can call it back.
 *
 * The endpoint is reached over a tunnel to a machine that is not always up, so
 * this is strictly best-effort and bounded: a slow or missing dialer must not
 * hold a visitor on a spinner. Without a phone number there is nothing to dial,
 * so the lead is simply not forwarded.
 */
async function forwardToContactCenter(
  contact: { name: string; email: string; phone?: string; company?: string; interest?: string; teamSize?: string; message: string },
  errors: IntakeOutcome["errors"]
): Promise<boolean> {
  const url = process.env.LEADS_WEBHOOK_URL;
  const secret = process.env.LEADS_WEBHOOK_SECRET;
  if (!url || !secret) return false;

  const { phoneCode, phoneNumber } = splitPhone(contact.phone);
  if (!phoneNumber) return false;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-secret": secret,
        // ngrok serves its interstitial to anything that looks like a browser.
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        phoneNumber,
        phoneCode,
        company: contact.company,
        interest: interestLabel(contact.interest) || contact.interest,
        teamSize: contact.teamSize,
        message: contact.message,
        source: "website",
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) throw new Error(`${response.status} ${await response.text().catch(() => "")}`.trim());
    return true;
  } catch (error) {
    errors.forward = error instanceof Error ? error.message : String(error);
    console.error("[lead-intake] could not forward the lead to the contact center:", errors.forward);
    return false;
  }
}

/*
 * Country codes we recognise on a number the visitor typed with a leading '+'.
 * Longest first, so 971 is matched before 97 would be.
 *
 * A lead record keeps the code and the number in separate fields and the dialer
 * joins them, so a number stored whole under a default code is dialled with the
 * code twice -- +91 98765 00288 became 91 919876500288. This is not a complete
 * list and is not meant to be; it covers where enquiries come from, and anything
 * unrecognised keeps its digits and the default code, which is what it would
 * have done anyway.
 */
const COUNTRY_CODES = ["971", "966", "880", "852", "91", "92", "94", "65", "61", "60", "49", "44", "33", "27", "1"];

/** Split a typed phone number into the dialer's two fields. */
export function splitPhone(input?: string): { phoneCode: string; phoneNumber: string } {
  const fallback = process.env.LEADS_WEBHOOK_PHONE_CODE || "91";
  const raw = (input || "").trim();
  const digits = raw.replace(/\D/g, "");
  if (!digits) return { phoneCode: fallback, phoneNumber: "" };

  // Only a leading '+' says "what follows is a country code". Without it the
  // number is local and the configured code applies.
  if (raw.startsWith("+") || raw.startsWith("00")) {
    const national = raw.startsWith("00") ? digits.slice(2) : digits;
    for (const code of COUNTRY_CODES) {
      if (national.startsWith(code) && national.length > code.length) {
        return { phoneCode: code, phoneNumber: national.slice(code.length) };
      }
    }
    return { phoneCode: fallback, phoneNumber: national };
  }

  return { phoneCode: fallback, phoneNumber: digits };
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
