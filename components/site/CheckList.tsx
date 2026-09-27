import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckListProps {
  items: React.ReactNode[];
  columns?: 1 | 2;
  theme?: "light" | "dark";
  className?: string;
}

/** Bulleted list with brand check icons. */
export default function CheckList({ items, columns = 1, theme = "light", className }: CheckListProps) {
  return (
    <ul className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2 sm:gap-x-8", className)}>
      {items.map((item, i) => (
        <li key={i} className={cn("flex items-start gap-3 text-base sm:text-lg", theme === "dark" ? "text-slate-200" : "text-slate-700")}>
          <CheckCircle2
            className={cn("mt-1 h-5 w-5 shrink-0", theme === "dark" ? "text-violet-300" : "text-brand")}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
