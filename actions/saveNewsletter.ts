"use server";

import dbConnect from "@/lib/db";
import ContactModel from "@/models/contact.model";

export const saveNewsletter = async (email: string) => {
  try {
    await dbConnect();
    const existing = await ContactModel.findOne({ email });

    if (existing) {
      // Update only consent
      existing.consent = true;
      await existing.save();
    } else {
      // Create new contact with only email and consent
      await ContactModel.create({ email, consent: true, name: "", phone: "", company: "", message: "" });
    }

    return { success: true, message: "Subscribed successfully" };
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
        console.error("❌ Newsletter save error:", error);
    }
    return { success: false, message: "Something went wrong" };
  }
};
