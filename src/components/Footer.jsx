import { useState } from "react";
import { FileText, Shield, MessageCircle } from "lucide-react";
import TermsModal from "./TermsModal.jsx";
import PrivacyModal from "./PrivacyModal.jsx";

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

      {/* Modali riutilizzabili */}
      <TermsModal open={openTerms} onClose={() => setOpenTerms(false)} />
      <PrivacyModal open={openPrivacy} onClose={() => setOpenPrivacy(false)} />
    </>
  );
}

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
