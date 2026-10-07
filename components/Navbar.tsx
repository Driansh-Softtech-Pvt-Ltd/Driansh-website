"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_CTA, NAV_MENUS, type NavMenu } from "@/constants/index";
import MegaMenuPanel from "@/components/nav/MegaMenuPanel";
import MobileMenu from "@/components/nav/MobileMenu";
import CtaLink from "@/components/site/CtaLink";
import { ThemeMenu } from "@/components/theme/ThemeSwitcher";

const HOVER_CLOSE_DELAY_MS = 150;
const MOBILE_MENU_ID = "mobile-menu";

function Logo() {
  // The logo PNG has wide transparent margins, so it is cropped to the wordmark.
  return (
    <Link href="/" aria-label="Driansh home" className="relative block h-11 w-48 shrink-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo.png"
        alt="Driansh Softtech"
        className="absolute left-1/2 top-1/2 w-52 max-w-none -translate-x-1/2 -translate-y-1/2 dark:mix-blend-screen dark:invert dark:hue-rotate-180"
      />
    </Link>
  );
}

function DesktopNavItem({
  menu,
  isOpen,
  onOpen,
  onClose,
  onHoverLeave,
}: {
  menu: NavMenu;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onHoverLeave: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = `nav-panel-${menu.label.toLowerCase()}`;

  if (!menu.groups) {
    return (
      <Link
        href={menu.href ?? "/"}
        className="flex h-full items-center px-1.5 text-base font-medium text-slate-800 hover:text-brand xl:px-3"
      >
        {menu.label}
      </Link>
    );
  }

  return (
    <div
      className="flex h-full"
      onPointerEnter={(e) => e.pointerType === "mouse" && onOpen()}
      onPointerLeave={(e) => e.pointerType === "mouse" && onHoverLeave()}
      onKeyDown={(e) => {
        if (e.key === "Escape" && isOpen) {
          onClose();
          buttonRef.current?.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onClose();
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => (isOpen ? onClose() : onOpen())}
        className={`flex h-full items-center gap-1 px-1.5 text-base font-medium hover:text-brand xl:gap-1.5 xl:px-3 ${
          isOpen ? "text-brand" : "text-slate-800"
        }`}
      >
        {menu.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-x-0 top-full z-40 border-t border-slate-100 bg-card shadow-xl"
          >
            <MegaMenuPanel menu={menu} onNavigate={onClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const openDropdown = (label: string) => {
    cancelClose();
    setOpenMenu(label);
  };
  const closeDropdown = () => {
    cancelClose();
    setOpenMenu(null);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), HOVER_CLOSE_DELAY_MS);
  };

  useEffect(() => {
    if (!openMenu && !isMenuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) {
        setOpenMenu(null);
        setIsMenuOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu, isMenuOpen]);

  return (
    <header ref={headerRef} className="fixed top-0 z-50 w-full border-b border-slate-100 bg-card shadow-md dark:shadow-black/30">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 lg:h-24 lg:gap-2 lg:px-4 xl:gap-4 xl:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden h-full items-center lg:flex">
          {NAV_MENUS.map((menu) => (
            <DesktopNavItem
              key={menu.label}
              menu={menu}
              isOpen={openMenu === menu.label}
              onOpen={() => openDropdown(menu.label)}
              onClose={closeDropdown}
              onHoverLeave={scheduleClose}
            />
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-1 lg:flex xl:gap-2">
          <ThemeMenu />
          <CtaLink href={NAV_CTA.href} arrow={false} className="lg:px-5 xl:px-7">
            {NAV_CTA.label}
          </CtaLink>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors hover:bg-slate-100 lg:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-slate-800" /> : <Menu className="h-6 w-6 text-slate-800" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu id={MOBILE_MENU_ID} menus={NAV_MENUS} cta={NAV_CTA} onNavigate={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}
