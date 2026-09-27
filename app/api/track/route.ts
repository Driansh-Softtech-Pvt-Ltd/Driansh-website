import { createHash } from "crypto";
import { headers } from "next/headers";
import dbConnect from "@/lib/db";
import { getClientIp, isRateLimited } from "@/lib/security";
import { PAGES, SITE_URL } from "@/lib/seo";
import AnalyticsDailyModel from "@/models/analytics.model";

const BOT_UA = /bot|crawl|spider|slurp|preview|headless|lighthouse|pingdom|monitor|curl|wget|python|axios/i;
const SITE_HOST = new URL(SITE_URL).host.replace(/^www\./, "");

function referrerDomain(referrer: unknown): string {
  if (typeof referrer !== "string" || !referrer) return "direct";
  try {
    const host = new URL(referrer).host.replace(/^www\./, "");
    return host && host !== SITE_HOST ? host.slice(0, 100) : "direct";
  } catch {
    return "direct";
  }
}

/** Cookie-less page-view counter used by the admin dashboard. */
export async function POST(request: Request) {
  const ua = (await headers()).get("user-agent") || "";
  if (BOT_UA.test(ua)) return new Response(null, { status: 204 });
  if (await isRateLimited("track", 120)) return new Response(null, { status: 204 });

  let body: { path?: unknown; referrer?: unknown };
  try {
    body = JSON.parse((await request.text()).slice(0, 2000));
  } catch {
    return new Response(null, { status: 400 });
  }

  // Only count real routes, so the collection can't be filled with junk keys.
  const path = typeof body.path === "string" ? body.path.replace(/\/+$/, "") || "/" : "";
  if (!(path in PAGES)) return new Response(null, { status: 204 });

  const date = new Date().toISOString().slice(0, 10);
  const salt = process.env.ANALYTICS_SALT || process.env.MONGODB_URI || "driansh";
  const visitor = createHash("sha256")
    .update(`${date}|${await getClientIp()}|${ua}|${salt}`)
    .digest("hex")
    .slice(0, 20);

  const inc = (kind: "page" | "referrer" | "visitor", key: string) => ({
    updateOne: {
      filter: { date, kind, key },
      update: { $inc: { count: 1 } },
      upsert: true,
    },
  });

  try {
    await dbConnect();
    await AnalyticsDailyModel.bulkWrite(
      [inc("page", path), inc("referrer", referrerDomain(body.referrer)), inc("visitor", visitor)],
      { ordered: false }
    );
  } catch (error) {
    console.error("Page-view tracking failed:", error);
  }

  return new Response(null, { status: 204 });
}
