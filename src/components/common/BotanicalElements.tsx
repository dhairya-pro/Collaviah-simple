"use client";

import React from "react";

export const StrawberryVector = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 100 110" fill="none" className={className}>
    <defs>
      <radialGradient id="strawberryGrad" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#FF4D6D" />
        <stop offset="60%" stopColor="#D7263D" />
        <stop offset="100%" stopColor="#8E0F24" />
      </radialGradient>
      <filter id="fruitGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#D7263D" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#fruitGlow)">
      {/* Strawberry Berry */}
      <path
        d="M 20 30 C 5 50, 15 85, 48 102 C 52 102, 85 85, 95 50 C 105 20, 75 18, 50 25 C 30 18, 25 22, 20 30 Z"
        fill="url(#strawberryGrad)"
      />
      {/* Strawberry Seeds */}
      {[
        [35, 40], [50, 36], [65, 42],
        [28, 55], [45, 52], [62, 56], [78, 52],
        [36, 70], [50, 68], [68, 72],
        [44, 85], [56, 84],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <ellipse cx={cx} cy={cy} rx="2" ry="3" fill="#FFE3EA" />
          <circle cx={cx - 0.5} cy={cy - 0.5} r="0.8" fill="#FFF8F9" />
        </g>
      ))}
      {/* Green Calyx Leaf Crown */}
      <path
        d="M 50 25 L 30 12 L 40 22 L 20 20 L 36 28 L 50 10 L 64 28 L 80 20 L 60 22 L 70 12 Z"
        fill="#74A82E"
        stroke="#4B771A"
        strokeWidth="1"
      />
      <path d="M 50 10 Q 52 2 54 0" stroke="#4B771A" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  </svg>
);

export const LimeSliceVector = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <defs>
      <linearGradient id="limeRind" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8CC63F" />
        <stop offset="100%" stopColor="#4A8014" />
      </linearGradient>
      <filter id="limeShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#4A8014" floodOpacity="0.2" />
      </filter>
    </defs>
    <g filter="url(#limeShadow)">
      {/* Outer Rind */}
      <circle cx="50" cy="50" r="46" fill="url(#limeRind)" />
      {/* White Pith */}
      <circle cx="50" cy="50" r="40" fill="#F4FBE4" />
      {/* Lime Flesh Segments */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <path
          key={i}
          d="M 50 50 L 42 16 A 36 36 0 0 1 58 16 Z"
          fill="#B5E052"
          stroke="#F4FBE4"
          strokeWidth="1.5"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      {/* Center core */}
      <circle cx="50" cy="50" r="5" fill="#F4FBE4" />
      <circle cx="50" cy="50" r="2.5" fill="#E2F6B8" />
    </g>
  </svg>
);

export const LemonLimeVector = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <defs>
      <radialGradient id="lemonGrad" cx="35%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#F5E84A" />
        <stop offset="60%" stopColor="#D4C200" />
        <stop offset="100%" stopColor="#9A8A00" />
      </radialGradient>
      <radialGradient id="limeGrad" cx="35%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#8BE05A" />
        <stop offset="65%" stopColor="#5AA028" />
        <stop offset="100%" stopColor="#2F5D10" />
      </radialGradient>
      <filter id="lemonLimeGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#C8B400" floodOpacity="0.3" />
      </filter>
    </defs>
    <g filter="url(#lemonLimeGlow)">
      {/* Stem & Leaves */}
      <path d="M 50 32 Q 54 14 64 8" stroke="#3D5A2B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 60 14 C 74 8, 82 18, 70 26 C 60 22, 58 16, 60 14 Z" fill="#4C7836" />
      <path d="M 46 18 C 32 12, 27 22, 40 28 Z" fill="#3D5A2B" />

      {/* Lemon (large, back) */}
      <ellipse cx="38" cy="60" rx="26" ry="22" fill="url(#lemonGrad)" />
      <ellipse cx="30" cy="50" rx="8" ry="4" fill="#FFFFFF" opacity="0.45" />
      {/* Lemon tip */}
      <ellipse cx="62" cy="62" rx="4" ry="3" fill="#C8B200" opacity="0.8" />

      {/* Lime (smaller, front right) */}
      <circle cx="66" cy="52" r="18" fill="url(#limeGrad)" />
      <ellipse cx="58" cy="44" rx="6" ry="3" fill="#FFFFFF" opacity="0.5" />
      <circle cx="70" cy="64" r="2.5" fill="#2F5A10" />
    </g>
  </svg>
);

export const MonkFruitVector = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <defs>
      <radialGradient id="monkFruitGrad" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#A88B52" />
        <stop offset="55%" stopColor="#785B28" />
        <stop offset="100%" stopColor="#463110" />
      </radialGradient>
      <filter id="monkGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#785B28" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#monkGlow)">
      {/* Stem */}
      <path d="M 50 20 Q 52 8 60 5" stroke="#463110" strokeWidth="3" strokeLinecap="round" />
      {/* Round gourd body */}
      <ellipse cx="50" cy="56" rx="36" ry="38" fill="url(#monkFruitGrad)" />
      {/* Subtle ribbed striations */}
      <path d="M 50 18 Q 30 56 50 94" stroke="#5C4218" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      <path d="M 50 18 Q 70 56 50 94" stroke="#5C4218" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      <path d="M 50 18 Q 15 56 50 94" stroke="#5C4218" strokeWidth="1.2" strokeOpacity="0.3" fill="none" />
      <path d="M 50 18 Q 85 56 50 94" stroke="#5C4218" strokeWidth="1.2" strokeOpacity="0.3" fill="none" />
      {/* Top calyx button */}
      <circle cx="50" cy="20" r="5" fill="#463110" />
      {/* Satin highlight */}
      <ellipse cx="38" cy="42" rx="10" ry="6" fill="#D4AF37" opacity="0.35" transform="rotate(-20 38 42)" />
    </g>
  </svg>
);

export const BlushPetalVector = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className}>
    <defs>
      <linearGradient id="petalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="40%" stopColor="#FBD7DF" />
        <stop offset="100%" stopColor="#F1A7B8" />
      </linearGradient>
    </defs>
    <path
      d="M 30 5 C 48 5, 55 25, 45 42 C 38 54, 30 56, 30 56 C 30 56, 22 54, 15 42 C 5 25, 12 5, 30 5 Z"
      fill="url(#petalGrad)"
      opacity="0.88"
    />
    <path d="M 30 12 L 30 45" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" strokeLinecap="round" />
  </svg>
);

export const LeafVector = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className}>
    <defs>
      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6AA339" />
        <stop offset="100%" stopColor="#2F5D3A" />
      </linearGradient>
    </defs>
    <path
      d="M 8 52 C 12 30, 28 10, 52 8 C 50 30, 32 48, 8 52 Z"
      fill="url(#leafGrad)"
    />
    <path d="M 8 52 Q 32 30 52 8" stroke="#A7D674" strokeWidth="1.2" fill="none" />
  </svg>
);

export const WaterDropletVector = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 40 50" fill="none" className={className}>
    <defs>
      <linearGradient id="dropGrad" x1="20%" y1="20%" x2="80%" y2="80%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#E2F0F9" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#A8D4F0" stopOpacity="0.4" />
      </linearGradient>
    </defs>
    <path
      d="M 20 4 C 20 4, 6 22, 6 32 C 6 41, 12 47, 20 47 C 28 47, 34 41, 34 32 C 34 22, 20 4, 20 4 Z"
      fill="url(#dropGrad)"
      stroke="#FFFFFF"
      strokeWidth="0.8"
    />
    <ellipse cx="14" cy="28" rx="3" ry="5" fill="#FFFFFF" opacity="0.8" transform="rotate(-15 14 28)" />
  </svg>
);

