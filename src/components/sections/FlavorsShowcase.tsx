"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FLAVORS } from "@/data/flavors";
import { FlavorId } from "@/types";
import { CanMockup } from "@/components/common/CanMockup";
import {
  StrawberryVector,
  LimeSliceVector,
  CranberryVector,
  BlushPetalVector,
  LeafVector,
} from "@/components/common/BotanicalElements";
import { useQuote } from "@/context/QuoteContext";
import { ArrowRight, Plus, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const FlavorsShowcase: React.FC = () => {
  const [activeFlavorId, setActiveFlavorId] = useState<FlavorId>("strawberry-lime");
  const { addItem } = useQuote();

  const flavor = FLAVORS.find((f) => f.id === activeFlavorId) || FLAVORS[0];
  const isStrawberry = activeFlavorId === "strawberry-lime";

  return (
    <section
      id="flavors"
      className={`py-24 transition-colors duration-700 relative overflow-hidden ${
        isStrawberry
          ? "bg-gradient-to-b from-pearl via-[#FDECEF]/60 to-champagne-light"
          : "bg-gradient-to-b from-pearl via-[#F8E9EE]/70 to-champagne-light"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Switcher Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block">
              — THE SIGNATURE COLLECTION —
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-richBlack mt-2">
              Two Exquisite Formulations
            </h2>
            <p className="text-charcoal text-sm sm:text-base mt-2 max-w-xl">
              Botanical harmony crafted for sensory pleasure and cellular beauty. Both available in wholesale packs of 6, 12, and 24 cans.
            </p>
          </div>

          {/* Interactive Flavor Switcher Pill */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white border border-gold-champagne shadow-sm">
            {FLAVORS.map((f) => {
              const active = f.id === activeFlavorId;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFlavorId(f.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-sans uppercase font-bold tracking-luxury transition-all duration-300 ${
                    active
                      ? "bg-crimson text-white shadow-md shadow-crimson/25"
                      : "text-charcoal hover:text-richBlack hover:bg-champagne-light"
                  }`}
                  aria-pressed={active}
                >
                  {f.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* SPLIT SCREEN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: CAN HERO & FLYING FRUIT BURST ANIMATIONS */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            {/* Background Halo */}
            <motion.div
              key={`bg-${activeFlavorId}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 0.8 }}
              className={`absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl pointer-events-none ${
                isStrawberry ? "bg-flavor-strawberry/25" : "bg-flavor-cranberry/25"
              }`}
            />

            {/* FRUIT BURSTS (physics-like flying entrance on flavor switch) */}
            <AnimatePresence mode="wait">
              {isStrawberry ? (
                <motion.div
                  key="strawberry-bursts"
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Top Right Strawberry */}
                  <motion.div
                    className="absolute top-4 right-8 z-10"
                    initial={{ y: -50, scale: 0.4, rotate: -30 }}
                    animate={{ y: 0, scale: 1, rotate: 12 }}
                    transition={{ type: "spring", stiffness: 220, damping: 15 }}
                  >
                    <StrawberryVector className="w-20 h-20 drop-shadow-xl" />
                  </motion.div>

                  {/* Bottom Left Lime Slice */}
                  <motion.div
                    className="absolute bottom-6 left-6 z-10"
                    initial={{ y: 60, scale: 0.3, rotate: 60 }}
                    animate={{ y: 0, scale: 1, rotate: -15 }}
                    transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.08 }}
                  >
                    <LimeSliceVector className="w-20 h-20 drop-shadow-xl" />
                  </motion.div>

                  {/* Floating Blossom Petal */}
                  <motion.div
                    className="absolute top-1/3 left-4 z-10"
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    <BlushPetalVector className="w-10 h-10 rotate-45" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="cranberry-bursts"
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Top Right Cranberries */}
                  <motion.div
                    className="absolute top-6 right-6 z-10"
                    initial={{ y: -60, scale: 0.4, rotate: -20 }}
                    animate={{ y: 0, scale: 1, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 220, damping: 15 }}
                  >
                    <CranberryVector className="w-22 h-22 drop-shadow-xl" />
                  </motion.div>

                  {/* Botanical Leaf Bottom Right */}
                  <motion.div
                    className="absolute bottom-8 right-12 z-10"
                    initial={{ scale: 0.2, rotate: 90 }}
                    animate={{ scale: 1, rotate: -30 }}
                    transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.1 }}
                  >
                    <LeafVector className="w-14 h-14 drop-shadow-md" />
                  </motion.div>

                  {/* Blush Petal Left */}
                  <motion.div
                    className="absolute bottom-16 left-8 z-10"
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.12 }}
                  >
                    <BlushPetalVector className="w-12 h-12 -rotate-12" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CAN MODEL WITH SLIDE IN/OUT ON FLAVOR CHANGE */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlavorId}
                initial={{ x: 70, opacity: 0, rotate: 6 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                exit={{ x: -70, opacity: 0, rotate: -6 }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                className="w-52 sm:w-60 md:w-68 relative z-20"
              >
                <CanMockup
                  flavor={activeFlavorId}
                  isFloating={true}
                  showDroplets={true}
                  glow={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: TASTING PROFILE, INGREDIENTS & WHOLESALE ACTIONS */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlavorId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Badge & Title */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-gold-champagne/30 text-gold-antique border border-gold-antique/20 mb-3">
                    {flavor.badge}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-richBlack">
                    {flavor.name}
                  </h3>
                  <p className="font-serif italic text-crimson text-lg mt-1">
                    {flavor.tagline}
                  </p>
                </div>

                <p className="text-charcoal text-sm sm:text-base leading-relaxed">
                  {flavor.fullDescription}
                </p>

                {/* Tasting Notes Grid */}
                <div className="p-5 rounded-2xl bg-white/80 border border-gold-champagne/60 shadow-sm space-y-3">
                  <h4 className="text-xs font-sans uppercase tracking-luxury text-gold-antique font-bold">
                    Sommelier Tasting Notes
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm text-charcoal">
                    {flavor.tastingNotes.map((note, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Botanicals & Nutrition Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-champagne-light border border-gold-champagne/30 text-center">
                    <span className="text-[10px] uppercase font-sans text-charcoal-muted block">Collagen</span>
                    <span className="font-serif font-bold text-richBlack text-sm sm:text-base">2,500 mg</span>
                  </div>
                  <div className="p-3 rounded-xl bg-champagne-light border border-gold-champagne/30 text-center">
                    <span className="text-[10px] uppercase font-sans text-charcoal-muted block">Sugar</span>
                    <span className="font-serif font-bold text-richBlack text-sm sm:text-base">0 Grams</span>
                  </div>
                  <div className="p-3 rounded-xl bg-champagne-light border border-gold-champagne/30 text-center">
                    <span className="text-[10px] uppercase font-sans text-charcoal-muted block">Calories</span>
                    <span className="font-serif font-bold text-richBlack text-sm sm:text-base">{flavor.nutrition.calories}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-champagne-light border border-gold-champagne/30 text-center">
                    <span className="text-[10px] uppercase font-sans text-charcoal-muted block">Can Size</span>
                    <span className="font-serif font-bold text-richBlack text-sm sm:text-base">250 ml</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => addItem("pack-12", activeFlavorId, 1)}
                    className="px-6 py-3.5 rounded-full bg-crimson hover:bg-crimson-hover text-white text-xs font-sans uppercase font-bold tracking-luxury transition-all shadow-md shadow-crimson/20 flex items-center gap-2 hover:scale-105"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add {flavor.name} (12-Pack) to Quote</span>
                  </button>

                  <Link
                    href={`/products/${flavor.id}`}
                    className="px-6 py-3.5 rounded-full bg-white hover:bg-champagne-light text-richBlack border border-gold-antique/60 text-xs font-sans uppercase font-bold tracking-luxury transition-all flex items-center gap-2"
                  >
                    <span>Full Nutrition & Retail Specs</span>
                    <ArrowRight className="w-4 h-4 text-gold-antique" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

