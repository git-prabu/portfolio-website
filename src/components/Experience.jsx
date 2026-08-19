import Reveal from "./Reveal";

const timeline = [
  {
    year: "2026",
    title: "Freelance Software Development",
    body: "Developed and sold websites for clients, and built and launched my own application — HaloHelm.",
  },
  {
    year: "2025",
    title: "Freelance 3D Visualization",
    body: "Created 3D visualizations and 3D-printed models, taking projects through Fiverr.",
  },
  {
    year: "2024",
    title: "Internship · Shroffleon",
    body: "Interior projects — detailed and technical drawings for all spaces including HVAC layouts. Built 3D models in SketchUp and produced V-Ray visualizations.",
  },
  {
    year: "2020 — 2025",
    title: "B.Arch · Sri Manakula Vinayagar School of Architecture",
    body: "Bachelor of Architecture — a 5-year program.",
  },
];

const software = [
  ["Rhino 3D", 95],
  ["Grasshopper", 78],
  ["AutoCAD", 88],
  ["Revit", 62],
  ["SketchUp", 90],
  ["D5 Render", 85],
  ["Photoshop", 88],
  ["Blender", 55],
  ["AI tools", 92],
];

export default function Experience() {
  return (
    <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[1.1fr_0.9fr]">
        {/* Timeline */}
        <div>
          <Reveal>
            <p className="eyebrow text-muted">Experience &amp; Education</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-4 text-5xl text-fg md:text-7xl">
              The path so far
            </h2>
          </Reveal>

          <div className="mt-12 border-l border-line">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={0.05 * i}>
                <div className="relative pb-10 pl-8">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="text-sm text-muted">{t.year}</span>
                  <h3 className="mt-1 font-display text-2xl text-fg">
                    {t.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    {t.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Software proficiency */}
        <div>
          <Reveal>
            <p className="eyebrow text-muted">Software Proficiency</p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {software.map(([name, pct], i) => (
              <Reveal key={name} delay={0.03 * i}>
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-fg">{name}</span>
                    <span className="text-xs text-muted">{pct}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
