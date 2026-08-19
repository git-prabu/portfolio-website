import Reveal from "./Reveal";
import AssetImage from "./AssetImage";

const features = [
  { k: "AR visualization", v: "Dishes render as life-size 3D models on the table via the phone camera — no app to download." },
  { k: "AI upselling", v: "Claude AI suggests complementary items based on what the guest is viewing." },
  { k: "Menu analytics", v: "Real-time tracking of views, AR launches, and customer ratings." },
  { k: "Waiter-call system", v: "Digital requests for water, the bill, or assistance, routed to staff." },
  { k: "QR & subdomains", v: "Instant branded menu URLs and codes, generated in minutes." },
  { k: "POS & marketing", v: "Petpooja POS integration plus WhatsApp and email campaign tools." },
];

export default function HaloHelm() {
  return (
    <section
      id="halohelm"
      className="bg-dark text-cream"
      style={{ colorScheme: "dark" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow text-accent-soft">Selected Works · Software</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-4 text-6xl text-cream md:text-8xl">
                HaloHelm
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-md text-cream/70">
              The AR menu that sells more food. Customers scan a QR, watch dishes
              appear life-size in 3D on their table, get AI-powered suggestions —
              and order more. No app. No friction.
            </p>
          </Reveal>
        </div>

        {/* Hero preview */}
        <Reveal y={40} amount={0.15} className="mt-14">
          <AssetImage
            src="/works/halohelm.jpg"
            alt="HaloHelm — AR restaurant menu"
            label="HaloHelm product"
            variant="dark"
            className="aspect-[16/9] w-full rounded-md border border-dark-line"
          />
        </Reveal>

        {/* Stats */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-dark-line bg-dark-line sm:grid-cols-3">
          {[
            ["+28%", "average order value"],
            ["<5 min", "to set up a menu"],
            ["0", "app downloads needed"],
          ].map(([big, small], i) => (
            <Reveal key={small} delay={0.06 * i} className="bg-dark">
              <div className="p-8">
                <div className="display text-4xl text-accent-soft md:text-5xl">
                  {big}
                </div>
                <div className="eyebrow mt-2 text-cream/60">{small}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Two columns: role + features */}
        <div className="mt-16 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <h3 className="font-display text-2xl font-semibold text-cream">
                My role
              </h3>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-4 leading-relaxed text-cream/70">
                I designed, built, and launched HaloHelm end to end — a
                cloud-based platform for small-to-large Indian restaurants. From
                the 3D/AR pipeline and the customer menu experience to the
                restaurant admin, kitchen, and analytics tooling.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Next.js", "Firebase", "Three.js / AR", "Claude AI", "Vercel"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-dark-line px-3 py-1 font-mono text-[0.68rem] text-cream/70"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <a
                href="https://www.halohelm.com"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-cream transition-transform hover:scale-[1.03]"
              >
                Visit halohelm.com ↗
              </a>
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden rounded-md border border-dark-line bg-dark-line sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.k} delay={0.04 * i} className="bg-dark">
                <div className="h-full p-6">
                  <h4 className="font-mono text-sm text-accent-soft">{f.k}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
                    {f.v}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
