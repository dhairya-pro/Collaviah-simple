"use client";

import React, { useState } from "react";
import Link from "next/link";
import { REGULATORY_COMPLIANCE_NOTES } from "@/data/flavors";
import { ArrowRight, CheckCircle2, Mail, ShieldCheck, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-richBlack text-[#EDE8E3] pt-20 pb-12 border-t border-gold-antique/30 relative overflow-hidden">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gold-soft/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <span className="font-serif text-3xl font-bold tracking-[0.25em] text-white block">
                COLLAVIAH
              </span>
              <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-soft block mt-0.5">
                植物性コラーゲン • JAPAN FORMULATION
              </span>
            </div>
            <p className="text-sm text-[#A8A19B] leading-relaxed max-w-sm">
              The vanguard of Japanese plant biotechnology. Bio-fermented vegan collagen crafted in 250ml slim cans with zero sugar and organic monk fruit sweetener. Engineered for premier retail, hospitality, and wellness partners worldwide.
            </p>
            <div className="flex items-center gap-2 text-xs text-gold-champagne font-mono">
              <ShieldCheck className="w-4 h-4 text-gold-soft" />
              <span>Certified Vegan • Non-GMO • 100% Recyclable Aluminum</span>
            </div>
          </div>

          {/* Wholesale Portals */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-luxury text-gold-soft font-bold">
              Wholesale Portals
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C5BEB7]">
              <li>
                <Link href="/wholesale" className="hover:text-white transition-colors">
                  Wholesale Packs (6, 12, 24)
                </Link>
              </li>
              <li>
                <Link href="/wholesale#quote-builder" className="hover:text-white transition-colors">
                  B2B Quote Builder
                </Link>
              </li>
              <li>
                <Link href="/products/strawberry-lime" className="hover:text-white transition-colors">
                  Strawberry Lime Case Specs
                </Link>
              </li>
              <li>
                <Link href="/products/cranberry" className="hover:text-white transition-colors">
                  Cranberry Case Specs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Request Buyer Tasting Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-luxury text-gold-soft font-bold">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C5BEB7]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  The Japanese Bio-Lab Story
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
                  B2B Wholesale Terms of Trade
                </Link>
              </li>
            </ul>
          </div>

          {/* B2B Catalogue Subscription */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-luxury text-gold-soft font-bold">
              B2B Rate Card
            </h4>
            <p className="text-xs text-[#A8A19B] leading-relaxed">
              Get the latest distributor export rate sheet and seasonal flavor release schedules.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-leafGreen/20 border border-leafGreen/40 text-xs text-white">
                <CheckCircle2 className="w-4 h-4 text-leafGreen" />
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
                    className="w-full bg-white/5 border border-white/20 rounded-full px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-gold-soft"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3.5 bg-crimson hover:bg-crimson-hover rounded-full text-white text-xs font-bold transition flex items-center justify-center"
                    aria-label="Download catalogue"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-[#8C847E] block">
                  Strictly commercial communications. Zero spam.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Regulatory & Compliance Disclaimers */}
        <div className="py-8 border-b border-white/10 text-[11px] text-[#8C847E] space-y-2 leading-relaxed">
          <p>
            <strong className="text-gold-soft">Compliance Notice:</strong> COLLAVIAH is a functional beverage formulated with Japan-based vegan fermented collagen peptides. It is designed to support daily dietary wellness and hydration. It is not intended to diagnose, treat, cure, or prevent any medical disease or pathological condition.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-[10px] text-[#A8A19B]">
            <span>Regulatory: {REGULATORY_COMPLIANCE_NOTES.fssaiLicense}</span>
            <span>Origin: {REGULATORY_COMPLIANCE_NOTES.manufactureOrigin}</span>
            <span>Shelf Life: {REGULATORY_COMPLIANCE_NOTES.shelfLife}</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C847E]">
          <p>© {new Date().getFullYear()} COLLAVIAH JAPAN BEVERAGE CO. All rights reserved.</p>
          <p className="font-serif italic text-white/70">
            Nourish • Rejuvenate • Glow
          </p>
        </div>
      </div>
    </footer>
  );
};

