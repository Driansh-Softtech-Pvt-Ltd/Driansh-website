import {
  ArrowRightCircle,
  BarChart3,
  Bot,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileSearch,
  Filter,
  Grid2x2,
  Hand,
  Headphones,
  KeyRound,
  ListChecks,
  Mic,
  MicOff,
  MoreHorizontal,
  Pause,
  Phone,
  PhoneCall,
  PhoneForwarded,
  Radio,
  Shield,
  ShieldCheck,
  Target,
  Users2,
  Workflow,
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

/** The softphone column: availability, the live call and its controls. */
export function SoftphoneVisual() {
  return (
    <VisualStage>
      <AppWindow title="Softphone">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5 text-[11px]">
          <StateDot tone="ready" />
          <span className="font-semibold text-ink">Ready</span>
          <span className="text-slate-400">·</span>
          <span className="truncate text-slate-500">Renewal reminders / Renewals</span>
          <span className="ml-auto shrink-0 rounded-full bg-surface px-2 py-0.5 font-medium text-slate-500">
            Ext 1042
          </span>
        </div>

        <div className="flex items-center gap-3 p-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <PhoneCall className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-ink">+1 555 0142</div>
            <div className="text-[11px] text-slate-500">Talking · 02:14 · Preview outbound</div>
          </div>
          <span className="rounded-lg bg-brand-soft px-2 py-1 text-[10px] font-semibold text-brand">Recording</span>
        </div>

        <div className="grid grid-cols-3 gap-2 px-4">
          <CallKey icon={Pause} label="Hold" />
          <CallKey icon={MicOff} label="Mute" />
          <CallKey icon={Grid2x2} label="Keypad" />
          <CallKey icon={PhoneForwarded} label="Transfer" />
          <CallKey icon={Users2} label="Conference" />
          <CallKey icon={MoreHorizontal} label="More" />
        </div>

        <div className="p-4">
          <div className="flex items-center justify-center gap-2 rounded-xl bg-rose-500 py-2 text-[11px] font-semibold text-white">
            <Phone className="h-3.5 w-3.5 rotate-[135deg]" /> End call
          </div>
        </div>
      </AppWindow>
      <FloatingTag icon={Phone}>Browser softphone or your IP phone</FloatingTag>
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
