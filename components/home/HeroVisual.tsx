import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Compass,
  GitBranch,
  Mic,
  MonitorSmartphone,
  Pause,
  PhoneOff,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Home hero illustration: Driansh's services as a bento grid of glass cards
 * on the navy hero. Decorative; sample data only.
 */

const WAVEFORM = ["h-3", "h-6", "h-9", "h-5", "h-10", "h-7", "h-4", "h-8", "h-11", "h-6", "h-3", "h-7", "h-9", "h-5", "h-8", "h-4", "h-6", "h-10", "h-5", "h-3"];

function GlassCard({ title, icon: Icon, className, children }: { title: string; icon: LucideIcon; className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md", className)}>
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-white">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-violet-200">
          <Icon className="h-3.5 w-3.5" />
        </span>
        {title}
      </div>
      {children}
    </div>
  );
}

function CheckRow({ children, done = true }: { children: React.ReactNode; done?: boolean }) {
  return (
    <li className="flex items-center gap-2 text-[11px] text-slate-300">
      {done ? (
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
      ) : (
        <span className="h-3.5 w-3.5 shrink-0 animate-pulse rounded-full border-2 border-violet-300" />
      )}
      {children}
    </li>
  );
}

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg select-none" aria-hidden="true">
      <span className="absolute -top-5 left-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-violet-900/40">
        <Sparkles className="h-3.5 w-3.5" /> Real-time communication
      </span>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {/* VoIP / WebRTC live call */}
        <div className="col-span-2 rounded-3xl border border-white/15 bg-linear-to-br from-white/[0.12] to-white/[0.04] p-5 shadow-2xl shadow-violet-950/50 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">PS</span>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-white">Priya · Sales</div>
              <div className="text-[11px] text-slate-400">VoIP call · HD audio · WebRTC</div>
            </div>
            <span className="ml-auto flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> 02:14
            </span>
          </div>

          <div className="mt-4 flex h-12 items-center gap-1">
            {WAVEFORM.map((height, i) => (
              <span key={i} className={cn("flex-1 rounded-full bg-linear-to-t from-brand to-violet-400", height)} />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              {["SIP", "FreeSWITCH", "Kamailio"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
                <Mic className="h-3.5 w-3.5" />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
                <Pause className="h-3.5 w-3.5" />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white">
                <PhoneOff className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* DevOps */}
        <GlassCard title="DevOps" icon={GitBranch}>
          <ul className="space-y-1.5">
            <CheckRow>Build</CheckRow>
            <CheckRow>Test</CheckRow>
            <CheckRow done={false}>Deploy to cloud</CheckRow>
          </ul>
        </GlassCard>

        {/* Web & mobile */}
        <GlassCard title="Web & Mobile" icon={MonitorSmartphone}>
          <div className="flex items-end gap-2">
            <div className="h-16 flex-1 rounded-lg border border-white/10 bg-white/5 p-1.5">
              <div className="h-1.5 w-1/2 rounded-full bg-violet-300/60" />
              <div className="mt-1.5 h-1 w-full rounded-full bg-white/15" />
              <div className="mt-1 h-1 w-4/5 rounded-full bg-white/15" />
              <div className="mt-2 h-4 w-2/5 rounded-md bg-brand" />
            </div>
            <div className="h-20 w-11 rounded-xl border border-white/15 bg-white/5 p-1">
              <div className="mx-auto h-0.5 w-3 rounded-full bg-white/30" />
              <div className="mt-1.5 h-5 rounded-md bg-brand-gradient" />
              <div className="mt-1 h-1 rounded-full bg-white/15" />
              <div className="mt-1 h-1 w-3/4 rounded-full bg-white/15" />
            </div>
          </div>
        </GlassCard>

        {/* QA */}
        <GlassCard title="QA & Testing" icon={ShieldCheck}>
          <ul className="space-y-1.5">
            <CheckRow>Call flows</CheckRow>
            <CheckRow>Load test</CheckRow>
            <CheckRow>Audio quality</CheckRow>
          </ul>
        </GlassCard>

        {/* Consultancy */}
        <GlassCard title="Consultancy" icon={Compass}>
          <div className="space-y-1.5 text-[11px] text-slate-300">
            <div className="flex items-center gap-2">
              <Workflow className="h-3.5 w-3.5 text-violet-300" /> Discovery workshop
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-300" /> Architecture plan
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-300" /> Roadmap & estimate
            </div>
          </div>
        </GlassCard>
      </div>

      <span className="absolute -bottom-4 right-6 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-navy/90 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Built, tested and supported by Driansh
      </span>
    </div>
  );
}
