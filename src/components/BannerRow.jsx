// components/BannerRow.jsx
import React from "react";
import { FileText, Shield, MessageCircle } from "lucide-react";
import BannerButton from "./BannerButton";

export default function BannerRow({
  onOpenTerms,
  onOpenPrivacy,
  discordUrl = "https://discord.gg/p8pPKJ6Sex",
}) {
  return (
    <div className="flex items-center gap-2">
      <BannerButton
        icon={FileText}
        label="Termini & Condizioni"
        onClick={onOpenTerms}
      />
      <BannerButton icon={Shield} label="Privacy" onClick={onOpenPrivacy} />
      {/* Discord come link esterno */}
      <BannerButton icon={MessageCircle} label="Discord" href={discordUrl} />
    </div>
  );
}
