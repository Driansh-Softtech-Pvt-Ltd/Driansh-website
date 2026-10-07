"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavLink, NavMenu } from "@/constants/index";

function MobileAccordion({ menu, onNavigate }: { menu: NavMenu; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const panelId = `mobile-nav-${menu.label.toLowerCase()}`;

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3 text-left font-medium text-gray-800 hover:text-brand"
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
            <div className="space-y-5 pb-4">
              {menu.featured?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onNavigate}
                  className="block rounded-xl bg-white p-3 font-semibold text-ink shadow-sm hover:text-brand"
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
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-brand"
                    >
                      {group.title}
                    </Link>
                  ) : (
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{group.title}</p>
                  )}
                  <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2">
                    {group.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link href={link.href} onClick={onNavigate} className="block text-sm text-gray-700 hover:text-brand">
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
      className="overflow-hidden border-t border-gray-200 bg-gray-50 lg:hidden"
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
              className="block border-b border-gray-200 py-3 font-medium text-gray-800 hover:text-brand"
            >
              {menu.label}
            </Link>
          ),
        )}
        <Link
          href={cta.href}
          onClick={onNavigate}
          className="bg-brand-gradient my-4 block rounded-full px-6 py-3 text-center font-semibold text-white shadow-md"
        >
          {cta.label}
        </Link>
      </nav>
    </motion.div>
  );
}
