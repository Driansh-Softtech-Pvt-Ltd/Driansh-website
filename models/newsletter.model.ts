import mongoose, { Schema, Document, Model } from "mongoose";

export interface NewsletterSubscriber extends Document {
  email: string;
  subscribed: boolean;
  source?: string;
}

const NewsletterSchema: Schema<NewsletterSubscriber> = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    subscribed: { type: Boolean, default: true },
    source: { type: String, trim: true },
  },
  { timestamps: true, versionKey: false }
);

const NewsletterModel: Model<NewsletterSubscriber> =
  mongoose.models.Newsletter ||
  mongoose.model<NewsletterSubscriber>("Newsletter", NewsletterSchema);

export default NewsletterModel;
