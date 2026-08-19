// Delivers contact + booking messages to Prabu's inbox via FormSubmit
// (no backend, no account dashboard — posts straight to the email address).
// First-ever submission triggers a one-time activation email Prabu must click.

const ENDPOINT = "https://formsubmit.co/ajax/arprabu02@gmail.com";
const MAILTO = "arprabu02@gmail.com";

export async function sendToPrabu(fields, { subject } = {}) {
  const payload = {
    _subject: subject || "New message from your portfolio",
    _template: "table",
    _captcha: "false",
    ...fields,
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.json();
}

// Fallback: open the visitor's mail client pre-filled (used only if fetch fails).
export function mailtoFallback(subject, bodyLines) {
  const body = bodyLines.filter(Boolean).join("\n");
  window.location.href = `mailto:${MAILTO}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
