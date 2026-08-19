import { useState } from "react";

/*
  AssetImage — shows a real image if the file exists at `src`, otherwise a
  styled placeholder carrying the label. This lets the whole site be built now
  and have Prabu's real renders "light up" the instant he drops files into
  /public/works/ (matching the filenames in src/data/projects.js).

  variant: "render" | "wire" | "dark"  (all tuned for the black theme)
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
      "bg-[linear-gradient(135deg,#181818_0%,#0c0c0c_55%,#0b1a22_100%)] text-faint",
    wire: "bg-surface text-muted border border-line",
    dark: "bg-[linear-gradient(135deg,#0b1a22_0%,#0c0c0c_60%,#000000_100%)] text-accent/70",
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
          <span className="text-[0.6rem] tracking-widest opacity-70">
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
