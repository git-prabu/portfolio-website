import Reveal from "./Reveal";

const nav = [
  { href: "#top", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#halohelm", label: "HaloHelm" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-line px-6 pt-20 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Name + tagline */}
          <div>
            <Reveal>
              <h2 className="display text-6xl text-fg md:text-7xl">
                I&apos;m <span className="italic">Prabu</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-6 space-y-1 text-lg text-faint">
                <p>Computational design.</p>
                <p>Built with code.</p>
                <p className="font-semibold text-fg">Grounded in craft.</p>
              </div>
            </Reveal>
          </div>

          {/* Nav */}
          <div>
            <p className="eyebrow text-muted">Menu</p>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-lg text-faint transition-colors hover:text-fg"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-muted">Elsewhere</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:arprabu02@gmail.com"
                  className="text-lg text-faint transition-colors hover:text-fg"
                >
                  arprabu02@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918870747370"
                  className="text-lg text-faint transition-colors hover:text-fg"
                >
                  +91 88707 47370
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-faint transition-colors hover:text-fg"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-line py-8 text-center md:flex-row md:text-left">
          <span className="eyebrow text-muted">
            Architecture Portfolio · 2020 — 2026
          </span>
          <span className="eyebrow text-muted">
            © {year} Prabu — All rights reserved
          </span>
        </div>
      </div>

      {/* Big script watermark inside a smoky blue glow */}
      <div className="relative mt-6">
        {/* Smoky glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[120%]"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 100%, rgba(158,207,255,0.16) 0%, rgba(158,207,255,0.06) 35%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-10%] left-1/2 h-64 w-[70%] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(120,175,225,0.22), rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Signature-style watermark */}
        <span
          aria-hidden="true"
          className="relative block select-none text-center leading-none"
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "26vw",
            transform: "translateY(14%)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          prabu
        </span>

        {/* Created by line */}
        <p className="relative pb-6 text-center text-sm text-muted">
          Created by <span className="font-display italic text-faint">Prabu</span>
        </p>
      </div>
    </footer>
  );
}
