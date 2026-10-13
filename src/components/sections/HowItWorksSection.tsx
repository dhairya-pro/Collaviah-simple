"use client";

import React from "react";
import { WHOLESALE_TIMELINE } from "@/data/packs";
import { motion } from "framer-motion";
import { FileText, Clock, Package, CreditCard, Truck } from "lucide-react";

const stepIcons = [
  <FileText key="1" className="w-5 h-5 text-crimson" />,
  <Clock key="2" className="w-5 h-5 text-gold-antique" />,
  <Package key="3" className="w-5 h-5 text-leafGreen" />,
  <CreditCard key="4" className="w-5 h-5 text-crimson" />,
  <Truck key="5" className="w-5 h-5 text-gold-antique" />,
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-pearl relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block">
            — STREAMLINED B2B ONBOARDING —
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-richBlack mt-2">
            How Wholesale Works
          </h2>
          <p className="text-charcoal text-sm sm:text-base mt-3 leading-relaxed">
            From your initial carton configuration to scheduled warehouse freight delivery, we make commercial beverage procurement effortless.
          </p>
        </div>

        {/* 5-STEP TIMELINE WITH DRAWN GOLD LINE */}
        <div className="relative">
          {/* Vertical Drawn Gold Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gold-champagne/40">
            <motion.div
              className="w-full bg-gradient-to-b from-crimson via-gold-soft to-gold-antique origin-top"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {WHOLESALE_TIMELINE.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: idx * 0.15 }}
                    className="w-full md:w-[45%] p-6 sm:p-7 rounded-3xl bg-white border border-gold-champagne shadow-md hover:border-gold-soft transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-crimson px-2.5 py-0.5 rounded-full bg-crimson/10">
                        STEP {step.step}
                      </span>
                      <span className="text-[11px] font-mono text-gold-antique font-semibold">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-richBlack">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal/80 mt-2 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-gold-champagne/30 text-[11px] font-mono text-leafGreen font-medium flex items-center gap-1.5">
                      <span>✓ {step.highlight}</span>
                    </div>
                  </motion.div>

                  {/* Center Node on Timeline */}
                  <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-gold-soft shadow-lg shadow-gold-soft/20 flex-shrink-0">
                    {stepIcons[idx]}
                  </div>

                  {/* Empty balancing spacer for desktop */}
                  <div className="hidden md:block w-full md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

