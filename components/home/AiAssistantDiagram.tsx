"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Bookmark, Bot, Check, FileText, Globe, Pause, Play, Sparkles, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Animated map of how the EngageOne AI Assistant works: it learns from your
 * sources, responds to conversations, remembers customer details and suggests
 * FAQs for questions it could not answer. Each step on the left lights up its
 * branch of the diagram. Sample data only.
 */

const STEP_MS = 6500;
const TICK = 100;

type Branch = "learns" | "responds" | "remembers" | "gaps";

const STEPS: { branch: Branch; title: string; description: string }[] = [
  {
    branch: "learns",
    title: "Learns from your content",
    description: "Add help articles, website pages and PDF files. The assistant answers from what you have written.",
  },
  {
    branch: "responds",
    title: "Responds to conversations",
    description: "It replies on website chat, WhatsApp and your other channels, and hands over to your team when needed.",
  },
  {
    branch: "remembers",
    title: "Remembers customer details",
    description: "It saves what customers share as contact notes, so the next reply picks up where the last one left off.",
  },
  {
    branch: "gaps",
    title: "Suggests FAQs to fill gaps",
    description: "Questions it couldn't answer become suggested FAQs. You approve them before they are used.",
  },
];

const SOURCES: { label: string; icon: LucideIcon; y: number }[] = [
  { label: "help.yourbrand.com", icon: Globe, y: 196 },
  { label: "refund-policy.pdf", icon: FileText, y: 242 },
  { label: "Suggested FAQ", icon: Sparkles, y: 288 },
];

const CONVERSATIONS = [
  { initials: "PN", tint: "bg-amber-100 text-amber-700", text: "Where is my order?", y: 392 },
  { initials: "RS", tint: "bg-sky-100 text-sky-700", text: "Just email me, please", y: 438 },
  { initials: "AK", tint: "bg-violet-100 text-violet-700", text: "Do you ship to Dubai?", y: 484 },
];

/** Connector paths in the 600 × 540 diagram space. */
const PATHS: Record<Branch, string[]> = {
  learns: ["M300 112 V150 H150 Q135 150 135 165 V196"],
  responds: ["M300 112 V392"],
  remembers: ["M300 150 H465 Q480 150 480 165 V200", "M480 312 V438 H452"],
  gaps: ["M135 324 V472 Q135 502 150 502 H220"],
};

const PILLS: { branch: Branch; label: string; x: number; y: number }[] = [
  { branch: "learns", label: "learns", x: 214, y: 150 },
  { branch: "remembers", label: "remembers", x: 392, y: 150 },
  { branch: "responds", label: "responds", x: 300, y: 300 },
  { branch: "gaps", label: "fills gaps", x: 135, y: 410 },
];

/** HTML positioned inside the SVG, so the whole diagram scales as one piece. */
function Node({
  x,
  y,
  width,
  height,
  children,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  children: React.ReactNode;
}) {
  return (
    <foreignObject x={x} y={y} width={width} height={height} className="overflow-visible">
      <div className="h-full w-full">{children}</div>
    </foreignObject>
  );
}

function Diagram({ active, reduceMotion }: { active: Branch; reduceMotion: boolean }) {
  const on = (branch: Branch) => branch === active;
  const card = (branch: Branch) =>
    cn(
      "flex h-full items-center gap-2 rounded-xl border bg-white px-3 text-[13px] text-ink shadow-sm transition-all duration-500",
      on(branch) ? "border-violet-300 shadow-violet-200/60" : "border-slate-200 opacity-60"
    );

  return (
    <svg viewBox="0 0 600 540" className="h-auto w-full" role="img" aria-label={`AI Assistant diagram, showing: ${active}`}>
      {/* Connectors: grey base, violet overlay drawn in for the active branch. */}
      {(Object.keys(PATHS) as Branch[]).map((branch) =>
        PATHS[branch].map((d) => (
          <g key={d}>
            <path d={d} fill="none" className="stroke-slate-200" strokeWidth={2} />
            {on(branch) && (
              <motion.path
                d={d}
                fill="none"
                className="stroke-accent"
                strokeWidth={2.5}
                strokeLinecap="round"
                initial={reduceMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            )}
          </g>
        ))
      )}

      {/* AI node */}
      <Node x={262} y={36} width={76} height={76}>
        <div className="flex h-full w-full items-center justify-center rounded-2xl border-4 border-white bg-brand-gradient text-white shadow-xl shadow-violet-500/30">
          <Bot className="h-9 w-9" />
        </div>
      </Node>

      {/* Branch labels */}
      {PILLS.map(({ branch, label, x, y }) => (
        <Node key={branch} x={x - 52} y={y - 15} width={104} height={30}>
          <div className="flex h-full items-center justify-center">
            <span
              className={cn(
                "rounded-lg px-3 py-1 text-[13px] font-medium transition-colors duration-500",
                on(branch) ? "bg-violet-700 text-white shadow-md" : "border border-slate-200 bg-slate-50 text-slate-600"
              )}
            >
              {label}
            </span>
          </div>
        </Node>
      ))}

      {/* Sources the assistant learns from */}
      {SOURCES.map(({ label, icon: Icon, y }) => (
        <Node key={label} x={40} y={y} width={190} height={36}>
          <div className={card(label === "Suggested FAQ" ? (active === "gaps" ? "gaps" : "learns") : "learns")}>
            <Icon className="h-4 w-4 shrink-0 text-violet-500" />
            <span className="truncate">{label}</span>
          </div>
        </Node>
      ))}

      {/* Remembered note */}
      <Node x={400} y={200} width={160} height={112}>
        <div className={cn(card("remembers"), "flex-col items-start justify-center gap-1.5 py-3")}>
          <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <Bookmark className="h-3.5 w-3.5" /> Contact note · today
          </span>
          <span className="text-[13px] leading-snug">Prefers email updates over calls</span>
        </div>
      </Node>
      <Node x={466} y={358} width={28} height={28}>
        <div
          className={cn(
            "flex h-full w-full items-center justify-center rounded-lg text-white transition-colors duration-500",
            on("remembers") ? "bg-violet-700" : "bg-slate-300"
          )}
        >
          <UserRound className="h-3.5 w-3.5" />
        </div>
      </Node>

      {/* Conversations */}
      {CONVERSATIONS.map(({ initials, tint, text, y }, i) => {
        const lit = on("responds") || (on("remembers") && i === 1) || (on("gaps") && i === 2);
        return (
          <Node key={text} x={220} y={y - 18} width={232} height={36}>
            <motion.div
              initial={false}
              animate={on("responds") && !reduceMotion ? { x: [8, 0], opacity: [0, 1] } : { x: 0, opacity: 1 }}
              transition={{ delay: on("responds") ? 0.5 + i * 0.35 : 0, duration: 0.35 }}
              className={cn(
                "flex h-full items-center gap-2 rounded-xl border bg-white px-2.5 text-[13px] text-ink shadow-sm transition-all duration-500",
                lit ? "border-violet-300" : "border-slate-200 opacity-60"
              )}
            >
              <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[10px] font-bold", tint)}>
                {initials}
              </span>
              <span className="truncate">{text}</span>
              {on("responds") && i === 0 && (
                <Check className="ml-auto h-4 w-4 shrink-0 text-emerald-500" aria-label="Answered" />
              )}
            </motion.div>
          </Node>
        );
      })}
    </svg>
  );
}

export default function AiAssistantDiagram() {
  const reduceMotion = useReducedMotion() ?? false;
  const [{ index, elapsed }, setPosition] = useState({ index: 0, elapsed: 0 });
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const running = playing && !hovered && visible && !reduceMotion;
  const active = STEPS[index].branch;

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setPosition((current) =>
        current.elapsed + TICK < STEP_MS
          ? { ...current, elapsed: current.elapsed + TICK }
          : { index: (current.index + 1) % STEPS.length, elapsed: 0 }
      );
    }, TICK);
    return () => clearInterval(id);
  }, [running]);

  return (
    <div
      ref={rootRef}
      className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div role="tablist" aria-label="How the AI Assistant works" aria-orientation="vertical" className="divide-y divide-white/10">
        {STEPS.map((step, i) => {
          const isActive = i === index;
          return (
            <button
              key={step.title}
              type="button"
              role="tab"
              id={`ai-diagram-step-${i}`}
              aria-selected={isActive}
              aria-controls="ai-diagram-panel"
              onClick={() => setPosition({ index: i, elapsed: 0 })}
              className="relative block w-full py-6 text-left focus-visible:outline-2 focus-visible:outline-violet-300"
            >
              <div className="flex gap-5">
                <span
                  className={cn("text-lg font-medium tabular-nums", isActive ? "text-violet-300" : "text-white/40")}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={cn("heading-3 sm:text-2xl", isActive ? "text-white" : "text-white/70")}>
                    {step.title}
                  </h3>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden text-slate-300"
                      >
                        <span className="block pt-2 leading-relaxed">{step.description}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {isActive && !reduceMotion && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white/5">
                  <span
                    className="block h-full bg-brand-gradient transition-[width] duration-100 ease-linear"
                    style={{ width: `${(elapsed / STEP_MS) * 100}%` }}
                  />
                </span>
              )}
            </button>
          );
        })}
        {!reduceMotion && (
          <div className="pt-5">
            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? "Pause the animation" : "Play the animation"}
              className="flex min-h-10 items-center gap-1.5 rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-violet-300"
            >
              {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              {playing ? "Pause" : "Play"}
            </button>
          </div>
        )}
      </div>

      <div
        id="ai-diagram-panel"
        role="tabpanel"
        aria-labelledby={`ai-diagram-step-${index}`}
        className="relative order-first rounded-3xl bg-white p-3 shadow-2xl shadow-violet-950/40 sm:p-6 lg:order-none"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(#ddd6fe_1px,transparent_1px)] bg-size-[16px_16px] opacity-60"
        />
        <div className="relative">
          <Diagram active={active} reduceMotion={reduceMotion} />
        </div>
        <AnimatePresence>
          {active === "responds" && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -8, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              exit={{ opacity: 0 }}
              transition={{ delay: reduceMotion ? 0 : 1.4 }}
              className="absolute -top-4 right-3 flex items-center gap-2 rounded-xl border-2 border-ink bg-white px-3 py-2 shadow-[4px_4px_0_0_var(--color-ink)] sm:right-6"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500">EngageOne AI</span>
                <span className="block text-sm font-semibold text-ink">Resolved, no handoff</span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
