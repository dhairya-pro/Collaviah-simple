"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High performance, lightweight spring
  const ringX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const ringY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Only enable on desktop pointer devices with fine control
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reducedMotion) {
      return;
    }

    setIsVisible(true);

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);

        const target = e.target as HTMLElement | null;
        if (!target) return;

        const isInteractive = !!target.closest("button, a, input, select, textarea, [role='button']");
        if (isInteractive !== isHoveredRef.current) {
          isHoveredRef.current = isInteractive;
          setIsHovered(isInteractive);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner gold dot - zero mix-blend-difference overhead */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold-soft pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-sm hidden md:block will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isHovered ? 1.5 : 1,
        }}
      />

      {/* Outer soft ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-gold-soft/70 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block will-change-transform"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          width: isHovered ? 40 : 22,
          height: isHovered ? 40 : 22,
          borderColor: isHovered ? "#B5124A" : "rgba(212, 169, 79, 0.6)",
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};
