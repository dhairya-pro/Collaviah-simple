"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CanMockup } from "@/components/common/CanMockup";
import { FlavorId } from "@/types";
import {
  Leaf,
  Sparkles,
  Ban,
  ShieldCheck,
  Check,
  ArrowRight,
  Flame,
  Clock,
  Layers,
  Thermometer,
} from "lucide-react";
import Link from "next/link";

interface Pillar {
  id: string;
  metric: string;
  metricLabel: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
  accentColor: "crimson" | "gold" | "green" | "amber";
}

const PILLARS: Pillar[] = [
  {
    id: "vegan-collagen",
    metric: "5,000mg",
    metricLabel: "Per 250ml Can",
    title: "Bio-Fermented Plant Collagen",
    subtitle: "Type I & III Bio-Identical Peptides",
    description:
      "Formulated in Osaka, Japan via precision cellular plant fermentation. Replicates human Type I & III collagen amino acid profiles with 100% cruelty-free, sustainable bio-peptides.",
    highlights: [
      "Zero bovine or marine byproducts",
      "Superior peptide bioavailability",
      "100% Certified Vegan & Non-GMO",
    ],
    icon: Leaf,
    accentColor: "green",
  },
  {
    id: "monk-fruit",
    metric: "100%",
    metricLabel: "Organic Monk Fruit",
    title: "Pure Monk Fruit Sweetener",
    subtitle: "Natural Luo Han Guo Extract",
    description:
      "Sweetened exclusively with premium organic monk fruit extract (Mogroside V). Delivers a rounded, naturally crisp mouthfeel with zero sugar alcohols and zero synthetic aftertaste.",
    highlights: [
      "No erythritol, stevia, or sucralose",
      "Smooth, clean refreshment profile",
      "Zero chemical lingering sweetness",
    ],
    icon: Sparkles,
    accentColor: "gold",
  },
  {
    id: "zero-sugar",
    metric: "0g",
    metricLabel: "Total Sugars",
    title: "Zero Sugar & Clean Glycemic",
    subtitle: "Zero Crash • Sustained Refreshment",
    description:
      "Completely free from cane sugars, corn syrups, and concentrated fruit purees. Engineered for modern consumers demanding clean hydration without blood-glucose spikes.",
    highlights: [
      "0.00g cane sugar or syrups",
      "Diabetic & keto-lifestyle friendly",
      "Zero post-beverage energy crash",
    ],
    icon: Ban,
    accentColor: "crimson",
  },
  {
    id: "low-calories",
    metric: "<15",
    metricLabel: "Kcal & 100mg Vit C",
    title: "Ultra Low Calorie + Vitamin C",
    subtitle: "100% Daily Ascorbic Acid Cofactor",
    description:
      "Light, guilt-free sparkling refreshment packed with 100mg Vitamin C—the essential cellular co-enzyme required to activate and accelerate natural collagen synthesis.",
    highlights: [
      "100% Recommended Daily Intake of Vit C",
      "Under 15 calories per 250ml can",
      "Matte recyclable aluminum format",
    ],
    icon: ShieldCheck,
    accentColor: "amber",
  },
];

const COMPARISON_ITEMS = [
  {
    label: "Active Collagen",
    collaviah: "5,000mg Bio-Fermented Plant Peptides",
    conventional: "1,000–2,500mg Animal / Marine Byproducts",
    icon: Layers,
  },
  {
    label: "Sweetening System",
    collaviah: "Pure Organic Monk Fruit (Zero Sugar)",
    conventional: "15g–24g Cane Sugar / Chemical Sweeteners",
    icon: Sparkles,
  },
  {
    label: "Caloric Density",
    collaviah: "Under 15 kcal per 250ml can",
    conventional: "80–160 kcal heavy syrup drinks",
    icon: Flame,
  },
  {
    label: "Storage & Stability",
    collaviah: "12-Month Ambient (4°C – 22°C)",
    conventional: "Cold-chain dependent (High chilled freight cost)",
    icon: Thermometer,
  },
];

export const WhyCollaviah: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>("vegan-collagen");
  const [whyFlavor, setWhyFlavor] = useState<FlavorId>("strawberry-lime");

  const leftPillars = PILLARS.slice(0, 2);
  const rightPillars = PILLARS.slice(2, 4);

  return (
    <section
      id="why-collaviah"
      className="py-24 sm:py-32 bg-gradient-to-b from-pearl via-champagne-light/50 to-pearl relative overflow-hidden"
    >
      {/* Background Decorative Rings */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-blush/25 via-gold-champagne/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block mb-3">
            — CELLULAR HYDRATION & BIO-INNOVATION —
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-richBlack tracking-tight">
            Why COLLAVIAH Leads the Category
          </h2>
          <p className="text-charcoal text-sm sm:text-base mt-4 leading-relaxed font-light">
            Formulated and canned in Osaka, Japan. 5,000mg bio-fermented plant collagen peptides in 250ml slim cans with zero sugar, pure monk fruit, and 12-month ambient shelf life for seamless global commercial distribution.
          </p>
        </div>

        {/* 3-COLUMN ROBUST SHOWCASE (Zero Overlap Guaranteed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT COLUMN: PILLARS 1 & 2 */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
            {leftPillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activePillarId === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`group relative p-6 sm:p-7 rounded-3xl cursor-pointer transition-all duration-300 bg-white border ${
                    isActive
                      ? "border-crimson shadow-xl ring-2 ring-crimson/15 translate-y-[-2px]"
                      : "border-gold-champagne/60 hover:border-gold-soft hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-crimson text-white shadow-sm"
                          : "bg-champagne-light text-richBlack group-hover:bg-gold-champagne/40"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="font-serif font-bold text-xl sm:text-2xl text-crimson block leading-none">
                        {pillar.metric}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-muted mt-0.5 block">
                        {pillar.metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-richBlack">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-sans text-gold-antique font-semibold block mt-0.5 mb-2.5">
                    {pillar.subtitle}
                  </span>

                  <p className="text-xs sm:text-[13px] text-charcoal leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gold-champagne/30 space-y-1.5">
                    {pillar.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-[11px] sm:text-xs text-charcoal"
                      >
                        <Check className="w-3.5 h-3.5 text-leafGreen flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CENTER COLUMN: CAN SHOWCASE & INTERACTIVE PEDESTAL */}
          <div className="lg:col-span-4 flex flex-col items-center order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm flex flex-col items-center p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/90 via-champagne-light/70 to-white/90 border border-gold-champagne/60 shadow-lg">
              {/* Soft Ambient Radial Behind Can */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-tr from-blush/40 via-gold-champagne/30 to-champagne/20 blur-2xl pointer-events-none" />

              {/* Flavor Selector Switcher */}
              <div className="relative z-10 flex items-center gap-1 p-1 rounded-full bg-white border border-gold-champagne/70 shadow-sm mb-6">
                <button
                  type="button"
                  onClick={() => setWhyFlavor("strawberry-lime")}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-sans uppercase font-bold tracking-luxury transition-all ${
                    whyFlavor === "strawberry-lime"
                      ? "bg-crimson text-white shadow-sm"
                      : "text-charcoal hover:text-richBlack"
                  }`}
                >
                  Strawberry Lime
                </button>
                <button
                  type="button"
                  onClick={() => setWhyFlavor("lemon-lime")}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-sans uppercase font-bold tracking-luxury transition-all ${
                    whyFlavor === "lemon-lime"
                      ? "bg-[#C8B400] text-white shadow-sm"
                      : "text-charcoal hover:text-richBlack"
                  }`}
                >
                  Lemon Lime
                </button>
              </div>

              {/* High Fidelity Can Mockup */}
              <div className="relative z-10 w-44 sm:w-52 py-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={whyFlavor}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                  >
                    <CanMockup
                      flavor={whyFlavor}
                      isFloating={true}
                      showDroplets={true}
                      glow={true}
                      interactiveTilt={true}
                      priority={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Specifications Pill */}
              <div className="relative z-10 mt-6 text-center space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gold-soft/50 text-[10px] font-mono tracking-widest text-gold-antique uppercase font-bold shadow-sm">
                  <span>OSAKA, JAPAN</span>
                  <span className="w-1 h-1 rounded-full bg-gold-antique" />
                  <span>250ML SLIM CAN</span>
                </div>
                <p className="text-[11px] text-charcoal-muted font-sans font-medium">
                  12-Month Ambient Shelf Life (4°C – 22°C)
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PILLARS 3 & 4 */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-3">
            {rightPillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activePillarId === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`group relative p-6 sm:p-7 rounded-3xl cursor-pointer transition-all duration-300 bg-white border ${
                    isActive
                      ? "border-crimson shadow-xl ring-2 ring-crimson/15 translate-y-[-2px]"
                      : "border-gold-champagne/60 hover:border-gold-soft hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-crimson text-white shadow-sm"
                          : "bg-champagne-light text-richBlack group-hover:bg-gold-champagne/40"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="font-serif font-bold text-xl sm:text-2xl text-crimson block leading-none">
                        {pillar.metric}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-muted mt-0.5 block">
                        {pillar.metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-richBlack">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-sans text-gold-antique font-semibold block mt-0.5 mb-2.5">
                    {pillar.subtitle}
                  </span>

                  <p className="text-xs sm:text-[13px] text-charcoal leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gold-champagne/30 space-y-1.5">
                    {pillar.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-[11px] sm:text-xs text-charcoal"
                      >
                        <Check className="w-3.5 h-3.5 text-leafGreen flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* B2B CATEGORY BENCHMARK MATRIX */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-3xl bg-white border border-gold-champagne/80 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold-antique font-semibold block">
              Market Benchmark Comparison
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-richBlack mt-1">
              COLLAVIAH vs Conventional Functional RTDs
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {COMPARISON_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-champagne-light/50 border border-gold-champagne/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-gold-antique mb-2">
                      <Icon className="w-4 h-4 text-gold-antique" />
                      <span className="text-[11px] font-mono uppercase font-bold tracking-wider">
                        {item.label}
                      </span>
                    </div>

                    <div className="mt-2">
                      <span className="text-[10px] uppercase font-bold text-leafGreen block mb-0.5">
                        COLLAVIAH Standard
                      </span>
                      <p className="text-xs font-semibold text-richBlack">
                        {item.collaviah}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gold-champagne/30">
                    <span className="text-[10px] uppercase font-bold text-charcoal-muted block mb-0.5">
                      Conventional RTDs
                    </span>
                    <p className="text-[11px] text-charcoal line-through decoration-charcoal-muted/60">
                      {item.conventional}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM ACTION CTA BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/about#brand-film"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-white hover:bg-champagne-light border border-gold-soft/70 text-richBlack text-xs font-sans uppercase font-bold tracking-luxury transition-all shadow-sm hover:scale-[1.02] group"
          >
            <span className="w-6 h-6 rounded-full bg-crimson text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </span>
            <span>Watch Osaka Bio-Fermentation Film</span>
          </Link>

          <Link
            href="/#quote-builder"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-crimson hover:bg-crimson-hover text-white text-xs font-sans uppercase font-bold tracking-luxury transition-all shadow-md hover:scale-[1.02]"
          >
            <span>Request Commercial Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
