"use client";

import React, { useRef } from "react";
import { FlavorId } from "@/types";

interface CanMockupProps {
  flavor: FlavorId;
  className?: string;
  showDroplets?: boolean;
  isFloating?: boolean;
  priority?: boolean;
  glow?: boolean;
  interactiveTilt?: boolean;
}

export const CanMockup: React.FC<CanMockupProps> = ({
  flavor = "strawberry-lime",
  className = "",
  showDroplets = true,
  isFloating = false,
  glow = false,
}) => {
  const isStrawberry = flavor === "strawberry-lime";

  // Palette definitions
  const bodyGradientStart = isStrawberry ? "#C41E3A" : "#72102B";
  const bodyGradientMid = isStrawberry ? "#E63956" : "#991B3D";
  const bodyGradientEnd = isStrawberry ? "#8E182D" : "#50091E";
  const accentGold = "#E5CCA5";
  const limeTint = "#9CC83C";

  return (
    <div
      className={`relative select-none will-change-transform ${
        isFloating ? "animate-float-gentle" : ""
      } ${className}`}
      style={{
        filter: glow
          ? isStrawberry
            ? "drop-shadow(0 16px 30px rgba(215, 38, 61, 0.22))"
            : "drop-shadow(0 16px 30px rgba(142, 27, 58, 0.25))"
          : undefined,
      }}
    >
      <svg
        viewBox="0 0 280 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        role="img"
        aria-label={`COLLAVIAH 250ml ${isStrawberry ? "Strawberry Lime" : "Cranberry"} Can`}
      >
        <defs>
          {/* Metallic rim gradients */}
          <linearGradient id={`canRimTop_${flavor}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7E7E84" />
            <stop offset="20%" stopColor="#ECECF0" />
            <stop offset="48%" stopColor="#FFFFFF" />
            <stop offset="78%" stopColor="#A2A2A7" />
            <stop offset="100%" stopColor="#5E5E62" />
          </linearGradient>

          <linearGradient id={`canNeck_${flavor}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#929298" />
            <stop offset="22%" stopColor="#E2E2E6" />
            <stop offset="50%" stopColor="#F8F8FA" />
            <stop offset="76%" stopColor="#BEBEC4" />
            <stop offset="100%" stopColor="#6E6E74" />
          </linearGradient>

          {/* Can body vertical lighting */}
          <linearGradient id={`canBody_${flavor}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={bodyGradientEnd} />
            <stop offset="12%" stopColor={bodyGradientMid} />
            <stop offset="36%" stopColor={bodyGradientStart} />
            <stop offset="52%" stopColor={isStrawberry ? "#FF7A8E" : "#B53355"} stopOpacity="0.85" />
            <stop offset="75%" stopColor={bodyGradientMid} />
            <stop offset="100%" stopColor={bodyGradientEnd} />
          </linearGradient>

          {/* Center soft glow via radial gradient (zero blur overhead!) */}
          <radialGradient id={`centerAura_${flavor}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={isStrawberry ? "#FFAEC0" : "#D4496E"} stopOpacity="0.4" />
            <stop offset="70%" stopColor={isStrawberry ? "#FFAEC0" : "#D4496E"} stopOpacity="0.1" />
            <stop offset="100%" stopColor={isStrawberry ? "#FFAEC0" : "#D4496E"} stopOpacity="0" />
          </radialGradient>

          {/* Dynamic Specular gloss highlight */}
          <linearGradient id={`canGloss_${flavor}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="36%" stopColor="#FFFFFF" stopOpacity="0.06" />
            <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="56%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
          </linearGradient>

          {/* Gold text foil gradient */}
          <linearGradient id={`goldFoil_${flavor}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8EDB8" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#FFF4D0" />
            <stop offset="100%" stopColor="#A06E15" />
          </linearGradient>

          {/* Bottom contact shadow */}
          <radialGradient id={`canBottomShadow_${flavor}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.5" />
            <stop offset="65%" stopColor="#000000" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Droplet liquid gradient */}
          <linearGradient id={`dropReflect_${flavor}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#E2F0F9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#96C8E6" stopOpacity="0.2" />
          </linearGradient>

          {/* Clip path for can body */}
          <clipPath id={`canBodyClip_${flavor}`}>
            <path d="M 45 75 Q 45 68 55 65 L 225 65 Q 235 68 235 75 L 235 550 Q 235 565 220 575 L 60 575 Q 45 565 45 550 Z" />
          </clipPath>
        </defs>

        {/* Contact shadow on floor */}
        <ellipse cx="140" cy="595" rx="88" ry="12" fill={`url(#canBottomShadow_${flavor})`} />

        {/* Top Rim & Pull-tab detail */}
        <path
          d="M 68 35 Q 140 25 212 35 Q 220 40 216 45 Q 140 40 64 45 Q 60 40 68 35 Z"
          fill={`url(#canRimTop_${flavor})`}
        />
        <ellipse cx="140" cy="36" rx="20" ry="4" stroke="#8E8E93" strokeWidth="1.5" fill="#C7C7CC" />
        <ellipse cx="140" cy="36" rx="7" ry="2" fill="#5A5A5E" />

        {/* Can Taper Neck */}
        <path
          d="M 64 45 Q 140 38 216 45 L 225 65 Q 140 58 55 65 Z"
          fill={`url(#canNeck_${flavor})`}
        />

        {/* MAIN CAN BODY */}
        <g clipPath={`url(#canBodyClip_${flavor})`}>
          {/* Base satin coat */}
          <rect x="40" y="60" width="200" height="520" fill={`url(#canBody_${flavor})`} />

          {/* Center luminous flare (hardware accelerated radial gradient) */}
          <ellipse
            cx="140"
            cy="310"
            rx="80"
            ry="180"
            fill={`url(#centerAura_${flavor})`}
          />

          {/* Japanese Kanji Seal Box */}
          <rect
            x="116"
            y="94"
            width="48"
            height="18"
            rx="3"
            fill="#000000"
            fillOpacity="0.25"
            stroke={accentGold}
            strokeWidth="0.8"
          />
          <text
            x="140"
            y="107"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="8.5"
            fontFamily="Montserrat, sans-serif"
            fontWeight="600"
            letterSpacing="2.5"
          >
            日本発 VEGAN
          </text>

          {/* Top Descriptor */}
          <text
            x="140"
            y="134"
            textAnchor="middle"
            fill={accentGold}
            fontSize="7"
            fontFamily="Montserrat, sans-serif"
            fontWeight="500"
            letterSpacing="2.2"
          >
            PREMIUM COLLAGEN BEVERAGE
          </text>

          <line x1="82" y1="144" x2="198" y2="144" stroke={accentGold} strokeWidth="0.8" strokeOpacity="0.75" />

          {/* MAIN BRAND WORDMARK: COLLAVIAH */}
          <text
            x="140"
            y="190"
            textAnchor="middle"
            fill={`url(#goldFoil_${flavor})`}
            fontSize="26"
            fontFamily="Playfair Display, serif"
            fontWeight="700"
            letterSpacing="4"
          >
            COLLAVIAH
          </text>

          {/* Script accent tagline */}
          <text
            x="140"
            y="212"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="14"
            fontFamily="Great Vibes, cursive"
            letterSpacing="1"
            opacity="0.95"
          >
            Glow from Within
          </text>

          {/* Botanical Fruit Silhouette / Badge Graphic in center */}
          <g transform="translate(140, 280)">
            <circle
              cx="0"
              cy="0"
              r="46"
              fill="#000000"
              fillOpacity="0.2"
              stroke={accentGold}
              strokeWidth="1"
              strokeDasharray="3 2"
            />

            {isStrawberry ? (
              // Strawberry + Sudachi Lime
              <g>
                <path
                  d="M -12 -12 C -24 0, -16 26, 0 34 C 16 26, 24 0, 12 -12 C 4 -18, -4 -18, -12 -12 Z"
                  fill="#FF3355"
                  stroke="#FFE5EC"
                  strokeWidth="1.2"
                />
                <circle cx="-6" cy="4" r="1.2" fill="#FFE5EC" />
                <circle cx="6" cy="4" r="1.2" fill="#FFE5EC" />
                <circle cx="0" cy="14" r="1.2" fill="#FFE5EC" />
                <circle cx="-4" cy="22" r="1.2" fill="#FFE5EC" />
                <circle cx="4" cy="22" r="1.2" fill="#FFE5EC" />
                <path d="M 0 -14 L -8 -20 L -2 -14 L 0 -22 L 2 -14 L 8 -20 Z" fill={limeTint} />
                <path
                  d="M 10 2 C 22 14, 24 30, 18 36 C 8 36, -2 24, 10 2 Z"
                  fill={limeTint}
                  stroke="#FFFFFF"
                  strokeWidth="1"
                  opacity="0.9"
                />
                <circle cx="12" cy="18" r="3" fill="#E4F7A8" />
              </g>
            ) : (
              // Wild Cranberry
              <g>
                <circle cx="-12" cy="4" r="16" fill="#A8153A" stroke="#FFFFFF" strokeWidth="1" />
                <circle cx="10" cy="-6" r="18" fill="#880E2E" stroke="#FFFFFF" strokeWidth="1" />
                <circle cx="6" cy="18" r="14" fill="#C41C48" stroke="#FFFFFF" strokeWidth="1" />
                <ellipse cx="-16" cy="-1" rx="4" ry="2" fill="#FFFFFF" opacity="0.6" />
                <ellipse cx="6" cy="-12" rx="5" ry="2.5" fill="#FFFFFF" opacity="0.6" />
                <ellipse cx="2" cy="13" rx="3.5" ry="1.5" fill="#FFFFFF" opacity="0.6" />
                <path d="M -8 -16 C -20 -28, 0 -32, 2 -18 Z" fill="#2F5D3A" stroke={accentGold} strokeWidth="0.8" />
                <path d="M 14 -18 C 28 -28, 26 -8, 16 -12 Z" fill="#3D754B" stroke={accentGold} strokeWidth="0.8" />
              </g>
            )}
          </g>

          {/* Flavor Name in bold clean typography */}
          <text
            x="140"
            y="360"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="15"
            fontFamily="Montserrat, sans-serif"
            fontWeight="700"
            letterSpacing="2.5"
          >
            {isStrawberry ? "STRAWBERRY LIME" : "CRANBERRY"}
          </text>

          <text
            x="140"
            y="376"
            textAnchor="middle"
            fill={accentGold}
            fontSize="8"
            fontFamily="Montserrat, sans-serif"
            fontWeight="500"
            letterSpacing="1.8"
          >
            {isStrawberry ? "苺とライムの植物性美活" : "野ばらとクランベリーの輝き"}
          </text>

          {/* Claim pills grid on lower can body */}
          <g transform="translate(65, 400)">
            <rect x="0" y="0" width="150" height="22" rx="11" fill="#000000" fillOpacity="0.25" stroke={accentGold} strokeWidth="0.8" />
            <text
              x="75"
              y="14"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="8"
              fontFamily="Montserrat, sans-serif"
              fontWeight="600"
              letterSpacing="1.2"
            >
              2,500mg BIO-FERMENTED COLLAGEN
            </text>
          </g>

          <g transform="translate(65, 430)">
            <rect x="0" y="0" width="70" height="18" rx="9" fill="#000000" fillOpacity="0.2" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="0.6" />
            <text x="35" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontFamily="Montserrat, sans-serif" fontWeight="500">
              ZERO SUGAR
            </text>

            <rect x="80" y="0" width="70" height="18" rx="9" fill="#000000" fillOpacity="0.2" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="0.6" />
            <text x="115" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontFamily="Montserrat, sans-serif" fontWeight="500">
              MONK FRUIT
            </text>
          </g>

          {/* Low Calorie & Volume Footer */}
          <g transform="translate(140, 480)">
            <text x="0" y="0" textAnchor="middle" fill={accentGold} fontSize="9" fontFamily="Montserrat, sans-serif" fontWeight="600" letterSpacing="1.5">
              LOW CALORIES • 250 ML
            </text>
            <text x="0" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="7" opacity="0.85" fontFamily="Montserrat, sans-serif" letterSpacing="1">
              JAPAN FORMULATION
            </text>
          </g>

          {/* Specular gloss reflection overlay */}
          <rect x="40" y="60" width="200" height="520" fill={`url(#canGloss_${flavor})`} />

          {/* CONDENSATION DROPLETS */}
          {showDroplets && (
            <g className="droplets-layer opacity-80 pointer-events-none">
              <path
                d="M 105 160 Q 107 195 106 230"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeOpacity="0.3"
                strokeLinecap="round"
                strokeDasharray="2 6"
              />
              <circle cx="106" cy="235" r="3" fill={`url(#dropReflect_${flavor})`} />

              <circle cx="180" cy="180" r="2.8" fill={`url(#dropReflect_${flavor})`} />

              <path
                d="M 172 290 Q 171 330 173 370"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeOpacity="0.25"
                strokeLinecap="round"
                strokeDasharray="1 8"
              />
              <circle cx="173" cy="374" r="3.5" fill={`url(#dropReflect_${flavor})`} />

              <circle cx="95" cy="290" r="1.6" fill="#FFFFFF" fillOpacity="0.4" />
              <circle cx="88" cy="340" r="2" fill="#FFFFFF" fillOpacity="0.5" />
              <circle cx="192" cy="240" r="1.8" fill="#FFFFFF" fillOpacity="0.4" />
              <circle cx="120" cy="450" r="2.2" fill="#FFFFFF" fillOpacity="0.5" />
              <circle cx="160" cy="460" r="2" fill="#FFFFFF" fillOpacity="0.4" />
            </g>
          )}
        </g>

        {/* Can Bottom Taper & Rim */}
        <path
          d="M 45 550 Q 45 570 60 575 L 220 575 Q 235 570 235 550 Z"
          fill={`url(#canNeck_${flavor})`}
        />
        <path
          d="M 60 575 Q 140 585 220 575 L 210 585 Q 140 592 70 585 Z"
          fill={`url(#canRimTop_${flavor})`}
        />
      </svg>
    </div>
  );
};
