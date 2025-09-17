// src/components/SocialNewsInstagram.jsx
import { motion, useReducedMotion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function SocialNewsInstagram({
  handle = "@fallenworld_rp",
  url = "https://instagram.com/fallenworld_rp",
  className = "",
}) {
  const reduceMotion = useReducedMotion();

  // Variants coerenti con la tua Home
  const fadeIn = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const popIn = {
    hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.96 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      variants={popIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative overflow-hidden rounded-2xl border border-[#262520] bg-[#0D0C0A]/60 ${className}`}
      aria-labelledby="ig-news-title"
    >
      {/* sfondo leggero + texture */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,#262520_0%,transparent_60%)]" />
      <div className="absolute inset-0 texture opacity-20" />

      {/* glow bordo all'hover */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[#A69981]/0 hover:ring-2 hover:ring-[#A69981]/30 transition" />

      <div className="relative z-10 p-5 sm:p-8">
        <motion.div
          variants={fadeIn}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-5"
        >
          {/* Icona + badge Novità */}
          <div className="flex items-center gap-3">
            <span className="relative inline-grid w-14 h-14 place-items-center rounded-2xl bg-[#262520] border border-[#736751]/30 text-[#A69981] overflow-visible">
              <span className="pointer-events-none absolute -inset-1 rounded-[18px] opacity-60 transition duration-300 blur-md bg-[radial-gradient(closest-side,rgba(234,179,8,0.55),transparent)]" />
              <Instagram
                className="relative w-7 h-7"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </span>
            <span className="px-2 py-1 text-[10px] rounded-full border border-yellow-400/40 text-yellow-300 uppercase tracking-wide">
              Novità
            </span>
          </div>

          {/* Testi */}
          <div className="flex-1">
            <h2
              id="ig-news-title"
              className="text-2xl sm:text-3xl font-semibold text-[#D9CAB8]"
            >
              Siamo anche su Instagram!
            </h2>
            <p className="mt-1 text-[#D9CAB8]/80">
              Eventi, teaser della lore, dietro le quinte, foto e video. Seguici su{" "}
              <span className="text-[#A69981] font-medium">{handle}</span>.
            </p>
          </div>

          {/* CTA */}
          <div className="flex gap-3 w-full lg:w-auto">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#736751] text-[#0D0C0A] hover:shadow-glow transition"
              aria-label="Apri il nostro profilo Instagram"
            >
              Seguici su Instagram
            </a>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-[#736751] text-[#D9CAB8] hover:bg-[#262520] transition"
              aria-label="Vai al profilo Instagram"
            >
              {handle}
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
