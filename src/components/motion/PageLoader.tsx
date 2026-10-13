"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user already saw loader this session to keep UX snappy
    const hasSeen = sessionStorage.getItem("collaviah_intro_seen");
    if (hasSeen) {
      setIsLoading(false);
      return;
    }

    // Snappy, swift intro reveal (450ms) so website loads instantly without sluggish delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("collaviah_intro_seen", "true");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Top Layer: Raspberry Crimson into Champagne gradient curtain */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#7A0D32] via-[#B5124A] to-[#F6EDE4]" />

          {/* Center Brand Reveal */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
            >
              COLLAVIAH
            </motion.h1>

            <motion.p
              className="font-script text-white/90 text-2xl sm:text-3xl mt-1 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              Glow from Within
            </motion.p>

            <div className="mt-3 flex items-center gap-3 text-gold-champagne text-[10px] font-sans tracking-luxury uppercase">
              <span>Nourish • Rejuvenate • Glow</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
