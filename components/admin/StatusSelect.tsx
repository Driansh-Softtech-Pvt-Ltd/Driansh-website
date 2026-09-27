"use client";

import { updateLeadStatus } from "@/actions/admin";
import { LEAD_STATUSES, type LeadStatus } from "@/models/lead-constants";

export default function StatusSelect({ id, status }: { id: string; status: LeadStatus }) {
  return (
    <form action={updateLeadStatus}>
      <input type="hidden" name="id" value={id} />
      <select
        name="status"
        defaultValue={status}
        aria-label="Lead status"
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs capitalize"
      >
        {LEAD_STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </form>
  );
}
