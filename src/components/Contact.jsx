import { useState } from "react";
import Reveal from "./Reveal";
import BookingModal from "./BookingModal";
import { sendToPrabu, mailtoFallback } from "../lib/sendMessage";

const roles = ["Studio / Firm", "Recruiter", "Potential client", "Collaborator", "Other"];
const timelines = ["Just exploring", "ASAP", "1–4 weeks", "1–3 months"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    timeline: "",
    message: "",
    subject: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [booking, setBooking] = useState(false);

  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const subject = form.subject || `Portfolio enquiry — ${form.name || "hello"}`;
    try {
      await sendToPrabu(
        {
          name: form.name,
          email: form.email,
          who: form.role || "—",
          timeline: form.timeline || "—",
          message: form.message,
        },
        { subject }
      );
      setStatus("sent");
    } catch {
      mailtoFallback(subject, [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Who: ${form.role || "—"}`,
        `Timeline: ${form.timeline || "—"}`,
        "",
        form.message,
      ]);
      setStatus("sent");
    }
  };

  return (
    <section id="contact" className="border-t border-line px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <Reveal>
          <p className="eyebrow text-muted">Contact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-5 text-6xl leading-[0.95] text-fg md:text-[6.5rem]">
            Let&apos;s build <span className="italic">something</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg text-faint">
            I read every message personally, and usually reply within a day.
            Tell me a little about what you have in mind.
          </p>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.12} className="mt-12">
          {status === "sent" ? (
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-surface/60 px-6 py-16 text-center">
              <div className="display text-5xl text-fg">
                Message <span className="italic">sent</span>.
              </div>
              <p className="max-w-md text-faint">
                Thanks, {form.name || "there"} — it&apos;s on its way to Prabu.
                Expect a reply within a day.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setForm({ name: "", email: "", role: "", timeline: "", message: "", subject: "" });
                }}
                className="mt-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-fg transition-colors hover:bg-fg hover:text-bg"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-line bg-surface/60 p-6 md:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" required>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                    className="input"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    required
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => set("email")(e.target.value)}
                    className="input"
                  />
                </Field>
              </div>

              <div className="mt-8">
                <Legend>Who are you?</Legend>
                <Pills options={roles} value={form.role} onChange={set("role")} />
              </div>

              <div className="mt-8">
                <Legend>Timeline</Legend>
                <Pills
                  options={timelines}
                  value={form.timeline}
                  onChange={set("timeline")}
                />
              </div>

              <div className="mt-8">
                <Field label="Tell me about it" required>
                  <textarea
                    required
                    rows={5}
                    placeholder="What are you thinking about — a project, a role, a collaboration?"
                    value={form.message}
                    onChange={(e) => set("message")(e.target.value)}
                    className="input resize-none"
                  />
                </Field>
              </div>

              <div className="mt-6">
                <Field label="Subject (optional)">
                  <input
                    type="text"
                    placeholder="Add a subject line"
                    value={form.subject}
                    onChange={(e) => set("subject")(e.target.value)}
                    className="input"
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-8 w-full rounded-full bg-fg py-4 text-sm font-semibold text-bg transition-transform hover:scale-[1.01] disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </Reveal>

        {/* Prefer to talk → Book a call */}
        <Reveal delay={0.05} className="mt-10">
          <div className="relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-line px-6 py-16 text-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 100% at 50% 100%, rgba(158,207,255,0.12), rgba(0,0,0,0) 70%)",
              }}
            />
            <p className="eyebrow relative text-muted">Prefer to talk?</p>
            <h3 className="display relative text-4xl text-fg md:text-6xl">
              Lets <span className="italic">skip</span> the form
            </h3>
            <p className="relative max-w-md text-faint">
              15 minutes, no pressure — just a real conversation about what
              you&apos;re building.
            </p>
            <button
              onClick={() => setBooking(true)}
              data-cursor="hover"
              className="relative mt-2 rounded-full border border-line bg-surface px-8 py-3 text-sm font-semibold text-fg transition-colors hover:bg-fg hover:text-bg"
            >
              Book a call
            </button>
          </div>
        </Reveal>
      </div>

      <BookingModal open={booking} onClose={() => setBooking(false)} />
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="eyebrow text-muted">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Legend({ children }) {
  return <p className="eyebrow mb-3 text-muted">{children}</p>;
}

function Pills({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(active ? "" : opt)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
              active
                ? "border-fg bg-fg text-bg"
                : "border-line text-faint hover:border-faint"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full border ${
                active ? "border-bg bg-bg" : "border-muted"
              }`}
            />
            {opt}
          </button>
        );
      })}
    </div>
  );
}
