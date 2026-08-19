import { motion } from "framer-motion";
import AssetImage from "./AssetImage";

// Hero — Prabu's portrait + the dual identity (architect × developer).
// Portrait file: /public/portrait.jpg (placeholder until dropped in).
export default function Hero() {
  const rise = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pb-10 pt-28 md:px-10"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center">
        <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          {/* Left: name + identity */}
          <div>
            <motion.p
              className="eyebrow mb-6 text-muted"
              {...rise}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Architecture Portfolio · 2020 — 2026
            </motion.p>

            <motion.h1
              className="display text-[18vw] leading-[0.85] text-ink md:text-[10.5rem]"
              {...rise}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Prabu
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
              {...rise}
              transition={{
                duration: 0.9,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Computationally driven architect &amp; developer. I design and
              build across two worlds — parametric architecture and software —
              bridging design thinking with code.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              {...rise}
              transition={{
                duration: 0.9,
                delay: 0.34,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {["Architect", "Parametric design", "Developer", "3D / AI"].map(
                (t) => (
                  <span
                    key={t}
                    className="eyebrow rounded-full border border-line px-3 py-1.5 text-muted"
                  >
                    {t}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <AssetImage
              src="/portrait.jpg"
              alt="Prabu"
              label="Your portrait"
              variant="render"
              className="aspect-[4/5] w-full rounded-sm"
            />
            <span className="eyebrow absolute -bottom-3 left-4 bg-cream px-2 text-muted">
              Chennai, India
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mx-auto flex w-full max-w-[1400px] items-end justify-between"
      >
        <span className="eyebrow text-muted">Selected Works ↓</span>
        <span className="eyebrow text-muted">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
