import {
  ArrowRightCircle,
  BarChart3,
  Bell,
  Bot,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Contact,
  Delete,
  Download,
  FileSearch,
  Filter,
  Gauge,
  Grid2x2,
  Hand,
  Headphones,
  History,
  Home,
  Inbox,
  KeyRound,
  LayoutDashboard,
  ListChecks,
  Mic,
  MicOff,
  MoreHorizontal,
  Pause,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneOutgoing,
  Play,
  Radio,
  Search,
  Shield,
  ShieldCheck,
  Target,
  Users2,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import { AppWindow, BarChart, FloatingTag, ListRows, StatTiles, VisualStage } from "../engageone/primitives";

/*
 * Illustrations for the Contact Center product page. They reuse the EngageOne
 * mock-up primitives so both product pages are drawn the same way, and every
 * value below is invented: agents are numbered, customer numbers use the
 * reserved 555 01xx range and tenants use example.com. Nothing here comes from
 * a real account, and all of it is decorative.
 */

/* ---------- small building blocks used by more than one visual ---------- */

/** Coloured status dot + label, e.g. an agent's state on the live floor. */
function StateDot({ tone }: { tone: "ready" | "call" | "break" | "off" }) {
  const tones: Record<string, string> = {
    ready: "bg-emerald-500",
    call: "bg-brand-solid",
    break: "bg-amber-500",
    off: "bg-slate-400",
  };
  return <span className={`h-2 w-2 shrink-0 rounded-full ${tones[tone]}`} />;
}

/** Row of small outline chips, e.g. the channels or the dialer modes. */
function Chips({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-slate-200 bg-surface px-2.5 py-1 text-[10px] font-medium text-slate-600"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/** One of the round call controls under an active call. */
function CallKey({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl border border-slate-100 bg-surface py-2">
      <Icon className="h-3.5 w-3.5 text-brand" />
      <span className="text-[9px] font-medium text-slate-600">{label}</span>
    </div>
  );
}

/** A labelled dropdown, as used by the wrap-up panel. */
function SelectField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 text-[11px]">
      <span className="w-24 shrink-0 text-slate-500">{label}</span>
      <span className="flex flex-1 items-center justify-between truncate rounded-lg border border-slate-200 px-2.5 py-1.5 text-ink">
        {value}
        <span className="text-slate-400">▾</span>
      </span>
    </div>
  );
}

/* ----------------------------- the visuals ----------------------------- */

/** The agent workspace: one inbox for every channel, with a live call open. */
export function AgentWorkspaceVisual() {
  const tabs = [
    { label: "All", count: 24, on: true },
    { label: "Voice", count: 9 },
    { label: "WhatsApp", count: 6 },
    { label: "Live Chat", count: 5 },
    { label: "Email", count: 4 },
  ];

  const rows = [
    { title: "+1 555 0142", meta: "Voice · Renewals queue", tag: "Live 02:14", live: true },
    { title: "+1 555 0168", meta: "WhatsApp · Order update", tag: "2m" },
    { title: "Website visitor", meta: "Live Chat · Pricing question", tag: "6m" },
    { title: "+1 555 0109", meta: "Voice · Callback at 4:30 PM", tag: "Due" },
  ];

  return (
    <VisualStage>
      <AppWindow title="Agent workspace · Inbox">
        <div className="flex items-center gap-1.5 overflow-hidden border-b border-slate-100 px-4 py-2.5">
          {tabs.map((tab) => (
            <span
              key={tab.label}
              className={`flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium ${
                tab.on ? "bg-brand-soft text-brand" : "text-slate-500"
              }`}
            >
              {tab.label}
              <span className={tab.on ? "font-semibold" : "text-slate-400"}>{tab.count}</span>
            </span>
          ))}
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-[1.4fr_1fr]">
          <ul className="space-y-1.5">
            {rows.map((row) => (
              <li
                key={row.title}
                className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 ${
                  row.live ? "border-brand/30 bg-brand-soft/60" : "border-slate-100 bg-card"
                }`}
              >
                <StateDot tone={row.live ? "call" : "off"} />
                <span className="min-w-0">
                  <span className="block truncate text-xs font-medium text-ink">{row.title}</span>
                  <span className="block truncate text-[10px] text-slate-500">{row.meta}</span>
                </span>
                <span
                  className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                    row.live ? "bg-brand-soft text-brand" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {row.tag}
                </span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl border border-slate-100 bg-surface p-3">
            <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Customer</div>
            <div className="mt-1 text-xs font-semibold text-ink">+1 555 0142</div>
            <div className="text-[10px] text-slate-500">Renewals · Lead #40218</div>
            <div className="mt-3 space-y-1.5 text-[10px] text-slate-600">
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Campaign</span>
                <span className="truncate text-ink">Renewal reminders</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Attempt</span>
                <span className="text-ink">2 of 4</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Last outcome</span>
                <span className="text-ink">No answer</span>
              </div>
            </div>
            <Chips items={["Renewal", "Priority"]} className="mt-3" />
          </div>
        </div>
      </AppWindow>
      <FloatingTag icon={Headphones}>Voice, chat and email in one list</FloatingTag>
    </VisualStage>
  );
}

/** After-call work: the disposition tree and a scheduled callback. */
export function WrapUpVisual() {
  return (
    <VisualStage>
      <AppWindow title="After call work · 00:28">
        <div className="space-y-2.5 p-4">
          <SelectField label="Disposition" value="Contacted" />
          <SelectField label="Sub" value="Interested" />
          <SelectField label="Sub-sub" value="Send quote" />
          <div className="flex items-center gap-2 text-[11px]">
            <span className="w-24 shrink-0 text-slate-500">Comment</span>
            <span className="flex-1 truncate rounded-lg border border-slate-200 px-2.5 py-1.5 text-ink">
              Wants the 24-month plan
            </span>
          </div>
        </div>

        <div className="mx-4 mb-4 rounded-xl border border-slate-100 bg-surface p-3">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
            <CalendarClock className="h-3.5 w-3.5" /> Callback
          </div>
          <div className="mt-1.5 flex items-center justify-between text-[11px]">
            <span className="text-ink">Tomorrow · 4:30 PM</span>
            <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-semibold text-brand">
              Assigned to me
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3 text-[10px] text-slate-500">
          <span>Auto-disposition in 00:32 if left blank</span>
          <span className="rounded-lg bg-brand-solid px-3 py-1.5 text-[11px] font-semibold text-white">Save</span>
        </div>
      </AppWindow>
      <FloatingTag icon={CheckCircle2}>No call closes without an outcome</FloatingTag>
    </VisualStage>
  );
}

/** The admin console: what a supervisor sets up before a campaign runs. */
export function AdminConsoleVisual() {
  return (
    <VisualStage>
      <AppWindow title="Admin · Operations">
        <ListRows
          rows={[
            { title: "Campaigns", meta: "Renewal reminders · Predictive · Running", badge: "12", icon: Target, active: true },
            { title: "Processes", meta: "Renewals, Support, Collections", badge: "7", icon: Workflow },
            { title: "Lead sets", meta: "Upload, SFTP or blob · reset, pause, flush", badge: "24", icon: ListChecks },
            { title: "IVR & call flows", meta: "Menus, prompts, business hours", badge: "9", icon: Radio },
            { title: "DID & DNC", meta: "Inbound numbers and suppression lists", badge: "On", icon: Shield },
            { title: "Dispositions", meta: "Three levels with auto-disposition", badge: "36", icon: ClipboardList },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Filter}>Set up once, run every campaign</FloatingTag>
    </VisualStage>
  );
}

/** The dialer modes a process can run in. */
export function DialerVisual() {
  const modes = [
    { title: "Predictive", meta: "Paces ahead of free agents", icon: Target },
    { title: "Progressive", meta: "One call per free agent", icon: ArrowRightCircle },
    { title: "Preview", meta: "Agent reads the lead, then dials", icon: FileSearch },
    { title: "Manual", meta: "Agent dials from the keypad", icon: Hand },
    { title: "Inbound & IVR", meta: "Queues, skills and menus", icon: Radio },
    { title: "Voice bot", meta: "Speech bot answers and routes", icon: Bot },
  ];

  return (
    <VisualStage>
      <AppWindow title="Process · Dialer mode">
        <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2">
          {modes.map(({ title, meta, icon: Icon }, i) => (
            <div
              key={title}
              className={`flex items-start gap-2 rounded-xl border px-3 py-2 ${
                i === 0 ? "border-brand/30 bg-brand-soft/60" : "border-slate-100 bg-card"
              }`}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <Icon className="h-3 w-3" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-xs font-medium text-ink">{title}</span>
                <span className="block text-[10px] leading-tight text-slate-500">{meta}</span>
              </span>
            </div>
          ))}
        </div>
        <div className="mx-4 mb-4 flex items-center justify-between rounded-xl bg-surface px-3 py-2 text-[10px]">
          <span className="text-slate-500">Re-attempt on busy / no answer</span>
          <span className="font-semibold text-ink">4 tries · 2h apart</span>
        </div>
      </AppWindow>
      <FloatingTag icon={PhoneCall}>Six ways to reach a list</FloatingTag>
    </VisualStage>
  );
}

/** The live floor a supervisor watches, and what they can do about it. */
export function LiveFloorVisual() {
  const agents = [
    { name: "Agent 04", meta: "Renewals · 02:14", state: "call" as const, label: "On call" },
    { name: "Agent 11", meta: "Support · waiting 00:46", state: "ready" as const, label: "Ready" },
    { name: "Agent 18", meta: "Tea break · 04:02", state: "break" as const, label: "Break" },
    { name: "Agent 23", meta: "Collections · 00:58", state: "call" as const, label: "On call" },
  ];

  return (
    <VisualStage>
      <AppWindow title="Live monitor">
        <StatTiles
          items={[
            { label: "Agents", value: "42" },
            { label: "Ready", value: "18" },
            { label: "On call", value: "15" },
            { label: "Occupancy", value: "76%" },
          ]}
        />
        <ul className="space-y-1.5 px-4">
          {agents.map((agent) => (
            <li key={agent.name} className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-card px-3 py-2">
              <StateDot tone={agent.state} />
              <span className="min-w-0">
                <span className="block truncate text-xs font-medium text-ink">{agent.name}</span>
                <span className="block truncate text-[10px] text-slate-500">{agent.meta}</span>
              </span>
              <span className="ml-auto shrink-0 text-[10px] font-medium text-slate-500">{agent.label}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 p-4">
          <Chips items={["Listen", "Whisper", "Coach", "Barge", "Conference"]} />
        </div>
      </AppWindow>
      <FloatingTag icon={Mic}>Step into any live call</FloatingTag>
    </VisualStage>
  );
}

/** Reports: the numbers a contact center is run on. */
export function ReportsVisual() {
  return (
    <VisualStage>
      <AppWindow title="Reports · Today">
        <StatTiles
          items={[
            { label: "Calls handled", value: "4,820" },
            { label: "Connect rate", value: "62%" },
            { label: "Avg handle", value: "3m 42s" },
            { label: "Answered in SLA", value: "92%" },
          ]}
        />
        <BarChart
          values={[28, 44, 62, 78, 71, 55, 83, 47]}
          labels={["9", "10", "11", "12", "1", "2", "3", "4"]}
          highlight={6}
        />
      </AppWindow>
      <FloatingTag icon={BarChart3}>Hourly, daily and per agent</FloatingTag>
    </VisualStage>
  );
}

/** Tenants, roles and the access rules around them. */
export function AccessVisual() {
  return (
    <VisualStage>
      <AppWindow title="Super admin · Business groups">
        <ListRows
          rows={[
            { title: "acme.example.com", meta: "Role permissions · SSO profile", badge: "Active", icon: Building2, active: true },
            { title: "northwind.example.com", meta: "Role permissions", badge: "Active", icon: Building2 },
            { title: "Roles", meta: "Agent, Team Lead, Supervisor, QA, Admin", icon: Users2 },
            { title: "Single sign-on", meta: "SAML, or username and password", badge: "On", icon: KeyRound },
            { title: "Audit log", meta: "Who changed what, and when", icon: FileSearch },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={ShieldCheck}>One platform, separate tenants</FloatingTag>
    </VisualStage>
  );
}

/** Breaks and adherence, for the workforce section. */
export function BreaksVisual() {
  return (
    <VisualStage>
      <AppWindow title="My day">
        <StatTiles
          items={[
            { label: "Logged in", value: "6h 12m" },
            { label: "Talk time", value: "3h 48m" },
            { label: "Calls", value: "64" },
            { label: "Avg talk", value: "3m 34s" },
          ]}
        />
        <ListRows
          rows={[
            { title: "Tea break", meta: "11:05 – 11:20 · 15m", badge: "Closed", icon: Clock3 },
            { title: "Lunch", meta: "13:30 – 14:00 · 30m", badge: "Closed", icon: Clock3 },
            { title: "Training", meta: "16:00 · scheduled", icon: Headphones },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Clock3}>Break reasons your team actually uses</FloatingTag>
    </VisualStage>
  );
}

/* ------------------------- the full workspace shell ------------------------- */

/*
 * The screens below follow the real agent and admin pages, with every record
 * replaced: the agent is "Agent 1042", queues and campaigns are named after
 * what they do, and numbers stay in the reserved +1 555 01xx range.
 */

const RAIL = [
  { icon: Home, label: "Home", on: true },
  { icon: Inbox, label: "Inbox", badge: "3" },
  { icon: Contact, label: "Contacts" },
  { icon: History, label: "History" },
  { icon: BarChart3, label: "Reports" },
];

/** The left navigation rail of the agent portal. */
function Rail() {
  return (
    <div className="hidden w-14 shrink-0 flex-col items-center gap-1 border-r border-slate-100 bg-surface py-3 sm:flex">
      {RAIL.map(({ icon: Icon, label, badge, on }) => (
        <div
          key={label}
          className={`relative flex w-11 flex-col items-center gap-0.5 rounded-lg py-1.5 ${
            on ? "bg-brand-soft text-brand" : "text-slate-500"
          }`}
        >
          <Icon className="h-3.5 w-3.5" />
          <span className="text-[8px] font-medium">{label}</span>
          {badge && (
            <span className="absolute right-1.5 top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-rose-500 text-[7px] font-bold text-white">
              {badge}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

/** The app bar: availability, the session timer and global search. */
function TopBar() {
  return (
    <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
      <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Ready
      </span>
      <span className="hidden items-center gap-1 rounded-full bg-surface px-2 py-0.5 text-[9px] font-medium text-slate-600 sm:flex">
        <Clock3 className="h-2.5 w-2.5" /> 0:29:54
      </span>
      <span className="ml-1 flex min-w-0 flex-1 items-center gap-1 rounded-lg border border-slate-200 px-2 py-1 text-[9px] text-slate-400">
        <Search className="h-2.5 w-2.5 shrink-0" />
        <span className="truncate">Search contacts, conversations, tickets…</span>
      </span>
      <span className="relative hidden text-slate-400 sm:block">
        <Bell className="h-3.5 w-3.5" />
        <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-rose-500 text-[6px] font-bold text-white">
          3
        </span>
      </span>
      <span className="flex items-center gap-1.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-soft text-[8px] font-bold text-brand">
          A
        </span>
        <span className="hidden leading-none sm:block">
          <span className="block text-[9px] font-semibold text-ink">Agent 1042</span>
          <span className="block text-[7px] uppercase tracking-wide text-slate-400">Agent</span>
        </span>
      </span>
    </div>
  );
}

const KEYPAD = [
  ["1", ""], ["2", "ABC"], ["3", "DEF"],
  ["4", "GHI"], ["5", "JKL"], ["6", "MNO"],
  ["7", "PQRS"], ["8", "TUV"], ["9", "WXYZ"],
  ["*", ""], ["0", "+"], ["#", ""],
];

/** Agent status card, dial pad and queue list -- the agent's left column. */
function AgentColumn({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full shrink-0 space-y-2 sm:w-48">
      <div className="rounded-xl border border-slate-100 bg-card p-2.5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[8px] font-semibold uppercase tracking-wide text-slate-400">Agent status</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-soft text-[9px] font-bold text-brand">
            A
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[11px] font-semibold text-ink">Agent 1042</span>
            <span className="block truncate text-[8px] text-slate-500">1042 | Renewal_Campaign</span>
          </span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1">
          {["Online", "Break", "Reserve", "Offline"].map((s, i) => (
            <span
              key={s}
              className={`rounded-md border px-1.5 py-1 text-center text-[8px] font-medium ${
                i === 0 ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-slate-200 text-slate-500"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {!compact && (
        <div className="rounded-xl border border-slate-100 bg-card p-2.5">
          <div className="mb-1.5 text-[8px] font-semibold uppercase tracking-wide text-slate-400">Dial pad</div>
          <div className="mb-1.5 flex items-center gap-1 rounded-lg border border-slate-200 px-1.5 py-1">
            <span className="text-[9px] font-medium text-slate-600">+1</span>
            <span className="flex-1 text-[9px] text-slate-400">Enter number…</span>
            <Delete className="h-2.5 w-2.5 text-slate-300" />
          </div>
          <div className="grid grid-cols-3 gap-1">
            {KEYPAD.map(([digit, letters]) => (
              <span key={digit} className="rounded-md border border-slate-200 py-1 text-center leading-none">
                <span className="block text-[10px] font-semibold text-ink">{digit}</span>
                <span className="block text-[6px] tracking-wide text-slate-400">{letters || " "}</span>
              </span>
            ))}
          </div>
          <div className="mt-1.5 flex items-center justify-center gap-1 rounded-lg bg-emerald-600 py-1.5 text-[9px] font-semibold text-white">
            <Phone className="h-2.5 w-2.5" /> Redial
          </div>
        </div>
      )}

      <div className="rounded-xl border border-slate-100 bg-card p-2.5">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[8px] font-semibold uppercase tracking-wide text-slate-400">My queues</span>
          <span className="text-[8px] font-medium text-brand">View all</span>
        </div>
        {[
          { name: "Support_Inbound", agents: "2", waiting: "3", live: false },
          { name: "Sales_Manual_Outbound", agents: "2", waiting: "0", live: true },
        ].map((q) => (
          <div key={q.name} className="flex items-center gap-1.5 py-1">
            <span className={`h-1.5 w-1.5 rounded-full ${q.live ? "bg-emerald-500" : "bg-slate-400"}`} />
            <span className="min-w-0 flex-1 truncate text-[9px] text-ink">{q.name}</span>
            <span className="shrink-0 text-[8px] text-slate-500">
              {q.agents} · {q.waiting}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const CONVERSATIONS = [
  { title: "+1 555 0142", meta: "Outbound · 1:05", tag: "Answered", tone: "ok", on: true },
  { title: "+1 555 0168", meta: "Outbound", tag: "No answer", tone: "warn" },
  { title: "+1 555 0109", meta: "Outbound · 0:19", tag: "Callback", tone: "ok" },
  { title: "Website visitor", meta: "Live Chat · Pricing", tag: "Open", tone: "muted" },
  { title: "+1 555 0133", meta: "Inbound · 2:41", tag: "Answered", tone: "ok" },
];

/** The whole agent home screen: rail, app bar, agent column, inbox. */
export function AgentHomeVisual() {
  return (
    <VisualStage className="max-w-5xl">
      <AppWindow title="Agent workspace · Home" className="max-w-5xl">
        <div className="flex">
          <Rail />
          <div className="min-w-0 flex-1">
            <TopBar />
            <div className="flex gap-2.5 p-2.5">
              <AgentColumn />

              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-end justify-between gap-2">
                  <div>
                    <div className="text-sm font-bold text-ink">Agent Workspace</div>
                    <div className="text-[9px] text-slate-500">Handle customer conversations across all channels</div>
                  </div>
                  <div className="hidden gap-1.5 lg:flex">
                    {[
                      { label: "My Active Calls", value: "1", icon: Phone, tint: "text-brand" },
                      { label: "My Open Chats", value: "4", icon: Inbox, tint: "text-violet-600" },
                      { label: "Missed Today", value: "0", icon: PhoneIncoming, tint: "text-rose-500" },
                      { label: "Resolved Today", value: "38", icon: CheckCircle2, tint: "text-emerald-600" },
                    ].map(({ label, value, icon: Icon, tint }) => (
                      <div key={label} className="flex items-center gap-1.5 rounded-lg border border-slate-100 bg-card px-2 py-1.5">
                        <Icon className={`h-3 w-3 ${tint}`} />
                        <span className="leading-none">
                          <span className="block text-[11px] font-bold text-ink">{value}</span>
                          <span className="block text-[7px] text-slate-500">{label}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-2 flex items-center gap-1.5 overflow-hidden">
                  {[
                    ["All", "75", true],
                    ["Voice", "50"],
                    ["WhatsApp", "1"],
                    ["Live Chat", "0"],
                    ["Email", "23"],
                    ["Other", "1"],
                  ].map(([label, count, on]) => (
                    <span
                      key={label as string}
                      className={`flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-medium ${
                        on ? "bg-brand-soft text-brand" : "text-slate-500"
                      }`}
                    >
                      {label} <span className="text-slate-400">({count})</span>
                    </span>
                  ))}
                </div>

                <div className="grid gap-2 lg:grid-cols-[1fr_200px]">
                  <ul className="space-y-1">
                    {CONVERSATIONS.map((c) => (
                      <li
                        key={c.title + c.meta}
                        className={`flex items-center gap-2 rounded-lg border px-2 py-1.5 ${
                          c.on ? "border-brand/30 bg-brand-soft/60" : "border-slate-100 bg-card"
                        }`}
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface">
                          <PhoneOutgoing className="h-2.5 w-2.5 text-slate-500" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[10px] font-medium text-ink">{c.title}</span>
                          <span className="block truncate text-[8px] text-slate-500">{c.meta}</span>
                        </span>
                        <span
                          className={`shrink-0 rounded-full px-1.5 py-0.5 text-[7px] font-semibold ${
                            c.tone === "ok"
                              ? "bg-emerald-50 text-emerald-700"
                              : c.tone === "warn"
                                ? "bg-amber-50 text-amber-800"
                                : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {c.tag}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* The third column of the real screen: the selected call. */}
                  <div className="hidden rounded-lg border border-slate-100 bg-surface p-2 lg:block">
                    <div className="flex items-center gap-1.5">
                      <PhoneOutgoing className="h-2.5 w-2.5 text-emerald-700" />
                      <span className="text-[10px] font-semibold text-ink">+1 555 0142</span>
                      <span className="ml-auto rounded-full bg-emerald-50 px-1.5 py-0.5 text-[7px] font-semibold text-emerald-700">
                        Answered
                      </span>
                    </div>
                    <div className="mt-2 space-y-1">
                      {[
                        ["Direction", "Outbound"],
                        ["Queue", "Sales_Manual"],
                        ["Campaign", "Renewal"],
                        ["Talk time", "1:05"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-2 text-[8px]">
                          <span className="text-slate-500">{k}</span>
                          <span className="truncate font-medium text-ink">{v}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 rounded-md border border-slate-200 bg-card px-1.5 py-1">
                      <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand-solid">
                        <Play className="h-2 w-2 text-white" />
                      </span>
                      <span className="text-[8px] text-ink">Recording · 1:07</span>
                    </div>
                    <div className="mt-2 rounded-md bg-brand-solid py-1 text-center text-[8px] font-semibold text-white">
                      Call back
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppWindow>
      <FloatingTag icon={LayoutDashboard}>One home screen for the whole shift</FloatingTag>
    </VisualStage>
  );
}

/** The call detail pane: what the agent reads about a finished call. */
export function CallDetailVisual() {
  const facts = [
    ["Direction", "Outbound"],
    ["Hangup cause", "Answered"],
    ["Phone number", "+1 555 0142"],
    ["Dialed by", "Agent 1042"],
    ["Queue", "Sales_Manual_Outbound"],
    ["Campaign", "Renewal_Campaign"],
    ["Talk time", "1:05"],
    ["Total duration", "1:08"],
  ];

  return (
    <VisualStage>
      <AppWindow title="Call details">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
            <PhoneOutgoing className="h-3 w-3 text-emerald-700" />
          </span>
          <span className="text-xs font-semibold text-ink">+1 555 0142</span>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">Answered</span>
          <span className="ml-auto text-[9px] text-slate-500">Outbound · 1:05</span>
        </div>

        <div className="flex flex-wrap gap-1.5 px-4 pt-3">
          {["Call back", "Add to contacts", "Add tag", "Full history"].map((a, i) => (
            <span
              key={a}
              className={`rounded-lg px-2 py-1 text-[9px] font-semibold ${
                i === 0 ? "bg-brand-solid text-white" : "border border-slate-200 text-slate-600"
              }`}
            >
              {a}
            </span>
          ))}
        </div>

        <div className="mx-4 mt-2.5 flex items-center gap-2 rounded-xl border border-slate-100 bg-surface px-2.5 py-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-solid">
            <Play className="h-2.5 w-2.5 text-white" />
          </span>
          <span className="text-[10px] text-ink">Recording · 1:07</span>
          <Download className="ml-auto h-3 w-3 text-slate-400" />
        </div>

        <div className="grid gap-2 p-4 sm:grid-cols-[1.3fr_1fr]">
          <div className="rounded-xl border border-slate-100 p-2.5">
            <div className="mb-1.5 text-[8px] font-semibold uppercase tracking-wide text-slate-400">Call information</div>
            <div className="space-y-1">
              {facts.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-2 text-[9px]">
                  <span className="text-slate-500">{k}</span>
                  <span className="truncate font-medium text-ink">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="rounded-xl border border-slate-100 p-2.5">
              <div className="mb-1 text-[8px] font-semibold uppercase tracking-wide text-slate-400">Call notes</div>
              <div className="text-[9px] text-slate-600">Wants the 24-month plan. Quote sent.</div>
            </div>
            <div className="rounded-xl border border-slate-100 p-2.5">
              <div className="mb-1 text-[8px] font-semibold uppercase tracking-wide text-slate-400">Tags</div>
              <Chips items={["Renewal", "Priority"]} />
            </div>
          </div>
        </div>
      </AppWindow>
      <FloatingTag icon={FileSearch}>Every call keeps its own record</FloatingTag>
    </VisualStage>
  );
}

/* ---------------------------- the call states ---------------------------- */

/** A ringing inbound call, before the agent accepts it. */
export function IncomingCallVisual() {
  return (
    <AppWindow title="Incoming call">
      <div className="flex flex-col items-center gap-1 px-4 pt-5 pb-3 text-center">
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand">
          <PhoneIncoming className="h-5 w-5" />
          <span className="absolute inset-0 animate-ping rounded-full bg-brand/20" />
        </span>
        <div className="mt-1 text-sm font-semibold text-ink">+1 555 0177</div>
        <div className="text-[10px] text-slate-500">Support_Inbound · ringing 00:04</div>
        <Chips items={["Inbound", "Priority queue", "Waiting 3"]} className="mt-2 justify-center" />
      </div>
      <div className="grid grid-cols-2 gap-2 px-4 pb-4">
        <div className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2 text-[11px] font-semibold text-white">
          <Phone className="h-3.5 w-3.5" /> Accept
        </div>
        <div className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 py-2 text-[11px] font-semibold text-slate-600">
          <X className="h-3.5 w-3.5" /> Reject
        </div>
      </div>
    </AppWindow>
  );
}

/** Placing a call: the dial pad, quick contacts and recent calls. */
export function OutgoingCallVisual() {
  return (
    <AppWindow title="Dial a number">
      <div className="p-4">
        <div className="mb-2 flex items-center gap-1.5 rounded-xl border border-slate-200 px-2.5 py-2">
          <span className="text-[11px] font-medium text-slate-600">+1</span>
          <span className="flex-1 text-[11px] text-ink">555 0142</span>
          <Delete className="h-3 w-3 text-slate-300" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {KEYPAD.map(([digit, letters]) => (
            <span key={digit} className="rounded-lg border border-slate-200 py-1.5 text-center leading-none">
              <span className="block text-xs font-semibold text-ink">{digit}</span>
              <span className="block text-[6px] tracking-wide text-slate-400">{letters || " "}</span>
            </span>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2 text-[11px] font-semibold text-white">
          <PhoneOutgoing className="h-3.5 w-3.5" /> Call
        </div>
        <div className="mt-3 text-[8px] font-semibold uppercase tracking-wide text-slate-400">Recent calls</div>
        <div className="mt-1 space-y-1">
          {[
            ["+1 555 0168", "Outbound · 2m"],
            ["+1 555 0109", "Callback · 1h"],
          ].map(([n, m]) => (
            <div key={n} className="flex items-center gap-2 rounded-lg border border-slate-100 px-2 py-1.5">
              <PhoneOutgoing className="h-2.5 w-2.5 shrink-0 text-slate-400" />
              <span className="min-w-0 flex-1 truncate text-[10px] text-ink">{n}</span>
              <span className="shrink-0 text-[8px] text-slate-500">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </AppWindow>
  );
}

/** A connected call and everything the agent can do to it. */
export function CallControlVisual() {
  return (
    <AppWindow title="On call">
      <div className="flex items-center gap-2.5 p-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <PhoneCall className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold text-ink">+1 555 0142</div>
          <div className="text-[10px] text-slate-500">Talking · 02:14</div>
        </div>
        <span className="rounded-lg bg-brand-soft px-2 py-0.5 text-[9px] font-semibold text-brand">Recording</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 px-4">
        <CallKey icon={Pause} label="Hold" />
        <CallKey icon={MicOff} label="Mute" />
        <CallKey icon={Grid2x2} label="Keypad" />
        <CallKey icon={PhoneForwarded} label="Transfer" />
        <CallKey icon={Users2} label="Conference" />
        <CallKey icon={MoreHorizontal} label="More" />
      </div>
      <div className="px-4 pt-2.5">
        <div className="rounded-xl border border-slate-100 bg-surface px-2.5 py-2">
          <div className="text-[8px] font-semibold uppercase tracking-wide text-slate-400">Transfer to</div>
          <Chips items={["Agent", "Queue", "Process", "IVR", "External"]} className="mt-1.5" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center gap-1.5 rounded-xl bg-rose-500 py-2 text-[11px] font-semibold text-white">
          <Phone className="h-3.5 w-3.5 rotate-[135deg]" /> End call
        </div>
      </div>
    </AppWindow>
  );
}

/* ------------------------------ admin screens ------------------------------ */

/** The admin landing dashboard: the tenant at a glance. */
export function AdminDashboardVisual() {
  const counts = [
    ["Campaigns", "12"],
    ["Agents", "42"],
    ["Supervisors", "6"],
    ["Queues", "9"],
    ["Inbound DIDs", "24"],
    ["Teams", "5"],
  ];
  const kpis = [
    ["Answered", "1,284"],
    ["Answer rate", "86%"],
    ["Avg handle", "3m 42s"],
    ["Service level", "92%"],
  ];

  return (
    <VisualStage className="max-w-3xl">
      <AppWindow title="Admin · Dashboard" className="max-w-3xl">
        <div className="grid grid-cols-3 gap-1.5 p-3 sm:grid-cols-6">
          {counts.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-slate-100 bg-surface px-2 py-1.5 text-center">
              <div className="text-sm font-bold text-ink">{value}</div>
              <div className="truncate text-[8px] text-slate-500">{label}</div>
            </div>
          ))}
        </div>

        <div className="px-3 text-[8px] font-semibold uppercase tracking-wide text-slate-400">
          Key performance indicators
        </div>
        <div className="grid grid-cols-2 gap-1.5 p-3 pt-1.5 sm:grid-cols-4">
          {kpis.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-slate-100 bg-card px-2 py-1.5">
              <div className="truncate text-[8px] text-slate-500">{label}</div>
              <div className="text-xs font-bold text-ink">{value}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-2 px-3 pb-3 sm:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col rounded-xl border border-slate-100 p-2.5">
            <div className="mb-1.5 text-[8px] font-semibold uppercase tracking-wide text-slate-400">Call volume</div>
            <div className="flex min-h-20 flex-1 items-end gap-1">
              {[32, 48, 66, 80, 74, 58, 86, 52, 44, 38].map((v, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t ${i === 6 ? "bg-brand-solid" : "bg-brand/30"}`}
                  style={{ height: `${v}%` }}
                />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="rounded-xl border border-slate-100 p-2.5">
              <div className="mb-1.5 text-[8px] font-semibold uppercase tracking-wide text-slate-400">Channel mix</div>
              {[
                ["Voice", 68],
                ["WhatsApp", 18],
                ["Chat", 9],
                ["Email", 5],
              ].map(([label, pct]) => (
                <div key={label as string} className="mb-1 flex items-center gap-1.5">
                  <span className="w-12 shrink-0 text-[8px] text-slate-500">{label}</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface">
                    <span className="block h-full rounded-full bg-brand-solid" style={{ width: `${pct}%` }} />
                  </span>
                  <span className="w-6 shrink-0 text-right text-[8px] font-medium text-ink">{pct}%</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-slate-100 p-2.5">
              <div className="mb-1 text-[8px] font-semibold uppercase tracking-wide text-slate-400">Top teams</div>
              {[
                ["Renewals", "94%"],
                ["Support", "91%"],
              ].map(([t, v]) => (
                <div key={t} className="flex justify-between text-[9px]">
                  <span className="text-slate-600">{t}</span>
                  <span className="font-semibold text-ink">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AppWindow>
      <FloatingTag icon={LayoutDashboard}>The tenant at a glance</FloatingTag>
    </VisualStage>
  );
}

/** Live queue and campaign state, the board a supervisor keeps open. */
export function QueueCampaignVisual() {
  const queues = [
    { name: "Support_Inbound", calls: "182", waiting: "3", talk: "3m 10s", sla: "94%" },
    { name: "Renewals_Predictive", calls: "246", waiting: "0", talk: "2m 48s", sla: "91%" },
    { name: "Collections_Preview", calls: "64", waiting: "1", talk: "4m 22s", sla: "88%" },
  ];

  return (
    <VisualStage>
      <AppWindow title="Live · Queue and campaign states">
        <StatTiles
          items={[
            { label: "Active queues", value: "9" },
            { label: "Waiting", value: "4" },
            { label: "Avg wait", value: "00:21" },
            { label: "Service level", value: "92%" },
          ]}
        />
        <div className="px-4">
          <div className="flex gap-2 border-b border-slate-100 pb-1 text-[8px] font-semibold uppercase tracking-wide text-slate-400">
            <span className="flex-1">Queue / process</span>
            <span className="w-8 text-right">Calls</span>
            <span className="w-8 text-right">Wait</span>
            <span className="w-10 text-right">Avg talk</span>
            <span className="w-8 text-right">SLA</span>
          </div>
          {queues.map((q) => (
            <div key={q.name} className="flex items-center gap-2 border-b border-slate-100 py-1.5 text-[9px] last:border-0">
              <span className="min-w-0 flex-1 truncate font-medium text-ink">{q.name}</span>
              <span className="w-8 text-right text-slate-600">{q.calls}</span>
              <span className={`w-8 text-right font-semibold ${q.waiting === "0" ? "text-slate-400" : "text-amber-700"}`}>
                {q.waiting}
              </span>
              <span className="w-10 text-right text-slate-600">{q.talk}</span>
              <span className="w-8 text-right font-semibold text-emerald-700">{q.sla}</span>
            </div>
          ))}
        </div>
        <BarChart
          values={[30, 52, 70, 84, 66, 48, 78, 40]}
          labels={["9", "10", "11", "12", "1", "2", "3", "4"]}
          highlight={3}
        />
      </AppWindow>
      <FloatingTag icon={Gauge}>Hourly trend under every queue</FloatingTag>
    </VisualStage>
  );
}

/** Agent performance, the same figures an agent and a supervisor both read. */
export function AgentPerformanceVisual() {
  return (
    <VisualStage>
      <AppWindow title="Agent performance · Today">
        <StatTiles
          items={[
            { label: "Calls handled", value: "64" },
            { label: "AHT", value: "3m 34s" },
            { label: "ACW", value: "00:28" },
            { label: "Answer %", value: "97%" },
          ]}
        />
        <div className="grid gap-2 px-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-100 p-2.5">
            <div className="mb-1.5 text-[8px] font-semibold uppercase tracking-wide text-slate-400">Call direction mix</div>
            <div className="flex h-2 overflow-hidden rounded-full">
              <span className="bg-brand-solid" style={{ width: "62%" }} />
              <span className="bg-violet-300" style={{ width: "38%" }} />
            </div>
            <div className="mt-1.5 flex justify-between text-[8px] text-slate-500">
              <span>Outbound 62%</span>
              <span>Inbound 38%</span>
            </div>
          </div>
          <div className="rounded-xl border border-slate-100 p-2.5">
            <div className="mb-1 text-[8px] font-semibold uppercase tracking-wide text-slate-400">Quality</div>
            {[
              ["Adherence", "94%"],
              ["QA score", "88"],
              ["CSAT", "4.6 / 5"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between text-[9px]">
                <span className="text-slate-600">{k}</span>
                <span className="font-semibold text-ink">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 pb-4 pt-2">
          <div className="mb-1.5 text-[8px] font-semibold uppercase tracking-wide text-slate-400">Time in state</div>
          <div className="flex h-2.5 overflow-hidden rounded-full">
            <span className="bg-emerald-500" style={{ width: "46%" }} />
            <span className="bg-brand-solid" style={{ width: "34%" }} />
            <span className="bg-amber-400" style={{ width: "12%" }} />
            <span className="bg-slate-300" style={{ width: "8%" }} />
          </div>
          <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[8px] text-slate-500">
            <span>● Talk 46%</span>
            <span>● Ready 34%</span>
            <span>● Break 12%</span>
            <span>● Not ready 8%</span>
          </div>
        </div>
      </AppWindow>
      <FloatingTag icon={BarChart3}>The agent sees the same numbers</FloatingTag>
    </VisualStage>
  );
}
