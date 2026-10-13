"use client";

import React from "react";
import { WholesalePack, FlavorId } from "@/types";

interface CartonMockupProps {
  pack: WholesalePack;
  activeFlavor?: FlavorId | "mixed";
  isHovered?: boolean;
}

export const CartonMockup: React.FC<CartonMockupProps> = ({
  pack,
  activeFlavor = "strawberry-lime",
  isHovered = false,
}) => {
  const totalCans = pack.size;
  const cols = pack.gridConfig.cols;

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-b from-[#FBF7F2] to-[#EFE4D6] border border-gold-champagne/40 p-4 flex flex-col justify-between overflow-hidden shadow-sm group">
      {/* Gold foil carton seal / stamp */}
      <div className="flex items-center justify-between text-xs font-mono text-gold-antique uppercase tracking-widest z-10">
        <span className="font-semibold">{pack.name} Carton</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-white/80 border border-gold-antique/30">
          250ml x {pack.size} CANS
        </span>
      </div>

      {/* Interactive Can Grid Container */}
      <div className="my-auto py-2 flex items-center justify-center">
        <div
          className="grid gap-2 p-3 rounded-xl bg-white/80 border border-gold-champagne/60 shadow-inner max-w-full"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: totalCans }).map((_, idx) => {
            const isSecondHalf = activeFlavor === "mixed" && idx >= totalCans / 2;
            const canFlavor = isSecondHalf ? "cranberry" : activeFlavor === "mixed" ? "strawberry-lime" : activeFlavor;
            const isRed = canFlavor === "strawberry-lime";

            return (
              <div
                key={idx}
                className="relative flex flex-col items-center justify-center transition-transform duration-200"
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                  transitionDelay: `${idx * 10}ms`,
                }}
              >
                {/* Mini 2D slim can glyph */}
                <div
                  className={`w-5 sm:w-6 h-12 sm:h-14 rounded-full border border-white/60 shadow-md flex flex-col items-center justify-between py-1 transition-all duration-200 ${
                    isRed
                      ? "bg-gradient-to-b from-[#E63956] via-[#C41E3A] to-[#8E182D]"
                      : "bg-gradient-to-b from-[#A8153A] via-[#8E1B3A] to-[#50091E]"
                  }`}
                >
                  <div className="w-3.5 h-1 rounded-full bg-gradient-to-r from-gray-300 via-white to-gray-400" />
                  <div className="w-2.5 h-0.5 bg-gold-soft opacity-80" />
                  <div className="w-3.5 h-0.5 rounded-full bg-gray-400 opacity-60" />
                </div>
                {/* Number index indicator */}
                <span className="text-[9px] font-mono text-charcoal/60 mt-0.5 select-none opacity-0 group-hover:opacity-100 transition-opacity">
                  {idx + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carton base label */}
      <div className="flex items-center justify-between text-[11px] text-charcoal-muted pt-1 border-t border-gold-champagne/40 z-10">
        <span>Master Case: {pack.dimensions}</span>
        <span className="font-medium text-richBlack">{pack.grossWeight}</span>
      </div>
    </div>
  );
};
