import React from "react";
import { Sparkles, Leaf, ShieldCheck, RefreshCw, Award } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About COLLAVIAH | Japanese Bio-Fermented Vegan Collagen Innovation",
  description:
    "Discover the science, Japanese heritage, and ethical biotechnology behind COLLAVIAH. Zero sugar, cruelty-free, and formulated in Osaka, Japan.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-pearl min-h-screen">
      {/* HERO SECTION */}
      <section className="py-20 bg-gradient-to-b from-champagne-light via-champagne/40 to-pearl border-b border-gold-champagne/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block mb-3">
            — THE PHILOSOPHY OF COLLAVIAH —
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-richBlack leading-tight">
            Bridging Japanese Bio-Fermentation with Daily Sensory Pleasure
          </h1>
          <p className="font-script text-crimson text-3xl sm:text-4xl mt-3">
            Glow from Within
          </p>
          <p className="text-charcoal text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed font-light">
            Founded with a singular conviction: the functional beauty beverages of tomorrow cannot rely on archaic animal extraction or compromise on metabolic purity.
          </p>
        </div>
      </section>

      {/* STORY & SCIENCE GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-antique">
              Osaka Biotechnology Origins
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-richBlack">
              Reinventing Collagen from the Plant Kingdom
            </h2>
            <p className="text-charcoal text-sm sm:text-base leading-relaxed">
              For decades, the global collagen industry relied exclusively on bovine hide, porcine tissue, or fish scales. In addition to high environmental burdens and ethical concerns, conventional collagen often introduces fishy odors requiring heavy synthetic flavor masking.
            </p>
            <p className="text-charcoal text-sm sm:text-base leading-relaxed">
              In Osaka, Japan, our research team harnessed advanced micro-fermentation techniques. By selecting non-GMO plant substrates and precision fermentation cultures, we synthesize an identical amino acid sequence mirroring human Type I and Type III collagen peptides.
            </p>

            <div className="p-5 rounded-2xl bg-champagne-light border border-gold-champagne/60 space-y-2">
              <h4 className="font-serif font-bold text-richBlack text-base">
                The 2,500mg Daily Potency
              </h4>
              <p className="text-xs text-charcoal leading-relaxed">
                Each 250ml slim can supplies 2,500mg of bio-identical peptides—the clinically recognized daily baseline for supporting dermal hydration, cellular elasticity, and hair keratin synthesis.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#FAF5EE] to-[#EFE2D3] border border-gold-champagne space-y-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white shadow-sm border border-gold-soft/40 text-leafGreen">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-richBlack">100% Ethical & Cruelty Free</h3>
                <p className="text-xs text-charcoal/80 mt-1 leading-relaxed">
                  Zero marine or slaughterhouse inputs. Certified vegan, halal-compliant, and gentle on global ecosystems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white shadow-sm border border-gold-soft/40 text-crimson">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-richBlack">Metabolic Cleanliness (0g Sugar)</h3>
                <p className="text-xs text-charcoal/80 mt-1 leading-relaxed">
                  Sweetened solely with Luo Han Guo (Monk Fruit) extract. Safe for intermittent fasting, ketogenic protocols, and clean-eating regimens.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white shadow-sm border border-gold-soft/40 text-gold-antique">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-richBlack">Circular Aluminum Packaging</h3>
                <p className="text-xs text-charcoal/80 mt-1 leading-relaxed">
                  Our sleek 250ml aluminum cans preserve carbonation and delicate peptides from UV breakdown while offering infinite recyclability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B WHOLESALE PARTNER PLEDGE */}
      <section className="py-16 bg-champagne-light/50 border-y border-gold-champagne/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <Award className="w-10 h-10 text-gold-soft mx-auto" />
          <h2 className="font-serif text-3xl font-bold text-richBlack">
            Our Commercial Partner Commitment
          </h2>
          <p className="text-charcoal text-sm sm:text-base leading-relaxed">
            We operate as true commercial collaborators. Beyond delivering pristine inventory, we supply our retail, hospitality, and distribution partners with high-converting counter merchandising, staff training guides, and flexible terms designed for sustainable margin growth.
          </p>
          <div className="pt-4">
            <Link
              href="/wholesale#quote-builder"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-crimson hover:bg-crimson-hover text-white text-xs font-sans uppercase font-bold tracking-luxury transition shadow-md shadow-crimson/25 hover:scale-105"
            >
              <span>Explore Wholesale Partnership</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

