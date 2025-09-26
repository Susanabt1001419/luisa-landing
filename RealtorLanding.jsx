import React, { useState } from "react";

const ACCENT = "#D0A17A";

export default function RealtorLanding() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Hola, soy ${formData.name}${formData.phone ? ` (${formData.phone})` : ""}. ${formData.message}`
    );
    window.open(`sms:+13059705104&body=${body}`, "_self");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div style={{ textAlign: "center" }}>
          <img
            src="/luisa.jpg"
            alt="Luisa Bustamante - Realtor in Austin, TX"
            loading="eager"
            style={{ width: 220, height: 220, objectFit: "cover", borderRadius: 28, border: "4px solid #D0A17A" }}
          />

          <h1 style={{ fontSize: "2rem", marginTop: "1rem" }}>Luisa Bustamante</h1>
          <p style={{ color: ACCENT, fontSize: "1.1rem" }}>REALTOR® · Austin, TX</p>
          <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
            <a href="https://www.instagram.com/luisa.realtor.atx/" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>Instagram</a>
            <a href="tel:+13059705104" style={{ color: ACCENT }}>Llamar</a>
          </div>
        </div>
        <div style={{ background: "#111", borderRadius: "12px", padding: "1.5rem", border: "1px solid #333" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>¡Escríbeme!</h2>
          <p style={{ fontSize: "0.9rem", marginBottom: "1rem", color: "#ccc" }}>Déjame tus datos y te contactaré por <span style={{ color: ACCENT }}>mensaje de texto (SMS)</span> para ayudarte a comprar o vender tu hogar en Austin.</p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required style={{ padding: "0.5rem", borderRadius: "6px" }} />
            <input type="text" name="phone" placeholder="Tu teléfono (opcional)" value={formData.phone} onChange={handleChange} style={{ padding: "0.5rem", borderRadius: "6px" }} />
            <textarea name="message" placeholder="¿Qué estás buscando? (comprar, vender, zona, presupuesto)" rows={4} value={formData.message} onChange={handleChange} style={{ padding: "0.5rem", borderRadius: "6px" }} />
            <button type="submit" style={{ background: ACCENT, color: "black", fontWeight: "bold", border: "none", padding: "0.6rem", borderRadius: "8px", cursor: "pointer" }}>Enviar como SMS</button>
          </form>
        </div>
      </div>
    </div>
  );
}
