"use server";

import { intakeLead } from "@/lib/lead-intake";
import { isRateLimited } from "@/lib/security";
import { type ContactFormData } from "@/validations/contact-schema";

type SubmitResult = { success: boolean; message: string };

/**
 * The contact and demo forms on this site.
 *
 * Everything past the rate limit is shared with POST /api/leads -- see
 * lib/lead-intake.ts, which validates, stores and mails the enquiry. The
 * message it returns is what the visitor reads, so it stays non-technical;
 * the reason a half failed goes to the server log instead.
 */
export const submitContact = async (input: ContactFormData): Promise<SubmitResult> => {
  if (await isRateLimited("contact")) {
    return { success: false, message: "Too many requests. Please try again later." };
  }

  const outcome = await intakeLead(input);
  return { success: outcome.ok, message: outcome.message };
};
