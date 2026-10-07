"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookOpen, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import HelpCenterPreview, { type HelpCenterFocus } from "./HelpCenterPreview";

/*
 * Auto-playing tour of the EngageOne help center. Each numbered item on the
 * left drives the portal mock-up on the right, then moves to the next item.
 */

const TICK = 100;
const ITEM_LENGTH = 6500;

const ITEMS: { focus: HelpCenterFocus; title: string; description: string }[] = [
  {
    focus: "locales",
    title: "Every category, in every language",
    description:
      "Add the languages your customers read. Categories and articles get their own version per language, and readers switch with one tap.",
  },
  {
    focus: "domain",
    title: "On your own domain",
    description: "Serve the help center from your own address, such as help.example.com, so it feels like part of your site.",
  },
  {
    focus: "search",
    title: "Search that finds answers",
    description: "Readers type a few words and get the closest matching articles first, ranked across titles and article text.",
  },
  {
    focus: "portals",
    title: "A help center for every audience",
    description:
      "Run separate portals for guests, partners or staff, each with its own domain, categories and articles.",
  },
];

export default function HelpCenterPlayer() {
  const reduceMotion = useReducedMotion();
  const [{ active, elapsed }, setPosition] = useState({ active: 0, elapsed: 0 });
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const running = playing && !hovered && visible && !reduceMotion;
  // Without motion, show each item's end state instead of playing it.
  const progress = reduceMotion ? 1 : elapsed / ITEM_LENGTH;

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setPosition((current) =>
        current.elapsed + TICK < ITEM_LENGTH
          ? { ...current, elapsed: current.elapsed + TICK }
          : { active: (current.active + 1) % ITEMS.length, elapsed: 0 }
      );
    }, TICK);
    return () => clearInterval(id);
  }, [running]);

  const select = (index: number) => setPosition({ active: index, elapsed: 0 });

  return (
    <div
      ref={rootRef}
      className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <div role="tablist" aria-label="Help center features" aria-orientation="vertical" className="grid gap-3">
          {ITEMS.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.focus}
                type="button"
                role="tab"
                id={`help-step-${i}`}
                aria-selected={isActive}
                aria-controls="help-step-panel"
                onClick={() => select(i)}
                className={cn(
                  "relative overflow-hidden rounded-2xl border p-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-brand",
                  isActive ? "border-slate-200 bg-card shadow-lg shadow-violet-900/5" : "border-transparent hover:bg-card/70"
                )}
              >
                <div className="flex gap-4">
                  <span
                    className={cn("shrink-0 text-2xl font-bold tabular-nums", isActive ? "text-gradient" : "text-slate-300")}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className={cn("heading-4", isActive ? "text-ink" : "text-slate-600")}>{item.title}</h3>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden text-sm leading-relaxed text-slate-600"
                        >
                          <span className="block pt-1">{item.description}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                {isActive && !reduceMotion && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-slate-100">
                    <span
                      className="block h-full bg-brand-gradient transition-[width] duration-100 ease-linear"
                      style={{ width: `${progress * 100}%` }}
                    />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-brand" /> Sample help center · example domains
          </span>
          {!reduceMotion && (
            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? "Pause the help center tour" : "Play the help center tour"}
              className="flex min-h-10 shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-card px-4 py-1.5 font-medium text-ink transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-brand"
            >
              {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              {playing ? "Pause" : "Play"}
            </button>
          )}
        </div>
      </div>

      <div
        id="help-step-panel"
        role="tabpanel"
        aria-labelledby={`help-step-${active}`}
        className="order-first lg:sticky lg:top-28 lg:order-none"
      >
        <HelpCenterPreview focus={ITEMS[active].focus} progress={progress} />
      </div>
    </div>
  );
}
