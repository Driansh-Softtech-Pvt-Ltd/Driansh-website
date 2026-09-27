"use server";

import { saveLead } from "@/lib/leads";
import { isRateLimited } from "@/lib/security";
import { newsletterSchema, type NewsletterFormData } from "@/validations/contact-schema";

export const saveNewsletter = async (input: NewsletterFormData) => {
  const parsed = newsletterSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, message: "Please enter a valid email" };
  }

  // Honeypot filled in: pretend it worked so bots don't retry.
  if (parsed.data.website) return { success: true, message: "Subscribed successfully" };

  if (await isRateLimited("newsletter")) {
    return { success: false, message: "Too many requests. Please try again later." };
  }

  try {
    await saveLead({ type: "newsletter", email: parsed.data.email, source: parsed.data.attribution });
    return { success: true, message: "Subscribed successfully" };
  } catch (error) {
    console.error("❌ Newsletter save error:", error);
    return { success: false, message: "Something went wrong. Please try again later." };
  }
};
