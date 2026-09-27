import { cn } from "@/lib/utils";

export type SectionTone = "white" | "muted" | "navy";

const TONES: Record<SectionTone, string> = {
  white: "bg-white text-slate-600",
  muted: "bg-surface text-slate-600",
  navy: "bg-navy text-slate-300",
};

export interface SectionProps {
  children: React.ReactNode;
  tone?: SectionTone;
  /** "sm" for compact bands (CTAs, logos), "md" is the default rhythm. */
  size?: "sm" | "md";
  id?: string;
  className?: string;
  containerClassName?: string;
}

/** Page section with the site-wide background, vertical rhythm and container. */
export default function Section({
  children,
  tone = "white",
  size = "md",
  id,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        TONES[tone],
        size === "md" ? "py-16 md:py-24" : "py-10 md:py-14",
        className
      )}
    >
      <div className={cn("container-site", containerClassName)}>{children}</div>
    </section>
  );
}
