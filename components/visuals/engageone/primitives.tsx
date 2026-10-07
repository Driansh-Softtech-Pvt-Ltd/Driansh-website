import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Building blocks for EngageOne product illustrations. They draw simplified
 * mock-ups of the product UI in the site's brand colours, so product pages
 * never need third-party screenshots. All of them are decorative.
 */

/** Browser-style window that frames a mock-up. */
export function AppWindow({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-xl select-none overflow-hidden rounded-2xl border border-slate-200 bg-white text-left text-slate-700 shadow-2xl shadow-violet-900/20",
        className
      )}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 truncate text-xs font-semibold text-ink">{title}</span>
      </div>
      {children}
    </div>
  );
}

/** Small pill floating over the corner of a mock-up, e.g. a result or status. */
export function FloatingTag({
  icon: Icon,
  children,
  className,
}: {
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-ink shadow-xl sm:flex",
        className
      )}
      aria-hidden="true"
    >
      {Icon && <Icon className="h-4 w-4 text-emerald-500" />}
      {children}
    </div>
  );
}

/** Wraps an AppWindow so a FloatingTag can sit over its edge. */
export function VisualStage({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("relative mx-auto w-full max-w-xl", className)}>{children}</div>;
}

type BubbleKind = "customer" | "agent" | "bot" | "note" | "system";

const BUBBLE_STYLES: Record<BubbleKind, string> = {
  customer: "max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-slate-100",
  agent: "max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-brand text-white",
  bot: "max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-violet-100 text-violet-900",
  note: "max-w-[85%] self-end rounded-2xl rounded-tr-sm border border-amber-200 bg-amber-50 text-amber-900",
  system: "self-center rounded-full bg-slate-100 text-[10px] font-medium text-slate-500",
};

/** One chat message. */
export function Bubble({ from = "customer", children }: { from?: BubbleKind; children: React.ReactNode }) {
  return <div className={cn("px-3 py-2 text-xs", BUBBLE_STYLES[from])}>{children}</div>;
}

/** Vertical stack of chat messages. */
export function ChatThread({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex flex-col gap-2.5 p-4", className)}>{children}</div>;
}

/** Tap-to-reply buttons a bot offers under a message. */
export function OptionChips({ options, className }: { options: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap justify-end gap-1.5", className)}>
      {options.map((option) => (
        <span key={option} className="rounded-full border border-brand/30 bg-white px-2.5 py-1 text-[10px] font-medium text-brand">
          {option}
        </span>
      ))}
    </div>
  );
}

/** Message box at the bottom of a chat. */
export function Composer({ placeholder = "Reply…", action = "Send" }: { placeholder?: string; action?: string }) {
  return (
    <div className="mx-4 mb-4 flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-[11px] text-slate-400">
      {placeholder}
      <span className="ml-auto rounded-md bg-brand-gradient px-2 py-0.5 text-[10px] font-semibold text-white">{action}</span>
    </div>
  );
}

/** Row of headline numbers. */
export function StatTiles({ items }: { items: { label: string; value: string; trend?: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-xl border border-slate-100 bg-surface px-3 py-2">
          <div className="truncate text-[10px] text-slate-500">{item.label}</div>
          <div className="text-sm font-semibold text-ink">{item.value}</div>
          {item.trend && <div className="text-[10px] font-medium text-emerald-600">{item.trend}</div>}
        </div>
      ))}
    </div>
  );
}

/** Simple bar chart; values are relative heights from 0 to 100. */
export function BarChart({ values, labels, highlight }: { values: number[]; labels?: string[]; highlight?: number }) {
  return (
    <div className="px-4 pb-4">
      <div className="flex h-28 items-end gap-1.5 rounded-xl border border-slate-100 bg-surface p-3">
        {values.map((value, i) => (
          <div
            key={i}
            className={cn("flex-1 rounded-t", i === highlight ? "bg-brand" : "bg-brand/30")}
            style={{ height: `${Math.max(6, Math.min(100, value))}%` }}
          />
        ))}
      </div>
      {labels && (
        <div className="mt-1 flex gap-1.5">
          {labels.map((label) => (
            <span key={label} className="flex-1 truncate text-center text-[9px] text-slate-400">
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export type Row = { title: string; meta?: string; badge?: string; icon?: LucideIcon; tint?: string; active?: boolean };

/** List of items with an optional icon, side text and badge. */
export function ListRows({ rows, className }: { rows: Row[]; className?: string }) {
  return (
    <ul className={cn("space-y-1.5 p-4", className)}>
      {rows.map(({ title, meta, badge, icon: Icon, tint = "bg-brand-soft text-brand", active }) => (
        <li
          key={title}
          className={cn(
            "flex items-center gap-2.5 rounded-xl border px-3 py-2 text-xs",
            active ? "border-brand/30 bg-brand-soft/60" : "border-slate-100 bg-white"
          )}
        >
          {Icon && (
            <span className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-lg", tint)}>
              <Icon className="h-3.5 w-3.5" />
            </span>
          )}
          <span className="min-w-0">
            <span className="block truncate font-medium text-ink">{title}</span>
            {meta && <span className="block truncate text-[10px] text-slate-500">{meta}</span>}
          </span>
          {badge && (
            <span className="ml-auto shrink-0 rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-semibold text-brand">{badge}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Settings-style form with labelled fields and a button. */
export function FormFields({
  fields,
  button,
}: {
  fields: { label: string; value?: string; kind?: "input" | "toggle" | "select" }[];
  button?: string;
}) {
  return (
    <div className="space-y-2.5 p-4">
      {fields.map(({ label, value = "", kind = "input" }) => (
        <div key={label} className="flex items-center gap-3 text-xs">
          <span className="w-28 shrink-0 text-slate-500">{label}</span>
          {kind === "toggle" ? (
            <span className="ml-auto flex h-4 w-7 items-center rounded-full bg-brand p-0.5">
              <span className="ml-auto h-3 w-3 rounded-full bg-white" />
            </span>
          ) : (
            <span className="flex flex-1 items-center justify-between truncate rounded-lg border border-slate-200 px-2.5 py-1.5 text-ink">
              {value}
              {kind === "select" && <span className="text-slate-400">▾</span>}
            </span>
          )}
        </div>
      ))}
      {button && (
        <div className="flex justify-end pt-1">
          <span className="rounded-lg bg-brand px-3 py-1.5 text-[11px] font-semibold text-white">{button}</span>
        </div>
      )}
    </div>
  );
}

/** Keyboard keys, e.g. ["Alt", "J"]. */
export function KeyCombo({ keys }: { keys: string[] }) {
  return (
    <span className="flex gap-1">
      {keys.map((key) => (
        <kbd key={key} className="rounded-md border border-slate-200 bg-surface px-1.5 py-0.5 font-mono text-[10px] text-ink shadow-sm">
          {key}
        </kbd>
      ))}
    </span>
  );
}

/** Left-to-right flow of steps, e.g. an automation's When → If → Then. */
export function FlowSteps({ steps }: { steps: { label: string; detail: string; icon: LucideIcon }[] }) {
  return (
    <div className="flex flex-col gap-2 p-4 sm:flex-row sm:items-stretch">
      {steps.map(({ label, detail, icon: Icon }, i) => (
        <div key={label} className="flex flex-1 items-center gap-2 sm:flex-col sm:items-stretch">
          <div className="flex-1 rounded-xl border border-slate-100 bg-surface p-3">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
              <Icon className="h-3.5 w-3.5" /> {label}
            </div>
            <div className="mt-1 text-xs text-ink">{detail}</div>
          </div>
          {i < steps.length - 1 && <span className="text-center text-slate-300 sm:hidden">↓</span>}
        </div>
      ))}
    </div>
  );
}
