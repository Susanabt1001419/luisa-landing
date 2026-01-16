import React, { useState } from "react";
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // 👈 Import de íconos

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
              style={{ display: "flex", alignItems: "center", gap: "6px", color: ACCENT }}
            >
              <FaInstagram size={18} /> Instagram
            </a>

            <a
              href="tel:+15129109496"
              style={{ display: "flex", alignItems: "center", gap: "6px", color: ACCENT }}
            >
              <FaPhoneAlt size={16} /> Call
            </a>

            <a
              href="https://wa.me/13059705104"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "6px", color: ACCENT }}
            >
              <FaWhatsapp size={18} /> WhatsApp
            </a>
          </nav>
        </section>

        {/* Lead form / Right */}
        <section className="card">
          <h2>Message me</h2>
          <p>
            Let’s connect! I help families and investors <span style={{ color: ACCENT }}>buy or sell</span> in Austin and surrounding areas.{" "}
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
                +1 (512) 910-9496
              </a>.
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}


