import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Lightbox({ open, onClose, idx, setIdx, items = [] }) {
  const [loaded, setLoaded] = useState(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  // Blocca lo scroll sotto e gestisci tastiera solo quando open=true
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setIdx((i) => (i - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % items.length);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, setIdx, items.length]);

  // Preload vicini
  useEffect(() => {
    if (!open || items.length === 0) return;
    const prev = new Image();
    const next = new Image();
    prev.src = items[(idx - 1 + items.length) % items.length];
    next.src = items[(idx + 1) % items.length];
  }, [open, idx, items]);

  // Reset skeleton al cambio immagine
  useEffect(() => {
    if (open) setLoaded(false);
  }, [idx, open]);

  if (!open) return null;

  const goPrev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setIdx((i) => (i + 1) % items.length);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const THRESH = 50;
    if (touchDeltaX.current > THRESH) goPrev();
    else if (touchDeltaX.current < -THRESH) goNext();
  };

  const content = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overscroll-contain"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop sfocato + vignetta */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(38,37,32,0.6),transparent)]" />

      {/* Contenitore immagine */}
      <div
        className="relative z-10 max-w-[92vw] max-h-[86vh] rounded-2xl border border-[#262520] bg-[#0D0C0A]/40 shadow-[0_0_0_1px_rgba(115,103,81,.2),0_20px_80px_rgba(0,0,0,.6)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Toolbar */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            aria-label="Chiudi"
            onClick={onClose}
            className="grid place-items-center w-10 h-10 rounded-full bg-[#0D0C0A]/60 border border-[#736751]/40 text-[#D9CAB8] hover:bg-[#0D0C0A]/80 hover:ring-2 hover:ring-[#A69981]/30 transition"
          >
            {/* icona X */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Skeleton shimmer mentre carica */}
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,#1a1916,45%,#282621,55%,#1a1916)] bg-[length:200%_100%]" />
        )}

        {/* Immagine */}
        <img
          src={items[idx]}
          alt={`Immagine ${idx + 1}`}
          onLoad={() => setLoaded(true)}
          draggable={false}
          className={`block max-w-[92vw] max-h-[86vh] object-contain transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Indicatori bottom */}
        <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-center">
          <span className="px-3 py-1.5 rounded-full text-xs tracking-wide text-[#D9CAB8] bg-[#0D0C0A]/70 border border-[#736751]/30 backdrop-blur">
            {idx + 1} / {items.length}
          </span>
        </div>

        {/* Controlli laterali */}
        <button
          onClick={goPrev}
          aria-label="Immagine precedente"
          className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-[#0D0C0A]/60 border border-[#736751]/40 text-[#D9CAB8] hover:bg-[#0D0C0A]/80 hover:ring-2 hover:ring-[#A69981]/30 transition"
        >
          {/* ‹ */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={goNext}
          aria-label="Immagine successiva"
          className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-[#0D0C0A]/60 border border-[#736751]/40 text-[#D9CAB8] hover:bg-[#0D0C0A]/80 hover:ring-2 hover:ring-[#A69981]/30 transition"
        >
          {/* › */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
