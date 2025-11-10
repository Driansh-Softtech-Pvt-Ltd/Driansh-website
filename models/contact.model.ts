import mongoose, { Schema, Document, Model } from "mongoose";
import type { ContactFormData } from "@/validations/contact-schema";

export interface Contact extends ContactFormData, Document {}

const ContactSchema: Schema<Contact> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      trim: true,
      match: [/^[0-9+\-\s]*$/, "Invalid phone number format"],
    },
    company: {
      type: String,
      trim: true,
      match: [/^https?:\/\/.+\..+$/, "Invalid website URL"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: 10,
    },
    consent: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false }, versionKey: false }
);

const ContactModel: Model<Contact> =
  mongoose.models.Contact || mongoose.model<Contact>("Contact", ContactSchema);

export default ContactModel;
