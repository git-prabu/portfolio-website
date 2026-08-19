import Reveal from "./Reveal";

const paragraphs = [
  "Computationally driven architecture graduate with a strong interest in software, 3D, and parametric design. Passionate about optimizing and automating architectural workflows through computational thinking and technology.",
  "Currently learning C# to develop custom Grasshopper plugins, bridging the gap between design thinking and software development. I thrive on new technical challenges, driven by a constant pursuit of smarter, more optimized solutions — a self-directed learner, eager to grow and adapt every single day.",
];

const skills = [
  {
    title: "Parametric Modelling",
    body: "Rhino and Grasshopper for parametric models, complex geometries, and adaptable architectural systems through computational design workflows.",
  },
  {
    title: "Visualization",
    body: "Quickly creating realistic visualizations and final post-production for architecture and product.",
  },
  {
    title: "Programming",
    body: "Web and app development, Grasshopper plugin development, and automating architectural workflows through custom tools and scripts.",
  },
  {
    title: "AI & Prompt Engineering",
    body: "Creating visualizations and animations with AI, and building detailed custom prompts for consistent, efficient AI-generated renders and workflows.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <p className="eyebrow text-muted">About</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-4 text-5xl text-ink md:text-7xl">
              Design thinking,
              <br />
              written in code.
            </h2>
          </Reveal>
        </div>

        <div>
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <p className="mb-6 text-lg leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}

          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
            {skills.map((s, i) => (
              <Reveal key={s.title} delay={0.05 * i} className="bg-cream">
                <div className="h-full p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.body}
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
