"use client";

import type { Attribution } from "@/validations/contact-schema";

const KEY = "driansh_attribution";
const UTM_PARAMS = {
  utm_source: "utmSource",
  utm_medium: "utmMedium",
  utm_campaign: "utmCampaign",
  utm_term: "utmTerm",
  utm_content: "utmContent",
  gclid: "gclid",
} as const;

type StoredAttribution = Omit<NonNullable<Attribution>, "page">;

function read(): StoredAttribution | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as StoredAttribution) : null;
  } catch {
    return null;
  }
}

/**
 * Record first-touch attribution (landing page, external referrer, UTM tags)
 * the first time a visitor arrives. A new campaign visit (UTM/gclid present)
 * overwrites the stored values so paid clicks are credited.
 */
export function captureAttribution(): void {
  try {
    const url = new URL(window.location.href);
    const params: Record<string, string> = {};
    for (const [param, field] of Object.entries(UTM_PARAMS)) {
      const value = url.searchParams.get(param);
      if (value) params[field] = value.slice(0, 300);
    }

    const existing = read();
    if (existing && Object.keys(params).length === 0) return;

    const ref = document.referrer;
    const external = ref && new URL(ref).host !== window.location.host ? ref : "";

    const next: StoredAttribution = {
      landingPage: url.pathname,
      referrer: external.slice(0, 300),
      firstSeen: new Date().toISOString(),
      ...params,
    };
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Storage blocked (private mode etc.) — attribution is best-effort.
  }
}

/** Attribution to attach to a lead submitted from the current page. */
export function getAttribution(): Attribution {
  const stored = typeof window === "undefined" ? null : read();
  return {
    ...(stored ?? {}),
    page: typeof window === "undefined" ? undefined : window.location.pathname,
  };
}
