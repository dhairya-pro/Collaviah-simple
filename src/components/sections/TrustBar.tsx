"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Leaf, Sparkles, CheckCircle2 } from "lucide-react";

interface BigMetricBox {
  metric: string;
  title: string;
  subtitle: string;
  detail: string;
}

const METRIC_BOXES: BigMetricBox[] = [
  {
    metric: "2,500mg",
    title: "Bio-Fermented Collagen",
    subtitle: "Made in Osaka, Japan",
    detail: "Plant-derived peptides matching Type I & III amino acid profiles without animal sourcing.",
  },
  {
    metric: "0g",
    title: "Sugar Added",
    subtitle: "Pure Monk Fruit Sweetened",
    detail: "Sweetened exclusively with organic Luo Han Guo extract. Clean flavor with zero sugar.",
  },
  {
    metric: "< 15 kcal",
    title: "Light & Functional",
    subtitle: "250ml Slim Can",
    detail: "Clean functional hydration engineered for upscale retail shelves, cafes, and hospitality.",
  },
];

export const TrustBar: React.FC = () => {
  return (
    <section id="trust" className="py-16 bg-pearl border-y border-gold-champagne/50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Tagline */}
        <div className="text-center mb-10">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-bold block">
            — THE COLLAVIAH STANDARD —
          </span>
          <p className="text-sm text-charcoal font-medium mt-1">
            Engineered in Osaka for clean-label standards across luxury retail and hospitality
          </p>
        </div>

        {/* 3 Bold Big Number Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {METRIC_BOXES.map((box, idx) => (
            <motion.div
              key={box.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="p-8 rounded-3xl bg-white border border-gold-champagne/70 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between group hover:border-gold-soft"
            >
              <div>
                <span className="font-serif text-4xl sm:text-5xl font-extrabold text-richBlack block tracking-tight group-hover:text-crimson transition-colors">
                  {box.metric}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-gold-antique font-bold block mt-2">
                  {box.subtitle}
                </span>
                <h3 className="font-serif font-bold text-lg text-richBlack mt-1">
                  {box.title}
                </h3>
              </div>
              <p className="text-xs text-charcoal/80 mt-3 leading-relaxed">
                {box.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certification Logos & Verification Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-champagne-light/70 border border-gold-champagne/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-sans font-medium text-richBlack">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-leafGreen/15 border border-leafGreen/40 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-leafGreen" />
            </div>
            <span><strong>Certified Vegan</strong> (100% Plant Sourced)</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gold-antique/15 border border-gold-antique/40 flex items-center justify-center">
              <Award className="w-4 h-4 text-gold-antique" />
            </div>
            <span><strong>ISO 22000 & HACCP</strong> Certified Facility</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-crimson/15 border border-crimson/40 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-crimson" />
            </div>
            <span><strong>Non-GMO</strong> • Clean Label Formulation</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-richBlack/10 border border-richBlack/20 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-richBlack" />
            </div>
            <span><strong>100% Recyclable</strong> Aluminum Slim Cans</span>
          </div>
        </div>

      </div>
    </section>
  );
};
