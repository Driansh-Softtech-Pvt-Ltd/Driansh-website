import { MessageCircle, Server, type LucideIcon } from "lucide-react";
import { CtaLink } from "@/components/site";
import { cn } from "@/lib/utils";
import HeroAppPreview from "./HeroAppPreview";
import { DEMO_HREF, ENGAGEONE_BASE } from "./links";

/* Pixel mosaic behind the headline: a deterministic grid of brand-blue squares that thins out toward the left. */
const MOSAIC_COLS = 40;
const MOSAIC_ROWS = 28;
const MOSAIC_CELL = 14;
const MOSAIC_STEP = 18;
const MOSAIC_COLORS = ["#1E4EC4", "#3B82F6", "#60A5FA", "#93C5FD"];

/** Repeatable pseudo-random number in [0, 1) for a grid cell, so server and client render the same mosaic. */
function cellNoise(x: number, y: number, seed: number) {
  const n = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

const MOSAIC_CELLS = Array.from({ length: MOSAIC_COLS * MOSAIC_ROWS }, (_, i) => {
  const x = i % MOSAIC_COLS;
  const y = Math.floor(i / MOSAIC_COLS);
  const towardRight = x / (MOSAIC_COLS - 1);
  const towardTop = 1 - (y / (MOSAIC_ROWS - 1)) * 0.55;
  const density = towardRight ** 1.9 * towardTop;
  const noise = cellNoise(x, y, 1);
  if (noise > density) return null;
  return {
    x: x * MOSAIC_STEP,
    y: y * MOSAIC_STEP,
    opacity: Math.round((0.12 + 0.6 * density * cellNoise(x, y, 2)) * 100) / 100,
    color: MOSAIC_COLORS[Math.floor(cellNoise(x, y, 3) * MOSAIC_COLORS.length)],
  };
}).filter((cell) => cell !== null);

function PixelMosaic() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${MOSAIC_COLS * MOSAIC_STEP} ${MOSAIC_ROWS * MOSAIC_STEP}`}
      preserveAspectRatio="xMaxYMin slice"
      className="pointer-events-none absolute top-0 right-0 -z-10 h-[34rem] w-full opacity-40 sm:opacity-60 lg:h-[40rem] lg:w-[60%] lg:opacity-100"
    >
      {MOSAIC_CELLS.map((cell) => (
        <rect
          key={`${cell.x}-${cell.y}`}
          x={cell.x}
          y={cell.y}
          width={MOSAIC_CELL}
          height={MOSAIC_CELL}
          rx={2}
          fill={cell.color}
          fillOpacity={cell.opacity}
        />
      ))}
    </svg>
  );
}

const STICKERS: { kicker: string; title: string; icon: LucideIcon; tile: string; tilt: string }[] = [
  {
    kicker: "WhatsApp Business",
    title: "Official API",
    icon: MessageCircle,
    tile: "bg-emerald-500",
    tilt: "-rotate-3",
  },
  {
    kicker: "Deploy",
    title: "Cloud or self-hosted",
    icon: Server,
    tile: "bg-brand-gradient",
    tilt: "rotate-2 lg:ms-10",
  },
];

function Sticker({ kicker, title, icon: Icon, tile, tilt }: (typeof STICKERS)[number]) {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-2.5 rounded-2xl border-2 border-ink bg-white py-2 ps-2 pe-3.5 shadow-[3px_3px_0_0_var(--color-ink)] sm:gap-3 sm:py-2.5 sm:ps-2.5 sm:pe-4 sm:shadow-[4px_4px_0_0_var(--color-ink)]",
        tilt
      )}
    >
      <span className={cn("flex h-8 w-8 shrink-0 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-white", tile)}>
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="block text-[0.625rem] font-bold sm:text-[0.6875rem] tracking-[0.12em] text-slate-500 uppercase">{kicker}</span>
        <span className="block text-sm font-bold text-ink sm:text-base">{title}</span>
      </span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-32 lg:pt-44">
      <PixelMosaic />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[26rem] -z-10 h-[30rem] bg-linear-to-b from-transparent via-brand-soft/60 to-transparent lg:top-[30rem]"
      />

      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/80 px-3.5 py-1.5 text-[0.75rem] text-brand backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Customer engagement for growing businesses and enterprises
            </p>
            <h1 className="text-[2.5rem] leading-[1.05] font-bold tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.25rem]">
              <span className="lg:block">Connect with every customer, </span>
              <span className="text-gradient">at enterprise scale</span>
            </h1>
            <p className="text-lead mt-6 max-w-2xl text-slate-600">
              Driansh EngageOne unites website chat, WhatsApp, social, email, SMS and voice in one secure workspace. AI
              answers routine questions around the clock, and your teams resolve the rest with the full customer story
              in front of them.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
              <CtaLink href={DEMO_HREF}>Request a demo</CtaLink>
              <CtaLink href={ENGAGEONE_BASE} variant="outline" arrow={false} className="bg-white">
                Explore EngageOne
              </CtaLink>
            </div>
            <p className="mt-5 text-sm text-slate-500">
              Role-based access · Audit logs · Single sign-on · Driansh cloud or your own servers
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-3 lg:flex-col lg:gap-5 lg:pb-16">
            {STICKERS.map((sticker) => (
              <Sticker key={sticker.title} {...sticker} />
            ))}
          </div>
        </div>

        <HeroAppPreview />
      </div>
    </section>
  );
}
