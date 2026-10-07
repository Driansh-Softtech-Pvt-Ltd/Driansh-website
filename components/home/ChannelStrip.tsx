import Link from "next/link";
import {
  Code2,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  MessageCircleMore,
  MessagesSquare,
  Music2,
  Phone,
  Send,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { ENGAGEONE_BASE } from "./links";

const INTEGRATIONS = `${ENGAGEONE_BASE}/integrations`;

const CHANNELS: { label: string; href: string; icon: LucideIcon; tint: string }[] = [
  { label: "Website chat", href: `${ENGAGEONE_BASE}/website-live-chat`, icon: MessageCircleMore, tint: "bg-violet-100 text-violet-600" },
  { label: "WhatsApp", href: `${INTEGRATIONS}/whatsapp`, icon: MessageCircle, tint: "bg-emerald-100 text-emerald-600" },
  { label: "Instagram", href: `${INTEGRATIONS}/instagram`, icon: Instagram, tint: "bg-pink-100 text-pink-600" },
  { label: "Messenger", href: `${INTEGRATIONS}/facebook`, icon: Facebook, tint: "bg-blue-100 text-blue-600" },
  { label: "TikTok", href: `${INTEGRATIONS}/tiktok`, icon: Music2, tint: "bg-slate-200 text-ink" },
  { label: "Telegram", href: `${INTEGRATIONS}/telegram`, icon: Send, tint: "bg-sky-100 text-sky-600" },
  { label: "LINE", href: `${INTEGRATIONS}/line`, icon: MessagesSquare, tint: "bg-green-100 text-green-600" },
  { label: "SMS", href: `${INTEGRATIONS}/sms`, icon: Smartphone, tint: "bg-amber-100 text-amber-600" },
  { label: "Email", href: `${INTEGRATIONS}/email`, icon: Mail, tint: "bg-brand-soft text-brand" },
  { label: "Voice", href: `${INTEGRATIONS}/twilio`, icon: Phone, tint: "bg-rose-100 text-rose-600" },
  { label: "API", href: `${INTEGRATIONS}/api-channel`, icon: Code2, tint: "bg-navy/10 text-navy" },
];

/** Channels EngageOne connects, shown where other sites show client logos. */
export default function ChannelStrip() {
  return (
    <section aria-labelledby="channel-strip-title" className="border-b border-slate-200 bg-white py-10 md:py-14">
      <div className="container-site">
        <h2 id="channel-strip-title" className="eyebrow text-center text-slate-500">
          Connect the channels your customers already use
        </h2>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {CHANNELS.map(({ label, href, icon: Icon, tint }) => (
            <li key={label}>
              <Link
                href={href}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1.5 pr-4 pl-1.5 text-sm font-medium text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <span className={`flex h-8 w-8 items-center justify-center rounded-full ${tint}`}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm">
          <Link href={INTEGRATIONS} className="font-semibold text-brand hover:underline">
            See all channels and integrations
          </Link>
        </p>
      </div>
    </section>
  );
}
