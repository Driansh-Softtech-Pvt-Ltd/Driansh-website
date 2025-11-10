"use server";

import type { ContactFormData } from "@/validations/contact-schema";
import dbConnect from "@/lib/db";
import ContactModel from "@/models/contact.model";

export const saveContact = async (formData: ContactFormData) => {
  try {
    await dbConnect();

    await ContactModel.create(formData);

    return {
      success: true,
      message: "Your message has been submitted successfully.",
    };
  } catch (error: any) {
    console.error("❌ Error while saving contact:", error);

    return {
      success: false,
      message:
        "Something went wrong while submitting the form. Please try again later.",
    };
  }
};
