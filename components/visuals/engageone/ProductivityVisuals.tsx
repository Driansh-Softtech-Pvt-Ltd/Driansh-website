import {
  ArrowRight,
  BarChart3,
  Bell,
  CircleCheck,
  Clock,
  Gauge,
  Globe,
  Keyboard,
  Mail,
  MessageCircle,
  RotateCcw,
  Search,
  Settings,
  Square,
  SquareCheck,
  Tag,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppWindow, Bubble, ChatThread, FloatingTag, KeyCombo, ListRows, VisualStage } from "./primitives";

/*
 * Original illustrations for the EngageOne "Productivity" pages.
 * All sample data is generic and made up.
 */

/* ---------- Agent capacity ---------- */

const CAPACITY = [
  { name: "Priya", used: 6, limit: 8, bar: "w-3/4" },
  { name: "Rahul", used: 8, limit: 8, bar: "w-full" },
  { name: "Anita", used: 3, limit: 8, bar: "w-3/8" },
  { name: "Vikram", used: 5, limit: 10, bar: "w-1/2" },
];

export function AgentCapacityLimitsVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Agent capacity">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3 text-xs">
          <Gauge className="h-4 w-4 text-brand" />
          <span className="font-semibold text-ink">Policy: Standard workload</span>
          <span className="ml-auto rounded-lg border border-slate-200 px-2 py-1 text-[10px] text-ink">Max 8 per agent</span>
        </div>
        <ul className="space-y-2 p-4">
          {CAPACITY.map(({ name, used, limit, bar }) => (
            <li key={name} className="rounded-xl border border-slate-100 px-3 py-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-medium text-ink">{name}</span>
                <span className={cn("text-[10px]", used === limit ? "font-semibold text-rose-600" : "text-slate-500")}>
                  {used} / {limit} conversations
                </span>
              </div>
              <span className="mt-1.5 block h-1.5 rounded-full bg-surface">
                <span className={cn("block h-1.5 rounded-full", used === limit ? "bg-rose-400" : "bg-brand", bar)} />
              </span>
            </li>
          ))}
        </ul>
      </AppWindow>
      <FloatingTag icon={CircleCheck}>Rahul is full · next chat goes to Anita</FloatingTag>
    </VisualStage>
  );
}

const INBOX_LIMITS: { inbox: string; icon: LucideIcon; tint: string; limit: number }[] = [
  { inbox: "Website chat", icon: Globe, tint: "bg-brand-soft text-brand", limit: 10 },
  { inbox: "Email support", icon: Mail, tint: "bg-sky-100 text-sky-600", limit: 15 },
  { inbox: "WhatsApp", icon: MessageCircle, tint: "bg-emerald-100 text-emerald-600", limit: 6 },
];

export function InboxCapacityVisual() {
  return (
    <AppWindow title="EngageOne · Capacity per inbox">
      <ul className="space-y-2 p-4">
        {INBOX_LIMITS.map(({ inbox, icon: Icon, tint, limit }) => (
          <li key={inbox} className="flex items-center gap-2.5 rounded-xl border border-slate-100 px-3 py-2 text-xs">
            <span className={cn("flex h-7 w-7 items-center justify-center rounded-lg", tint)}>
              <Icon className="h-3.5 w-3.5" />
            </span>
            <span className="font-medium text-ink">{inbox}</span>
            <span className="ml-auto flex items-center overflow-hidden rounded-lg border border-slate-200 text-[11px]">
              <span className="px-2 py-1 text-slate-400">−</span>
              <span className="border-x border-slate-200 px-2.5 py-1 font-semibold text-ink">{limit}</span>
              <span className="px-2 py-1 text-slate-400">+</span>
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-end px-4 pb-4">
        <span className="rounded-lg bg-brand px-3 py-1.5 text-[11px] font-semibold text-white">Save limits</span>
      </div>
    </AppWindow>
  );
}

/* ---------- Bulk actions ---------- */

const CONVERSATIONS = [
  { name: "Rahul", text: "Where is my order?", checked: true },
  { name: "Meera", text: "Can I change my plan?", checked: true },
  { name: "Arjun", text: "Refund for last invoice", checked: true },
  { name: "Kavya", text: "Login link not working", checked: false },
];

function ConversationChecklist({ status }: { status?: string }) {
  return (
    <ul className="space-y-1.5 p-4">
      {CONVERSATIONS.map(({ name, text, checked }) => (
        <li
          key={name}
          className={cn(
            "flex items-center gap-2.5 rounded-xl border px-3 py-2 text-xs",
            checked ? "border-brand/30 bg-brand-soft/60" : "border-slate-100"
          )}
        >
          {checked ? <SquareCheck className="h-4 w-4 text-brand" /> : <Square className="h-4 w-4 text-slate-300" />}
          <span className="min-w-0">
            <span className="block font-medium text-ink">{name}</span>
            <span className="block truncate text-[10px] text-slate-500">{text}</span>
          </span>
          {status && <span className="ml-auto rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">{status}</span>}
        </li>
      ))}
    </ul>
  );
}

function ActionBar({ actions }: { actions: { label: string; icon: LucideIcon; primary?: boolean }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-100 bg-surface px-4 py-2.5 text-[10px]">
      <span className="mr-1 font-semibold text-ink">3 selected</span>
      {actions.map(({ label, icon: Icon, primary }) => (
        <span
          key={label}
          className={cn(
            "flex items-center gap-1 rounded-lg px-2 py-1 font-medium",
            primary ? "bg-brand text-white" : "border border-slate-200 bg-white text-ink"
          )}
        >
          <Icon className="h-3 w-3" /> {label}
        </span>
      ))}
    </div>
  );
}

export function BulkActionsVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Conversations">
        <ActionBar
          actions={[
            { label: "Assign agent", icon: UserPlus },
            { label: "Add label", icon: Tag },
            { label: "Snooze", icon: Clock },
            { label: "Resolve", icon: CircleCheck, primary: true },
          ]}
        />
        <ConversationChecklist />
      </AppWindow>
      <FloatingTag icon={CircleCheck}>3 conversations updated</FloatingTag>
    </VisualStage>
  );
}

export function SmartBulkActionsVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Resolved conversations">
        <ActionBar
          actions={[
            { label: "Assign agent", icon: UserPlus },
            { label: "Snooze", icon: Clock },
            { label: "Reopen", icon: RotateCcw, primary: true },
          ]}
        />
        <ConversationChecklist status="Resolved" />
      </AppWindow>
      <FloatingTag icon={Zap}>Suggested: Reopen instead of Resolve</FloatingTag>
    </VisualStage>
  );
}

/* ---------- Canned responses ---------- */

const CANNED = [
  { code: "hours", text: "We're available Monday to Saturday, 9 am – 7 pm." },
  { code: "refund", text: "Refunds reach your account in 5–7 working days." },
  { code: "shipping", text: "Orders ship within 24 hours with tracking." },
  { code: "thanks", text: "Thanks for reaching out! Anything else I can help with?" },
];

export function CannedResponsesListVisual() {
  return (
    <AppWindow title="EngageOne · Canned responses">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 text-xs">
        <span className="font-semibold text-ink">4 saved responses</span>
        <span className="rounded-lg bg-brand px-2.5 py-1 text-[10px] font-semibold text-white">+ Add response</span>
      </div>
      <ul className="space-y-1.5 p-4">
        {CANNED.map(({ code, text }) => (
          <li key={code} className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2 text-xs">
            <span className="w-16 shrink-0 font-mono text-[11px] font-semibold text-brand">{code}</span>
            <span className="truncate text-slate-600">{text}</span>
          </li>
        ))}
      </ul>
    </AppWindow>
  );
}

export function CannedResponsesInChatVisual() {
  return (
    <AppWindow title="EngageOne · Conversation with Meera">
      <ChatThread className="pb-2">
        <Bubble from="customer">Hi! When will I get my refund?</Bubble>
      </ChatThread>
      <div className="mx-4 mb-2 overflow-hidden rounded-xl border border-slate-200 text-xs shadow-lg">
        {CANNED.slice(1, 3).map(({ code, text }, i) => (
          <div key={code} className={cn("px-3 py-2", i === 0 ? "bg-brand-soft" : "bg-white")}>
            <span className="font-mono text-[11px] font-semibold text-brand">{code}</span>
            <span className="block truncate text-[10px] text-slate-500">{text}</span>
          </div>
        ))}
      </div>
      <div className="mx-4 mb-4 flex items-center gap-2 rounded-xl border border-brand/40 px-3 py-2 text-[11px] text-ink">
        <span className="font-mono">/re</span>
        <span className="h-3.5 w-px animate-pulse bg-brand" />
        <span className="ml-auto rounded-md bg-brand-gradient px-2 py-0.5 text-[10px] font-semibold text-white">Send</span>
      </div>
    </AppWindow>
  );
}

export function CannedResponsesSharedVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Team replies">
        <ListRows
          rows={[
            { title: "/refund", meta: "Used by Priya, Rahul and 6 others", badge: "142 uses", icon: Zap, active: true },
            { title: "/hours", meta: "Used by Anita, Meera and 4 others", badge: "98 uses", icon: Zap },
            { title: "/shipping", meta: "Used by Vikram and 3 others", badge: "61 uses", icon: Zap },
          ]}
        />
        <ChatThread className="pt-0">
          <Bubble from="customer">How long do refunds take?</Bubble>
          <Bubble from="agent">Refunds reach your account in 5–7 working days.</Bubble>
        </ChatThread>
      </AppWindow>
      <FloatingTag icon={Users}>Same answer from every agent</FloatingTag>
    </VisualStage>
  );
}

/* ---------- Command bar ---------- */

function CommandPalette({
  query,
  groups,
}: {
  query: string;
  groups: { heading: string; items: { label: string; icon: LucideIcon }[] }[];
}) {
  return (
    <div className="p-4">
      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg">
        <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2.5 text-xs">
          <Search className="h-3.5 w-3.5 text-slate-400" />
          {query ? <span className="text-ink">{query}</span> : <span className="text-slate-400">Search or jump to…</span>}
          <span className="ml-auto">
            <KeyCombo keys={["⌘", "K"]} />
          </span>
        </div>
        {groups.map(({ heading, items }) => (
          <div key={heading} className="px-2 py-2">
            <div className="px-2 pb-1 text-[9px] font-semibold uppercase tracking-wide text-slate-400">{heading}</div>
            {items.map(({ label, icon: Icon }, i) => (
              <div
                key={label}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs",
                  heading === groups[0].heading && i === 0 ? "bg-brand-soft text-brand" : "text-ink"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
                {heading === groups[0].heading && i === 0 && <span className="ml-auto text-[10px]">↵</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CommandBarQuickAccessVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Command bar">
        <CommandPalette
          query=""
          groups={[
            {
              heading: "Suggested",
              items: [
                { label: "Go to conversations", icon: MessageCircle },
                { label: "Go to contacts", icon: Users },
                { label: "Go to reports", icon: BarChart3 },
                { label: "Go to settings", icon: Settings },
              ],
            },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Keyboard}>Press ⌘ K or Ctrl K anywhere</FloatingTag>
    </VisualStage>
  );
}

export function CommandBarNavigationVisual() {
  return (
    <AppWindow title="EngageOne · Command bar">
      <CommandPalette
        query="rep"
        groups={[
          {
            heading: "Navigate",
            items: [
              { label: "Reports overview", icon: BarChart3 },
              { label: "Agent reports", icon: ArrowRight },
              { label: "Inbox reports", icon: ArrowRight },
              { label: "Notifications", icon: Bell },
            ],
          },
        ]}
      />
    </AppWindow>
  );
}

export function CommandBarActionsVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Command bar">
        <CommandPalette
          query="Conversation with Rahul"
          groups={[
            {
              heading: "Conversation actions",
              items: [
                { label: "Assign to agent", icon: UserPlus },
                { label: "Assign to team", icon: Users },
                { label: "Add label", icon: Tag },
                { label: "Snooze until tomorrow", icon: Clock },
                { label: "Resolve conversation", icon: CircleCheck },
              ],
            },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Zap}>Actions that fit the open conversation</FloatingTag>
    </VisualStage>
  );
}

/* ---------- Keyboard shortcuts ---------- */

function ShortcutRows({ rows }: { rows: { action: string; keys: string[] }[] }) {
  return (
    <ul className="space-y-1.5 p-4">
      {rows.map(({ action, keys }) => (
        <li key={action} className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2 text-xs">
          <span className="text-ink">{action}</span>
          <span className="ml-auto">
            <KeyCombo keys={keys} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ShortcutsMenuVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Keyboard shortcuts">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3 text-xs">
          <Keyboard className="h-4 w-4 text-brand" />
          <span className="font-semibold text-ink">Show all shortcuts</span>
          <span className="ml-auto">
            <KeyCombo keys={["⌘", "/"]} />
          </span>
        </div>
        <ShortcutRows
          rows={[
            { action: "Go to conversations", keys: ["Alt", "C"] },
            { action: "Go to contacts", keys: ["Alt", "V"] },
            { action: "Go to reports", keys: ["Alt", "R"] },
            { action: "Go to settings", keys: ["Alt", "S"] },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Keyboard}>One shortcut to remember</FloatingTag>
    </VisualStage>
  );
}

export function ShortcutsListVisual() {
  return (
    <AppWindow title="EngageOne · Keyboard shortcuts">
      <ShortcutRows
        rows={[
          { action: "Next / previous conversation", keys: ["Alt", "J", "K"] },
          { action: "Resolve conversation", keys: ["Alt", "E"] },
          { action: "Resolve and go to next", keys: ["⌘", "Alt", "E"] },
          { action: "Switch to private note", keys: ["Alt", "P"] },
          { action: "Add attachment", keys: ["⌘", "Alt", "A"] },
          { action: "Move to next tab", keys: ["Alt", "N"] },
        ]}
      />
    </AppWindow>
  );
}
