// Footer.jsx
import { useEffect, useRef, useState, useId } from "react";
import { FileText, Shield, X, MessageCircle } from "lucide-react"; // 👈 aggiunto MessageCircle

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
            {/* 👇 nuovo bottone Discord */}
            <a
              href="https://discord.gg/p8pPKJ6Sex"
              target="_blank"
              rel="noreferrer"
            >
              <BannerButton
                icon={MessageCircle}
                label="Discord"
                onClick={() => {}}
              />
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
