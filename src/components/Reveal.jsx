import { motion } from "framer-motion";

// Reveal-on-scroll wrapper: elements fade + rise into view as they enter the
// viewport (the effect Prabu liked on nabilissa.com). `delay` staggers items.
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
  amount = 0.25,
  once = true,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
