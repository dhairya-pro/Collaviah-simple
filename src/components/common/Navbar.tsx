"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useQuote } from "@/context/QuoteContext";
import {
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  FileSpreadsheet,
  Leaf,
  Grape,
} from "lucide-react";

const navLinks = [
  { label: "Products", href: "/#flavors", hasDropdown: true },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Why Us", href: "/#why-collaviah" },
  { label: "Who We Serve", href: "/#who-we-serve" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { totalCartons, setIsDrawerOpen } = useQuote();
  const pathname = usePathname();

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]) && href.split("#")[0].length > 1;
  };

  // Delayed close for dropdown (prevents flicker when moving to submenu)
  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  };
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setIsDropdownOpen(false), 120);
  };

  return (
    <>
      {/* ─────────────── DESKTOP HEADER ─────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.07)] border-b border-gold-champagne/50 py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">

            {/* ── LEFT: Brand Logo ── */}
            <Link
              href="/"
              className="flex-shrink-0 flex flex-col items-start leading-none focus:outline-none group"
              aria-label="COLLAVIAH homepage"
            >
              <span
                className={`font-serif font-bold tracking-[0.18em] transition-colors duration-200 group-hover:text-crimson ${
                  isScrolled ? "text-xl text-richBlack" : "text-xl sm:text-2xl text-richBlack"
                }`}
              >
                COLLAVIAH
              </span>
              <span className="text-[8.5px] font-sans uppercase tracking-[0.3em] text-gold-antique font-medium mt-[1px]">
                日本発 Vegan Collagen
              </span>
            </Link>

            {/* ── CENTER: Desktop Nav Links ── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {/* Dropdown trigger button */}
                      <button
                        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[11px] font-sans font-semibold uppercase tracking-luxury transition-colors duration-200 focus:outline-none ${
                          isActive(link.href)
                            ? "text-crimson"
                            : "text-charcoal hover:text-crimson hover:bg-champagne-light/70"
                        }`}
                        aria-expanded={isDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3 h-3 text-gold-antique transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Panel */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.97 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            onMouseEnter={handleDropdownEnter}
                            onMouseLeave={handleDropdownLeave}
                            className="absolute top-full left-0 mt-1 w-60 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gold-champagne/60 p-2 z-50"
                          >
                            <Link
                              href="/products/strawberry-lime"
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-champagne-light transition-colors duration-150 group"
                            >
                              <span className="mt-0.5 w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg bg-blush text-flavor-strawberry text-sm">
                                🍓
                              </span>
                              <div>
                                <span className="text-xs font-serif font-bold text-richBlack group-hover:text-crimson block">
                                  Strawberry Lime
                                </span>
                                <span className="text-[10px] text-charcoal-muted leading-tight block mt-0.5">
                                  Alpine strawberry & sudachi lime
                                </span>
                              </div>
                            </Link>

                            <Link
                              href="/products/cranberry"
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-champagne-light transition-colors duration-150 group"
                            >
                              <span className="mt-0.5 w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg bg-blush text-flavor-cranberry text-sm">
                                🫐
                              </span>
                              <div>
                                <span className="text-xs font-serif font-bold text-richBlack group-hover:text-crimson block">
                                  Cranberry
                                </span>
                                <span className="text-[10px] text-charcoal-muted leading-tight block mt-0.5">
                                  Wild tart cranberry & ruby botanicals
                                </span>
                              </div>
                            </Link>

                            <div className="mt-1 pt-2 border-t border-gold-champagne/40 px-1">
                              <Link
                                href="/wholesale"
                                className="flex items-center gap-1.5 text-[10px] font-sans font-semibold uppercase tracking-wider text-gold-antique hover:text-crimson transition-colors px-2 py-1.5"
                              >
                                <FileSpreadsheet className="w-3 h-3" />
                                View Wholesale Packs →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-3 py-2 rounded-lg text-[11px] font-sans font-semibold uppercase tracking-luxury transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-crimson"
                        : "text-charcoal hover:text-crimson hover:bg-champagne-light/70"
                    }`}
                  >
                    {link.label}
                    {/* Active underline dot */}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-crimson" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── RIGHT: Action Buttons ── */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Quote Cart Icon */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="relative flex items-center justify-center w-9 h-9 rounded-full bg-champagne-light hover:bg-champagne border border-gold-champagne/60 text-charcoal transition-all duration-200 hover:scale-105 hover:border-gold-antique/50 focus:outline-none"
                aria-label={`Quote cart — ${totalCartons} item${totalCartons !== 1 ? "s" : ""}`}
              >
                <ShoppingBag className="w-4 h-4" />
                {totalCartons > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-crimson text-white text-[9px] font-bold font-mono shadow-sm"
                  >
                    {totalCartons}
                  </motion.span>
                )}
              </button>

              {/* Request Quote CTA — desktop only */}
              <Link
                href="/wholesale#quote-builder"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-crimson hover:bg-crimson-hover text-white text-[11px] font-sans font-bold uppercase tracking-luxury transition-all duration-200 shadow-md shadow-crimson/20 hover:shadow-crimson/30 hover:scale-[1.02] focus:outline-none whitespace-nowrap"
              >
                <Sparkles className="w-3 h-3 text-gold-light flex-shrink-0" />
                <span>Request Quote</span>
              </Link>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-champagne-light border border-transparent hover:border-gold-champagne/60 text-richBlack transition-all duration-200 focus:outline-none"
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ─────────────── MOBILE MENU ─────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[68px] bg-richBlack/20 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-[68px] left-0 right-0 z-40 lg:hidden bg-white border-b border-gold-champagne/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-y-auto max-h-[calc(100vh-68px)]"
            >
              <div className="max-w-7xl mx-auto px-5 py-5 space-y-1">

                {/* Section label */}
                <p className="text-[9px] font-sans uppercase tracking-[0.35em] text-gold-antique font-semibold pb-2">
                  Menu
                </p>

                {/* Nav links */}
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-sans font-semibold transition-colors duration-150 ${
                        isActive(link.href)
                          ? "text-crimson bg-blush-light"
                          : "text-richBlack hover:text-crimson hover:bg-champagne-light"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive(link.href) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* Divider + Flavors */}
                <div className="pt-3 mt-2 border-t border-gold-champagne/40 space-y-1">
                  <p className="text-[9px] font-sans uppercase tracking-[0.35em] text-gold-antique font-semibold px-3 pb-1">
                    Flavors
                  </p>

                  <Link
                    href="/products/strawberry-lime"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-charcoal hover:text-crimson hover:bg-champagne-light transition-colors"
                  >
                    <span className="text-base">🍓</span>
                    <span className="font-medium">Strawberry Lime</span>
                  </Link>

                  <Link
                    href="/products/cranberry"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-charcoal hover:text-crimson hover:bg-champagne-light transition-colors"
                  >
                    <span className="text-base">🫐</span>
                    <span className="font-medium">Cranberry</span>
                  </Link>
                </div>

                {/* CTA */}
                <div className="pt-4 pb-2">
                  <Link
                    href="/wholesale#quote-builder"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-crimson hover:bg-crimson-hover text-white text-xs font-bold uppercase tracking-luxury shadow-md shadow-crimson/20 transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-gold-light" />
                    <span>Build Wholesale Quote</span>
                  </Link>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
