// Footer.jsx
import { useEffect, useRef, useState, useId } from "react";
import { FileText, Shield, X, MessageCircle } from "lucide-react";

export default function Footer() {
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  return (
    <>
      <footer className="mt-10 border-t border-[#262520]/80 bg-[#0D0C0A]/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-xs sm:text-sm text-[#A69981] flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* SX */}
          <p className="opacity-80">
            © {new Date().getFullYear()} Fallen World
          </p>

          {/* CENTRO: bannerini */}
          <div className="flex items-center gap-2">
            <BannerButton
              icon={FileText}
              label="Termini & Condizioni"
              onClick={() => setOpenTerms(true)}
            />
            <BannerButton
              icon={Shield}
              label="Privacy"
              onClick={() => setOpenPrivacy(true)}
            />
            {/* Discord: link esterno */}
            <a
              href="https://discord.gg/p8pPKJ6Sex"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#736751]/40 text-[#D9CAB8]/90 bg-[#0D0C0A]/40 hover:bg-[#262520]/60 transition focus:outline-none focus:ring-2 focus:ring-[#736751]/50"
            >
              <span className="relative inline-grid w-6 h-6 place-items-center rounded-lg bg-[#262520] border border-[#736751]/40 text-[#A69981]">
                <span className="pointer-events-none absolute inset-0 rounded-lg ring-0 ring-[#A69981]/0 group-hover:ring-2 group-hover:ring-[#A69981]/40 transition" />
                <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.75} />
              </span>
              <span className="text-xs sm:text-sm">Discord</span>
            </a>
          </div>

          {/* DX */}
          <p className="opacity-90 tracking-wide">
            Developed with 🤍 da{" "}
            <span className="underline decoration-dotted underline-offset-4">
              <a
                href="https://www.instagram.com/madgiirl99"
                target="_blank"
                rel="noreferrer"
              >
                MaDGiiRL
              </a>
            </span>
          </p>
        </div>
      </footer>

      {/* Modali */}
      <Modal
        open={openTerms}
        onClose={() => setOpenTerms(false)}
        title="Termini & Condizioni"
      >
        <TermsContent />
      </Modal>

      <Modal
        open={openPrivacy}
        onClose={() => setOpenPrivacy(false)}
        title="Privacy Policy"
      >
        <PrivacyContent />
      </Modal>
    </>
  );
}

/* --------- Mini “bannerini” cliccabili --------- */
function BannerButton({ icon: Icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#736751]/40 text-[#D9CAB8]/90 bg-[#0D0C0A]/40 hover:bg-[#262520]/60 transition focus:outline-none focus:ring-2 focus:ring-[#736751]/50"
    >
      <span className="relative inline-grid w-6 h-6 place-items-center rounded-lg bg-[#262520] border border-[#736751]/40 text-[#A69981]">
        <span className="pointer-events-none absolute inset-0 rounded-lg ring-0 ring-[#A69981]/0 group-hover:ring-2 group-hover:ring-[#A69981]/40 transition" />
        <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
      </span>
      <span className="text-xs sm:text-sm">{label}</span>
    </button>
  );
}

/* --------- Modale riutilizzabile --------- */
function Modal({ open, onClose, title, children }) {
  const titleId = useId();
  const descId = useId();
  const closeRef = useRef(null);

  // blocca lo scroll e ESC
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    // focus al bottone chiudi
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <div
        className="relative z-10 w-full max-w-3xl max-h-[80vh] overflow-auto rounded-2xl border border-[#262520] bg-[#0D0C0A]/80 shadow-[0_0_0_1px_rgba(115,103,81,.2),0_20px_80px_rgba(0,0,0,.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-5 py-4 bg-[#0D0C0A]/90 border-b border-[#262520]">
          <h3
            id={titleId}
            className="text-base sm:text-lg font-semibold text-[#D9CAB8]"
          >
            {title}
          </h3>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Chiudi finestra"
            className="grid place-items-center w-9 h-9 rounded-full bg-[#0D0C0A] border border-[#736751]/40 text-[#D9CAB8] hover:ring-2 hover:ring-[#A69981]/30 transition"
          >
            <X className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </div>

        {/* Contenuto */}
        <div
          id={descId}
          className="px-5 py-5 text-[#D9CAB8]/85 leading-relaxed"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* --------- Contenuti: Termini --------- */
function TermsContent() {
  return (
    <div className="space-y-4">
      <p className="text-[#A69981] text-sm">
        Ultimo aggiornamento: 12 settembre 2025
      </p>

      <p>
        Benvenuto su{" "}
        <span className="text-[#D9CAB8] font-medium">Fallen World</span>. I
        presenti Termini & Condizioni (“Termini”) regolano l’accesso e
        l’utilizzo del sito, del server FiveM e dei servizi collegati (Discord,
        ticket, eventi). Accedendo o utilizzando i nostri servizi accetti
        integralmente i Termini.
      </p>

      <h4 className="text-[#D9CAB8] font-semibold">1) Idoneità e accesso</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Devi avere l’età minima richiesta dalla normativa locale per
          partecipare a community online.
        </li>
        <li>
          Il rispetto del regolamento RP e tecnico del server è obbligatorio.
        </li>
      </ul>

      <h4 className="text-[#D9CAB8] font-semibold">2) Condotta</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          È vietata qualsiasi forma di abuso, discriminazione, doxxing o
          violazione della privacy.
        </li>
        <li>
          È vietato l’uso di cheat, exploit o strumenti analoghi; lo staff può
          intervenire in qualsiasi momento.
        </li>
        <li>
          Contenuti illegali o che violino diritti di terzi sono proibiti e
          saranno rimossi.
        </li>
      </ul>

      <h4 className="text-[#D9CAB8] font-semibold">
        3) Contenuti e proprietà intellettuale
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Marchi, grafiche e asset del progetto restano dei rispettivi
          proprietari. L’uso non autorizzato è vietato.
        </li>
        <li>
          I contenuti generati dagli utenti (UGC) restano dei rispettivi autori,
          ma ci concedi una licenza d’uso non esclusiva per finalità di
          moderazione, promozione e miglioramento del server.
        </li>
      </ul>

      <h4 className="text-[#D9CAB8] font-semibold">
        4) Sanzioni e sospensioni
      </h4>
      <p>
        Lo staff può applicare ammonizioni, sospensioni o ban in base al
        regolamento. Le decisioni su scene live hanno priorità per preservare la
        continuità del gioco.
      </p>

      <h4 className="text-[#D9CAB8] font-semibold">
        5) Limitazione di responsabilità
      </h4>
      <p>
        I servizi sono forniti “così come sono”. Non garantiamo disponibilità
        continua o assenza di errori. Nei limiti consentiti dalla legge,
        decliniamo responsabilità per danni indiretti, perdita di dati o
        opportunità.
      </p>

      <h4 className="text-[#D9CAB8] font-semibold">6) Modifiche ai Termini</h4>
      <p>
        Possiamo aggiornare i Termini per ragioni tecniche, legali o
        organizzative. Le modifiche saranno comunicate sul sito o su Discord.
        L’uso continuato dei servizi implica accettazione delle modifiche.
      </p>

      <h4 className="text-[#D9CAB8] font-semibold">7) Contatti</h4>
      <p>
        Per informazioni o richieste: apri un ticket su Discord o scrivi a{" "}
        <span className="underline">supporto@fallenworld.example</span>.
      </p>
    </div>
  );
}

/* --------- Contenuti: Privacy --------- */
function PrivacyContent() {
  return (
    <div className="space-y-4">
      <p className="text-[#A69981] text-sm">
        Ultimo aggiornamento: 12 settembre 2025
      </p>

      <p>
        La presente{" "}
        <span className="text-[#D9CAB8] font-medium">Privacy Policy</span>{" "}
        descrive come trattiamo i dati personali degli utenti che utilizzano il
        sito, il server FiveM e i canali collegati (Discord, ticket).
      </p>

      <h4 className="text-[#D9CAB8] font-semibold">
        1) Titolare del trattamento
      </h4>
      <p>Christian Lupo – Contatto: Ticket su Discord.</p>

      <h4 className="text-[#D9CAB8] font-semibold">
        2) Tipologie di dati trattati
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Dati tecnici: IP, log di accesso, informazioni dispositivo/cliente.
        </li>
        <li>
          Dati di account/community: nickname, ID Discord/FiveM/Steam, contenuti
          generati (chat, ticket, segnalazioni).
        </li>
        <li>
          Eventuali clip/log forniti per moderazione, anti-cheat e gestione
          dispute.
        </li>
        <li>
          Cookie/analytics tecnici per sicurezza, performance e miglioramenti.
        </li>
      </ul>

      <h4 className="text-[#D9CAB8] font-semibold">
        3) Finalità e basi giuridiche
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Erogazione del servizio e moderazione (esecuzione del
          contratto/regolamento).
        </li>
        <li>Sicurezza e prevenzione abusi (legittimo interesse).</li>
        <li>
          Comunicazioni operative (legittimo interesse). Marketing solo previo
          consenso.
        </li>
      </ul>

      <h4 className="text-[#D9CAB8] font-semibold">4) Conservazione</h4>
      <p>
        I dati sono conservati per il tempo necessario alle finalità indicate
        (es. log tecnici a rotazione, ticket fino a chiusura + periodo
        ragionevole). I tempi possono variare in base a obblighi legali o
        necessità di tutela.
      </p>

      <h4 className="text-[#D9CAB8] font-semibold">5) Condivisione</h4>
      <p>
        Possiamo condividere dati con fornitori che ci aiutano nell’erogazione
        del servizio (hosting, anticheat, tool di ticketing) sotto accordi di
        riservatezza. Non vendiamo i tuoi dati.
      </p>

      <h4 className="text-[#D9CAB8] font-semibold">
        6) Trasferimenti extra-UE
      </h4>
      <p>
        Alcuni servizi possono risiedere fuori dallo SEE. In tal caso adottiamo
        garanzie adeguate (es. clausole contrattuali standard) quando richiesto.
      </p>

      <h4 className="text-[#D9CAB8] font-semibold">7) Sicurezza</h4>
      <p>
        Applichiamo misure tecniche e organizzative adeguate per proteggere i
        dati (cifratura in transito, controlli di accesso, minimizzazione).
        Nessuna misura è perfetta: segnala vulnerabilità in privato allo staff.
      </p>

      <h4 className="text-[#D9CAB8] font-semibold">
        8) Diritti degli interessati
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Accesso, rettifica, cancellazione, limitazione, portabilità,
          opposizione, revoca del consenso.
        </li>
        <li>Per esercitare i diritti: apri un ticket su Discord.</li>
        <li>Hai diritto a proporre reclamo all’Autorità Garante competente.</li>
      </ul>
    </div>
  );
}
