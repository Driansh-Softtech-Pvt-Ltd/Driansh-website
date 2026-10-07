import {
  ArrowDown,
  Code2,
  Facebook,
  Image as ImageIcon,
  Inbox,
  Instagram,
  Mail,
  MessageCircle,
  Paperclip,
  Send,
  Server,
  Webhook,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AppWindow, Bubble } from "@/components/visuals/engageone/primitives";

/*
 * The four mock-ups shown beside the Omnichannel accordion on the home page.
 * Sample data only; every visual is decorative (AppWindow is aria-hidden).
 */

function ProviderTabs({ tabs, active }: { tabs: { label: string; icon: typeof Mail }[]; active: number }) {
  return (
    <div className="flex gap-1.5 overflow-hidden border-b border-slate-100 px-4 py-2.5">
      {tabs.map(({ label, icon: Icon }, i) => (
        <span
          key={label}
          className={cn(
            "flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold",
            i === active ? "bg-brand text-white" : "bg-surface text-slate-500"
          )}
        >
          <Icon className="h-3 w-3" /> {label}
        </span>
      ))}
    </div>
  );
}

export function OmnichannelMetaVisual() {
  return (
    <AppWindow title="EngageOne · WhatsApp">
      <ProviderTabs
        active={0}
        tabs={[
          { label: "WhatsApp", icon: MessageCircle },
          { label: "Messenger", icon: Facebook },
          { label: "Instagram", icon: Instagram },
        ]}
      />
      <div className="flex h-80 flex-col gap-2 overflow-hidden p-4">
        <Bubble from="customer">Hi! Is my order #4821 on its way?</Bubble>
        <div className="max-w-[85%] self-end overflow-hidden rounded-2xl rounded-tr-sm border border-slate-200 bg-white text-xs">
          <div className="flex h-12 items-center justify-center bg-brand-soft text-brand">
            <ImageIcon className="h-5 w-5" />
          </div>
          <div className="p-3">
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-600">Template · order_update</div>
            Good news, Priya! Order #4821 left our store today and should reach you by Friday.
          </div>
          <div className="grid grid-cols-2 border-t border-slate-100 text-center text-[10px] font-semibold text-brand">
            <span className="py-2">Track order</span>
            <span className="border-l border-slate-100 py-2">Talk to us</span>
          </div>
        </div>
        <Bubble from="customer">Perfect, thank you 🙏</Bubble>
        <div className="mt-auto flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-[11px] text-slate-400">
          <Paperclip className="h-3.5 w-3.5" /> Reply, attach a photo or pick a template…
        </div>
      </div>
    </AppWindow>
  );
}

export function OmnichannelEmailVisual() {
  return (
    <AppWindow title="EngageOne · Email">
      <ProviderTabs
        active={0}
        tabs={[
          { label: "Gmail", icon: Mail },
          { label: "Outlook", icon: Mail },
          { label: "IMAP/SMTP", icon: Server },
        ]}
      />
      <div className="flex h-80 flex-col gap-2.5 p-4 text-xs">
        <div className="rounded-xl border border-slate-100 bg-surface p-3">
          <div className="flex justify-between gap-2 text-[10px] text-slate-500">
            <span className="truncate font-semibold text-ink">Arjun Mehta</span>
            <span className="shrink-0">Tue 10:12</span>
          </div>
          <p className="mt-1 text-slate-600">Could you resend the invoice for March? I can&apos;t find it.</p>
        </div>
        <div className="flex flex-1 flex-col rounded-xl border border-brand/30 p-3">
          {[
            ["To", "arjun@example.com"],
            ["CC", "accounts@example.com"],
            ["Subject", "Re: March invoice"],
          ].map(([label, value]) => (
            <div key={label} className="flex gap-2 border-b border-slate-100 py-1 text-[11px]">
              <span className="w-12 shrink-0 text-slate-400">{label}</span>
              <span className="truncate text-ink">{value}</span>
            </div>
          ))}
          <p className="mt-2 text-slate-600">Hi Arjun, here it is. Same thread, so you have the whole history in one place.</p>
          <div className="mt-auto flex items-center justify-between pt-2">
            <span className="flex items-center gap-1 text-[10px] text-slate-400">
              <Paperclip className="h-3 w-3" /> invoice-march.pdf
            </span>
            <span className="flex items-center gap-1 rounded-md bg-brand-gradient px-2.5 py-1 text-[10px] font-semibold text-white">
              <Send className="h-3 w-3" /> Send
            </span>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

const SWATCHES = ["bg-brand", "bg-accent", "bg-emerald-500", "bg-rose-500"];

export function OmnichannelWidgetVisual() {
  return (
    <AppWindow title="yourstore.com">
      <div className="relative h-[22.75rem] bg-surface p-4">
        <div className="space-y-2" aria-hidden="true">
          <div className="h-3 w-1/3 rounded bg-slate-200" />
          <div className="h-2 w-1/2 rounded bg-slate-200" />
          <div className="h-2 w-2/5 rounded bg-slate-200" />
        </div>
        <div className="mt-4 flex items-center gap-1.5 text-[10px] text-slate-500">
          Widget colour
          {SWATCHES.map((swatch, i) => (
            <span key={swatch} className={cn("h-4 w-4 rounded-full", swatch, i === 0 && "ring-2 ring-brand/30 ring-offset-1")} />
          ))}
        </div>
        <div className="absolute bottom-4 right-4 w-60 max-w-[calc(100%-2rem)] overflow-hidden rounded-2xl bg-white text-xs shadow-xl">
          <div className="bg-brand-gradient p-3 text-white">
            <div className="font-semibold">Hi there 👋</div>
            <div className="text-[10px] text-white/80">We usually reply in a few minutes.</div>
          </div>
          <div className="space-y-2 p-3">
            <p className="text-[11px] text-slate-500">Tell us a little about yourself to start.</p>
            {["Your name", "Email address"].map((field) => (
              <div key={field} className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-[11px] text-slate-400">
                {field}
              </div>
            ))}
            <div className="rounded-lg bg-brand py-1.5 text-center text-[11px] font-semibold text-white">Start conversation</div>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

function FlowNode({ icon: Icon, title, detail, tone = "bg-brand-soft text-brand" }: {
  icon: typeof Mail;
  title: string;
  detail: string;
  tone?: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-3 py-2 text-xs">
      <span className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-lg", tone)}>
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className="min-w-0">
        <span className="block truncate font-medium text-ink">{title}</span>
        <span className="block truncate font-mono text-[10px] text-slate-500">{detail}</span>
      </span>
    </div>
  );
}

function FlowArrow() {
  return <ArrowDown className="mx-auto h-3.5 w-3.5 text-slate-300" />;
}

export function OmnichannelApiVisual() {
  return (
    <AppWindow title="EngageOne · API channel">
      <div className="flex h-[22.75rem] flex-col gap-1.5 bg-surface p-4">
        <FlowNode icon={Code2} title="Your app or custom channel" detail="POST …/conversations/:id/messages" />
        <FlowArrow />
        <FlowNode icon={Inbox} title="EngageOne inbox" detail="Agents reply like any other chat" tone="bg-brand text-white" />
        <FlowArrow />
        <FlowNode icon={Webhook} title="Webhook to your server" detail="event: message_created" tone="bg-violet-100 text-violet-700" />
        <pre className="mt-auto overflow-hidden rounded-xl bg-navy p-3 font-mono text-[10px] leading-relaxed text-slate-300">
          {`{
  "event": "message_created",
  "message_type": "outgoing",
  "content": "Your table is booked for 8 PM"
}`}
        </pre>
      </div>
    </AppWindow>
  );
}
