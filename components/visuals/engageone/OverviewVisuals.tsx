import {
  BarChart3,
  BookOpenText,
  Bot,
  CheckCircle2,
  Facebook,
  FileSearch,
  Instagram,
  KeyRound,
  Lock,
  Mail,
  Megaphone,
  MessageCircle,
  MessageCircleMore,
  Phone,
  PhoneCall,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Users2,
} from "lucide-react";
import {
  AppWindow,
  BarChart,
  Bubble,
  ChatThread,
  FloatingTag,
  KeyCombo,
  ListRows,
  StatTiles,
  VisualStage,
} from "./primitives";

/* Illustrations for the EngageOne overview page. Sample data only. */

const CHANNELS = [
  { label: "Website chat", icon: MessageCircleMore, tint: "bg-violet-100 text-violet-600" },
  { label: "WhatsApp", icon: MessageCircle, tint: "bg-emerald-100 text-emerald-600" },
  { label: "Email", icon: Mail, tint: "bg-sky-100 text-sky-600" },
  { label: "Messenger", icon: Facebook, tint: "bg-blue-100 text-blue-600" },
  { label: "Instagram", icon: Instagram, tint: "bg-pink-100 text-pink-600" },
  { label: "Telegram", icon: Send, tint: "bg-cyan-100 text-cyan-600" },
  { label: "SMS", icon: Smartphone, tint: "bg-amber-100 text-amber-600" },
  { label: "Phone", icon: Phone, tint: "bg-slate-100 text-slate-600" },
];

/** Channels flowing into one inbox. */
export function ChannelsVisual() {
  return (
    <VisualStage>
      <AppWindow title="Settings · Inboxes">
        <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-4">
          {CHANNELS.map(({ label, icon: Icon, tint }) => (
            <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl border border-slate-100 bg-surface px-2 py-3 text-center">
              <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${tint}`}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-[11px] font-medium text-ink">{label}</span>
            </div>
          ))}
        </div>
        <div className="mx-4 mb-4 flex items-center justify-center gap-2 rounded-xl bg-brand-soft px-3 py-2 text-xs font-semibold text-brand">
          <CheckCircle2 className="h-4 w-4" /> All conversations land in one shared inbox
        </div>
      </AppWindow>
      <FloatingTag icon={CheckCircle2}>Connected</FloatingTag>
    </VisualStage>
  );
}

/** AI Assistant answers first, then hands over. */
export function AiAssistantVisual() {
  return (
    <VisualStage>
      <AppWindow title="Website chat · AI Assistant">
        <ChatThread>
          <Bubble>What are your opening hours on Sunday?</Bubble>
          <Bubble from="bot">We are open on Sunday from 10:00 AM to 6:00 PM. Anything else I can help with?</Bubble>
          <Bubble>I want to change my billing plan.</Bubble>
          <Bubble from="bot">I will connect you with our billing team now.</Bubble>
          <Bubble from="system">Handed over to Billing team</Bubble>
        </ChatThread>
      </AppWindow>
      <FloatingTag icon={Bot}>EngageOne AI Assistant</FloatingTag>
    </VisualStage>
  );
}

/** Phone and WhatsApp calling. */
export function CallingVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Call">
        <div className="flex items-center gap-3 p-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <PhoneCall className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-ink">On call · 02:14</div>
            <div className="text-[11px] text-slate-500">Phone inbox · Sales team</div>
          </div>
          <span className="rounded-lg bg-rose-500 px-3 py-1.5 text-[11px] font-semibold text-white">End</span>
        </div>
        <ChatThread className="border-t border-slate-100">
          <Bubble from="system">Incoming call answered</Bubble>
          <Bubble from="note">Customer wants a quote for 20 seats. Send pricing after the call.</Bubble>
        </ChatThread>
      </AppWindow>
      <FloatingTag icon={Phone}>Phone and WhatsApp calls</FloatingTag>
    </VisualStage>
  );
}

/** Campaign list. */
export function CampaignsVisual() {
  return (
    <VisualStage>
      <AppWindow title="Campaigns">
        <ListRows
          rows={[
            { title: "New product launch", meta: "WhatsApp template · Customers segment", badge: "Scheduled", icon: Megaphone, active: true },
            { title: "Appointment reminder", meta: "SMS · Tomorrow's bookings", badge: "Sent", icon: Smartphone },
            { title: "Pricing page visitors", meta: "Website chat · Shown after 30 seconds", badge: "Live", icon: MessageCircleMore },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Megaphone}>WhatsApp, SMS and website</FloatingTag>
    </VisualStage>
  );
}

/** Team inbox with canned responses and shortcuts. */
export function TeamInboxVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Conversation">
        <ChatThread>
          <Bubble>Can I get an invoice for last month?</Bubble>
          <Bubble from="note">@Priya can you check the billing account?</Bubble>
          <Bubble from="agent">Sure! I have sent the invoice to your registered email.</Bubble>
        </ChatThread>
        <div className="mx-4 mb-2 rounded-xl border border-slate-200 bg-card p-2 text-[11px] shadow-sm">
          <div className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">Canned responses</div>
          <div className="rounded-lg bg-brand-soft px-2 py-1 text-ink">/invoice · Sure! I have sent the invoice…</div>
          <div className="px-2 py-1 text-slate-500">/refund · Your refund has been started…</div>
        </div>
        <div className="flex items-center justify-between px-4 pb-4 text-[10px] text-slate-500">
          <span>Next conversation</span>
          <KeyCombo keys={["Alt", "J"]} />
        </div>
      </AppWindow>
      <FloatingTag icon={Users2}>Private notes and mentions</FloatingTag>
    </VisualStage>
  );
}

/** Help center portal. */
export function HelpCenterVisual() {
  return (
    <VisualStage>
      <AppWindow title="help.yourcompany.com">
        <div className="bg-brand-gradient px-4 py-5 text-white">
          <div className="text-sm font-semibold">How can we help?</div>
          <div className="mt-2 flex items-center gap-2 rounded-lg bg-card px-3 py-1.5 text-[11px] text-slate-400">
            <Search className="h-3.5 w-3.5" /> Search articles
          </div>
        </div>
        <ListRows
          rows={[
            { title: "Getting started", meta: "6 articles", icon: BookOpenText },
            { title: "Billing and payments", meta: "4 articles", icon: BookOpenText },
            { title: "Shipping and returns", meta: "5 articles", icon: BookOpenText },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={BookOpenText}>Your own help center</FloatingTag>
    </VisualStage>
  );
}

/** Reports overview. */
export function ReportsVisual() {
  return (
    <VisualStage>
      <AppWindow title="Reports · Last 7 days">
        <StatTiles
          items={[
            { label: "Conversations", value: "642" },
            { label: "First response", value: "2m" },
            { label: "Resolved", value: "598" },
            { label: "CSAT", value: "4.7 / 5" },
          ]}
        />
        <BarChart values={[45, 60, 52, 75, 68, 40, 28]} labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]} highlight={3} />
      </AppWindow>
      <FloatingTag icon={BarChart3}>Live and historical reports</FloatingTag>
    </VisualStage>
  );
}

/** Security settings. */
export function SecurityVisual() {
  return (
    <VisualStage>
      <AppWindow title="Settings · Security">
        <ListRows
          rows={[
            { title: "Single sign-on (SAML)", meta: "Sign in with your identity provider", badge: "On", icon: KeyRound },
            { title: "Two-factor authentication", meta: "Extra check at sign-in", badge: "On", icon: Lock },
            { title: "Custom roles", meta: "Choose what each role can see and do", icon: Users2 },
            { title: "Audit logs", meta: "Who changed what, and when", icon: FileSearch },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={ShieldCheck}>Access under your control</FloatingTag>
    </VisualStage>
  );
}
