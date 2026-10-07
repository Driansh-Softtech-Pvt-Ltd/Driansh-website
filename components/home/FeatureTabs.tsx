"use client";

import { useId, useRef, useState } from "react";
import { CheckList, CtaLink } from "@/components/site";
import { cn } from "@/lib/utils";

export type FeatureTab = {
  id: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  link: { label: string; href: string };
  visual: React.ReactNode;
};

/** Accessible tabs (arrow keys, Home, End) that switch between product areas. */
export default function FeatureTabs({ tabs }: { tabs: FeatureTab[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const select = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowDown: index + 1,
      ArrowLeft: index - 1,
      ArrowUp: index - 1,
      Home: 0,
      End: tabs.length - 1,
    };
    if (event.key in keys) {
      event.preventDefault();
      select(keys[event.key]);
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="EngageOne product areas"
        className="mx-auto grid max-w-3xl grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm sm:grid-cols-4"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`${baseId}-tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-controls={`${baseId}-panel-${tab.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={cn(
              "flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand [&_svg]:h-4 [&_svg]:w-4",
              active === i ? "bg-brand-gradient text-white shadow-md" : "text-slate-600 hover:bg-brand-soft hover:text-brand"
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          id={`${baseId}-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          tabIndex={0}
          hidden={active !== i}
          className="mt-12 focus-visible:outline-none"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="heading-2 text-ink">{tab.title}</h3>
              <p className="text-lead mt-4 mb-6 text-slate-600">{tab.description}</p>
              <CheckList items={tab.points} />
              <div className="mt-8">
                <CtaLink href={tab.link.href} variant="outline">
                  {tab.link.label}
                </CtaLink>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">{tab.visual}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
