import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";

export default function TermsModal({ open, onClose }) {
  const titleId = useId();
  const descId = useId();
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
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
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <div
        className="relative z-10 w-full max-w-3xl max-h-[80vh] overflow-auto rounded-2xl border border-[#262520] bg-[#0D0C0A]/80 shadow-[0_0_0_1px_rgba(115,103,81,.2),0_20px_80px_rgba(0,0,0,.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-5 py-4 bg-[#0D0C0A]/90 border-b border-[#262520]">
          <h3
            id={titleId}
            className="text-base sm:text-lg font-semibold text-[#D9CAB8]"
          >
            Termini & Condizioni
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

        <div
          id={descId}
          className="px-5 py-5 text-[#D9CAB8]/85 leading-relaxed space-y-4"
        >
          <p className="text-[#A69981] text-sm">
            Ultimo aggiornamento: 12 settembre 2025
          </p>

          <p>
            Benvenuto su{" "}
            <span className="text-[#D9CAB8] font-medium">Fallen World</span>. I
            presenti Termini &amp; Condizioni (“Termini”) regolano l’accesso e
            l’utilizzo del sito, del server FiveM e dei servizi collegati
            (Discord, ticket, eventi). Accedendo o utilizzando i nostri servizi
            accetti integralmente i Termini.
          </p>

          <h4 className="text-[#D9CAB8] font-semibold">
            1) Idoneità e accesso
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Devi avere l’età minima prevista dalla normativa locale per
              partecipare a community online.
            </li>
            <li>
              Il rispetto del regolamento RP e tecnico del server è
              obbligatorio.
            </li>
          </ul>

          <h4 className="text-[#D9CAB8] font-semibold">2) Condotta</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Vietati abuso, discriminazione, doxxing e violazioni della
              privacy.
            </li>
            <li>
              Vietato l’uso di cheat, exploit o strumenti analoghi; lo staff può
              intervenire in ogni momento.
            </li>
            <li>
              Contenuti illegali o in violazione di diritti saranno rimossi.
            </li>
          </ul>

          <h4 className="text-[#D9CAB8] font-semibold">
            3) Contenuti e proprietà intellettuale
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Marchi, grafiche e asset restano dei rispettivi proprietari. Uso
              non autorizzato vietato.
            </li>
            <li>
              UGC: resta tuo, ma ci concedi licenza d’uso non esclusiva per
              moderazione, promozione e miglioramento.
            </li>
          </ul>

          <h4 className="text-[#D9CAB8] font-semibold">
            4) Sanzioni e sospensioni
          </h4>
          <p>
            Lo staff può applicare ammonizioni, sospensioni o ban secondo
            regolamento.
          </p>

          <h4 className="text-[#D9CAB8] font-semibold">
            5) Limitazione di responsabilità
          </h4>
          <p>
            Servizi “così come sono”, senza garanzia di disponibilità continua o
            assenza di errori. Nei limiti di legge, decliniamo responsabilità
            per danni indiretti, perdita di dati o opportunità.
          </p>

          <h4 className="text-[#D9CAB8] font-semibold">
            6) Modifiche ai Termini
          </h4>
          <p>
            Possiamo aggiornare i Termini; le modifiche saranno comunicate su
            sito o Discord. L’uso continuato implica accettazione delle
            modifiche.
          </p>

          <h4 className="text-[#D9CAB8] font-semibold">7) Contatti</h4>
          <p>
            Per richieste: ticket su Discord o email a{" "}
            <span className="underline">supporto@fallenworld.example</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
