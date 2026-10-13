"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";

export const FinalCTASection: React.FC = () => {
  const handlePetalHover = () => {
    // Subtle mini-burst of petals on button hover
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#F6D9DD", "#D4A94F", "#FFFFFF"],
      disableForReducedMotion: true,
    });
  };

  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "819012345678";

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-r from-[#7A0D32] via-[#B5124A] to-[#96103D] text-white overflow-hidden">
      {/* Decorative ambient radial gold glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-soft/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Script Accent Tagline */}
        <span className="font-script text-3xl sm:text-4xl md:text-5xl text-gold-champagne block mb-2">
          Glow from Within
        </span>

        {/* Main Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Ready to Elevate Your Beverage Curation?
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-light">
          Partner with COLLAVIAH today. Enjoy generous commercial margins, flexible 50/50 flavor splits, dedicated account support, and reliable cold-chain fulfillment.
        </p>

        {/* Interactive Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/wholesale#quote-builder"
            onMouseEnter={handlePetalHover}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-champagne text-richBlack text-xs sm:text-sm font-sans uppercase font-bold tracking-luxury transition-all duration-300 shadow-2xl hover:scale-105 flex items-center justify-center gap-3 cursor-magnetic group"
          >
            <Sparkles className="w-4 h-4 text-crimson group-hover:rotate-12 transition-transform" />
            <span>Request Wholesale Quote</span>
            <ArrowRight className="w-4 h-4 text-crimson" />
          </Link>

          <a
            href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
              "Hello COLLAVIAH Wholesale team, I would like to enquire about stocking your 250ml cans in our business."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-sans uppercase font-bold tracking-luxury transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Speak with Trade Desk</span>
          </a>
        </div>

        {/* Reassurance Footnote */}
        <p className="mt-8 text-[11px] font-mono text-white/60">
          MOQ 5–10 cartons • Direct factory pricing • Commercial credit terms available
        </p>
      </div>
    </section>
  );
};

