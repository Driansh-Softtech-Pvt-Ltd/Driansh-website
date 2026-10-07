import { Boxes, Globe2, MapPin, PhoneCall } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * "Our story" illustration for the About page: the Driansh journey as a
 * timeline, with the open-source voice stack floating around it. Decorative.
 */

const MILESTONES: { tag: string; title: string; detail: string; icon: LucideIcon }[] = [
  { tag: "2025", title: "Founded in GIFT City", detail: "A focused team of voice and software engineers", icon: MapPin },
  { tag: "Engineering", title: "Voice systems for clients", detail: "PBX, softswitch, call center and WebRTC builds", icon: PhoneCall },
  { tag: "Products", title: "EngageOne and Contact Center", detail: "Our own platforms for customer conversations", icon: Boxes },
  { tag: "Today", title: "Clients in India and abroad", detail: "Products, custom builds and long-term support", icon: Globe2 },
];

const STACK = [
  { label: "FreeSWITCH", className: "-top-4 right-6" },
  { label: "Kamailio", className: "top-1/3 -right-5" },
  { label: "WebRTC", className: "-bottom-4 right-16" },
  { label: "Asterisk", className: "bottom-1/4 -left-5" },
];

export default function AboutStoryVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl select-none py-6" aria-hidden="true">
      <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-10 blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-card p-6 shadow-2xl shadow-violet-900/20 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-sm font-bold text-white">D</span>
          <div>
            <div className="text-sm font-semibold text-ink">The Driansh journey</div>
            <div className="text-xs text-slate-500">From a voice engineering team to a product company</div>
          </div>
        </div>

        <ol className="relative space-y-5">
          <span className="absolute bottom-3 left-[1.15rem] top-3 w-0.5 bg-linear-to-b from-brand via-accent to-brand/20" />
          {MILESTONES.map(({ tag, title, detail, icon: Icon }, i) => (
            <li key={title} className="relative flex items-start gap-4">
              <span
                className={cn(
                  "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-4 ring-card",
                  i === MILESTONES.length - 1 ? "bg-brand-gradient text-white" : "bg-brand-soft text-brand"
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1 rounded-2xl border border-slate-100 bg-surface px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">{tag}</span>
                <div className="text-sm font-semibold text-ink">{title}</div>
                <div className="text-xs text-slate-500">{detail}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {STACK.map(({ label, className }) => (
        <span
          key={label}
          className={cn(
            "absolute hidden rounded-full border border-brand/20 bg-card px-3 py-1.5 text-xs font-semibold text-brand shadow-lg sm:inline-flex",
            className
          )}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
