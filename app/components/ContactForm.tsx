"use client";

import { useRef, useState } from "react";
import { contactOptions } from "../lib/content";

type FormField = "name" | "email" | "organization" | "message";
type FormErrors = Partial<Record<FormField, string>>;

export default function ContactForm({ initialSelected = [], initialMessage = "" }: { initialSelected?: string[]; initialMessage?: string }) {
  const [formData, setFormData] = useState({ name: "", email: "", organization: "", message: initialMessage, website: "" });
  const [selected, setSelected] = useState(initialSelected);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const fieldRefs = useRef<Partial<Record<FormField, HTMLInputElement | HTMLTextAreaElement | null>>>({});

  function update(field: FormField, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = "Ange ditt namn.";
    if (!formData.email.trim()) next.email = "Ange din e-postadress.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = "Ange en giltig e-postadress.";
    if (!formData.organization.trim()) next.organization = "Ange organisation.";
    if (!formData.message.trim()) next.message = "Beskriv kort vad ni vill prata om.";
    setErrors(next);
    const first = (Object.keys(next) as FormField[])[0];
    if (first) fieldRefs.current[first]?.focus();
    return !first;
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting || !validate()) return;
    setSubmitting(true);
    setStatus(null);
    try {
      const selectedPackages = selected.map((id) => contactOptions.find((item) => item.id === id)?.name).filter(Boolean);
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...formData, selectedPackages }) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Meddelandet kunde inte skickas.");
      setStatus({ type: "success", message: "Tack. Meddelandet är skickat och vi återkommer inom en arbetsdag." });
      setFormData({ name: "", email: "", organization: "", message: "", website: "" });
      setSelected([]);
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Meddelandet kunde inte skickas. Ring eller mejla oss direkt." });
    } finally {
      setSubmitting(false);
    }
  }

  const grouped = Object.groupBy(contactOptions, (option) => option.category);

  return (
    <form className="contact-form" onSubmit={submit} noValidate aria-busy={submitting}>
      <div className="honeypot" aria-hidden="true"><label htmlFor="website">Lämna detta fält tomt</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={formData.website} onChange={(event) => setFormData((current) => ({ ...current, website: event.target.value }))} /></div>
      {status && <div className={`form-status is-${status.type}`} role={status.type === "error" ? "alert" : "status"} aria-live="polite"><p>{status.message}</p></div>}
      <div className="contact-fields">
        <div className="field"><label htmlFor="name">Namn <span aria-hidden="true">*</span></label><input ref={(node) => { fieldRefs.current.name = node; }} id="name" name="name" type="text" autoComplete="name" maxLength={200} required value={formData.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <p id="name-error" className="field-error">{errors.name}</p>}</div>
        <div className="field"><label htmlFor="email">E-post <span aria-hidden="true">*</span></label><input ref={(node) => { fieldRefs.current.email = node; }} id="email" name="email" type="email" autoComplete="email" inputMode="email" maxLength={254} required value={formData.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <p id="email-error" className="field-error">{errors.email}</p>}</div>
        <div className="field field-wide"><label htmlFor="organization">Organisation <span aria-hidden="true">*</span></label><input ref={(node) => { fieldRefs.current.organization = node; }} id="organization" name="organization" type="text" autoComplete="organization" maxLength={200} required value={formData.organization} onChange={(event) => update("organization", event.target.value)} aria-invalid={Boolean(errors.organization)} aria-describedby={errors.organization ? "organization-error" : undefined} />{errors.organization && <p id="organization-error" className="field-error">{errors.organization}</p>}</div>
        <div className="field field-wide"><label htmlFor="message">Vad vill ni få tydligare? <span aria-hidden="true">*</span></label><textarea ref={(node) => { fieldRefs.current.message = node; }} id="message" name="message" rows={6} maxLength={5000} required value={formData.message} onChange={(event) => update("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : "message-help"} /><p id="message-help" className="field-help">Exempel: målgrupp, återkommande arbetsuppgift, verktyg eller beslut som fastnar.</p>{errors.message && <p id="message-error" className="field-error">{errors.message}</p>}</div>
      </div>
      <details className="interest-details" open={initialSelected.length > 0}><summary>Välj specifikt område <span>(valfritt)</span><i aria-hidden="true">+</i></summary><div className="interest-groups">{Object.entries(grouped).map(([category, options]) => options && <fieldset key={category}><legend>{category}</legend>{options.map((option) => <label key={option.id}><input type="checkbox" name="interest" value={option.id} checked={selected.includes(option.id)} onChange={() => setSelected((current) => current.includes(option.id) ? current.filter((id) => id !== option.id) : [...current, option.id])} /><span>{option.name}</span></label>)}</fieldset>)}</div></details>
      <button className="btn-primary contact-submit" type="submit" disabled={submitting}>{submitting ? "Skickar…" : "Skicka meddelandet"}<span aria-hidden="true">↗</span></button>
      <p className="form-note">Fält markerade med * är obligatoriska. Skicka inte känsliga personuppgifter eller sekretessbelagt material.</p>
    </form>
  );
}
