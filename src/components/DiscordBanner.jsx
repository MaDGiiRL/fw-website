// components/DiscordBanner.jsx
export default function DiscordBanner({
  bgSrc,
  logoSrc,
  title = "Unisciti alla Community",
  subtitle = "Eventi, anteprime e supporto live sul nostro Discord.",
  inviteUrl = "https://discord.gg/p8pPKJ6Sex",
  buttonText = "Entra su Discord",
}) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#262520]">
      {/* Background immagine */}
      <img
        src={bgSrc}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay per leggibilità */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(13,12,10,0.7),transparent_60%)]" />
      </div>

      {/* Contenuto */}
      <div className="relative z-10 p-5 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          {/* Testo sinistra */}
          <div className="text-center md:text-left">
            <span className="inline-flex w-max px-3 py-1 rounded-full border border-[#736751]/40 text-[#D9CAB8]/90 text-xs tracking-wider backdrop-blur">
              Discord • Community
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#D9CAB8]">
              {title}
            </h3>
            <p className="mt-1 text-[#D9CAB8]/80 text-sm sm:text-base">
              {subtitle}
            </p>
          </div>

          {/* Logo centrale */}
          <div className="flex justify-center">
            <img
              src={logoSrc}
              alt="Logo"
              loading="lazy"
              decoding="async"
              className="block w-24 sm:w-32 md:w-36 lg:w-40 h-auto rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-300 object-contain"
            />
          </div>

          {/* Bottone destra */}
          <div className="flex justify-center md:justify-end">
            <a
              href={inviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5865F2] text-white hover:shadow-[0_0_20px_rgba(88,101,242,.45)] transition focus:outline-none focus:ring-2 focus:ring-[#5865F2]/60"
              aria-label="Apri il nostro server Discord"
            >
              <DiscordGlyph className="w-5 h-5" />
              <span className="text-sm sm:text-base">{buttonText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Piccola icona Discord inline (no dipendenze esterne) */
function DiscordGlyph({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.038c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.468 0c-.164-.397-.41-.875-.62-1.25a.077.077 0 0 0-.079-.038c-1.692.31-3.34.84-4.884 1.515a.07.07 0 0 0-.033.027C1.663 8.1.995 11.69 1.301 15.233a.085.085 0 0 0 .032.057 19.997 19.997 0 0 0 6.034 3.043.08.08 0 0 0 .086-.028c.465-.632.879-1.301 1.233-2.004a.08.08 0 0 0-.044-.111 12.98 12.98 0 0 1-1.86-.887.08.08 0 0 1-.009-.132c.125-.093.25-.19.369-.288a.077.077 0 0 1 .081-.012c3.902 1.788 8.131 1.788 12.003 0a.078.078 0 0 1 .083.01c.118.099.243.196.37.29a.08.08 0 0 1-.008.132c-.596.35-1.223.647-1.87.887a.08.08 0 0 0-.044.111c.36.703.775 1.372 1.232 2.004a.079.079 0 0 0 .086.028 19.93 19.93 0 0 0 6.035-3.043.078.078 0 0 0 .031-.056c.5-5.177-.836-8.73-3.37-10.836a.07.07 0 0 0-.034-.028ZM9.62 13.91c-1.182 0-2.155-1.08-2.155-2.406 0-1.327.953-2.407 2.155-2.407s2.175 1.08 2.156 2.407c0 1.326-.974 2.406-2.156 2.406Zm4.77 0c-1.182 0-2.155-1.08-2.155-2.406 0-1.327.953-2.407 2.156-2.407s2.175 1.08 2.156 2.407c0 1.326-.974 2.406-2.156 2.406Z" />
    </svg>
  );
}
