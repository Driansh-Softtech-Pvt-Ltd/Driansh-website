"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  MapPin,
  Mic,
  Pause,
  Phone,
  PhoneIncoming,
  PhoneOff,
  PhoneOutgoing,
  Play,
  Radio,
} from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Auto-playing mock of an EngageOne voice call. It steps through the life of
 * a call (ringing, talking, reading the transcript, calling back) like a short
 * product video. Names, places and numbers are made-up samples.
 */

const TICK = 100;

const STAGES = [
  { id: "incoming", label: "Incoming", length: 4000 },
  { id: "ongoing", label: "Ongoing", length: 5000 },
  { id: "transcript", label: "Transcript", length: 6000 },
  { id: "outbound", label: "Outbound", length: 4500 },
] as const;

type StageId = (typeof STAGES)[number]["id"];

const CALLER = { name: "Ananya M.", city: "Ahmedabad", number: "+91 98XXX X1234", initials: "AM" };
const CALLBACK = { name: "Rohit S.", city: "Surat", number: "+91 97XXX X5678", initials: "RS" };

const TRANSCRIPT = [
  { at: 300, who: "Agent", text: "Hi, thanks for calling. How can I help?" },
  { at: 1500, who: "Customer", text: "My order shows delivered, but it hasn't arrived." },
  { at: 2900, who: "Agent", text: "Sorry about that. I'm checking with the rider now." },
  { at: 4300, who: "Customer", text: "Thank you, I'll stay on the line." },
];

const CALL_START_SECONDS = 47;
const RECORDING_SECONDS = 252;
const WAVE = [30, 55, 40, 75, 50, 90, 60, 35, 70, 45, 85, 55, 30, 65, 95, 50, 40, 70, 35, 60, 80, 45, 55, 30, 65, 40, 75, 50];

function clock(seconds: number) {
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

function Avatar({ initials, ringing }: { initials: string; ringing?: boolean }) {
  return (
    <span className="relative flex h-16 w-16 shrink-0 items-center justify-center">
      {ringing && (
        <motion.span
          className="absolute inset-0 rounded-full bg-emerald-400/30"
          animate={{ scale: [1, 1.45], opacity: [0.7, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient text-lg font-semibold text-white">
        {initials}
      </span>
    </span>
  );
}

function CallerBlock({ person, status }: { person: typeof CALLER; status: React.ReactNode }) {
  return (
    <div className="min-w-0 text-center">
      <div className="text-[11px] font-medium uppercase tracking-wide text-slate-400">{status}</div>
      <div className="mt-1 truncate text-lg font-semibold text-white">{person.name}</div>
      <div className="mt-0.5 flex items-center justify-center gap-1 text-xs text-slate-400">
        <MapPin className="h-3 w-3" /> {person.city} · <span className="tabular-nums">{person.number}</span>
      </div>
    </div>
  );
}

function LiveBars({ animate }: { animate: boolean }) {
  return (
    <div className="flex h-8 items-center justify-center gap-1">
      {WAVE.slice(0, 14).map((height, i) => (
        <motion.span
          key={i}
          className="w-1 rounded-full bg-emerald-400"
          style={{ height: `${height}%` }}
          animate={animate ? { scaleY: [0.4, 1, 0.5] } : undefined}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "mirror", delay: (i % 5) * 0.12 }}
        />
      ))}
    </div>
  );
}

function StageView({ stage, elapsed, animate }: { stage: StageId; elapsed: number; animate: boolean }) {
  switch (stage) {
    case "incoming":
      return (
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <Avatar initials={CALLER.initials} ringing={animate} />
          <CallerBlock person={CALLER} status="Incoming call · Twilio Voice" />
          <div className="mt-2 flex gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-rose-500 px-4 py-2 text-xs font-semibold text-white">
              <PhoneOff className="h-3.5 w-3.5" /> Decline
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white">
              <Phone className="h-3.5 w-3.5" /> Accept
            </span>
          </div>
        </div>
      );
    case "ongoing":
      return (
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <Avatar initials={CALLER.initials} />
          <CallerBlock
            person={CALLER}
            status={
              <span className="text-emerald-400">
                On call · <span className="tabular-nums">{clock(CALL_START_SECONDS + Math.floor(elapsed / 1000))}</span>
              </span>
            }
          />
          <LiveBars animate={animate} />
          <div className="flex gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
              <Mic className="h-4 w-4" />
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-rose-500 px-4 py-2 text-xs font-semibold text-white">
              <PhoneOff className="h-3.5 w-3.5" /> End call
            </span>
          </div>
        </div>
      );
    case "transcript":
      return (
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <FileText className="h-3.5 w-3.5 text-violet-300" />
            <span className="font-semibold text-white">Call transcript</span>
            <span className="ml-auto tabular-nums">{clock(RECORDING_SECONDS)}</span>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <AnimatePresence initial={false}>
              {TRANSCRIPT.filter((line) => line.at <= elapsed).map((line) => (
                <motion.div
                  key={line.at}
                  initial={animate ? { opacity: 0, y: 8 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "max-w-[88%] rounded-xl px-3 py-2 text-xs",
                    line.who === "Agent" ? "self-end bg-brand-solid text-white" : "self-start bg-white/10 text-slate-200"
                  )}
                >
                  <span className="block text-[10px] font-semibold opacity-70">{line.who}</span>
                  {line.text}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      );
    case "outbound":
      return (
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <Avatar initials={CALLBACK.initials} ringing={animate} />
          <CallerBlock
            person={CALLBACK}
            status={
              <span className="flex items-center justify-center gap-1">
                <PhoneOutgoing className="h-3 w-3" /> Calling…
              </span>
            }
          />
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-slate-300">From your Twilio number</span>
          <span className="flex items-center gap-1.5 rounded-full bg-rose-500 px-4 py-2 text-xs font-semibold text-white">
            <PhoneOff className="h-3.5 w-3.5" /> Cancel
          </span>
        </div>
      );
  }
}

const STAGE_ICONS = { incoming: PhoneIncoming, ongoing: Radio, transcript: FileText, outbound: PhoneOutgoing };

export default function VoiceCallWidget() {
  const reduceMotion = useReducedMotion();
  const [{ active, elapsed }, setPosition] = useState({ active: 0, elapsed: 0 });
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const stage = STAGES[active];
  const running = playing && !hovered && visible && !reduceMotion;
  // Without motion, show each stage complete instead of playing it.
  const shownAt = reduceMotion ? stage.length : elapsed;

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
        current.elapsed + TICK < STAGES[current.active].length
          ? { ...current, elapsed: current.elapsed + TICK }
          : { active: (current.active + 1) % STAGES.length, elapsed: 0 }
      );
    }, TICK);
    return () => clearInterval(id);
  }, [running]);

  const select = (index: number) => setPosition({ active: index, elapsed: 0 });

  const onTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (index + step + STAGES.length) % STAGES.length;
    select(next);
    tabRefs.current[next]?.focus();
  };

  const recordingProgress = stage.id === "transcript" ? shownAt / stage.length : 0;

  return (
    <div
      ref={rootRef}
      className="mx-auto w-full max-w-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div role="tablist" aria-label="Call stages" className="grid grid-cols-4 gap-1 rounded-full bg-slate-100 p-1">
        {STAGES.map((item, i) => {
          const isActive = i === active;
          const Icon = STAGE_ICONS[item.id];
          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[i] = node;
              }}
              type="button"
              role="tab"
              id={`voice-tab-${item.id}`}
              aria-selected={isActive}
              aria-controls="voice-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(event) => onTabKey(event, i)}
              className={cn(
                "relative flex min-h-10 items-center justify-center gap-1 overflow-hidden rounded-full px-1 py-2 text-[11px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-brand sm:text-xs",
                isActive ? "bg-card text-ink shadow-sm" : "text-slate-500 hover:text-ink"
              )}
            >
              <Icon className="hidden h-3.5 w-3.5 sm:block" aria-hidden="true" />
              {item.label}
              {isActive && !reduceMotion && (
                <span className="absolute inset-x-3 bottom-0.5 h-0.5 rounded-full bg-slate-200" aria-hidden="true">
                  <span
                    className="block h-full rounded-full bg-brand-gradient transition-[width] duration-100 ease-linear"
                    style={{ width: `${(elapsed / item.length) * 100}%` }}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div
        id="voice-panel"
        role="tabpanel"
        aria-labelledby={`voice-tab-${stage.id}`}
        className="light-tokens mt-4 overflow-hidden rounded-3xl bg-navy shadow-2xl shadow-violet-900/25"
      >
        <div aria-hidden="true" className="select-none">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3 text-xs text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-semibold text-white">EngageOne · Voice</span>
            <span className="ml-auto">Support line</span>
          </div>
          <div className="h-72 p-5">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={stage.id}
                className="h-full"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <StageView stage={stage.id} elapsed={shownAt} animate={!reduceMotion} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-2xl border border-slate-200 bg-card p-4 shadow-sm" aria-hidden="true">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
            <Play className="h-3.5 w-3.5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-semibold text-ink">Recording</span>
              <span className="tabular-nums text-slate-500">{clock(RECORDING_SECONDS)}</span>
            </div>
            <div className="mt-1.5 flex h-6 items-center justify-between">
              {WAVE.map((height, i) => (
                <span
                  key={i}
                  className={cn("w-1 rounded-full", i / WAVE.length < recordingProgress ? "bg-brand-solid" : "bg-slate-200")}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px]">
          <span className="text-slate-500">Saved to the customer&apos;s conversation</span>
          <span className="flex items-center gap-0.5 font-semibold text-brand">
            Go to conversation <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-500">
        <span>Sample call · names and numbers are made up</span>
        {!reduceMotion && (
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? "Pause the call demo" : "Play the call demo"}
            className="flex min-h-10 shrink-0 items-center gap-1.5 rounded-full border border-slate-200 px-4 py-1.5 font-medium text-ink transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-brand"
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {playing ? "Pause" : "Play"}
          </button>
        )}
      </div>
    </div>
  );
}
