import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

import TermsModal from "./TermsModal.jsx";
import PrivacyModal from "./PrivacyModal.jsx";

// Import del banner memoriale
import KevinMemorialBanner from "./KevinMemorialBanner.jsx";

export default function Layout() {
  const [showBanner, setShowBanner] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("fw-terms-accepted");
    if (!accepted) setShowBanner(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("fw-terms-accepted", "true");
    setShowBanner(false);
  };

  const handleReject = () => {
    // Comportamento su rifiuto: per ora chiudo il banner.
    setShowBanner(false);
  };

  return (
    <div className="min-h-screen bg-[#0D0C0A] text-[#D9CAB8] selection:bg-[#736751] selection:text-[#0D0C0A] relative">
      {/* background image overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.50] mix-blend-soft-light"
        style={{
          backgroundImage: "url('https://i.imgur.com/3RNqjEK.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Banner memoriale per Kevin */}
      <KevinMemorialBanner
        photoUrl="https://i.imgur.com/kOBoSyn.png"
        dismissible={true}
        persistence="none" // <- non memorizza la chiusura
      />

      <Footer />

      {/* Banner accetta/rifiuta con link alle modali */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1814] bg-opacity-95 border-t border-[#736751] shadow-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-base text-[#D9CAB8]">
            Questo sito utilizza i{" "}
            <button
              onClick={() => setOpenTerms(true)}
              className="underline underline-offset-4 decoration-dotted hover:text-[#A69981] transition"
            >
              Termini &amp; Condizioni
            </button>{" "}
            e la{" "}
            <button
              onClick={() => setOpenPrivacy(true)}
              className="underline underline-offset-4 decoration-dotted hover:text-[#A69981] transition"
            >
              Privacy Policy
            </button>
            . Per continuare devi accettarli.
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleReject}
              className="px-4 py-2 rounded-lg border border-[#736751] text-[#D9CAB8] hover:bg-[#2A2620] transition"
            >
              Rifiuta
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 rounded-lg bg-[#736751] text-[#0D0C0A] font-semibold hover:bg-[#8C7F68] transition"
            >
              Accetta
            </button>
          </div>
        </div>
      )}

      {/* Modali globali */}
      <TermsModal open={openTerms} onClose={() => setOpenTerms(false)} />
      <PrivacyModal open={openPrivacy} onClose={() => setOpenPrivacy(false)} />
    </div>
  );
}
