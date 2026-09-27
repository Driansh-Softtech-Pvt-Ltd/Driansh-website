"use server";

import dbConnect from "@/lib/db";
import { isRateLimited } from "@/lib/security";
import NewsletterModel from "@/models/newsletter.model";
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
    await dbConnect();
    await NewsletterModel.updateOne(
      { email: parsed.data.email },
      { $set: { subscribed: true }, $setOnInsert: { source: "footer" } },
      { upsert: true }
    );

    return { success: true, message: "Subscribed successfully" };
  } catch (error) {
    console.error("❌ Newsletter save error:", error);
    return { success: false, message: "Something went wrong" };
  }
};
