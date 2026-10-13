"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuote } from "@/context/QuoteContext";
import { X, Trash2, Plus, Minus, MessageCircle, ArrowRight, PackageCheck } from "lucide-react";
import Link from "next/link";
import { formatWhatsAppMessage } from "@/lib/utils";

export const QuoteDrawer: React.FC = () => {
  const {
    isDrawerOpen,
    setIsDrawerOpen,
    detailedItems,
    totalCartons,
    totalCans,
    updateQuantity,
    removeItem,
    clearCart,
  } = useQuote();

  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "819012345678";

  const handleWhatsAppClick = () => {
    const text = formatWhatsAppMessage({
      name: "Wholesale Buyer",
      businessName: "Wholesale Inquiry",
      businessType: "Commercial Account",
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

  const handleScrollToQuoteForm = () => {
    setIsDrawerOpen(false);
    const formEl = document.getElementById("quote-builder");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/wholesale#quote-builder";
    }
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-richBlack/50 backdrop-blur-sm"
          />

          {/* Slide-over Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-md bg-pearl border-l border-gold-champagne/40 h-full flex flex-col z-10 shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-gold-champagne/30 bg-champagne-light flex items-center justify-between">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-luxury text-gold-antique font-semibold block">
                  Wholesale Enquiry Cart
                </span>
                <h3 className="font-serif text-xl text-richBlack font-bold flex items-center gap-2 mt-0.5">
                  Quote Drawer
                  <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-crimson/10 text-crimson">
                    {totalCartons} Cartons
                  </span>
                </h3>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-full hover:bg-champagne text-charcoal transition-colors"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {detailedItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-charcoal-muted">
                  <PackageCheck className="w-12 h-12 text-gold-soft mb-3 opacity-60" />
                  <p className="font-serif text-lg text-richBlack">Your quote drawer is empty</p>
                  <p className="text-xs mt-1 text-charcoal">
                    Add packs of 6, 12, or 24 cans to configure your wholesale inquiry.
                  </p>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="mt-5 px-5 py-2.5 rounded-full bg-crimson text-white text-xs font-semibold tracking-wide hover:bg-crimson-hover transition"
                  >
                    Browse Wholesale Packs
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center text-xs text-charcoal-muted pb-1">
                    <span>Configured Carton Items</span>
                    <button
                      onClick={clearCart}
                      className="hover:text-crimson transition-colors"
                    >
                      Clear all
                    </button>
                  </div>

                  {detailedItems.map((item) => (
                    <div
                      key={`${item.packId}-${item.flavorId}`}
                      className="p-4 rounded-xl border border-gold-champagne/50 bg-champagne-light/30 flex flex-col gap-3 relative transition hover:border-gold-soft"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-serif font-bold text-richBlack text-base">
                            {item.packName}
                          </h4>
                          <p className="text-xs text-charcoal-muted font-medium mt-0.5">
                            Flavor: <span className="text-crimson font-semibold">{item.flavorName}</span>
                          </p>
                          <p className="text-[11px] text-charcoal/70 mt-1 font-mono">
                            {item.packSize} cans/carton • Total: {item.totalCans} cans
                          </p>
                        </div>

                        <button
                          onClick={() => removeItem(item.packId, item.flavorId)}
                          className="text-charcoal-muted hover:text-crimson p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Stepper & MOQ Note */}
                      <div className="flex items-center justify-between pt-2 border-t border-gold-champagne/20">
                        <span className="text-[11px] text-gold-antique font-mono">
                          MOQ: {item.moq} cartons
                        </span>

                        <div className="flex items-center gap-2 bg-white rounded-lg border border-gold-champagne px-2 py-1 shadow-sm">
                          <button
                            onClick={() =>
                              updateQuantity(item.packId, item.flavorId, item.cartons - 1)
                            }
                            className="p-1 text-charcoal hover:text-richBlack disabled:opacity-40"
                            disabled={item.cartons <= 1}
                            aria-label="Decrease cartons"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-mono text-xs font-bold text-richBlack w-8 text-center">
                            {item.cartons}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.packId, item.flavorId, item.cartons + 1)
                            }
                            className="p-1 text-charcoal hover:text-richBlack"
                            aria-label="Increase cartons"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Footer Summary & CTAs */}
            {detailedItems.length > 0 && (
              <div className="p-6 border-t border-gold-champagne/30 bg-champagne-light/50 space-y-4">
                {/* Live Stats */}
                <div className="bg-white p-4 rounded-xl border border-gold-champagne/40 space-y-2">
                  <div className="flex justify-between text-xs text-charcoal">
                    <span>Total Cartons</span>
                    <span className="font-mono font-bold text-richBlack">{totalCartons} cases</span>
                  </div>
                  <div className="flex justify-between text-xs text-charcoal">
                    <span>Total 250ml Cans</span>
                    <span className="font-mono font-bold text-crimson">{totalCans} cans</span>
                  </div>
                  <div className="flex justify-between text-xs text-charcoal-muted pt-1 border-t border-gold-champagne/20 text-[11px]">
                    <span>Pricing Status</span>
                    <span className="text-leafGreen font-medium">B2B Volume Rate Card</span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={handleScrollToQuoteForm}
                    className="w-full py-3.5 px-4 rounded-full bg-crimson hover:bg-crimson-hover text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-crimson/20 transition-all hover:scale-[1.01]"
                  >
                    <span>Finalize B2B Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20BE5A] text-white text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant Quote via WhatsApp</span>
                  </button>
                </div>

                <p className="text-[10px] text-center text-charcoal-muted leading-tight">
                  Commercial inquiries only. Dedicated account manager assigned within 4 business hours.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

