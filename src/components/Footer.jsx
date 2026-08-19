export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-cream/50" style={{ colorScheme: "dark" }}>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 border-t border-dark-line px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <span className="font-display text-sm text-cream">
          Prabu<span className="text-accent">.</span>
        </span>
        <span className="font-mono text-xs">
          Architecture Portfolio · 2020 — 2026
        </span>
        <span className="font-mono text-xs">
          © {year} Prabu — Built with React
        </span>
      </div>
    </footer>
  );
}
