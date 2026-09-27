import { cn } from "@/lib/utils";
import type { Diagram } from "@/content/types";

/**
 * Brand illustration: the core technology in the middle with the systems it
 * connects around it. Pure HTML/SVG, so it is sharp at any size and every page
 * shares one visual language. `theme="dark"` for the navy hero.
 */
export default function FlowDiagram({
  diagram,
  theme = "light",
  className,
}: {
  diagram: Diagram;
  theme?: "light" | "dark";
  className?: string;
}) {
  const dark = theme === "dark";
  const { center, nodes } = diagram;
  const CenterIcon = center.icon;
  const R = 38; // node orbit radius, % of the box
  const points = nodes.map((_, i) => {
    const a = (-90 + (360 / nodes.length) * i) * (Math.PI / 180);
    return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
  });

  return (
    <div
      className={cn("relative mx-auto aspect-square w-full max-w-[26rem] select-none", className)}
      role="img"
      aria-label={`${center.label} connected to ${nodes.map((n) => n.label).join(", ")}`}
    >
      {/* Orbit + connectors */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`fd-line-${theme}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          stroke={dark ? "rgba(255,255,255,0.10)" : "#E2E8F0"}
          strokeWidth="0.4"
        />
        <circle cx="50" cy="50" r={R / 2} fill="none" stroke={dark ? "rgba(255,255,255,0.06)" : "#EEF2F7"} strokeWidth="0.4" />
        {points.map((p, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={p.x}
            y2={p.y}
            stroke={`url(#fd-line-${theme})`}
            strokeWidth="0.6"
            strokeDasharray="1.6 1.6"
            className="motion-safe:animate-[fd-dash_2.4s_linear_infinite]"
            opacity={dark ? 0.9 : 0.7}
          />
        ))}
      </svg>

      {/* Glow */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute top-1/2 left-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
          dark ? "bg-violet-600/35" : "bg-brand/15"
        )}
      />

      {/* Center */}
      <div className="absolute top-1/2 left-1/2 flex w-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center">
        <div className="bg-brand-gradient flex aspect-square w-full items-center justify-center rounded-[28%] shadow-2xl shadow-violet-900/40 ring-4 ring-white/10">
          <CenterIcon className="h-[42%] w-[42%] text-white" strokeWidth={1.6} />
        </div>
        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap sm:text-sm",
            dark ? "bg-white/10 text-white backdrop-blur" : "bg-white text-ink shadow-sm"
          )}
        >
          {center.label}
        </span>
      </div>

      {/* Nodes */}
      {nodes.map(({ icon: Icon, label }, i) => (
        <div
          key={label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          style={{ left: `${points[i].x}%`, top: `${points[i].y}%` }}
        >
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-2xl sm:h-14 sm:w-14",
              dark
                ? "border border-white/15 bg-white/10 text-violet-200 backdrop-blur"
                : "border border-slate-200 bg-white text-brand shadow-md"
            )}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
          </div>
          <span
            className={cn(
              "max-w-[7.5rem] text-center text-[11px] leading-tight font-medium sm:text-xs",
              dark ? "text-slate-200" : "text-slate-600"
            )}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
