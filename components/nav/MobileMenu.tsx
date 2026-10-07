"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavLink, NavMenu } from "@/constants/index";
import CtaLink from "@/components/site/CtaLink";
import { ThemeSegmented } from "@/components/theme/ThemeSwitcher";

function MobileAccordion({ menu, onNavigate }: { menu: NavMenu; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const panelId = `mobile-nav-${menu.label.toLowerCase()}`;

  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="flex min-h-12 w-full items-center justify-between py-3 text-left font-medium text-slate-800 hover:text-brand"
      >
        {menu.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pb-4">
              {menu.featured?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onNavigate}
                  className="flex min-h-12 items-center rounded-xl bg-card p-3 font-semibold text-ink shadow-sm hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
              {menu.groups?.map((group) => (
                <div key={group.title}>
                  {group.href ? (
                    <Link
                      href={group.href}
                      onClick={onNavigate}
                      className="eyebrow flex min-h-10 items-center text-slate-500 hover:text-brand"
                    >
                      {group.title}
                    </Link>
                  ) : (
                    <p className="eyebrow flex min-h-10 items-center text-slate-500">{group.title}</p>
                  )}
                  <ul className="grid grid-cols-2 gap-x-4 sm:grid-cols-3">
                    {group.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link href={link.href} onClick={onNavigate} className="flex min-h-10 items-center py-2 text-sm text-slate-700 hover:text-brand">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MobileMenu({
  id,
  menus,
  cta,
  onNavigate,
}: {
  id: string;
  menus: NavMenu[];
  cta: NavLink;
  onNavigate: () => void;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden border-t border-slate-200 bg-slate-50 lg:hidden"
    >
      <nav aria-label="Mobile" className="max-h-[calc(100dvh-5rem)] overflow-y-auto px-6 py-2">
        {menus.map((menu) =>
          menu.groups ? (
            <MobileAccordion key={menu.label} menu={menu} onNavigate={onNavigate} />
          ) : (
            <Link
              key={menu.label}
              href={menu.href ?? "/"}
              onClick={onNavigate}
              className="flex min-h-12 items-center border-b border-slate-200 py-3 font-medium text-slate-800 hover:text-brand"
            >
              {menu.label}
            </Link>
          ),
        )}
        <div className="border-b border-slate-200 py-4">
          <p className="eyebrow mb-3 text-slate-500">Appearance</p>
          <ThemeSegmented />
        </div>
        <CtaLink href={cta.href} onClick={onNavigate} arrow={false} className="my-4 flex w-full">
          {cta.label}
        </CtaLink>
      </nav>
    </motion.div>
  );
}
