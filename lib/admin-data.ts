import dbConnect from "@/lib/db";
import AnalyticsDailyModel from "@/models/analytics.model";
import LeadModel, { LEAD_STATUSES, LEAD_TYPES, type LeadStatus, type LeadType } from "@/models/lead.model";

export const RANGES = [7, 30, 90] as const;
export type RangeDays = (typeof RANGES)[number];

export interface LeadFilters {
  days: RangeDays;
  type?: LeadType;
  status?: LeadStatus;
  q?: string;
  page: number;
}

export const PAGE_SIZE = 50;

function isoDay(offsetDays: number): string {
  const d = new Date();
  d.setUTCHours(0, 0, 0, 0);
  d.setUTCDate(d.getUTCDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

export function parseFilters(sp: Record<string, string | string[] | undefined>): LeadFilters {
  const get = (k: string) => (Array.isArray(sp[k]) ? sp[k]?.[0] : sp[k]) as string | undefined;
  const days = Number(get("days"));
  const type = get("type");
  const status = get("status");
  return {
    days: (RANGES as readonly number[]).includes(days) ? (days as RangeDays) : 30,
    type: (LEAD_TYPES as readonly string[]).includes(type ?? "") ? (type as LeadType) : undefined,
    status: (LEAD_STATUSES as readonly string[]).includes(status ?? "") ? (status as LeadStatus) : undefined,
    q: get("q")?.trim().slice(0, 100) || undefined,
    page: Math.max(1, Math.min(1000, Number(get("page")) || 1)),
  };
}

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function leadQuery(f: LeadFilters) {
  const since = new Date(`${isoDay(-(f.days - 1))}T00:00:00Z`);
  const query: Record<string, unknown> = { createdAt: { $gte: since } };
  if (f.type) query.type = f.type;
  if (f.status) query.status = f.status;
  if (f.q) {
    const rx = new RegExp(escapeRegex(f.q), "i");
    query.$or = [{ name: rx }, { email: rx }, { company: rx }, { phone: rx }, { message: rx }];
  }
  return query;
}

async function trafficBetween(from: string, to: string) {
  const [visitors, views] = await Promise.all([
    AnalyticsDailyModel.countDocuments({ kind: "visitor", date: { $gte: from, $lte: to } }),
    AnalyticsDailyModel.aggregate<{ total: number }>([
      { $match: { kind: "page", date: { $gte: from, $lte: to } } },
      { $group: { _id: null, total: { $sum: "$count" } } },
    ]),
  ]);
  return { visitors, views: views[0]?.total ?? 0 };
}

async function top(kind: "page" | "referrer", from: string, to: string, limit = 8) {
  return AnalyticsDailyModel.aggregate<{ _id: string; count: number }>([
    { $match: { kind, date: { $gte: from, $lte: to } } },
    { $group: { _id: "$key", count: { $sum: "$count" } } },
    { $sort: { count: -1 } },
    { $limit: limit },
  ]);
}

export async function getDashboard(f: LeadFilters) {
  await dbConnect();

  const to = isoDay(0);
  const from = isoDay(-(f.days - 1));
  const prevTo = isoDay(-f.days);
  const prevFrom = isoDay(-(2 * f.days - 1));
  const sinceDate = new Date(`${from}T00:00:00Z`);
  const prevSince = new Date(`${prevFrom}T00:00:00Z`);

  const [current, previous, dailyVisitors, topPages, topReferrers, leadsByType, prevLeads, topLeadSources, leads, total] =
    await Promise.all([
      trafficBetween(from, to),
      trafficBetween(prevFrom, prevTo),
      AnalyticsDailyModel.aggregate<{ _id: string; visitors: number }>([
        { $match: { kind: "visitor", date: { $gte: from, $lte: to } } },
        { $group: { _id: "$date", visitors: { $sum: 1 } } },
      ]),
      top("page", from, to),
      top("referrer", from, to),
      LeadModel.aggregate<{ _id: LeadType; count: number }>([
        { $match: { createdAt: { $gte: sinceDate } } },
        { $group: { _id: "$type", count: { $sum: 1 } } },
      ]),
      LeadModel.countDocuments({ createdAt: { $gte: prevSince, $lt: sinceDate } }),
      LeadModel.aggregate<{ _id: string; count: number }>([
        { $match: { createdAt: { $gte: sinceDate } } },
        {
          $group: {
            _id: { $ifNull: ["$source.utmSource", { $ifNull: ["$source.landingPage", "unknown"] }] },
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
        { $limit: 8 },
      ]),
      LeadModel.find(leadQuery(f))
        .sort({ createdAt: -1 })
        .skip((f.page - 1) * PAGE_SIZE)
        .limit(PAGE_SIZE)
        .lean(),
      LeadModel.countDocuments(leadQuery(f)),
    ]);

  // Fill every day in the range so the chart has no gaps.
  const byDay = new Map(dailyVisitors.map((d) => [d._id, d.visitors]));
  const series = Array.from({ length: f.days }, (_, i) => {
    const date = isoDay(-(f.days - 1) + i);
    return { date, visitors: byDay.get(date) ?? 0 };
  });

  const leadCounts = Object.fromEntries(LEAD_TYPES.map((t) => [t, 0])) as Record<LeadType, number>;
  for (const row of leadsByType) leadCounts[row._id] = row.count;
  const leadTotal = Object.values(leadCounts).reduce((a, b) => a + b, 0);

  return {
    range: { from, to, days: f.days },
    traffic: { current, previous },
    leads: { counts: leadCounts, total: leadTotal, previousTotal: prevLeads },
    series,
    topPages,
    topReferrers,
    topLeadSources,
    rows: leads,
    rowsTotal: total,
  };
}

export type Dashboard = Awaited<ReturnType<typeof getDashboard>>;
