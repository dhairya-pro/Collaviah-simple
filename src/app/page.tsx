/**
 * Home page — heavy sections below the fold are lazy-loaded with next/dynamic.
 * HeroSection and TrustBar are kept eager (first-paint critical).
 * Everything else defers its JS until the browser is idle, dramatically
 * reducing the initial parse burden and speeding up navigation to other pages.
 */
import React from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { Marquee } from "@/components/motion/Marquee";

// All below-fold sections are code-split & lazy-loaded
const WhyCollaviah = dynamic(
  () => import("@/components/sections/WhyCollaviah").then((m) => ({ default: m.WhyCollaviah })),
  { ssr: false }
);
const FlavorsShowcase = dynamic(
  () => import("@/components/sections/FlavorsShowcase").then((m) => ({ default: m.FlavorsShowcase })),
  { ssr: false }
);
const WholesalePacksSection = dynamic(
  () => import("@/components/sections/WholesalePacksSection").then((m) => ({ default: m.WholesalePacksSection })),
  { ssr: false }
);
const QuoteBuilderSection = dynamic(
  () => import("@/components/sections/QuoteBuilderSection").then((m) => ({ default: m.QuoteBuilderSection })),
  { ssr: false }
);
const WhoWeServeSection = dynamic(
  () => import("@/components/sections/WhoWeServeSection").then((m) => ({ default: m.WhoWeServeSection })),
  { ssr: false }
);
const HowItWorksSection = dynamic(
  () => import("@/components/sections/HowItWorksSection").then((m) => ({ default: m.HowItWorksSection })),
  { ssr: false }
);
const SocialProofSection = dynamic(
  () => import("@/components/sections/SocialProofSection").then((m) => ({ default: m.SocialProofSection })),
  { ssr: false }
);
const FAQSection = dynamic(
  () => import("@/components/sections/FAQSection").then((m) => ({ default: m.FAQSection })),
  { ssr: false }
);
const FinalCTASection = dynamic(
  () => import("@/components/sections/FinalCTASection").then((m) => ({ default: m.FinalCTASection })),
  { ssr: false }
);

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. Hero — critical, always eager */}
      <HeroSection />

      {/* Marquee Strip 1 */}
      <Marquee
        items={[
          "NOURISH",
          "REJUVENATE",
          "GLOW",
          "JAPAN-BASED VEGAN COLLAGEN",
          "2,500MG BIO-PEPTIDES",
          "250ML SLIM CAN",
        ]}
        speedSec={32}
      />

      {/* 2. Trust Bar — near fold, keep eager */}
      <TrustBar />

      {/* 3–11. Below-fold sections — all lazy-loaded */}
      <WhyCollaviah />
      <FlavorsShowcase />
      <WholesalePacksSection />
      <QuoteBuilderSection />
      <WhoWeServeSection />
      <HowItWorksSection />
      <SocialProofSection />

      {/* Marquee Strip 2 (Reverse) */}
      <Marquee
        items={[
          "ZERO SUGAR",
          "MONK FRUIT SWEETENER",
          "LOW CALORIES",
          "NON-GMO",
          "100% RECYCLABLE ALUMINUM",
          "COMMERCIAL EXPORTS",
        ]}
        reverse={true}
        speedSec={36}
      />

      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
