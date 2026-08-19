import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sendToPrabu, mailtoFallback } from "../lib/sendMessage";

const DURATIONS = ["15m", "30m", "1h"];
const SLOTS = ["10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "17:30"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function buildMonth(year, month) {
  const first = new Date(year, month, 1);
  const startPad = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  return cells;
}

export default function BookingModal({ open, onClose }) {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const [view, setView] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [duration, setDuration] = useState("30m");
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  // Close on ESC + lock scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const cells = buildMonth(view.year, view.month);

  const changeMonth = (dir) => {
    setView((v) => {
      const m = v.month + dir;
      const d = new Date(v.year, m, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  };

  const canConfirm = date && slot && name && email && status !== "sending";

  const confirm = async () => {
    if (!canConfirm) return;
    setStatus("sending");
    const when = `${date.toDateString()} at ${slot} (IST) · ${duration}`;
    const subject = `Call request — ${name}`;
    try {
      await sendToPrabu(
        {
          name,
          email,
          type: "Call booking",
          when,
          duration,
        },
        { subject }
      );
      setStatus("sent");
    } catch {
      // Fall back to opening the visitor's mail client.
      mailtoFallback(subject, [
        `Name: ${name}`,
        `Email: ${email}`,
        `Requested call: ${when}`,
      ]);
      setStatus("sent");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-line bg-surface"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg transition-colors hover:bg-fg hover:text-bg"
            >
              ✕
            </button>

            {status === "sent" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 p-10 text-center">
                <div className="display text-5xl text-fg">
                  You&apos;re <span className="italic">set</span>.
                </div>
                <p className="max-w-sm text-faint">
                  Your call request for{" "}
                  <span className="text-fg">{date?.toDateString()}</span> at{" "}
                  <span className="text-fg">{slot} IST</span> is on its way to
                  Prabu. He&apos;ll confirm by email shortly.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 rounded-full bg-fg px-6 py-3 text-sm font-semibold text-bg"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="grid gap-0 md:grid-cols-[300px_1fr]">
                {/* Left: meta */}
                <div className="border-b border-line p-7 md:border-b-0 md:border-r">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display text-2xl text-bg">
                    P
                  </div>
                  <p className="mt-4 text-sm text-muted">Prabu</p>
                  <h3 className="display mt-1 text-3xl text-fg">
                    Intro call
                  </h3>
                  <p className="mt-3 text-sm text-faint">
                    Let&apos;s talk about your project!
                  </p>

                  <div className="mt-6 inline-flex rounded-full border border-line p-1">
                    {DURATIONS.map((d) => (
                      <button
                        key={d}
                        onClick={() => setDuration(d)}
                        className={`rounded-full px-3 py-1 text-sm transition-colors ${
                          duration === d
                            ? "bg-fg text-bg"
                            : "text-faint hover:text-fg"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-2 text-sm text-muted">
                    <li>🎥 Google Meet</li>
                    <li>🌐 Asia / Kolkata (IST)</li>
                  </ul>
                </div>

                {/* Right: calendar + slots + details */}
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-fg">
                      {MONTHS[view.month]}{" "}
                      <span className="text-muted">{view.year}</span>
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => changeMonth(-1)}
                        aria-label="Previous month"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-fg hover:bg-fg hover:text-bg"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() => changeMonth(1)}
                        aria-label="Next month"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-fg hover:bg-fg hover:text-bg"
                      >
                        ›
                      </button>
                    </div>
                  </div>

                  {/* Weekday header */}
                  <div className="mt-5 grid grid-cols-7 gap-1 text-center">
                    {WEEKDAYS.map((w) => (
                      <span key={w} className="eyebrow text-muted">
                        {w.slice(0, 1)}
                      </span>
                    ))}
                  </div>

                  {/* Days */}
                  <div className="mt-2 grid grid-cols-7 gap-1">
                    {cells.map((c, i) => {
                      if (!c) return <span key={i} />;
                      const past = c < today;
                      const selected =
                        date && c.getTime() === date.getTime();
                      return (
                        <button
                          key={i}
                          disabled={past}
                          onClick={() => {
                            setDate(c);
                            setSlot("");
                          }}
                          className={`aspect-square rounded-lg text-sm transition-colors ${
                            past
                              ? "cursor-not-allowed text-muted/40"
                              : selected
                                ? "bg-fg font-semibold text-bg"
                                : "bg-bg text-faint hover:bg-surface-2 hover:text-fg"
                          }`}
                        >
                          {c.getDate()}
                        </button>
                      );
                    })}
                  </div>

                  {/* Slots */}
                  {date && (
                    <div className="mt-6">
                      <p className="eyebrow text-muted">
                        {date.toDateString()}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {SLOTS.map((s) => (
                          <button
                            key={s}
                            onClick={() => setSlot(s)}
                            className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
                              slot === s
                                ? "border-fg bg-fg text-bg"
                                : "border-line text-faint hover:border-faint"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Details */}
                  {slot && (
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <input
                        className="input"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        className="input"
                        type="email"
                        placeholder="you@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button
                        onClick={confirm}
                        disabled={!canConfirm}
                        className="rounded-full bg-fg py-3 text-sm font-semibold text-bg transition-opacity disabled:opacity-40 sm:col-span-2"
                      >
                        {status === "sending"
                          ? "Sending…"
                          : `Book ${slot} on ${date.toLocaleDateString()}`}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
