// Shared by server code and client components — keep free of mongoose imports.
export const LEAD_TYPES = ["contact", "newsletter", "chat"] as const;
export const LEAD_STATUSES = ["new", "contacted", "qualified", "won", "lost"] as const;

export type LeadType = (typeof LEAD_TYPES)[number];
export type LeadStatus = (typeof LEAD_STATUSES)[number];
