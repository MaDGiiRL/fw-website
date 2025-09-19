import { Section } from "../components/Section.jsx";
import logo from "../../src/assets/logo.gif";
import { ScrollText, Stars, Wand2, LifeBuoy } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Lore() {
  const TEAM = [
    { group: "Responsabile Lore", names: ["Nikelino"] },
    {
      group: "Master",
      names: [
        "BullMatt41",
        "Christian",
        "Nikelino",
        "Kiwy",
        "Arianna",
      ],
    },
    {
      group: "Co-Master",
      names: [
        "Paranoica 🌙",
        "MaDGiiRL",
        "Violetzxヅ",
        "Shino",
        "Anastasia",
        "Chesy",
      ],
    },
    { group: "Supporto Team Lore", names: ["Gondola"] },
  ];

  /** Stili per gruppo (icone + colori + glow) */
  const STYLES = {
    "Responsabile Lore": {
      Icon: ScrollText,
      chip: "text-amber-300 border-amber-400/40",
      glow: "bg-[radial-gradient(closest-side,rgba(251,191,36,0.45),transparent)]",
      ring: "group-hover:ring-amber-300/40",
    },
    Master: {
      Icon: Stars,
      chip: "text-blue-300 border-blue-400/40",
      glow: "bg-[radial-gradient(closest-side,rgba(96,165,250,0.45),transparent)]",
      ring: "group-hover:ring-blue-300/40",
    },
    "Co-Master": {
      Icon: Wand2,
      chip: "text-violet-300 border-violet-400/40",
      glow: "bg-[radial-gradient(closest-side,rgba(167,139,250,0.45),transparent)]",
      ring: "group-hover:ring-violet-300/40",
    },
    "Supporto Team Lore": {
      Icon: LifeBuoy,
      chip: "text-emerald-300 border-emerald-400/40",
      glow: "bg-[radial-gradient(closest-side,rgba(16,185,129,0.45),transparent)]",
      ring: "group-hover:ring-emerald-300/40",
    },
  };

  const getStyle = (group) =>
    STYLES[group] ?? {
      Icon: ScrollText,
      chip: "text-[#A69981] border-[#736751]/40",
      glow: "bg-[radial-gradient(closest-side,rgba(166,153,129,0.45),transparent)]",
      ring: "group-hover:ring-[#A69981]/40",
    };

  // Variants Framer Motion (accessibili)
  const reduce = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
    <div>
      <Section title="Cronache della Caduta" kicker="lore">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          variants={stagger(0.05, 0.1)}
          initial="hidden"
          animate="show"
        >
          {/* LORE */}
          <motion.article
            className="lg:col-span-6 space-y-6 text-[#D9CAB8]/85 p-6 rounded-2xl border border-[#262520] bg-[#0D0C0A]/50"
            variants={fadeIn}
          >
            <p className="text-[#A69981] uppercase tracking-wider text-sm">
              {" "}
              Prologo{" "}
            </p>{" "}
            <p>
              {" "}
              La notizia corse più veloce dei satelliti: una cometa, in rotta di
              collisione con la Terra. Gli scienziati la battezzarono{" "}
              <span className="text-[#D9CAB8] font-medium">Astra-X</span> e
              calcolarono l’impatto entro sei mesi. Margine d’errore: zero.
              Nessuna tecnologia conosciuta poteva deviarla, nessun missile in
              grado di frantumarla. Restava una sola opzione: sopravvivere…{" "}
              <em> sottoterra</em>.{" "}
            </p>{" "}
            <p className="text-[#A69981] uppercase tracking-wider text-sm">
              {" "}
              I Vault{" "}
            </p>{" "}
            <p>
              {" "}
              I governi riattivarono i{" "}
              <span className="text-[#D9CAB8] font-medium">Vault</span>, enormi
              rifugi della Guerra Fredda ormai dimenticati. Ma non bastavano.
              Solo una frazione dell’umanità fu selezionata: politici,
              scienziati, militari e poche famiglie privilegiate. Le masse
              rimasero fuori. Le città si accesero di rivolte, poi di
              rassegnazione. C’era chi scavava tane improvvisate, chi aspettava
              l’impatto come una sentenza.{" "}
            </p>{" "}
            <p className="text-[#A69981] uppercase tracking-wider text-sm">
              {" "}
              L’Impatto{" "}
            </p>{" "}
            <p>
              {" "}
              Il giorno dell’arrivo di Astra-X fu sospeso in un silenzio
              innaturale. La cometa non colpì il mare né i grandi continenti: si
              schiantò su una remota catena montuosa, sopra un centro di ricerca
              segreto chiamato{" "}
              <span className="text-[#D9CAB8] font-medium">Lab-Horizon</span>,
              ufficialmente chiuso da decenni. Il cratere era visibile persino
              dallo spazio. Eppure la Terra non finì. L’atmosfera si oscurò per
              settimane, ma l’estinzione non arrivò. Sembrò un miracolo… finché
              comparvero i primi contagiati.{" "}
            </p>{" "}
            <p className="text-[#A69981] uppercase tracking-wider text-sm">
              {" "}
              Il Patogeno{" "}
            </p>{" "}
            <p>
              {" "}
              Nel cuore del Lab-Horizon la cometa spaccò il terreno, liberando
              una sostanza organica sconosciuta. Mescolata con vecchi agenti in
              fase di test, generò un{" "}
              <span className="text-[#D9CAB8] font-medium">
                {" "}
                patogeno mutageno{" "}
              </span>{" "}
              : prima aereo, poi trasmesso dai morsi. I primi colpiti furono i
              superstiti in superficie: corpi deformi, pelle screpolata,
              movimenti a ondate.{" "}
            </p>{" "}
            <p className="text-[#A69981] uppercase tracking-wider text-sm">
              {" "}
              Le Prime Uscite{" "}
            </p>{" "}
            <p>
              {" "}
              Dal <span className="text-[#D9CAB8] font-medium">
                Vault 9
              </span>{" "}
              una squadra di ricercatori ottenne il permesso di esplorare
              l’esterno. Trovò paesaggi anneriti, città divorate dalle piante e
              presenze ostili a ogni incrocio. Documentarono tutto e si
              salvarono per un soffio. Non c’erano risposte, solo indizi.{" "}
            </p>{" "}
            <p className="text-[#A69981] uppercase tracking-wider text-sm">
              {" "}
              Sette Anni Dopo{" "}
            </p>{" "}
            <p>
              {" "}
              Le risorse dei Vault diminuirono. La squadra tornò in superficie…
              e il mondo era cambiato di nuovo: strade vuote, nessun infetto,
              nessun corpo. Quartieri prima infestati erano deserti. C’erano
              segni di scontri, tracciati incomprensibili, basi militari
              abbandonate ma intatte. Era come se il virus si fosse{" "}
              <em>autodistrutto</em>… o fosse stato <em>richiamato</em>.{" "}
            </p>
          </motion.article>

          {/* TEAM LORE — colorato per gruppo */}
          <motion.aside
            className="lg:col-span-6 rounded-2xl border border-[#262520] bg-[#0D0C0A]/50 overflow-hidden"
            variants={fadeIn}
          >
            {/* Header con logo + badge legenda */}
            <motion.div
              className="p-6 border-b border-[#262520] bg-[radial-gradient(60%_80%_at_50%_0%,#1a1916_0%,transparent_70%)]"
              variants={fadeUp}
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#D9CAB8]">
                    Team Lore
                  </h3>
                  <p className="text-sm text-[#D9CAB8]/70 pt-5">
                    Coerenza narrativa, timeline e approvazioni di trama.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {TEAM.map((b, i) => {
                      const { chip, Icon } = getStyle(b.group);
                      return (
                        <motion.span
                          key={b.group}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] rounded-full border ${chip}`}
                          variants={fadeUp}
                          transition={{ delay: 0.03 * i }}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {b.group}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>

                <motion.img
                  src={logo}
                  alt="Logo Team Lore"
                  loading="lazy"
                  className="shrink-0 ml-auto block w-16 sm:w-20 md:w-24 rounded-xl opacity-80 hover:opacity-100 transition-opacity object-contain"
                  variants={fadeUp}
                />
              </div>
            </motion.div>

            {/* Liste per gruppo, con glow e badge per gruppo */}
            <motion.div
              className="p-6 space-y-6"
              variants={stagger(0.05, 0.09)}
              initial="hidden"
              animate="show"
            >
              {TEAM.map((block, idx) => {
                const { Icon, chip, glow, ring } = getStyle(block.group);
                return (
                  <motion.section
                    key={block.group}
                    className="space-y-4"
                    variants={fadeUp}
                  >
                    <div className="inline-flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full border ${chip}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {block.group}
                      </span>
                      <span className="text-[12px] text-[#D9CAB8]/60">
                        {block.names.length}{" "}
                        {block.names.length === 1 ? "membro" : "membri"}
                      </span>
                    </div>

                    <motion.ul
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                      variants={stagger(0.02, 0.06)}
                      initial="hidden"
                      animate="show"
                    >
                      {block.names.map((name, i) => (
                        <motion.li
                          key={name}
                          className="group relative rounded-xl border border-[#262520] bg-[#0D0C0A]/60 hover:bg-[#0D0C0A]/80 transition"
                          variants={fadeUp}
                        >
                          {/* Glow radiale colorato */}
                          <span
                            className={`pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-50 blur-md transition ${glow}`}
                          />

                          <div className="relative px-3 py-2 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-8 h-8 shrink-0 rounded-lg bg-[#262520] grid place-items-center text-[#A69981] font-semibold ring-0 ${ring} transition`}
                              >
                                {name.trim()[0]}
                              </span>
                              <span className="text-[#D9CAB8]/90">{name}</span>
                            </div>

                            {/* Badge a destra con icona gruppo */}
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 text-[9px] rounded-full border ${chip}`}
                            >
                              <Icon className="w-3 h-3" />
                              {block.group.replace("Supporto ", "")}
                            </span>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {idx < TEAM.length - 1 && (
                      <div className="h-px bg-gradient-to-r from-transparent via-[#262520] to-transparent my-2" />
                    )}
                  </motion.section>
                );
              })}
            </motion.div>

            <motion.blockquote
              className="border-l-2 border-[#736751]/40 pl-4 italic text-[#D9CAB8]/70 p-5 mt-3"
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              «Non sappiamo chi abbia combattuto, né cosa. Sappiamo solo che il
              silenzio non è pace: è attesa.»
            </motion.blockquote>
          </motion.aside>
        </motion.div>
      </Section>
    </div>
  );
}
