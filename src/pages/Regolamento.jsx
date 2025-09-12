import { useMemo, useState } from "react";
import logo from "../../src/assets/logo.gif";
import heroBg from "../assets/banner.png";
import DiscordBanner from "../components/DiscordBanner.jsx";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const DATA = {
  Generale: {
    "Regolamento Base": [
      "Metagame: prendere informazioni OOC e portarli in RP.",
      "Power Play: non dare possibilità di difesa a un player.",
      "Powergame: abusare di meccaniche di gioco.",
      "Fail RP: uscita dall’RP.",
      "RDM: uccidere senza motivazione.",
      "VDM: uccidere a caso con l’auto.",
      "Mix Chat: confondere OOC e IC.",
      "Bunny Hop: saltare per andare più veloce.",
      "No fear: non provare paura in una situazione di minaccia.",
      "No life value: ignorare il valore della vita del proprio PG.",
      "Combat log: loggare apposta per poter fare un’azione.",
      "Combat slog: sloggare durante un’azione.",
      "Revenge kill: uccidere solo perché si è stati uccisi.",
      "Backseat gaming: compiere azioni su richiesta della chat.",
      "Spam: vietato inviare link Discord/Twitch senza permesso dello staff.",
      "Nome RP: vietato usare nomi/cognomi di personaggi di serie TV.",
    ],

    "Regolamento Anti-Cheat": [
      "Vietate modifiche grafiche che diano vantaggi in azione.",
      "Vietati passi “boostati” e qualsiasi programma esterno per migliorare movimenti/visuale (es. Flawless Widescreen, Filter Keys).",
      "Modificatori vocali non consentiti salvo autorizzazione dello staff.",
      "Non è permesso rubare veicoli né saccheggiarne i contenuti.",
      "Vietati cheat/macro o tracce degli stessi.",
      "Vietato chiudere FiveM quando si è chiamati in assistenza.",
      "Vietato tenere antivirus disattivato e/o riavviato durante i controlli.",
      "Obbligo clip: chi ha l’obbligo deve registrare da avvio a chiusura di FiveM (salvo eccezioni).",
      "Sanzionabile non entrare in assistenza immediatamente quando chiamati.",
      "Motivi di BAN durante un controllo: rifiutare il controllo; quittare l’assistenza; qualunque segno di pulizia/bypass.",
    ],

    "Regolamento Comunità": [
      "Per formare una comunità è obbligatorio aprire un ticket donazione.",
      "Numeri comunità: minimo 4 membri; massimo 15 membri.",
      "Le comunità vanno formate esclusivamente in RP.",
    ],

    "Regolamento Assistenza": [
      "Vietato contattare lo staff in privato: apri un ticket o recati in assistenza.",
      "Richiedi assistenza solo a fine azione ed esibisci clip con audio.",
      "Lo staff può sanzionare per motivi ritenuti validi anche se non presenti nel regolamento.",
      "Se ritieni errata un’assistenza, puoi aprire ticket entro 24h con le clip.",
      "Per rimborsi: apri ticket e allega prove.",
      "Lo staff può modificare il regolamento in qualsiasi momento; gli aggiornamenti saranno annunciati sul Discord ufficiale.",
    ],

    Riconoscimento: [
      "Chi indossa una MASCHERA non può essere riconosciuto dalla voce né dai vestiti. (Se usi sempre gli stessi abiti, col tempo qualcuno potrebbe sospettare.)",
      "Le targhe NON possono essere usate per riconoscere i veicoli.",
    ],

    "Regolamento Semi-Safe": [
      "Nelle SEMI-SAFEZONE non sono consentite azioni, salvo approvazione staff via ticket/assistenza con motivazioni valide.",
      "Vietato abusare delle zone semi-safe per rifugiarsi da rapimenti/azioni, a meno che l’ingaggio non sia iniziato entro 500 metri dalla zona.",
    ],

    "Convalide INFO": [
      "Per ogni informazione acquisita in RP (punti raccolta, info ricevute, ecc.) è obbligatorio aprire un ticket CONVALIDA con clip.",
      "Se non si dispone delle clip, la convalida non può essere effettuata.",
    ],

    "Regolamento Streamer": [
      "Streamer Partner: obbligatoria la tag [Fallen World] nel titolo quando streammi il server.",
      "Streamer Partner: obbligatorio avere il comando chat con il Discord del server; in caso di segnalazione la gestione può rimuovere la nomina.",
      "Vietato prendere info da VOD/live altrui e riportarle in gioco.",
      "Obbligo di moderare la propria chat per una convivenza adeguata.",
      "Vietato riprodurre in live l’audio di Discord relativo a un’assistenza.",
      "Vietato restreammare VOD/live di altri per criticare/flammare.",
      "Vietati contenuti di cheating/flaming o non idonei mantenendo la tag [Fallen World]; la gestione può allontanare senza preavviso.",
    ],
  },

  Roleplay: {
    "Regolamento Azioni": [
      "AZIONE FREEROAM: per raggiungere il limite massimo (15), è consentito chiedere supporto a UNA sola comunità.",
      "Se interviene una terza fazione: si va in assistenza a fine azione con clip.",
      "Vietato rapire al termine di un’azione.",
      "SPAM DI PUGNI: massimo 2 pugni e 2 colpi melee, poi allontanarsi.",
      "FREEROAM: max 15 per gruppo; in difesa non organizzata nessun limite; in difesa organizzata si rispetta il numero degli attaccanti.",
      "Rispettare regolamento creature e limiti di fazione/razza.",
      "Avviata una freeroam, è severamente vietato rifugiarsi nella casa di schieramento (es. Lupi/Vampiri) o in ZONE SEMI-SAFE.",
      "Chi esce oltre 300 metri viene considerato disingaggiato e non può rientrare.",
      "Il gruppo che ingaggia può dichiarare disingaggio solo dopo che almeno un proprio membro è stato atterrato.",
      "Il gruppo che subisce l’ingaggio può dichiarare disingaggio in qualsiasi momento.",
      "Loot DURANTE l’azione: solo munizioni e oggetti curativi (da alleati o nemici abbattuti).",
      "Loot A FINE azione: munizioni, cibo, item curativi e 1 arma (bianca OPPURE da fuoco).",
      "Vietato lootare item lore o custom.",
      "Assalti a comunità: aprire ticket assalto; presentare almeno 3 motivazioni con clip; attendere risposta staff.",
      "Le azioni devono essere motivate e coerenti con lore/contesto/esperienza del PG.",
      "No OOC durante azioni critiche: completare la scena e poi aprire ticket.",
    ],

    Rapimenti: [
      "Rispettare la tabella del Fear per effettuare un rapimento.",
      "Aprire ticket e avere almeno 2 motivazioni valide.",
      "Numeri identici a quelli delle azioni FREEROAM.",
      "Non è possibile rapire lo stesso giocatore/gruppo più di una volta ogni 24h (salvo eccezioni dello staff).",
      "Il rapito deve poter parlare, salvo motivazioni coerenti (es. imbavagliamento ruolato).",
      "Comportamento rispettoso e coerente verso il rapito: no abusi/torture gratuite o atteggiamenti tossici.",
      "Vietato rapire per noia o senza motivazione apparente; vietato minacciare con sanzioni OOC durante il rapimento.",
      "Durante il rapimento non si lootano i player: gli item possono essere sequestrati temporaneamente e restituiti a fine azione.",
    ],

    "Regolamento Permadeath": [
      "Il permadeath è la morte definitiva del personaggio (wipe).",
      "Richiesta verso un altro PG: aprire ticket con almeno 6 motivazioni distinte e valide.",
      "Dopo approvazione, va perseguita subito: se non conclusa entro 7 giorni, la richiesta viene annullata.",
      "Trascorsi i 7 giorni, per una nuova richiesta servono 6 motivazioni diverse dalle precedenti.",
      "Permadeath volontario: possibile dopo almeno 1 mese di RP attivo con il nuovo PG.",
      "Se rifiutato, si può riproporre dopo 15 giorni.",
      "Dopo un permadeath, attendere 7 giorni prima di interagire nuovamente in gioco con personaggi con cui si avevano legami preesistenti (si può dialogare fuori scena ma non agire insieme/entrare nello stesso clan).",
    ],

    PermaCut: [
      "Il Permacut è una mutilazione permanente (es. perdita di dito/occhio), alternativa al permadeath.",
      "Può essere applicato come sanzione punitiva con motivazioni valide o per comportamenti estremi (es. evidente no fear).",
      "Richiesta via ticket con clip valide; servono almeno 4 motivazioni.",
    ],

    "Ferite & Respawn": [
      "In caso di respawn, il PG non conserva ricordi dell’accaduto: interpretare confusione, spossatezza e mal di testa.",
      "I ricordi possono riaffiorare solo se un altro player racconta l’evento.",
      "In caso di rianimazione, interpretare la perdita di sensi e la ripresa graduale della memoria (indicativamente 10-15 minuti).",
      "Ricorda: è un server RP, le ferite vanno ruolate come tali.",
    ],
  },
};

export default function Regolamento() {
  const types = Object.keys(DATA);
  const [activeType, setActiveType] = useState(types[0]);
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(DATA[types[0]])[0]
  );

  const categories = useMemo(() => Object.keys(DATA[activeType]), [activeType]);
  const derivedCategory = categories.includes(activeCategory)
    ? activeCategory
    : categories[0];

  const rules = DATA[activeType][derivedCategory] ?? [];

  // Variants riutilizzabili + rispetto prefers-reduced-motion
  const reduce = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: reduce ? 0 : -12, transition: { duration: 0.25 } },
  };
  const fadeIn = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: reduce ? 1 : 0.98,
      transition: { duration: 0.25 },
    },
  };
  const stagger = (delay = 0.05, step = 0.06) => ({
    hidden: {},
    show: { transition: { delayChildren: delay, staggerChildren: step } },
  });

  return (
    <section className="max-w-7xl mx-auto pt-4 mt-4">
      <motion.div
        className="max-w-7xl mx-auto p-4 space-y-8 mb-7"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <DiscordBanner
          bgSrc={heroBg}
          logoSrc={logo}
          title="Fallen World • Discord"
          subtitle="News, whitelisting, ticket e spoiler sugli eventi."
          inviteUrl="https://discord.gg/il-tuo-invito"
          buttonText="Unisciti ora"
        />
      </motion.div>

      {/* TOP NAV */}
      <motion.nav
        aria-label="Tipi di regolamento"
        className="sticky top-[4.5rem] z-40 bg-[#0D0C0A]/80 backdrop-blur border border-[#262520] rounded-2xl p-3 mb-6"
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-wrap items-center gap-2">
          {types.map((t) => {
            const isActive = activeType === t;
            return (
              <motion.button
                key={t}
                type="button"
                onClick={() => {
                  setActiveType(t);
                  setActiveCategory(Object.keys(DATA[t])[0]);
                }}
                aria-pressed={isActive}
                whileTap={{ scale: reduce ? 1 : 0.98 }}
                whileHover={{ y: reduce ? 0 : -1 }}
                className={`px-3 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#736751]/60 ${
                  isActive
                    ? "bg-[#262520] border-[#736751] text-[#D9CAB8]"
                    : "border-[#262520] hover:bg-[#262520]/60 text-[#D9CAB8]/90"
                }`}
              >
                {t}
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SIDEBAR CATEGORIE */}
        <aside className="lg:col-span-4 xl:col-span-3">
          <motion.div
            className="sticky top-[9.5rem] border border-[#262520] rounded-2xl bg-[#0D0C0A]/60 p-3"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            <h2 className="text-sm font-semibold text-[#D9CAB8] mb-2">
              {activeType} · Categorie
            </h2>

            {/* Cambia animando quando cambia 'activeType' */}
            <AnimatePresence mode="wait">
              <motion.ul
                key={activeType}
                className="space-y-1"
                variants={stagger(0.02, 0.05)}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {categories.map((cat) => {
                  const isActive = derivedCategory === cat;
                  const count = DATA[activeType][cat].length;
                  return (
                    <motion.li key={cat} variants={fadeUp}>
                      <button
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full text-left px-3 py-2 rounded-xl border transition ${
                          isActive
                            ? "bg-[#736751] text-[#0D0C0A] border-[#736751]"
                            : "border-[#262520] hover:bg-[#262520]/60 text-[#D9CAB8]/90"
                        }`}
                      >
                        <span className="inline-flex items-center gap-2">
                          <span>{cat}</span>
                          <span
                            className={`text-[11px] px-2 py-0.5 rounded-md border ${
                              isActive
                                ? "border-[#0D0C0A]/20 bg-[#0D0C0A]/10 text-[#0D0C0A]"
                                : "border-[#262520] text-[#A69981]"
                            }`}
                            aria-label={`${count} regole`}
                            title={`${count} regole`}
                          >
                            {count}
                          </span>
                        </span>
                      </button>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </AnimatePresence>
          </motion.div>
        </aside>

        {/* CONTENUTO */}
        <main className="lg:col-span-8 xl:col-span-9">
          <header className="mb-4">
            <h1 className="text-xl font-semibold text-[#D9CAB8]">
              Regolamento · {activeType}
            </h1>
            <p className="text-sm text-[#D9CAB8]/70">
              Categoria:{" "}
              <span className="text-[#A69981]">{derivedCategory}</span>
            </p>
          </header>

          {/* Lista regole: transizione su cambio categoria e tipo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeType}-${derivedCategory}`}
              className="grid md:grid-cols-2 gap-4"
              variants={stagger(0.03, 0.06)}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {rules.map((rule, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-4 rounded-xl border border-[#262520] bg-[#0D0C0A]/50"
                >
                  <div className="flex gap-3">
                    <span className="w-8 h-8 shrink-0 rounded-lg bg-[#262520] grid place-items-center text-[#A69981] font-semibold">
                      {i + 1}
                    </span>
                    <p className="text-[#D9CAB8]/90">{rule}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.p
            className="mt-6 text-sm text-[#D9CAB8]/70"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Nota: lo staff può aggiornare il regolamento in qualsiasi momento
            per garantire un gioco equo e immersivo.
          </motion.p>
        </main>
      </div>
    </section>
  );
}
