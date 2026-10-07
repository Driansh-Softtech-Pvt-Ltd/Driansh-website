import * as Lucide from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Renders a category icon from its lucide-react name in index.json (server component). */
export default function DocIcon({ name, className }: { name: string; className?: string }) {
  const Icon = (Lucide as unknown as Record<string, LucideIcon | undefined>)[name];
  if (!Icon) throw new Error(`Unknown lucide-react icon "${name}" in a content/docs index.json`);
  return <Icon className={className} aria-hidden="true" />;
}
