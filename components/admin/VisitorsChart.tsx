"use client";

import { useEffect, useRef, useState } from "react";

type Point = { date: string; visitors: number };

function niceMax(n: number) {
  if (n <= 5) return 5;
  const pow = 10 ** Math.floor(Math.log10(n));
  const step = [1, 2, 2.5, 5, 10].find((s) => s * pow >= n / 4) ?? 10;
  return Math.ceil(n / (step * pow)) * step * pow;
}

const fmtDay = (d: string) =>
  new Date(`${d}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });

/** Single-series column chart of unique visitors per day, with hover tooltip. */
export default function VisitorsChart({ data }: { data: Point[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const [W, setW] = useState(720);

  // Draw at the real pixel width so bars and text keep their size.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setW(Math.max(280, Math.round(entry.contentRect.width))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const max = niceMax(Math.max(0, ...data.map((d) => d.visitors)));
  const ticks = [0, max / 2, max];
  const H = 208;
  const padL = 36;
  const padB = 22;
  const padT = 10;
  const band = (W - padL) / data.length;
  const barW = Math.min(24, Math.max(3, band - 2));
  const y = (v: number) => padT + (H - padB - padT) * (1 - v / max);
  const labelEvery = Math.ceil(data.length / 8);

  return (
    <figure ref={ref} className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} className="block" role="img" aria-label="Unique visitors per day">
        {ticks.map((t) => (
          <g key={t}>
            <line x1={padL} x2={W} y1={y(t)} y2={y(t)} stroke="#E2E8F0" strokeWidth={1} />
            <text x={padL - 6} y={y(t) + 4} textAnchor="end" className="fill-slate-400 text-[11px]">
              {t.toLocaleString()}
            </text>
          </g>
        ))}
        {data.map((d, i) => {
          const x = padL + i * band + (band - barW) / 2;
          const h = Math.max(0, H - padB - y(d.visitors));
          const r = Math.min(4, barW / 2, h);
          return (
            <g key={d.date} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <rect x={padL + i * band} y={0} width={band} height={H - padB} fill="transparent" />
              {h > 0 && (
                <path
                  d={`M${x},${H - padB} v${-(h - r)} q0,${-r} ${r},${-r} h${barW - 2 * r} q${r},0 ${r},${r} v${h - r} z`}
                  fill={hover === null || hover === i ? "#1E4EC4" : "#9FB4EA"}
                />
              )}
              {i % labelEvery === 0 && (
                <text x={padL + i * band + band / 2} y={H - 6} textAnchor="middle" className="fill-slate-400 text-[11px]">
                  {fmtDay(d.date)}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      {hover !== null && (
        <div
          className="pointer-events-none absolute top-0 -translate-x-1/2 rounded-lg bg-ink px-3 py-1.5 text-xs whitespace-nowrap text-white shadow-lg"
          style={{ left: padL + hover * band + band / 2 }}
        >
          <span className="font-semibold">{data[hover].visitors.toLocaleString()}</span> visitors · {fmtDay(data[hover].date)}
        </div>
      )}
    </figure>
  );
}
