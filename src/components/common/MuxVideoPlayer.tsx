"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Sparkles, ShieldCheck, Film, Volume2, VolumeX, Play, Pause } from "lucide-react";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[320px] sm:min-h-[460px] flex flex-col items-center justify-center bg-black/80 text-gold-soft text-xs font-mono gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-gold-soft border-t-transparent animate-spin" />
      <span>Loading Osaka Film Stream...</span>
    </div>
  ),
});

interface MuxVideoPlayerProps {
  playbackId?: string;
  title?: string;
  subtitle?: string;
  poster?: string;
  className?: string;
  autoPlayOnScroll?: boolean;
  loop?: boolean;
}

export const MuxVideoPlayer: React.FC<MuxVideoPlayerProps> = ({
  playbackId = process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID || "IgJ9izC003MfbPdDPG7bjC02pkCem00P1nJRMZ4aSIZxnw",
  title = "The COLLAVIAH Story & Biotechnology Innovation",
  subtitle = "Crafted in Osaka, Japan • Bio-Fermented Vegan Peptides",
  poster = "https://image.mux.com/IgJ9izC003MfbPdDPG7bjC02pkCem00P1nJRMZ4aSIZxnw/thumbnail.jpg?time=1",
  className = "",
  autoPlayOnScroll = true,
  loop = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  const [hasError, setHasError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserToggledSound, setHasUserToggledSound] = useState(false);

  // Auto-play when scrolled into view & auto-pause when scrolled out
  useEffect(() => {
    if (!autoPlayOnScroll) return;

    const targetEl = containerRef.current;
    if (!targetEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const player = playerRef.current;
          if (!player) return;

          if (entry.isIntersecting) {
            // Video is in view: start playback (muted by default for browser policy compliance)
            player.play?.().catch((err: any) => {
              // Browser policy may wait for first gesture if unmuted
              console.log("Autoplay waiting for view/gesture:", err);
            });
          } else {
            // Video scrolled out of view: pause to save resources
            player.pause?.();
          }
        });
      },
      {
        threshold: 0.35, // Trigger when 35% of the video card is visible in viewport
      }
    );

    observer.observe(targetEl);
    return () => observer.disconnect();
  }, [autoPlayOnScroll]);

  const toggleSound = () => {
    const player = playerRef.current;
    if (!player) return;

    const nextMuted = !isMuted;
    player.muted = nextMuted;
    setIsMuted(nextMuted);
    setHasUserToggledSound(true);

    if (player.paused) {
      player.play?.();
    }
  };

  const togglePlayPause = () => {
    const player = playerRef.current;
    if (!player) return;

    if (isPlaying) {
      player.pause?.();
    } else {
      player.play?.();
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full max-w-5xl mx-auto ${className}`}>
      {/* Decorative ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-crimson/20 via-gold-soft/15 to-[#9CC83C]/20 rounded-3xl blur-2xl pointer-events-none opacity-80" />

      {/* Video Container Shell */}
      <div className="relative rounded-3xl overflow-hidden bg-richBlack border-2 border-gold-champagne/60 shadow-2xl">
        {/* Header Ribbon */}
        <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-gradient-to-r from-[#1A1A1A] via-[#26211F] to-[#1A1A1A] border-b border-gold-champagne/30 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 rounded-xl bg-gold-champagne/20 text-gold-soft flex-shrink-0">
              <Film className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-soft font-bold flex items-center gap-2">
                Brand & Science Film
                {isPlaying && (
                  <span className="inline-flex items-center gap-1 text-[9px] text-leafGreen font-bold font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-leafGreen animate-ping" />
                    Live Preview
                  </span>
                )}
              </span>
              <h3 className="font-serif text-xs sm:text-base font-bold text-white truncate">
                {title}
              </h3>
            </div>
          </div>

          {/* Quick Sound Toggle in Header */}
          <button
            type="button"
            onClick={toggleSound}
            className={`px-3 py-1.5 rounded-full text-[11px] font-sans font-bold flex items-center gap-1.5 transition-all shadow-sm ${
              isMuted
                ? "bg-white/10 hover:bg-white/20 text-white/90 border border-white/20"
                : "bg-crimson text-white border border-crimson shadow-crimson/30 animate-pulse"
            }`}
            aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-gold-soft" />
                <span className="hidden sm:inline">Unmute Sound</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-white" />
                <span>Sound On</span>
              </>
            )}
          </button>
        </div>

        {/* Video Player Core */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <MuxPlayer
            ref={playerRef}
            playbackId={playbackId}
            metadataVideoTitle={title}
            streamType="on-demand"
            loop={loop}
            muted={isMuted}
            playsInline={true}
            accentColor="#B5124A"
            primaryColor="#FFFFFF"
            secondaryColor="#1A1A1A"
            className="w-full h-full object-cover"
            onError={() => setHasError(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            placeholder={poster}
          />

          {/* Floating Pill on top-right of video when muted to prompt sound */}
          {isPlaying && isMuted && !hasUserToggledSound && (
            <button
              type="button"
              onClick={toggleSound}
              className="absolute top-4 right-4 z-30 px-3.5 py-1.5 rounded-full bg-richBlack/85 backdrop-blur-md border border-gold-soft/60 text-white text-[11px] font-sans font-bold flex items-center gap-2 shadow-xl hover:bg-richBlack hover:border-gold-soft transition-all hover:scale-105"
            >
              <VolumeX className="w-3.5 h-3.5 text-gold-soft animate-bounce" />
              <span>Tap for Sound</span>
            </button>
          )}

          {hasError && (
            <div className="absolute inset-0 bg-richBlack/95 flex flex-col items-center justify-center p-6 text-center z-20">
              <Sparkles className="w-10 h-10 text-gold-soft mb-3" />
              <h4 className="font-serif text-lg font-bold text-white mb-2">
                Playback Configuration
              </h4>
              <p className="text-xs text-white/70 max-w-md leading-relaxed mb-4">
                Unable to load stream for Playback ID (<code className="text-gold-soft text-[11px] bg-white/10 px-1 py-0.5 rounded">{playbackId}</code>).
              </p>
            </div>
          )}
        </div>

        {/* Footer Caption */}
        <div className="px-5 sm:px-6 py-3 bg-gradient-to-r from-[#1A1A1A] via-[#221D1B] to-[#1A1A1A] border-t border-gold-champagne/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <p className="font-light italic text-gold-champagne text-[11px] text-center sm:text-left">
            &ldquo;{subtitle}&rdquo;
          </p>
          <div className="flex items-center gap-3 text-[10px] font-mono text-white/60">
            <span className="flex items-center gap-1.5 text-leafGreen font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Scroll-Activated Autoplay</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
