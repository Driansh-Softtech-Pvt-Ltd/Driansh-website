import Image from "next/image";
import { cn } from "@/lib/utils";

export interface MediaSplitProps {
  image?: string;
  imageAlt?: string;
  /** Custom illustration used instead of an image. */
  visual?: React.ReactNode;
  children: React.ReactNode;
  /** Put the image on the right instead of the left (on desktop). */
  reverse?: boolean;
  /** Frame screenshots with a border + shadow. */
  framed?: boolean;
  /** Extra classes for the image wrapper, e.g. "max-w-sm" for tall screenshots. */
  imageClassName?: string;
  className?: string;
}

/** Two-column text + image block. Stacks on mobile with text first. */
export default function MediaSplit({
  image,
  imageAlt = "",
  visual,
  children,
  reverse = false,
  framed = false,
  imageClassName,
  className,
}: MediaSplitProps) {
  return (
    <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16", className)}>
      <div className={cn(reverse ? "lg:order-1" : "lg:order-2")}>{children}</div>
      <div className={cn("relative mx-auto w-full max-w-xl", reverse ? "lg:order-2" : "lg:order-1", imageClassName)}>
        {visual ?? (image && (
          <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={900}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className={cn(
              "h-auto w-full object-contain",
              framed && "rounded-2xl border border-slate-200 bg-white shadow-xl"
            )}
          />
        ))}
      </div>
    </div>
  );
}
