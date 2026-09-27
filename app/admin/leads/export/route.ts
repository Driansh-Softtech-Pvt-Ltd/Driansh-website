import { isAdmin } from "@/lib/admin-auth";
import dbConnect from "@/lib/db";
import { leadQuery, parseFilters } from "@/lib/admin-data";
import LeadModel from "@/models/lead.model";

export const dynamic = "force-dynamic";

// Quote every cell and neutralise spreadsheet formulas (CSV injection).
function cell(value: unknown): string {
  let s = value == null ? "" : String(value);
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return `"${s.replace(/"/g, '""')}"`;
}

export async function GET(request: Request) {
  if (!(await isAdmin())) return new Response("Unauthorized", { status: 401 });

  const sp = Object.fromEntries(new URL(request.url).searchParams);
  const f = parseFilters(sp);
  await dbConnect();
  const leads = await LeadModel.find(leadQuery(f)).sort({ createdAt: -1 }).limit(10_000).lean();

  const header = ["Date", "Type", "Status", "Name", "Email", "Phone", "Company", "Message", "Newsletter",
    "Page", "Landing page", "Referrer", "UTM source", "UTM medium", "UTM campaign", "UTM term", "Google Ads click"];
  const rows = leads.map((l) => [
    new Date(l.createdAt).toISOString(), l.type, l.status, l.name, l.email, l.phone, l.company, l.message,
    l.newsletter ? "yes" : "no", l.source?.page, l.source?.landingPage, l.source?.referrer, l.source?.utmSource,
    l.source?.utmMedium, l.source?.utmCampaign, l.source?.utmTerm, l.source?.gclid ? "yes" : "",
  ]);

  const csv = [header, ...rows].map((r) => r.map(cell).join(",")).join("\r\n");
  return new Response(`﻿${csv}`, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="driansh-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
