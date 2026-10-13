"use client";

import React, { useState } from "react";
import { WHOLESALE_PACKS } from "@/data/packs";
import { WholesalePack, FlavorId } from "@/types";
import { CartonMockup } from "@/components/common/CartonMockup";
import { useQuote } from "@/context/QuoteContext";
import { Plus, Check, ShoppingBag, Sparkles, Layers, Percent } from "lucide-react";
import { motion } from "framer-motion";

export const WholesalePacksSection: React.FC = () => {
  const { addItem } = useQuote();

  // State to track selected flavor option per pack
  const [selectedFlavors, setSelectedFlavors] = useState<Record<string, FlavorId | "mixed">>({
    "pack-6": "strawberry-lime",
    "pack-12": "mixed",
    "pack-24": "mixed",
  });

  const [hoveredPack, setHoveredPack] = useState<string | null>(null);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const handleFlavorChange = (packId: string, flavor: FlavorId | "mixed") => {
    setSelectedFlavors((prev) => ({ ...prev, [packId]: flavor }));
  };

  const handleAddToCart = (pack: WholesalePack) => {
    const flavor = selectedFlavors[pack.id] || "mixed";
    addItem(pack.id, flavor, 1);
    setAddedNotice(pack.id);
    setTimeout(() => setAddedNotice(null), 1800);
  };

  return (
    <section id="wholesale-packs" className="py-28 bg-pearl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block">
            — COMMERCIAL PACKAGING SPECIFICATIONS —
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-richBlack mt-2">
            Wholesale Carton Formats
          </h2>
          <p className="text-charcoal text-sm sm:text-base mt-3 leading-relaxed">
            Engineered for optimal shelf presentation, refrigerated retail coolers, and high-density pallet transit. Hover to unbox each carton format and inspect can loading.
          </p>
        </div>

        {/* 3 INTERACTIVE PACK CARDS GRID WITH 3D PERSPECTIVE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {WHOLESALE_PACKS.map((pack) => {
            const currentFlavor = selectedFlavors[pack.id] || "strawberry-lime";
            const isHovered = hoveredPack === pack.id;
            const isJustAdded = addedNotice === pack.id;

            return (
              <motion.div
                key={pack.id}
                onMouseEnter={() => setHoveredPack(pack.id)}
                onMouseLeave={() => setHoveredPack(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-white border transition-all duration-300 shadow-sm hover:shadow-2xl ${
                  pack.id === "pack-12"
                    ? "border-crimson/50 ring-2 ring-crimson/15 shadow-md"
                    : "border-gold-champagne/80 hover:border-gold-soft"
                }`}
              >
                {/* Popularity Badge for 12-pack */}
                {pack.id === "pack-12" && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-crimson text-white text-[10px] font-sans uppercase font-bold tracking-luxury shadow-md flex items-center gap-1.5 z-20">
                    <Sparkles className="w-3 h-3 text-gold-light" />
                    <span>Most Popular Retail Case</span>
                  </div>
                )}

                {/* Top Section Info */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gold-antique font-semibold">
                        {pack.paletteTier}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-richBlack mt-0.5">
                        {pack.name}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-champagne-light text-charcoal border border-gold-champagne shadow-sm">
                      {pack.size} Cans
                    </span>
                  </div>

                  <p className="text-xs text-charcoal font-medium mb-5 min-h-[36px]">
                    {pack.idealFor}
                  </p>

                  {/* INTERACTIVE CARTON MOCKUP WITH ANIMATED FILLING GRID */}
                  <div className="mb-6">
                    <CartonMockup
                      pack={pack}
                      activeFlavor={currentFlavor}
                      isHovered={isHovered}
                    />
                  </div>

                  {/* Flavor Configuration Selector */}
                  <div className="mb-5 space-y-2">
                    <label className="text-[11px] font-sans uppercase tracking-luxury text-charcoal-muted block">
                      Select Flavor Configuration:
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-champagne-light/70 border border-gold-champagne/40">
                      <button
                        type="button"
                        onClick={() => handleFlavorChange(pack.id, "strawberry-lime")}
                        className={`py-1.5 px-2 rounded-lg text-[10px] font-semibold transition-all ${
                          currentFlavor === "strawberry-lime"
                            ? "bg-white text-crimson shadow-sm"
                            : "text-charcoal hover:text-richBlack"
                        }`}
                      >
                        Strawberry
                      </button>
                      <button
                        type="button"
                        onClick={() => handleFlavorChange(pack.id, "cranberry")}
                        className={`py-1.5 px-2 rounded-lg text-[10px] font-semibold transition-all ${
                          currentFlavor === "cranberry"
                            ? "bg-white text-crimson shadow-sm"
                            : "text-charcoal hover:text-richBlack"
                        }`}
                      >
                        Cranberry
                      </button>
                      <button
                        type="button"
                        onClick={() => handleFlavorChange(pack.id, "mixed")}
                        className={`py-1.5 px-2 rounded-lg text-[10px] font-semibold transition-all ${
                          currentFlavor === "mixed"
                            ? "bg-white text-crimson shadow-sm"
                            : "text-charcoal hover:text-richBlack"
                        }`}
                      >
                        50/50 Mix
                      </button>
                    </div>
                  </div>

                  {/* Tier Discounts Matrix */}
                  <div className="mb-5 p-3 rounded-xl bg-champagne-light/40 border border-gold-champagne/30 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-muted flex items-center gap-1 font-semibold">
                      <Percent className="w-3 h-3 text-gold-antique" />
                      <span>Volume Tier Schedule:</span>
                    </span>
                    <div className="flex justify-between text-[11px] font-mono text-charcoal">
                      {pack.tierDiscounts.map((tier, idx) => (
                        <span key={idx} className="bg-white px-2 py-0.5 rounded border border-gold-champagne/40">
                          {tier.minCartons}+ cs: <strong className="text-leafGreen">{tier.discountPercent > 0 ? `-${tier.discountPercent}%` : "Base"}</strong>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specifications Matrix */}
                  <div className="space-y-2 py-3 border-y border-gold-champagne/40 text-xs text-charcoal mb-6">
                    <div className="flex justify-between">
                      <span className="text-charcoal-muted">Minimum Order (MOQ):</span>
                      <span className="font-mono font-bold text-richBlack">{pack.moq} Cartons</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-muted">Case Gross Weight:</span>
                      <span className="font-mono text-richBlack">{pack.grossWeight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-muted">Wholesale Rate Tier:</span>
                      <span className="text-leafGreen font-semibold">Commercial Scale</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => handleAddToCart(pack)}
                    className={`w-full py-3.5 px-4 rounded-full text-xs font-sans uppercase font-bold tracking-luxury transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-magnetic ${
                      isJustAdded
                        ? "bg-leafGreen text-white"
                        : "bg-crimson hover:bg-crimson-hover text-white shadow-crimson/20 hover:scale-[1.02]"
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Added to Quote Cart</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add {pack.name} to Quote</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-charcoal-muted font-mono">
                    Tier discounts automatically applied on &gt; 15 cartons
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
