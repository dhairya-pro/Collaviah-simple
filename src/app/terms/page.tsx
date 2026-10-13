import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale Terms of Trade | COLLAVIAH Commercial Supply",
  description: "Standard terms and conditions governing wholesale sales, carton orders, MOQ policies, and commercial freight.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-pearl min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block mb-2">
          — COMMERCIAL TRADE AGREEMENT —
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-richBlack mb-6">
          Wholesale Terms of Trade
        </h1>
        <p className="text-xs font-mono text-charcoal-muted mb-8 pb-4 border-b border-gold-champagne/40">
          Applicable to all commercial purchases, retail accounts, and regional beverage distribution contracts
        </p>

        <div className="space-y-8 text-xs sm:text-sm text-charcoal leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg text-richBlack">
              1. Scope & Acceptance
            </h2>
            <p>
              These Terms of Trade govern all wholesale purchases of COLLAVIAH 250ml beverage master cases. Placing a wholesale quote inquiry or executing an invoice confirms unconditional agreement to these terms. Consumer retail checkout is not offered through this platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg text-richBlack">
              2. Minimum Order Quantities (MOQ)
            </h2>
            <p>
              To maintain trade margin integrity and transit safety, baseline carton MOQs apply per packaging format:
            </p>
            <ul className="list-disc pl-5 space-y-1 font-mono text-xs">
              <li>Pack of 6 (Counter Display): 10 cartons (60 cans total)</li>
              <li>Pack of 12 (Standard Retail Shelf): 8 cartons (96 cans total)</li>
              <li>Pack of 24 (Master Distributor Shipper): 5 cartons (120 cans total)</li>
            </ul>
            <p>
              Trial accounts may combine formats to fulfill minimum monetary invoice thresholds upon written trade desk authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg text-richBlack">
              3. Pricing, Taxes & Payment Terms
            </h2>
            <p>
              All quotations are provided in commercial currency (JPY, USD, EUR, or INR depending on destination contract) exclusive of local value-added taxes, customs tariffs, or import duties unless expressly designated as DDP (Delivered Duty Paid).
            </p>
            <p>
              First-time orders are dispatched against pro-forma invoice clearance. Verified commercial accounts with consecutive order history are eligible to apply for Net 30 payment terms subject to corporate credit verification.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg text-richBlack">
              4. Freight, Inspection & Claims Protocol
            </h2>
            <p>
              Master cartons are shipped via insured freight carriers. Upon delivery, the receiving commercial buyer must inspect pallets for transit damage. Any claims for carton crushing or shortage must be documented with timestamped photos and submitted within 72 hours of consignment arrival.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg text-richBlack">
              5. Shelf-Life Guarantee
            </h2>
            <p>
              COLLAVIAH warrants that all wholesale cans dispatched from our manufacturing facilities carry a minimum remaining ambient shelf life of not less than 12 months at the time of delivery (out of 18 months standard shelf life).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

