import { useEffect } from "react";
import Lenis from "lenis";

// Buttery smooth scrolling (the "yaros / nabilissa" feel). Wraps the whole app.
export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Respect reduced-motion: skip inertia scrolling entirely.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Let in-page anchor links use Lenis for smooth section jumps.
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (id && id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: 0 });
        }
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return children;
}
