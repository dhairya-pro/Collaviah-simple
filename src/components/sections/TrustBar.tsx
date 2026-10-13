"use client";

import React from "react";
import { motion } from "framer-motion";

interface TrustBadge {
  title: string;
  subtitle: string;
  detail: string;
  iconPath: string;
  secondaryPath?: string;
}

const TRUST_BADGES: TrustBadge[] = [
  {
    title: "Japan-Based Collagen",
    subtitle: "2,500mg Peptides",
    detail: "Precision plant fermentation",
    iconPath: "M12 2L15 8.5L22 9.5L17 14.5L18.5 21.5L12 18L5.5 21.5L7 14.5L2 9.5L9 8.5L12 2Z",
  },
  {
    title: "100% Certified Vegan",
    subtitle: "Cruelty-Free Matrix",
    detail: "Zero animal or marine source",
    iconPath: "M12 22C12 22 20 18 20 11C20 6.5 16.4 3 12 3C7.6 3 4 6.5 4 11C4 18 12 22 12 22Z",
    secondaryPath: "M12 3V22",
  },
  {
    title: "Zero Sugar",
    subtitle: "0g Glycemic Impact",
    detail: "Clean metabolic profile",
    iconPath: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
    secondaryPath: "M4.93 4.93L19.07 19.07",
  },
  {
    title: "Monk Fruit Sweetened",
    subtitle: "Luo Han Guo Extract",
    detail: "Pure botanical Mogroside V",
    iconPath: "M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z",
    secondaryPath: "M12 4V2",
  },
  {
    title: "Low Calories",
    subtitle: "< 15 kcal / 250ml",
    detail: "Guilt-free beauty hydration",
    iconPath: "M8.5 14.5C8.5 16.43 10.07 18 12 18C13.93 18 15.5 16.43 15.5 14.5C15.5 12.57 12 8 12 8C12 8 8.5 12.57 8.5 14.5Z",
  },
];

export const TrustBar: React.FC = () => {
  return (
    <section id="trust" className="py-12 bg-pearl border-y border-gold-champagne/50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Section Tag */}
        <div className="text-center mb-8">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block">
            — THE COLLAVIAH STANDARD —
          </span>
          <p className="text-xs text-charcoal font-medium mt-1">
            Formulated for uncompromising clean-label standards across luxury retail and hospitality
          </p>
        </div>

        {/* Badge Grid with Staggered Stroke Draw Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {TRUST_BADGES.map((badge, idx) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              className="group flex flex-col items-center text-center p-4 rounded-2xl bg-champagne-light/50 border border-gold-champagne/40 hover:border-gold-soft hover:bg-champagne/30 transition-all duration-300"
            >
              {/* Drawn SVG Stroke Icon Badge */}
              <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gold-soft/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-crimson group-hover:text-gold-antique transition-colors"
                >
                  <motion.path
                    d={badge.iconPath}
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.15 + 0.2 }}
                  />
                  {badge.secondaryPath && (
                    <motion.path
                      d={badge.secondaryPath}
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.15 + 0.5 }}
                    />
                  )}
                </svg>
              </div>

              {/* Title & Subtitles */}
              <h3 className="font-serif font-bold text-richBlack text-sm sm:text-base group-hover:text-crimson transition-colors">
                {badge.title}
              </h3>
              <span className="text-[11px] font-mono font-semibold text-gold-antique mt-0.5">
                {badge.subtitle}
              </span>
              <p className="text-[11px] text-charcoal/70 mt-1 leading-snug">
                {badge.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

