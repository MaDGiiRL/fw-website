import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function InstagramCarousel({
  postUrls = [],
  autoplayMs = 6000,
  pauseOnHover = true,
  showArrows = true,
  showDots = true,
}) {
  const containerRef = useRef(null);
  const slideRefs = useRef([]);
  const [idx, setIdx] = useState(0);
  const [hovering, setHovering] = useState(false);
  const reduce = useReducedMotion();

  // Normalizza gli URL in /embed (Instagram supporta /p/.../embed)
  const embedUrls = useMemo(
    () =>
      postUrls
        .filter(Boolean)
        .map((u) => (u.endsWith("/") ? `${u}embed` : `${u}/embed`)),
    [postUrls]
  );

  // Scroll al prossimo/precedente
  const scrollToIndex = (i) => {
    const cont = containerRef.current;
    const slide = slideRefs.current[i];
    if (!cont || !slide) return;
    cont.scrollTo({
      left: slide.offsetLeft - cont.offsetLeft,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const next = () => {
    setIdx((prev) => {
      const n = (prev + 1) % embedUrls.length;
      scrollToIndex(n);
      return n;
    });
  };

  const prev = () => {
    setIdx((prev) => {
      const n = (prev - 1 + embedUrls.length) % embedUrls.length;
      scrollToIndex(n);
      return n;
    });
  };

  // Autoplay loop
  useEffect(() => {
    if (embedUrls.length <= 1) return;
    if (pauseOnHover && hovering) return;
    const id = setInterval(next, autoplayMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embedUrls.length, autoplayMs, hovering]);

  // Aggiorna posizione al resize (mantiene il focus sullo slide corrente)
  useEffect(() => {
    const handler = () => scrollToIndex(idx);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  // Sync idx quando si scrolla manualmente (drag/swipe)
  const onScroll = () => {
    const cont = containerRef.current;
    if (!cont) return;
    let nearest = 0;
    let minDist = Infinity;
    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      const dist = Math.abs(el.offsetLeft - cont.scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        nearest = i;
      }
    });
    setIdx(nearest);
  };

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => pauseOnHover && setHovering(true)}
      onMouseLeave={() => pauseOnHover && setHovering(false)}
      initial={{ opacity: 0, y: reduce ? 0 : 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
    >
      {/* Track scrollabile con snap */}
      <div
        ref={containerRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-2xl border border-[#262520] bg-[#0D0C0A]/50 p-4"
        style={{ scrollbarWidth: "none" }}
      >
        <style>{`
          /* nasconde la scrollbar su WebKit */
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        <div className="flex gap-4 w-full no-scrollbar">
          {embedUrls.map((src, i) => (
            <div
              key={src}
              ref={(el) => (slideRefs.current[i] = el)}
              className="snap-start shrink-0 basis-full md:basis-1/2 lg:basis-1/3"
              aria-label={`Post Instagram ${i + 1} di ${embedUrls.length}`}
            >
              <div className="relative overflow-hidden rounded-xl border border-[#262520] bg-[#0D0C0A]">
                <iframe
                  src={src}
                  title={`Instagram post ${i + 1}`}
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="w-full"
                  style={{ height: "37rem", overflow: "none" }}
                />
                {/* Overlay leggero al hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frecce */}
      {showArrows && embedUrls.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 px-3 py-2 rounded-xl border border-[#736751]/40 bg-[#0D0C0A]/70 text-[#A69981] hover:bg-[#0D0C0A]/90"
            aria-label="Slide precedente"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 px-3 py-2 rounded-xl border border-[#736751]/40 bg-[#0D0C0A]/70 text-[#A69981] hover:bg-[#0D0C0A]/90"
            aria-label="Slide successivo"
          >
            →
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && embedUrls.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {embedUrls.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Vai allo slide ${i + 1}`}
              onClick={() => {
                setIdx(i);
                scrollToIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-[#A69981]" : "w-2.5 bg-[#736751]"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
