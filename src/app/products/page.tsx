import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { FLAVORS } from "@/data/flavors";
import { WHOLESALE_PACKS } from "@/data/packs";
import { ArrowRight, Download, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Flavors | COLLAVIAH Vegan Collagen Wholesale",
  description:
    "Explore COLLAVIAH 250ml slim can vegan collagen beverages: Strawberry Lime and Lemon Lime. Made in Osaka, Japan. 0g sugar, 2,500mg bio-fermented collagen peptides.",
};

export default function ProductsPage() {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-champagne-light via-pearl to-champagne-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-gold-soft/50 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-soft" />
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-richBlack font-bold">
              Made in Osaka, Japan • Wholesale Lineup
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-richBlack tracking-tight">
            Our Beverage Portfolio
          </h1>
          <p className="text-charcoal text-base sm:text-lg mt-4 leading-relaxed">
            Formulated with 2,500mg bio-fermented plant collagen peptides per 250ml can.
            Zero sugar, 100% monk fruit sweetener, and under 15 calories.
            Packaged for premier retail, cafe counters, and hospitality minibars worldwide.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/wholesale#quote-builder"
              className="px-6 py-3 rounded-full bg-crimson hover:bg-crimson-hover text-white text-xs font-bold uppercase tracking-luxury shadow-md transition"
            >
              Request Wholesale Quote
            </Link>
            <a
              href="/docs/collaviah-wholesale-catalogue.pdf"
              download="COLLAVIAH-Wholesale-Catalogue.pdf"
              className="px-6 py-3 rounded-full bg-white border-2 border-richBlack text-richBlack hover:bg-richBlack hover:text-white text-xs font-bold uppercase tracking-luxury transition"
            >
              Download Catalogue (PDF)
            </a>
          </div>
        </div>

        {/* 2 Core Products Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {FLAVORS.map((flavor) => (
            <div
              key={flavor.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-gold-champagne/60 shadow-lg flex flex-col justify-between hover:shadow-2xl transition duration-300 relative overflow-hidden group"
            >
              {/* Background gradient accent */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: flavor.color.primary }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-champagne-light text-gold-antique border border-gold-champagne/40">
                    250ml Slim Can
                  </span>
                  <span className="text-xs font-mono text-charcoal-muted">
                    {flavor.nutrition.calories} • 0g Sugar
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8 my-6">
                  <div className="w-40 sm:w-48 flex-shrink-0 relative">
                    <Image
                      src={flavor.svgCanAsset}
                      alt={`COLLAVIAH ${flavor.name} can`}
                      width={300}
                      height={500}
                      className="w-full h-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-richBlack">
                      {flavor.name}
                    </h2>
                    <p className="text-xs font-mono text-gold-antique">
                      {flavor.tagline}
                    </p>
                    <p className="text-xs text-charcoal leading-relaxed">
                      {flavor.shortDescription}
                    </p>
                    <div className="pt-2">
                      <p className="text-[11px] font-sans uppercase font-bold text-richBlack mb-1">
                        Key Ingredients:
                      </p>
                      <ul className="text-xs text-charcoal space-y-1">
                        {flavor.keyBotanicals.slice(0, 4).map((bot, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-leafGreen" />
                            <span>{bot}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Nutrition quick bar */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-champagne-light/70 border border-gold-champagne/40 text-center my-6">
                  <div>
                    <span className="block text-base font-serif font-bold text-richBlack">2,500mg</span>
                    <span className="text-[10px] text-charcoal-muted">Plant Collagen</span>
                  </div>
                  <div>
                    <span className="block text-base font-serif font-bold text-richBlack">0g</span>
                    <span className="text-[10px] text-charcoal-muted">Sugar Added</span>
                  </div>
                  <div>
                    <span className="block text-base font-serif font-bold text-richBlack">{flavor.nutrition.calories}</span>
                    <span className="text-[10px] text-charcoal-muted">Low Energy</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gold-champagne/30 flex items-center justify-between gap-4">
                <Link
                  href={`/products/${flavor.id}`}
                  className="text-xs font-bold uppercase tracking-luxury text-richBlack hover:text-crimson flex items-center gap-1.5 transition"
                >
                  <span>Detailed Specifications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/wholesale#quote-builder`}
                  className="px-5 py-2.5 rounded-full bg-crimson hover:bg-crimson-hover text-white text-xs font-bold uppercase tracking-luxury transition"
                >
                  Order Cases
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale Pack Specifications Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold-champagne/60 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold-antique font-bold block">
              Carton Packaging
            </span>
            <h3 className="font-serif text-3xl font-bold text-richBlack mt-1">
              Available Wholesale Pack Formats
            </h3>
            <p className="text-xs text-charcoal mt-2">
              Shipped in reinforced master cartons with shelf-ready tear lines, individual EAN barcodes, and cold-chain resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHOLESALE_PACKS.map((pack) => (
              <div
                key={pack.id}
                className="p-6 rounded-2xl bg-champagne-light/50 border border-gold-champagne/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-xl font-bold text-richBlack">
                      {pack.name}
                    </span>
                    <span className="text-xs font-mono font-bold text-crimson px-2.5 py-0.5 rounded-full bg-crimson/10">
                      MOQ: {pack.moq} Cartons
                    </span>
                  </div>
                  <p className="text-xs text-charcoal mb-4">
                    {pack.idealFor}
                  </p>
                  <p className="text-xs font-mono text-gold-antique font-semibold mb-4">
                    {pack.priceGuide}
                  </p>
                  <ul className="text-xs text-charcoal space-y-1.5 mb-6">
                    {pack.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-leafGreen mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/wholesale#quote-builder"
                  className="w-full py-2.5 text-center rounded-xl bg-richBlack text-white hover:bg-crimson text-xs font-bold uppercase tracking-wider transition"
                >
                  Configure Quote
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
