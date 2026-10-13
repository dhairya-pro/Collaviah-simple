"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, QuoteFormData } from "@/lib/validations/quoteSchema";
import { useQuote } from "@/context/QuoteContext";
import { WHOLESALE_PACKS } from "@/data/packs";
import { FLAVORS } from "@/data/flavors";
import { formatWhatsAppMessage } from "@/lib/utils";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Send,
  Plus,
  Minus,
  Sparkles,
  Package,
  Layers,
  Building,
  TrendingUp,
  DollarSign,
  Calculator,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const QuoteBuilderSection: React.FC = () => {
  const {
    items,
    detailedItems,
    totalCartons,
    totalCans,
    updateQuantity,
    addItem,
    clearCart,
  } = useQuote();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    ref: string;
    message: string;
  } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Commercial Profit & Retail Margin Calculator State
  const [targetMsrp, setTargetMsrp] = useState<number>(4.5); // Target retail price per can in USD
  const [showMarginCalc, setShowMarginCalc] = useState<boolean>(true);

  // Dynamic wholesale cost basis per can based on volume tier
  const effectiveWholesaleCostPerCan = totalCartons >= 30 ? 2.05 : totalCartons >= 15 ? 2.25 : 2.45;
  const profitPerCan = Math.max(0, targetMsrp - effectiveWholesaleCostPerCan);
  const grossMarginPercent = targetMsrp > 0 ? ((profitPerCan / targetMsrp) * 100).toFixed(1) : "0";
  const projectedConsignmentProfit = (totalCans > 0 ? totalCans : 96) * profitPerCan;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      businessType: "Retailer / Supermarket",
      expectedMonthlyVolume: "10 - 25 Cartons (Pilot Order)",
      requestSamples: false,
      websiteUrlHp: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          items: detailedItems,
          totalCartons,
          totalCans,
          projectedMargin: `${grossMarginPercent}%`,
        }),
      });

      const resJson = await response.json();

      if (!response.ok) {
        throw new Error(resJson.error || "Failed to submit quote inquiry");
      }

      setSubmissionSuccess({
        ref: resJson.quoteRef,
        message: resJson.message,
      });

      // Fire celebratory sakura petals confetti
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#B5124A", "#F6D9DD", "#D4A94F", "#FAF0F2"],
      });

      reset();
    } catch (err: any) {
      setSubmitError(err.message || "An unexpected error occurred. Please try WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "819012345678";

  const handleWhatsAppInstant = () => {
    const text = formatWhatsAppMessage({
      name: "Commercial Buyer",
      businessName: "Wholesale Order Inquiry",
      businessType: "Wholesale Partner",
      items: detailedItems.map((item) => ({
        packName: item.packName,
        flavor: item.flavorName,
        cartons: item.cartons,
        totalCans: item.totalCans,
      })),
      totalCartons,
      totalCans,
    });
    window.open(`https://wa.me/${whatsappPhone}?text=${text}`, "_blank");
  };

  return (
    <section
      id="quote-builder"
      className="py-28 bg-gradient-to-b from-champagne-light via-pearl to-champagne-light/60 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-gold-antique font-semibold block">
            — B2B COMMERCIAL CONFIGURATOR & MARGIN ANALYZER —
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-richBlack mt-2">
            Build Your Wholesale Order
          </h2>
          <p className="text-charcoal text-sm sm:text-base mt-3 leading-relaxed">
            Customize case quantities, view total can volume in real time, analyze expected retail margins, and receive formal wholesale rate cards with volume discounts.
          </p>
        </div>

        {/* B2B COMMERCIAL MARGIN & RESALE PROFIT ESTIMATOR BANNER */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-richBlack via-[#26211F] to-richBlack text-white border border-gold-soft/30 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-1.5 max-w-md">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-soft font-bold flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-gold-soft" />
                <span>Commercial Retailer ROI Estimator</span>
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Projected Resale Margin Calculator
              </h3>
              <p className="text-xs text-white/70">
                Adjust your venue's target consumer selling price to inspect your profit yield per case and batch:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div>
                <label className="text-[10px] uppercase font-mono text-white/60 block">Target Retail / Can</label>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs text-gold-soft font-bold">$</span>
                  <input
                    type="number"
                    step="0.25"
                    min="3.00"
                    max="9.00"
                    value={targetMsrp}
                    onChange={(e) => setTargetMsrp(parseFloat(e.target.value) || 4.5)}
                    className="w-16 bg-white/10 border border-white/20 rounded px-2 py-0.5 text-xs text-white font-mono font-bold focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-white/60 block">Gross Margin %</span>
                <span className="text-lg font-mono font-bold text-leafGreen block mt-0.5">
                  {grossMarginPercent}%
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-white/60 block">Profit / Can</span>
                <span className="text-lg font-mono font-bold text-gold-soft block mt-0.5">
                  +${profitPerCan.toFixed(2)}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono text-white/60 block">Batch Gross Profit</span>
                <span className="text-lg font-mono font-bold text-white block mt-0.5">
                  ${projectedConsignmentProfit.toFixed(0)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN: INTERACTIVE ORDER CONFIGURATOR & LIVE CAN GRID */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-gold-champagne/80 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-gold-champagne/30">
                <h3 className="font-serif text-xl font-bold text-richBlack flex items-center gap-2">
                  <Package className="w-5 h-5 text-crimson" />
                  <span>Carton Allocation</span>
                </h3>
                <span className="text-xs font-mono font-semibold text-gold-antique">
                  {detailedItems.length} Formats Added
                </span>
              </div>

              {/* Quick Add Carton Format Buttons */}
              <div className="pt-4 pb-2">
                <label className="text-[11px] font-sans uppercase tracking-luxury text-charcoal-muted block mb-2">
                  Quick Add Format to Inquiry:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {WHOLESALE_PACKS.map((pack) => (
                    <button
                      key={pack.id}
                      type="button"
                      onClick={() => addItem(pack.id, "mixed", 1)}
                      className="p-2.5 rounded-xl border border-gold-champagne/60 hover:border-gold-soft hover:bg-champagne-light/50 text-left transition flex flex-col justify-between"
                    >
                      <span className="text-xs font-serif font-bold text-richBlack">{pack.name}</span>
                      <span className="text-[10px] font-mono text-charcoal-muted">+{pack.size} cans</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Items in Quote */}
              <div className="mt-4 space-y-3 max-h-[320px] overflow-y-auto pr-1">
                {detailedItems.map((item) => (
                  <div
                    key={`${item.packId}-${item.flavorId}`}
                    className="p-3.5 rounded-xl bg-champagne-light/40 border border-gold-champagne/40 flex items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-xs font-serif font-bold text-richBlack">
                        {item.packName}
                      </h4>
                      <p className="text-[11px] text-charcoal-muted">
                        Flavor: <span className="text-crimson font-medium">{item.flavorName}</span>
                      </p>
                      <p className="text-[10px] font-mono text-charcoal/70">
                        {item.cartons} cs × {item.packSize} = {item.totalCans} cans
                      </p>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-gold-champagne px-2 py-1 shadow-sm">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.packId, item.flavorId, item.cartons - 1)
                        }
                        className="text-charcoal hover:text-richBlack disabled:opacity-30 p-0.5"
                        disabled={item.cartons <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs font-bold text-richBlack w-6 text-center">
                        {item.cartons}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.packId, item.flavorId, item.cartons + 1)
                        }
                        className="text-charcoal hover:text-richBlack p-0.5"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* LIVE SUMMARY TOTALS BOX */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-champagne-light via-white to-blush/20 border border-gold-soft/40 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-sans uppercase tracking-wider text-charcoal">
                    Total Wholesale Cartons:
                  </span>
                  <span className="font-mono text-lg font-bold text-richBlack">
                    {totalCartons} Cases
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-sans uppercase tracking-wider text-charcoal">
                    Total 250ml Slim Cans:
                  </span>
                  <span className="font-mono text-lg font-bold text-crimson">
                    {totalCans} Cans
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gold-champagne/30 text-xs">
                  <span className="text-charcoal-muted">Estimated Volume Tier:</span>
                  <span className="font-semibold text-leafGreen">
                    {totalCartons >= 30
                      ? "High-Velocity Pallet (Tier 3 -18%)"
                      : totalCartons >= 15
                      ? "Standard Commercial (Tier 2 -10%)"
                      : "Entry Wholesale (Tier 1 Base)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Pill */}
            <div className="p-4 rounded-2xl bg-white border border-gold-champagne/60 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-[#25D366]/15 text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-richBlack block">
                    Prefer direct chat?
                  </span>
                  <span className="text-[11px] text-charcoal-muted block">
                    Export orders desk responds in minutes
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppInstant}
                className="px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold tracking-wide transition shadow-sm"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: REACT HOOK FORM + ZOD ENQUIRY SUBMISSION */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-gold-champagne shadow-lg">
              <div className="mb-6">
                <span className="text-[10px] font-sans uppercase tracking-luxury text-gold-antique font-semibold block">
                  Step 2 of 2
                </span>
                <h3 className="font-serif text-2xl font-bold text-richBlack mt-0.5">
                  Business & Procurement Contact
                </h3>
                <p className="text-xs text-charcoal mt-1">
                  All requests are processed under strict commercial confidentiality.
                </p>
              </div>

              {/* SUCCESS NOTICE */}
              <AnimatePresence>
                {submissionSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-5 rounded-2xl bg-leafGreen/10 border border-leafGreen/30 text-leafGreen space-y-2"
                  >
                    <div className="flex items-center gap-2 font-serif font-bold text-base">
                      <CheckCircle2 className="w-5 h-5 text-leafGreen" />
                      <span>Quote Inquiry Received (#{submissionSuccess.ref})</span>
                    </div>
                    <p className="text-xs text-charcoal leading-relaxed">
                      {submissionSuccess.message} Our trade relationship manager will contact you within 4 business hours with custom CIF/FOB pricing.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ERROR NOTICE */}
              {submitError && (
                <div className="mb-6 p-4 rounded-xl bg-crimson/10 border border-crimson/30 text-crimson flex items-center gap-3 text-xs">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* B2B FORM */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Honeypot field - invisible to humans */}
                <input
                  type="text"
                  {...register("websiteUrlHp")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="text-[11px] font-sans uppercase tracking-luxury text-charcoal font-semibold block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="e.g. Kenji Tanaka / Sarah Jenkins"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs text-richBlack bg-pearl focus:outline-none transition ${
                        errors.fullName ? "border-crimson ring-1 ring-crimson" : "border-gold-champagne focus:border-gold-soft"
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[10px] text-crimson mt-1 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="text-[11px] font-sans uppercase tracking-luxury text-charcoal font-semibold block mb-1">
                      Company / Venue Name *
                    </label>
                    <input
                      type="text"
                      {...register("businessName")}
                      placeholder="e.g. Lumina Gourmet Markets"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs text-richBlack bg-pearl focus:outline-none transition ${
                        errors.businessName ? "border-crimson ring-1 ring-crimson" : "border-gold-champagne focus:border-gold-soft"
                      }`}
                    />
                    {errors.businessName && (
                      <span className="text-[10px] text-crimson mt-1 block">
                        {errors.businessName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Business Type */}
                  <div>
                    <label className="text-[11px] font-sans uppercase tracking-luxury text-charcoal font-semibold block mb-1">
                      Business Category *
                    </label>
                    <select
                      {...register("businessType")}
                      className="w-full px-4 py-2.5 rounded-xl border border-gold-champagne text-xs text-richBlack bg-pearl focus:outline-none focus:border-gold-soft"
                    >
                      <option value="Retailer / Supermarket">Retailer / Gourmet Supermarket</option>
                      <option value="Specialty Cafe / Eatery">Specialty Cafe / Matcha Bar</option>
                      <option value="Gym / Fitness / Pilates">Gym / Fitness Studio / Pilates</option>
                      <option value="Salon / Spa / Aesthetic Clinic">Salon / Med-Spa / Luxury Wellness</option>
                      <option value="Hotel / Hospitality / Minibar">Hotel / Hospitality / Minibar</option>
                      <option value="Corporate Gifting">Corporate Gifting & Hampers</option>
                      <option value="Beverage Distributor / Wholesaler">Beverage Distributor / Wholesaler</option>
                      <option value="Other Commercial Buyer">Other Commercial Buyer</option>
                    </select>
                  </div>

                  {/* Role */}
                  <div>
                    <label className="text-[11px] font-sans uppercase tracking-luxury text-charcoal font-semibold block mb-1">
                      Designation / Role *
                    </label>
                    <input
                      type="text"
                      {...register("role")}
                      placeholder="e.g. F&B Director, Owner, Buyer"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs text-richBlack bg-pearl focus:outline-none transition ${
                        errors.role ? "border-crimson ring-1 ring-crimson" : "border-gold-champagne focus:border-gold-soft"
                      }`}
                    />
                    {errors.role && (
                      <span className="text-[10px] text-crimson mt-1 block">
                        {errors.role.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="text-[11px] font-sans uppercase tracking-luxury text-charcoal font-semibold block mb-1">
                      Commercial Email *
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="buyer@lumina-markets.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs text-richBlack bg-pearl focus:outline-none transition ${
                        errors.email ? "border-crimson ring-1 ring-crimson" : "border-gold-champagne focus:border-gold-soft"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-crimson mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="text-[11px] font-sans uppercase tracking-luxury text-charcoal font-semibold block mb-1">
                      Phone / WhatsApp (with country code) *
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="+81 90 1234 5678"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs text-richBlack bg-pearl focus:outline-none transition ${
                        errors.phone ? "border-crimson ring-1 ring-crimson" : "border-gold-champagne focus:border-gold-soft"
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-crimson mt-1 block">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Delivery Location */}
                  <div>
                    <label className="text-[11px] font-sans uppercase tracking-luxury text-charcoal font-semibold block mb-1">
                      Destination City & Country *
                    </label>
                    <input
                      type="text"
                      {...register("deliveryLocation")}
                      placeholder="e.g. Tokyo, Japan or Mumbai, India"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs text-richBlack bg-pearl focus:outline-none transition ${
                        errors.deliveryLocation ? "border-crimson ring-1 ring-crimson" : "border-gold-champagne focus:border-gold-soft"
                      }`}
                    />
                    {errors.deliveryLocation && (
                      <span className="text-[10px] text-crimson mt-1 block">
                        {errors.deliveryLocation.message}
                      </span>
                    )}
                  </div>

                  {/* Expected Monthly Volume */}
                  <div>
                    <label className="text-[11px] font-sans uppercase tracking-luxury text-charcoal font-semibold block mb-1">
                      Expected Monthly Volume *
                    </label>
                    <select
                      {...register("expectedMonthlyVolume")}
                      className="w-full px-4 py-2.5 rounded-xl border border-gold-champagne text-xs text-richBlack bg-pearl focus:outline-none focus:border-gold-soft"
                    >
                      <option value="10 - 25 Cartons (Pilot Order)">10 – 25 Cartons (Initial Pilot)</option>
                      <option value="25 - 50 Cartons (Multi-Venue)">25 – 50 Cartons (Multi-Venue)</option>
                      <option value="50 - 150 Cartons (Regional Retail)">50 – 150 Cartons (Regional Retail)</option>
                      <option value="150+ Cartons / Full Pallets">150+ Cartons / Full Pallets</option>
                    </select>
                  </div>
                </div>

                {/* GST / Tax ID (Optional) */}
                <div>
                  <label className="text-[11px] font-sans uppercase tracking-luxury text-charcoal font-semibold block mb-1">
                    GST / VAT / Corporate Tax ID (Optional)
                  </label>
                  <input
                    type="text"
                    {...register("taxIdOrGst")}
                    placeholder="Enter tax registration number for tax-exempt B2B invoices"
                    className="w-full px-4 py-2.5 rounded-xl border border-gold-champagne text-xs text-richBlack bg-pearl focus:outline-none focus:border-gold-soft"
                  />
                </div>

                {/* Specific Notes */}
                <div>
                  <label className="text-[11px] font-sans uppercase tracking-luxury text-charcoal font-semibold block mb-1">
                    Order Notes or Specific Delivery Requirements
                  </label>
                  <textarea
                    rows={2}
                    {...register("notes")}
                    placeholder="Provide details on receiving dock requirements, target launch date, or custom pallet splits..."
                    className="w-full px-4 py-2 rounded-xl border border-gold-champagne text-xs text-richBlack bg-pearl focus:outline-none focus:border-gold-soft"
                  />
                </div>

                {/* Tasting Sample Kit Checkbox */}
                <div className="pt-2">
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-champagne-light/50 border border-gold-champagne/40 cursor-pointer hover:bg-champagne-light transition">
                    <input
                      type="checkbox"
                      {...register("requestSamples")}
                      className="w-4 h-4 text-crimson rounded border-gold-champagne focus:ring-crimson"
                    />
                    <span className="text-xs text-charcoal font-medium">
                      Include a complimentary 2-flavor B2B tasting kit (for verified retail/distributor buyers)
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full bg-crimson hover:bg-crimson-hover disabled:opacity-60 text-white text-xs font-sans uppercase font-bold tracking-luxury transition-all duration-300 shadow-xl shadow-crimson/25 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-magnetic"
                  >
                    {isSubmitting ? (
                      <span>Generating Wholesale Quotation...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Submit Wholesale Quote Request</span>
                      </>
                    )}
                  </button>
                  <span className="text-[10px] text-center text-charcoal-muted block mt-2">
                    Guaranteed reply within 4 business hours. No credit card required.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
