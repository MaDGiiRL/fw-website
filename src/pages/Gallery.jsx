import { useState, useEffect } from "react";
import Lightbox from "../components/Lightbox";
import { Section } from "../components/Section.jsx";
import DiscordBanner from "../components/DiscordBanner.jsx";
import heroBg from "../assets/banner.png";
import logo from "../assets/logo.gif";
import { motion, useReducedMotion } from "framer-motion";

// NEW
import InstagramEmbedsFixed from "../components/InstagramEmbedsFixed.jsx";

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

// I 3 post che hai passato (permalink puliti)
const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/DOsvgWRDKMN/",
  "https://www.instagram.com/p/DOstKLyDJFe/",
  "https://www.instagram.com/p/DOstmc6jLp7/",
];

// PAGINAZIONE
const PAGE_SIZE = 20;

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  // paginazione locale
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(IMGS.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = IMGS.slice(start, start + PAGE_SIZE);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const reduce = useReducedMotion();
  const fadeIn = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const stagger = (delay = 0.05, step = 0.06) => ({
    hidden: {},
    show: { transition: { delayChildren: delay, staggerChildren: step } },
  });

  const onThumbClick = (localIndex) => {
    setIdx(start + localIndex); // indice globale per la Lightbox
    setOpen(true);
  };

  const nextPage = () => setPage((p) => Math.min(totalPages, p + 1));
  const prevPage = () => setPage((p) => Math.max(1, p - 1));

  return (
    <>
      {/* ====== SOCIAL (Instagram, card a palette scura) ====== */}
      <Section title="Social" kicker="Instagram">
        <motion.section
          className="max-w-7xl mx-auto px-4 py-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <InstagramEmbedsFixed
            postUrls={INSTAGRAM_POSTS}
            cols={{ base: 1, md: 2, lg: 3 }}
            height="34rem" // puoi cambiare l’altezza fissa
          />
        </motion.section>
      </Section>

      {/* ====== GALLERY con paginazione (20 per pagina) ====== */}
      <Section
        title="Gallery"
        kicker={`FALLEN V1 · Pagina ${page}/${totalPages}`}
      >
        <motion.section
          className="max-w-7xl mx-auto px-4 py-8"
          title="Galleria"
          kicker="feature"
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          {/* Griglia immagini paginata */}
          <motion.ul
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={stagger(0.05, 0.07)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {pageItems.map((src, i) => (
              <motion.li key={start + i} variants={fadeIn}>
                <button
                  onClick={() => onThumbClick(i)}
                  className="group relative w-full overflow-hidden rounded-2xl border border-[#262520] bg-[#0D0C0A]/40 hover:bg-[#0D0C0A]/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#736751]/70"
                  aria-label={`Apri immagine ${start + i + 1}`}
                >
                  <div className="relative [aspect-ratio:4/3]">
                    <img
                      src={src}
                      alt={`Anteprima ${start + i + 1}`}
                      className="h-40 sm:h-60 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06] will-change-transform"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <span className="pointer-events-none absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-lg border border-[#736751]/40 bg-[#0D0C0A]/60 px-2 py-1 text-[11px] text-[#A69981] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Apri
                    </span>
                  </div>
                </button>
              </motion.li>
            ))}
          </motion.ul>

          {/* Paginazione */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              onClick={prevPage}
              disabled={page === 1}
              className="px-3 py-1.5 rounded-md border border-[#736751]/40 text-[#A69981] disabled:opacity-40 hover:bg-[#0D0C0A]/60"
            >
              ← Prec.
            </button>
            <div className="text-sm text-[#A69981]">
              Pagina <span className="font-semibold">{page}</span> /{" "}
              {totalPages}
            </div>
            <button
              onClick={nextPage}
              disabled={page === totalPages}
              className="px-3 py-1.5 rounded-md border border-[#736751]/40 text-[#A69981] disabled:opacity-40 hover:bg-[#0D0C0A]/60"
            >
              Succ. →
            </button>
          </div>

          {/* Lightbox (usa l’array completo IMGS) */}
          <Lightbox
            open={open}
            onClose={() => setOpen(false)}
            idx={idx}
            setIdx={setIdx}
            items={IMGS}
          />
        </motion.section>
      </Section>
    </>
  );
}
