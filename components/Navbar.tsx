"use client";

import { useState } from "react";
import { navItems } from "@/constants/index";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* 🔹 Services Dropdown */
function ServicesDropdown({ dropdown }: { dropdown: any[] }) {
  return (
    <div className="container mx-auto px-10 py-8">
      {dropdown.map((section: any, idx: number) => (
        <div key={idx}>
          {section.path ? (
            <Link
              href={section.path}
              className="font-bold text-gray-900 mb-4 block text-[18px] hover:text-blue-600"
            >
              {section.title}
            </Link>
          ) : (
            <h4 className="font-bold text-gray-900 mb-4 text-[18px]">
              {section.title}
            </h4>
          )}
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {section.items.map((item: any, i: number) => (
              <Link
                key={i}
                href={item.path}
                className="text-[17px] text-black hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* 🔹 Solutions Dropdown */
function SolutionsDropdown({ dropdown }: { dropdown: any[] }) {
  const all = dropdown[0].items;

  return (
    <div className="container mx-auto px-10 py-8">
      <h4 className="font-bold text-gray-900 mb-4 text-[18px] uppercase">
        {dropdown[0].title}
      </h4>

      {/* Items in a row */}
      <div className="flex flex-wrap gap-x-10 gap-y-3">
        {all.map((item: any, idx: number) => (
          <Link
            key={idx}
            href={item.path}
            className="text-[17px] text-black hover:text-blue-600"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* 🔹 Mobile Nav Item */
function MobileNavItem({ item, setIsMenuOpen }: any) {
  const [open, setOpen] = useState(false);

  if (item.dropdown) {
    return (
      <div className="border-b border-gray-200 pb-2">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left font-medium text-gray-800 py-2 flex justify-between items-center hover:text-blue-600"
        >
          {item.name}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-4 mt-2 space-y-3"
            >
              {item.dropdown.map((section: any, idx: number) => (
                <div key={idx}>
                  {section.path ? (
                    <Link
                      href={section.path}
                      className="block font-semibold text-gray-900 text-[15px] hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {section.title}
                    </Link>
                  ) : (
                    <h4 className="font-semibold text-gray-900 text-[15px]">
                      {section.title}
                    </h4>
                  )}
                  {section.items.length > 0 && (
                    <div className="ml-3 mt-1 space-y-1">
                      {section.items.map((dropItem: any, j: number) => (
                        <Link
                          key={j}
                          href={dropItem.path}
                          className="block text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.path || "#"}
      className="block font-medium text-gray-700 py-2 hover:text-blue-600"
      onClick={() => setIsMenuOpen(false)}
    >
      {item.name}
    </Link>
  );
}

/* 🔹 Main Navbar */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const activeItem = navItems.find((i) => i.name === activeDropdown);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center h-20 lg:h-24 overflow-hidden">
          {/* 🔸 Mobile Header */}
          <div className="flex lg:hidden w-full justify-between items-center ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
            <Link href="/" className="flex items-center space-x-2  ">
              <img
                src="/logo.png"
                alt="Driansh Softtech"
                className="h-30 w-auto rounded-sm"
              />
            </Link>
          </div>

          {/* 🔸 Desktop Logo */}
          <Link
            href="/"
            className="hidden lg:flex items-center space-x-4 px-10 ml-32 overflow-hidden"
          >
            <img
              rel="preload"
              src="/logo.png"
              alt="Driansh Softtech"
              className="scale-400 h-10 w-20 object-contain"
            />
          </Link>

          {/* 🔸 Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 ml-auto px-10">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown ? setActiveDropdown(item.name) : null
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path || "#"}
                  className="flex items-center space-x-2 font-medium text-[16px] text-gray-800 hover:text-blue-600"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              </div>
            ))}
            <Link
              href="/contact-us"
              className="bg-[#007bff] text-white px-6 py-3.5 rounded-sm font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      </div>

      {/* 🔸 Desktop Dropdowns */}
      <AnimatePresence>
        {activeDropdown && activeItem?.dropdown && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-screen bg-gray-100 z-40 shadow-xl overflow-hidden"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {activeItem.name === "SERVICES" && (
              <ServicesDropdown dropdown={activeItem.dropdown} />
            )}
            {activeItem.name === "SOLUTIONS" && (
              <SolutionsDropdown dropdown={activeItem.dropdown} />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔸 Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-50 border-t border-gray-200 shadow-inner px-6 py-4 space-y-2"
          >
            {navItems.map((item, idx) => (
              <MobileNavItem key={idx} item={item} setIsMenuOpen={setIsMenuOpen} />
            ))}

            <Link
              href="/contact-us"
              className="block font-medium text-gray-800 py-2 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT&nbsp;US
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
