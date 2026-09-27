import mongoose, { Schema, Document, Model } from "mongoose";

import { LEAD_STATUSES, LEAD_TYPES, type LeadStatus, type LeadType } from "./lead-constants";

export { LEAD_STATUSES, LEAD_TYPES, type LeadStatus, type LeadType };

export interface LeadSource {
  page?: string;
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  firstSeen?: string;
}

export interface Lead extends Document {
  type: LeadType;
  status: LeadStatus;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  newsletter: boolean;
  source: LeadSource;
  /** External id for de-duplication (e.g. chat contact id, legacy record id). */
  externalId?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const SourceSchema = new Schema<LeadSource>(
  {
    page: String,
    landingPage: String,
    referrer: String,
    utmSource: String,
    utmMedium: String,
    utmCampaign: String,
    utmTerm: String,
    utmContent: String,
    gclid: String,
    firstSeen: String,
  },
  { _id: false }
);

const LeadSchema = new Schema<Lead>(
  {
    type: { type: String, enum: LEAD_TYPES, required: true, index: true },
    status: { type: String, enum: LEAD_STATUSES, default: "new", index: true },
    name: { type: String, trim: true },
    email: { type: String, trim: true, lowercase: true, index: true },
    phone: { type: String, trim: true },
    company: { type: String, trim: true },
    message: { type: String, trim: true },
    newsletter: { type: Boolean, default: false },
    source: { type: SourceSchema, default: {} },
    externalId: { type: String, index: { unique: true, sparse: true } },
    notes: { type: String, trim: true },
  },
  { timestamps: true, versionKey: false }
);

LeadSchema.index({ createdAt: -1 });

const LeadModel: Model<Lead> =
  mongoose.models.Lead || mongoose.model<Lead>("Lead", LeadSchema);

export default LeadModel;
