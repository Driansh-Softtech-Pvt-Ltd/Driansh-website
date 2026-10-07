import {
  BookOpen,
  Bot,
  CalendarCheck,
  Check,
  CheckCircle2,
  Cloud,
  FileText,
  Globe,
  History,
  KeyRound,
  Lightbulb,
  Lock,
  Mail,
  Megaphone,
  MessageCircle,
  Mic,
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneMissed,
  PhoneOutgoing,
  Play,
  Server,
  ShieldCheck,
  Sparkles,
  Tag,
  UserCheck,
  Users2,
  Wand2,
  Webhook,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AppWindow,
  Bubble,
  ChatThread,
  Composer,
  FloatingTag,
  FlowSteps,
  FormFields,
  ListRows,
  OptionChips,
  StatTiles,
  VisualStage,
} from "./primitives";

/*
 * Illustrations for the EngageOne feature pages (AI Assistant, Calling,
 * Campaigns, Security, Pricing, Request a demo). Generic sample data only.
 */

/* ------------------------------------------------------------------ */
/* Extra primitives                                                    */
/* ------------------------------------------------------------------ */

/** Small coloured pill, e.g. a status or a label. */
function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold", className)}>
      {children}
    </span>
  );
}

/** Thin header strip inside a window, with a title and optional right-side content. */
function PanelHeader({ title, icon: Icon, right }: { title: string; icon?: LucideIcon; right?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5 text-xs font-semibold text-ink">
      {Icon && <Icon className="h-3.5 w-3.5 text-brand" />}
      {title}
      {right && <span className="ml-auto">{right}</span>}
    </div>
  );
}

/** Fake audio player row for a recorded call. */
function AudioBar({ length }: { length: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-surface px-3 py-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-solid text-white">
        <Play className="h-3 w-3" />
      </span>
      <span className="flex flex-1 items-end gap-0.5">
        {[3, 5, 2, 6, 4, 7, 3, 5, 6, 2, 4, 6, 3, 5, 2, 4].map((h, i) => (
          <span
            key={i}
            className={cn(
              "w-1 rounded-full",
              i < 6 ? "bg-brand-solid" : "bg-brand/30",
              h === 2 && "h-1.5",
              h === 3 && "h-2",
              h === 4 && "h-2.5",
              h === 5 && "h-3",
              h === 6 && "h-3.5",
              h === 7 && "h-4"
            )}
          />
        ))}
      </span>
      <span className="text-[10px] text-slate-500">{length}</span>
    </div>
  );
}

/** Row of on/off permission switches. */
function ToggleRows({ rows }: { rows: { label: string; on: boolean }[] }) {
  return (
    <ul className="space-y-1.5 p-4">
      {rows.map(({ label, on }) => (
        <li key={label} className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2 text-xs">
          <span className="text-ink">{label}</span>
          <span className={cn("ml-auto flex h-4 w-7 items-center rounded-full p-0.5", on ? "bg-brand-solid" : "bg-slate-200")}>
            <span className={cn("h-3 w-3 rounded-full bg-white", on && "ml-auto")} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Simple plan card used in the pricing illustration. */
function PlanCard({
  name,
  icon: Icon,
  lines,
  highlight,
}: {
  name: string;
  icon: LucideIcon;
  lines: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border p-3",
        highlight ? "border-brand/40 bg-brand-soft/60" : "border-slate-100 bg-card"
      )}
    >
      <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-brand-soft text-brand">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className="text-xs font-semibold text-ink">{name}</span>
      <ul className="mt-2 space-y-1">
        {lines.map((line) => (
          <li key={line} className="flex items-center gap-1 text-[10px] text-slate-500">
            <Check className="h-3 w-3 shrink-0 text-emerald-500" />
            <span className="truncate">{line}</span>
          </li>
        ))}
      </ul>
      <span className="mt-3 rounded-md bg-brand-solid px-2 py-1 text-center text-[10px] font-semibold text-white">Talk to sales</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* AI Assistant                                                        */
/* ------------------------------------------------------------------ */

/** Hero: the assistant answers from the help docs, then offers a person. */
export function AiAssistantHeroVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · AI Assistant">
        <ChatThread>
          <Bubble>Hi, can I change my delivery address after ordering?</Bubble>
          <Bubble from="bot">
            Yes. You can change it from your order page until the order is packed. Open Orders, pick the order and tap
            Edit address.
          </Bubble>
          <div className="flex items-center gap-1.5 self-end text-[10px] text-slate-500">
            <BookOpen className="h-3 w-3" /> Source: Delivery FAQ
          </div>
          <Bubble>It is already packed. Can someone help?</Bubble>
          <Bubble from="bot">Sure. I am passing you to our support team now.</Bubble>
          <Bubble from="system">Conversation handed to Support team</Bubble>
        </ChatThread>
        <Composer placeholder="Type a message…" />
      </AppWindow>
      <FloatingTag icon={Bot}>Answers 24/7 from your docs</FloatingTag>
    </VisualStage>
  );
}

/** Knowledge sources the assistant learns from. */
export function AiKnowledgeVisual() {
  return (
    <VisualStage>
      <AppWindow title="AI Assistant · Knowledge">
        <PanelHeader title="Documents" icon={FileText} right={<Pill className="bg-brand-soft text-brand">3 sources</Pill>} />
        <ListRows
          rows={[
            { title: "Shipping and returns", meta: "Website page", icon: Globe, badge: "Synced" },
            { title: "Product care guide.pdf", meta: "PDF upload", icon: FileText, tint: "bg-rose-100 text-rose-600", badge: "Ready" },
            { title: "Pricing questions", meta: "Website page", icon: Globe, badge: "Synced" },
          ]}
        />
        <PanelHeader title="FAQs" icon={BookOpen} />
        <ListRows
          rows={[
            { title: "How do I reset my password?", meta: "Approved FAQ", icon: CheckCircle2, tint: "bg-emerald-100 text-emerald-600" },
            { title: "Do you deliver on weekends?", meta: "Approved FAQ", icon: CheckCircle2, tint: "bg-emerald-100 text-emerald-600" },
          ]}
        />
      </AppWindow>
    </VisualStage>
  );
}

/** FAQ suggestions waiting for review. */
export function AiFaqSuggestionsVisual() {
  const items = [
    { q: "Can I pause my subscription?", from: "Seen in 4 conversations" },
    { q: "Do you send invoices by email?", from: "Seen in 3 conversations" },
  ];
  return (
    <VisualStage>
      <AppWindow title="AI Assistant · Suggested FAQs">
        <div className="space-y-2.5 p-4">
          {items.map((item) => (
            <div key={item.q} className="rounded-xl border border-slate-100 bg-card p-3">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-violet-600">
                <Lightbulb className="h-3 w-3" /> Suggestion
              </div>
              <div className="mt-1 text-xs font-medium text-ink">{item.q}</div>
              <div className="mt-0.5 text-[10px] text-slate-500">{item.from}</div>
              <div className="mt-2 flex gap-1.5">
                <Pill className="bg-emerald-100 text-emerald-700">
                  <Check className="h-3 w-3" /> Approve
                </Pill>
                <Pill className="bg-slate-100 text-slate-600">
                  <X className="h-3 w-3" /> Dismiss
                </Pill>
              </div>
            </div>
          ))}
        </div>
      </AppWindow>
      <FloatingTag icon={UserCheck}>You review before it goes live</FloatingTag>
    </VisualStage>
  );
}

/** AI help inside the agent reply box. */
export function AiReplyHelpVisual() {
  const actions = [
    { label: "Suggest a reply", icon: Sparkles },
    { label: "Summarise conversation", icon: FileText },
    { label: "Fix spelling and grammar", icon: Check },
    { label: "Improve writing", icon: Wand2 },
  ];
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Conversation">
        <ChatThread className="pb-2">
          <Bubble>My order came with the wrong size. What now?</Bubble>
        </ChatThread>
        <div className="mx-4 rounded-xl border border-brand/30 bg-card p-3 shadow-sm">
          <div className="text-[11px] text-slate-600">sorry about that, we will send the right size, pls send a photo</div>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {actions.map(({ label, icon: Icon }) => (
              <span key={label} className="flex items-center gap-1.5 rounded-lg bg-brand-soft px-2 py-1 text-[10px] font-medium text-brand">
                <Icon className="h-3 w-3 shrink-0" />
                <span className="truncate">{label}</span>
              </span>
            ))}
          </div>
          <div className="mt-2 text-[10px] text-slate-500">Change tone</div>
          <OptionChips className="mt-1 justify-start" options={["Professional", "Friendly", "Casual", "Confident"]} />
        </div>
        <div className="flex items-center gap-1.5 px-4 py-3 text-[10px] text-slate-500">
          <Tag className="h-3 w-3 text-brand" /> Suggested labels:
          <Pill className="bg-amber-100 text-amber-700">returns</Pill>
          <Pill className="bg-sky-100 text-sky-700">order-issue</Pill>
        </div>
      </AppWindow>
    </VisualStage>
  );
}

/* ------------------------------------------------------------------ */
/* Calling                                                             */
/* ------------------------------------------------------------------ */

/** Hero: an incoming WhatsApp call ringing inside the inbox. */
export function CallingHeroVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Inbox">
        <div className="grid grid-cols-[1fr] sm:grid-cols-[10rem_1fr]">
          <ListRows
            className="hidden border-r border-slate-100 bg-surface sm:block"
            rows={[
              { title: "Priya", meta: "WhatsApp", icon: MessageCircle, tint: "bg-emerald-100 text-emerald-600", active: true },
              { title: "Daniel", meta: "Phone", icon: Phone },
              { title: "Amira", meta: "Website", icon: Globe },
            ]}
          />
          <div className="p-4">
            <div className="light-tokens rounded-2xl bg-navy p-4 text-center text-white">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                <PhoneIncoming className="h-6 w-6" />
              </div>
              <div className="mt-2 text-sm font-semibold">Priya</div>
              <div className="text-[10px] text-slate-300">Incoming WhatsApp call</div>
              <div className="mt-4 flex justify-center gap-3">
                <span className="flex items-center gap-1 rounded-full bg-rose-500 px-3 py-1.5 text-[10px] font-semibold">
                  <PhoneMissed className="h-3 w-3" /> Decline
                </span>
                <span className="flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1.5 text-[10px] font-semibold">
                  <Phone className="h-3 w-3" /> Accept
                </span>
              </div>
            </div>
            <ChatThread className="px-0 pb-0">
              <Bubble>Hi, I tried to call about my booking.</Bubble>
            </ChatThread>
          </div>
        </div>
      </AppWindow>
      <FloatingTag icon={PhoneCall}>Answer in the browser</FloatingTag>
    </VisualStage>
  );
}

/** A finished call logged in the conversation, with recording and transcript. */
export function CallLogVisual() {
  return (
    <VisualStage>
      <AppWindow title="Conversation · Daniel">
        <ChatThread>
          <Bubble>Can you call me about the invoice?</Bubble>
          <div className="self-end w-[85%] rounded-2xl rounded-tr-sm border border-slate-100 bg-card p-3 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <PhoneOutgoing className="h-3.5 w-3.5 text-brand" /> Outgoing call
              <Pill className="ml-auto bg-emerald-100 text-emerald-700">Completed</Pill>
            </div>
            <div className="mt-2">
              <AudioBar length="3:12" />
            </div>
            <div className="mt-2 rounded-lg bg-surface p-2 text-[10px] leading-relaxed text-slate-600">
              <span className="font-semibold text-ink">Transcript · </span>
              Agent: Hi Daniel, I am calling about your invoice. Customer: Thanks, I wanted to change the billing name…
            </div>
          </div>
          <Bubble from="note">Sent the corrected invoice after the call.</Bubble>
        </ChatThread>
      </AppWindow>
      <FloatingTag icon={Mic}>Recorded and transcribed</FloatingTag>
    </VisualStage>
  );
}

/** The Calls page listing every call. */
export function CallsListVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Calls">
        <ListRows
          rows={[
            { title: "Priya", meta: "WhatsApp · Incoming · 4:05", icon: PhoneIncoming, tint: "bg-emerald-100 text-emerald-600", badge: "Answered" },
            { title: "Daniel", meta: "Phone · Outgoing · 3:12", icon: PhoneOutgoing, badge: "Completed" },
            { title: "Amira", meta: "Phone · Incoming", icon: PhoneMissed, tint: "bg-rose-100 text-rose-600", badge: "No answer" },
            { title: "Leo", meta: "WhatsApp · Outgoing · 1:47", icon: PhoneOutgoing, tint: "bg-emerald-100 text-emerald-600", badge: "Completed" },
          ]}
        />
      </AppWindow>
    </VisualStage>
  );
}

/* ------------------------------------------------------------------ */
/* Campaigns                                                           */
/* ------------------------------------------------------------------ */

/** WhatsApp template preview with image header, variable and buttons. */
function TemplatePreview() {
  return (
    <div className="rounded-2xl bg-emerald-50 p-4">
      <div className="max-w-[90%] overflow-hidden rounded-xl bg-card shadow-sm">
        <div className="flex h-20 items-center justify-center bg-brand-gradient text-white">
          <Megaphone className="h-7 w-7" />
        </div>
        <div className="p-3 text-xs text-ink">
          Hi <span className="rounded bg-brand-soft px-1 font-semibold text-brand">Sara</span>, our new season range is
          here. Take a look before it sells out.
        </div>
        <div className="grid grid-cols-2 border-t border-slate-100 text-center text-[10px] font-semibold text-sky-600">
          <span className="border-r border-slate-100 py-2">View range</span>
          <span className="py-2">Not interested</span>
        </div>
      </div>
    </div>
  );
}

/** Hero: a WhatsApp campaign going out to a label. */
export function CampaignsHeroVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · WhatsApp campaign">
        <div className="grid gap-0 sm:grid-cols-2">
          <FormFields
            fields={[
              { label: "Template", value: "new_season", kind: "select" },
              { label: "Audience", value: "Label: vip", kind: "select" },
              { label: "Send at", value: "Tomorrow, 10:00", kind: "select" },
            ]}
            button="Schedule"
          />
          <div className="p-4 sm:pl-0">
            <TemplatePreview />
          </div>
        </div>
      </AppWindow>
      <FloatingTag icon={CheckCircle2}>Personalised for every customer</FloatingTag>
    </VisualStage>
  );
}

/** Building a template and sending it to Meta for review. */
export function TemplateBuilderVisual() {
  return (
    <VisualStage>
      <AppWindow title="Templates · New template">
        <FormFields
          fields={[
            { label: "Name", value: "order_ready" },
            { label: "Category", value: "Utility", kind: "select" },
            { label: "Header", value: "Image", kind: "select" },
            { label: "Body", value: "Hi {{1}}, your order is ready." },
            { label: "Buttons", value: "Quick reply · Visit website" },
          ]}
          button="Submit for approval"
        />
        <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-3 text-[11px]">
          <span className="text-slate-500">Status</span>
          <Pill className="bg-amber-100 text-amber-700">In review by Meta</Pill>
          <Pill className="ml-auto bg-emerald-100 text-emerald-700">
            <Check className="h-3 w-3" /> 2 approved
          </Pill>
        </div>
      </AppWindow>
    </VisualStage>
  );
}

/** Personal fields with a fallback, plus delivery numbers. */
export function CampaignPersonaliseVisual() {
  return (
    <VisualStage>
      <AppWindow title="Campaign · Variables">
        <div className="space-y-2 p-4 text-xs">
          <div className="flex items-center gap-2 rounded-xl border border-slate-100 px-3 py-2">
            <span className="rounded bg-brand-soft px-1.5 py-0.5 font-mono text-[10px] text-brand">{"{{1}}"}</span>
            <span className="text-slate-500">→</span>
            <span className="text-ink">Contact name</span>
          </div>
          <div className="rounded-xl border border-dashed border-slate-200 px-3 py-2 text-[11px] text-slate-500">
            If name is empty, use: <span className="font-semibold text-ink">there</span>
          </div>
        </div>
        <StatTiles
          items={[
            { label: "Audience", value: "Label: vip" },
            { label: "Sent", value: "Done" },
            { label: "Delivered", value: "Tracked" },
            { label: "Read", value: "Tracked" },
          ]}
        />
      </AppWindow>
    </VisualStage>
  );
}

/** Proactive message shown to a website visitor. */
export function LiveChatCampaignVisual() {
  return (
    <VisualStage>
      <AppWindow title="yourstore.example / pricing">
        <div className="grid gap-3 p-4 sm:grid-cols-[1fr_12rem]">
          <div className="space-y-2">
            <div className="h-3 w-2/3 rounded bg-slate-200" />
            <div className="h-2 w-full rounded bg-slate-100" />
            <div className="h-2 w-5/6 rounded bg-slate-100" />
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="h-14 rounded-lg bg-surface" />
              <div className="h-14 rounded-lg bg-surface" />
              <div className="h-14 rounded-lg bg-surface" />
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="rounded-2xl rounded-br-sm bg-card p-3 text-[11px] text-ink shadow-lg ring-1 ring-slate-100">
              Comparing plans? Ask us anything, we reply in minutes.
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white shadow-lg">
              <MessageCircle className="h-5 w-5" />
            </span>
          </div>
        </div>
        <FlowSteps
          steps={[
            { label: "Page", detail: "URL contains /pricing", icon: Globe },
            { label: "Wait", detail: "10 seconds on page", icon: History },
            { label: "Show", detail: "Proactive message", icon: MessageCircle },
          ]}
        />
      </AppWindow>
    </VisualStage>
  );
}

/* ------------------------------------------------------------------ */
/* Security                                                            */
/* ------------------------------------------------------------------ */

/** Hero: choose where EngageOne runs. */
export function SecurityHeroVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Deployment">
        <ListRows
          rows={[
            { title: "Driansh cloud", meta: "Hosted and managed by Driansh", icon: Cloud },
            { title: "Your servers", meta: "Data stays on your infrastructure", icon: Server, active: true, badge: "Selected" },
            { title: "Your private cloud", meta: "Run inside your own cloud account", icon: Lock },
          ]}
        />
        <div className="grid grid-cols-3 gap-2 px-4 pb-4 text-[10px]">
          {[
            { label: "Two-factor", icon: KeyRound },
            { label: "Single sign-on", icon: ShieldCheck },
            { label: "Audit logs", icon: History },
          ].map(({ label, icon: Icon }) => (
            <span key={label} className="flex items-center justify-center gap-1 rounded-lg bg-brand-soft px-2 py-1.5 font-semibold text-brand">
              <Icon className="h-3 w-3" /> {label}
            </span>
          ))}
        </div>
      </AppWindow>
      <FloatingTag icon={ShieldCheck}>You choose where data lives</FloatingTag>
    </VisualStage>
  );
}

/** Custom role with permission switches. */
export function CustomRolesVisual() {
  return (
    <VisualStage>
      <AppWindow title="Settings · Custom roles">
        <PanelHeader title="Role: Support lead" icon={Users2} />
        <ToggleRows
          rows={[
            { label: "Manage all conversations", on: true },
            { label: "Manage unassigned conversations", on: true },
            { label: "Manage contacts", on: true },
            { label: "View and manage reports", on: true },
            { label: "Manage help center", on: false },
          ]}
        />
      </AppWindow>
    </VisualStage>
  );
}

/** Audit log of account changes. */
export function AuditLogVisual() {
  return (
    <VisualStage>
      <AppWindow title="Settings · Audit logs">
        <ListRows
          rows={[
            { title: "Maya updated inbox settings", meta: "Today, 09:42", icon: History },
            { title: "Omar invited a new agent", meta: "Today, 09:10", icon: Users2 },
            { title: "Maya edited an automation rule", meta: "Yesterday, 17:25", icon: ShieldCheck },
            { title: "Leo signed in", meta: "Yesterday, 08:58", icon: KeyRound },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={History}>Who changed what, and when</FloatingTag>
    </VisualStage>
  );
}

/** Sign-in with SSO and a two-factor code, plus signed webhooks. */
export function SignInVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Sign in">
        <div className="space-y-3 p-4">
          <span className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-xs font-semibold text-ink">
            <ShieldCheck className="h-3.5 w-3.5 text-brand" /> Continue with company SSO
          </span>
          <div className="text-center text-[10px] text-slate-400">or enter your two-factor code</div>
          <div className="flex justify-center gap-1.5">
            {["4", "8", "1", "", "", ""].map((d, i) => (
              <span
                key={i}
                className="flex h-8 w-7 items-center justify-center rounded-md border border-slate-200 font-mono text-sm text-ink"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-3 text-[10px] text-slate-500">
          <Webhook className="h-3.5 w-3.5 text-brand" /> Webhook sent with
          <span className="rounded bg-surface px-1.5 py-0.5 font-mono text-ink">signature: sha256=…</span>
        </div>
      </AppWindow>
    </VisualStage>
  );
}

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

/** Hero: three plan cards without prices. */
export function PricingHeroVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Plans">
        <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-3">
          <PlanCard name="Cloud" icon={Cloud} lines={["Hosted by Driansh", "Updates included", "Onboarding help"]} />
          <PlanCard name="Self-hosted" icon={Server} lines={["Your servers", "Your data", "Driansh support"]} highlight />
          <PlanCard name="Enterprise" icon={ShieldCheck} lines={["Custom integrations", "Dedicated support", "Agreed SLAs"]} />
        </div>
      </AppWindow>
      <FloatingTag icon={Mail}>Pricing on request</FloatingTag>
    </VisualStage>
  );
}

/* ------------------------------------------------------------------ */
/* Request a demo                                                      */
/* ------------------------------------------------------------------ */

/** Hero: a demo agenda. */
export function DemoHeroVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Your demo">
        <PanelHeader title="Agenda" icon={CalendarCheck} right={<Pill className="bg-brand-soft text-brand">Live session</Pill>} />
        <ListRows
          rows={[
            { title: "Your channels in one inbox", meta: "WhatsApp, website chat, email and more", icon: MessageCircle },
            { title: "AI Assistant and automations", meta: "Answers, handoff and routing", icon: Bot },
            { title: "Calls and campaigns", meta: "WhatsApp calling and broadcast messages", icon: PhoneCall },
            { title: "Cloud or self-hosted", meta: "Deployment that fits your rules", icon: Server },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={CalendarCheck}>Built around your use case</FloatingTag>
    </VisualStage>
  );
}
