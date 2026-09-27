"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import { checkPassword, createSession, destroySession, requireAdmin } from "@/lib/admin-auth";
import { isRateLimited } from "@/lib/security";
import LeadModel, { LEAD_STATUSES, type LeadStatus } from "@/models/lead.model";
import ContactModel from "@/models/contact.model";
import NewsletterModel from "@/models/newsletter.model";

export async function login(_prev: { error?: string } | undefined, formData: FormData) {
  if (await isRateLimited("admin-login", 10, 15 * 60 * 1000)) {
    return { error: "Too many attempts. Try again in 15 minutes." };
  }
  if (!process.env.ADMIN_PASSWORD) {
    return { error: "ADMIN_PASSWORD is not set in the environment." };
  }
  if (!checkPassword(String(formData.get("password") ?? ""))) {
    return { error: "Incorrect password." };
  }
  await createSession();
  redirect("/admin/leads");
}

export async function logout() {
  await destroySession();
  redirect("/admin/login");
}

export async function updateLeadStatus(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "") as LeadStatus;
  if (!/^[a-f0-9]{24}$/.test(id) || !LEAD_STATUSES.includes(status)) return;
  await dbConnect();
  await LeadModel.updateOne({ _id: id }, { $set: { status } });
  revalidatePath("/admin/leads");
}

/** One-time import of records saved before the leads dashboard existed. Safe to re-run. */
export async function importLegacyLeads() {
  await requireAdmin();
  await dbConnect();

  const contacts = await ContactModel.find({}).lean();
  const subscribers = await NewsletterModel.find({}).lean();

  const ops = [
    ...contacts.map((c) => ({
      updateOne: {
        filter: { externalId: `legacy-contact:${c._id}` },
        update: {
          $setOnInsert: {
            externalId: `legacy-contact:${c._id}`,
            type: c.message ? "contact" : "newsletter",
            status: "new",
            name: c.name || undefined,
            email: c.email,
            phone: c.phone || undefined,
            company: c.company || undefined,
            message: c.message || undefined,
            newsletter: Boolean(c.consent),
            source: {},
            createdAt: (c as { createdAt?: Date }).createdAt ?? new Date(),
          },
        },
        upsert: true,
      },
    })),
    ...subscribers.map((s) => ({
      updateOne: {
        filter: { type: "newsletter", email: s.email },
        update: {
          $setOnInsert: {
            type: "newsletter",
            status: "new",
            email: s.email,
            newsletter: true,
            source: {},
            createdAt: (s as { createdAt?: Date }).createdAt ?? new Date(),
          },
        },
        upsert: true,
      },
    })),
  ];

  if (ops.length) await LeadModel.bulkWrite(ops, { ordered: false, timestamps: false });
  revalidatePath("/admin/leads");
}
