import { createHash, timingSafeEqual } from "crypto";
import { headers } from "next/headers";

/** Constant-time string comparison for secrets. */
export function safeEqual(a: string, b: string): boolean {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb) && a.length === b.length;
}

/** Escape user input before interpolating it into HTML (e.g. emails). */
export function escapeHtml(value: string = ""): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Best-effort client IP from proxy headers (Vercel sets x-forwarded-for). */
export async function getClientIp(): Promise<string> {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
}

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

/**
 * Simple fixed-window rate limiter keyed by client IP.
 * In-memory, so limits are per server instance — swap for Redis/Upstash
 * if the site runs on multiple instances or serverless.
 */
export async function isRateLimited(
  scope: string,
  limit = 5,
  windowMs = 10 * 60 * 1000
): Promise<boolean> {
  const key = `${scope}:${await getClientIp()}`;
  const now = Date.now();

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  bucket.count += 1;
  return bucket.count > limit;
}
