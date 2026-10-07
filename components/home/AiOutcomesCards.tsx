"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, FileText, MessageSquareText, Sparkles, Tag, UserRoundCheck, Workflow, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Bubble } from "@/components/visuals/engageone/primitives";

/*
 * Bento cards for the "AI Assistant outcomes" home section. Every number
 * here is sample data for illustration, and each card says so where numbers appear.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

/** Becomes true once the element scrolls into view (immediately when motion is reduced). */
function useShown<T extends Element>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduceMotion = useReducedMotion();
  return { ref, shown: inView || !!reduceMotion, reduceMotion: !!reduceMotion };
}

function CountUp({ value, start, instant, suffix = "" }: { value: number; start: boolean; instant: boolean; suffix?: string }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!start || instant) return;
    const controls = animate(0, value, { duration: 1.4, ease: EASE, onUpdate: (v) => setShown(Math.round(v)) });
    return () => controls.stop();
  }, [start, instant, value]);

  return (
    <>
      {(instant && start ? value : shown).toLocaleString("en-US")}
      {suffix}
    </>
  );
}

function CardShell({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-surface p-5 shadow-sm sm:p-6",
        className
      )}
    >
      <div className="flex-1">{children}</div>
      <h3 className="heading-3 mt-6 text-ink">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}

function SampleTag() {
  return (
    <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
      Sample data
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Outcome breakdown                                                    */
/* ------------------------------------------------------------------ */

const HANDLED = 1240;

const OUTCOMES = [
  { label: "Resolved by AI", value: 62, bar: "bg-brand-gradient", dot: "bg-violet-500" },
  { label: "Handed to team", value: 24, bar: "bg-sky-400", dot: "bg-sky-400" },
  { label: "Closed by team", value: 14, bar: "bg-slate-300", dot: "bg-slate-300" },
];

const RESOLVED_SPLIT = [
  { label: "Stayed resolved", value: 91, bar: "bg-emerald-500", dot: "bg-emerald-500" },
  { label: "Reopened within 7 days", value: 9, bar: "bg-amber-400", dot: "bg-amber-400" },
];

const HANDOFF_REASONS = [
  { label: "Customer asked for a person", value: 46 },
  { label: "Missing knowledge", value: 31 },
  { label: "Request not supported", value: 23 },
];

function StackedBar({
  parts,
  shown,
  delay = 0,
}: {
  parts: { label: string; value: number; bar: string }[];
  shown: boolean;
  delay?: number;
}) {
  return (
    <div className="flex h-4 w-full gap-1 overflow-hidden rounded-full bg-white sm:h-5">
      {parts.map((part, i) => (
        <motion.div
          key={part.label}
          className={cn("h-full rounded-full", part.bar)}
          initial={{ width: 0 }}
          animate={{ width: shown ? `${part.value}%` : 0 }}
          transition={{ duration: 1, delay: delay + i * 0.15, ease: EASE }}
        />
      ))}
    </div>
  );
}

function Legend({
  parts,
  shown,
  instant,
}: {
  parts: { label: string; value: number; dot: string }[];
  shown: boolean;
  instant: boolean;
}) {
  return (
    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
      {parts.map((part) => (
        <li key={part.label} className="flex items-center gap-2 text-xs text-slate-600">
          <span className={cn("h-2.5 w-2.5 rounded-full", part.dot)} />
          {part.label}
          <span className="font-semibold text-ink">
            <CountUp value={part.value} start={shown} instant={instant} suffix="%" />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function AiOutcomesBreakdownCard({ className }: { className?: string }) {
  const { ref, shown, reduceMotion } = useShown<HTMLDivElement>();

  return (
    <CardShell
      className={className}
      title="See how every conversation ended"
      description="Track what the assistant resolved on its own, what it handed to your team and why, and whether resolved chats stayed closed."
    >
      <div ref={ref} className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6" aria-hidden="true">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-medium text-slate-500">Conversations handled · Last 7 days</div>
            <div className="mt-1 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              <CountUp value={HANDLED} start={shown} instant={reduceMotion} />
            </div>
          </div>
          <SampleTag />
        </div>

        <div className="mt-5">
          <StackedBar parts={OUTCOMES} shown={shown} />
          <Legend parts={OUTCOMES} shown={shown} instant={reduceMotion} />
        </div>

        <div className="mt-6 grid gap-6 border-t border-slate-100 pt-5 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold text-ink">Of the chats resolved by AI</div>
            <div className="mt-3">
              <StackedBar parts={RESOLVED_SPLIT} shown={shown} delay={0.5} />
              <Legend parts={RESOLVED_SPLIT} shown={shown} instant={reduceMotion} />
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-ink">Why chats were handed over</div>
            <ul className="mt-3 space-y-2.5">
              {HANDOFF_REASONS.map((reason, i) => (
                <li key={reason.label}>
                  <div className="flex justify-between gap-3 text-xs text-slate-600">
                    <span className="truncate">{reason.label}</span>
                    <span className="font-semibold text-ink">
                      <CountUp value={reason.value} start={shown} instant={reduceMotion} suffix="%" />
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      className="h-full rounded-full bg-sky-400"
                      initial={{ width: 0 }}
                      animate={{ width: shown ? `${reason.value}%` : 0 }}
                      transition={{ duration: 0.9, delay: 0.7 + i * 0.12, ease: EASE }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

/* ------------------------------------------------------------------ */
/* Suggested FAQs                                                       */
/* ------------------------------------------------------------------ */

const FAQS = [
  { question: "Can I change my delivery address?", seen: 18 },
  { question: "How long do refunds take?", seen: 12 },
  { question: "Do you ship outside the city?", seen: 7 },
];

export function AiOutcomesFaqCard({ className }: { className?: string }) {
  const { ref, shown, reduceMotion } = useShown<HTMLDivElement>();
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    if (!shown || reduceMotion) return;
    const timer = setTimeout(() => setApproved(true), 1800);
    return () => clearTimeout(timer);
  }, [shown, reduceMotion]);

  const firstApproved = approved || reduceMotion;

  return (
    <CardShell
      className={className}
      title="Suggested FAQs from real conversations"
      description="Questions customers keep asking become FAQ drafts. You approve them before the assistant uses them."
    >
      <div ref={ref} className="space-y-2.5" aria-hidden="true">
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            <Sparkles className="h-3.5 w-3.5 text-violet-500" /> Suggested FAQs
          </span>
          <SampleTag />
        </div>
        {FAQS.map((faq, i) => (
          <motion.div
            key={faq.question}
            className="rounded-xl border border-slate-200 bg-white p-3"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shown ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: i * 0.15, ease: EASE }}
          >
            <div className="text-xs font-semibold text-ink">{faq.question}</div>
            <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[10px] text-slate-500">Seen in {faq.seen} conversations</span>
              {i === 0 && firstApproved ? (
                <motion.span
                  initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700"
                >
                  <Check className="h-3 w-3" /> Approved
                </motion.span>
              ) : (
                <span className="flex gap-1">
                  <span className="flex items-center gap-1 rounded-full bg-brand px-2 py-0.5 text-[10px] font-medium text-white">
                    <Check className="h-3 w-3" /> Approve
                  </span>
                  <span className="flex items-center rounded-full border border-slate-200 px-1.5 py-0.5 text-slate-500">
                    <X className="h-3 w-3" />
                  </span>
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </CardShell>
  );
}

/* ------------------------------------------------------------------ */
/* Reply draft                                                          */
/* ------------------------------------------------------------------ */

export function AiOutcomesDraftCard({ className }: { className?: string }) {
  const { ref, shown, reduceMotion } = useShown<HTMLDivElement>();

  return (
    <CardShell
      className={className}
      title="Get a reply draft in one click"
      description="Agents ask the assistant for a suggested answer, review it, and send it as is or after a quick edit."
    >
      <div ref={ref} className="flex flex-col gap-2.5" aria-hidden="true">
        <Bubble from="customer">Hi, my order #4821 hasn&apos;t arrived yet. Can you check?</Bubble>
        <span className="flex items-center gap-1.5 self-end rounded-full border border-violet-200 bg-white px-2.5 py-1 text-[10px] font-medium text-violet-700">
          <Sparkles className="h-3 w-3" /> Suggest an answer
        </span>
        <motion.div
          className="rounded-xl border border-violet-200 bg-violet-50 p-3 text-xs text-violet-900"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={shown ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
        >
          <div className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-violet-600">
            <Sparkles className="h-3 w-3" /> AI draft
          </div>
          Sorry for the wait! Your order is with our courier and should reach you by tomorrow evening. I&apos;ll share the
          tracking link here.
          <div className="mt-2.5 flex justify-end">
            <span className="rounded-full bg-violet-600 px-2.5 py-1 text-[10px] font-semibold text-white">Use this reply</span>
          </div>
        </motion.div>
      </div>
    </CardShell>
  );
}

/* ------------------------------------------------------------------ */
/* Scenario                                                             */
/* ------------------------------------------------------------------ */

const STEPS = [
  { text: "Ask how many units they need and the delivery city." },
  { text: "Save the answers for the team with", tool: "add_private_note", icon: FileText },
  { text: "Tag the chat as a sales lead with", tool: "add_label_to_conversation", icon: Tag },
  { text: "Tell the customer a person will follow up, then", tool: "handoff", icon: UserRoundCheck },
];

const BUILT_IN_TOOLS = ["faq_lookup", "add_contact_note", "update_priority", "resolve_conversation"];

export function AiOutcomesScenarioCard({ className }: { className?: string }) {
  const { ref, shown, reduceMotion } = useShown<HTMLDivElement>();

  return (
    <CardShell
      className={className}
      title="Set a process, the assistant follows it"
      description="Write the steps in plain language and mention the tools to use. The assistant runs the same process every time."
    >
      <div ref={ref} className="grid gap-4 md:grid-cols-[1fr_14rem]" aria-hidden="true">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-soft text-brand">
              <Workflow className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <div className="truncate text-xs font-semibold text-ink">Scenario · Bulk order enquiry</div>
              <div className="truncate text-[10px] text-slate-500">When a customer asks about buying in bulk</div>
            </div>
          </div>
          <ol className="mt-4 space-y-2.5">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.text}
                className="flex gap-2.5 text-xs text-slate-600"
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                animate={shown ? { opacity: 1, x: 0 } : undefined}
                transition={{ duration: 0.45, delay: i * 0.25, ease: EASE }}
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-[10px] font-semibold text-white">
                  {i + 1}
                </span>
                <span className="min-w-0 leading-5">
                  {step.text}
                  {step.tool && (
                    <span className="ms-1 inline-flex max-w-full items-center gap-1 break-all rounded-md bg-violet-100 px-1.5 py-0.5 font-mono text-[10px] font-medium text-violet-700">
                      <step.icon className="h-3 w-3 shrink-0" />@{step.tool}
                    </span>
                  )}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">More tools</div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {BUILT_IN_TOOLS.map((tool) => (
              <span key={tool} className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-600">
                @{tool}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2 rounded-xl bg-brand-soft p-2.5 text-[11px] text-ink">
            <MessageSquareText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
            Add your own tools that call your APIs, like an order status lookup.
          </div>
        </div>
      </div>
    </CardShell>
  );
}
