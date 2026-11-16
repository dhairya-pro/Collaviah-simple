"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Sparkles, ShieldCheck, Film } from "lucide-react";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-black/60 text-gold-soft text-xs font-mono">
      Loading video stream...
    </div>
  ),
});

interface MuxVideoPlayerProps {
  playbackId?: string;
  title?: string;
  subtitle?: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export const MuxVideoPlayer: React.FC<MuxVideoPlayerProps> = ({
  playbackId = process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID || "IgJ9izC003MfbPdDPG7bjC02pkCem00P1nJRMZ4aSIZxnw",
  title = "The COLLAVIAH Story & Biotechnology Innovation",
  subtitle = "Crafted in Osaka, Japan • Bio-Fermented Vegan Peptides",
  poster = "https://image.mux.com/IgJ9izC003MfbPdDPG7bjC02pkCem00P1nJRMZ4aSIZxnw/thumbnail.jpg?time=1",
  className = "",
  autoPlay = false,
  loop = false,
  muted = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative w-full max-w-5xl mx-auto ${className}`}>
      {/* Decorative ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-crimson/15 via-gold-soft/15 to-leafGreen/15 rounded-3xl blur-2xl pointer-events-none opacity-70" />

      {/* Video Container Shell */}
      <div className="relative rounded-3xl overflow-hidden bg-richBlack border-2 border-gold-champagne/60 shadow-2xl">
        {/* Header Ribbon */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#1A1A1A] via-[#26211F] to-[#1A1A1A] border-b border-gold-champagne/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gold-champagne/20 text-gold-soft">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-soft font-bold block">
                Brand & Science Film
              </span>
              <h3 className="font-serif text-sm sm:text-base font-bold text-white">
                {title}
              </h3>
            </div>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-white/10 text-white/80 border border-white/20">
            250ml Slim Can Innovation
          </span>
        </div>

        {/* Video Player Core */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <MuxPlayer
            playbackId={playbackId}
            metadataVideoTitle={title}
            streamType="on-demand"
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            accentColor="#B5124A"
            primaryColor="#FFFFFF"
            secondaryColor="#1A1A1A"
            className="w-full h-full object-cover"
            onError={() => setHasError(true)}
            placeholder={poster}
          />

          {hasError && (
            <div className="absolute inset-0 bg-richBlack/95 flex flex-col items-center justify-center p-6 text-center z-20">
              <Sparkles className="w-10 h-10 text-gold-soft mb-3" />
              <h4 className="font-serif text-lg font-bold text-white mb-2">
                Playback ID Configuration
              </h4>
              <p className="text-xs text-white/70 max-w-md leading-relaxed mb-4">
                The Mux video player is ready. You provided an Asset ID (<code className="text-gold-soft text-[11px] bg-white/10 px-1 py-0.5 rounded">{playbackId}</code>).
                In your Mux dashboard under this asset, copy the public <strong>Playback ID</strong> and set it in <code className="text-gold-soft text-[11px] bg-white/10 px-1 py-0.5 rounded">NEXT_PUBLIC_MUX_PLAYBACK_ID</code>.
              </p>
              <div className="text-[11px] text-white/50 font-mono">
                Mux Dashboard → Video → Assets → Playback IDs
              </div>
            </div>
          )}
        </div>

        {/* Footer Caption */}
        <div className="px-6 py-3.5 bg-gradient-to-r from-[#1A1A1A] via-[#221D1B] to-[#1A1A1A] border-t border-gold-champagne/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <p className="font-light italic text-gold-champagne text-[11px]">
            &ldquo;{subtitle}&rdquo;
          </p>
          <div className="flex items-center gap-2 text-[10px] font-mono text-leafGreen font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Mux High-Efficiency Streaming</span>
          </div>
        </div>
      </div>
    </div>
  );
};
