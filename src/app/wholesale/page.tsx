import React from "react";
import { WholesalePacksSection } from "@/components/sections/WholesalePacksSection";
import { QuoteBuilderSection } from "@/components/sections/QuoteBuilderSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WHOLESALE_PACKS } from "@/data/packs";
import { Metadata } from "next";
import { ShieldCheck, Truck, Percent, FileCheck, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Wholesale Portal & Rate Cards | COLLAVIAH Japan",
  description:
    "Official wholesale packs of 6, 12, and 24 cans. Discover volume tier discount rates, FOB/CIF freight timelines, and commercial margin specifications.",
};

export default function WholesalePage() {
  return (
    <div className="pt-24 pb-20 bg-pearl min-h-screen">
      {/* WHOLESALE OVERVIEW HERO */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-champagne-light to-pearl border-b border-gold-champagne/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block mb-3">
            — GLOBAL TRADE & COMMERCIAL SUPPLY —
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-richBlack max-w-4xl mx-auto">
            Wholesale Packs & Case Logistics
          </h1>
          <p className="text-charcoal text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            Engineered for high inventory turnover across modern grocery, aesthetic clinics, hospitality, and regional beverage distribution networks.
          </p>

          {/* 4 Trade Highlights */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white border border-gold-champagne/60 shadow-sm flex items-start gap-3">
              <Percent className="w-5 h-5 text-crimson flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-richBlack">Healthy Margins</h3>
                <p className="text-[11px] text-charcoal-muted mt-0.5">Up to 45% retailer mark-up profile</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-gold-champagne/60 shadow-sm flex items-start gap-3">
              <Truck className="w-5 h-5 text-gold-antique flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-richBlack">Protected Transit</h3>
                <p className="text-[11px] text-charcoal-muted mt-0.5">Heavy-duty master carton packaging</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-gold-champagne/60 shadow-sm flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-leafGreen flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-richBlack">18-Month Stability</h3>
                <p className="text-[11px] text-charcoal-muted mt-0.5">Ambient storage (4°C – 22°C)</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-gold-champagne/60 shadow-sm flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-richBlack flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-richBlack">Net 30 Credit</h3>
                <p className="text-[11px] text-charcoal-muted mt-0.5">Terms for verified commercial buyers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED PACK SPECIFICATIONS & COMPARISON TABLE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold-antique font-semibold block">
            Comparative Master Case Specs
          </span>
          <h2 className="font-serif text-3xl font-bold text-richBlack mt-1">
            Palletization & Case Dimensions
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-gold-champagne bg-white shadow-md">
          <table className="w-full text-left text-xs text-charcoal">
            <thead className="bg-champagne-light text-richBlack font-serif font-bold text-sm uppercase tracking-wider border-b border-gold-champagne">
              <tr>
                <th className="p-4 sm:p-5">Pack Format</th>
                <th className="p-4 sm:p-5">Cans / Case</th>
                <th className="p-4 sm:p-5">Master Case Dimensions</th>
                <th className="p-4 sm:p-5">Gross Weight</th>
                <th className="p-4 sm:p-5">Minimum Order (MOQ)</th>
                <th className="p-4 sm:p-5">Ideal Merchandising</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-champagne/30">
              {WHOLESALE_PACKS.map((pack) => (
                <tr key={pack.id} className="hover:bg-champagne-light/30 transition">
                  <td className="p-4 sm:p-5 font-serif font-bold text-base text-richBlack">
                    {pack.name}
                  </td>
                  <td className="p-4 sm:p-5 font-mono font-semibold text-crimson">
                    {pack.size} cans (250ml)
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-charcoal-muted">
                    {pack.dimensions}
                  </td>
                  <td className="p-4 sm:p-5 font-mono">
                    {pack.grossWeight}
                  </td>
                  <td className="p-4 sm:p-5 font-mono font-bold text-richBlack">
                    {pack.moq} Cartons
                  </td>
                  <td className="p-4 sm:p-5 text-charcoal">
                    {pack.idealFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* INTERACTIVE PACK CARDS */}
      <WholesalePacksSection />

      {/* FULL QUOTE BUILDER & B2B CONFIGURATOR */}
      <QuoteBuilderSection />

      {/* 5-STEP WHOLESALE TIMELINE */}
      <HowItWorksSection />
    </div>
  );
}

