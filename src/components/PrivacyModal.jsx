import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";

export default function PrivacyModal({ open, onClose }) {
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
            Privacy Policy
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
            La presente{" "}
            <span className="text-[#D9CAB8] font-medium">Privacy Policy</span>{" "}
            descrive come trattiamo i dati personali degli utenti che utilizzano
            il sito, il server FiveM e i canali collegati (Discord, ticket).
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
              Dati tecnici: IP, log di accesso, informazioni
              dispositivo/cliente.
            </li>
            <li>
              Dati account/community: nickname, ID Discord/FiveM/Steam, UGC
              (chat, ticket, segnalazioni).
            </li>
            <li>Clip/log per moderazione, anti-cheat e gestione dispute.</li>
            <li>
              Cookie/analytics tecnici per sicurezza, performance e
              miglioramenti.
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
              Comunicazioni operative (legittimo interesse). Marketing solo
              previo consenso.
            </li>
          </ul>

          <h4 className="text-[#D9CAB8] font-semibold">4) Conservazione</h4>
          <p>
            Dati conservati per il tempo necessario alle finalità (es. log
            tecnici a rotazione, ticket fino a chiusura + periodo ragionevole),
            fatti salvi obblighi di legge o tutela diritti.
          </p>

          <h4 className="text-[#D9CAB8] font-semibold">5) Condivisione</h4>
          <p>
            Possibile con fornitori che supportano l’erogazione (hosting,
            anticheat, ticketing) sotto accordi di riservatezza. Non vendiamo i
            dati.
          </p>

          <h4 className="text-[#D9CAB8] font-semibold">
            6) Trasferimenti extra-UE
          </h4>
          <p>
            Se coinvolti, adottiamo garanzie adeguate (es. SCC) quando
            richiesto.
          </p>

          <h4 className="text-[#D9CAB8] font-semibold">7) Sicurezza</h4>
          <p>
            Misure tecniche e organizzative adeguate (cifratura in transito,
            controlli di accesso, minimizzazione). Segnala vulnerabilità in
            privato allo staff.
          </p>

          <h4 className="text-[#D9CAB8] font-semibold">8) Diritti</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Accesso, rettifica, cancellazione, limitazione, portabilità,
              opposizione, revoca del consenso.
            </li>
            <li>Per esercitare i diritti: apri un ticket su Discord.</li>
            <li>Reclamo all’Autorità Garante competente.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
