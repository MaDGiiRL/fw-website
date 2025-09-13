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
      orientation: "Caotico-Malvagio",
      allies: ["Varkanys"],
      desc: "Alcuni li maledicono come predatori della notte, altri li venerano come custodi dell’eterno. Quando emergono, il silenzio si fa più denso, e il cuore dei vivi accelera senza ragione. I loro sguardi penetrano oltre il volto, scovando timori e desideri sepolti, mentre il sangue stesso risponde al loro richiamo. Non è la sete la loro arma più terribile, ma l’ombra che lasciano: il ricordo di una carezza che nutre e divora insieme.",
    },
    {
      id: "lycan",
      name: "Lycan",
      img: "https://i.imgur.com/pcetBV3.png",
      orientation: "Neutrale",
      allies: ["Draghi"],
      desc: "I Lupi incarnano la natura primordiale e indomita. Non mutano forma come i Lycan, ma custodiscono nel branco una forza che nasce dall’unità e dall’istinto. Sono spiriti liberi e fieri, guidati da gerarchie invisibili ma incrollabili: l’Alfa protegge, i Beta sorreggono, gli Omega ricordano l’umiltà necessaria alla sopravvivenza. Le loro voci si alzano in ululati che non sono solo richiami, ma preghiere alla luna e al vento. Fedeli fino alla morte, feroci contro chi minaccia il loro territorio, i Lupi non conoscono compromessi: sono il respiro selvaggio della foresta.",
    },
    {
      id: "varkanys",
      name: "Varkanys",
      img: "https://i.imgur.com/3AIp6hz.jpeg",
      orientation: "Caotico-Malvagio",
      allies: ["Vampiri"],
      desc: "Nessuno conosce la sua vera natura. Alcuni lo chiamano bestia, altri lo credono un guardiano, altri ancora un presagio di morte. Si dice che emerga dalle ombre quando l’aria si fa pesante e il silenzio troppo profondo, con occhi che bruciano come brace violacea. Non lascia tracce, se non il gelo nei cuori e l’eco di un ringhio lontano. C'è chi giura che non uccida i vivi, ma che si nutra di qualcosa di più antico e terribile: l’anima.",
    },
    {
      id: "sirene",
      name: "Sirene",
      img: "https://i.imgur.com/lO9YSbl.jpeg",
      orientation: "Neutrale-Ambiguo",
      allies: ["Vampiri", "Draghi", "Lycan", "Varkanys"],
      desc: "Mistiche del mare e dei fiumi. Creature di bellezza ingannevole, le Sirene intrecciano melodie che possono curare l’animo o trascinarlo nella follia. La loro voce è dono e maledizione: incanta i cuori deboli, spezza la volontà dei forti. Vivono in un equilibrio instabile fra diplomazia e ferocia, poiché il mare è mutevole come il loro animo. Sono cortesi alleate o nemiche spietate, e mai si rivelano del tutto: chi le ascolta non può più tornare indietro senza portare con sé un frammento del loro canto.",
    },
    {
      id: "maghi",
      name: "Maghi",
      img: "https://i.imgur.com/yD9TvYG.jpeg",
      orientation: "Legale-Neutrale",
      allies: ["Vampiri", "Draghi", "Lycan", "Varkanys"],
      desc: "I Maghi sono il riflesso di due forze opposte e complementari. Il Fuoco incarna l’istinto, la passione e l’impeto che travolge, capace di distruggere ma anche di rinascere dalle proprie ceneri. È ardore, impulso vitale, energia che brucia senza compromessi. Il Ghiaccio rappresenta invece la calma, la disciplina e la freddezza che preserva. È chiarezza, silenzio cristallino e forza che resiste immutabile al tempo. Insieme non sono rivali, ma poli di un equilibrio: il calore che muove e il gelo che custodisce.",
    },
    {
      id: "draghi",
      name: "Draghi",
      img: "https://i.imgur.com/SFHMXVM.jpeg",
      orientation: "Neutrale-Misterioso",
      allies: ["Lycan"],
      desc: "Non ha età, né confini. Alcuni lo temono come un dio di fuoco e rovina, altri lo invocano come custode della verità sepolta. Quando appare, l’aria vibra, il cielo si oscura e la terra trattiene il respiro. Le sue ali fendono il silenzio come lame, e i suoi occhi – antichi, imperscrutabili – scrutano oltre la carne, fino all’essenza. Non è la fiamma il suo dono più terribile, ma la memoria: di ciò che è stato, di ciò che sarà… e di ciò che non avrebbe mai dovuto essere.",
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
