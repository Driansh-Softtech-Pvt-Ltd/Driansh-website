import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type CtaVariant = "primary" | "light" | "outline" | "outline-light";
export type CtaSize = "sm" | "md" | "lg";

const VARIANTS: Record<CtaVariant, string> = {
  primary: "bg-brand-gradient text-white shadow-md hover:shadow-lg hover:brightness-110",
  light: "bg-white text-navy shadow-md hover:bg-brand-soft",
  outline: "border border-brand text-brand hover:bg-brand-soft",
  "outline-light": "border border-white/40 text-white hover:bg-white/10",
};

const SIZES: Record<CtaSize, string> = {
  sm: "min-h-10 px-5 py-2 text-sm",
  md: "min-h-12 px-7 py-3 text-base",
  lg: "min-h-14 px-8 py-3.5 text-lg",
};

/** The shared button classes, for <button>s and elements that can't be a CtaLink. */
export function ctaClasses({ variant = "primary", size = "md" }: { variant?: CtaVariant; size?: CtaSize } = {}) {
  return cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-70",
    SIZES[size],
    VARIANTS[variant]
  );
}

export interface CtaLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: CtaVariant;
  size?: CtaSize;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
}

/** The one button/link style used for calls to action across the site. */
export default function CtaLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  className,
  onClick,
}: CtaLinkProps) {
  const external = /^https?:\/\//.test(href);
  return (
    <Link
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(ctaClasses({ variant, size }), className)}
    >
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </Link>
  );
}
