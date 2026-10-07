import {
  Activity,
  Calendar,
  ChevronDown,
  Download,
  Globe,
  Inbox,
  MessageCircle,
  RefreshCw,
  Star,
  Tag,
  TrendingUp,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AppWindow, BarChart, Bubble, ChatThread, FloatingTag, ListRows, StatTiles, VisualStage } from "./primitives";

/*
 * Original illustrations for the EngageOne "Analyse" pages (reports and live view).
 * All sample data is generic and made up.
 */

const WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/** Report toolbar: date range, grouping, business-hours toggle and download. */
function FilterBar({ scope, groupBy = "Week" }: { scope?: string; groupBy?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-100 px-4 py-3 text-[10px]">
      {scope && (
        <span className="flex items-center gap-1 rounded-lg border border-slate-200 px-2 py-1 font-medium text-ink">
          {scope} <ChevronDown className="h-3 w-3 text-slate-400" />
        </span>
      )}
      <span className="flex items-center gap-1 rounded-lg border border-slate-200 px-2 py-1 text-ink">
        <Calendar className="h-3 w-3 text-slate-400" /> Last 30 days
      </span>
      <span className="flex overflow-hidden rounded-lg border border-slate-200">
        {["Day", "Week", "Month"].map((option) => (
          <span key={option} className={cn("px-2 py-1", option === groupBy ? "bg-brand-solid text-white" : "text-slate-500")}>
            {option}
          </span>
        ))}
      </span>
      <span className="flex items-center gap-1.5 text-slate-500">
        Business hours
        <span className="flex h-3.5 w-6 items-center rounded-full bg-brand-solid p-0.5">
          <span className="ml-auto h-2.5 w-2.5 rounded-full bg-white" />
        </span>
      </span>
      <span className="ml-auto flex items-center gap-1 rounded-lg bg-brand-soft px-2 py-1 font-semibold text-brand">
        <Download className="h-3 w-3" /> Download
      </span>
    </div>
  );
}

/** Compact table of report rows. */
function MetricTable({ columns, rows }: { columns: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="p-4">
      <div className="overflow-hidden rounded-xl border border-slate-100 text-[11px]">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-2 bg-surface px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
          {columns.map((column) => (
            <span key={column} className="truncate">
              {column}
            </span>
          ))}
        </div>
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-2 border-t border-slate-100 px-3 py-2 text-ink">
            {row.map((cell, j) => (
              <span key={j} className={cn("truncate", j === 0 && "font-medium")}>
                {cell}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Coloured dot + label, used for labels and statuses. */
function Dot({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={cn("h-2 w-2 shrink-0 rounded-full", color)} />
      {children}
    </span>
  );
}

/** Row of selectable pills, e.g. metrics or entities. */
function PillRow({ items, active = 0 }: { items: string[]; active?: number }) {
  return (
    <div className="flex flex-wrap gap-1.5 px-4 pt-4 text-[10px]">
      {items.map((item, i) => (
        <span
          key={item}
          className={cn(
            "rounded-full border px-2.5 py-1 font-medium",
            i === active ? "border-brand bg-brand-solid text-white" : "border-slate-200 text-slate-500"
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/* ---------- Agent report ---------- */

export function AgentOverviewVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Agent report">
        <div className="flex items-center gap-2.5 px-4 pt-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">P</span>
          <div className="text-xs">
            <div className="font-semibold text-ink">Priya</div>
            <div className="text-[10px] text-slate-500">Support agent · Online</div>
          </div>
          <span className="ml-auto flex items-center gap-1 rounded-lg border border-slate-200 px-2 py-1 text-[10px] text-ink">
            Change agent <ChevronDown className="h-3 w-3 text-slate-400" />
          </span>
        </div>
        <StatTiles
          items={[
            { label: "Conversations", value: "128", trend: "+12%" },
            { label: "First response", value: "2m 14s", trend: "−18%" },
            { label: "Resolution time", value: "1h 05m" },
            { label: "Resolved", value: "117", trend: "+9%" },
          ]}
        />
        <BarChart values={[45, 62, 58, 80, 72, 30, 22]} labels={WEEK} highlight={3} />
      </AppWindow>
      <FloatingTag icon={RefreshCw}>Updated automatically</FloatingTag>
    </VisualStage>
  );
}

export function AgentFiltersVisual() {
  return (
    <AppWindow title="EngageOne · Agent report">
      <FilterBar scope="All agents" />
      <MetricTable
        columns={["Agent", "Conversations", "First response", "Resolution"]}
        rows={[
          ["Priya", "128", "2m 14s", "1h 05m"],
          ["Rahul", "112", "3m 40s", "1h 32m"],
          ["Anita", "96", "1m 58s", "48m"],
          ["Vikram", "74", "5m 10s", "2h 11m"],
        ]}
      />
    </AppWindow>
  );
}

/* ---------- Conversation report ---------- */

export function ConversationOverviewVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Conversation report">
        <StatTiles
          items={[
            { label: "Conversations", value: "1,284", trend: "+14%" },
            { label: "Incoming messages", value: "6,920" },
            { label: "Outgoing messages", value: "5,410" },
            { label: "First response", value: "3m 02s", trend: "−21%" },
          ]}
        />
        <BarChart values={[52, 70, 64, 88, 76, 40, 34]} labels={WEEK} highlight={3} />
      </AppWindow>
      <FloatingTag icon={TrendingUp}>Busiest day: Thursday</FloatingTag>
    </VisualStage>
  );
}

export function ConversationFiltersVisual() {
  return (
    <AppWindow title="EngageOne · Conversation report">
      <FilterBar groupBy="Day" />
      <PillRow items={["Conversations", "First response time", "Resolution time", "Resolution count"]} active={1} />
      <div className="px-4 pt-3 text-[10px] text-slate-500">First response time · business hours only</div>
      <div className="pt-2">
        <BarChart values={[60, 48, 52, 36, 30, 42, 28, 24, 32, 20]} highlight={9} />
      </div>
    </AppWindow>
  );
}

/* ---------- CSAT ---------- */

const EMOJIS = ["😞", "😕", "😐", "🙂", "😍"];

export function CsatSurveyVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Website chat">
        <ChatThread>
          <Bubble from="customer">Thanks, my order is sorted now!</Bubble>
          <Bubble from="agent">Glad I could help, Rahul. Have a great day!</Bubble>
          <Bubble from="system">Conversation resolved by Priya</Bubble>
          <div className="self-start rounded-2xl border border-slate-200 bg-card p-3 text-xs shadow-sm">
            <div className="font-semibold text-ink">How was your experience with us?</div>
            <div className="mt-2 flex gap-2 text-lg">
              {EMOJIS.map((emoji, i) => (
                <span
                  key={emoji}
                  className={cn("rounded-lg px-1", i === 4 ? "bg-brand-soft ring-2 ring-brand" : "opacity-60")}
                >
                  {emoji}
                </span>
              ))}
            </div>
            <div className="mt-2 rounded-lg border border-slate-200 px-2 py-1.5 text-[11px] text-slate-400">Tell us more (optional)</div>
          </div>
        </ChatThread>
      </AppWindow>
      <FloatingTag icon={Star}>Feedback collected automatically</FloatingTag>
    </VisualStage>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className={cn("h-3 w-3", n <= count ? "fill-amber-400 text-amber-400" : "text-slate-300")} />
      ))}
    </span>
  );
}

const RATING_SPLIT = [
  { stars: 5, share: "w-[68%]", label: "68%" },
  { stars: 4, share: "w-[20%]", label: "20%" },
  { stars: 3, share: "w-[7%]", label: "7%" },
  { stars: 2, share: "w-[3%]", label: "3%" },
  { stars: 1, share: "w-[2%]", label: "2%" },
];

export function CsatReportVisual() {
  return (
    <AppWindow title="EngageOne · CSAT report">
      <StatTiles
        items={[
          { label: "Responses", value: "342" },
          { label: "Satisfaction score", value: "92%", trend: "+4%" },
          { label: "Response rate", value: "64%" },
          { label: "Avg rating", value: "4.5 / 5" },
        ]}
      />
      <div className="grid gap-3 px-4 pb-4 sm:grid-cols-2">
        <div className="space-y-1.5 rounded-xl border border-slate-100 bg-surface p-3">
          {RATING_SPLIT.map(({ stars, share, label }) => (
            <div key={stars} className="flex items-center gap-2 text-[10px] text-slate-500">
              <Stars count={stars} />
              <span className="h-1.5 flex-1 rounded-full bg-card">
                <span className={cn("block h-1.5 rounded-full bg-amber-400", share)} />
              </span>
              <span className="w-7 text-right">{label}</span>
            </div>
          ))}
        </div>
        <ul className="space-y-1.5 text-[11px]">
          {[
            { name: "Rahul", stars: 5, text: "Quick and friendly help!" },
            { name: "Meera", stars: 4, text: "Solved on the first reply." },
            { name: "Arjun", stars: 3, text: "Took a while, but fixed." },
          ].map(({ name, stars, text }) => (
            <li key={name} className="rounded-xl border border-slate-100 px-3 py-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-ink">{name}</span>
                <Stars count={stars} />
              </div>
              <div className="truncate text-[10px] text-slate-500">{text}</div>
            </li>
          ))}
        </ul>
      </div>
    </AppWindow>
  );
}

/* ---------- Inbox report ---------- */

export function InboxOverviewVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Inbox report">
        <ListRows
          className="pb-0"
          rows={[
            { title: "Website chat", meta: "Live chat widget", badge: "486", icon: Globe, active: true },
            { title: "WhatsApp", meta: "Business number", badge: "352", icon: MessageCircle, tint: "bg-emerald-100 text-emerald-600" },
          ]}
        />
        <StatTiles
          items={[
            { label: "Conversations", value: "486" },
            { label: "First response", value: "1m 48s" },
            { label: "Resolution time", value: "42m" },
            { label: "Resolved", value: "451" },
          ]}
        />
        <BarChart values={[40, 55, 72, 66, 84, 38, 30]} labels={WEEK} highlight={4} />
      </AppWindow>
      <FloatingTag icon={Inbox}>Most active: Website chat</FloatingTag>
    </VisualStage>
  );
}

export function InboxFiltersVisual() {
  return (
    <AppWindow title="EngageOne · Inbox report">
      <FilterBar scope="All inboxes" groupBy="Month" />
      <MetricTable
        columns={["Inbox", "Conversations", "First response", "Resolution"]}
        rows={[
          ["Website chat", "486", "1m 48s", "42m"],
          ["WhatsApp", "352", "2m 30s", "55m"],
          ["Email", "210", "18m", "6h 10m"],
          ["Instagram", "98", "4m 05s", "1h 12m"],
        ]}
      />
    </AppWindow>
  );
}

/* ---------- Label report ---------- */

const LABELS = [
  { name: "billing", color: "bg-sky-500", count: "214" },
  { name: "delivery", color: "bg-amber-500", count: "167" },
  { name: "bug", color: "bg-rose-500", count: "92" },
  { name: "feedback", color: "bg-emerald-500", count: "61" },
];

export function LabelOverviewVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Label report">
        <div className="flex flex-wrap gap-1.5 px-4 pt-4 text-[10px]">
          {LABELS.map(({ name, color, count }, i) => (
            <span
              key={name}
              className={cn(
                "flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-medium",
                i === 0 ? "border-brand/40 bg-brand-soft text-ink" : "border-slate-200 text-slate-500"
              )}
            >
              <Dot color={color}>{name}</Dot>
              <span className="text-slate-400">{count}</span>
            </span>
          ))}
        </div>
        <StatTiles
          items={[
            { label: "Conversations", value: "214" },
            { label: "Messages", value: "1,106" },
            { label: "First response", value: "2m 50s" },
            { label: "Resolution time", value: "1h 20m" },
          ]}
        />
        <BarChart values={[50, 58, 46, 74, 90, 36, 28]} labels={WEEK} highlight={4} />
      </AppWindow>
      <FloatingTag icon={Tag}>Top label: billing</FloatingTag>
    </VisualStage>
  );
}

export function LabelFiltersVisual() {
  return (
    <AppWindow title="EngageOne · Label report">
      <FilterBar scope="All labels" />
      <MetricTable
        columns={["Label", "Conversations", "First response", "Resolution"]}
        rows={LABELS.map(({ name, color, count }, i) => [
          <Dot key={name} color={color}>
            {name}
          </Dot>,
          count,
          ["2m 50s", "3m 12s", "6m 40s", "1m 55s"][i],
          ["1h 20m", "2h 05m", "5h 30m", "38m"][i],
        ])}
      />
    </AppWindow>
  );
}

/* ---------- Team report ---------- */

export function TeamOverviewVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Team report">
        <PillRow items={["Sales", "Support", "Billing", "Onboarding"]} active={1} />
        <StatTiles
          items={[
            { label: "Conversations", value: "642", trend: "+8%" },
            { label: "Incoming messages", value: "3,180" },
            { label: "First response", value: "2m 36s" },
            { label: "Resolution time", value: "58m" },
          ]}
        />
        <BarChart values={[56, 68, 74, 62, 80, 44, 32]} labels={WEEK} highlight={4} />
      </AppWindow>
      <FloatingTag icon={Users}>Support team · 6 agents</FloatingTag>
    </VisualStage>
  );
}

export function TeamFiltersVisual() {
  return (
    <AppWindow title="EngageOne · Team report">
      <FilterBar scope="All teams" groupBy="Month" />
      <MetricTable
        columns={["Team", "Conversations", "First response", "Resolution"]}
        rows={[
          ["Support", "642", "2m 36s", "58m"],
          ["Sales", "418", "1m 52s", "35m"],
          ["Billing", "233", "4m 20s", "1h 46m"],
          ["Onboarding", "120", "3m 05s", "1h 10m"],
        ]}
      />
    </AppWindow>
  );
}

/* ---------- Live view ---------- */

const HEAT = ["bg-brand/10", "bg-brand/25", "bg-brand-solid/45", "bg-brand-solid/70", "bg-brand-solid"];
const HEATMAP = [
  [0, 1, 3, 4, 3, 2],
  [1, 2, 4, 4, 3, 1],
  [0, 2, 3, 2, 2, 1],
  [1, 3, 4, 3, 4, 2],
  [0, 1, 2, 2, 1, 0],
];

export function LiveConversationsVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Reports overview">
        <StatTiles
          items={[
            { label: "Open", value: "42" },
            { label: "Unattended", value: "7" },
            { label: "Unassigned", value: "5" },
            { label: "Pending", value: "3" },
          ]}
        />
        <div className="px-4 pb-4">
          <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">Conversation traffic</div>
          <div className="space-y-1 rounded-xl border border-slate-100 bg-surface p-3">
            {HEATMAP.map((row, r) => (
              <div key={r} className="flex items-center gap-1">
                <span className="w-7 text-[9px] text-slate-400">{WEEK[r]}</span>
                {row.map((level, c) => (
                  <span key={c} className={cn("h-3.5 flex-1 rounded", HEAT[level])} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </AppWindow>
      <FloatingTag icon={Activity}>Live · updates in real time</FloatingTag>
    </VisualStage>
  );
}

const AGENTS = [
  { name: "Priya", status: "Online", color: "bg-emerald-500" },
  { name: "Rahul", status: "Online", color: "bg-emerald-500" },
  { name: "Anita", status: "Busy", color: "bg-amber-500" },
  { name: "Vikram", status: "Offline", color: "bg-slate-300" },
];

export function LiveAgentStatusVisual() {
  return (
    <AppWindow title="EngageOne · Agent status">
      <div className="grid grid-cols-3 gap-2 p-4">
        {[
          { label: "Online", value: "8", color: "bg-emerald-500" },
          { label: "Busy", value: "3", color: "bg-amber-500" },
          { label: "Offline", value: "4", color: "bg-slate-300" },
        ].map(({ label, value, color }) => (
          <div key={label} className="rounded-xl border border-slate-100 bg-surface px-3 py-2">
            <div className="text-[10px] text-slate-500">
              <Dot color={color}>{label}</Dot>
            </div>
            <div className="text-lg font-semibold text-ink">{value}</div>
          </div>
        ))}
      </div>
      <ul className="space-y-1.5 px-4 pb-4">
        {AGENTS.map(({ name, status, color }) => (
          <li key={name} className="flex items-center gap-2.5 rounded-xl border border-slate-100 px-3 py-2 text-xs">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-brand-soft text-[11px] font-semibold text-brand">
              {name[0]}
              <span className={cn("absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-card", color)} />
            </span>
            <span className="font-medium text-ink">{name}</span>
            <span className="ml-auto text-[10px] text-slate-500">{status}</span>
          </li>
        ))}
      </ul>
    </AppWindow>
  );
}

export function LiveAgentLoadVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Conversations by agent">
        <MetricTable
          columns={["Agent", "Open", "Unattended", "Status"]}
          rows={[
            ["Priya", "9", "2", <Dot key="p" color="bg-emerald-500">Online</Dot>],
            ["Rahul", "7", "1", <Dot key="r" color="bg-emerald-500">Online</Dot>],
            ["Anita", "6", "0", <Dot key="a" color="bg-amber-500">Busy</Dot>],
            ["Meera", "4", "1", <Dot key="m" color="bg-emerald-500">Online</Dot>],
            ["Vikram", "2", "0", <Dot key="v" color="bg-slate-300">Offline</Dot>],
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Users}>Busiest agents first</FloatingTag>
    </VisualStage>
  );
}
