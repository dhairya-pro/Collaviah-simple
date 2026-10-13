"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CanMockup } from "@/components/common/CanMockup";
import { Sparkles, Leaf, Ban, Flame, Check, ShieldCheck } from "lucide-react";

interface FeatureCallout {
  id: string;
  title: string;
  lead: string;
  description: string;
  icon: React.ReactNode;
  position: "top-left" | "bottom-left" | "top-right" | "bottom-right";
  linePath: string;
}

const FEATURES: FeatureCallout[] = [
  {
    id: "vegan-collagen",
    title: "Bio-Fermented Vegan Collagen",
    lead: "2,500mg Japan-Engineered Peptides",
    description:
      "Synthesized via pharmaceutical plant-fermentation biotechnology in Osaka. Replicates the human Type I & III collagen amino matrix with zero animal waste, zero marine byproducts, and zero fishy odor.",
    icon: <Leaf className="w-5 h-5 text-leafGreen" />,
    position: "top-left",
    linePath: "M 310 160 C 400 160, 420 250, 460 260",
  },
  {
    id: "monk-fruit",
    title: "Monk Fruit Sweetener",
    lead: "Standardized Mogroside V Extract",
    description:
      "Sweetened exclusively with rare organic Luo Han Guo extract. Imparts a luxurious, rounded fruit mouthfeel with zero glycemic index, zero insulin spike, and none of the metallic bitterness of stevia.",
    icon: <Sparkles className="w-5 h-5 text-gold-antique" />,
    position: "bottom-left",
    linePath: "M 310 480 C 400 480, 420 380, 460 360",
  },
  {
    id: "zero-sugar",
    title: "Absolute Zero Sugar",
    lead: "0g Sugar • Fasting & Keto Safe",
    description:
      "Zero cane sugar, zero corn syrups, and zero disguised fruit concentrates. Fits seamlessly into intermittent fasting windows, diabetic diets, and metabolic longevity regimens.",
    icon: <Ban className="w-5 h-5 text-crimson" />,
    position: "top-right",
    linePath: "M 690 160 C 600 160, 580 250, 540 260",
  },
  {
    id: "low-calories",
    title: "Ultra Low Calorie Hydration",
    lead: "Under 15 kcal per 250ml Can",
    description:
      "Engineered as a clean daily beauty ritual. Delivers concentrated glycine, proline, and hydroxyproline precursors without packing on unwanted carbohydrates or calories.",
    icon: <Flame className="w-5 h-5 text-amber-600" />,
    position: "bottom-right",
    linePath: "M 690 480 C 600 480, 580 380, 540 360",
  },
];

export const WhyCollaviah: React.FC = () => {
  const [activeFeatureId, setActiveFeatureId] = useState<string>("vegan-collagen");

  const activeFeature = FEATURES.find((f) => f.id === activeFeatureId) || FEATURES[0];

  return (
    <section
      id="why-collaviah"
      className="py-28 bg-gradient-to-b from-pearl via-champagne-light/60 to-pearl relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block">
            — CELLULAR HYDRATION & BIO-INNOVATION —
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-richBlack mt-2">
            Why COLLAVIAH Leads the Category
          </h2>
          <p className="text-charcoal text-sm sm:text-base mt-3 leading-relaxed">
            Every element inside our 250ml slim can was engineered to redefine functional beauty beverages—bridging pure Japanese biotechnology with clean-label transparency. Click any callout to explore the science.
          </p>
        </div>

        {/* DESKTOP PINNED INTERACTIVE CIRCUIT STAGE */}
        <div className="hidden lg:block relative min-h-[660px] w-full max-w-5xl mx-auto">
          {/* Animated SVG Circuit Connector Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1000 640"
            fill="none"
          >
            <defs>
              <linearGradient id="activeGoldCircuit" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B5124A" />
                <stop offset="50%" stopColor="#D4A94F" />
                <stop offset="100%" stopColor="#B07A2E" />
              </linearGradient>
              <linearGradient id="idleGoldCircuit" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E5CCA5" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#B07A2E" stopOpacity="0.25" />
              </linearGradient>
            </defs>

            {FEATURES.map((feat) => {
              const isActive = feat.id === activeFeatureId;

              return (
                <g key={feat.id}>
                  {/* Base Track Line */}
                  <path
                    d={feat.linePath}
                    stroke={isActive ? "url(#activeGoldCircuit)" : "url(#idleGoldCircuit)"}
                    strokeWidth={isActive ? "2.5" : "1.2"}
                    strokeDasharray={isActive ? "none" : "4 4"}
                    className="transition-colors duration-500"
                  />

                  {/* Pulsing Light Bead when Active */}
                  {isActive && (
                    <motion.circle
                      r="4"
                      fill="#D4A94F"
                      filter="drop-shadow(0 0 6px #D4A94F)"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                      style={{
                        offsetPath: `path('${feat.linePath}')`,
                      }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* CENTER CAN STAGE */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            {/* Luminous Pulsing Pedestal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-88 h-88 rounded-full bg-gradient-to-tr from-blush via-gold-champagne/30 to-champagne/20 blur-3xl pointer-events-none" />

            <div className="w-56 relative transition-transform duration-500 hover:scale-105">
              <CanMockup
                flavor="strawberry-lime"
                isFloating={false}
                showDroplets={true}
                glow={true}
                interactiveTilt={true}
              />
            </div>

            <div className="mt-3 text-center">
              <span className="px-3 py-1 rounded-full bg-white/90 border border-gold-soft/50 text-[10px] font-mono tracking-widest text-gold-antique uppercase font-bold shadow-sm">
                FORMULATED IN OSAKA, JAPAN
              </span>
            </div>
          </div>

          {/* 4 INTERACTIVE CALLOUT CARDS */}
          {FEATURES.map((feat) => {
            const isActive = feat.id === activeFeatureId;
            const isTop = feat.position.startsWith("top");
            const isLeft = feat.position.endsWith("left");

            return (
              <motion.div
                key={feat.id}
                onClick={() => setActiveFeatureId(feat.id)}
                className={`absolute w-76 p-6 rounded-3xl cursor-pointer transition-all duration-300 z-20 select-none ${
                  isTop ? "top-4" : "bottom-4"
                } ${isLeft ? "left-0" : "right-0"} ${
                  isActive
                    ? "bg-white border-2 border-crimson shadow-2xl scale-[1.03] ring-4 ring-crimson/10"
                    : "bg-white/85 backdrop-blur-md border border-gold-champagne hover:border-gold-soft hover:bg-white shadow-md hover:scale-[1.01]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2.5 rounded-2xl transition-colors ${
                      isActive ? "bg-crimson/10 text-crimson" : "bg-champagne-light"
                    }`}
                  >
                    {feat.icon}
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase font-bold tracking-wider ${
                      isActive ? "text-crimson" : "text-gold-antique"
                    }`}
                  >
                    {feat.lead}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-richBlack">
                  {feat.title}
                </h3>

                <p className="text-xs text-charcoal/80 mt-2 leading-relaxed">
                  {feat.description}
                </p>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 pt-3 border-t border-gold-champagne/40 flex items-center gap-1.5 text-[11px] font-mono text-leafGreen font-bold"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Verified Clean Formulation</span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE / TABLET RESPONSIVE CARDS */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          <div className="w-52">
            <CanMockup flavor="strawberry-lime" isFloating={true} showDroplets={true} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {FEATURES.map((feat) => {
              const isActive = feat.id === activeFeatureId;

              return (
                <div
                  key={feat.id}
                  onClick={() => setActiveFeatureId(feat.id)}
                  className={`p-5 rounded-2xl border transition-all ${
                    isActive
                      ? "bg-white border-crimson shadow-lg ring-2 ring-crimson/20"
                      : "bg-white border-gold-champagne/70"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-champagne-light">{feat.icon}</div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-richBlack">
                        {feat.title}
                      </h3>
                      <span className="text-[10px] font-mono text-gold-antique font-semibold">
                        {feat.lead}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-charcoal leading-relaxed">{feat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
