import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Privacy Policy | COLLAVIAH Wholesale",
  description: "B2B commercial privacy policy governing RFQs, business communications, and trade confidentiality.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-pearl min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block mb-2">
          — LEGAL & DATA GOVERNANCE —
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-richBlack mb-6">
          B2B Commercial Privacy Policy
        </h1>
        <p className="text-xs font-mono text-charcoal-muted mb-8 pb-4 border-b border-gold-champagne/40">
          Last Updated: October 2026 • Applicable to all commercial wholesale inquiries and partners
        </p>

        <div className="space-y-8 text-xs sm:text-sm text-charcoal leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg text-richBlack">
              1. Commercial Data Collection
            </h2>
            <p>
              COLLAVIAH collects commercial information provided voluntarily by business buyers through our quote configurator, sample requests, and trade discussions. This includes full name, business legal name, commercial email address, business phone/WhatsApp, billing and delivery addresses, business category, and corporate tax/GST identification numbers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg text-richBlack">
              2. Use of Commercial Information
            </h2>
            <p>
              Your commercial data is used exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prepare and deliver formal wholesale quotations and rate schedules.</li>
              <li>Coordinate sample kit dispatches and freight logistics.</li>
              <li>Verify commercial buyer identity and establish wholesale credit terms.</li>
              <li>Communicate critical product updates, batch analyses, and seasonal production schedules.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg text-richBlack">
              3. Non-Disclosure & Trade Protection
            </h2>
            <p>
              We treat all B2B order allocations, store locations, and negotiated tier pricing with absolute confidentiality. We do not sell, rent, or lease wholesale partner contact lists to third-party marketing entities. Information is shared only with verified logistics and customs clearance partners strictly to execute delivery.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg text-richBlack">
              4. Data Retention & Deletion
            </h2>
            <p>
              Commercial inquiries are archived for legal and tax compliance in accordance with Japanese and international trade statutes. Commercial partners may request a review or deletion of non-essential records by contacting <a href="mailto:privacy@collaviah.com" className="text-crimson font-mono underline">privacy@collaviah.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

