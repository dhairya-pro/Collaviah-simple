import React from "react";
import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pearl px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-antique font-semibold block">
          404 • NOT FOUND
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-richBlack">
          Vintage or Page Not Found
        </h1>

        <p className="text-charcoal text-sm leading-relaxed">
          The page or product formulation you are looking for has been moved or does not exist in our catalog.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-crimson hover:bg-crimson-hover text-white text-xs font-sans uppercase font-bold tracking-luxury transition shadow-md shadow-crimson/20 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/wholesale"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-champagne-light hover:bg-champagne text-richBlack border border-gold-champagne text-xs font-sans uppercase font-bold tracking-luxury transition"
          >
            <span>Wholesale Packs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

