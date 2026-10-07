import {
  BarChart3,
  Bold,
  BookOpen,
  Bot,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  Eye,
  FileText,
  Filter,
  Globe,
  Hash,
  Image as ImageIcon,
  Inbox,
  Instagram,
  Italic,
  LayoutGrid,
  Link2,
  List,
  ListFilter,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  MessageCircleMore,
  MessagesSquare,
  MoreHorizontal,
  Phone,
  Plus,
  RotateCcw,
  Search,
  SendHorizontal,
  Settings,
  Sparkles,
  Tag,
  Upload,
  UserPlus,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Realistic, decorative EngageOne screens for the home hero. Everything here is
 * sample data: names are fictional, emails use example.com and numbers are masked.
 */

const AVATAR_TINTS = {
  violet: "bg-violet-100 text-violet-700",
  emerald: "bg-emerald-100 text-emerald-700",
  pink: "bg-pink-100 text-pink-700",
  amber: "bg-amber-100 text-amber-700",
  sky: "bg-sky-100 text-sky-700",
  rose: "bg-rose-100 text-rose-700",
  indigo: "bg-indigo-100 text-indigo-700",
  teal: "bg-teal-100 text-teal-700",
} as const;

type Tint = keyof typeof AVATAR_TINTS;

function Avatar({ initials, tint, className }: { initials: string; tint: Tint; className?: string }) {
  return (
    <span
      className={cn(
        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
        AVATAR_TINTS[tint],
        className
      )}
    >
      {initials}
    </span>
  );
}

const LABEL_TINTS: Record<string, string> = {
  "order-delay": "bg-amber-50 text-amber-700 ring-amber-200",
  refund: "bg-rose-50 text-rose-700 ring-rose-200",
  shipping: "bg-sky-50 text-sky-700 ring-sky-200",
  billing: "bg-indigo-50 text-indigo-700 ring-indigo-200",
  feedback: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  onboarding: "bg-violet-50 text-violet-700 ring-violet-200",
  vip: "bg-amber-50 text-amber-700 ring-amber-200",
  retail: "bg-sky-50 text-sky-700 ring-sky-200",
  saas: "bg-violet-50 text-violet-700 ring-violet-200",
  repeat: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  wholesale: "bg-teal-50 text-teal-700 ring-teal-200",
};

function LabelChip({ label }: { label: string }) {
  return (
    <span className={cn("inline-flex items-center rounded px-1.5 py-px text-[10px] font-medium ring-1 ring-inset", LABEL_TINTS[label])}>
      {label}
    </span>
  );
}

function NavItem({
  icon: Icon,
  label,
  count,
  active,
  indent,
  chevron,
}: {
  icon?: LucideIcon;
  label: string;
  count?: string;
  active?: boolean;
  indent?: boolean;
  chevron?: "down" | "right";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px]",
        indent && "ms-5",
        active ? "bg-brand-soft font-semibold text-brand" : "text-slate-600"
      )}
    >
      {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
      <span className="truncate">{label}</span>
      {count && (
        <span className={cn("ms-auto rounded px-1.5 text-[10px] font-semibold", active ? "bg-white text-brand" : "bg-slate-200/70 text-slate-600")}>
          {count}
        </span>
      )}
      {chevron && (
        <span className={cn("text-slate-400", !count && "ms-auto")}>
          {chevron === "down" ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
        </span>
      )}
    </div>
  );
}

function SearchBox({ placeholder, className, shortcut }: { placeholder: string; className?: string; shortcut?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] text-slate-400", className)}>
      <Search className="h-3.5 w-3.5" />
      <span className="truncate">{placeholder}</span>
      {shortcut && <span className="ms-auto rounded border border-slate-200 px-1 text-[10px] text-slate-400">⌘K</span>}
    </div>
  );
}

function IconButton({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 text-slate-500">
      <Icon className="h-3.5 w-3.5" />
    </span>
  );
}

/* ------------------------------------------------------------------ Conversations */

const CHANNEL_ICONS: Record<string, { icon: LucideIcon; tint: string }> = {
  "Website chat": { icon: MessageCircleMore, tint: "text-violet-600" },
  WhatsApp: { icon: MessageCircle, tint: "text-emerald-600" },
  Instagram: { icon: Instagram, tint: "text-pink-600" },
  Email: { icon: Mail, tint: "text-sky-600" },
};

const CONVERSATIONS: {
  name: string;
  initials: string;
  tint: Tint;
  channel: keyof typeof CHANNEL_ICONS;
  inbox: string;
  message: string;
  time: string;
  agent: string;
  labels: string[];
  unread?: number;
  active?: boolean;
}[] = [
  {
    name: "Ananya Rao",
    initials: "AR",
    tint: "violet",
    channel: "Website chat",
    inbox: "Driansh Foods",
    message: "My order #DF-2841 is 40 minutes late, can you check?",
    time: "2m",
    agent: "NS",
    labels: ["order-delay"],
    unread: 2,
    active: true,
  },
  {
    name: "Rahul Mehta",
    initials: "RM",
    tint: "emerald",
    channel: "WhatsApp",
    inbox: "Driansh Foods",
    message: "The dessert was missing from my order. Refund please?",
    time: "9m",
    agent: "NS",
    labels: ["refund"],
    unread: 1,
  },
  {
    name: "Sofia Martinez",
    initials: "SM",
    tint: "pink",
    channel: "Instagram",
    inbox: "Driansh Retail",
    message: "Do you ship the linen tote to Barcelona?",
    time: "24m",
    agent: "VK",
    labels: ["shipping"],
  },
  {
    name: "Kwame Mensah",
    initials: "KM",
    tint: "sky",
    channel: "Email",
    inbox: "Driansh Cloud",
    message: "Re: Invoice for the September plan upgrade",
    time: "1h",
    agent: "PS",
    labels: ["billing"],
  },
  {
    name: "Meera Joshi",
    initials: "MJ",
    tint: "amber",
    channel: "WhatsApp",
    inbox: "Driansh Foods",
    message: "Thanks! The replacement thali arrived hot 🙌",
    time: "3h",
    agent: "NS",
    labels: ["feedback"],
  },
  {
    name: "Liam O'Connor",
    initials: "LO",
    tint: "teal",
    channel: "Website chat",
    inbox: "Driansh Cloud",
    message: "How do I add a second outlet to my account?",
    time: "5h",
    agent: "PS",
    labels: ["onboarding"],
  },
];

function ConversationRow({ row }: { row: (typeof CONVERSATIONS)[number] }) {
  const channel = CHANNEL_ICONS[row.channel];
  const ChannelIcon = channel.icon;
  return (
    <div
      className={cn(
        "relative border-b border-slate-100 px-3 py-2.5",
        row.active && "bg-brand-soft/70 before:absolute before:inset-y-0 before:start-0 before:w-0.5 before:bg-brand"
      )}
    >
      <div className="flex items-center gap-1 text-[10px] text-slate-400">
        <ChannelIcon className={cn("h-3 w-3", channel.tint)} />
        <span className="truncate">
          {row.channel} · {row.inbox}
        </span>
        <span className="ms-auto">{row.time}</span>
      </div>
      <div className="mt-1 flex items-start gap-2">
        <Avatar initials={row.initials} tint={row.tint} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className={cn("truncate text-[12px] text-ink", row.unread ? "font-bold" : "font-semibold")}>{row.name}</span>
            {row.unread && (
              <span className="ms-auto flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[9px] font-bold text-white">
                {row.unread}
              </span>
            )}
          </div>
          <p className={cn("truncate text-[11px]", row.unread ? "text-slate-700" : "text-slate-500")}>{row.message}</p>
          <div className="mt-1.5 flex items-center gap-1">
            {row.labels.map((label) => (
              <LabelChip key={label} label={label} />
            ))}
            <span className="ms-auto flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 text-[7px] font-bold text-slate-600">
              {row.agent}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactField({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[11px] text-slate-600">
      <Icon className="h-3.5 w-3.5 shrink-0 text-slate-400" />
      <span className="truncate">{children}</span>
    </div>
  );
}

function AttributeRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2 py-1 text-[11px]">
      <span className="text-slate-500">{label}</span>
      <span className="truncate font-medium text-ink">{value}</span>
    </div>
  );
}

export function ConversationsScreen() {
  return (
    <div className="flex h-full text-slate-700">
      {/* Sidebar */}
      <aside className="hidden w-52 shrink-0 flex-col gap-3 border-e md:flex border-slate-200 bg-slate-50/80 p-3">
        <div className="flex items-center gap-2 rounded-lg px-1 py-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-[10px] font-bold text-white">DF</span>
          <span className="min-w-0">
            <span className="block truncate text-[12px] font-semibold text-ink">Driansh Foods</span>
            <span className="block text-[10px] text-slate-400">Workspace</span>
          </span>
          <ChevronDown className="ms-auto h-3.5 w-3.5 text-slate-400" />
        </div>
        <SearchBox placeholder="Search…" shortcut />
        <nav className="space-y-0.5">
          <NavItem icon={Inbox} label="My inbox" count="3" />
          <NavItem icon={MessagesSquare} label="Conversations" chevron="down" />
          <NavItem label="All conversations" count="18" indent active />
          <NavItem label="Mentions" count="1" indent />
          <NavItem label="Unattended" count="4" indent />
          <NavItem icon={Users} label="Teams" chevron="right" />
          <NavItem icon={Hash} label="Channels" chevron="right" />
          <NavItem icon={Tag} label="Labels" chevron="down" />
        </nav>
        <div className="space-y-1 ps-7 text-[11px] text-slate-500">
          {[
            ["order-delay", "bg-amber-400"],
            ["refund", "bg-rose-400"],
            ["vip", "bg-violet-400"],
          ].map(([label, dot]) => (
            <div key={label} className="flex items-center gap-2">
              <span className={cn("h-2 w-2 rounded-full", dot)} />
              {label}
            </div>
          ))}
        </div>
      </aside>

      {/* Conversation list */}
      <section className="flex w-[17rem] shrink-0 flex-col border-e border-slate-200">
        <div className="flex items-center gap-2 px-3 pt-3">
          <span className="text-[14px] font-bold text-ink">Conversations</span>
          <span className="flex items-center gap-0.5 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
            Open <ChevronDown className="h-3 w-3" />
          </span>
          <span className="ms-auto flex gap-1">
            <IconButton icon={ListFilter} />
            <IconButton icon={Filter} />
          </span>
        </div>
        <div className="mt-2 flex gap-4 border-b border-slate-200 px-3 text-[12px]">
          {[
            ["Mine", "2", true],
            ["Unassigned", "1", false],
            ["All", "18", false],
          ].map(([label, count, selected]) => (
            <span
              key={label as string}
              className={cn(
                "flex items-center gap-1 border-b-2 pb-2",
                selected ? "border-brand font-semibold text-brand" : "border-transparent text-slate-500"
              )}
            >
              {label}
              <span className={cn("rounded px-1 text-[10px]", selected ? "bg-brand-soft" : "bg-slate-100")}>{count}</span>
            </span>
          ))}
        </div>
        <div className="flex-1 overflow-hidden">
          {CONVERSATIONS.map((row) => (
            <ConversationRow key={row.name} row={row} />
          ))}
        </div>
      </section>

      {/* Open conversation */}
      <section className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2.5 border-b border-slate-200 px-4 py-2.5">
          <Avatar initials="AR" tint="violet" className="h-8 w-8 text-[11px]" />
          <div className="min-w-0">
            <div className="text-[13px] font-semibold text-ink">Ananya Rao</div>
            <div className="flex items-center gap-1 text-[10px] whitespace-nowrap text-slate-500">
              <MessageCircleMore className="h-3 w-3 text-violet-600" />
              #42 · Website chat
            </div>
          </div>
          <span className="ms-auto flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap text-amber-700 ring-1 ring-amber-200 ring-inset">
            <Clock className="h-3 w-3" /> SLA 2h 10m
          </span>
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[9px] font-bold text-slate-600 ring-2 ring-white">
            NS
          </span>
          <span className="flex shrink-0 items-center overflow-hidden rounded-md bg-brand text-[11px] font-semibold text-white">
            <span className="flex items-center gap-1 px-2.5 py-1">
              <Check className="h-3 w-3" /> Resolve
            </span>
            <span className="border-s border-white/25 px-1 py-1">
              <ChevronDown className="h-3 w-3" />
            </span>
          </span>
        </div>
        <div className="flex gap-4 border-b border-slate-200 px-4 text-[12px]">
          <span className="border-b-2 border-brand pt-2 pb-1.5 font-semibold text-brand">Messages</span>
          <span className="pt-2 pb-1.5 text-slate-500">Orders</span>
        </div>
        <div className="flex flex-1 flex-col gap-2.5 overflow-hidden bg-slate-50/60 px-5 py-3.5 text-[12px]">
          <div className="flex max-w-[82%] items-end gap-2 self-start">
            <Avatar initials="AR" tint="violet" className="h-6 w-6 text-[9px]" />
            <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
              Hi, my order #DF-2841 was due at 12:30 and still hasn&apos;t arrived. Can you check where it is?
              <div className="mt-1 text-[9px] text-slate-400">12:41</div>
            </div>
          </div>
          <span className="self-center text-[10px] text-slate-400">Assigned to Nisha S. by auto-assignment</span>
          <div className="max-w-[82%] self-end rounded-2xl rounded-br-sm bg-brand px-3 py-2 text-white">
            Sorry about the wait, Ananya. I&apos;m checking with the delivery partner right now.
            <div className="mt-1 text-end text-[9px] text-white/70">12:43 · Nisha S.</div>
          </div>
          <div className="max-w-[82%] self-end rounded-2xl rounded-br-sm border border-amber-200 bg-amber-50 px-3 py-2 text-amber-900">
            <div className="mb-0.5 flex items-center gap-1 text-[10px] font-semibold text-amber-700">
              <Lock className="h-3 w-3" /> Private note
            </div>
            <span className="font-semibold">@Vikram</span> rider is held up near Satellite Road. OK to add a 20% voucher?
          </div>
          <div className="max-w-[80%] self-end rounded-xl border border-violet-200 bg-white px-3 py-2 shadow-sm">
            <div className="flex items-center gap-1 text-[10px] font-semibold text-violet-700">
              <Sparkles className="h-3 w-3" /> EngageOne AI Assistant · suggested reply
            </div>
            <p className="mt-1 text-slate-700">
              Your rider is about 6 minutes away. We&apos;ve added a 20% voucher to your account for the delay.
            </p>
            <div className="mt-1.5 flex gap-1.5">
              <span className="rounded-md bg-violet-600 px-2 py-0.5 text-[10px] font-semibold text-white">Use reply</span>
              <span className="rounded-md border border-slate-200 px-2 py-0.5 text-[10px] text-slate-500">Edit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact panel */}
      <aside className="w-56 shrink-0 space-y-4 border-s border-slate-200 p-4">
        <div>
          <Avatar initials="AR" tint="violet" className="h-11 w-11 text-[13px]" />
          <div className="mt-2 text-[13px] font-semibold text-ink">Ananya Rao</div>
          <div className="text-[11px] text-slate-500">Operations lead · Rao Caterers</div>
          <div className="mt-3 space-y-1.5">
            <ContactField icon={Mail}>a••••@example.com</ContactField>
            <ContactField icon={Phone}>+91 98••• ••210</ContactField>
            <ContactField icon={MapPin}>Ahmedabad, India</ContactField>
            <ContactField icon={Building2}>Rao Caterers</ContactField>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-3">
          <div className="mb-1 flex items-center justify-between text-[11px] font-semibold text-ink">
            Attributes <ChevronDown className="h-3 w-3 text-slate-400" />
          </div>
          <AttributeRow label="Plan" value="Business" />
          <AttributeRow label="Customer since" value="2024" />
          <AttributeRow label="Orders this month" value="14" />
          <AttributeRow label="Language" value="English" />
        </div>
        <div className="border-t border-slate-100 pt-3">
          <div className="mb-1.5 text-[11px] font-semibold text-ink">Previous conversations</div>
          {[
            ["#37", "Refund processed", "Aug 12"],
            ["#29", "Bulk order for an event", "Jun 3"],
          ].map(([id, title, date]) => (
            <div key={id} className="mb-1.5 rounded-lg border border-slate-100 px-2 py-1.5 text-[11px]">
              <div className="flex justify-between text-slate-400">
                <span>{id} · Resolved</span>
                <span>{date}</span>
              </div>
              <div className="truncate text-slate-700">{title}</div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

/* ------------------------------------------------------------------ AI Assistant */

export function AssistantScreen() {
  return (
    <div className="flex h-full text-slate-700">
      <aside className="hidden w-56 shrink-0 border-e border-slate-200 bg-slate-50/80 p-3 md:block">
        <div className="flex items-center gap-2 px-1">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
            <Bot className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[12px] font-semibold text-ink">EngageOne AI Assistant</span>
            <span className="block text-[10px] text-slate-400">Driansh Foods support</span>
          </span>
        </div>
        <div className="mt-3 flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live on 3 inboxes
        </div>
        <nav className="mt-3 space-y-0.5">
          <NavItem icon={LayoutGrid} label="Overview" />
          <NavItem icon={FileText} label="Documents" count="12" />
          <NavItem icon={BookOpen} label="FAQs" count="48" />
          <NavItem icon={Workflow} label="Scenarios" count="6" />
          <NavItem icon={Inbox} label="Inboxes" count="3" />
          <NavItem icon={MessagesSquare} label="Playground" active />
          <NavItem icon={Settings} label="Settings" />
        </nav>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-3">
          <div>
            <div className="text-[14px] font-bold text-ink">Playground</div>
            <div className="text-[11px] text-slate-500">Test how the assistant answers before it goes live</div>
          </div>
          <span className="ms-auto flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-[11px] text-slate-600">
            <RotateCcw className="h-3 w-3" /> Reset chat
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 overflow-hidden bg-slate-50/60 px-6 py-4 text-[12px]">
          <div className="max-w-[70%] self-end rounded-2xl rounded-br-sm bg-brand px-3 py-2 text-white">
            Can I change my delivery address after placing an order?
          </div>
          <div className="flex max-w-[80%] items-start gap-2 self-start">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
              <Sparkles className="h-3 w-3" />
            </span>
            <div className="rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
              Yes. Within 5 minutes of ordering, open <span className="font-semibold">Orders › Edit address</span> and save the
              new location. After that, reply here and an agent will try to reroute the rider.
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="flex items-center gap-1 rounded-md bg-brand-soft px-1.5 py-0.5 text-[10px] font-medium text-brand">
                  <BookOpen className="h-3 w-3" /> FAQ · Changing your delivery address
                </span>
                <span className="flex items-center gap-1 rounded-md bg-brand-soft px-1.5 py-0.5 text-[10px] font-medium text-brand">
                  <FileText className="h-3 w-3" /> Ordering policy.pdf · p. 2
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-[70%] self-end rounded-2xl rounded-br-sm bg-brand px-3 py-2 text-white">
            It&apos;s been 20 minutes and I want a refund of ₹2,400 instead.
          </div>
          <div className="flex max-w-[80%] items-start gap-2 self-start">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
              <Sparkles className="h-3 w-3" />
            </span>
            <div className="rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
              I understand. Refunds above ₹2,000 are reviewed by our team, so I&apos;m passing this to an agent with your order
              details.
              <div className="mt-2 flex items-center gap-1 text-[10px] font-medium text-violet-700">
                <Workflow className="h-3 w-3" /> Scenario matched: Large refund → hand off to Billing team
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 bg-white px-5 py-3">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-[12px] text-slate-400">
            Ask the assistant a customer question…
            <span className="ms-auto flex items-center gap-1 rounded-md bg-brand-gradient px-2 py-1 text-[10px] font-semibold text-white">
              Send <SendHorizontal className="h-3 w-3" />
            </span>
          </div>
        </div>
      </section>

      <aside className="w-72 shrink-0 space-y-4 border-s border-slate-200 p-4">
        <div>
          <div className="text-[12px] font-semibold text-ink">Knowledge sources</div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {[
              ["12", "Documents"],
              ["48", "FAQs"],
              ["6", "Scenarios"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-slate-100 bg-slate-50 px-2 py-1.5">
                <div className="text-[14px] font-bold text-ink">{value}</div>
                <div className="text-[10px] text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-1.5 flex items-center justify-between text-[11px] font-semibold text-ink">
            Documents <span className="flex items-center gap-0.5 font-medium text-brand"><Plus className="h-3 w-3" /> Add</span>
          </div>
          {[
            ["Ordering policy.pdf", "Synced 2h ago"],
            ["Refund rules", "Synced today"],
            ["Menu & allergens", "Synced yesterday"],
            ["Delivery zones", "Synced 3d ago"],
          ].map(([name, meta]) => (
            <div key={name} className="flex items-center gap-2 border-b border-slate-100 py-1.5 text-[11px]">
              <FileText className="h-3.5 w-3.5 text-slate-400" />
              <span className="truncate text-slate-700">{name}</span>
              <span className="ms-auto shrink-0 text-[10px] text-slate-400">{meta}</span>
            </div>
          ))}
        </div>
        <div>
          <div className="mb-1.5 text-[11px] font-semibold text-ink">FAQs</div>
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Approved
            </span>
            <span className="font-semibold text-ink">43</span>
          </div>
          <div className="mt-1 flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-600">
              <span className="h-2 w-2 rounded-full bg-amber-400" /> Waiting for review
            </span>
            <span className="font-semibold text-ink">5</span>
          </div>
        </div>
        <div>
          <div className="mb-1.5 text-[11px] font-semibold text-ink">Connected inboxes</div>
          <div className="flex flex-wrap gap-1.5">
            {["Website chat", "WhatsApp", "Instagram"].map((name) => {
              const channel = CHANNEL_ICONS[name];
              const Icon = channel.icon;
              return (
                <span key={name} className="flex items-center gap-1 rounded-full border border-slate-200 px-2 py-0.5 text-[10px] text-slate-600">
                  <Icon className={cn("h-3 w-3", channel.tint)} /> {name}
                </span>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
}

/* ------------------------------------------------------------------ Contacts */

const CONTACTS: {
  name: string;
  initials: string;
  tint: Tint;
  email: string;
  phone: string;
  company: string;
  city: string;
  activity: string;
  label: string;
  selected?: boolean;
}[] = [
  { name: "Ananya Rao", initials: "AR", tint: "violet", email: "a••••@example.com", phone: "+91 98••• ••210", company: "Rao Caterers", city: "Ahmedabad", activity: "2 min ago", label: "vip", selected: true },
  { name: "Rahul Mehta", initials: "RM", tint: "emerald", email: "r••••@example.com", phone: "+91 99••• ••482", company: "—", city: "Mumbai", activity: "9 min ago", label: "refund" },
  { name: "Sofia Martinez", initials: "SM", tint: "pink", email: "s••••@example.com", phone: "+34 6•• ••• 118", company: "Casa Verde", city: "Barcelona", activity: "24 min ago", label: "retail" },
  { name: "Kwame Mensah", initials: "KM", tint: "sky", email: "k••••@example.com", phone: "+233 2•• ••• 905", company: "Mensah Labs", city: "Accra", activity: "1 h ago", label: "saas" },
  { name: "Meera Joshi", initials: "MJ", tint: "amber", email: "m••••@example.com", phone: "+91 97••• ••036", company: "—", city: "Pune", activity: "3 h ago", label: "repeat" },
  { name: "Liam O'Connor", initials: "LO", tint: "teal", email: "l••••@example.com", phone: "+353 8• ••• ••71", company: "O'Connor Bistro", city: "Dublin", activity: "5 h ago", label: "onboarding" },
  { name: "Hana Sato", initials: "HS", tint: "rose", email: "h••••@example.com", phone: "+81 9•-••••-•520", company: "Sato Design", city: "Osaka", activity: "Yesterday", label: "saas" },
  { name: "Arjun Desai", initials: "AD", tint: "indigo", email: "a••••@example.com", phone: "+91 90••• ••777", company: "Desai Retail", city: "Surat", activity: "2 days ago", label: "wholesale" },
];

const CONTACT_COLUMNS = "grid grid-cols-[1.5rem_minmax(0,1.4fr)_minmax(0,1.2fr)_minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.8fr)_minmax(0,0.8fr)_minmax(0,0.8fr)] items-center gap-3";

export function ContactsScreen() {
  return (
    <div className="flex h-full text-slate-700">
      <section className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-3">
          <div>
            <div className="flex items-center gap-2 text-[14px] font-bold text-ink">
              Contacts <span className="rounded bg-slate-100 px-1.5 text-[10px] font-semibold text-slate-500">2,418</span>
            </div>
            <div className="text-[11px] text-slate-500">Everyone who has reached Driansh Foods, Retail and Cloud</div>
          </div>
          <SearchBox placeholder="Search by name, email, phone or company" className="ms-auto w-72" />
          <IconButton icon={Filter} />
          <IconButton icon={Upload} />
          <IconButton icon={Download} />
          <span className="flex items-center gap-1 rounded-md bg-brand-gradient px-2.5 py-1.5 text-[11px] font-semibold text-white">
            <UserPlus className="h-3.5 w-3.5" /> Add contact
          </span>
        </div>
        <div className="flex items-center gap-1.5 border-b border-slate-200 px-5 py-2.5 text-[11px]">
          {["All contacts", "VIP customers", "New this month", "Wholesale", "Inactive 90 days"].map((segment, i) => (
            <span
              key={segment}
              className={cn(
                "rounded-full px-2.5 py-1",
                i === 0 ? "bg-ink font-semibold text-white" : "border border-slate-200 text-slate-600"
              )}
            >
              {segment}
            </span>
          ))}
          <span className="flex items-center gap-1 px-2 text-brand">
            <Plus className="h-3 w-3" /> Save segment
          </span>
        </div>
        <div className={cn(CONTACT_COLUMNS, "border-b border-slate-200 bg-slate-50 px-5 py-2 text-[10px] font-semibold tracking-wide text-slate-500 uppercase")}>
          <span className="h-3.5 w-3.5 rounded border border-slate-300 bg-white" />
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
          <span>Company</span>
          <span>City</span>
          <span>Last activity</span>
          <span>Labels</span>
        </div>
        {CONTACTS.map((contact) => (
          <div
            key={contact.name}
            className={cn(
              CONTACT_COLUMNS,
              "border-b border-slate-100 px-5 py-2 text-[12px]",
              contact.selected && "bg-brand-soft/70"
            )}
          >
            <span
              className={cn(
                "flex h-3.5 w-3.5 items-center justify-center rounded border",
                contact.selected ? "border-brand bg-brand text-white" : "border-slate-300 bg-white"
              )}
            >
              {contact.selected && <Check className="h-2.5 w-2.5" />}
            </span>
            <span className="flex min-w-0 items-center gap-2">
              <Avatar initials={contact.initials} tint={contact.tint} className="h-6 w-6 text-[9px]" />
              <span className="truncate font-semibold text-ink">{contact.name}</span>
            </span>
            <span className="truncate text-slate-600">{contact.email}</span>
            <span className="truncate text-slate-600 tabular-nums">{contact.phone}</span>
            <span className="truncate text-slate-600">{contact.company}</span>
            <span className="truncate text-slate-600">{contact.city}</span>
            <span className="truncate text-slate-500">{contact.activity}</span>
            <span>
              <LabelChip label={contact.label} />
            </span>
          </div>
        ))}
      </section>

      <aside className="w-72 shrink-0 space-y-4 border-s border-slate-200 p-4">
        <div className="flex items-start gap-3">
          <Avatar initials="AR" tint="violet" className="h-11 w-11 text-[13px]" />
          <div className="min-w-0">
            <div className="text-[13px] font-semibold text-ink">Ananya Rao</div>
            <div className="text-[11px] text-slate-500">Operations lead · Rao Caterers</div>
            <div className="mt-1 flex gap-1">
              <LabelChip label="vip" />
              <LabelChip label="order-delay" />
            </div>
          </div>
          <MoreHorizontal className="ms-auto h-4 w-4 text-slate-400" />
        </div>
        <span className="flex items-center justify-center gap-1.5 rounded-lg bg-brand-gradient py-1.5 text-[11px] font-semibold text-white">
          <MessagesSquare className="h-3.5 w-3.5" /> Start conversation
        </span>
        <div className="space-y-1.5">
          <ContactField icon={Mail}>a••••@example.com</ContactField>
          <ContactField icon={Phone}>+91 98••• ••210</ContactField>
          <ContactField icon={MapPin}>Ahmedabad, India</ContactField>
          <ContactField icon={Globe}>Prefers English, Gujarati</ContactField>
        </div>
        <div className="border-t border-slate-100 pt-3">
          <div className="mb-1.5 text-[11px] font-semibold text-ink">Recent activity</div>
          {[
            [MessageCircleMore, "Opened conversation #42", "2 min ago"],
            [Tag, "Placed order #DF-2841", "1 h ago"],
            [BarChart3, "Rated last conversation 5/5", "Aug 12"],
          ].map(([Icon, text, time]) => {
            const ActivityIcon = Icon as LucideIcon;
            return (
              <div key={text as string} className="flex items-center gap-2 py-1 text-[11px]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                  <ActivityIcon className="h-3 w-3" />
                </span>
                <span className="truncate text-slate-700">{text as string}</span>
                <span className="ms-auto shrink-0 text-[10px] text-slate-400">{time as string}</span>
              </div>
            );
          })}
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] text-amber-900">
          <div className="mb-0.5 font-semibold">Note</div>
          Orders lunch boxes for 40 staff every Friday. Confirm delivery slot a day ahead.
        </div>
      </aside>
    </div>
  );
}

/* ------------------------------------------------------------------ Help center */

const ARTICLES: { title: string; category: string; status: "Published" | "Draft"; updated: string; active?: boolean }[] = [
  { title: "Change your delivery address", category: "Delivery", status: "Published", updated: "2 days ago", active: true },
  { title: "Track your order in real time", category: "Delivery", status: "Published", updated: "5 days ago" },
  { title: "How refunds work", category: "Payments", status: "Published", updated: "1 week ago" },
  { title: "Paying with UPI or cards", category: "Payments", status: "Published", updated: "2 weeks ago" },
  { title: "Set up a second outlet", category: "Partners", status: "Draft", updated: "Today" },
  { title: "Allergen information on menus", category: "Menu", status: "Draft", updated: "Yesterday" },
];

export function HelpCenterScreen() {
  return (
    <div className="flex h-full text-slate-700">
      <aside className="hidden w-52 shrink-0 border-e border-slate-200 bg-slate-50/80 p-3 md:block">
        <div className="px-1 text-[12px] font-semibold text-ink">Help center</div>
        <div className="mt-3 px-1 text-[10px] font-semibold tracking-wide text-slate-400 uppercase">Portals</div>
        <div className="mt-1.5 space-y-1">
          {[
            ["Customers", "24 articles · 3 locales", true],
            ["Partners", "11 articles · 2 locales", false],
          ].map(([name, meta, active]) => (
            <div
              key={name as string}
              className={cn(
                "flex items-center gap-2 rounded-lg px-2 py-1.5",
                active ? "bg-white shadow-sm ring-1 ring-slate-200" : ""
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold",
                  active ? "bg-brand-gradient text-white" : "bg-slate-200 text-slate-600"
                )}
              >
                {(name as string)[0]}
              </span>
              <span className="min-w-0">
                <span className="block text-[12px] font-medium text-ink">{name as string}</span>
                <span className="block truncate text-[10px] text-slate-400">{meta as string}</span>
              </span>
            </div>
          ))}
        </div>
        <nav className="mt-4 space-y-0.5">
          <NavItem icon={FileText} label="Articles" count="24" active />
          <NavItem icon={LayoutGrid} label="Categories" count="6" />
          <NavItem icon={Globe} label="Locales" count="3" />
          <NavItem icon={Settings} label="Portal settings" />
        </nav>
      </aside>

      <section className="flex w-[22rem] shrink-0 flex-col border-e border-slate-200">
        <div className="flex items-center gap-2 px-4 pt-3">
          <span className="text-[14px] font-bold text-ink">Articles</span>
          <span className="ms-auto flex overflow-hidden rounded-md border border-slate-200 text-[10px] font-semibold">
            {["en", "hi", "gu"].map((locale, i) => (
              <span key={locale} className={cn("px-2 py-0.5", i === 0 ? "bg-brand text-white" : "text-slate-500")}>
                {locale}
              </span>
            ))}
          </span>
          <span className="flex items-center gap-1 rounded-md bg-brand-gradient px-2 py-1 text-[10px] font-semibold text-white">
            <Plus className="h-3 w-3" /> New
          </span>
        </div>
        <div className="mt-2 flex gap-3 border-b border-slate-200 px-4 text-[11px]">
          {["All 24", "Published 19", "Drafts 5", "Archived"].map((tab, i) => (
            <span
              key={tab}
              className={cn("border-b-2 pb-2", i === 0 ? "border-brand font-semibold text-brand" : "border-transparent text-slate-500")}
            >
              {tab}
            </span>
          ))}
        </div>
        {ARTICLES.map((article) => (
          <div
            key={article.title}
            className={cn("border-b border-slate-100 px-4 py-2.5", article.active && "bg-brand-soft/70")}
          >
            <div className="flex items-center gap-2">
              <span className="truncate text-[12px] font-semibold text-ink">{article.title}</span>
              <span
                className={cn(
                  "ms-auto shrink-0 rounded-full px-1.5 py-px text-[10px] font-medium",
                  article.status === "Published" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"
                )}
              >
                {article.status}
              </span>
            </div>
            <div className="mt-0.5 text-[10px] text-slate-400">
              {article.category} · Updated {article.updated}
            </div>
          </div>
        ))}
      </section>

      <section className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2 border-b border-slate-200 px-5 py-2.5">
          <span className="text-[11px] text-slate-400">Customers › Delivery ›</span>
          <span className="text-[11px] font-medium text-ink">Change your delivery address</span>
          <span className="ms-auto flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-[11px] text-slate-600">
            <Eye className="h-3 w-3" /> Preview
          </span>
          <span className="rounded-md bg-brand px-2.5 py-1 text-[11px] font-semibold text-white">Update</span>
        </div>
        <div className="flex items-center gap-1.5 border-b border-slate-200 px-5 py-2 text-[10px]">
          <span className="rounded-full bg-brand-soft px-2 py-0.5 font-semibold text-brand">English · Published</span>
          <span className="rounded-full border border-slate-200 px-2 py-0.5 text-slate-600">हिन्दी · Published</span>
          <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-amber-700">ગુજરાતી · Needs review</span>
          <span className="ms-auto flex items-center gap-2 text-slate-400">
            <Bold className="h-3.5 w-3.5" />
            <Italic className="h-3.5 w-3.5" />
            <List className="h-3.5 w-3.5" />
            <Link2 className="h-3.5 w-3.5" />
            <ImageIcon className="h-3.5 w-3.5" />
          </span>
        </div>
        <article className="flex-1 overflow-hidden px-8 py-5">
          <h4 className="text-[20px] font-bold text-ink">Change your delivery address</h4>
          <p className="mt-1 text-[11px] text-slate-400">Last edited by Nisha S. · 3 min read</p>
          <p className="mt-3 text-[12px] leading-relaxed text-slate-600">
            Moved desks or ordering for a friend? You can update where your order goes for a short time after you place it.
          </p>
          <h5 className="mt-4 text-[13px] font-semibold text-ink">Before a rider is assigned</h5>
          <ol className="mt-1.5 list-decimal space-y-1 ps-5 text-[12px] text-slate-600">
            <li>
              Open <span className="font-semibold text-ink">Orders</span> and choose the order you want to change.
            </li>
            <li>
              Tap <span className="font-semibold text-ink">Edit address</span>, pick a saved address or add a new one.
            </li>
            <li>Confirm. Your delivery time updates straight away.</li>
          </ol>
          <div className="mt-4 flex gap-2 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-[12px] text-sky-900">
            <span className="font-semibold">Tip:</span>
            If the rider is already on the way, message us from the chat and we&apos;ll try to reroute.
          </div>
        </article>
      </section>
    </div>
  );
}
