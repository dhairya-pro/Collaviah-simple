"use client";

import React, { useState } from "react";
import Link from "next/link";
import { REGULATORY_COMPLIANCE_NOTES } from "@/data/flavors";
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, Download, Package } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-richBlack text-[#EFEAE4] pt-16 pb-12 border-t border-gold-antique/30 relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gold-soft/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Fast Action Bar for Commercial Buyers */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold-soft font-bold block">
              Commercial Buyer Services
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Ready to stock COLLAVIAH in your venue?
            </h3>
            <p className="text-xs text-[#C5BEB7]">
              Sample tasting kits dispatch within 48 hours to verified retail, hospitality, and wellness operators.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-crimson hover:bg-crimson-hover text-white text-xs font-bold uppercase tracking-luxury shadow-lg shadow-crimson/25 transition-all flex items-center gap-2"
            >
              <Package className="w-3.5 h-3.5" />
              <span>Request Buyer Tasting Kit</span>
            </Link>
            <a
              href="/docs/collaviah-wholesale-catalogue.pdf"
              download="COLLAVIAH-Catalogue.pdf"
              className="px-6 py-3 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/30 text-xs font-bold uppercase tracking-luxury transition-all flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Catalogue (PDF)</span>
            </a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/15">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-serif text-3xl font-bold tracking-[0.2em] text-white block">
                COLLAVIAH
              </span>
              <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-soft block mt-0.5">
                植物性コラーゲン • MADE IN OSAKA, JAPAN
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#DDD7D0] leading-relaxed max-w-sm">
              Formulated and produced in Osaka, Japan. 5,000mg bio-fermented plant collagen per 250ml slim can with zero sugar and monk fruit sweetener. Shipped worldwide in cartons of 6, 12, and 24.
            </p>
            <div className="space-y-1.5 text-xs text-[#C8C2BA]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-soft flex-shrink-0 mt-0.5" />
                <span>COLLAVIAH Japan Beverage Co., 4-1-1 Dosho-machi, Chuo-ku, Osaka 541-0045, Japan</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-soft flex-shrink-0" />
                <span>Commercial Accounts: orders@collaviah.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-soft flex-shrink-0" />
                <span>Commercial Lead: Elena Sato (+81 6-6202-8800)</span>
              </div>
            </div>
          </div>

          {/* Ordering Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-luxury text-gold-soft font-bold">
              Ordering Portals
            </h4>
            <ul className="space-y-2 text-xs text-[#DDD7D0]">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Beverage Lineup
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="hover:text-white transition-colors">
                  Carton Packs (6, 12, 24)
                </Link>
              </li>
              <li>
                <Link href="/#quote-builder" className="hover:text-white transition-colors">
                  B2B Quote Builder
                </Link>
              </li>
              <li>
                <Link href="/products/strawberry-lime" className="hover:text-white transition-colors">
                  Strawberry Lime Specs
                </Link>
              </li>
              <li>
                <Link href="/products/lemon-lime" className="hover:text-white transition-colors">
                  Lemon Lime Specs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Request Buyer Tasting Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Locations */}
          <div className="space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-luxury text-gold-soft font-bold">
              Company & Stockists
            </h4>
            <ul className="space-y-2 text-xs text-[#DDD7D0]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Osaka Facility & Lab
                </Link>
              </li>
              <li>
                <Link href="/#who-we-serve" className="hover:text-white transition-colors">
                  Sectors We Supply
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Commercial Accounts Desk
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Commercial Terms
                </Link>
              </li>
            </ul>
            <div className="pt-2 text-[11px] text-[#B8B1A8] leading-tight">
              <strong className="text-white block mb-0.5">Existing Stockists:</strong>
              Tokyo, Osaka, Singapore, Dubai specialty grocers and luxury hospitality.
            </div>
          </div>

          {/* B2B Rate Card Subscription */}
          <div className="space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-luxury text-gold-soft font-bold">
              B2B Rate Card
            </h4>
            <p className="text-xs text-[#DDD7D0] leading-relaxed">
              Get the latest distributor export rate sheet and pallet discount schedule.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-leafGreen/20 border border-leafGreen/40 text-xs text-white">
                <CheckCircle2 className="w-4 h-4 text-leafGreen flex-shrink-0" />
                <span>Rate card emailed to your business inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="buyer@company.com"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-xs text-white placeholder-white/50 focus:outline-none focus:border-gold-soft"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3.5 bg-crimson hover:bg-crimson-hover rounded-full text-white text-xs font-bold transition flex items-center justify-center"
                    aria-label="Send Rate Card"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-[#A8A19B] block">
                  Strictly commercial communications. Zero spam.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Regulatory & Compliance Disclaimers */}
        <div className="py-6 border-b border-white/10 text-xs text-[#C5BEB7] space-y-2 leading-relaxed">
          <p>
            <strong className="text-gold-soft">Compliance Notice:</strong> COLLAVIAH is a functional dietary beverage formulated with bio-fermented plant collagen peptides, vitamin C, and monk fruit extract. Certified vegan, non-GMO, and gluten-free. Packaged in 100% recyclable aluminum slim cans.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] text-white/80">
            <span>Certification: {REGULATORY_COMPLIANCE_NOTES.complianceCertifications}</span>
            <span>Origin: {REGULATORY_COMPLIANCE_NOTES.manufactureOrigin}</span>
            <span>Shelf Life: {REGULATORY_COMPLIANCE_NOTES.shelfLife}</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8B1A8]">
          <p>© {new Date().getFullYear()} COLLAVIAH JAPAN BEVERAGE CO. All rights reserved.</p>
          <p className="font-serif italic text-white/90">
            Made in Osaka • Bio-Fermented Vegan Collagen
          </p>
        </div>
      </div>
    </footer>
  );
};
