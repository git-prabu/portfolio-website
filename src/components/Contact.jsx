import { useState } from "react";
import Reveal from "./Reveal";

const roles = ["Studio / Firm", "Recruiter", "Potential client", "Collaborator", "Other"];
const timelines = ["Just exploring", "ASAP", "1–4 weeks", "1–3 months"];

const EMAIL = "arprabu02@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    timeline: "",
    message: "",
    subject: "",
  });

  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Static site → compose an email to Prabu with the form contents.
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Who: ${form.role || "—"}`,
      `Timeline: ${form.timeline || "—"}`,
      "",
      form.message,
    ].join("\n");
    const subject = form.subject || `Portfolio enquiry — ${form.name || "hello"}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
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
              <Pills
                options={roles}
                value={form.role}
                onChange={set("role")}
              />
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
              className="mt-8 w-full rounded-full bg-fg py-4 text-sm font-semibold text-bg transition-transform hover:scale-[1.01]"
            >
              Send message
            </button>
          </form>
        </Reveal>

        {/* Skip the form */}
        <Reveal delay={0.05} className="mt-10">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-surface/40 px-6 py-14 text-center">
            <p className="eyebrow text-muted">Prefer to keep it simple?</p>
            <h3 className="display text-4xl text-fg md:text-6xl">
              Skip <span className="italic">the form</span>
            </h3>
            <p className="max-w-md text-faint">
              No pressure — just reach out directly and we&apos;ll take it from
              there.
            </p>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Hello Prabu")}`}
              className="mt-2 rounded-full border border-line px-7 py-3 text-sm font-semibold text-fg transition-colors hover:bg-fg hover:text-bg"
            >
              Email me directly
            </a>
          </div>
        </Reveal>
      </div>
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
