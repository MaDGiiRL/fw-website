import { useEffect, useState } from "react";

export default function KevinMemorialBanner({
  photoUrl,
  dismissible = false,
  storageKey = "fw-kevin-memorial-hidden",
  persistence = "session", // "none" | "session" | "local"
  className = "",
  message,
}) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!dismissible) return;

    if (persistence === "local") {
      const isHidden = localStorage.getItem(storageKey) === "true";
      setHidden(isHidden);
    } else if (persistence === "session") {
      const isHidden = sessionStorage.getItem(storageKey) === "true";
      setHidden(isHidden);
    } else {
      // "none" -> non leggere alcuna persistenza
      setHidden(false);
    }
  }, [dismissible, storageKey, persistence]);

  const handleClose = () => {
    if (dismissible) {
      if (persistence === "local") {
        localStorage.setItem(storageKey, "true");
      } else if (persistence === "session") {
        sessionStorage.setItem(storageKey, "true");
      }
      // con "none" non salviamo nulla
      setHidden(true);
    }
  };

  if (hidden) return null;

  return (
    <aside
      aria-live="polite"
      aria-label="Memoriale per Kevin"
      className={[
        "fixed bottom-4 right-4 z-50 max-w-[14rem] sm:max-w-[16rem]",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur",
          "border border-[#736751]/60",
          "bg-[#1A1814]/90 text-[#D9CAB8] flex flex-col items-center",
        ].join(" ")}
      >
        {/* Foto sopra */}
        <img
          src={photoUrl}
          alt="Kevin"
          className="w-full h-40 object-cover rounded-t-2xl ring-1 ring-[#736751]/40"
        />

        {/* Testo sotto */}
        <div className="p-3 text-center">
          <p className="text-sm leading-snug">
            {message ?? (
              <>
                <span className="font-bold text-base">✨ Kevin ✨</span>
                <br />
                <br />
                <span className="italic">
                  Un animo gentile, pieno d&apos;amore.
                </span>
                <br />
                Giocatore di <span className="font-semibold">RP</span>, streamer{" "}
                <span className="font-semibold">Twitch</span> e biker
                appassionato.
                <br />
                <span className="italic">
                  Un gigante buono, dal cuore fragile.
                </span>
                <br />
                <br />
                <span className="italic opacity-90">
                  Mi chiamavi{" "}
                  <span className="font-semibold">
                    &quot;cattivona del mio cuore&quot;
                  </span>
                  …
                  <br />
                  <span className="italic">e così ti ricorderò sempre.</span>
                </span>
                <br />
                <br />
                <span className="font-medium">
                  Ci mancherai tanto.
                </span>
                <br />
                <span className="italic opacity-90">
                  Da <span className="font-semibold">Mad</span>, dai{" "}
                  <span className="font-semibold">tuoi ragazzi della Stab City</span>{" "}
                  e da tutti gli <span className="font-semibold">owner</span>,{" "}
                  <span className="font-semibold">staffer</span> e{" "}
                  <span className="font-semibold">player</span> di Fallen World.
                </span>
              </>
            )}
          </p>
        </div>

        {/* bottone chiudi opzionale */}
        {dismissible && (
          <button
            onClick={handleClose}
            aria-label="Nascondi banner memoriale"
            className="absolute top-2 right-2 inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#736751]/60 bg-[#0D0C0A]/60 text-[#D9CAB8] hover:bg-[#2A2620] transition"
          >
            ✕
          </button>
        )}
      </div>
    </aside>
  );
}
