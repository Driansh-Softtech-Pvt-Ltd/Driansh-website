import nodemailer, { type Transporter } from "nodemailer";

/*
 * The site's mail transport.
 *
 * It reads the same SMTP_* variables EngageOne (Chatwoot) uses -- SMTP_ADDRESS,
 * SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD, SMTP_DOMAIN, SMTP_SSL,
 * SMTP_ENABLE_STARTTLS_AUTO, MAILER_SENDER_EMAIL -- so the credentials that
 * already send mail as support@driansh.com can be copied across unchanged
 * instead of being reinvented here.
 *
 * With no SMTP_ADDRESS it falls back to the old Gmail transport on
 * MAIL_USER / MAIL_PASS, so an environment configured the previous way keeps
 * working.
 */

function bool(value: string | undefined): boolean | undefined {
  if (value === undefined || value === "") return undefined;
  return /^(1|true|yes|on)$/i.test(value);
}

const host = process.env.SMTP_ADDRESS;
const port = Number(process.env.SMTP_PORT ?? 587);
const user = process.env.SMTP_USERNAME || process.env.MAIL_USER;
const pass = process.env.SMTP_PASSWORD || process.env.MAIL_PASS;

/**
 * The envelope sender. Relays reject or silently rewrite mail whose From is
 * not an address they are willing to send for, and the transport used to send
 * none at all -- which worked only because Gmail substituted the account.
 */
export const MAIL_FROM =
  process.env.MAILER_SENDER_EMAIL || process.env.MAIL_FROM || user || "support@driansh.com";

/** Which transport is in use, for the health check. Never includes the password. */
export const mailerDescription = host
  ? `smtp://${host}:${port}`
  : user
    ? "gmail service"
    : "not configured";

function createTransport(): Transporter {
  if (host) {
    const ssl = bool(process.env.SMTP_SSL);
    const starttls = bool(process.env.SMTP_ENABLE_STARTTLS_AUTO);

    return nodemailer.createTransport({
      host,
      port,
      // Port 465 is TLS from the first byte; the rest open in the clear and
      // upgrade, which nodemailer does on its own unless told not to.
      secure: ssl ?? port === 465,
      ...(starttls === false ? { ignoreTLS: true } : {}),
      // Rails calls this the SMTP domain; it is the name sent in EHLO.
      ...(process.env.SMTP_DOMAIN ? { name: process.env.SMTP_DOMAIN } : {}),
      ...(user ? { auth: { user, pass } } : {}),
    });
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export const mailer = createTransport();

/** Ask the server whether it would accept us, without sending anything. */
export async function verifyMailer(): Promise<string> {
  if (!host && !user) return "not configured";
  try {
    await mailer.verify();
    return "ready";
  } catch (error) {
    return `failed: ${error instanceof Error ? error.message : String(error)}`;
  }
}
