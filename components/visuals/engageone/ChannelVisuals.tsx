import type { LucideIcon } from "lucide-react";
import {
  BellOff,
  Bot,
  Braces,
  CheckCheck,
  CircleCheck,
  Facebook,
  FileText,
  Forward,
  Hash,
  Instagram,
  KeyRound,
  Link2,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Mic,
  Music2,
  Paperclip,
  Phone,
  PhoneIncoming,
  Play,
  Send,
  Server,
  ShieldCheck,
  Slack,
  Smartphone,
  StickyNote,
  Tag,
  UserCheck,
  Webhook,
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
  VisualStage,
} from "./primitives";

/*
 * Illustrations for EngageOne channel and integration pages. Each one is a
 * simplified, original mock-up drawn in code with generic sample data.
 */

/* ---------- local building blocks ---------- */

/** Header of a conversation: channel badge, contact name and status. */
function ConversationHeader({
  icon: Icon,
  tint,
  name,
  meta,
}: {
  icon: LucideIcon;
  tint: string;
  name: string;
  meta: string;
}) {
  return (
    <div className="flex items-center gap-2.5 border-b border-slate-100 px-4 py-2.5">
      <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full", tint)}>
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-xs font-semibold text-ink">{name}</span>
        <span className="block truncate text-[10px] text-slate-500">{meta}</span>
      </span>
      <span className="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Open</span>
    </div>
  );
}

/** Small "delivered / read" marker under an outgoing message. */
function Ticks({ label = "Read" }: { label?: string }) {
  return (
    <span className="-mt-1.5 flex items-center gap-1 self-end text-[10px] text-sky-600">
      <CheckCheck className="h-3 w-3" /> {label}
    </span>
  );
}

/** Monospace block for request / payload samples. */
function CodeBlock({ lines, className }: { lines: string[]; className?: string }) {
  return (
    <pre className={cn("overflow-hidden rounded-xl bg-navy p-3 font-mono text-[10px] leading-relaxed text-violet-100", className)}>
      {lines.join("\n")}
    </pre>
  );
}

/** Generic channel conversation inside the EngageOne inbox. */
function ChannelConversation({
  title,
  icon,
  tint,
  name,
  meta,
  children,
  tag,
  tagIcon = UserCheck,
}: {
  title: string;
  icon: LucideIcon;
  tint: string;
  name: string;
  meta: string;
  children: React.ReactNode;
  tag?: string;
  tagIcon?: LucideIcon;
}) {
  return (
    <VisualStage>
      <AppWindow title={title}>
        <ConversationHeader icon={icon} tint={tint} name={name} meta={meta} />
        <ChatThread>{children}</ChatThread>
        <Composer />
      </AppWindow>
      {tag && <FloatingTag icon={tagIcon}>{tag}</FloatingTag>}
    </VisualStage>
  );
}

/** Channel setup: steps on top, connection form below. */
function ChannelSetup({
  title,
  steps,
  fields,
  button = "Create inbox",
  tag,
}: {
  title: string;
  steps: { label: string; detail: string; icon: LucideIcon }[];
  fields: { label: string; value?: string; kind?: "input" | "toggle" | "select" }[];
  button?: string;
  tag?: string;
}) {
  return (
    <VisualStage>
      <AppWindow title={title}>
        <FlowSteps steps={steps} />
        <div className="border-t border-slate-100">
          <FormFields fields={fields} button={button} />
        </div>
      </AppWindow>
      {tag && <FloatingTag icon={CircleCheck}>{tag}</FloatingTag>}
    </VisualStage>
  );
}

/* ---------- omnichannel ---------- */

const CHANNEL_BADGES: { label: string; icon: LucideIcon; tint: string }[] = [
  { label: "Website chat", icon: MessageSquare, tint: "bg-brand-soft text-brand" },
  { label: "WhatsApp", icon: MessageCircle, tint: "bg-emerald-100 text-emerald-600" },
  { label: "Facebook", icon: Facebook, tint: "bg-blue-100 text-blue-600" },
  { label: "Instagram", icon: Instagram, tint: "bg-pink-100 text-pink-600" },
  { label: "Email", icon: Mail, tint: "bg-sky-100 text-sky-600" },
  { label: "SMS", icon: Smartphone, tint: "bg-violet-100 text-violet-600" },
  { label: "Telegram", icon: Send, tint: "bg-cyan-100 text-cyan-600" },
  { label: "LINE", icon: MessageCircle, tint: "bg-green-100 text-green-700" },
  { label: "TikTok", icon: Music2, tint: "bg-slate-200 text-slate-800" },
  { label: "API", icon: Braces, tint: "bg-amber-100 text-amber-700" },
];

/** Row of channel badges that all feed the same inbox. */
export function ChannelBadges() {
  return (
    <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3" aria-hidden="true">
      {CHANNEL_BADGES.map(({ label, icon: Icon, tint }) => (
        <li key={label} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-4 text-sm font-medium text-ink shadow-sm">
          <span className={cn("flex h-8 w-8 items-center justify-center rounded-full", tint)}>
            <Icon className="h-4 w-4" />
          </span>
          {label}
        </li>
      ))}
    </ul>
  );
}

/** Messenger and Instagram DMs side by side in one list, with labels and a muted thread. */
export function SocialInboxVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Social inbox">
        <ListRows
          rows={[
            { title: "Priya · Messenger", meta: "Is the blue jacket back in stock?", icon: Facebook, tint: "bg-blue-100 text-blue-600", badge: "pre-sales", active: true },
            { title: "Rahul · Instagram DM", meta: "Replied to your story: love this!", icon: Instagram, tint: "bg-pink-100 text-pink-600", badge: "feedback" },
            { title: "Meera · Instagram DM", meta: "Where is my order?", icon: Instagram, tint: "bg-pink-100 text-pink-600", badge: "orders" },
            { title: "Unknown sender · Messenger", meta: "Muted as spam", icon: BellOff, tint: "bg-slate-100 text-slate-500" },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Tag}>Labelled and routed</FloatingTag>
    </VisualStage>
  );
}

/* ---------- WhatsApp ---------- */

/** WhatsApp conversation that starts with an approved template, with read ticks. */
export function WhatsAppChatVisual() {
  return (
    <ChannelConversation
      title="EngageOne · WhatsApp"
      icon={MessageCircle}
      tint="bg-emerald-100 text-emerald-600"
      name="Priya"
      meta="WhatsApp · Support number"
      tag="Template approved"
      tagIcon={ShieldCheck}
    >
      <Bubble from="system">Template · order_update</Bubble>
      <Bubble from="agent">Hi Priya, your order #1042 has shipped. It should reach you by Friday.</Bubble>
      <Ticks />
      <Bubble>Thanks! Can I change the delivery address?</Bubble>
      <Bubble from="agent">Sure, please share the new address here.</Bubble>
      <Ticks label="Delivered" />
    </ChannelConversation>
  );
}

/** Template picker with variables filled in, ready to send after the 24-hour window. */
export function WhatsAppTemplateVisual() {
  return (
    <VisualStage>
      <AppWindow title="Send a WhatsApp template">
        <div className="grid gap-3 p-4 sm:grid-cols-[9rem_1fr]">
          <ul className="space-y-1.5 text-xs">
            {["order_update", "payment_reminder", "appointment_confirm", "feedback_request"].map((name, i) => (
              <li
                key={name}
                className={cn(
                  "truncate rounded-lg border px-2.5 py-1.5 font-mono text-[10px]",
                  i === 0 ? "border-brand/30 bg-brand-soft/60 text-brand" : "border-slate-100 text-slate-600"
                )}
              >
                {name}
              </li>
            ))}
          </ul>
          <div className="space-y-2.5">
            <div className="rounded-xl border border-slate-100 bg-surface p-3 text-xs leading-relaxed">
              Hi <span className="rounded bg-brand-soft px-1 font-semibold text-brand">{"{{1}}"}</span>, your order{" "}
              <span className="rounded bg-brand-soft px-1 font-semibold text-brand">{"{{2}}"}</span> has shipped.
            </div>
            <FormFields
              fields={[
                { label: "{{1}} Name", value: "Rahul" },
                { label: "{{2}} Order", value: "#1042" },
              ]}
              button="Send template"
            />
          </div>
        </div>
      </AppWindow>
      <FloatingTag icon={ShieldCheck}>Works outside the 24-hour window</FloatingTag>
    </VisualStage>
  );
}

/** WhatsApp thread with an image, a document, a voice note and a location. */
export function WhatsAppMediaVisual() {
  return (
    <ChannelConversation
      title="EngageOne · WhatsApp"
      icon={MessageCircle}
      tint="bg-emerald-100 text-emerald-600"
      name="Rahul"
      meta="WhatsApp · Support number"
    >
      <Bubble>
        <span className="flex items-center gap-2">
          <Mic className="h-3.5 w-3.5 text-emerald-600" />
          <span className="h-1.5 w-24 rounded-full bg-slate-300" /> 0:12
        </span>
      </Bubble>
      <div className="self-end overflow-hidden rounded-2xl rounded-tr-sm border border-slate-100">
        <div className="flex h-20 w-40 items-center justify-center bg-linear-to-br from-violet-200 to-sky-200">
          <Play className="h-6 w-6 text-white" />
        </div>
        <div className="bg-brand px-3 py-1.5 text-[10px] text-white">How to set up your device</div>
      </div>
      <Bubble from="agent">
        <span className="flex items-center gap-2">
          <FileText className="h-3.5 w-3.5" /> setup-guide.pdf
        </span>
      </Bubble>
      <Bubble from="agent">
        <span className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" /> Service centre location
        </span>
      </Bubble>
      <Ticks />
    </ChannelConversation>
  );
}

/* ---------- API channel ---------- */

/** Your app → Client API → EngageOne inbox → webhook → your backend. */
export function ApiChannelVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · API channel">
        <FlowSteps
          steps={[
            { label: "Your app", detail: "Customer sends a message", icon: Smartphone },
            { label: "Client API", detail: "Creates the conversation", icon: Braces },
            { label: "Inbox", detail: "Agent replies", icon: UserCheck },
            { label: "Webhook", detail: "Reply reaches your backend", icon: Webhook },
          ]}
        />
        <div className="px-4 pb-4">
          <CodeBlock
            lines={[
              "POST …/inboxes/{inbox}/contacts/{contact}/conversations/{id}/messages",
              '{ "content": "Hi, I need help with my booking" }',
            ]}
          />
        </div>
      </AppWindow>
      <FloatingTag icon={Webhook}>message_created → your server</FloatingTag>
    </VisualStage>
  );
}

/** Client API calls that create a contact, a conversation and a message. */
export function ClientApiVisual() {
  return (
    <VisualStage>
      <AppWindow title="Client API">
        <ListRows
          rows={[
            { title: "Create contact", meta: "Identify the person using your app", icon: UserCheck, badge: "POST" },
            { title: "Create conversation", meta: "Open a thread in your API inbox", icon: MessageSquare, badge: "POST" },
            { title: "Create message", meta: "Send what the customer typed", icon: Send, badge: "POST" },
            { title: "List messages", meta: "Show the history in your UI", icon: FileText, badge: "GET" },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={Braces}>JSON over HTTPS</FloatingTag>
    </VisualStage>
  );
}

/** Webhook subscription list and a signed payload. */
export function WebhookEventsVisual() {
  return (
    <VisualStage>
      <AppWindow title="Webhook · your backend">
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <ul className="space-y-1.5">
            {[
              "conversation_created",
              "conversation_status_changed",
              "conversation_updated",
              "message_created",
              "message_updated",
              "typing_on / typing_off",
            ].map((event) => (
              <li key={event} className="flex items-center gap-2 rounded-lg border border-slate-100 px-2.5 py-1.5 font-mono text-[10px] text-ink">
                <CircleCheck className="h-3 w-3 shrink-0 text-emerald-500" /> {event}
              </li>
            ))}
          </ul>
          <CodeBlock
            lines={[
              "{",
              '  "event": "message_created",',
              '  "message_type": "outgoing",',
              '  "content": "Your booking is confirmed.",',
              '  "conversation": { "id": 128 }',
              "}",
            ]}
          />
        </div>
      </AppWindow>
      <FloatingTag icon={Lock}>Signed with a signature header</FloatingTag>
    </VisualStage>
  );
}

/** Agent replying in the EngageOne inbox to a conversation that came from a custom app. */
export function ApiInboxVisual() {
  return (
    <ChannelConversation
      title="EngageOne · Inbox"
      icon={Braces}
      tint="bg-amber-100 text-amber-700"
      name="Rahul"
      meta="API channel · Booking app"
      tag="Sent back via webhook"
      tagIcon={Webhook}
    >
      <Bubble>Hi, I need to move my booking to Saturday.</Bubble>
      <Bubble from="note">@Priya can you check Saturday slots?</Bubble>
      <Bubble from="agent">Done! Your booking is now on Saturday at 11:00.</Bubble>
    </ChannelConversation>
  );
}

/** Things teams build on the API channel. */
export function ApiUseCasesVisual() {
  return (
    <VisualStage>
      <AppWindow title="Built on the API channel">
        <ListRows
          rows={[
            { title: "In-app support chat", meta: "Native chat screen in your mobile app", icon: Smartphone, tint: "bg-sky-100 text-sky-600" },
            { title: "Custom chat surface", meta: "Kiosk, smart TV or in-product widget", icon: MessageSquare, tint: "bg-violet-100 text-violet-600" },
            { title: "Your own bot", meta: "Answers first, then hands over to an agent", icon: Bot, tint: "bg-emerald-100 text-emerald-600" },
            { title: "Unsupported messengers", meta: "Bridge any platform with an API", icon: Link2, tint: "bg-amber-100 text-amber-700" },
          ]}
        />
      </AppWindow>
    </VisualStage>
  );
}

/* ---------- Email ---------- */

function EmailMeta({ rows }: { rows: [string, string][] }) {
  return (
    <div className="space-y-1 border-b border-slate-100 px-4 py-3 text-[11px]">
      {rows.map(([label, value]) => (
        <div key={label} className="flex gap-2">
          <span className="w-14 shrink-0 text-slate-400">{label}</span>
          <span className="truncate text-ink">{value}</span>
        </div>
      ))}
    </div>
  );
}

/** Email thread inside the inbox. */
export function EmailThreadVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Email">
        <ConversationHeader icon={Mail} tint="bg-sky-100 text-sky-600" name="Invoice for March" meta="Email · support inbox" />
        <div className="space-y-2.5 p-4 text-xs">
          <div className="rounded-xl border border-slate-100 p-3">
            <div className="mb-1 font-semibold text-ink">Meera</div>
            <p className="text-slate-600">Hello, could you resend the March invoice? I can’t find it in my inbox.</p>
          </div>
          <div className="rounded-xl border border-brand/20 bg-brand-soft/50 p-3">
            <div className="mb-1 font-semibold text-brand">Rahul · Support</div>
            <p className="text-slate-700">Hi Meera, I’ve attached it below. Let us know if anything looks off.</p>
            <span className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px]">
              <Paperclip className="h-3 w-3" /> invoice-march.pdf
            </span>
          </div>
        </div>
      </AppWindow>
      <FloatingTag icon={Mail}>Threaded like a mail client</FloatingTag>
    </VisualStage>
  );
}

/** Forwarding your support address into EngageOne. */
export function EmailForwardingVisual() {
  return (
    <ChannelSetup
      title="New inbox · Email"
      steps={[
        { label: "Customer", detail: "Writes to your support address", icon: Mail },
        { label: "Forward", detail: "Your mail server forwards it", icon: Forward },
        { label: "Inbox", detail: "Arrives as a conversation", icon: MessageSquare },
      ]}
      fields={[
        { label: "Inbox name", value: "Support" },
        { label: "Your address", value: "support@yourcompany.com" },
        { label: "Forward to", value: "abc123@inbound.example" },
      ]}
      button="Save"
      tag="Forwarding verified"
    />
  );
}

/** IMAP and SMTP connection settings. */
export function EmailImapVisual() {
  return (
    <VisualStage>
      <AppWindow title="Inbox settings · IMAP & SMTP">
        <FormFields
          fields={[
            { label: "Receive (IMAP)", kind: "toggle" },
            { label: "IMAP host", value: "imap.yourcompany.com" },
            { label: "Send (SMTP)", kind: "toggle" },
            { label: "SMTP host", value: "smtp.yourcompany.com" },
            { label: "Encryption", value: "SSL / TLS", kind: "select" },
          ]}
          button="Update"
        />
      </AppWindow>
      <FloatingTag icon={Server}>Replies go out from your own address</FloatingTag>
    </VisualStage>
  );
}

/** Email composer with CC/BCC, an attachment and a signature. */
export function EmailComposerVisual() {
  return (
    <VisualStage>
      <AppWindow title="Reply · Email">
        <EmailMeta
          rows={[
            ["To", "Meera"],
            ["CC", "Accounts team"],
            ["BCC", "Rahul"],
          ]}
        />
        <div className="space-y-3 p-4 text-xs text-slate-700">
          <p>Hi Meera, the updated invoice is attached.</p>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-2 py-1 text-[10px]">
            <Paperclip className="h-3 w-3" /> invoice-march-v2.pdf
          </span>
          <div className="border-t border-dashed border-slate-200 pt-2 text-[11px] text-slate-500">
            Priya · Customer Success
            <br />
            Your Company
          </div>
        </div>
        <Composer placeholder="Add a message…" action="Send email" />
      </AppWindow>
    </VisualStage>
  );
}

/* ---------- Facebook ---------- */

/** Messenger conversation handled from the inbox, no page access needed. */
export function MessengerChatVisual() {
  return (
    <ChannelConversation
      title="EngageOne · Messenger"
      icon={Facebook}
      tint="bg-blue-100 text-blue-600"
      name="Priya"
      meta="Messenger · Your Facebook page"
      tag="No page admin access needed"
      tagIcon={Lock}
    >
      <Bubble>Hi! Do you deliver on Sundays?</Bubble>
      <Bubble from="system">Assigned to Rahul</Bubble>
      <Bubble from="agent">Yes, we deliver every day between 9 am and 8 pm.</Bubble>
      <Bubble>Perfect, thank you!</Bubble>
    </ChannelConversation>
  );
}

/** Connecting a Facebook page as a Messenger inbox. */
export function MessengerSetupVisual() {
  return (
    <ChannelSetup
      title="New inbox · Messenger"
      steps={[
        { label: "Choose", detail: "Messenger channel", icon: Facebook },
        { label: "Sign in", detail: "Continue with Facebook", icon: KeyRound },
        { label: "Select", detail: "Pick your page", icon: CircleCheck },
      ]}
      fields={[
        { label: "Facebook page", value: "Your Store", kind: "select" },
        { label: "Inbox name", value: "Messenger" },
      ]}
      tag="Page connected"
    />
  );
}

/* ---------- Instagram ---------- */

/** Instagram DM thread, including a story reply. */
export function InstagramChatVisual() {
  return (
    <ChannelConversation
      title="EngageOne · Instagram"
      icon={Instagram}
      tint="bg-pink-100 text-pink-600"
      name="Meera"
      meta="Instagram DM · Business account"
      tag="Every DM in one place"
    >
      <Bubble from="system">Replied to your story</Bubble>
      <Bubble>Is this dress available in size M?</Bubble>
      <Bubble from="agent">Yes! Here’s the link to order it in M.</Bubble>
      <Bubble>Ordered, thanks 🙌</Bubble>
    </ChannelConversation>
  );
}

/** Connecting an Instagram business account. */
export function InstagramSetupVisual() {
  return (
    <ChannelSetup
      title="New inbox · Instagram"
      steps={[
        { label: "Choose", detail: "Instagram channel", icon: Instagram },
        { label: "Sign in", detail: "Authorise your account", icon: KeyRound },
        { label: "Ready", detail: "DMs start arriving", icon: CircleCheck },
      ]}
      fields={[
        { label: "Account", value: "@yourstore", kind: "select" },
        { label: "Inbox name", value: "Instagram" },
      ]}
      tag="Account connected"
    />
  );
}

/* ---------- LINE ---------- */

/** LINE conversation in the inbox. */
export function LineChatVisual() {
  return (
    <ChannelConversation
      title="EngageOne · LINE"
      icon={MessageCircle}
      tint="bg-green-100 text-green-700"
      name="Aiko"
      meta="LINE · Official account"
    >
      <Bubble>Hello, can I book a table for four tonight?</Bubble>
      <Bubble from="agent">Hi Aiko! We have 7:30 pm free. Shall I book it?</Bubble>
      <Bubble>Yes please.</Bubble>
      <Bubble from="agent">Booked. See you tonight!</Bubble>
    </ChannelConversation>
  );
}

/** LINE channel setup with channel credentials. */
export function LineSetupVisual() {
  return (
    <ChannelSetup
      title="New inbox · LINE"
      steps={[
        { label: "Choose", detail: "LINE channel", icon: MessageCircle },
        { label: "Paste", detail: "Channel credentials", icon: KeyRound },
        { label: "Add", detail: "Webhook URL in LINE", icon: Webhook },
      ]}
      fields={[
        { label: "Channel ID", value: "••••••••" },
        { label: "Channel secret", value: "••••••••••••" },
        { label: "Access token", value: "••••••••••••" },
      ]}
    />
  );
}

/* ---------- Telegram ---------- */

/** Telegram conversation in the inbox. */
export function TelegramChatVisual() {
  return (
    <ChannelConversation
      title="EngageOne · Telegram"
      icon={Send}
      tint="bg-cyan-100 text-cyan-600"
      name="Arjun"
      meta="Telegram · Support bot"
    >
      <Bubble>My password reset link has expired.</Bubble>
      <Bubble from="agent">No problem, I’ve sent you a fresh one. It’s valid for 30 minutes.</Bubble>
      <Bubble>Got it, I’m in. Thanks!</Bubble>
    </ChannelConversation>
  );
}

/** Telegram setup with a bot token. */
export function TelegramSetupVisual() {
  return (
    <ChannelSetup
      title="New inbox · Telegram"
      steps={[
        { label: "Create", detail: "A bot in Telegram", icon: Bot },
        { label: "Paste", detail: "The bot token", icon: KeyRound },
        { label: "Ready", detail: "Messages arrive here", icon: CircleCheck },
      ]}
      fields={[{ label: "Bot token", value: "••••••:••••••••••••" }]}
      tag="Bot connected"
    />
  );
}

/* ---------- SMS ---------- */

/** SMS conversation in the inbox. */
export function SmsChatVisual() {
  return (
    <ChannelConversation
      title="EngageOne · SMS"
      icon={Smartphone}
      tint="bg-violet-100 text-violet-600"
      name="Neha"
      meta="SMS · Business number"
    >
      <Bubble from="agent">Reminder: your appointment is tomorrow at 10:00. Reply C to confirm.</Bubble>
      <Bubble>C</Bubble>
      <Bubble from="agent">Confirmed. See you tomorrow!</Bubble>
    </ChannelConversation>
  );
}

/** SMS setup with a provider choice. */
export function SmsSetupVisual() {
  return (
    <ChannelSetup
      title="New inbox · SMS"
      steps={[
        { label: "Choose", detail: "SMS channel", icon: Smartphone },
        { label: "Provider", detail: "Twilio or Bandwidth", icon: Server },
        { label: "Number", detail: "Connect your number", icon: Phone },
      ]}
      fields={[
        { label: "Provider", value: "Twilio", kind: "select" },
        { label: "Phone number", value: "Your business number" },
      ]}
    />
  );
}

/* ---------- Slack ---------- */

/** Slack-style channel where each conversation is a thread. */
function SlackMock({ children }: { children: React.ReactNode }) {
  return (
    <AppWindow title="Slack · #customer-support">
      <div className="grid grid-cols-[7rem_1fr]">
        <ul className="space-y-1 bg-navy p-3 text-[11px] text-violet-200">
          {["customer-support", "sales-leads", "general"].map((channel, i) => (
            <li key={channel} className={cn("flex items-center gap-1 truncate rounded px-1.5 py-1", i === 0 && "bg-white/15 text-white")}>
              <Hash className="h-3 w-3 shrink-0" /> {channel}
            </li>
          ))}
        </ul>
        <div className="space-y-3 p-4 text-xs">{children}</div>
      </div>
    </AppWindow>
  );
}

function SlackMessage({ name, children, app }: { name: string; children: React.ReactNode; app?: boolean }) {
  return (
    <div className="flex gap-2">
      <span className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[10px] font-bold", app ? "bg-brand text-white" : "bg-slate-200 text-slate-600")}>
        {app ? "E1" : name[0]}
      </span>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold text-ink">
          {name}
          {app && <span className="ml-1 rounded bg-slate-100 px-1 text-[9px] font-medium text-slate-500">APP</span>}
        </div>
        <div className="text-slate-600">{children}</div>
      </div>
    </div>
  );
}

/** New conversations land in Slack and replies sync back. */
export function SlackSyncVisual() {
  return (
    <VisualStage>
      <SlackMock>
        <SlackMessage name="EngageOne" app>
          New conversation from <b>Priya</b> (website chat): “Can I upgrade my plan mid-month?”
        </SlackMessage>
        <SlackMessage name="Rahul">Yes, the difference is pro-rated on your next invoice.</SlackMessage>
        <div className="ml-9 rounded-md bg-emerald-50 px-2 py-1 text-[10px] text-emerald-700">Sent to Priya as Rahul</div>
      </SlackMock>
      <FloatingTag icon={Slack}>Replies sync both ways</FloatingTag>
    </VisualStage>
  );
}

/** Using /note in Slack to add a private note. */
export function SlackNoteVisual() {
  return (
    <VisualStage>
      <SlackMock>
        <SlackMessage name="EngageOne" app>
          New conversation from <b>Meera</b> (email): “I was charged twice.”
        </SlackMessage>
        <SlackMessage name="Arjun">
          <span className="font-mono text-brand">/note</span> Checked billing, refund already raised.
        </SlackMessage>
        <div className="ml-9 flex items-center gap-1.5 rounded-md bg-amber-50 px-2 py-1 text-[10px] text-amber-800">
          <StickyNote className="h-3 w-3" /> Saved as a private note in EngageOne
        </div>
      </SlackMock>
      <FloatingTag icon={Lock}>The customer never sees it</FloatingTag>
    </VisualStage>
  );
}

/** Connecting Slack from the integrations screen. */
export function SlackConnectVisual() {
  return (
    <ChannelSetup
      title="Integrations · Slack"
      steps={[
        { label: "Connect", detail: "Click Connect in EngageOne", icon: Link2 },
        { label: "Allow", detail: "Approve the app in Slack", icon: CircleCheck },
        { label: "Pick", detail: "Choose a channel", icon: Hash },
      ]}
      fields={[{ label: "Slack channel", value: "#customer-support", kind: "select" }]}
      button="Update"
      tag="Connected"
    />
  );
}

/* ---------- TikTok ---------- */

/** TikTok direct message thread in the inbox. */
export function TikTokChatVisual() {
  return (
    <ChannelConversation
      title="EngageOne · TikTok"
      icon={Music2}
      tint="bg-slate-200 text-slate-800"
      name="Kavya"
      meta="TikTok DM · Business account"
      tag="TikTok DMs in the shared inbox"
    >
      <Bubble>Saw your video! Does the bottle keep drinks cold all day?</Bubble>
      <Bubble from="agent">Hi Kavya! Yes, it keeps drinks cold for up to 12 hours.</Bubble>
      <Bubble>Great, where can I buy one?</Bubble>
      <Bubble from="agent">Here’s our shop link. Happy to help with sizes too.</Bubble>
    </ChannelConversation>
  );
}

/** Connecting a TikTok business account. */
export function TikTokSetupVisual() {
  return (
    <ChannelSetup
      title="New inbox · TikTok"
      steps={[
        { label: "Choose", detail: "TikTok channel", icon: Music2 },
        { label: "Sign in", detail: "Authorise your business account", icon: KeyRound },
        { label: "Ready", detail: "DMs start arriving", icon: CircleCheck },
      ]}
      fields={[
        { label: "Business account", value: "@yourbrand", kind: "select" },
        { label: "Inbox name", value: "TikTok" },
      ]}
      tag="Account connected"
    />
  );
}

/** Which TikTok DMs reach the inbox and who answers them. */
export function TikTokTeamVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Inbox">
        <ListRows
          rows={[
            { title: "Kavya · TikTok", meta: "Where can I buy one?", icon: Music2, tint: "bg-slate-200 text-slate-800", badge: "Sales", active: true },
            { title: "Priya · Instagram DM", meta: "Is this in stock?", icon: Instagram, tint: "bg-pink-100 text-pink-600", badge: "Sales" },
            { title: "Rahul · TikTok", meta: "My order hasn’t arrived", icon: Music2, tint: "bg-slate-200 text-slate-800", badge: "Support" },
          ]}
        />
      </AppWindow>
      <FloatingTag icon={UserCheck}>Assigned like any other chat</FloatingTag>
    </VisualStage>
  );
}

/* ---------- Twilio ---------- */

/** SMS on a Twilio number. */
export function TwilioSmsVisual() {
  return (
    <ChannelConversation
      title="EngageOne · SMS via Twilio"
      icon={Smartphone}
      tint="bg-rose-100 text-rose-600"
      name="Neha"
      meta="SMS · Twilio number"
      tag="Delivered through Twilio"
    >
      <Bubble>Hi, is the clinic open on Saturday?</Bubble>
      <Bubble from="agent">Hi Neha, yes, from 9 am to 1 pm.</Bubble>
      <Ticks label="Delivered" />
    </ChannelConversation>
  );
}

/** WhatsApp on a Twilio sender. */
export function TwilioWhatsAppVisual() {
  return (
    <ChannelConversation
      title="EngageOne · WhatsApp via Twilio"
      icon={MessageCircle}
      tint="bg-emerald-100 text-emerald-600"
      name="Rahul"
      meta="WhatsApp · Twilio sender"
    >
      <Bubble from="system">Template · appointment_reminder</Bubble>
      <Bubble from="agent">Hi Rahul, your service visit is booked for Monday at 10:00.</Bubble>
      <Ticks />
      <Bubble>Thanks, see you then.</Bubble>
    </ChannelConversation>
  );
}

/** Incoming voice call on a Twilio number, answered from the inbox. */
export function TwilioVoiceVisual() {
  return (
    <VisualStage>
      <AppWindow title="EngageOne · Voice">
        <div className="flex flex-col items-center gap-3 p-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <PhoneIncoming className="h-6 w-6" />
          </span>
          <div>
            <div className="text-sm font-semibold text-ink">Incoming call · Priya</div>
            <div className="text-[11px] text-slate-500">Support line · Twilio number</div>
          </div>
          <div className="flex gap-2">
            <span className="rounded-full bg-emerald-500 px-4 py-1.5 text-[11px] font-semibold text-white">Accept</span>
            <span className="rounded-full bg-rose-500 px-4 py-1.5 text-[11px] font-semibold text-white">Decline</span>
          </div>
        </div>
        <div className="border-t border-slate-100">
          <ChatThread>
            <Bubble from="system">Call ended · 4 min</Bubble>
            <Bubble from="note">Wants to reschedule to Thursday. Done.</Bubble>
          </ChatThread>
        </div>
      </AppWindow>
      <FloatingTag icon={Phone}>Calls live in the conversation</FloatingTag>
    </VisualStage>
  );
}

/** Twilio connection form. */
export function TwilioSetupVisual() {
  return (
    <ChannelSetup
      title="New inbox · Twilio"
      steps={[
        { label: "Choose", detail: "SMS or WhatsApp", icon: MessageSquare },
        { label: "Connect", detail: "Your Twilio credentials", icon: KeyRound },
        { label: "Number", detail: "Pick the Twilio number", icon: Phone },
      ]}
      fields={[
        { label: "Medium", value: "SMS", kind: "select" },
        { label: "Account SID", value: "AC••••••••" },
        { label: "Auth token", value: "••••••••••••" },
        { label: "Voice calls", kind: "toggle" },
      ]}
    />
  );
}
