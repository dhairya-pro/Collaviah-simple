"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Section {
  id: string;
  label: string;
}

const SECTIONS: Section[] = [
  { id: "hero", label: "Intro" },
  { id: "trust", label: "Claims" },
  { id: "why-collaviah", label: "Science" },
  { id: "flavors", label: "Flavors" },
  { id: "wholesale-packs", label: "Packs" },
  { id: "quote-builder", label: "Quote" },
  { id: "who-we-serve", label: "Sectors" },
  { id: "how-it-works", label: "Timeline" },
  { id: "faq", label: "FAQ" },
];

export const SectionIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Page section navigation"
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 pointer-events-auto"
    >
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        const isHovered = hoveredSection === sec.id;

        return (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            onMouseEnter={() => setHoveredSection(sec.id)}
            onMouseLeave={() => setHoveredSection(null)}
            className="group flex items-center gap-2.5 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft rounded"
            aria-label={`Jump to ${sec.label} section`}
          >
            {/* Label reveal on hover or active */}
            <span
              className={`text-[10px] font-sans uppercase tracking-luxury font-medium transition-all duration-300 pointer-events-none select-none ${
                isActive
                  ? "opacity-100 text-richBlack translate-x-0"
                  : isHovered
                  ? "opacity-100 text-charcoal translate-x-0"
                  : "opacity-0 translate-x-2 text-transparent"
              }`}
            >
              {sec.label}
            </span>

            {/* Indicator Dot */}
            <div className="relative flex items-center justify-center w-4 h-4">
              {/* Outer animated ring when active */}
              {isActive && (
                <motion.div
                  layoutId="activeDotRing"
                  className="absolute inset-0 rounded-full border border-crimson/50"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              {/* Core dot */}
              <div
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2 h-2 bg-crimson"
                    : "w-1.5 h-1.5 bg-charcoal-muted/40 group-hover:bg-gold-antique group-hover:scale-125"
                }`}
              />
            </div>
          </button>
        );
      })}
    </aside>
  );
};

