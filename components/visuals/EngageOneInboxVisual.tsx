import { Bot, Facebook, Instagram, Mail, MessageCircle, Send, Smartphone, UserCheck } from "lucide-react";

const CHANNELS = [
  { label: "WhatsApp", icon: MessageCircle, tint: "bg-emerald-100 text-emerald-600", count: 12 },
  { label: "Email", icon: Mail, tint: "bg-sky-100 text-sky-600", count: 8 },
  { label: "Instagram", icon: Instagram, tint: "bg-pink-100 text-pink-600", count: 5 },
  { label: "Facebook", icon: Facebook, tint: "bg-blue-100 text-blue-600", count: 4 },
  { label: "Telegram", icon: Send, tint: "bg-cyan-100 text-cyan-600", count: 3 },
  { label: "SMS", icon: Smartphone, tint: "bg-violet-100 text-violet-600", count: 2 },
];

/** Original brand illustration of the EngageOne shared inbox (no third-party screenshots). */
export default function EngageOneInboxVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl select-none" aria-hidden="true">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white text-left text-slate-700 shadow-2xl shadow-violet-900/40">
        <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-semibold text-ink">EngageOne · Shared Inbox</span>
        </div>

        <div className="grid grid-cols-[9rem_1fr] sm:grid-cols-[11rem_1fr]">
          <ul className="space-y-1 border-r border-slate-100 bg-surface p-3">
            {CHANNELS.map(({ label, icon: Icon, tint, count }, i) => (
              <li
                key={label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs ${i === 0 ? "bg-white shadow-sm" : ""}`}
              >
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${tint}`}>
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="truncate font-medium">{label}</span>
                <span className="ml-auto rounded-full bg-brand-soft px-1.5 text-[10px] font-semibold text-brand">{count}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 p-4">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-xs">
              Hi! Can I get a demo of your contact center?
            </div>
            <div className="flex items-center gap-1.5 self-center rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-medium text-violet-700">
              <Bot className="h-3 w-3" /> Auto-assigned to Sales team
            </div>
            <div className="max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-brand px-3 py-2 text-xs text-white">
              Of course! Here are a few slots for tomorrow 📅
            </div>
            <div className="max-w-[70%] rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-xs">
              11:00 works for me 👍
            </div>
            <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-[11px] text-slate-400">
              Reply… <span className="ml-auto rounded-md bg-brand-gradient px-2 py-0.5 text-[10px] font-semibold text-white">Send</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-ink shadow-xl sm:flex">
        <UserCheck className="h-4 w-4 text-emerald-500" /> Resolved in one inbox
      </div>
    </div>
  );
}
