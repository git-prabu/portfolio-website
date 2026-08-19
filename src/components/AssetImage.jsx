import { useState } from "react";

/*
  AssetImage — shows a real image if the file exists at `src`, otherwise a
  styled placeholder carrying the label. This lets the whole site be built now
  and have Prabu's real renders "light up" the instant he drops files into
  /public/works/ (matching the filenames in src/data/projects.js).

  variant: "render" (cream/teal gradient) | "wire" (line-drawing feel) | "dark"
*/
export default function AssetImage({
  src,
  alt = "",
  label = "",
  variant = "render",
  className = "",
  imgClassName = "",
}) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  const palettes = {
    render:
      "bg-[linear-gradient(135deg,#e5e1d6_0%,#d4cfc3_45%,#b9c7c4_100%)] text-ink/45",
    wire: "bg-cream-2 text-ink/30 border border-line",
    dark: "bg-[linear-gradient(135deg,#16292a_0%,#0f1b1c_60%,#0b1516_100%)] text-accent-soft/70",
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showPlaceholder ? (
        <div
          className={`flex h-full w-full flex-col items-center justify-center gap-2 ${palettes[variant]}`}
        >
          {variant === "wire" && (
            <WireGlyph className="mb-1 h-16 w-16 opacity-60" />
          )}
          <span className="eyebrow px-4 text-center">{label || alt}</span>
          <span className="font-mono text-[0.6rem] tracking-widest opacity-70">
            {variant === "wire" ? "wireframe" : "render"} placeholder
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  );
}

function WireGlyph({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
    >
      <path d="M8 40 32 12l24 28M8 40l24 12 24-12M8 40v6l24 12M56 40v6L32 58" />
      <path d="M32 12v46" opacity="0.5" />
    </svg>
  );
}
