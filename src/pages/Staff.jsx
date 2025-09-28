import { Section } from "../components/Section.jsx";
import {
  Crown,
  Rocket,
  ShieldCheck,
  Cog,
  ClipboardList,
  Hammer,
  Code2,
  Sparkles,
  HelpingHand, // <-- NEW
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/** Mappa ruoli → icona + glow + badge */
const GROUPS = [
  {
    label: "OWNER",
    Icon: Crown,
    glow: "bg-[radial-gradient(closest-side,rgba(250,204,21,0.45),transparent)]",
    chipClass: "text-yellow-300 border-yellow-400/40",
    members: [
      {
        name: "! christian",
        role: "Owner",
        bio: "Simpatico e dal cuore gentile: parafulmine nelle tempeste e brindisi quando torna il sereno.",
      },
      {
        name: "Piccione",
        role: "Owner",
        bio: "Buono e sempre disponibile: risponde prima ancora che tu finisca la frase.",
      },
    ],
  },
  // {
  //   label: "FOUNDER",
  //   Icon: Rocket,
  //   glow: "bg-[radial-gradient(closest-side,rgba(96,165,250,0.45),transparent)]",
  //   chipClass: "text-blue-300 border-blue-400/40",
  //   members: [
  //     {
  //       name: "Nikelino_K",
  //       role: "Founder",
  //       bio: "Meme vivente: trasforma i bug in feature e le feature in leggende.",
  //     },
  //   ],
  // },

  /* === Developers === */
  {
    label: "DEVELOPERS",
    Icon: Code2,
    glow: "bg-[radial-gradient(closest-side,rgba(167,139,250,0.45),transparent)]",
    chipClass: "text-violet-300 border-violet-400/40",
    members: [
      {
        name: "MaDGiiRL",
        role: "Developer • Frontend",
        bio: "Mente pazza dietro a questo sito: queen del frontend, estetica tagliente e UX che scorre liscia.",
      },
      {
        name: "Violetzx",
        role: "Developer • Backend",
        bio: "Pazzo furioso bug fixer: king del backend, vede stacktrace dove gli altri vedono nebbia.",
      },
    ],
  },

  {
    label: "RESPONSABILI STAFF",
    Icon: ShieldCheck,
    glow: "bg-[radial-gradient(closest-side,rgba(34,197,94,0.45),transparent)]",
    chipClass: "text-green-300 border-green-400/40",
    members: [
      {
        name: "Gabrx",
        role: "Resp. Staff",
        bio: "Pugno di ferro, cuore tenero: mette ordine senza spegnere il sorriso.",
      },
      {
        name: "BullMatt41",
        role: "Resp. Staff",
        bio: "Pilastro portante: regge metà server e l’altra metà la motiva.",
      },
    ],
  },
  {
    label: "ADMIN",
    Icon: Cog,
    glow: "bg-[radial-gradient(closest-side,rgba(244,114,182,0.45),transparent)]",
    chipClass: "text-pink-300 border-pink-400/40",
    members: [
      {
        name: "Kiwy",
        role: "Admin",
        bio: "Sempre pronto a scherzare: bug fix con battuta incorporata.",
      },
      {
        name: "Paranoica.",
        role: "Admin",
        bio: "Silenziosa ma si sente: entra piano, sistema tutto e scompare.",
      },
    ],
  },
  {
    label: "HEADMOD",
    Icon: ClipboardList,
    glow: "bg-[radial-gradient(closest-side,rgba(180,161,124,0.5),transparent)]",
    chipClass: "text-[#A69981] border-[#736751]/40",
    members: [
      {
        name: "Anastasia",
        role: "HeadMod",
        bio: "Dolce e sempre disponibile: il ticket si sveglia ed è già risolto.",
      },
      {
        name: "Gondola",
        role: "HeadMod",
        bio: "Anima dolce e gentile: calma i flame con una carezza.",
      },
      {
        name: "Draco434",
        role: "HeadMod",
        bio: "Competente e simpatico: manuale vivente con smile incluso.",
      },
      {
        name: "Jhonno",
        role: "HeadMod",
        bio: "Competente e simpatico: risolve e fa ridere nello stesso minuto.",
      },
    ],
  },
  {
    label: "MOD",
    Icon: Hammer,
    glow: "bg-[radial-gradient(closest-side,rgba(147,197,253,0.45),transparent)]",
    chipClass: "text-sky-300 border-sky-400/40",
    members: [
      {
        name: "Francyy",
        role: "Mod",
        bio: "Scherzo calibrato, cuore aperto: prima viene il cuore, poi una battuta sui ticket aperti che dà il via a soluzioni concrete.",
      },
      {
        name: "Katra",
        role: "Mod",
        bio: "Tipetto simpatico con grande senso dell'umorismo.",
      },
    ],
  },
  {
    label: "HELPER",
    Icon: HelpingHand,
    glow: "bg-[radial-gradient(closest-side,rgba(20,184,166,0.45),transparent)]", // teal
    chipClass: "text-teal-300 border-teal-400/40",
    members: [
      {
        name: "Giusy",
        role: "Helper",
        bio: "Sempre pronta a dare una mano con gentilezza e precisione, trasforma anche i problemi più spinosi in soluzioni semplici e chiare.",
      },
      {
        name: "Siciliano",
        role: "Helper",
        bio: "Diretto, pratico ed efficace: con il suo stile deciso trova sempre la strada giusta per arrivare al risultato.",
      },
      {
        name: "GodofAxe",
        role: "Helper",
        bio: "Metodico, affidabile e con una marcia in più quando c’è da risolvere le sfide più dure.",
      },
      {
        name: "It's Blue",
        role: "Helper",
        bio: "Creativo e brillante, porta sempre freschezza e nuove idee. Il suo tocco “blue” rende ogni situazione più serena ed equilibrata.",
      },
    ],
  },
];

export default function Staff() {
  const reduce = useReducedMotion();

  // Variants accessibili
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };
  const fadeIn = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const stagger = (delay = 0.05, step = 0.08) => ({
    hidden: {},
    show: { transition: { delayChildren: delay, staggerChildren: step } },
  });

  return (
    <Section title="Staff">
      {/* Callout simpatia/sintonia */}
      <motion.div
        className="relative mb-6 rounded-2xl border border-[#262520] bg-[#0D0C0A]/60 p-4 overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        <span className="pointer-events-none absolute -inset-1 opacity-30 blur-lg bg-[radial-gradient(closest-side,rgba(166,153,129,0.25),transparent)]" />
        <div className="relative flex items-start gap-3">
          <span className="inline-grid w-9 h-9 place-items-center rounded-lg bg-[#262520] border border-[#736751]/40 text-[#A69981]">
            <Sparkles className="w-5 h-5" strokeWidth={1.75} />
          </span>
          <p className="text-[#D9CAB8]/85 pt-2">
            <span className="font-medium text-[#D9CAB8]">
              Siamo in sintonia
            </span>{" "}
            (quasi) come un trigger perfetto: stessa visione, stessi meme, e
            tanta voglia di far crescere{" "}
            <span className="text-[#A69981]">Fallen World</span> ogni giorno.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="space-y-8"
        variants={stagger(0.05, 0.1)}
        initial="hidden"
        animate="show"
      >
        {GROUPS.map(({ label, Icon, members, glow, chipClass }, gi) => (
          <motion.section key={label} className="space-y-4" variants={fadeUp}>
            {/* Header gruppo con badge */}
            <header className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-grid w-9 h-9 place-items-center rounded-lg bg-[#262520] border border-[#736751]/40 text-[#A69981]">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <h3 className="text-lg font-semibold text-[#D9CAB8]">
                  {label}
                </h3>
              </div>
              <span
                className={`hidden sm:inline-flex px-2.5 py-1 text-[11px] rounded-full border ${chipClass}`}
              >
                {members.length} {members.length === 1 ? "membro" : "membri"}
              </span>
            </header>

            {/* Griglia membri */}
            <motion.ul
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              variants={stagger(0.02, 0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {members.map((m) => (
                <motion.li
                  key={`${label}-${m.name}`}
                  className="group relative rounded-2xl border border-[#262520] bg-[#0D0C0A]/50 overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:bg-[#0D0C0A]/70 min-h[160px]"
                  variants={fadeUp}
                >
                  {/* Glow radiale on hover */}
                  <span
                    className={`pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-60 blur-md transition ${glow}`}
                  />

                  {/* Contenuto con spazio riservato all’icona (dx/basso) */}
                  <div className="relative p-4 pr-14 pb-14">
                    <div className="flex items-start gap-3">
                      {/* Avatar iniziale + anello */}
                      <span className="relative inline-grid w-12 h-12 place-items-center rounded-xl bg-[#262520] border border-[#736751]/30 text-[#A69981]">
                        <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-[#A69981]/0 group-hover:ring-2 group-hover:ring-[#A69981]/40 transition" />
                        <span className="font-semibold">
                          {m.name.trim()[0]}
                        </span>
                      </span>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-semibold text-[#D9CAB8]">
                            {m.name}
                          </p>
                          {/* Badge ruolo */}
                          <span
                            className={`shrink-0 px-2 py-0.5 text-[10px] rounded-full border ${chipClass}`}
                          >
                            {m.role}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-[#D9CAB8]/75">
                          {m.bio}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icona di ruolo: FISSA in basso a destra per tutte */}
                  <span className="pointer-events-none absolute bottom-3 right-3 text-[#A69981]/60">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>
        ))}
      </motion.div>
    </Section>
  );
}
