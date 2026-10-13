"use client";

import React from "react";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
  speedSec?: number;
  separator?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  reverse = false,
  className = "",
  speedSec = 30,
  separator = "•",
}) => {
  const content = items.join(`  ${separator}  `);

  return (
    <div
      className={`relative w-full overflow-hidden whitespace-nowrap select-none py-3 border-y border-gold-soft/20 bg-champagne-light/50 backdrop-blur-sm ${className}`}
      aria-hidden="true"
    >
      <div
        className={`inline-flex items-center gap-8 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: `${speedSec}s` }}
      >
        {Array.from({ length: 4 }).map((_, idx) => (
          <span
            key={idx}
            className="text-xs sm:text-sm font-serif uppercase tracking-[0.3em] text-charcoal/80 flex items-center gap-8"
          >
            <span>{content}</span>
            <span className="text-gold-soft text-base">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

