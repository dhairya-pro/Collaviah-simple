"use client";

import React, { useState } from "react";
import { FAQ_LIST } from "@/data/packs";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Ordering & MOQ", "Product & Ingredients", "Shipping & Storage", "Samples"];

  const filteredFaqs =
    selectedCategory === "All"
      ? FAQ_LIST
      : FAQ_LIST.filter((item) => item.category === selectedCategory);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-pearl relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block">
            — WHOLESALE KNOWLEDGE BASE —
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-richBlack mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-charcoal text-sm sm:text-base mt-2">
            Answers for commercial procurement managers, retail buyers, and beverage distributors.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-richBlack text-white"
                    : "bg-champagne-light text-charcoal hover:bg-champagne hover:text-richBlack border border-gold-champagne/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-gold-champagne/70 bg-white transition-all overflow-hidden shadow-sm hover:border-gold-soft"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-richBlack">
                    {faq.question}
                  </span>

                  {/* Morphing Plus to Minus Icon */}
                  <div
                    className={`w-8 h-8 rounded-full border border-gold-champagne flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-crimson text-white border-crimson rotate-180" : "text-charcoal hover:bg-champagne-light"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-charcoal text-xs sm:text-sm leading-relaxed border-t border-gold-champagne/20">
                        <p>{faq.answer}</p>
                        <span className="inline-block mt-3 text-[10px] font-mono text-gold-antique uppercase tracking-wider">
                          Topic: {faq.category}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

