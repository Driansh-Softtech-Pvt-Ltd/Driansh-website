import Link from "next/link";
import { requireAdmin } from "@/lib/admin-auth";
import { getDashboard, parseFilters, PAGE_SIZE, RANGES, type LeadFilters } from "@/lib/admin-data";
import { importLegacyLeads, logout } from "@/actions/admin";
import { LEAD_STATUSES, LEAD_TYPES, type LeadStatus, type LeadType } from "@/models/lead.model";
import VisitorsChart from "@/components/admin/VisitorsChart";
import StatusSelect from "@/components/admin/StatusSelect";

export const dynamic = "force-dynamic";

const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });

function Delta({ now, before, label }: { now: number; before: number; label: string }) {
  if (before === 0) return <p className="mt-1 text-xs text-slate-400">No data for previous {label}</p>;
  const pct = ((now - before) / before) * 100;
  const up = pct >= 0;
  return (
    <p className={`mt-1 text-xs font-medium ${up ? "text-emerald-700" : "text-rose-700"}`}>
      {up ? "▲" : "▼"} {Math.abs(pct).toFixed(0)}% <span className="font-normal text-slate-500">vs previous {label}</span>
    </p>
  );
}

function StatTile({ label, value, children }: { label: string; value: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-semibold text-ink tabular-nums">{value}</p>
      {children}
    </div>
  );
}

function RankTable({ title, rows, empty }: { title: string; rows: { _id: string; count: number }[]; empty: string }) {
  const max = Math.max(1, ...rows.map((r) => r.count));
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="mb-3 text-sm font-semibold text-ink">{title}</h2>
      {rows.length === 0 ? (
        <p className="text-sm text-slate-400">{empty}</p>
      ) : (
        <ul className="space-y-2">
          {rows.map((r) => (
            <li key={r._id} className="text-sm">
              <div className="flex justify-between gap-3">
                <span className="truncate">{r._id}</span>
                <span className="tabular-nums text-slate-500">{r.count.toLocaleString()}</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-brand-soft">
                <div className="h-1.5 rounded-full bg-brand" style={{ width: `${(r.count / max) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function href(f: LeadFilters, patch: Partial<Record<keyof LeadFilters, string | number | undefined>>) {
  const params = new URLSearchParams();
  const merged = { days: f.days, type: f.type, status: f.status, q: f.q, page: f.page, ...patch };
  for (const [k, v] of Object.entries(merged)) if (v !== undefined && v !== "" && !(k === "page" && v === 1)) params.set(k, String(v));
  return `?${params.toString()}`;
}

const TYPE_LABEL: Record<LeadType, string> = { contact: "Contact form", newsletter: "Newsletter", chat: "Chat" };

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await requireAdmin();
  const f = parseFilters(await searchParams);
  const d = await getDashboard(f);
  const period = `${f.days} days`;
  const hotLeads = d.leads.counts.contact + d.leads.counts.chat;
  const conversion = d.traffic.current.visitors ? (hotLeads / d.traffic.current.visitors) * 100 : 0;
  const pages = Math.max(1, Math.ceil(d.rowsTotal / PAGE_SIZE));
  const exportHref = `/admin/leads/export${href(f, { page: undefined })}`;

  return (
    <main className="container-site py-8">
      <header className="mb-8 flex flex-wrap items-center gap-4">
        <div>
          <p className="eyebrow text-brand">Driansh Admin</p>
          <h1 className="heading-2 text-ink">Leads &amp; visitors</h1>
        </div>
        <nav className="ml-auto flex flex-wrap items-center gap-2" aria-label="Date range">
          {RANGES.map((r) => (
            <Link
              key={r}
              href={href(f, { days: r, page: 1 })}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${r === f.days ? "bg-ink text-white" : "border border-slate-200 bg-white hover:border-brand"}`}
            >
              {r} days
            </Link>
          ))}
          <form action={logout}>
            <button className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm hover:border-brand">Sign out</button>
          </form>
        </nav>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Summary">
        <StatTile label="Unique visitors" value={compact.format(d.traffic.current.visitors)}>
          <Delta now={d.traffic.current.visitors} before={d.traffic.previous.visitors} label={period} />
        </StatTile>
        <StatTile label="Page views" value={compact.format(d.traffic.current.views)}>
          <Delta now={d.traffic.current.views} before={d.traffic.previous.views} label={period} />
        </StatTile>
        <StatTile label="Leads" value={compact.format(d.leads.total)}>
          <Delta now={d.leads.total} before={d.leads.previousTotal} label={period} />
          <p className="mt-1 text-xs text-slate-500">
            {d.leads.counts.contact} form · {d.leads.counts.chat} chat · {d.leads.counts.newsletter} newsletter
          </p>
        </StatTile>
        <StatTile label="Visitor → lead rate" value={`${conversion.toFixed(1)}%`}>
          <p className="mt-1 text-xs text-slate-500">Contact form + chat leads ÷ visitors</p>
        </StatTile>
      </section>

      <section className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-ink">Unique visitors per day</h2>
        <p className="mb-2 text-xs text-slate-500">
          {d.range.from} → {d.range.to} (UTC). Search terms from Google are in Search Console.
        </p>
        <VisitorsChart data={d.series} />
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-3">
        <RankTable title="Top pages" rows={d.topPages} empty="No page views yet." />
        <RankTable title="Traffic sources" rows={d.topReferrers} empty="No visits yet." />
        <RankTable title="Where leads came from" rows={d.topLeadSources} empty="No leads yet." />
      </section>

      <section className="mt-8">
        <div className="mb-3 flex flex-wrap items-end gap-3">
          <h2 className="heading-3 mr-auto text-ink">
            Leads <span className="text-base font-normal text-slate-500">({d.rowsTotal.toLocaleString()})</span>
          </h2>
          <form className="flex flex-wrap gap-2" role="search">
            <input type="hidden" name="days" value={f.days} />
            <input
              name="q"
              defaultValue={f.q}
              placeholder="Search name, email, company…"
              className="w-56 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm"
            />
            <select name="type" defaultValue={f.type ?? ""} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm">
              <option value="">All types</option>
              {LEAD_TYPES.map((t) => (
                <option key={t} value={t}>{TYPE_LABEL[t]}</option>
              ))}
            </select>
            <select name="status" defaultValue={f.status ?? ""} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm capitalize">
              <option value="">All statuses</option>
              {LEAD_STATUSES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <button className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-white">Filter</button>
            <a href={exportHref} className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm hover:border-brand">
              Export CSV
            </a>
          </form>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Source</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 align-top">
              {d.rows.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-slate-400">
                    No leads match these filters.
                  </td>
                </tr>
              )}
              {d.rows.map((lead) => (
                <tr key={String(lead._id)}>
                  <td className="px-4 py-3 whitespace-nowrap text-slate-500">
                    {new Date(lead.createdAt).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })}
                  </td>
                  <td className="px-4 py-3">{TYPE_LABEL[lead.type as LeadType]}</td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-ink">{lead.name || "—"}</p>
                    {lead.email && <a href={`mailto:${lead.email}`} className="block text-brand hover:underline">{lead.email}</a>}
                    {lead.phone && <a href={`tel:${lead.phone}`} className="block text-slate-500">{lead.phone}</a>}
                    {lead.company && <p className="text-slate-500">{lead.company}</p>}
                  </td>
                  <td className="max-w-xs px-4 py-3 text-slate-600">
                    <p className="line-clamp-3 whitespace-pre-line">{lead.message || "—"}</p>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">
                    {lead.source?.page && <p>Page: {lead.source.page}</p>}
                    {lead.source?.landingPage && lead.source.landingPage !== lead.source.page && <p>Landed: {lead.source.landingPage}</p>}
                    {lead.source?.referrer && <p className="truncate">From: {lead.source.referrer}</p>}
                    {lead.source?.utmSource && (
                      <p>
                        Campaign: {lead.source.utmSource}
                        {lead.source.utmCampaign ? ` / ${lead.source.utmCampaign}` : ""}
                      </p>
                    )}
                    {lead.source?.gclid && <p>Google Ads click</p>}
                  </td>
                  <td className="px-4 py-3">
                    <StatusSelect id={String(lead._id)} status={lead.status as LeadStatus} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {pages > 1 && (
          <nav className="mt-4 flex items-center justify-center gap-3 text-sm" aria-label="Pagination">
            {f.page > 1 && <Link href={href(f, { page: f.page - 1 })} className="rounded-full border border-slate-200 bg-white px-4 py-1.5">Previous</Link>}
            <span className="text-slate-500">Page {f.page} of {pages}</span>
            {f.page < pages && <Link href={href(f, { page: f.page + 1 })} className="rounded-full border border-slate-200 bg-white px-4 py-1.5">Next</Link>}
          </nav>
        )}

        <form action={importLegacyLeads} className="mt-8 text-xs text-slate-500">
          Contact-form and newsletter records saved before this dashboard existed can be imported once:{" "}
          <button className="font-medium text-brand underline">Import older records</button>
        </form>
      </section>
    </main>
  );
}
