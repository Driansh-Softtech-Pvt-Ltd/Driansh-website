import type { LucideIcon } from "lucide-react";
import {
  AtSign,
  Bell,
  Bold,
  Bot,
  Braces,
  Building2,
  CircleCheck,
  Code,
  Eye,
  FileText,
  FolderTree,
  Globe,
  Italic,
  Link2,
  Lock,
  Mail,
  MessageCircle,
  MessageSquare,
  Paperclip,
  Play,
  Search,
  ShieldCheck,
  Smile,
  StickyNote,
  Tag,
  UserCheck,
  Users,
  Webhook,
  Workflow,
  Zap,
  Filter,
  Languages,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AppWindow,
  Bubble,
  ChatThread,
  Composer,
  FlowSteps,
  FloatingTag,
  FormFields,
  ListRows,
  OptionChips,
  VisualStage,
} from "./primitives";

/*
 * Illustrations for EngageOne workspace features: live chat, collaboration,
 * pre-chat forms, help center, chatbots, automations and mobile apps.
 * Original mock-ups drawn in code with generic sample data.
 */

/* ---------- local building blocks ---------- */

/** Website chat widget panel as a visitor sees it. */
function WidgetFrame({ children, footer, className }: { children: React.ReactNode; footer?: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn("dark-tokens flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-card text-left text-slate-700 shadow-xl", className)}
      aria-hidden="true"
    >
      <div className="bg-brand-gradient px-4 py-3 text-white">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">YC</span>
          <span>
            <span className="block text-xs font-semibold">Your Company</span>
            <span className="block text-[10px] text-white/80">Typically replies in a few minutes</span>
          </span>
        </div>
      </div>
      <div className="flex-1">{children}</div>
      {footer}
    </div>
  );
}

/** Three dots shown while someone is typing. */
function TypingDots() {
  return (
    <span className="flex w-12 items-center gap-1 self-start rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2.5">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
    </span>
  );
}

/** Small icon + title tile, used inside mini card illustrations. */
function MiniTile({ icon: Icon, children, className }: { icon: LucideIcon; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 rounded-xl border border-slate-100 bg-card px-3 py-2 text-xs text-ink shadow-sm", className)}>
      <Icon className="h-4 w-4 shrink-0 text-brand" />
      <span className="truncate">{children}</span>
    </div>
  );
}

/* ---------- website live chat ---------- */

/** Two widget states: the welcome screen and a live conversation. */
export function LiveChatWidgetsVisual() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      <WidgetFrame
        footer={
          <div className="m-3 rounded-xl bg-brand-solid px-3 py-2 text-center text-[11px] font-semibold text-white">Start a conversation</div>
        }
      >
        <div className="space-y-2 p-4 text-xs">
          <p className="text-sm font-semibold text-ink">Hi there 👋</p>
          <p className="text-slate-600">Ask us anything. We speak English, हिन्दी and Español.</p>
          <div className="flex flex-wrap gap-1 pt-2">
            {["EN", "HI", "ES"].map((lang) => (
              <span key={lang} className="rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-semibold text-brand">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </WidgetFrame>
      <WidgetFrame
        footer={
          <div className="m-3 flex items-center gap-2 rounded-xl border border-slate-200 px-2.5 py-2 text-[10px] text-slate-400">
            Type a message… <Smile className="ml-auto h-3.5 w-3.5" /> <Paperclip className="h-3.5 w-3.5" />
          </div>
        }
      >
        <ChatThread className="p-3">
          <Bubble from="agent">Hi! How can we help today?</Bubble>
          <Bubble>Can I pay in instalments? 🙂</Bubble>
          <Bubble>
            <span className="flex items-center gap-1.5">
              <FileText className="h-3 w-3" /> quote.pdf
            </span>
          </Bubble>
          <TypingDots />
        </ChatThread>
      </WidgetFrame>
    </div>
  );
}

/** Several brand inboxes in one account, each with its own team access. */
export function MultiBrandInboxVisual() {
  return (
    <VisualStage>
      <AppWindow title="Settings · Inboxes">
        <ListRows
          rows={[
            { title: "Store website", meta: "Website chat · Sales, Support", icon: MessageSquare, badge: "8 agents", active: true },
            { title: "Mobile app", meta: "Website chat · App support", icon: MessageSquare, tint: "bg-violet-100 text-violet-600", badge: "4 agents" },
            { title: "Partner portal", meta: "Website chat · Partner team", icon: Building2, tint: "bg-amber-100 text-amber-700", badge: "2 agents" },
            { title: "Billing", meta: "Email · Accounts", icon: Mail, tint: "bg-sky-100 text-sky-600", badge: "3 agents" },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Lock}>Access set per inbox</FloatingTag>
    </VisualStage>
  );
}

/* ---------- team collaboration ---------- */

/** Conversation with assignment, a teammate mention and a status. */
export function TeamInboxHeroVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Shared inbox">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5 text-[11px]">
          <span className="font-semibold text-ink">Priya · Refund request</span>
          <span className="ml-auto flex items-center gap-1 rounded-full bg-brand-soft px-2 py-0.5 font-semibold text-brand">
            <UserCheck className="h-3 w-3" /> Rahul
          </span>
          <span className="rounded-full bg-amber-50 px-2 py-0.5 font-semibold text-amber-700">Pending</span>
        </div>
        <ChatThread>
          <Bubble>I returned the shoes last week. Any update on my refund?</Bubble>
          <Bubble from="note">@Meera can you confirm the return reached the warehouse?</Bubble>
          <Bubble from="note">Received yesterday. Refund approved ✅</Bubble>
          <Bubble from="agent">Good news, Priya! Your refund is on its way.</Bubble>
        </ChatThread>
        <Composer />
      </AppWindow>
      <FloatingTag icon={Users}>Customers and team in one place</FloatingTag>
    </VisualStage>
  );
}

/** Conversation list with Mine / Unassigned / All tabs and assignees. */
export function SharedInboxListVisual() {
  return (
    <VisualStage>
      <AppWindow title="Conversations">
        <div className="flex gap-4 border-b border-slate-100 px-4 pt-3 text-[11px] font-semibold">
          <span className="border-b-2 border-brand pb-2 text-brand">Mine 4</span>
          <span className="pb-2 text-slate-500">Unassigned 2</span>
          <span className="pb-2 text-slate-500">All 11</span>
        </div>
        <ListRows
          rows={[
            { title: "Priya · Refund request", meta: "Assigned to Rahul · Pending", icon: UserCheck, badge: "Billing", active: true },
            { title: "Arjun · Login issue", meta: "Assigned to Meera · Open", icon: UserCheck, badge: "Tech" },
            { title: "Neha · Bulk order", meta: "Sales team · Open", icon: Users, tint: "bg-violet-100 text-violet-600", badge: "Sales" },
            { title: "Kavya · Thank you!", meta: "Resolved", icon: CircleCheck, tint: "bg-emerald-100 text-emerald-600" },
          ]}
        />
      </AppWindow>
    </VisualStage>
  );
}

/** Private note with an @mention inside a customer thread. */
export function PrivateNotesVisual() {
  return (
    <VisualStage>
      <AppWindow title="Conversation · Arjun">
        <ChatThread>
          <Bubble>The app logs me out every few minutes.</Bubble>
          <Bubble from="note">
            <span className="font-semibold">@Meera</span> is this the session bug fixed in the last release?
          </Bubble>
          <Bubble from="note">Yes. Ask him to update the app.</Bubble>
          <Bubble from="agent">Please update to the latest version, Arjun. That fixes it.</Bubble>
        </ChatThread>
        <div className="mx-4 mb-4 flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] text-amber-800">
          <StickyNote className="h-3.5 w-3.5" /> Private note · only your team sees this
          <AtSign className="ml-auto h-3.5 w-3.5" />
        </div>
      </AppWindow>
      <FloatingTag icon={Lock}>Hidden from the customer</FloatingTag>
    </VisualStage>
  );
}

/** Slash command opening saved replies in the reply box. */
export function CannedResponsesVisual() {
  return (
    <VisualStage>
      <AppWindow title="Conversation · Neha">
        <ChatThread>
          <Bubble>What are your delivery charges?</Bubble>
        </ChatThread>
        <ul className="mx-4 space-y-1 rounded-xl border border-slate-200 p-2 text-xs shadow-sm">
          {[
            { code: "delivery", text: "Delivery is free on orders above ₹999…" },
            { code: "delivery-time", text: "Orders usually arrive in 3–5 working days…" },
            { code: "returns", text: "You can return any item within 14 days…" },
          ].map((reply, i) => (
            <li key={reply.code} className={cn("rounded-lg px-2.5 py-1.5", i === 0 && "bg-brand-soft/60")}>
              <span className="font-mono text-[10px] font-semibold text-brand">/{reply.code}</span>
              <span className="block truncate text-slate-600">{reply.text}</span>
            </li>
          ))}
        </ul>
        <div className="mx-4 my-4 flex items-center gap-2 rounded-xl border border-brand/40 px-3 py-2 text-[11px] text-ink">
          <span className="font-mono">/deliv</span>
          <span className="ml-auto rounded-md bg-brand-gradient px-2 py-0.5 text-[10px] font-semibold text-white">Send</span>
        </div>
      </AppWindow>
      <FloatingTag icon={Zap}>Saved replies with one slash</FloatingTag>
    </VisualStage>
  );
}

/* ---------- pre-chat forms ---------- */

/** Widget asking for name and email before the chat starts. */
export function PreChatFormVisual() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <WidgetFrame
        footer={<div className="m-3 rounded-xl bg-brand-solid px-3 py-2 text-center text-[11px] font-semibold text-white">Start conversation</div>}
      >
        <div className="space-y-2.5 p-4 text-xs">
          <p className="text-slate-600">Tell us a little about you so we can help faster.</p>
          {[
            ["Full name", "Priya"],
            ["Email", "priya@example.com"],
            ["Order number", "#1042"],
          ].map(([label, value]) => (
            <label key={label} className="block">
              <span className="text-[10px] font-medium text-slate-500">{label}</span>
              <span className="mt-0.5 block rounded-lg border border-slate-200 px-2.5 py-1.5 text-ink">{value}</span>
            </label>
          ))}
          <label className="block">
            <span className="text-[10px] font-medium text-slate-500">How can we help?</span>
            <span className="mt-0.5 block h-10 rounded-lg border border-slate-200" />
          </label>
        </div>
      </WidgetFrame>
    </div>
  );
}

/** Pre-chat form settings: enable, pick fields, add intro text. */
export function PreChatSettingsVisual() {
  return (
    <VisualStage>
      <AppWindow title="Inbox settings · Pre-chat form">
        <FormFields
          fields={[
            { label: "Enable form", kind: "toggle" },
            { label: "Intro text", value: "Tell us a little about you" },
          ]}
        />
        <div className="border-t border-slate-100 p-4">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">Fields</div>
          <ul className="space-y-1.5 text-xs">
            {[
              ["Full name", "Required"],
              ["Email", "Required"],
              ["Phone number", "Optional"],
            ].map(([field, rule]) => (
              <li key={field} className="flex items-center gap-2 rounded-lg border border-slate-100 px-2.5 py-1.5">
                <CircleCheck className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-ink">{field}</span>
                <span className="ml-auto text-[10px] text-slate-500">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </AppWindow>
      <FloatingTag icon={CircleCheck}>Live on your widget</FloatingTag>
    </VisualStage>
  );
}

/** Form fields mapped to custom attributes on the contact. */
export function PreChatMappingVisual() {
  return (
    <VisualStage>
      <AppWindow title="Pre-chat form · Custom attributes">
        <ul className="space-y-2 p-4 text-xs">
          {[
            ["Order number", "order_number", "Conversation"],
            ["Company", "company_name", "Contact"],
            ["Plan", "plan_type", "Contact"],
          ].map(([field, attribute, level]) => (
            <li key={field} className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
              <span className="truncate rounded-lg border border-slate-200 px-2.5 py-1.5 text-ink">{field}</span>
              <Link2 className="h-3.5 w-3.5 text-brand" />
              <span className="truncate rounded-lg border border-brand/30 bg-brand-soft/60 px-2.5 py-1.5 font-mono text-[10px] text-brand">
                {attribute} · {level}
              </span>
            </li>
          ))}
        </ul>
      </AppWindow>
      <FloatingTag icon={Tag}>Saved on the contact automatically</FloatingTag>
    </VisualStage>
  );
}

/* ---------- help center ---------- */

/** Public help center portal with search, categories and articles. */
export function HelpCenterHeroVisual() {
  return (
    <VisualStage>
      <AppWindow title="help.yourcompany.com">
        <div className="bg-brand-soft/60 px-4 py-5 text-center">
          <div className="text-sm font-semibold text-ink">How can we help?</div>
          <div className="mx-auto mt-2 flex max-w-xs items-center gap-2 rounded-lg border border-slate-200 bg-card px-3 py-1.5 text-[11px] text-slate-400">
            <Search className="h-3.5 w-3.5" /> Search articles…
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-4">
          {[
            ["Getting started", "6 articles"],
            ["Billing & plans", "4 articles"],
            ["Orders & delivery", "8 articles"],
            ["Account & security", "5 articles"],
          ].map(([category, count]) => (
            <div key={category} className="rounded-xl border border-slate-100 p-3">
              <FolderTree className="mb-1 h-4 w-4 text-brand" />
              <div className="truncate text-xs font-semibold text-ink">{category}</div>
              <div className="text-[10px] text-slate-500">{count}</div>
            </div>
          ))}
        </div>
      </AppWindow>
      <FloatingTag icon={Search}>Customers find answers themselves</FloatingTag>
    </VisualStage>
  );
}

/** Several portals managed from one dashboard. */
export function HelpPortalsVisual() {
  return (
    <VisualStage>
      <AppWindow title="Help Center · Portals">
        <ListRows
          rows={[
            { title: "User guide", meta: "help.yourcompany.com · 3 locales", icon: Globe, badge: "42 articles", active: true },
            { title: "Partner handbook", meta: "partners.yourcompany.com", icon: Building2, tint: "bg-amber-100 text-amber-700", badge: "18 articles" },
            { title: "Second brand docs", meta: "docs.secondbrand.com", icon: FileText, tint: "bg-violet-100 text-violet-600", badge: "25 articles" },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Globe}>One dashboard, many portals</FloatingTag>
    </VisualStage>
  );
}

/** Article editor with formatting, an embedded video, draft status and SEO fields. */
export function ArticleEditorVisual() {
  return (
    <VisualStage>
      <AppWindow title="Help Center · Edit article">
        <div className="flex items-center gap-1 border-b border-slate-100 px-4 py-2 text-slate-500">
          <Bold className="h-3.5 w-3.5" />
          <Italic className="h-3.5 w-3.5" />
          <Link2 className="h-3.5 w-3.5" />
          <Code className="h-3.5 w-3.5" />
          <span className="ml-auto rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700">Draft</span>
        </div>
        <div className="space-y-2 p-4 text-xs">
          <div className="text-sm font-semibold text-ink">How to track your order</div>
          <p className="text-slate-600">Open the Orders page and select the order you want to follow.</p>
          <div className="flex h-20 items-center justify-center rounded-xl bg-linear-to-br from-violet-200 to-sky-200">
            <Play className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="border-t border-slate-100">
          <FormFields
            fields={[
              { label: "Meta title", value: "Track your order" },
              { label: "Meta description", value: "Follow your delivery step by step" },
            ]}
            button="Publish"
          />
        </div>
      </AppWindow>
    </VisualStage>
  );
}

export type HelpCardKind = "ssl" | "locales" | "widget" | "categories" | "api" | "private";

/** Small illustration inside each help center feature card. */
export function HelpCenterCardVisual({ kind }: { kind: HelpCardKind }) {
  const content: Record<HelpCardKind, React.ReactNode> = {
    ssl: (
      <>
        <MiniTile icon={ShieldCheck}>https://help.yourcompany.com</MiniTile>
        <MiniTile icon={CircleCheck} className="ml-6">Certificate active</MiniTile>
      </>
    ),
    locales: (
      <>
        <MiniTile icon={Languages}>English · Default</MiniTile>
        <MiniTile icon={Globe} className="ml-4">हिन्दी</MiniTile>
        <MiniTile icon={Globe} className="ml-8">Español</MiniTile>
      </>
    ),
    widget: (
      <>
        <MiniTile icon={Search}>Search help articles</MiniTile>
        <MiniTile icon={MessageCircle} className="ml-6">Chat with us</MiniTile>
      </>
    ),
    categories: (
      <>
        <MiniTile icon={FolderTree}>Getting started</MiniTile>
        <MiniTile icon={FileText} className="ml-6">Create your account</MiniTile>
        <MiniTile icon={FileText} className="ml-6">Invite your team</MiniTile>
      </>
    ),
    api: (
      <pre className="light-tokens w-full rounded-xl bg-navy p-3 font-mono text-[10px] leading-relaxed text-violet-100">
        {"GET …/portals/{slug}/articles\n{ \"title\": \"Track your order\" }"}
      </pre>
    ),
    private: (
      <>
        <MiniTile icon={Lock}>Partner pricing guide</MiniTile>
        <MiniTile icon={Eye} className="ml-6">Visible to signed-in users</MiniTile>
      </>
    ),
  };
  return (
    <div className="flex w-full flex-col gap-2" aria-hidden="true">
      {content[kind]}
    </div>
  );
}

/* ---------- chatbots ---------- */

/** Bot options that plug into the inbox. */
export function BotPlatformsVisual() {
  return (
    <VisualStage>
      <AppWindow title="Settings · Bots">
        <ListRows
          rows={[
            { title: "Dialogflow", meta: "Connect an agent to any inbox", icon: Bot, badge: "Connected", active: true },
            { title: "Agent bot API", meta: "Plug in Rasa or a bot you built", icon: Braces, tint: "bg-violet-100 text-violet-600" },
            { title: "Webhooks", meta: "Send conversation events to any tool", icon: Webhook, tint: "bg-amber-100 text-amber-700" },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Bot}>Bots answer first</FloatingTag>
    </VisualStage>
  );
}

/** Bot reply with option buttons, then a handoff to a person. */
export function BotHandoffVisual() {
  return (
    <VisualStage>
      <AppWindow title="Website chat · Rahul">
        <ChatThread>
          <Bubble>I want to change my delivery date.</Bubble>
          <Bubble from="bot">I can help with that. What would you like to do?</Bubble>
          <OptionChips options={["Track order", "Change date", "Talk to a person"]} />
          <Bubble>Talk to a person</Bubble>
          <Bubble from="system">Bot handed over to Priya · full history kept</Bubble>
          <Bubble from="agent">Hi Rahul, I can see your order. Which date suits you?</Bubble>
        </ChatThread>
      </AppWindow>
      <FloatingTag icon={UserCheck}>No need to repeat yourself</FloatingTag>
    </VisualStage>
  );
}

/** Card, form and option messages from a bot. */
export function RichMessagesVisual() {
  return (
    <VisualStage>
      <AppWindow title="Website chat · Rich messages">
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-slate-100">
            <div className="h-16 bg-linear-to-br from-sky-200 to-violet-200" />
            <div className="space-y-1 p-3 text-xs">
              <div className="font-semibold text-ink">Running shoes</div>
              <div className="text-[10px] text-slate-500">Light, breathable, all sizes</div>
              <div className="rounded-md bg-brand-solid px-2 py-1 text-center text-[10px] font-semibold text-white">View product</div>
            </div>
          </div>
          <div className="space-y-2 rounded-xl border border-slate-100 p-3 text-xs">
            <div className="font-semibold text-ink">Leave your email</div>
            <div className="rounded-md border border-slate-200 px-2 py-1 text-[10px] text-slate-400">you@example.com</div>
            <div className="rounded-md bg-brand-solid px-2 py-1 text-center text-[10px] font-semibold text-white">Submit</div>
          </div>
        </div>
        <ChatThread className="pt-0">
          <Bubble from="bot">How was your experience today?</Bubble>
          <OptionChips options={["😀 Great", "🙂 Okay", "🙁 Not good"]} />
        </ChatThread>
      </AppWindow>
    </VisualStage>
  );
}

/* ---------- automations ---------- */

/** An automation rule shown as When → If → Then. */
export function AutomationRuleVisual() {
  return (
    <VisualStage>
      <AppWindow title="Automations · New rule">
        <div className="px-4 pt-4 text-xs font-semibold text-ink">Route billing chats</div>
        <FlowSteps
          steps={[
            { label: "When", detail: "Conversation created", icon: Zap },
            { label: "If", detail: "Message contains “invoice”", icon: Filter },
            { label: "Then", detail: "Assign Billing team + add label", icon: Workflow },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={CircleCheck}>Rule active</FloatingTag>
    </VisualStage>
  );
}

/** Dropdown of triggering events. */
export function AutomationEventsVisual() {
  return (
    <VisualStage>
      <AppWindow title="Automations · Event">
        <ul className="m-4 space-y-1 rounded-xl border border-slate-200 p-2 text-xs shadow-sm">
          {["Conversation created", "Conversation updated", "Conversation opened", "Conversation resolved", "Message created"].map((event, i) => (
            <li key={event} className={cn("flex items-center gap-2 rounded-lg px-2.5 py-1.5", i === 0 ? "bg-brand-soft/60 text-brand" : "text-ink")}>
              <Zap className="h-3.5 w-3.5" /> {event}
            </li>
          ))}
        </ul>
      </AppWindow>
    </VisualStage>
  );
}

/** Condition rows joined with AND / OR. */
export function AutomationConditionsVisual() {
  return (
    <VisualStage>
      <AppWindow title="Automations · Conditions">
        <div className="space-y-2 p-4 text-xs">
          {[
            ["Status", "is", "Open", "AND"],
            ["Browser language", "is", "Hindi", "OR"],
            ["Email subject", "contains", "refund", ""],
          ].map(([attribute, operator, value, join]) => (
            <div key={attribute}>
              <div className="grid grid-cols-3 gap-1.5">
                <span className="truncate rounded-lg border border-slate-200 px-2 py-1.5 text-ink">{attribute}</span>
                <span className="truncate rounded-lg border border-slate-200 px-2 py-1.5 text-slate-500">{operator}</span>
                <span className="truncate rounded-lg border border-brand/30 bg-brand-soft/60 px-2 py-1.5 text-brand">{value}</span>
              </div>
              {join && <div className="mt-2 text-center text-[10px] font-semibold text-slate-400">{join}</div>}
            </div>
          ))}
        </div>
      </AppWindow>
    </VisualStage>
  );
}

/** Actions a rule can take. */
export function AutomationActionsVisual() {
  return (
    <VisualStage>
      <AppWindow title="Automations · Actions">
        <ListRows
          rows={[
            { title: "Assign to a team", meta: "Billing", icon: Users },
            { title: "Add a label", meta: "priority", icon: Tag, tint: "bg-violet-100 text-violet-600" },
            { title: "Send a message", meta: "We’ve received your request", icon: MessageSquare, tint: "bg-emerald-100 text-emerald-600" },
            { title: "Email the team", meta: "Notify Billing by email", icon: Mail, tint: "bg-sky-100 text-sky-600" },
            { title: "Send a webhook event", meta: "Update your own systems", icon: Webhook, tint: "bg-amber-100 text-amber-700" },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Bot}>Runs on its own</FloatingTag>
    </VisualStage>
  );
}

/* ---------- mobile apps ---------- */

/** Phone showing the conversation list with a new-message notification. */
export function MobileAppVisual() {
  return (
    <div className="relative mx-auto w-64 select-none" aria-hidden="true">
      <div className="dark-tokens overflow-hidden rounded-[2.5rem] border-[6px] border-slate-800 bg-card text-left text-slate-700 shadow-2xl shadow-violet-900/40">
        <div className="mx-auto mt-2 h-4 w-20 rounded-full bg-slate-800" />
        <div className="flex items-center justify-between px-4 pb-2 pt-3">
          <span className="text-sm font-semibold text-ink">Conversations</span>
          <Search className="h-4 w-4 text-slate-400" />
        </div>
        <div className="flex gap-3 border-b border-slate-100 px-4 text-[11px] font-semibold">
          <span className="border-b-2 border-brand pb-1.5 text-brand">Mine</span>
          <span className="pb-1.5 text-slate-500">Unassigned</span>
          <span className="pb-1.5 text-slate-500">All</span>
        </div>
        <ListRows
          className="p-3"
          rows={[
            { title: "Priya", meta: "Is my order on the way?", icon: MessageCircle, tint: "bg-emerald-100 text-emerald-600", badge: "2", active: true },
            { title: "Rahul", meta: "Thanks, that worked!", icon: MessageSquare },
            { title: "Meera", meta: "Can I change my plan?", icon: Mail, tint: "bg-sky-100 text-sky-600" },
            { title: "Arjun", meta: "Booking for Saturday", icon: MessageSquare, badge: "1" },
          ]}
        />
        <div className="h-6" />
      </div>
      <div className="dark-tokens absolute -right-10 top-16 hidden w-52 items-start gap-2 rounded-xl bg-card p-3 text-xs shadow-xl sm:flex">
        <Bell className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
        <span>
          <span className="block font-semibold text-ink">New message from Priya</span>
          <span className="block text-[10px] text-slate-500">Is my order on the way?</span>
        </span>
      </div>
    </div>
  );
}
