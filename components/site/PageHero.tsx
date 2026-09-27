import Image from "next/image";
import { cn } from "@/lib/utils";
import CtaLink from "./CtaLink";

type Cta = { label: string; href: string };

export interface PageHeroProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  eyebrow?: string;
  /** Full-bleed background photo, darkened with the navy overlay. */
  backgroundImage?: string;
  /** Illustration / screenshot shown beside the text on large screens. */
  image?: string;
  imageAlt?: string;
  primaryCta?: Cta | null;
  secondaryCta?: Cta;
  /** "lg" for landing pages, "md" for feature/detail pages. */
  size?: "lg" | "md";
  children?: React.ReactNode;
}

/**
 * The single hero used on every page: navy background, gradient glow,
 * optional background photo or side image. Offsets the fixed navbar.
 */
export default function PageHero({
  title,
  description,
  eyebrow,
  backgroundImage,
  image,
  imageAlt = "",
  primaryCta = { label: "Get Started", href: "/contact-us" },
  secondaryCta,
  size = "lg",
  children,
}: PageHeroProps) {
  const split = Boolean(image);
  const centered = !split && !backgroundImage && size === "md";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-navy text-white",
        size === "lg" ? "pt-32 pb-20 lg:pt-44 lg:pb-28" : "pt-28 pb-14 lg:pt-36 lg:pb-20"
      )}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy via-navy/85 to-navy/40" />
        </>
      )}
      {/* Brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-violet-600/25 blur-3xl"
      />

      <div
        className={cn(
          "container-site relative",
          split && "grid items-center gap-12 lg:grid-cols-2"
        )}
      >
        <div className={cn(!split && "max-w-3xl", centered && "mx-auto text-center")}>
          {eyebrow && <p className="eyebrow mb-4 text-violet-300">{eyebrow}</p>}
          <h1 className="heading-1 text-white">{title}</h1>
          {description && (
            <div className={cn("text-lead mt-6 max-w-2xl text-slate-300", centered && "mx-auto")}>
              {description}
            </div>
          )}
          {(primaryCta || secondaryCta) && (
            <div className={cn("mt-10 flex flex-wrap gap-4", centered && "justify-center")}>
              {primaryCta && <CtaLink href={primaryCta.href}>{primaryCta.label}</CtaLink>}
              {secondaryCta && (
                <CtaLink href={secondaryCta.href} variant="outline-light" arrow={false}>
                  {secondaryCta.label}
                </CtaLink>
              )}
            </div>
          )}
          {children}
        </div>

        {image && (
          <div className="relative mx-auto w-full max-w-xl">
            <Image
              src={image}
              alt={imageAlt}
              width={1200}
              height={900}
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="h-auto w-full rounded-2xl object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
