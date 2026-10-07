"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, CornerDownLeft, Lightbulb, RotateCcw, Sparkles, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { ENGAGEONE_BASE } from "./links";

/*
 * "Fewer conversations" block for the home page: a banner with an animated
 * flow of how conversations ended, then Monitors, Copilot and Scenarios cards.
 * All numbers are sample data.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

/** True once the element has scrolled into view (always true without motion). */
function useShown<T extends Element>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion() ?? false;
  return { ref, shown: inView || reduceMotion, reduceMotion };
}

/* ---------- Banner flow ---------- */

const FLOW_LABELS = [
  { text: "Resolved by AI", left: "5%", top: "22%" },
  { text: "Handed to team", left: "33%", top: "82%" },
  { text: "Stayed resolved", left: "54%", top: "25%" },
  { text: "Reopened", left: "76%", top: "77%" },
];

function OutcomeFlow() {
  const { ref, shown, reduceMotion } = useShown<HTMLDivElement>();
  return (
    <div ref={ref} className="relative w-full" aria-hidden="true">
      <svg viewBox="0 0 600 250" className="h-auto w-full">
        <defs>
          <clipPath id="ai-flow-reveal">
            <motion.rect
              x={0}
              y={0}
              height={250}
              initial={{ width: reduceMotion ? 600 : 0 }}
              animate={{ width: shown ? 600 : 0 }}
              transition={{ duration: 1.6, ease: EASE }}
            />
          </clipPath>
        </defs>
        <g clipPath="url(#ai-flow-reveal)">
          {/* Resolved by AI → middle bar */}
          <path d="M12 20 C150 20 160 35 300 35 L300 165 C160 165 150 150 12 150 Z" className="fill-violet-500/35" />
          {/* Handed to team */}
          <path d="M12 150 C150 150 170 214 292 214 L292 232 C170 232 150 196 12 196 Z" className="fill-white/70" />
          {/* Stayed resolved → end bar */}
          <path d="M300 35 C440 35 450 46 586 46 L586 154 C450 154 440 145 300 145 Z" className="fill-violet-500/45" />
          {/* Reopened */}
          <path d="M300 145 C440 145 460 200 578 200 L578 212 C460 212 440 165 300 165 Z" className="fill-white/70" />
          <rect x={4} y={20} width={8} height={176} rx={2} className="fill-ink" />
          <rect x={296} y={35} width={8} height={130} rx={2} className="fill-ink" />
          <rect x={584} y={46} width={8} height={108} rx={2} className="fill-ink" />
          <rect x={290} y={214} width={6} height={18} rx={1} className="fill-white" />
          <rect x={576} y={200} width={6} height={12} rx={1} className="fill-white" />
        </g>
      </svg>
      {FLOW_LABELS.map((label, i) => (
        <motion.span
          key={label.text}
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 6 }}
          animate={shown ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: reduceMotion ? 0 : 0.5 + i * 0.3, duration: 0.4 }}
          className="absolute -translate-y-1/2 whitespace-nowrap rounded-lg border border-white bg-white px-2.5 py-1 text-[11px] font-medium text-ink shadow-sm sm:text-sm"
          style={{ left: label.left, top: label.top }}
        >
          {label.text}
        </motion.span>
      ))}
    </div>
  );
}

export function AiOutcomesBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-violet-200/80">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.25)_1px,transparent_1px)] bg-size-[56px_100%]"
      />
      <span className="absolute left-5 top-5 inline-flex -rotate-2 items-center gap-1.5 rounded-xl border-2 border-ink bg-white px-3 py-1 text-sm font-semibold text-ink shadow-[3px_3px_0_0_var(--color-ink)]">
        <Sparkles className="h-4 w-4 text-violet-600" /> EngageOne AI
      </span>
      <div className="relative grid items-center gap-8 px-6 pb-8 pt-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6 lg:py-14 lg:pt-20">
        <div>
          <h2 className="heading-2 text-ink">Fewer conversations, not just faster replies</h2>
          <p className="text-lead mt-4 text-slate-700">
            The EngageOne AI Assistant resolves routine questions end to end and hands the rest to your team, so the queue
            actually gets shorter.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-wider text-violet-800/70">Illustration · sample data</p>
        </div>
        <OutcomeFlow />
      </div>
    </div>
  );
}

/* ---------- Cards ---------- */

function FeatureCard({
  label,
  href,
  title,
  description,
  children,
}: {
  label: string;
  href: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-stretch border-b border-slate-200">
        <h3 className="eyebrow flex-1 px-6 py-4 text-ink">{label}</h3>
        <Link
          href={href}
          aria-label={`Learn more about ${label.toLowerCase()}`}
          className="flex w-14 items-center justify-center border-l border-slate-200 text-slate-500 transition-colors hover:bg-brand-soft hover:text-brand focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="flex min-h-64 flex-col justify-center bg-surface bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[12px_12px] p-5">
        {children}
      </div>
      <div className="border-t border-slate-200 px-6 py-6">
        <p className="heading-3 text-ink">{title}</p>
        <p className="mt-2 text-slate-600">{description}</p>
      </div>
    </article>
  );
}

const TOPICS: { label: string; count: number; icon: LucideIcon; tint: string }[] = [
  { label: "Delivery questions", count: 84, icon: Truck, tint: "text-emerald-600" },
  { label: "Refund requests", count: 13, icon: RotateCcw, tint: "text-rose-500" },
  { label: "Feature requests", count: 5, icon: Lightbulb, tint: "text-amber-500" },
];

function MonitorsCard() {
  const { ref, shown, reduceMotion } = useShown<HTMLDivElement>();
  return (
    <FeatureCard
      label="Monitors"
      href={`${ENGAGEONE_BASE}/analyse/label-reports`}
      title="Know what customers keep asking"
      description="Label conversations automatically with rules or AI label suggestions, then see how often each topic comes up."
    >
      <div ref={ref}>
        <div className="mb-2 flex justify-between text-xs text-slate-500" aria-hidden="true">
          <span>Watching</span>
          <span>Last 7 days</span>
        </div>
        <ul className="space-y-2" aria-hidden="true">
          {TOPICS.map(({ label, count, icon: Icon, tint }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -8 }}
              animate={shown ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: reduceMotion ? 0 : i * 0.15, duration: 0.35 }}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm"
            >
              <span className={cn("flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200", tint)}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="font-medium text-ink">{label}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="ml-auto font-semibold tabular-nums text-ink">{count}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </FeatureCard>
  );
}

const DRAFT = "Sorry for the wait! Your order was held at the courier hub. It's back on the way and arrives Friday.";

function CopilotCard() {
  const { ref, shown, reduceMotion } = useShown<HTMLDivElement>();
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (!shown || reduceMotion) return;
    const id = setInterval(() => setTyped((count) => (count >= DRAFT.length ? count : count + 2)), 30);
    return () => clearInterval(id);
  }, [shown, reduceMotion]);

  const text = reduceMotion ? DRAFT : DRAFT.slice(0, typed);
  const done = reduceMotion || typed >= DRAFT.length;

  return (
    <FeatureCard
      label="Copilot"
      href={`${ENGAGEONE_BASE}/ai-assistant`}
      title="Get a reply draft in one click"
      description="Ask the AI for a reply written from your help content and the conversation. You review it and send."
    >
      <div ref={ref} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm" aria-hidden="true">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-violet-700">
          <Sparkles className="h-4 w-4" /> Copilot draft
        </p>
        <p className="mt-2 min-h-[4.5rem] text-sm leading-relaxed text-ink">
          {text}
          {!done && <span className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 animate-pulse bg-violet-600" />}
        </p>
        <span
          className={cn(
            "mt-3 inline-flex items-center gap-1.5 rounded-md bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white transition-opacity",
            done ? "opacity-100" : "opacity-40"
          )}
        >
          <CornerDownLeft className="h-3.5 w-3.5" /> Use this reply
        </span>
      </div>
    </FeatureCard>
  );
}

const SCENARIO_STEPS = [
  { text: "Ask team size and channels", tool: null },
  { text: "Save the answers", tool: "@add_private_note" },
  { text: "Pass to sales", tool: "@handoff" },
];

function ScenariosCard() {
  const { ref, shown, reduceMotion } = useShown<HTMLOListElement>();
  return (
    <FeatureCard
      label="Scenarios"
      href={`${ENGAGEONE_BASE}/ai-assistant`}
      title="Set a process, the assistant follows it"
      description="Write how your team handles a case. The assistant runs the steps and tools, like saving notes or handing over."
    >
      <ol ref={ref} className="space-y-2" aria-hidden="true">
        {SCENARIO_STEPS.map(({ text, tool }, i) => (
          <motion.li
            key={text}
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 8 }}
            animate={shown ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: reduceMotion ? 0 : 0.2 + i * 0.35, duration: 0.35 }}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">
              {i + 1}
            </span>
            <span className="text-ink">{text}</span>
            {tool && <span className="ml-auto font-mono text-xs font-medium text-violet-700">{tool}</span>}
          </motion.li>
        ))}
      </ol>
    </FeatureCard>
  );
}

export function AiOutcomesFeatureCards() {
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-3">
      <MonitorsCard />
      <CopilotCard />
      <ScenariosCard />
    </div>
  );
}
