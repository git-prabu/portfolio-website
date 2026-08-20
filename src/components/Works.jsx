import Reveal from "./Reveal";
import AssetImage from "./AssetImage";
import { projects } from "../data/projects";

export default function Works() {
  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        {/* Section intro */}
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 md:mb-24">
          <div>
            <Reveal>
              <p className="eyebrow text-muted">Selected Works</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-4 text-6xl text-fg md:text-8xl">
                Architecture
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted">
              Selected projects in computational and parametric design — from
              waterfront villas to speculative marine structures.
            </p>
          </Reveal>
        </div>

        <div className="space-y-28 md:space-y-40">
          {projects.map((p, i) => (
            <ProjectSection key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectSection({ project, flip }) {
  const { index, title, kind, year, tools, hero, secondary, summary, body, id } =
    project;

  return (
    <article id={id} className="scroll-mt-24">
      <div className="grid gap-8 md:grid-cols-12 md:items-center">
        {/* Text column */}
        <div
          className={`md:col-span-5 ${flip ? "md:order-2 md:pl-6" : "md:pr-6"}`}
        >
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-display text-2xl text-accent">{index}</span>
              <span className="eyebrow text-muted">{kind}</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="display mt-3 text-5xl text-fg md:text-7xl">
              {title}
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-faint">{summary}</p>
          </Reveal>
          {body.map((para, i) => (
            <Reveal key={i} delay={0.12 + i * 0.05}>
              <p className="mt-4 text-sm leading-relaxed text-muted">{para}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted">{year}</span>
              <span className="text-line">·</span>
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-2.5 py-1 text-[0.68rem] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Image column: main render + wireframe inset */}
        <div className={`md:col-span-7 ${flip ? "md:order-1" : ""}`}>
          <Reveal y={40} amount={0.15}>
            <div className="relative">
              <AssetImage
                src={hero}
                alt={`${title} — render`}
                label={title}
                variant="render"
                sizes="(min-width: 768px) 58vw, 100vw"
                className="aspect-[16/10] w-full rounded-sm"
                imgClassName="transition-transform duration-[1.2s] ease-out hover:scale-[1.03]"
              />
              {secondary && (
                <div className="absolute -bottom-10 left-4 hidden w-48 sm:block md:-left-10 md:w-60">
                  <AssetImage
                    src={secondary}
                    alt={`${title} — additional view`}
                    label={title}
                    variant="render"
                    sizes="240px"
                    className="aspect-[4/3] w-full rounded-sm border border-line shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)]"
                  />
                </div>
              )}
              <span className="eyebrow absolute right-4 top-4 text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.75)]">
                {title} · Selected Works
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
