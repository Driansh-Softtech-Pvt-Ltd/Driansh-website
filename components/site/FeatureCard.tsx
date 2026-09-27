import Link from "next/link";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** A lucide icon element, or an <Image>. */
  icon?: React.ReactNode;
  /** Override the default soft-blue icon tile. */
  iconClassName?: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

/** Standard white card used for features, services and benefits. */
export function FeatureCard({
  title,
  description,
  icon,
  iconClassName,
  href,
  children,
  className,
}: FeatureCardProps) {
  const body = (
    <>
      {icon && (
        <div
          className={cn(
            "mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand [&_svg]:h-6 [&_svg]:w-6",
            iconClassName
          )}
        >
          {icon}
        </div>
      )}
      <h3 className="heading-3 text-ink">{title}</h3>
      {description && <div className="mt-3 leading-relaxed text-slate-600">{description}</div>}
      {children}
    </>
  );

  const classes = cn(
    "block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg sm:p-8",
    className
  );

  return href ? (
    <Link href={href} className={classes}>
      {body}
    </Link>
  ) : (
    <div className={classes}>{body}</div>
  );
}

/** Responsive grid for FeatureCards (1 → 2 → 3/4 columns). */
export function CardGrid({
  children,
  columns = 3,
  className,
}: {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
}
