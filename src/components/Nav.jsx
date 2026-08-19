import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#halohelm", label: "HaloHelm" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/80 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          Prabu<span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="eyebrow text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="eyebrow rounded-full border border-ink px-4 py-2 text-ink transition-colors hover:bg-ink hover:text-cream"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
