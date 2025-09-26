import React, { useState } from "react";

const ACCENT = "#D0A17A";

export default function RealtorLanding() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // SMS deeplink (iOS/Android)
  const onSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Hi, I'm ${form.name}${form.phone ? ` (${form.phone})` : ""}. ${form.message}`
    );
    window.location.href = `sms:+13059705104&body=${body}`;
  };

  return (
    <div className="container safe-bottom">
      <div className="grid">
        {/* Brand / Left */}
        <section className="brand">
          <img
            src="/luisa.jpg"
            alt="Luisa Bustamante — Realtor in Austin, TX"
            loading="eager"
          />
          <h1>Luisa Bustamante</h1>
          <div className="role">REALTOR® · Austin, TX</div>

          <nav className="actions" aria-label="Quick actions">
            <a
              href="https://www.instagram.com/luisa.realtor.atx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a href="tel:+13059705104">Call</a>
          </nav>
        </section>

        {/* Lead form / Right */}
        <section className="card">
          <h2>Message me</h2>
          <p>
            Leave your details and I’ll text you back to help you{" "}
            <span style={{ color: ACCENT }}>buy or sell</span> your home in Austin.
          </p>

          <form className="form" onSubmit={onSubmit}>
            <input
              className="input"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={onChange}
              required
              autoComplete="name"
            />
            <input
              className="input"
              name="phone"
              placeholder="Your phone (optional)"
              value={form.phone}
              onChange={onChange}
              inputMode="tel"
              autoComplete="tel"
            />
            <textarea
              className="textarea"
              name="message"
              placeholder="What are you looking for? (buying, selling, area, budget)"
              value={form.message}
              onChange={onChange}
              rows={4}
            />
            <button type="submit" className="button">Send as SMS</button>
            <div className="helper">
              Or text me directly at{" "}
              <a href="sms:+13059705104" style={{ color: ACCENT }}>
                +1 (305) 970-5104
              </a>.
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

