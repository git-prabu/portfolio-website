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

      {/* Big watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none text-center"
      >
        <span className="display block translate-y-[22%] text-[26vw] leading-none text-fg/[0.04]">
          Prabu
        </span>
      </div>
    </footer>
  );
}
