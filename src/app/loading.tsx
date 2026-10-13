// Root loading.tsx — shown by Next.js App Router during page navigation
// This immediately shows while the new page's JS is being fetched and rendered
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-pearl pointer-events-none">
      <div className="flex flex-col items-center gap-3">
        {/* Slim gold progress bar */}
        <div className="w-40 h-[2px] bg-gold-champagne/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gold-antique to-gold-soft rounded-full animate-[shimmer_1s_ease-in-out_infinite]"
            style={{ width: "60%" }}
          />
        </div>
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-antique font-semibold">
          COLLAVIAH
        </span>
      </div>
    </div>
  );
}

