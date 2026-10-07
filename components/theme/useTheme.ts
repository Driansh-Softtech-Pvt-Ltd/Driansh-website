"use client";

import { useSyncExternalStore } from "react";
import { THEME_CHANGE_EVENT, THEME_STORAGE_KEY } from "./theme-script";

export type ThemePreference = "light" | "dark" | "system";

declare global {
  interface Window {
    __setTheme: (preference: ThemePreference) => void;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function readPreference(): ThemePreference {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : "system";
  } catch {
    return "system";
  }
}

/** The saved appearance preference, and a setter that applies and stores it. */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readPreference, () => "system" as const);
  return { theme, setTheme: (preference: ThemePreference) => window.__setTheme(preference) };
}
