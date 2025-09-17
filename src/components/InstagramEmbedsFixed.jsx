import { useEffect } from "react";

export default function InstagramEmbedsFixed({
  postUrls = [],
  cols = { base: 1, md: 2, lg: 3 },
  height = "20rem", // altezza fissa per le card
}) {
  // mapping classi Tailwind
  const gridBase =
    cols.base === 3
      ? "grid-cols-3"
      : cols.base === 2
      ? "grid-cols-2"
      : "grid-cols-1";
  const gridMd =
    cols.md === 3
      ? "md:grid-cols-3"
      : cols.md === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-1";
  const gridLg =
    cols.lg === 4
      ? "lg:grid-cols-4"
      : cols.lg === 3
      ? "lg:grid-cols-3"
      : cols.lg === 2
      ? "lg:grid-cols-2"
      : "lg:grid-cols-1";

  useEffect(() => {
    const id = "instagram-embed-script";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(s);
      s.onload = () =>
        window.instgrm &&
        window.instgrm.Embeds &&
        window.instgrm.Embeds.process();
    } else {
      window.instgrm &&
        window.instgrm.Embeds &&
        window.instgrm.Embeds.process();
    }
  }, [postUrls]);

  if (!postUrls.length) return null;

  return (
    <div className={`grid gap-6 ${gridBase} ${gridMd} ${gridLg}`}>
      {postUrls.map((url) => (
        <div
          key={url}
          className="rounded-2xl border border-[#262520] bg-[#0D0C0A] shadow-md overflow-hidden flex items-center justify-center"
          style={{ height }}
        >
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-captioned=""
            data-instgrm-version="14"
            style={{
              background: "#0D0C0A",
              color: "#A69981",
              maxWidth: "100%",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      ))}
    </div>
  );
}
