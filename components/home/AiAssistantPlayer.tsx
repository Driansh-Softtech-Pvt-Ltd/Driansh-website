"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookOpen, Bot, Check, Moon, Pause, Play, Sparkles, Users2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppWindow, Bubble, Composer } from "@/components/visuals/engageone/primitives";

/*
 * Auto-playing demo of the EngageOne AI Assistant. Each step on the left
 * plays a short scripted scene on the right, like a product video, then
 * moves to the next step. Sample conversations only.
 */

const TICK = 100;
const TYPING_LEAD = 900;
const SCENE_TAIL = 2200;

type Event =
  | { at: number; kind: "customer" | "bot" | "agent" | "system"; text: string }
  | { at: number; kind: "chip"; text: string; icon: "source" | "time" | "team" }
  | { at: number; kind: "suggestion"; text: string }
  | { at: number; kind: "faq"; question: string; meta: string; approvedAt: number };

type Scene = { title: string; description: string; window: string; composer: string; events: Event[] };

const SCENES: Scene[] = [
  {
    title: "Learns from your own content",
    description: "Point it at your help articles, website pages and PDF files. It answers from what you have written.",
    window: "EngageOne · Website chat",
    composer: "Type a message…",
    events: [
      { at: 400, kind: "customer", text: "Do you deliver on Sundays?" },
      { at: 2000, kind: "bot", text: "Yes! Sunday deliveries run from 10 AM to 2 PM. Orders placed by Saturday 8 PM arrive on Sunday." },
      { at: 2900, kind: "chip", icon: "source", text: "Source: Delivery FAQ" },
    ],
  },
  {
    title: "Replies at any hour",
    description: "Common questions get an answer straight away, even when your team is offline.",
    window: "EngageOne · WhatsApp",
    composer: "Type a message…",
    events: [
      { at: 300, kind: "system", text: "2:14 AM · Team offline" },
      { at: 1100, kind: "customer", text: "What time do you open tomorrow?" },
      { at: 2600, kind: "bot", text: "We open at 9 AM tomorrow. Want me to book a callback for you at 9:30?" },
      { at: 3800, kind: "customer", text: "Yes please" },
      { at: 5100, kind: "bot", text: "Done ✓ Our team will call you at 9:30 AM." },
      { at: 5900, kind: "chip", icon: "time", text: "Answered while the team was offline" },
    ],
  },
  {
    title: "Knows when to hand over",
    description: "When a customer needs a person, the chat moves to the right team with everything said so far.",
    window: "EngageOne · Website chat",
    composer: "Reply as Rahul…",
    events: [
      { at: 400, kind: "customer", text: "My order arrived damaged 😞" },
      { at: 1900, kind: "bot", text: "I'm sorry about that. I'm passing you to our support team with your order details." },
      { at: 2900, kind: "system", text: "Handed to Support · full history attached" },
      { at: 4300, kind: "agent", text: "Hi Priya, Rahul here. I've arranged a free replacement — it ships today." },
      { at: 5100, kind: "chip", icon: "team", text: "Routed to the right team" },
    ],
  },
  {
    title: "Helps agents write better replies",
    description: "Agents can ask for a suggested reply, a summary of a long thread or a friendlier tone.",
    window: "EngageOne · Agent view",
    composer: "Reply…",
    events: [
      { at: 400, kind: "customer", text: "Can I change the size of the shoes I ordered?" },
      { at: 1900, kind: "suggestion", text: "Of course! Reply with the new size and we'll swap it before dispatch, free of charge." },
      { at: 3900, kind: "agent", text: "Of course! Reply with the new size and we'll swap it before dispatch, free of charge 😊" },
    ],
  },
  {
    title: "You stay in control",
    description: "Review FAQs suggested from real conversations and approve them before the assistant uses them.",
    window: "EngageOne · AI Assistant",
    composer: "Search FAQs…",
    events: [
      { at: 400, kind: "faq", question: "Can I pause my subscription?", meta: "Seen in 4 conversations", approvedAt: 2600 },
      { at: 1200, kind: "faq", question: "Do you send invoices by email?", meta: "Seen in 3 conversations", approvedAt: 3600 },
    ],
  },
];

function sceneLength(scene: Scene) {
  return Math.max(...scene.events.map((e) => (e.kind === "faq" ? e.approvedAt : e.at))) + SCENE_TAIL;
}

const CHIP_ICONS = { source: BookOpen, time: Moon, team: Users2 };

function TypingDots({ from }: { from: "bot" | "agent" }) {
  return (
    <div
      className={cn(
        "flex gap-1 self-end rounded-2xl rounded-tr-sm px-3 py-2.5",
        from === "bot" ? "bg-violet-100" : "bg-brand/15"
      )}
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className={cn("h-1.5 w-1.5 rounded-full", from === "bot" ? "bg-violet-500" : "bg-brand")}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

function EventView({ event, elapsed }: { event: Event; elapsed: number }) {
  switch (event.kind) {
    case "chip": {
      const Icon = CHIP_ICONS[event.icon];
      return (
        <div className="flex items-center gap-1.5 self-end rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700">
          <Icon className="h-3 w-3" /> {event.text}
        </div>
      );
    }
    case "suggestion":
      return (
        <div className="self-stretch rounded-xl border border-violet-200 bg-violet-50 p-3 text-xs text-violet-900">
          <div className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-violet-600">
            <Sparkles className="h-3 w-3" /> AI suggested reply
          </div>
          {event.text}
          <div className="mt-2 flex gap-1.5">
            {["Use reply", "Friendlier", "Shorter"].map((label, i) => (
              <span
                key={label}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-medium",
                  i === 0 ? "bg-violet-600 text-white" : "border border-violet-200 bg-white text-violet-700"
                )}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      );
    case "faq": {
      const approved = elapsed >= event.approvedAt;
      return (
        <div className="self-stretch rounded-xl border border-slate-200 bg-white p-3 text-xs">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            <Sparkles className="h-3 w-3 text-violet-500" /> Suggested FAQ
          </div>
          <div className="mt-1 font-semibold text-ink">{event.question}</div>
          <div className="text-[10px] text-slate-500">{event.meta}</div>
          <div className="mt-2 flex gap-1.5">
            {approved ? (
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700"
              >
                <Check className="h-3 w-3" /> Approved · now used in answers
              </motion.span>
            ) : (
              <>
                <span className="flex items-center gap-1 rounded-full bg-brand px-2 py-0.5 text-[10px] font-medium text-white">
                  <Check className="h-3 w-3" /> Approve
                </span>
                <span className="flex items-center gap-1 rounded-full border border-slate-200 px-2 py-0.5 text-[10px] text-slate-600">
                  <X className="h-3 w-3" /> Dismiss
                </span>
              </>
            )}
          </div>
        </div>
      );
    }
    default:
      return <Bubble from={event.kind}>{event.text}</Bubble>;
  }
}

export default function AiAssistantPlayer() {
  const reduceMotion = useReducedMotion();
  const [{ active, elapsed }, setPosition] = useState({ active: 0, elapsed: 0 });
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const scene = SCENES[active];
  const length = sceneLength(scene);
  const running = playing && !hovered && visible && !reduceMotion;
  // Without motion, show each scene complete instead of playing it.
  const shownAt = reduceMotion ? length : elapsed;

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
        current.elapsed + TICK < sceneLength(SCENES[current.active])
          ? { ...current, elapsed: current.elapsed + TICK }
          : { active: (current.active + 1) % SCENES.length, elapsed: 0 }
      );
    }, TICK);
    return () => clearInterval(id);
  }, [running]);

  const select = (index: number) => setPosition({ active: index, elapsed: 0 });

  const shown = scene.events.filter((event) => event.at <= shownAt);
  const next = scene.events.find((event) => event.at > shownAt);
  const typing =
    next && (next.kind === "bot" || next.kind === "agent") && next.at - shownAt <= TYPING_LEAD ? next.kind : null;

  return (
    <div
      ref={rootRef}
      className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div role="tablist" aria-label="AI Assistant capabilities" aria-orientation="vertical" className="grid gap-3">
        {SCENES.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.title}
              type="button"
              role="tab"
              id={`ai-step-${i}`}
              aria-selected={isActive}
              aria-controls="ai-step-panel"
              onClick={() => select(i)}
              className={cn(
                "relative overflow-hidden rounded-2xl border p-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-violet-300",
                isActive ? "border-white/20 bg-white/10" : "border-white/5 bg-white/[0.03] hover:bg-white/[0.06]"
              )}
            >
              <div className="flex gap-4">
                <span
                  className={cn("shrink-0 text-2xl font-bold tabular-nums", isActive ? "text-gradient" : "text-white/30")}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={cn("font-semibold", isActive ? "text-white" : "text-slate-300")}>{item.title}</h3>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden text-sm leading-relaxed text-slate-300"
                      >
                        <span className="block pt-1">{item.description}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {isActive && !reduceMotion && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white/10">
                  <span
                    className="block h-full bg-brand-gradient transition-[width] duration-100 ease-linear"
                    style={{ width: `${(elapsed / length) * 100}%` }}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="relative order-first lg:sticky lg:top-28 lg:order-none">
        <div id="ai-step-panel" role="tabpanel" aria-labelledby={`ai-step-${active}`}>
          <AppWindow title={scene.window}>
            <div className="flex h-80 flex-col gap-2.5 overflow-hidden p-4">
              <AnimatePresence mode="popLayout">
                {shown.map((event) => (
                  <motion.div
                    key={`${active}-${event.at}`}
                    layout
                    initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col"
                  >
                    <EventView event={event} elapsed={shownAt} />
                  </motion.div>
                ))}
                {typing && (
                  <motion.div
                    key={`typing-${active}-${next?.at}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col"
                  >
                    <TypingDots from={typing} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Composer placeholder={scene.composer} />
          </AppWindow>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Bot className="h-3.5 w-3.5 text-violet-300" /> EngageOne AI Assistant · sample conversation
          </span>
          {!reduceMotion && (
            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? "Pause the demo" : "Play the demo"}
              className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-violet-300"
            >
              {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              {playing ? "Pause" : "Play"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
