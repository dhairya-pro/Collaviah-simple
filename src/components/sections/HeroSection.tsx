"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { CanMockup } from "@/components/common/CanMockup";
import {
  StrawberryVector,
  LimeSliceVector,
  CranberryVector,
  BlushPetalVector,
  LeafVector,
  WaterDropletVector,
} from "@/components/common/BotanicalElements";
import { ArrowRight, Download, Sparkles, Volume2, VolumeX, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioNode | null>(null);
  const { scrollY } = useScroll();

  // Scroll transformations - hardware accelerated
  const canScale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const canY = useTransform(scrollY, [0, 600], [0, 60]);
  const canRotate = useTransform(scrollY, [0, 600], [0, 2.5]);
  const bgOpacity = useTransform(scrollY, [0, 600], [0, 0.4]);

  // High-performance Motion Values (Zero React Re-renders on mousemove!)
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springX = useSpring(rawMouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(rawMouseY, { stiffness: 120, damping: 25 });

  // Transforms for parallax elements
  const limeX = useTransform(springX, (v) => v * -1.8);
  const limeY = useTransform(springY, (v) => v * -1.8);

  const strawX = useTransform(springX, (v) => v * 1.6);
  const strawY = useTransform(springY, (v) => v * 1.6);

  const cranX = useTransform(springX, (v) => v * 1.2);
  const cranY = useTransform(springY, (v) => v * 1.2);

  const petalX = useTransform(springX, (v) => v * -1.3);
  const petalY = useTransform(springY, (v) => v * -1.3);

  useEffect(() => {
    // Throttled mouse tracking directly updating motion values without React re-renders
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

  // Web Audio API Effervescent Fizz Synthesis
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
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-champagne-light via-champagne to-[#F7E7EC] pt-24 pb-14"
    >
      {/* Dynamic Background Tint Morph Overlay on Scroll */}
      <motion.div
        className="absolute inset-0 bg-blush pointer-events-none"
        style={{ opacity: bgOpacity }}
      />

      {/* GIANT EDITORIAL SERIF WORDMARK BEHIND THE CAN */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="font-serif text-[18vw] font-black text-richBlack/[0.045] leading-none tracking-tight whitespace-nowrap text-center">
          COLLAVIAH
        </h1>
      </div>

      {/* MULTI-TIER PARALLAX BOTANICALS - PURE GPU ACCELERATED */}
      {/* Lime Slice */}
      <motion.div
        className="absolute top-[14%] right-[6%] md:right-[12%] z-20 pointer-events-none hidden sm:block will-change-transform"
        style={{ x: limeX, y: limeY }}
      >
        <LimeSliceVector className="w-18 h-18 md:w-24 md:h-24 drop-shadow-xl rotate-45" />
        <BlushPetalVector className="w-8 h-8 absolute -top-3 -left-3 rotate-12 opacity-90" />
      </motion.div>

      {/* Strawberry & Liquid Dew */}
      <motion.div
        className="absolute top-[16%] left-[6%] md:left-[12%] z-20 pointer-events-none hidden sm:block will-change-transform"
        style={{ x: strawX, y: strawY }}
      >
        <StrawberryVector className="w-16 h-16 md:w-22 md:h-22 drop-shadow-xl -rotate-12" />
        <WaterDropletVector className="w-6 h-6 absolute -bottom-2 -right-2 drop-shadow-md" />
      </motion.div>

      {/* Cranberries */}
      <motion.div
        className="absolute bottom-[20%] left-[8%] md:left-[14%] z-10 pointer-events-none hidden sm:block will-change-transform"
        style={{ x: cranX, y: cranY }}
      >
        <CranberryVector className="w-14 h-14 md:w-18 md:h-18 drop-shadow-lg rotate-12" />
        <LeafVector className="w-10 h-10 absolute -top-3 -right-3 -rotate-45 opacity-80" />
      </motion.div>

      {/* Petals */}
      <motion.div
        className="absolute bottom-[22%] right-[8%] md:right-[16%] z-10 pointer-events-none hidden sm:block will-change-transform"
        style={{ x: petalX, y: petalY }}
      >
        <BlushPetalVector className="w-12 h-12 rotate-45 drop-shadow-md" />
        <LeafVector className="w-8 h-8 absolute -bottom-3 -left-2 rotate-90 opacity-60" />
      </motion.div>

      {/* MAIN CENTER CONTENT HERO */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20 flex flex-col items-center text-center">
        {/* Top Badges & Audio Toggle */}
        <div className="flex items-center gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-gold-soft/50 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-soft" />
            <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] text-richBlack font-semibold">
              Japan-Based Vegan Collagen • 250ml Wholesale
            </span>
          </div>

          {/* Interactive Sparkling Fizz Audio Toggle */}
          <button
            onClick={toggleFizzAudio}
            className={`p-2 rounded-full border text-xs transition-all shadow-sm flex items-center gap-1.5 ${
              isAudioPlaying
                ? "bg-crimson text-white border-crimson shadow-crimson/25"
                : "bg-white/80 hover:bg-white text-charcoal border-gold-champagne/60"
            }`}
            aria-label="Toggle effervescent carbonation sound"
            title="Experience the sound of our chilled botanical carbonation"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
                <span className="text-[10px] font-mono hidden md:inline">Fizzing</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-charcoal-muted" />
                <span className="text-[10px] font-mono hidden md:inline">Sound</span>
              </>
            )}
          </button>
        </div>

        {/* Script Tagline */}
        <p className="font-script text-crimson text-3xl sm:text-4xl md:text-5xl lg:text-6xl -mb-2">
          Glow from Within
        </p>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-richBlack max-w-4xl tracking-tight leading-[1.12]">
          Nourish. Rejuvenate. Glow.
        </h2>

        {/* Descriptor Body */}
        <p className="text-charcoal text-sm sm:text-base md:text-lg max-w-2xl mt-4 leading-relaxed font-normal">
          A revolutionary bio-fermented vegan collagen beverage crafted in Osaka.
          Zero sugar, organic monk fruit sweetener, and crisp botanical effervescence—ready for premier retail shelves and hospitality menus.
        </p>

        {/* CENTER FLOATING CAN */}
        <motion.div
          style={{ scale: canScale, y: canY, rotate: canRotate }}
          className="my-5 sm:my-7 relative flex items-center justify-center will-change-transform"
        >
          <div className="w-48 sm:w-56 md:w-64 lg:w-70">
            <CanMockup
              flavor="strawberry-lime"
              isFloating={true}
              showDroplets={true}
              glow={true}
              interactiveTilt={false} // Disable heavy tilt to keep scrolling featherlight
            />
          </div>
        </motion.div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/wholesale#quote-builder"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-crimson hover:bg-crimson-hover text-white text-xs sm:text-sm font-sans uppercase font-bold tracking-luxury transition-all duration-200 shadow-xl shadow-crimson/25 hover:scale-105 flex items-center justify-center gap-3"
          >
            <span>Request Wholesale Quote</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>

          <Link
            href="/wholesale"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 hover:bg-white text-richBlack border border-gold-antique/60 hover:border-gold-antique text-xs sm:text-sm font-sans uppercase font-bold tracking-luxury transition-all duration-200 shadow-sm flex items-center justify-center gap-2 hover:scale-105"
          >
            <Download className="w-4 h-4 text-gold-antique" />
            <span>Download Catalogue</span>
          </Link>
        </div>

        {/* Key Wholesale Micro-Badges Ribbon */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-charcoal/80">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-leafGreen" />
            MOQ from 5–10 Cartons
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-soft" />
            Packs of 6, 12 & 24
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
            Global Cold-Chain / Export Ready
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-leafGreen" />
            18-Mo Ambient Shelf Life
          </span>
        </div>
      </div>
    </section>
  );
};
