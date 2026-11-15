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
            const canFlavor = isSecondHalf ? "lemon-lime" : activeFlavor === "mixed" ? "strawberry-lime" : activeFlavor;
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
                {/* Mini Realistic Can */}
                <img
                  src={isRed ? "/images/can-strawberry-lime.png" : "/images/can-lemon-lime.png"}
                  alt={canFlavor}
                  className="w-5 sm:w-6.5 h-auto max-h-14 object-contain drop-shadow-md pointer-events-none select-none transition-transform duration-200"
                  loading="lazy"
                />
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
