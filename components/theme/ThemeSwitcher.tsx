"use client";

import { useEffect, useRef, useState } from "react";
import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme, type ThemePreference } from "./useTheme";

const OPTIONS: { value: ThemePreference; label: string; icon: LucideIcon }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

const MENU_ID = "appearance-menu";

/** Navbar icon button that opens the "Appearance" menu (Light / Dark / System). */
export function ThemeMenu() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = OPTIONS.find((option) => option.value === theme) ?? OPTIONS[2];
  const CurrentIcon = current.icon;

  useEffect(() => {
    if (!open) return;
    itemRefs.current[OPTIONS.indexOf(current)]?.focus();
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
    // Focus the checked item only when the menu opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    const index = itemRefs.current.indexOf(document.activeElement as HTMLButtonElement);
    const focusAt = (i: number) => itemRefs.current[(i + OPTIONS.length) % OPTIONS.length]?.focus();
    if (e.key === "ArrowDown") focusAt(index + 1);
    else if (e.key === "ArrowUp") focusAt(index - 1);
    else if (e.key === "Home") focusAt(0);
    else if (e.key === "End") focusAt(OPTIONS.length - 1);
    else if (e.key === "Escape") close();
    else if (e.key === "Tab") setOpen(false);
    else return;
    if (e.key !== "Tab") e.preventDefault();
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-label="Change appearance"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? MENU_ID : undefined}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" && !open) {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="flex h-11 w-9 items-center justify-center rounded-full text-slate-700 xl:w-11 transition-colors hover:bg-slate-100 hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
      >
        <CurrentIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={MENU_ID}
            role="menu"
            aria-label="Appearance"
            onKeyDown={onMenuKeyDown}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-2 w-48 rounded-2xl border border-slate-200 bg-card p-1.5 shadow-xl dark:shadow-black/40"
          >
            <p aria-hidden="true" className="px-3 pb-1.5 pt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Appearance
            </p>
            {OPTIONS.map(({ value, label, icon: Icon }, i) => (
              <button
                key={value}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                type="button"
                role="menuitemradio"
                aria-checked={theme === value}
                tabIndex={-1}
                onClick={() => {
                  setTheme(value);
                  close();
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand",
                  theme === value ? "bg-brand-soft text-brand" : "text-slate-700 hover:bg-slate-100"
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * The three options as a radio group: a labelled segmented control in the mobile
 * menu, or compact icon-only buttons (for the navy footer) when `compact`.
 */
export function ThemeSegmented({ compact = false, className }: { compact?: boolean; className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Appearance"
      className={cn(
        "flex gap-1 rounded-full p-1",
        compact ? "border border-white/15 bg-white/5" : "border border-slate-200 bg-card",
        className
      )}
    >
      {OPTIONS.map(({ value, label, icon: Icon }) => {
        const checked = theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={checked}
            aria-label={compact ? label : undefined}
            title={compact ? label : undefined}
            onClick={() => setTheme(value)}
            className={cn(
              "flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-brand",
              compact ? "h-9 w-9" : "min-h-10 flex-1 px-3",
              compact
                ? checked
                  ? "bg-white/15 text-white"
                  : "text-slate-400 hover:text-white"
                : checked
                  ? "bg-brand-soft text-brand"
                  : "text-slate-600 hover:text-brand"
            )}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {!compact && label}
          </button>
        );
      })}
    </div>
  );
}
