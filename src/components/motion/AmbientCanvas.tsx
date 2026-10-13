"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotSpeed: number;
  opacity: number;
  type: "petal" | "bubble" | "goldDust";
  swayOffset: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

export const AmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check user preferences
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Highly optimized lightweight particle count
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 8 : 20;

    const particles: Particle[] = [];
    const ripples: Ripple[] = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const typeRand = Math.random();
      const type: "petal" | "bubble" | "goldDust" =
        typeRand < 0.4 ? "petal" : typeRand < 0.7 ? "bubble" : "goldDust";

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size:
          type === "petal"
            ? 6 + Math.random() * 6
            : type === "bubble"
            ? 2.5 + Math.random() * 4
            : 1.5 + Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: type === "bubble" ? -(0.3 + Math.random() * 0.4) : 0.35 + Math.random() * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        opacity: 0.2 + Math.random() * 0.35,
        type,
        swayOffset: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      // Limit to 2 ripples max at a time for zero performance drop
      if (ripples.length >= 2) ripples.shift();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      ripples.push({
        x: clientX,
        y: clientY,
        radius: 4,
        maxRadius: 55,
        opacity: 0.45,
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousedown", handlePointerDown, { passive: true });

    let time = 0;
    let paused = false;

    // Pause animation when tab/page is not visible — eliminates wasted CPU
    // that was causing jank during navigation transitions.
    const handleVisibility = () => {
      paused = document.hidden;
      if (!paused) animationFrameId = requestAnimationFrame(render);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const render = () => {
      if (paused) return;
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Render interactive water ripples
      for (let rIdx = ripples.length - 1; rIdx >= 0; rIdx--) {
        const rip = ripples[rIdx];
        rip.radius += 2.2;
        rip.opacity -= 0.016;

        if (rip.opacity <= 0 || rip.radius >= rip.maxRadius) {
          ripples.splice(rIdx, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(212, 169, 79, ${rip.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Render floating sakura petals, bubbles, and gold dust
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX + Math.sin(time + p.swayOffset) * 0.3;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        if (p.type === "bubble") {
          if (p.y < -15) {
            p.y = height + 15;
            p.x = Math.random() * width;
          }
        } else {
          if (p.y > height + 15) {
            p.y = -15;
            p.x = Math.random() * width;
          }
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === "petal") {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(246, 217, 221, ${p.opacity * 0.8})`;
          ctx.fill();
        } else if (p.type === "bubble") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.6})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 169, 79, ${p.opacity * 0.7})`;
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
      aria-hidden="true"
    />
  );
};
