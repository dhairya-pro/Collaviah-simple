"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { CanMockup } from "@/components/common/CanMockup";
import {
  StrawberryVector,
  LimeSliceVector,
  LemonLimeVector,
  BlushPetalVector,
  LeafVector,
  WaterDropletVector,
} from "@/components/common/BotanicalElements";
import {
  ArrowRight,
  Download,
  Sparkles,
  Volume2,
  VolumeX,
  Package,
  Layers,
  Globe,
  Clock,
} from "lucide-react";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioNode | null>(null);
  const { scrollY } = useScroll();

  // Scroll transformations - hardware accelerated
  const canScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const canY = useTransform(scrollY, [0, 600], [0, 50]);
  const bgOpacity = useTransform(scrollY, [0, 600], [0, 0.35]);

  // High-performance Motion Values
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springX = useSpring(rawMouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(rawMouseY, { stiffness: 120, damping: 25 });

  // Transforms for parallax elements
  const limeX = useTransform(springX, (v) => v * -1.8);
  const limeY = useTransform(springY, (v) => v * -1.8);

  const strawX = useTransform(springX, (v) => v * 1.6);
  const strawY = useTransform(springY, (v) => v * 1.6);

  const lemonX = useTransform(springX, (v) => v * 1.2);
  const lemonY = useTransform(springY, (v) => v * 1.2);

  const petalX = useTransform(springX, (v) => v * -1.3);
  const petalY = useTransform(springY, (v) => v * -1.3);

  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        rawMouseX.set((e.clientX - innerWidth / 2) / 28);
        rawMouseY.set((e.clientY - innerHeight / 2) / 28);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [rawMouseX, rawMouseY]);

  // Web Audio API Effervescent Fizz Synthesis (Manual click only, never autoplay)
  const toggleFizzAudio = () => {
    if (isAudioPlaying) {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      setIsAudioPlaying(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        data[i] = (b0 + b1 + b2) * 0.035;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = buffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.setValueAtTime(4500, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.2, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      whiteNoise.start();
      audioSourceRef.current = whiteNoise;
      setIsAudioPlaying(true);
    } catch (err) {
      console.warn("Audio Context init prevented by browser policy", err);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-champagne-light via-champagne to-[#F7E7EC] pt-24 pb-16"
    >
      {/* Dynamic Background Tint Morph Overlay on Scroll */}
      <motion.div
        className="absolute inset-0 bg-blush pointer-events-none"
        style={{ opacity: bgOpacity }}
      />

      {/* GIANT EDITORIAL WORDMARK */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="font-serif text-[18vw] font-black text-richBlack/[0.045] leading-none tracking-tight whitespace-nowrap text-center">
          COLLAVIAH
        </h1>
      </div>

      {/* PARALLAX BOTANICALS */}
      <motion.div
        className="absolute top-[14%] right-[6%] md:right-[10%] z-20 pointer-events-none hidden sm:block will-change-transform"
        style={{ x: limeX, y: limeY }}
      >
        <LimeSliceVector className="w-16 h-16 md:w-22 md:h-22 drop-shadow-xl rotate-45" />
        <BlushPetalVector className="w-7 h-7 absolute -top-2 -left-2 rotate-12 opacity-90" />
      </motion.div>

      <motion.div
        className="absolute top-[16%] left-[6%] md:left-[10%] z-20 pointer-events-none hidden sm:block will-change-transform"
        style={{ x: strawX, y: strawY }}
      >
        <StrawberryVector className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl -rotate-12" />
        <WaterDropletVector className="w-5 h-5 absolute -bottom-2 -right-2 drop-shadow-md" />
      </motion.div>

      <motion.div
        className="absolute bottom-[22%] left-[6%] md:left-[12%] z-10 pointer-events-none hidden sm:block will-change-transform"
        style={{ x: lemonX, y: lemonY }}
      >
        <LemonLimeVector className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg rotate-12" />
        <LeafVector className="w-8 h-8 absolute -top-2 -right-2 -rotate-45 opacity-80" />
      </motion.div>

      <motion.div
        className="absolute bottom-[24%] right-[6%] md:right-[14%] z-10 pointer-events-none hidden sm:block will-change-transform"
        style={{ x: petalX, y: petalY }}
      >
        <BlushPetalVector className="w-10 h-10 rotate-45 drop-shadow-md" />
        <LeafVector className="w-7 h-7 absolute -bottom-2 -left-1 rotate-90 opacity-60" />
      </motion.div>

      {/* MAIN CENTER CONTENT HERO */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20 flex flex-col items-center text-center">
        
        {/* Top Badges & Audio Toggle */}
        <div className="flex items-center gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gold-soft/50 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-soft" />
            <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] text-richBlack font-bold">
              Made in Osaka • 5,000mg Plant Collagen • 250ml Slim Cans
            </span>
          </div>

          {/* Effervescent Carbonation Sound Button with Speaker Icon (No autoplay) */}
          <button
            onClick={toggleFizzAudio}
            className={`px-3 py-1.5 rounded-full border text-xs transition-all shadow-sm flex items-center gap-1.5 ${
              isAudioPlaying
                ? "bg-crimson text-white border-crimson shadow-crimson/25"
                : "bg-white/90 hover:bg-white text-charcoal border-gold-champagne/60"
            }`}
            aria-label="Toggle chilled effervescent sound"
            title="Listen to the sound of chilled botanical effervescence"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
                <span className="text-[10px] font-mono font-medium">Fizzing</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-charcoal" />
                <span className="text-[10px] font-mono font-medium">Sound</span>
              </>
            )}
          </button>
        </div>

        {/* ONE Punchy Slogan / Headline for Shop & Business Owners */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-richBlack max-w-4xl tracking-tight leading-[1.12]">
          Premium Vegan Collagen Beverages for Retailers & Hospitality
        </h1>

        {/* Price Range Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gold-antique/50 text-xs sm:text-sm font-mono font-bold text-richBlack my-4 shadow-sm">
          <span>From $14.50 / carton ($2.05–$2.45 / can)</span>
          <span className="text-gold-antique">•</span>
          <span className="text-leafGreen">Direct Case Orders</span>
        </div>

        {/* Plain Fact Subhead */}
        <p className="text-charcoal text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal">
          5,000mg bio-fermented collagen per 250ml slim can. Zero sugar, monk fruit sweetness, and 12-month ambient shelf life. Made in Osaka, shipping worldwide in cartons of 6, 12, and 24.
        </p>

        {/* DUAL CANS HERO IMAGE (SHOWS BOTH FLAVORS TOGETHER) */}
        <motion.div
          style={{ scale: canScale, y: canY }}
          className="my-6 sm:my-8 relative flex items-center justify-center will-change-transform"
        >
          <div className="flex items-center justify-center gap-4 sm:gap-10 md:gap-14">
            
            {/* Can 1: Strawberry Lime */}
            <div className="flex flex-col items-center group">
              <div className="w-36 sm:w-48 md:w-56 relative -rotate-3 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105">
                <CanMockup
                  flavor="strawberry-lime"
                  isFloating={true}
                  priority={true}
                  glow={true}
                  interactiveTilt={false}
                />
              </div>
              <span className="mt-3 px-3 py-1 rounded-full bg-white/90 border border-crimson/30 text-[10px] sm:text-xs font-mono font-bold text-crimson shadow-sm">
                🍓 Strawberry Lime • 250ml
              </span>
            </div>

            {/* Can 2: Lemon Lime */}
            <div className="flex flex-col items-center group">
              <div className="w-36 sm:w-48 md:w-56 relative rotate-3 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105">
                <CanMockup
                  flavor="lemon-lime"
                  isFloating={true}
                  priority={true}
                  glow={true}
                  interactiveTilt={false}
                />
              </div>
              <span className="mt-3 px-3 py-1 rounded-full bg-white/90 border border-[#C8B400]/40 text-[10px] sm:text-xs font-mono font-bold text-[#8A7B00] shadow-sm">
                🍋 Lemon Lime • 250ml
              </span>
            </div>

          </div>
        </motion.div>

        {/* CTAs: Quote = Solid, Catalogue = Outline */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <Link
            href="/#quote-builder"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-crimson hover:bg-crimson-hover text-white text-xs sm:text-sm font-sans uppercase font-bold tracking-luxury transition-all duration-200 shadow-xl shadow-crimson/25 hover:scale-105 flex items-center justify-center gap-3"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>

          <a
            href="/docs/collaviah-wholesale-catalogue.pdf"
            download="COLLAVIAH-Catalogue.pdf"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-richBlack text-richBlack hover:text-white border-2 border-richBlack text-xs sm:text-sm font-sans uppercase font-bold tracking-luxury transition-all duration-200 shadow-sm flex items-center justify-center gap-2 hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span>Download Catalogue (PDF)</span>
          </a>
        </div>

        {/* 4 BOLD BOXES WITH ICONS RIGHT UNDER THE BUTTONS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          {/* Box 1: MOQ */}
          <div className="p-4 rounded-2xl bg-white/90 border border-gold-champagne/70 shadow-sm text-left flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-crimson/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Package className="w-5 h-5 text-crimson" />
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-wider text-charcoal-muted block font-semibold">
                Minimum Order
              </span>
              <span className="text-sm font-serif font-bold text-richBlack block">
                MOQ 5–10 Cartons
              </span>
              <span className="text-[10px] text-charcoal-muted block mt-0.5">
                Flexible trial mixes
              </span>
            </div>
          </div>

          {/* Box 2: Pack Sizes */}
          <div className="p-4 rounded-2xl bg-white/90 border border-gold-champagne/70 shadow-sm text-left flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-gold-antique/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Layers className="w-5 h-5 text-gold-antique" />
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-wider text-charcoal-muted block font-semibold">
                Carton Sizes
              </span>
              <span className="text-sm font-serif font-bold text-richBlack block">
                Packs of 6, 12 & 24
              </span>
              <span className="text-[10px] text-charcoal-muted block mt-0.5">
                Counter & master cases
              </span>
            </div>
          </div>

          {/* Box 3: Export Ready */}
          <div className="p-4 rounded-2xl bg-white/90 border border-gold-champagne/70 shadow-sm text-left flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-leafGreen/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Globe className="w-5 h-5 text-leafGreen" />
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-wider text-charcoal-muted block font-semibold">
                Global Freight
              </span>
              <span className="text-sm font-serif font-bold text-richBlack block">
                Ships Worldwide
              </span>
              <span className="text-[10px] text-charcoal-muted block mt-0.5">
                FOB & CIF export ready
              </span>
            </div>
          </div>

          {/* Box 4: Shelf Life */}
          <div className="p-4 rounded-2xl bg-white/90 border border-gold-champagne/70 shadow-sm text-left flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-wider text-charcoal-muted block font-semibold">
                Ambient Storage
              </span>
              <span className="text-sm font-serif font-bold text-richBlack block">
                12-Month Shelf Life
              </span>
              <span className="text-[10px] text-charcoal-muted block mt-0.5">
                4°C to 22°C ambient
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
