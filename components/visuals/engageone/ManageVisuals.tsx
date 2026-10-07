import {
  AtSign,
  Bold,
  Bot,
  CircleCheck,
  Clock,
  Globe,
  Italic,
  Link,
  List,
  Lock,
  Mail,
  MessageCircle,
  Moon,
  Pencil,
  Plus,
  Save,
  Settings,
  ShieldCheck,
  StickyNote,
  Tag,
  Trash2,
  UserPlus,
  Users,
  Webhook,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AppWindow,
  BarChart,
  Bubble,
  ChatThread,
  FloatingTag,
  FlowSteps,
  FormFields,
  ListRows,
  StatTiles,
  VisualStage,
} from "./primitives";

/*
 * Original illustrations for the EngageOne "Manage" pages.
 * All sample data is generic and made up.
 */

/** Small on/off switch. */
function Toggle({ on }: { on: boolean }) {
  return (
    <span className={cn("flex h-4 w-7 shrink-0 items-center rounded-full p-0.5", on ? "bg-brand-solid" : "bg-slate-200")}>
      <span className={cn("h-3 w-3 rounded-full bg-white", on && "ml-auto")} />
    </span>
  );
}

/** Coloured label chip. */
function LabelChip({ name, color }: { name: string; color: string }) {
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-card px-2.5 py-1 text-[10px] font-medium text-ink">
      <span className={cn("h-2 w-2 rounded-full", color)} />
      {name}
    </span>
  );
}

/* ---------- Audit logs ---------- */

const AUDIT_CATEGORIES = [
  { label: "Users", icon: Users },
  { label: "Account", icon: Settings },
  { label: "Automations", icon: Zap },
  { label: "Macros", icon: Bot },
  { label: "Inboxes", icon: Mail },
  { label: "Webhooks", icon: Webhook },
  { label: "Teams", icon: Users },
];

export function AuditLogCategoriesVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Audit logs">
        <div className="flex flex-wrap gap-1.5 border-b border-slate-100 px-4 py-3">
          {AUDIT_CATEGORIES.map(({ label, icon: Icon }, i) => (
            <span
              key={label}
              className={cn(
                "flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-medium",
                i === 2 ? "border-brand bg-brand-solid text-white" : "border-slate-200 text-slate-500"
              )}
            >
              <Icon className="h-3 w-3" /> {label}
            </span>
          ))}
        </div>
        <div className="p-4">
          <div className="overflow-hidden rounded-xl border border-slate-100 text-[11px]">
            <div className="grid grid-cols-[1fr_1.6fr_0.8fr_0.9fr] gap-2 bg-surface px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              <span>Who</span>
              <span>What</span>
              <span>When</span>
              <span>IP address</span>
            </div>
            {[
              ["Priya", "Created automation “VIP routing”", "10:42", "192.0.2.14"],
              ["Rahul", "Edited automation “After hours”", "09:15", "198.51.100.7"],
              ["Anita", "Disabled automation “Auto label”", "Yesterday", "192.0.2.31"],
            ].map((row) => (
              <div key={row[1]} className="grid grid-cols-[1fr_1.6fr_0.8fr_0.9fr] gap-2 border-t border-slate-100 px-3 py-2 text-ink">
                {row.map((cell, j) => (
                  <span key={j} className={cn("truncate", j === 0 && "font-medium", j === 3 && "font-mono text-[10px] text-slate-500")}>
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </AppWindow>
      <FloatingTag icon={ShieldCheck}>Every change is recorded</FloatingTag>
    </VisualStage>
  );
}

export function AuditLogActivitiesVisual() {
  return (
    <AppWindow title="EngageOne · Audit logs">
      <ListRows
        rows={[
          { title: "Priya invited Meera as an agent", meta: "Users · Today, 11:05 · 192.0.2.14", icon: UserPlus },
          { title: "Rahul changed account business hours", meta: "Account · Today, 10:20 · 198.51.100.7", icon: Settings, tint: "bg-slate-100 text-slate-600" },
          { title: "Anita added an inbox “WhatsApp Sales”", meta: "Inboxes · Today, 09:48 · 192.0.2.31", icon: Mail, tint: "bg-sky-100 text-sky-600" },
          { title: "Vikram updated a webhook URL", meta: "Webhooks · Yesterday, 18:02 · 203.0.113.9", icon: Webhook, tint: "bg-amber-100 text-amber-600" },
          { title: "Priya added Rahul to team “Billing”", meta: "Teams · Yesterday, 16:30 · 192.0.2.14", icon: Users, tint: "bg-emerald-100 text-emerald-600" },
        ]}
      />
    </AppWindow>
  );
}

/* ---------- Business hours ---------- */

const SCHEDULE = [
  { day: "Monday", hours: "9:00 am – 6:00 pm", open: true },
  { day: "Tuesday", hours: "9:00 am – 6:00 pm", open: true },
  { day: "Wednesday", hours: "9:00 am – 6:00 pm", open: true },
  { day: "Thursday", hours: "9:00 am – 6:00 pm", open: true },
  { day: "Friday", hours: "9:00 am – 6:00 pm", open: true },
  { day: "Saturday", hours: "10:00 am – 2:00 pm", open: true },
  { day: "Sunday", hours: "Closed", open: false },
];

export function BusinessHoursScheduleVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Business hours">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3 text-xs">
          <Globe className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-slate-500">Time zone</span>
          <span className="ml-auto rounded-lg border border-slate-200 px-2 py-1 text-[10px] text-ink">(GMT+5:30) Kolkata ▾</span>
        </div>
        <ul className="space-y-1 px-4 py-3">
          {SCHEDULE.map(({ day, hours, open }) => (
            <li key={day} className="flex items-center gap-3 text-xs">
              <Toggle on={open} />
              <span className="w-20 font-medium text-ink">{day}</span>
              <span
                className={cn(
                  "ml-auto rounded-lg px-2 py-1 text-[10px]",
                  open ? "border border-slate-200 text-ink" : "bg-surface text-slate-400"
                )}
              >
                {hours}
              </span>
            </li>
          ))}
        </ul>
        <div className="mx-4 mb-4 rounded-xl border border-slate-200 p-2.5 text-[11px]">
          <div className="text-[10px] font-semibold text-slate-500">Unavailable message</div>
          <div className="mt-1 text-ink">We’re away right now. Leave a message and we’ll reply when we’re back.</div>
        </div>
      </AppWindow>
      <FloatingTag icon={Clock}>Open Mon–Sat</FloatingTag>
    </VisualStage>
  );
}

export function BusinessHoursPerInboxVisual() {
  return (
    <AppWindow title="EngageOne · Inbox settings">
      <ListRows
        rows={[
          { title: "Website chat", meta: "Mon–Fri · 9 am – 6 pm", badge: "Open now", icon: Globe, active: true },
          { title: "WhatsApp Sales", meta: "Mon–Sat · 10 am – 8 pm", badge: "Open now", icon: MessageCircle, tint: "bg-emerald-100 text-emerald-600" },
          { title: "Email support", meta: "Mon–Fri · 9 am – 5 pm", badge: "Closed", icon: Mail, tint: "bg-sky-100 text-sky-600" },
        ]}
      />
      <ChatThread className="border-t border-slate-100 bg-surface">
        <Bubble from="customer">Hi, is anyone there?</Bubble>
        <Bubble from="bot">
          <span className="flex items-center gap-1.5">
            <Moon className="h-3 w-3" /> We’re away right now and will reply tomorrow from 9 am.
          </span>
        </Bubble>
      </ChatThread>
    </AppWindow>
  );
}

export function BusinessHoursReportsVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Conversation report">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3 text-xs">
          <span className="font-semibold text-ink">Last 7 days</span>
          <span className="ml-auto flex items-center gap-2 text-[11px] text-slate-500">
            Business hours <Toggle on />
          </span>
        </div>
        <StatTiles
          items={[
            { label: "First response", value: "12m", trend: "within business hours" },
            { label: "Resolution time", value: "2h 40m" },
            { label: "Conversations", value: "318" },
            { label: "Resolved", value: "296" },
          ]}
        />
        <BarChart values={[55, 62, 48, 70, 66, 20, 12]} labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]} highlight={3} />
      </AppWindow>
      <FloatingTag icon={Clock}>Off-hours excluded from metrics</FloatingTag>
    </VisualStage>
  );
}

/* ---------- Contact notes ---------- */

function ContactHeader() {
  return (
    <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-700">R</span>
      <div className="text-xs">
        <div className="font-semibold text-ink">Rahul</div>
        <div className="text-[10px] text-slate-500">Customer since March · 6 conversations</div>
      </div>
    </div>
  );
}

const NOTES = [
  { author: "Priya", when: "Today", text: "Prefers WhatsApp over email for order updates." },
  { author: "Anita", when: "Last week", text: "Interested in the annual plan — follow up in May." },
];

function NoteCard({ author, when, text, highlight }: { author: string; when: string; text: string; highlight?: boolean }) {
  return (
    <li className={cn("rounded-xl border px-3 py-2 text-xs", highlight ? "border-rose-200 bg-rose-50" : "border-slate-100")}>
      <div className="flex items-center gap-2 text-[10px] text-slate-500">
        <StickyNote className="h-3 w-3 text-amber-500" />
        {author} · {when}
        <Trash2 className={cn("ml-auto h-3.5 w-3.5", highlight ? "text-rose-500" : "text-slate-300")} />
      </div>
      <div className="mt-1 text-ink">{text}</div>
    </li>
  );
}

export function ContactNoteAddVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Contact">
        <ContactHeader />
        <div className="mx-4 mt-4 rounded-xl border border-brand/40 p-2.5 text-[11px]">
          <div className="text-ink">Asked for a callback after 5 pm on weekdays.</div>
          <div className="mt-2 flex justify-end">
            <span className="rounded-md bg-brand-solid px-2 py-0.5 text-[10px] font-semibold text-white">Add note</span>
          </div>
        </div>
        <ul className="space-y-1.5 p-4">
          {NOTES.map((note) => (
            <NoteCard key={note.text} {...note} />
          ))}
        </ul>
      </AppWindow>
      <FloatingTag icon={CircleCheck}>Note saved to Rahul’s profile</FloatingTag>
    </VisualStage>
  );
}

export function ContactNoteFormatVisual() {
  return (
    <AppWindow title="EngageOne · Contact">
      <ContactHeader />
      <div className="m-4 overflow-hidden rounded-xl border border-slate-200 text-xs">
        <div className="flex items-center gap-1 border-b border-slate-100 bg-surface px-2 py-1.5 text-slate-500">
          {[Bold, Italic, List, Link].map((Icon, i) => (
            <span key={i} className={cn("rounded-md p-1", i === 0 && "bg-card text-brand shadow-sm")}>
              <Icon className="h-3.5 w-3.5" />
            </span>
          ))}
        </div>
        <div className="space-y-1.5 p-3 text-ink">
          <p>
            <strong>VIP customer</strong> — renewal due <em>15 June</em>.
          </p>
          <ul className="list-disc space-y-0.5 pl-4 text-[11px] text-slate-600">
            <li>Prefers calls after 5 pm</li>
            <li>Uses the Business plan for 3 stores</li>
          </ul>
        </div>
      </div>
    </AppWindow>
  );
}

export function ContactNoteDeleteVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Contact">
        <ContactHeader />
        <ul className="space-y-1.5 p-4">
          <NoteCard author="Vikram" when="Two months ago" text="Old address — moved to a new city since." highlight />
          {NOTES.map((note) => (
            <NoteCard key={note.text} {...note} />
          ))}
        </ul>
      </AppWindow>
      <FloatingTag icon={Trash2}>Outdated note removed</FloatingTag>
    </VisualStage>
  );
}

/* ---------- Contact segments ---------- */

export function SegmentFilterVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Filter contacts">
        <div className="space-y-2 p-4 text-[11px]">
          {[
            ["", "Country", "equals", "India"],
            ["AND", "Plan", "equals", "Premium"],
            ["AND", "Last activity", "within", "30 days"],
          ].map(([join, field, op, value]) => (
            <div key={field} className="flex items-center gap-1.5">
              <span className="w-8 text-[9px] font-semibold text-brand">{join}</span>
              {[field, op, value].map((part, i) => (
                <span key={part} className={cn("flex-1 truncate rounded-lg border border-slate-200 px-2 py-1.5", i === 2 ? "text-ink" : "text-slate-500")}>
                  {part}
                </span>
              ))}
            </div>
          ))}
          <div className="flex items-center gap-1 pl-9 text-[10px] font-medium text-brand">
            <Plus className="h-3 w-3" /> Add filter
          </div>
        </div>
        <FormFields fields={[{ label: "Segment name", value: "Premium · India" }]} button="Save segment" />
      </AppWindow>
      <FloatingTag icon={Save}>1,240 contacts match</FloatingTag>
    </VisualStage>
  );
}

export function SegmentSidebarVisual() {
  return (
    <AppWindow title="EngageOne · Contacts">
      <div className="grid grid-cols-[8.5rem_1fr]">
        <div className="space-y-1 border-r border-slate-100 bg-surface p-3 text-[11px]">
          <div className="px-2 pb-1 text-[9px] font-semibold uppercase tracking-wide text-slate-400">Segments</div>
          {["All contacts", "Premium · India", "New this month", "Inactive 90 days"].map((segment, i) => (
            <div key={segment} className={cn("truncate rounded-lg px-2 py-1.5", i === 1 ? "bg-card font-medium text-brand shadow-sm" : "text-slate-600")}>
              {segment}
            </div>
          ))}
        </div>
        <ul className="space-y-1.5 p-3">
          {["Rahul", "Meera", "Arjun", "Kavya", "Sanjay"].map((name) => (
            <li key={name} className="flex items-center gap-2 rounded-lg border border-slate-100 px-2.5 py-1.5 text-xs">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-soft text-[10px] font-semibold text-brand">{name[0]}</span>
              <span className="font-medium text-ink">{name}</span>
              <span className="ml-auto rounded-full bg-amber-100 px-1.5 py-0.5 text-[9px] font-semibold text-amber-700">Premium</span>
            </li>
          ))}
        </ul>
      </div>
    </AppWindow>
  );
}

/* ---------- Labels ---------- */

const LABEL_COLOURS = ["bg-sky-500", "bg-emerald-500", "bg-amber-500", "bg-rose-500", "bg-violet-500", "bg-slate-500"];

export function LabelCreateVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Add label">
        <FormFields
          fields={[
            { label: "Label name", value: "billing" },
            { label: "Description", value: "Payments, invoices and refunds" },
            { label: "Show in sidebar", kind: "toggle" },
          ]}
        />
        <div className="flex items-center gap-3 px-4 pb-2 text-xs">
          <span className="w-28 shrink-0 text-slate-500">Colour</span>
          <span className="flex gap-1.5">
            {LABEL_COLOURS.map((color, i) => (
              <span key={color} className={cn("h-5 w-5 rounded-full", color, i === 0 && "ring-2 ring-sky-500 ring-offset-2")} />
            ))}
          </span>
        </div>
        <div className="flex justify-end p-4 pt-2">
          <span className="rounded-lg bg-brand-solid px-3 py-1.5 text-[11px] font-semibold text-white">Create label</span>
        </div>
      </AppWindow>
      <FloatingTag icon={Pencil}>Edit any time</FloatingTag>
    </VisualStage>
  );
}

export function LabelSidebarVisual() {
  return (
    <AppWindow title="EngageOne · Conversation with Meera">
      <div className="grid grid-cols-[1fr_10rem]">
        <ChatThread>
          <Bubble from="customer">I was charged twice this month.</Bubble>
          <Bubble from="agent">Sorry about that! Checking your invoice now.</Bubble>
        </ChatThread>
        <div className="border-l border-slate-100 bg-surface p-3">
          <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            <Tag className="h-3 w-3" /> Labels
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            <LabelChip name="billing" color="bg-sky-500" />
            <LabelChip name="priority" color="bg-rose-500" />
          </div>
          <div className="mt-2 overflow-hidden rounded-lg border border-slate-200 bg-card text-[10px]">
            {[
              ["delivery", "bg-amber-500"],
              ["feedback", "bg-emerald-500"],
              ["bug", "bg-violet-500"],
            ].map(([name, color], i) => (
              <div key={name} className={cn("flex items-center gap-1.5 px-2 py-1", i === 0 && "bg-brand-soft")}>
                <span className={cn("h-2 w-2 rounded-full", color)} /> {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

/* ---------- Private notes ---------- */

export function PrivateNoteThreadVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Conversation with Arjun">
        <ChatThread>
          <Bubble from="customer">Can I get a refund on my annual plan?</Bubble>
          <Bubble from="note">
            <span className="flex items-center gap-1 text-[10px] font-semibold">
              <Lock className="h-3 w-3" /> Private note · Priya
            </span>
            Refunds above one month need approval. @Rahul can you check this one?
          </Bubble>
          <Bubble from="note">
            <span className="flex items-center gap-1 text-[10px] font-semibold">
              <Lock className="h-3 w-3" /> Private note · Rahul
            </span>
            Approved — go ahead with the full refund.
          </Bubble>
          <Bubble from="agent">Good news, Arjun! Your refund has been approved.</Bubble>
        </ChatThread>
      </AppWindow>
      <FloatingTag icon={Lock}>Notes are never shown to customers</FloatingTag>
    </VisualStage>
  );
}

export function PrivateNoteMentionVisual() {
  return (
    <AppWindow title="EngageOne · Conversation with Kavya">
      <ChatThread className="pb-2">
        <Bubble from="customer">The app crashes when I upload a photo.</Bubble>
      </ChatThread>
      <div className="mx-4 mb-2 overflow-hidden rounded-xl border border-slate-200 text-xs shadow-lg">
        {["Vikram", "Meera"].map((name, i) => (
          <div key={name} className={cn("flex items-center gap-2 px-3 py-1.5", i === 0 ? "bg-brand-soft" : "bg-card")}>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-card text-[9px] font-semibold text-brand">{name[0]}</span>
            {name}
            <span className="ml-auto text-[10px] text-slate-400">{i === 0 ? "Tech team" : "Support"}</span>
          </div>
        ))}
      </div>
      <div className="mx-4 mb-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] text-amber-900">
        <div className="mb-1 flex items-center gap-1 text-[10px] font-semibold">
          <Lock className="h-3 w-3" /> Private note
        </div>
        <span className="flex items-center gap-1">
          Can you look at this crash, <AtSign className="h-3 w-3" />Vi
        </span>
      </div>
    </AppWindow>
  );
}

/* ---------- Teams ---------- */

export function TeamCreateVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Create team">
        <FormFields
          fields={[
            { label: "Team name", value: "Billing" },
            { label: "Description", value: "Invoices, payments and refunds" },
            { label: "Allow auto assign", kind: "toggle" },
          ]}
        />
        <div className="px-4 pb-4">
          <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">Agents</div>
          <div className="flex flex-wrap gap-1.5">
            {["Priya", "Rahul", "Anita"].map((name) => (
              <span key={name} className="flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand-soft px-2 py-1 text-[10px] font-medium text-ink">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-card text-[9px] font-semibold text-brand">{name[0]}</span>
                {name}
              </span>
            ))}
            <span className="flex items-center gap-1 rounded-full border border-dashed border-slate-300 px-2 py-1 text-[10px] text-slate-500">
              <UserPlus className="h-3 w-3" /> Add agent
            </span>
          </div>
        </div>
      </AppWindow>
      <FloatingTag icon={Users}>Team “Billing” created</FloatingTag>
    </VisualStage>
  );
}

export function TeamAutoAssignVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Automation rule">
        <div className="border-b border-slate-100 px-4 py-3 text-xs font-semibold text-ink">Send billing questions to the Billing team</div>
        <FlowSteps
          steps={[
            { label: "When", detail: "Conversation is created", icon: Zap },
            { label: "If", detail: "Message contains “invoice” or “refund”", icon: MessageCircle },
            { label: "Then", detail: "Assign to team Billing", icon: Users },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={CircleCheck}>Routed to Billing instantly</FloatingTag>
    </VisualStage>
  );
}
