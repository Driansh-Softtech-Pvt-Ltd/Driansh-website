"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ENGAGEONE_BASE } from "./links";
import {
  OmnichannelApiVisual,
  OmnichannelEmailVisual,
  OmnichannelMetaVisual,
  OmnichannelWidgetVisual,
} from "./OmnichannelVisuals";

/*
 * Numbered accordion of channel groups. The open item advances every few
 * seconds (paused on hover/focus, off for reduced motion) and the mock-up
 * beside it cross-fades to match.
 */

const TICK = 100;
const ITEM_DURATION = 6000;

const ITEMS = [
  {
    title: "Meta channels in full",
    description:
      "WhatsApp, Messenger and Instagram each become an inbox. Reply with media, send approved WhatsApp templates and keep every thread with the contact.",
    link: { label: "WhatsApp integration", href: `${ENGAGEONE_BASE}/integrations/whatsapp` },
    Visual: OmnichannelMetaVisual,
  },
  {
    title: "Email threaded like a chat",
    description:
      "Connect Gmail or Google Workspace, Microsoft 365 or Outlook, or any IMAP/SMTP inbox. Replies stay in one thread your team can pick up.",
    link: { label: "Email integration", href: `${ENGAGEONE_BASE}/integrations/email` },
    Visual: OmnichannelEmailVisual,
  },
  {
    title: "A chat widget that matches your brand",
    description:
      "Set your colour, greeting and a pre-chat form so the widget looks like part of your site and every chat starts with a name and email.",
    link: { label: "Website live chat", href: `${ENGAGEONE_BASE}/website-live-chat` },
    Visual: OmnichannelWidgetVisual,
  },
  {
    title: "An open API for everything else",
    description:
      "Use the API channel to bring in any other source, and webhooks to send conversation events back to your own systems.",
    link: { label: "API channel", href: `${ENGAGEONE_BASE}/integrations/api-channel` },
    Visual: OmnichannelApiVisual,
  },
];

export default function OmnichannelShowcase() {
  const reduceMotion = useReducedMotion();
  const [{ active, elapsed }, setPosition] = useState({ active: 0, elapsed: 0 });
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const running = !paused && visible && !reduceMotion;

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
        current.elapsed + TICK < ITEM_DURATION
          ? { ...current, elapsed: current.elapsed + TICK }
          : { active: (current.active + 1) % ITEMS.length, elapsed: 0 }
      );
    }, TICK);
    return () => clearInterval(id);
  }, [running]);

  const select = (index: number) => setPosition({ active: index, elapsed: 0 });

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const targets: Record<string, number> = {
      ArrowDown: (index + 1) % ITEMS.length,
      ArrowRight: (index + 1) % ITEMS.length,
      ArrowUp: (index - 1 + ITEMS.length) % ITEMS.length,
      ArrowLeft: (index - 1 + ITEMS.length) % ITEMS.length,
      Home: 0,
      End: ITEMS.length - 1,
    };
    const target = targets[event.key];
    if (target === undefined) return;
    event.preventDefault();
    select(target);
    tabRefs.current[target]?.focus();
  };

  const { Visual } = ITEMS[active];

  return (
    <div
      ref={rootRef}
      className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div role="tablist" aria-label="Omnichannel features" aria-orientation="vertical" className="grid gap-3">
        {ITEMS.map((item, i) => {
          const isActive = i === active;
          return (
            <div
              key={item.title}
              className={cn(
                "relative overflow-hidden rounded-2xl border transition-colors",
                isActive ? "border-brand/20 bg-white shadow-lg shadow-violet-900/5" : "border-slate-200/70 bg-white/60 hover:bg-white"
              )}
            >
              <button
                ref={(node) => {
                  tabRefs.current[i] = node;
                }}
                type="button"
                role="tab"
                id={`omni-tab-${i}`}
                aria-selected={isActive}
                aria-controls={`omni-panel-${i}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(event) => onKeyDown(event, i)}
                className="flex w-full items-center gap-4 p-5 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
              >
                <span
                  className={cn("shrink-0 text-2xl font-bold tabular-nums", isActive ? "text-gradient" : "text-slate-300")}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={cn("font-semibold", isActive ? "text-ink" : "text-slate-600")}>{item.title}</h3>
              </button>
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    id={`omni-panel-${i}`}
                    role="tabpanel"
                    aria-labelledby={`omni-tab-${i}`}
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 sm:ps-[4.25rem]">
                      <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                      <Link
                        href={item.link.href}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                      >
                        {item.link.label} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {isActive && !reduceMotion && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-slate-100">
                  <span
                    className="block h-full bg-brand-gradient transition-[width] duration-100 ease-linear"
                    style={{ width: `${(elapsed / ITEM_DURATION) * 100}%` }}
                  />
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="order-first grid lg:sticky lg:top-28 lg:order-none">
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="col-start-1 row-start-1"
          >
            <Visual />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
