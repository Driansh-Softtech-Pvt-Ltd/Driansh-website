"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Check, Clock3, Landmark, Pause, Play, ShoppingBag, Sparkles, Store, Tag, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaLink } from "@/components/site";
import { AppWindow, Bubble, Composer } from "@/components/visuals/engageone/primitives";
import { DEMO_HREF, ENGAGEONE_BASE } from "./links";
import { INDUSTRY_SCENES, type IndustryScene } from "./IndustryScenes";

/*
 * Auto-playing industries showcase: each industry plays one short scripted
 * conversation on the right, then the next industry starts.
 */

const TICK = 100;
/** When each step of a scene appears, in milliseconds. */
const STEPS = { customer: 900, drafting: 2100, suggestion: 3600, accepted: 5300, sent: 6000, system: 7300 };
const SCENE_LENGTH = 10000;
/** Tab icons, in the same order as INDUSTRY_SCENES. */
const SCENE_ICONS: LucideIcon[] = [ShoppingBag, Store, Truck, Landmark];
/** Short tab labels, in the same order as INDUSTRY_SCENES. */
const TAB_LABELS = ["E-commerce", "Local businesses", "Logistics & delivery", "Fintech & insurance"];

function SceneHeader({ scene }: { scene: IndustryScene }) {
  const initials = scene.contact.name
    .split(" ")
    .map((part) => part[0])
    .join("");
  return (
    <div className="border-b border-slate-100 px-4 py-3">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-[11px] font-bold text-brand">
          {initials}
        </span>
        <div className="min-w-0">
          <div className="truncate text-xs font-semibold text-ink">{scene.contact.name}</div>
          <div className="truncate text-[10px] text-slate-500">
            {scene.contact.channel} · {scene.contact.reference}
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {scene.attributes.map((attribute) => (
          <span key={attribute} className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
            {attribute}
          </span>
        ))}
        <span className="flex items-center gap-1 rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-medium text-amber-700">
          <Tag className="h-2.5 w-2.5" /> {scene.label}
        </span>
        {scene.sla && (
          <span className="flex items-center gap-1 rounded-md bg-rose-50 px-1.5 py-0.5 text-[10px] font-medium text-rose-700">
            <Clock3 className="h-2.5 w-2.5" /> {scene.sla}
          </span>
        )}
      </div>
    </div>
  );
}

function Drafting() {
  return (
    <div className="flex items-center gap-2 self-end rounded-full bg-violet-50 px-3 py-1.5 text-[10px] font-medium text-violet-700">
      <Sparkles className="h-3 w-3" /> AI Assistant is drafting a reply
      <span className="flex gap-0.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1 w-1 rounded-full bg-violet-500"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </span>
    </div>
  );
}

function Suggestion({ text, accepted }: { text: string; accepted: boolean }) {
  return (
    <div className="self-stretch rounded-xl border border-violet-200 bg-violet-50 p-3 text-xs text-violet-900">
      <div className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-violet-600">
        <Sparkles className="h-3 w-3" /> AI suggestion
      </div>
      {text}
      <div className="mt-2 flex gap-1.5">
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] font-medium text-white transition-colors",
            accepted ? "bg-emerald-600" : "bg-violet-600"
          )}
        >
          {accepted ? "Draft added ✓" : "Use draft"}
        </span>
        <span className="rounded-full border border-violet-200 bg-white px-2 py-0.5 text-[10px] font-medium text-violet-700">
          Edit
        </span>
      </div>
    </div>
  );
}

function Conversation({ scene, at, animate }: { scene: IndustryScene; at: number; animate: boolean }) {
  const steps = [
    at >= STEPS.customer && {
      key: "customer",
      node: <Bubble from="customer">{scene.customer}</Bubble>,
    },
    at >= STEPS.drafting && at < STEPS.suggestion && { key: "drafting", node: <Drafting /> },
    at >= STEPS.suggestion && at < STEPS.sent && {
      key: "suggestion",
      node: <Suggestion text={scene.draft} accepted={at >= STEPS.accepted} />,
    },
    at >= STEPS.sent && {
      key: "sent",
      node: (
        <>
          <Bubble from="agent">{scene.draft}</Bubble>
          <span className="mt-1 self-end text-[10px] text-slate-400">Sent by {scene.agent} · just now</span>
        </>
      ),
    },
    at >= STEPS.system && { key: "system", node: <Bubble from="system">{scene.system}</Bubble> },
  ].filter((step) => step !== false);

  return (
    <AppWindow title={scene.window} className="flex h-[29rem] flex-col">
      <SceneHeader scene={scene} />
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-2.5 overflow-hidden p-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {steps.map(({ key, node }) => (
            <motion.div
              key={key}
              layout
              initial={animate ? { opacity: 0, y: 12, scale: 0.97 } : false}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col"
            >
              {node}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <Composer placeholder={`Reply as ${scene.agent}…`} />
    </AppWindow>
  );
}

export default function IndustryShowcase() {
  const reduceMotion = useReducedMotion();
  const [{ active, elapsed }, setPosition] = useState({ active: 0, elapsed: 0 });
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const scene = INDUSTRY_SCENES[active];
  const running = playing && visible && !reduceMotion;
  // Without motion, show each conversation complete instead of playing it.
  const shownAt = reduceMotion ? SCENE_LENGTH : elapsed;

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    // Hovering lets the current conversation finish but holds off the next industry.
    const id = setInterval(() => {
      setPosition((current) => {
        if (current.elapsed + TICK < SCENE_LENGTH) return { ...current, elapsed: current.elapsed + TICK };
        return hovered ? current : { active: (current.active + 1) % INDUSTRY_SCENES.length, elapsed: 0 };
      });
    }, TICK);
    return () => clearInterval(id);
  }, [running, hovered]);

  const select = (index: number) => setPosition({ active: index, elapsed: 0 });

  const onTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    const moves: Record<string, number> = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: INDUSTRY_SCENES.length - 1,
    };
    if (!(event.key in moves)) return;
    event.preventDefault();
    const next = (moves[event.key] + INDUSTRY_SCENES.length) % INDUSTRY_SCENES.length;
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div ref={rootRef} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {/* Horizontal industry tabs */}
      <div className="-mx-4 overflow-x-auto border-y border-slate-200 sm:mx-0 sm:rounded-2xl sm:border">
        <div role="tablist" aria-label="Industries" className="flex min-w-max lg:grid lg:min-w-0 lg:grid-cols-5">
          {INDUSTRY_SCENES.map((item, i) => {
            const isActive = i === active;
            const Icon = SCENE_ICONS[i];
            return (
              <button
                key={item.name}
                ref={(node) => {
                  tabRefs.current[i] = node;
                }}
                type="button"
                role="tab"
                id={`industry-tab-${i}`}
                aria-selected={isActive}
                aria-controls="industry-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(event) => onTabKeyDown(event, i)}
                className={cn(
                  "relative flex items-center gap-3 border-r border-slate-200 px-5 py-5 text-left transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand lg:px-6",
                  isActive ? "bg-white" : "bg-surface hover:bg-white"
                )}
              >
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all",
                    isActive ? "bg-brand-gradient text-white shadow-md shadow-violet-500/30" : "border border-slate-200 bg-white text-slate-400"
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tabular-nums text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                  <span className={cn("block whitespace-nowrap font-semibold xl:whitespace-normal", isActive ? "text-ink" : "text-slate-600")}>
                    {TAB_LABELS[i]}
                  </span>
                </span>
                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brand/15">
                    <span
                      className="block h-full bg-brand-gradient transition-[width] duration-100 ease-linear"
                      style={{ width: reduceMotion ? "100%" : `${(elapsed / SCENE_LENGTH) * 100}%` }}
                    />
                  </span>
                )}
              </button>
            );
          })}
          <Link
            href={`${ENGAGEONE_BASE}/industries`}
            className="group flex items-center gap-3 bg-surface px-5 py-5 font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand lg:px-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-ink transition-colors group-hover:border-brand/40 group-hover:text-brand">
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="whitespace-nowrap">All industries</span>
          </Link>
        </div>
      </div>

      <div id="industry-panel" role="tabpanel" aria-labelledby={`industry-tab-${active}`} className="mt-10 lg:mt-14">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
          >
            <div>
              <p className="eyebrow flex items-center gap-2 text-brand">
                <span className="h-2 w-2 rounded-sm bg-brand-gradient" aria-hidden="true" />
                {String(active + 1).padStart(2, "0")} / {scene.name}
              </p>
              <h3 className="heading-2 mt-4 text-ink">{scene.heading}</h3>
              <p className="text-lead mt-4 text-slate-600">{scene.line}</p>
              <ul className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
                {scene.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-4 py-4 text-ink">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <CtaLink href={DEMO_HREF} size="sm">
                  Request a demo
                </CtaLink>
                <CtaLink href={scene.href} variant="outline" size="sm">
                  Explore {scene.name}
                </CtaLink>
                {!reduceMotion && (
                  <button
                    type="button"
                    onClick={() => setPlaying((value) => !value)}
                    aria-label={playing ? "Pause the industry demo" : "Play the industry demo"}
                    className="ml-auto flex min-h-10 items-center gap-1.5 rounded-full border border-slate-200 px-4 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-brand"
                  >
                    {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    {playing ? "Pause" : "Play"}
                  </button>
                )}
              </div>
            </div>

            <div className="relative rounded-3xl bg-brand-soft p-4 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(#c7d2fe_1.2px,transparent_1.2px)] bg-size-[14px_14px] opacity-70"
              />
              <div className="relative">
                <Conversation scene={scene} at={shownAt} animate={!reduceMotion} />
                <p className="mt-3 text-center text-[11px] text-slate-500">Sample conversation</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
