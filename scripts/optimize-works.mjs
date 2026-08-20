// Regenerate all published images as responsive, capped web derivatives
// (the Behance model: never publish the originals). For each source in
// incoming/ we emit three widths:
//   <name>.jpg       → 1280px (default / fallback that most grabs would get)
//   <name>-640.jpg   → 640px  (phones)
//   <name>-1920.jpg  → 1920px (large / retina, via srcset only)
// Run: node scripts/optimize-works.mjs
import sharp from "sharp";

const jobs = [
  ["incoming/stone villa main.png", "public/works/stone-villa"],
  ["incoming/stone villa small.png", "public/works/stone-villa-2"],
  ["incoming/catalyst hub main.jpg", "public/works/catalyst-hub"],
  ["incoming/catalyst hub small.jpg", "public/works/catalyst-hub-2"],
  ["incoming/Ripple Pavilion main.png", "public/works/ripple-pavilion"],
  ["incoming/Ripple Pavilion small.jpg", "public/works/ripple-pavilion-2"],
  ["incoming/Halcyon main.png", "public/works/halcyon"],
  ["incoming/Halcyon small.jpg", "public/works/halcyon-2"],
  ["incoming/Facade Design.png", "public/works/facade-design"],
  ["incoming/form study.jpg", "public/works/form-study"],
  ["incoming/Halo helm.png", "public/works/halohelm"],
  ["incoming/new me.png", "public/portrait"],
];

const widths = [
  { suffix: "-640", w: 640, q: 80 },
  { suffix: "", w: 1280, q: 82 },
  { suffix: "-1920", w: 1920, q: 82 },
];

(async () => {
  for (const [src, base] of jobs) {
    const out = [];
    for (const { suffix, w, q } of widths) {
      const info = await sharp(src)
        .resize({ width: w, withoutEnlargement: true })
        .jpeg({ quality: q, mozjpeg: true })
        .toFile(`${base}${suffix}.jpg`);
      out.push(`${suffix || "base"}:${Math.round(info.size / 1024)}KB(${info.width}px)`);
    }
    console.log(base.padEnd(28), out.join("  "));
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
