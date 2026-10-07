import { MessageCircle, PhoneCall } from "lucide-react";
import { CtaLink, Section } from "@/components/site";
import VoiceCallWidget from "./VoiceCallWidget";
import { ENGAGEONE_BASE } from "./links";

const CHANNELS = [
  {
    title: "Twilio Voice",
    description:
      "Connect a Twilio phone number and your agents take and place calls right from the browser. No desk phones, no extra app.",
    icon: PhoneCall,
  },
  {
    title: "WhatsApp calling",
    description:
      "Customers tap call on your WhatsApp Business number and it rings in the inbox. Call them back once they have given permission.",
    icon: MessageCircle,
  },
];

export default function CallingSection() {
  return (
    <Section tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow mb-3 flex items-center gap-2 text-brand">
            Voice
            <span className="rounded-full bg-brand-gradient px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white">
              New
            </span>
          </p>
          <h2 className="heading-2 text-ink">Pick up the phone without leaving the inbox</h2>
          <p className="text-lead mt-4 text-slate-600">
            Calls arrive in the same inbox as your chats, emails and messages. Answer incoming calls or dial out, and
            every call stays in the customer&apos;s conversation, with a recording and transcript when you switch them
            on.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CHANNELS.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-surface p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CtaLink href={`${ENGAGEONE_BASE}/calling`} variant="outline">
              Explore voice
            </CtaLink>
          </div>
        </div>

        <VoiceCallWidget />
      </div>
    </Section>
  );
}
