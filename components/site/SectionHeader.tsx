import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  eyebrow?: string;
  align?: "center" | "left";
  /** Use "dark" when the header sits on a navy section. */
  theme?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
}

/** Consistent eyebrow + heading + description block for every section. */
export default function SectionHeader({
  title,
  description,
  eyebrow,
  align = "center",
  theme = "light",
  as: Heading = "h2",
  className,
}: SectionHeaderProps) {
  const dark = theme === "dark";
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-3", dark ? "text-violet-300" : "text-brand")}>{eyebrow}</p>
      )}
      <Heading className={cn("heading-2", dark ? "text-white" : "text-ink")}>{title}</Heading>
      {description && (
        <div className={cn("text-lead mt-4", dark ? "text-slate-300" : "text-slate-600")}>
          {description}
        </div>
      )}
    </div>
  );
}
