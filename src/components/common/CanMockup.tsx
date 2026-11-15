"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FlavorId } from "@/types";

interface CanMockupProps {
  flavor: FlavorId;
  className?: string;
  showDroplets?: boolean; // Retained for backwards compatibility
  isFloating?: boolean;
  priority?: boolean;
  glow?: boolean;
  interactiveTilt?: boolean;
}

export const CanMockup: React.FC<CanMockupProps> = ({
  flavor = "strawberry-lime",
  className = "",
  isFloating = false,
  priority = false,
  glow = false,
  interactiveTilt = false,
}) => {
  const isStrawberry = flavor === "strawberry-lime";
  const imageSrc = isStrawberry
    ? "/images/can-strawberry-lime.png"
    : "/images/can-lemon-lime.png";
  const altText = `COLLAVIAH 250ml ${isStrawberry ? "Strawberry Lime" : "Lemon Lime"} Can`;

  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveTilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      rotateX: -y / 15,
      rotateY: x / 15,
    });
  };

  const handleMouseLeave = () => {
    if (!interactiveTilt) return;
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      className={`relative select-none will-change-transform flex flex-col items-center justify-center ${
        isFloating ? "animate-float-gentle" : ""
      } ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: interactiveTilt ? "1000px" : undefined,
      }}
    >
      <div
        className="relative w-full h-auto flex flex-col items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: interactiveTilt
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
            : undefined,
          filter: glow
            ? isStrawberry
              ? "drop-shadow(0 20px 35px rgba(215, 38, 61, 0.35)) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.12))"
              : "drop-shadow(0 20px 35px rgba(220, 190, 0, 0.45)) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.12))"
            : "drop-shadow(0 12px 24px rgba(0, 0, 0, 0.14))",
        }}
      >
        <Image
          src={imageSrc}
          alt={altText}
          width={600}
          height={1000}
          priority={priority}
          className="w-full h-auto object-contain pointer-events-none select-none transition-transform duration-500"
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 400px"
        />

        {/* Soft realistic ground contact shadow beneath the can */}
        <div
          className="absolute -bottom-3 w-[70%] h-5 rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 55%, transparent 75%)",
            filter: "blur(4px)",
          }}
        />
      </div>
    </div>
  );
};
