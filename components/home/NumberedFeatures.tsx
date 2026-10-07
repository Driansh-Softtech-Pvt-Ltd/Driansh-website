import { cn } from "@/lib/utils";

export type NumberedFeature = { title: string; description: string };

/** Ordered list of capabilities with large gradient numbers. */
export default function NumberedFeatures({
  items,
  theme = "light",
  className,
}: {
  items: NumberedFeature[];
  theme?: "light" | "dark";
  className?: string;
}) {
  const dark = theme === "dark";
  return (
    <ol className={cn("grid gap-4", className)}>
      {items.map((item, i) => (
        <li
          key={item.title}
          className={cn(
            "flex gap-4 rounded-2xl border p-5",
            dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white shadow-sm"
          )}
        >
          <span className="text-gradient shrink-0 text-2xl font-bold tabular-nums" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className={cn("font-semibold", dark ? "text-white" : "text-ink")}>{item.title}</h3>
            <p className={cn("mt-1 text-sm leading-relaxed", dark ? "text-slate-300" : "text-slate-600")}>
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
