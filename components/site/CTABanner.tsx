import { cn } from "@/lib/utils";
import CtaLink from "./CtaLink";

export interface CTABannerProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  cta?: { label: string; href: string };
  className?: string;
}

/** Gradient call-to-action band. Wrap in <Section size="sm">. */
export default function CTABanner({
  title,
  description,
  cta = { label: "Talk to our team", href: "/contact-us" },
  className,
}: CTABannerProps) {
  return (
    <div
      className={cn(
        "light-tokens relative overflow-hidden rounded-3xl bg-navy px-6 py-10 text-white sm:px-10 md:py-12",
        className
      )}
    >
      <div aria-hidden="true" className="bg-brand-gradient absolute inset-0 opacity-90" />
      <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="max-w-2xl">
          <h2 className="heading-2 text-white">{title}</h2>
          {description && <div className="mt-3 text-white/85">{description}</div>}
        </div>
        <CtaLink href={cta.href} variant="light" className="shrink-0">
          {cta.label}
        </CtaLink>
      </div>
    </div>
  );
}
