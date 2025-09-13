import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function BestiaryTimeline() {
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const creatures = [
    {
      id: "vampiri",
      name: "Vampiri",
      img: "https://i.imgur.com/l449Adj.jpeg",
      orientation: "Caotico-Neutrale",
      allies: ["Varkanys"],
      desc: "Predatori dell’ombra, aristocratici e ferali. Dominano le corti notturne con carisma e crudeltà. Sensibili al sole, eccellono in intrigo e manipolazione.",
    },
    {
      id: "lycan",
      name: "Lycan",
      img: "https://i.imgur.com/pcetBV3.png",
      orientation: "Neutrale",
      allies: ["Varkanys"],
      desc: "Figli della luna e del branco. In forma ferale sono devastanti; in forma umana rimangono leali, orgogliosi, territoriali. Odiano il controllo altrui.",
    },
    {
      id: "varkanys",
      name: "Varkanys",
      img: "https://i.imgur.com/3AIp6hz.jpeg",
      orientation: "Caotico-Neutrale",
      allies: ["Vampiri"],
      desc: "Nessuno conosce la sua vera natura. Alcuni lo chiamano bestia, altri lo credono un guardiano, altri ancora un presagio di morte. Si dice che emerga dalle ombre quando l’aria si fa pesante e il silenzio troppo profondo, con occhi che bruciano come brace violacea. Non lascia tracce, se non il gelo nei cuori e l’eco di un ringhio lontano. C'è chi giura che non uccida i vivi, ma che si nutra di qualcosa di più antico e terribile: l’anima.",
    },
    {
      id: "sirene",
      name: "Sirene",
      img: "https://i.imgur.com/lO9YSbl.jpeg",
      orientation: "Neutrale-Ambiguo",
      allies: ["Vampiri", "Draghi", "Lycan", "Varkanys"],
      desc: "Mistiche del mare e dei fiumi. Voce che incanta o distrugge, diplomazia tagliente...",
    },
    {
      id: "maghi",
      name: "Maghi",
      img: "https://i.imgur.com/yD9TvYG.jpeg",
      orientation: "Legale-Neutrale",
      allies: ["Vampiri", "Draghi", "Lycan", "Varkanys"],
      desc: "Studiosi del tessuto arcano, rigidi ordini e regole...",
    },
    {
      id: "draghi",
      name: "Draghi",
      img: "https://i.imgur.com/SFHMXVM.jpeg",
      orientation: "Neutrale-Misterioso",
      allies: ["Maghi", "Lycan"],
      desc: "Antichi dominatori dei cieli, custodi di reliquie e nodi di potere...",
    },
  ];

  // Variants animazioni
  const ease = [0.22, 1, 0.36, 1];
  const card = shouldReduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.6, ease },
        },
      };

  const imageVar = shouldReduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0.8, scale: 1.02 },
        show: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease },
        },
      };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="relative isolate overflow-hidden bg-[#0D0C0A] text-[#D9CAB8]"
    >
      {/* overlay confinato SOLO a questa sezione */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none opacity-50 mix-blend-soft-light"
        style={{
          backgroundImage: "url('https://i.imgur.com/3RNqjEK.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease }}
            className="text-3xl sm:text-4xl font-bold tracking-wide"
          >
            Bestiario — Cronache di{" "}
            <span className="text-[#A69981]">Fallen World</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-sm sm:text-base text-[#A69981]/90"
          >
            Le stirpi, i loro schieramenti e le alleanze.
          </motion.p>
        </header>

        <motion.ul className="space-y-10">
          {creatures.map((c, i) => (
            <li key={c.id}>
              <RowCard
                creature={c}
                reverse={i % 2 !== 0}
                cardVar={card}
                imageVar={imageVar}
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}

/* ---------------- Row card con immagine alternata ---------------- */
function RowCard({ creature, reverse, cardVar, imageVar }) {
  return (
    <motion.article
      variants={cardVar}
      whileHover={{ y: -2 }}
      viewport={{ once: true, amount: 0.25 }}
      className="relative rounded-2xl border border-[#262520] bg-[#0D0C0A]/70 backdrop-blur
                 shadow-[0_0_0_1px_rgba(115,103,81,.25),0_20px_80px_rgba(0,0,0,.6)]
                 ring-1 ring-inset ring-[#736751]/20 hover:ring-[#A69981]/40 transition"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
        {/* immagine */}
        <div
          className={`group relative overflow-hidden border-b md:border-b-0 md:border-r border-[#262520]
                      ${
                        reverse
                          ? "md:order-2 md:rounded-r-2xl"
                          : "md:rounded-l-2xl"
                      }
                      rounded-t-2xl md:rounded-tr-none`}
        >
          <motion.img
            variants={imageVar}
            whileHover={useReducedMotion() ? {} : { scale: 1.03 }}
            src={creature.img}
            alt={creature.name}
            className="w-full h-full object-cover min-h-56 sm:min-h-64 md:min-h-[280px] lg:min-h-[320px] opacity-95"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0D0C0A]/80 to-transparent" />
          <div className="absolute left-3 top-3">
            <Badge>{creature.name}</Badge>
          </div>
        </div>

        {/* testo */}
        <div className="relative p-5 sm:p-6 flex flex-col justify-center">
          {/* ORIENTAMENTO (sopra) */}
          <div className="flex flex-wrap items-center gap-3">
            <Pill label="Orientamento" value={creature.orientation} />
          </div>

          {/* SIMPATIZZANTI (sotto) */}
          <div className="mt-3">
            <Allies allies={creature.allies} />
          </div>

          {/* TESTO (ultimo) */}
          <p className="mt-4 text-[#D9CAB8]/85 leading-relaxed">
            {creature.desc}
          </p>

          <a
            href={`#${creature.id}`}
            id={creature.id}
            className="sr-only"
            aria-label={`Vai a ${creature.name}`}
          >
            {creature.name}
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------------- UI helpers ---------------- */
function Badge({ children }) {
  return (
    <motion.span
      whileHover={{
        y: -1,
        boxShadow:
          "0 0 35px rgba(166,153,129,.45), 0 0 10px rgba(166,153,129,.6)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-semibold
                 bg-[#1A1814]/90 text-[#D9CAB8] border border-[#736751]/50
                 shadow-[0_0_25px_rgba(166,153,129,.25)]
                 ring-1 ring-[#A69981]/20 hover:ring-[#A69981]/60 transition
                 before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none
                 before:bg-gradient-to-r before:from-transparent before:via-[#A69981]/10 before:to-transparent
                 before:opacity-0 group-hover:before:opacity-100 before:transition
                 after:absolute after:-inset-0.5 after:rounded-[inherit] after:blur after:bg-[#A69981]/10 after:opacity-0 group-hover:after:opacity-100 after:transition"
    >
      {children}
      <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[#A69981] shadow-[0_0_8px_rgba(166,153,129,.9)] animate-pulse" />
    </motion.span>
  );
}

function Pill({ label, value }) {
  return (
    <motion.div
      whileHover={{ y: -1, boxShadow: "0 0 20px rgba(166,153,129,.25)" }}
      className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0D0C0A]/70 border border-[#736751]/40 text-[#D9CAB8]/90
                 ring-1 ring-inset ring-transparent hover:ring-[#A69981]/30 transition shadow-[0_0_0_1px_rgba(115,103,81,.15)]"
    >
      <span className="text-[#A69981]">{label}:</span>
      <span className="font-medium">{value}</span>
      {/* puntino glow a destra */}
      <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[#A69981]/80 shadow-[0_0_12px_rgba(166,153,129,.8)]" />
    </motion.div>
  );
}

function Allies({ allies }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[#A69981]">Simpatizza con:</span>
      <div className="flex flex-wrap gap-2">
        {allies.map((a) => (
          <motion.span
            whileHover={{ y: -1, scale: 1.02 }}
            key={a}
            className="relative px-2.5 py-1 rounded-md border border-[#736751]/40 bg-[#262520]/60 text-xs text-[#D9CAB8]/90
                       shadow-[0_0_10px_rgba(115,103,81,.25)] transition
                       ring-1 ring-inset ring-transparent hover:ring-[#A69981]/40
                       before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none
                       before:bg-[#A69981]/10 before:opacity-0 hover:before:opacity-100 before:transition"
          >
            {a}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
