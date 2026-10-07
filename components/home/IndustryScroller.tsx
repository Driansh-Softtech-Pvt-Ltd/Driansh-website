"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BUTTON_CLASS =
  "flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition-colors hover:border-brand/40 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand";

/** Horizontal snap-scrolling row of cards with previous / next buttons. */
export default function IndustryScroller({ children, label }: { children: React.ReactNode; label: string }) {
  const listRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: 1 | -1) => {
    const list = listRef.current;
    if (!list) return;
    list.scrollBy({ left: direction * list.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={listRef}
        aria-label={label}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-4 [scrollbar-width:thin] sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:scroll-px-0 lg:px-0"
      >
        {children}
      </ul>
      <div className="mt-6 flex justify-end gap-3">
        <button type="button" onClick={() => scroll(-1)} className={BUTTON_CLASS} aria-label="Previous industries">
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button type="button" onClick={() => scroll(1)} className={BUTTON_CLASS} aria-label="Next industries">
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
