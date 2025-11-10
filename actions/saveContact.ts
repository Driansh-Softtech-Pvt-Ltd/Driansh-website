"use server";

import type { ContactFormData } from "@/validations/contact-schema";
import dbConnect from "@/lib/db";
import ContactModel from "@/models/contact.model";

export const saveContact = async (formData: ContactFormData) => {
  try {
    await dbConnect();

    const existing = await ContactModel.findOne({ email: formData.email });

    if (existing) {
      existing.name = formData.name;
      existing.phone = formData.phone;
      existing.company = formData.company;
      existing.message = formData.message;
      await existing.save();
    } else {
      await ContactModel.create(formData);
    }

    return {
      success: true,
      message: "Your message has been submitted successfully.",
    };
  } catch (error: any) {
    if (process.env.NODE_ENV !== "production") {
      console.error("❌ Error while saving contact:", error);
    }

    return {
      success: false,
      message: "Something went wrong while submitting the form. Please try again later.",
    };
  }
};
