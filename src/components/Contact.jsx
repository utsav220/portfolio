import { useState } from "react";
import { profile } from "../data";

export default function Contact() {
  const [note, setNote] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setNote("Your email client should open with this message.");
  }

  return (
    <section className="contact" id="contact">
      <p className="eyebrow">05 — Contact</p>
      <h2>Let’s talk about your automation team.</h2>
      <p className="lede">
        Open to SDET and Automation Test Engineer roles. Screening conversations welcome — Java,
        Selenium, APIs, SQL, Jenkins, and real project scenarios.
      </p>
      <form className="contact-form" onSubmit={onSubmit}>
        <label>
          Your name
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={onChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={onChange}
          />
        </label>
        <label className="full">
          Message
          <textarea
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={onChange}
          />
        </label>
        <button className="btn btn--primary" type="submit">
          Send email
        </button>
      </form>
      {note ? <p className="form-note">{note}</p> : null}
      <p className="contact__alt">
        Prefer a direct ping? <a href={`mailto:${profile.email}`}>{profile.email}</a> · update this
        address in <code>src/data.js</code>
      </p>
    </section>
  );
}
