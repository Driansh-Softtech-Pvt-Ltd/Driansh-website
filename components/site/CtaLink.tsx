import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CtaVariant = "primary" | "light" | "outline" | "outline-light";

const VARIANTS: Record<CtaVariant, string> = {
  primary: "bg-brand-gradient text-white shadow-md hover:shadow-lg hover:brightness-110",
  light: "bg-white text-navy shadow-md hover:bg-brand-soft",
  outline: "border border-brand text-brand hover:bg-brand-soft",
  "outline-light": "border border-white/40 text-white hover:bg-white/10",
};

export interface CtaLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: CtaVariant;
  arrow?: boolean;
  className?: string;
}

/** The one button/link style used for calls to action across the site. */
export default function CtaLink({
  href,
  children,
  variant = "primary",
  arrow = true,
  className,
}: CtaLinkProps) {
  const external = /^https?:\/\//.test(href);
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        VARIANTS[variant],
        className
      )}
    >
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </Link>
  );
}
