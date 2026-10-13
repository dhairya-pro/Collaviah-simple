"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/data/packs";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PARTNER_LOGOS = [
  "Lumina Gourmet Markets",
  "Maison de Beauté Med-Spas",
  "Apex Wellness Distribution",
  "Kyoto Botanics Co.",
  "Harajuku Matcha Collective",
  "Ginza Esthetics Lounge",
  "The Hanshin Luxury Suites",
];

export const SocialProofSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-pearl via-champagne-light/40 to-pearl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* PARTNER LOGO TICKER */}
        <div className="mb-20 text-center">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block mb-4">
            — TRUSTED BY BOUTIQUE VENUES & DISTRIBUTORS (PLACEHOLDER) —
          </span>

          <div className="py-4 border-y border-gold-champagne/40 overflow-hidden whitespace-nowrap">
            <div className="inline-flex gap-12 animate-marquee items-center text-xs font-serif uppercase tracking-[0.2em] text-charcoal/70">
              {PARTNER_LOGOS.concat(PARTNER_LOGOS).map((logo, i) => (
                <span key={i} className="flex items-center gap-12">
                  <span>{logo}</span>
                  <span className="text-gold-soft">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* TESTIMONIAL CAROUSEL */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-richBlack">
              Trade Partner Feedback
            </h2>
            <p className="text-xs font-mono text-gold-antique mt-1">
              Commercial accounts on retail sell-through and margin stability
            </p>
          </div>

          <div className="relative p-8 sm:p-12 rounded-3xl bg-white border border-gold-champagne shadow-xl">
            <Quote className="w-12 h-12 text-gold-champagne/40 absolute top-6 left-6 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6 text-center sm:text-left relative z-10"
              >
                {/* 5 Stars */}
                <div className="flex items-center justify-center sm:justify-start gap-1 text-gold-soft">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <blockquote className="font-serif text-lg sm:text-2xl text-richBlack leading-relaxed italic">
                  "{currentTestimonial.quote}"
                </blockquote>

                <div className="pt-4 border-t border-gold-champagne/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-serif font-bold text-base text-richBlack">
                      {currentTestimonial.author}
                    </h4>
                    <p className="text-xs text-charcoal">
                      {currentTestimonial.title} • <span className="font-semibold text-crimson">{currentTestimonial.company}</span>
                    </p>
                  </div>

                  <span className="text-xs font-mono text-gold-antique">
                    {currentTestimonial.location}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-gold-champagne/30">
              <button
                onClick={prev}
                className="p-2.5 rounded-full border border-gold-champagne hover:border-gold-antique text-charcoal hover:text-richBlack transition bg-champagne-light/50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentIndex ? "w-6 bg-crimson" : "w-2 bg-gold-champagne"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2.5 rounded-full border border-gold-champagne hover:border-gold-antique text-charcoal hover:text-richBlack transition bg-champagne-light/50"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

