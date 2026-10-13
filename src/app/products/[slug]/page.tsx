import React from "react";
import { notFound } from "next/navigation";
import { FLAVORS } from "@/data/flavors";
import { WHOLESALE_PACKS } from "@/data/packs";
import { CanMockup } from "@/components/common/CanMockup";
import { Sparkles, Check, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  return FLAVORS.map((flavor) => ({
    slug: flavor.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const flavor = FLAVORS.find((f) => f.id === params.slug);
  if (!flavor) return { title: "Flavor Not Found" };

  return {
    title: `${flavor.name} | COLLAVIAH Japan-Based Vegan Collagen Beverage`,
    description: flavor.shortDescription,
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const flavor = FLAVORS.find((f) => f.id === params.slug);
  if (!flavor) {
    notFound();
  }

  const otherFlavor = FLAVORS.find((f) => f.id !== params.slug) || FLAVORS[0];

  return (
    <div className="pt-28 pb-24 bg-pearl min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-charcoal-muted mb-8">
          <Link href="/" className="hover:text-crimson transition-colors">
            COLLAVIAH
          </Link>
          <span>/</span>
          <Link href="/#flavors" className="hover:text-crimson transition-colors">
            Flavors
          </Link>
          <span>/</span>
          <span className="text-richBlack font-bold">{flavor.name}</span>
        </nav>

        {/* HERO SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-gold-champagne/40">
          {/* LEFT: CAN PRESENTATION */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-b from-champagne-light to-[#FBF4EE] border border-gold-champagne/60 relative overflow-hidden">
            <div className="w-56 sm:w-64 relative z-10">
              <CanMockup flavor={flavor.id} isFloating={true} showDroplets={true} glow={true} />
            </div>

            <div className="mt-4 text-center z-10">
              <span className="text-xs font-mono font-semibold text-gold-antique uppercase tracking-widest block">
                250 ML SLIM ALUMINUM CAN
              </span>
              <span className="text-[11px] text-charcoal-muted">
                100% Recyclable • Infinitely Renewable
              </span>
            </div>

            {/* Ambient background glow */}
            <div
              className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
              style={{ backgroundColor: flavor.color.primary }}
            />
          </div>

          {/* RIGHT: FLAVOR PROFILE & ORDER ACTION */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-gold-champagne/30 text-gold-antique border border-gold-antique/20 inline-block mb-3">
                {flavor.badge}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-richBlack">
                {flavor.name}
              </h1>
              <p className="font-serif italic text-xl text-crimson mt-1">
                {flavor.tagline}
              </p>
            </div>

            <p className="text-charcoal text-base leading-relaxed">
              {flavor.fullDescription}
            </p>

            {/* Tasting Notes */}
            <div className="p-5 rounded-2xl bg-champagne-light/50 border border-gold-champagne/50 space-y-2">
              <h3 className="text-xs font-sans uppercase tracking-luxury text-gold-antique font-bold">
                Aromatics & Palate
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-charcoal">
                {flavor.tastingNotes.map((note, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Botanicals */}
            <div>
              <h3 className="text-xs font-sans uppercase tracking-luxury text-charcoal-muted font-bold mb-3">
                Active Botanical Complex
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal">
                {flavor.keyBotanicals.map((bot, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-pearl border border-gold-champagne/40">
                    <Check className="w-3.5 h-3.5 text-leafGreen flex-shrink-0" />
                    <span>{bot}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action to Wholesale */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`/wholesale#quote-builder`}
                className="px-7 py-3.5 rounded-full bg-crimson hover:bg-crimson-hover text-white text-xs font-sans uppercase font-bold tracking-luxury transition shadow-md shadow-crimson/25 hover:scale-105"
              >
                Configure {flavor.name} Wholesale Order
              </Link>

              <Link
                href={`/products/${otherFlavor.id}`}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-champagne-light text-richBlack border border-gold-antique/50 text-xs font-sans uppercase font-bold tracking-luxury transition flex items-center gap-2"
              >
                <span>Explore {otherFlavor.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-antique" />
              </Link>
            </div>
          </div>
        </div>

        {/* NUTRITION & COMPLIANCE GRID */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Nutritional Facts Panel */}
          <div className="p-7 rounded-3xl bg-white border border-gold-champagne shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-richBlack mb-1">
              Nutritional Profile (Per 250ml Can)
            </h3>
            <p className="text-xs text-charcoal-muted mb-6">
              Compliant laboratory analysis summary. Standardized per single 250 ml serving.
            </p>

            <div className="divide-y divide-gold-champagne/30 text-xs text-charcoal">
              <div className="py-2.5 flex justify-between font-bold text-richBlack">
                <span>Serving Size</span>
                <span>{flavor.nutrition.servingSize}</span>
              </div>
              <div className="py-2.5 flex justify-between font-bold text-crimson">
                <span>Energy / Calories</span>
                <span>{flavor.nutrition.calories}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span>Vegan Bio-Peptides</span>
                <span className="font-semibold text-leafGreen">{flavor.nutrition.collagen}</span>
              </div>
              <div className="py-2.5 flex justify-between font-bold text-richBlack">
                <span>Total Sugars</span>
                <span className="text-crimson font-mono">{flavor.nutrition.sugar}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span>Total Carbohydrates</span>
                <span>{flavor.nutrition.carbs}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span>Total Fat</span>
                <span>{flavor.nutrition.fat}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span>Sodium</span>
                <span>{flavor.nutrition.sodium}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span>Sweetening Agent</span>
                <span className="font-medium text-gold-antique">{flavor.nutrition.sweetener}</span>
              </div>
            </div>
          </div>

          {/* Complete Ingredients & Compliant Quality Statement */}
          <div className="p-7 rounded-3xl bg-champagne-light/50 border border-gold-champagne shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-richBlack mb-1">
                Full Ingredient Transparency
              </h3>
              <p className="text-xs text-charcoal-muted mb-4">
                100% clean-label formulation with zero synthetic dyes or preservatives.
              </p>

              <ul className="space-y-2 text-xs text-charcoal leading-relaxed mb-6">
                {flavor.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-antique flex-shrink-0 mt-1.5" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-gold-champagne/60 text-xs text-charcoal space-y-1.5">
              <div className="flex items-center gap-2 text-leafGreen font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Japanese Bio-Fermentation Guarantee</span>
              </div>
              <p className="text-[11px] text-charcoal-muted">
                Each batch is independently tested for heavy metals, micro-contaminants, and amino acid potency prior to commercial release.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

