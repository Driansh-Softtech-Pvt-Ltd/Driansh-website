"use client";

import { usePathname } from "next/navigation";

/** Hides public-site chrome (navbar, footer, chat widget) on /admin pages. */
export default function HideOnAdmin({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return pathname?.startsWith("/admin") ? null : <>{children}</>;
}
