import { useState, useEffect } from "react";
import Lightbox from "../components/Lightbox";
import { Section } from "../components/Section.jsx";
import DiscordBanner from "../components/DiscordBanner.jsx";
import heroBg from "../assets/banner.png";
import logo from "../assets/logo.gif";

const IMGS = [
  "https://i.imgur.com/Qg8KMKY.png",
  "https://i.imgur.com/DrU3CtH.png",
  "https://i.imgur.com/nT3VRLO.png",
  "https://i.imgur.com/PwCGcno.png",
  "https://i.imgur.com/IUwkBiT.jpeg",
  "https://i.imgur.com/l6kHoiW.png",
  "https://i.imgur.com/1UruDfC.jpeg",
  "https://i.imgur.com/xh3WvQk.png",
  "https://i.imgur.com/xmSVPjv.jpeg",
  "https://i.imgur.com/gHvptvH.jpeg",
  "https://i.imgur.com/rBhuMKn.png",
  "https://i.imgur.com/ZGPmSWn.png",
  "https://i.imgur.com/boLkgXu.jpeg",
  "https://i.imgur.com/6rsy80Q.png",
  "https://i.imgur.com/5VUb3P5.png",
  "https://i.imgur.com/kJ6u0uk.png",
  "https://i.imgur.com/DW5SEub.png",
  "https://i.imgur.com/5rWBTGv.png",
  "https://i.imgur.com/xvhP1LF.png",
  "https://i.imgur.com/cLrwLWT.png",
  "https://i.imgur.com/rkB3JRK.png",
  "https://i.imgur.com/DWsCa4G.png",
  "https://i.imgur.com/6RhYUIg.png",
  "https://i.imgur.com/B8dBSLI.png",
  "https://i.imgur.com/ppCxDia.png",
  "https://i.imgur.com/FuQaf0h.png",
  "https://i.imgur.com/tkDco75.png",
  "https://i.imgur.com/ENN4oL4.jpeg",
  "https://i.imgur.com/BVR1LOv.jpeg",
  "https://i.imgur.com/3WdhTHF.png",
  "https://i.imgur.com/LJLPJwr.png",
  "https://i.imgur.com/rbMPQ6x.png",
  "https://i.imgur.com/R66ZVEt.png",
  "https://i.imgur.com/lKXk0w8.jpeg",
  "https://i.imgur.com/BGjjBMZ.png",
  "https://i.imgur.com/tXLAEIb.jpeg",
  "https://i.imgur.com/iFMBho1.png",
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Section title="Gallery" kicker="FALLEN V1">
      <section
        className="max-w-7xl mx-auto px-4 py-8"
        title="Galleria"
        kicker="feature"
      >
        {/* Griglia immagini */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {IMGS.map((src, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  setIdx(i);
                  setOpen(true);
                }}
                className="group relative w-full overflow-hidden rounded-2xl border border-[#262520] bg-[#0D0C0A]/40 hover:bg-[#0D0C0A]/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#736751]/70"
                aria-label={`Apri immagine ${i + 1}`}
              >
                {/* Wrapper con aspect ratio; usa arbitrary property per non dipendere dal plugin */}
                <div className="relative [aspect-ratio:4/3]">
                  {/* IMG: zoom on hover */}
                  <img
                    src={src}
                    alt={`Anteprima ${i + 1}`}
                    className="h-40 sm:h-60 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06] will-change-transform"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />

                  {/* Overlay graduale */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Chip “Apri” con lente (inline svg) */}
                  <span className="pointer-events-none absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-lg border border-[#736751]/40 bg-[#0D0C0A]/60 px-2 py-1 text-[11px] text-[#A69981] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="M21 21l-3.5-3.5"></path>
                    </svg>
                    Apri
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* Lightbox */}
        <Lightbox
          open={open}
          onClose={() => setOpen(false)}
          idx={idx}
          setIdx={setIdx}
          items={IMGS}
        />
      </section>
    </Section>
  );
}
