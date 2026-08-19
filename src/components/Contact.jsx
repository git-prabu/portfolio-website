import Reveal from "./Reveal";

const channels = [
  { label: "Email", value: "arprabu02@gmail.com", href: "mailto:arprabu02@gmail.com" },
  { label: "Phone", value: "+91 88707 47370", href: "tel:+918870747370" },
  { label: "LinkedIn", value: "Prabu D", href: "https://www.linkedin.com/" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-dark text-cream"
      style={{ colorScheme: "dark" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow text-accent-soft">Contact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-6 text-[13vw] leading-[0.9] text-cream md:text-[8rem]">
            Let&apos;s build
            <br />
            something.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/70">
            Open to architecture, visualization, and software work — and always
            up for a technical challenge. The fastest way to reach me is email.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-dark-line bg-dark-line sm:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.06 * i} className="bg-dark">
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group block h-full p-8 transition-colors hover:bg-dark-2"
              >
                <span className="eyebrow text-cream/50">{c.label}</span>
                <div className="mt-3 flex items-center gap-2 font-display text-lg text-cream transition-colors group-hover:text-accent-soft">
                  {c.value}
                  <span className="opacity-0 transition-opacity group-hover:opacity-100">
                    ↗
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
