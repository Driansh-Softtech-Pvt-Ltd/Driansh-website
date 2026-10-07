"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BookOpen, MessagesSquare, Sparkles, Users, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AssistantScreen, ContactsScreen, ConversationsScreen, HelpCenterScreen } from "./HeroAppScreens";

const AUTO_ADVANCE_MS = 7000;

const TABS: { id: string; label: string; icon: LucideIcon; summary: string; screen: React.ComponentType }[] = [
  {
    id: "conversations",
    label: "Conversations",
    icon: MessagesSquare,
    summary:
      "The shared inbox: conversations from website chat, WhatsApp, Instagram and email in one list, an open conversation with a private note and an AI-suggested reply, and the customer's details alongside.",
    screen: ConversationsScreen,
  },
  {
    id: "assistant",
    label: "AI Assistant",
    icon: Sparkles,
    summary:
      "The EngageOne AI Assistant playground: the assistant answers a customer question from your documents and FAQs, cites its source, and hands off to a person when a scenario requires it.",
    screen: AssistantScreen,
  },
  {
    id: "contacts",
    label: "Contacts",
    icon: Users,
    summary:
      "The contacts list: searchable customer records with segments, company, city, last activity and labels, with one contact's details open in a side panel.",
    screen: ContactsScreen,
  },
  {
    id: "help-center",
    label: "Help center",
    icon: BookOpen,
    summary:
      "The help center admin: customer and partner portals, published and draft articles in English, Hindi and Gujarati, and an article open in the editor.",
    screen: HelpCenterScreen,
  },
];

/** Product preview under the hero: tabs that switch between realistic EngageOne screens and advance on their own. */
export default function HeroAppPreview() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const elapsedRef = useRef(0);
  const baseId = useId();
  const inView = useInView(rootRef, { amount: 0.25 });
  const reduceMotion = useReducedMotion() ?? false;
  const autoplay = !reduceMotion;
  const paused = hovered || focused || !inView;

  const select = (index: number, focus = false) => {
    const next = (index + TABS.length) % TABS.length;
    elapsedRef.current = 0;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  useEffect(() => {
    if (!autoplay || paused) return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      elapsedRef.current += now - last;
      last = now;
      const progress = Math.min(elapsedRef.current / AUTO_ADVANCE_MS, 1);
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      if (progress >= 1) {
        elapsedRef.current = 0;
        setActive((current) => (current + 1) % TABS.length);
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, autoplay, paused]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: TABS.length - 1,
    };
    if (event.key in keys) {
      event.preventDefault();
      select(keys[event.key], true);
    }
  };

  return (
    <div
      ref={rootRef}
      className="mt-14 lg:mt-16"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="overflow-hidden rounded-t-3xl border border-b-0 border-slate-200 bg-white/90 p-2 shadow-[0_-10px_60px_-20px_rgba(30,78,196,0.45)] backdrop-blur sm:p-3">
        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          <div
            role="tablist"
            aria-label="EngageOne product preview"
            className="flex min-w-max overflow-hidden rounded-xl border border-slate-200 md:grid md:min-w-0 md:grid-cols-4"
          >
            {TABS.map((tab, i) => {
              const selected = active === i;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  id={`${baseId}-tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={cn(
                    "group relative flex shrink-0 items-center gap-3 border-r border-slate-200 px-5 py-4 text-left text-base font-semibold whitespace-nowrap transition-colors last:border-r-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset sm:text-lg lg:px-6 lg:py-5",
                    selected ? "bg-white text-ink" : "bg-surface text-slate-500 hover:bg-white hover:text-ink"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-xl transition-colors lg:h-11 lg:w-11",
                      selected
                        ? "bg-brand-gradient text-white shadow-md shadow-brand/30"
                        : "border border-slate-200 bg-white text-slate-400 group-hover:text-brand"
                    )}
                  >
                    <Icon className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                  </span>
                  {tab.label}
                  {selected && (
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden bg-brand/20">
                      <span
                        ref={progressRef}
                        className="block h-full origin-left bg-brand"
                        style={{ transform: `scaleX(${autoplay ? 0 : 1})` }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-2 overflow-hidden rounded-t-xl border border-b-0 border-slate-200 bg-white sm:mt-3">
        {TABS.map((tab, i) => {
          const Screen = tab.screen;
          return (
            <div
              key={tab.id}
              id={`${baseId}-panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${tab.id}`}
              tabIndex={0}
              hidden={active !== i}
              className="focus-visible:outline-none"
            >
              <p className="sr-only">{tab.summary}</p>
              {active === i && (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-[28rem] overflow-x-auto overflow-y-hidden lg:h-[38rem] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
                  aria-hidden="true"
                >
                  <div className="h-full min-w-[54rem] select-none md:min-w-[66rem]">
                    <Screen />
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white via-white/70 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
