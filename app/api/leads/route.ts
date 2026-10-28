import { NextResponse } from "next/server";
import { intakeLead } from "@/lib/lead-intake";
import { isRateLimited, safeEqual } from "@/lib/security";
import { MAIL_FROM, mailerDescription, verifyMailer } from "@/lib/mailer";

/*
 * POST /api/leads -- capture an enquiry from anywhere.
 *
 * The site's own forms go through the server action, which cannot be called
 * from outside this app. This is the same intake over HTTP, for a landing
 * page, a partner site, an automation or the product itself.
 *
 * Auth: set LEADS_API_TOKEN and send it as `Authorization: Bearer <token>` or
 * `x-api-key`. With no token configured the route stays open, as the form
 * already is, and leans on the honeypot and the rate limit. Configure it
 * before handing the URL to anyone.
 *
 * GET returns a health check -- but only to a caller holding the token, since
 * which dependency is down is not the public's business.
 */

export const runtime = "nodejs";
/** Reads env and talks to Mongo, so it must never be prerendered or cached. */
export const dynamic = "force-dynamic";

const CORS = {
  "Access-Control-Allow-Origin": process.env.LEADS_API_ORIGIN ?? "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key",
  "Access-Control-Max-Age": "86400",
};

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: CORS });
}

/** True when no token is configured, or the caller presented the right one. */
function authorized(request: Request): boolean {
  const expected = process.env.LEADS_API_TOKEN;
  if (!expected) return true;

  const bearer = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const presented = bearer || request.headers.get("x-api-key") || "";
  return Boolean(presented) && safeEqual(presented, expected);
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS });
}

export async function POST(request: Request) {
  if (!authorized(request)) {
    return json({ success: false, message: "Unauthorized." }, 401);
  }

  // A shared bucket with the forms would let one noisy integration lock out
  // the website's own visitors, so the API counts separately.
  if (await isRateLimited("api-leads", 20)) {
    return json({ success: false, message: "Too many requests. Please try again later." }, 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, message: "Expected a JSON body." }, 400);
  }

  const outcome = await intakeLead(body);

  if (!outcome.ok) {
    // A rejected payload is the caller's to fix; losing both the save and the
    // mail is ours, and saying which is what makes it diagnosable.
    const badRequest = outcome.errors.save === "validation";
    return json(
      {
        success: false,
        message: outcome.message,
        ...(badRequest ? {} : { errors: outcome.errors }),
      },
      badRequest ? 400 : 502
    );
  }

  return json({
    success: true,
    message: outcome.message,
    stored: outcome.saved,
    notified: outcome.mailed,
    // One half failing still counts as accepted, but the caller should know.
    ...(Object.keys(outcome.errors).length ? { warnings: outcome.errors } : {}),
  });
}

export async function GET(request: Request) {
  const expected = process.env.LEADS_API_TOKEN;
  if (!expected || !authorized(request)) {
    return json({ success: false, message: "Unauthorized." }, 401);
  }

  // Names only -- never the values.
  const configured = {
    MONGODB_URI: Boolean(process.env.MONGODB_URI),
    DB_NAME: Boolean(process.env.DB_NAME),
    SMTP_ADDRESS: Boolean(process.env.SMTP_ADDRESS),
    SMTP_USERNAME: Boolean(process.env.SMTP_USERNAME || process.env.MAIL_USER),
    SMTP_PASSWORD: Boolean(process.env.SMTP_PASSWORD || process.env.MAIL_PASS),
    MAIL_TO: Boolean(process.env.MAIL_TO),
  };

  let database = "not configured";
  if (configured.MONGODB_URI) {
    try {
      const { default: dbConnect } = await import("@/lib/db");
      await dbConnect();
      database = "connected";
    } catch (error) {
      database = `failed: ${error instanceof Error ? error.message : String(error)}`;
    }
  }

  return json({
    success: true,
    configured,
    database,
    mail: { transport: mailerDescription, from: MAIL_FROM, status: await verifyMailer() },
  });
}
