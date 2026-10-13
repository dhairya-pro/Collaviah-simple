import React from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Wholesale Accounts Desk | COLLAVIAH",
  description:
    "Direct commercial inquiries, distributor applications, and complimentary buyer tasting kits for COLLAVIAH Japan-based vegan collagen beverages.",
};

export default function ContactPage() {
  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "819012345678";

  return (
    <div className="pt-24 pb-20 bg-pearl min-h-screen">
      <section className="py-16 bg-gradient-to-b from-champagne-light to-pearl border-b border-gold-champagne/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block mb-3">
            — COMMERCIAL CLIENT SERVICES —
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-richBlack">
            Wholesale Enquiries & Global Trade Desk
          </h1>
          <p className="text-charcoal text-base max-w-2xl mx-auto mt-4 font-light">
            Connect with our trade relationship managers for custom carton allocations, distributor exclusivity, and export freight quotations.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: DIRECT CONTACT CHANNELS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-gold-champagne shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-richBlack">
                Direct Trade Channels
              </h2>

              <div className="space-y-4 text-xs text-charcoal">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-champagne-light/50 border border-gold-champagne/30">
                  <Mail className="w-5 h-5 text-crimson flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-richBlack block">Wholesale Email</span>
                    <a href="mailto:wholesale@collaviah.com" className="text-crimson hover:underline">
                      wholesale@collaviah.com
                    </a>
                    <span className="text-[11px] text-charcoal-muted block mt-0.5">Response within 4 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20">
                  <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-richBlack block">Trade Desk WhatsApp</span>
                    <a
                      href={`https://wa.me/${whatsappPhone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#20BE5A] font-semibold hover:underline"
                    >
                      Instant WhatsApp Hotline →
                    </a>
                    <span className="text-[11px] text-charcoal-muted block mt-0.5">Mon–Sat, 09:00–18:00 JST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-champagne-light/50 border border-gold-champagne/30">
                  <MapPin className="w-5 h-5 text-gold-antique flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-richBlack block">Osaka Bio-Lab & Formulation Facility</span>
                    <p className="text-charcoal-muted mt-0.5 leading-snug">
                      Chuo-ku, Osaka 541-0041, Japan
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gold-champagne/30 flex items-center gap-2 text-xs text-leafGreen font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>NDA & Commercial Confidentiality Guaranteed</span>
              </div>
            </div>

            {/* Buyer Tasting Kit Notice */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-champagne-light to-[#FDECEF] border border-gold-soft/50 space-y-3">
              <div className="flex items-center gap-2 text-crimson font-serif font-bold text-base">
                <Sparkles className="w-4 h-4 text-crimson" />
                <span>Complimentary Tasting Kit</span>
              </div>
              <p className="text-xs text-charcoal leading-relaxed">
                Qualified retail buyers, F&B managers, and commercial distributors can request a 2-flavor sample box delivered directly to your corporate receiving address.
              </p>
              <Link
                href="/wholesale#quote-builder"
                className="inline-block text-xs font-bold text-crimson hover:text-crimson-hover uppercase tracking-wider"
              >
                Request via Quote Builder →
              </Link>
            </div>
          </div>

          {/* RIGHT: QUICK INQUIRY ROUTER */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gold-champagne shadow-md space-y-6">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-luxury text-gold-antique font-semibold block">
                  Quick Inquiry
                </span>
                <h3 className="font-serif text-2xl font-bold text-richBlack mt-0.5">
                  How Would You Like to Connect?
                </h3>
                <p className="text-xs text-charcoal-muted mt-1">
                  Choose the channel that best matches your procurement workflow:
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/wholesale#quote-builder"
                  className="block p-5 rounded-2xl border border-gold-champagne hover:border-crimson hover:bg-champagne-light/30 transition group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-base text-richBlack group-hover:text-crimson transition-colors">
                        1. Configure Cartons & Formal Quote
                      </h4>
                      <p className="text-xs text-charcoal-muted mt-1">
                        Use our interactive configurator for precise pack allocations (6, 12, 24) and instant tier calculation.
                      </p>
                    </div>
                    <span className="text-crimson font-bold text-sm">Open Configurator →</span>
                  </div>
                </Link>

                <a
                  href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
                    "Hello, I am interested in discussing wholesale pricing and distribution terms for COLLAVIAH."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/5 hover:bg-[#25D366]/10 transition group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-base text-richBlack">
                        2. Rapid WhatsApp Consultation
                      </h4>
                      <p className="text-xs text-charcoal-muted mt-1">
                        Chat directly with an international export account manager for immediate MOQ questions.
                      </p>
                    </div>
                    <span className="text-[#20BE5A] font-bold text-sm">Launch Chat →</span>
                  </div>
                </a>

                <div className="p-5 rounded-2xl border border-gold-champagne bg-champagne-light/40">
                  <h4 className="font-serif font-bold text-base text-richBlack">
                    3. Formal RFQ / Tender Email
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-1">
                    Send tender documents, vendor questionnaires, or distributor exclusivity proposals to:
                  </p>
                  <a
                    href="mailto:wholesale@collaviah.com"
                    className="inline-block mt-2 font-mono text-xs font-bold text-crimson hover:underline"
                  >
                    wholesale@collaviah.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

