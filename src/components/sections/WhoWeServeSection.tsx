"use client";

import React, { useRef } from "react";
import { WHOLESALE_SECTORS } from "@/data/packs";
import {
  ShoppingBag,
  Coffee,
  Dumbbell,
  Sparkles,
  Building,
  Gift,
  Truck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  "shopping-bag": <ShoppingBag className="w-6 h-6 text-crimson" />,
  coffee: <Coffee className="w-6 h-6 text-gold-antique" />,
  dumbbell: <Dumbbell className="w-6 h-6 text-leafGreen" />,
  sparkles: <Sparkles className="w-6 h-6 text-gold-soft" />,
  building: <Building className="w-6 h-6 text-richBlack" />,
  gift: <Gift className="w-6 h-6 text-crimson" />,
  truck: <Truck className="w-6 h-6 text-gold-antique" />,
};

export const WhoWeServeSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="who-we-serve" className="py-24 bg-champagne-light/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Left/Right Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block">
              — COMMERCIAL SECTORS & CHANNELS —
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-richBlack mt-2">
              Who We Serve
            </h2>
            <p className="text-charcoal text-sm sm:text-base mt-2 max-w-xl">
              From premium grocery chillers to five-star hotel minibars and luxury spa lounges, COLLAVIAH is engineered to drive high repeat sales.
            </p>
          </div>

          {/* Navigation arrow buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white border border-gold-champagne/80 hover:border-gold-antique text-charcoal hover:text-richBlack transition shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white border border-gold-champagne/80 hover:border-gold-antique text-charcoal hover:text-richBlack transition shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* HORIZONTAL SCROLL GALLERY WITH 3D-TILT CARDS */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {WHOLESALE_SECTORS.map((sector, idx) => (
            <motion.div
              key={sector.id}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="min-w-[320px] sm:min-w-[360px] md:min-w-[380px] rounded-3xl p-7 bg-white border border-gold-champagne/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between snap-start group"
            >
              <div>
                {/* Sector Icon & Step Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-champagne-light/70 border border-gold-champagne/50 group-hover:scale-110 transition-transform">
                    {iconMap[sector.icon] || <Sparkles className="w-6 h-6 text-crimson" />}
                  </div>
                  <span className="text-[10px] font-mono text-gold-antique uppercase tracking-widest font-bold">
                    0{idx + 1} / SECTOR
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-2xl font-bold text-richBlack group-hover:text-crimson transition-colors">
                  {sector.title}
                </h3>
                <span className="text-xs font-mono font-semibold text-gold-antique block mt-1">
                  {sector.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-charcoal/80 mt-4 leading-relaxed">
                  {sector.description}
                </p>

                {/* Key Sector Benefits */}
                <div className="mt-6 space-y-2 pt-4 border-t border-gold-champagne/30">
                  <span className="text-[10px] font-sans uppercase tracking-luxury text-charcoal-muted block">
                    Commercial Advantages:
                  </span>
                  {sector.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-charcoal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-leafGreen flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Pack & CTA */}
              <div className="mt-8 pt-4 border-t border-gold-champagne/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-charcoal-muted block uppercase tracking-wider">
                    Recommended:
                  </span>
                  <span className="text-xs font-mono font-bold text-richBlack">
                    {sector.recommendedPack}
                  </span>
                </div>

                <Link
                  href="/wholesale#quote-builder"
                  className="p-2.5 rounded-full bg-champagne-light hover:bg-crimson hover:text-white text-richBlack transition-all group-hover:scale-105"
                  aria-label={`Configure quote for ${sector.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

