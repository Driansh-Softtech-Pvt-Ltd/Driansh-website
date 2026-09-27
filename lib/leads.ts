import dbConnect from "@/lib/db";
import LeadModel, { type LeadSource, type LeadType } from "@/models/lead.model";
import type { Attribution } from "@/validations/contact-schema";

export interface NewLead {
  type: LeadType;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  newsletter?: boolean;
  source?: Attribution | LeadSource;
  externalId?: string;
}

/** Save a lead. Newsletter sign-ups are de-duplicated by email. */
export async function saveLead(lead: NewLead): Promise<void> {
  await dbConnect();

  if (lead.type === "newsletter" && lead.email) {
    await LeadModel.updateOne(
      { type: "newsletter", email: lead.email.toLowerCase() },
      {
        $set: { newsletter: true },
        $setOnInsert: { status: "new", source: lead.source ?? {} },
      },
      { upsert: true }
    );
    return;
  }

  if (lead.externalId) {
    await LeadModel.updateOne(
      { externalId: lead.externalId },
      { $set: stripEmpty(lead), $setOnInsert: { status: "new" } },
      { upsert: true }
    );
    return;
  }

  await LeadModel.create({ ...lead, source: lead.source ?? {} });
}

function stripEmpty<T extends object>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined && v !== null && v !== "")
  ) as Partial<T>;
}
