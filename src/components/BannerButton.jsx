// components/BannerButton.jsx
import React from "react";

export default function BannerButton({
  icon: Icon,
  label,
  onClick,
  href,
  className = "",
}) {
  const baseClasses =
    "group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#736751]/40 text-[#D9CAB8]/90 bg-[#0D0C0A]/40 hover:bg-[#262520]/60 transition focus:outline-none focus:ring-2 focus:ring-[#736751]/50 " +
    className;

  const inner = (
    <>
      <span className="relative inline-grid w-6 h-6 place-items-center rounded-lg bg-[#262520] border border-[#736751]/40 text-[#A69981]">
        <span className="pointer-events-none absolute inset-0 rounded-lg ring-0 ring-[#A69981]/0 group-hover:ring-2 group-hover:ring-[#A69981]/40 transition" />
        {Icon && <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />}
      </span>
      <span className="text-xs sm:text-sm">{label}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={baseClasses}
        role="button"
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {inner}
    </button>
  );
}
