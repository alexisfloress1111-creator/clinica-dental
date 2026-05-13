import { useState } from "react";

function Reserva() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    momento: "",
    horario: "",
    caso: "",
    notas: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, apellido, correo, momento, horario, caso, notas } = form;

    if (!nombre || !apellido || !correo || !momento || !horario || !caso) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    const mensaje = `
🗓️ *NUEVA RESERVA*

👤 *Nombre:* ${nombre} ${apellido}
📧 *Correo:* ${correo}
🕐 *Momento del día:* ${momento}
⏰ *Horario:* ${horario}
📝 *Caso:* ${caso}
📌 *Notas:* ${notas || "Ninguna"}
    `.trim();

    const numero = "573223988067";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="booking-page">
      <div className="booking-card">

        <div className="booking-title">
          <h1>Reserva tu cita</h1>
          <p>Completa el formulario y te confirmaremos tu reserva por WhatsApp.</p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>

          {/* DATOS PERSONALES */}
          <div className="form-section">
            <h2>Datos personales</h2>

            <div className="double-input">
              <div>
                <label>Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Apellido *</label>
                <input
                  type="text"
                  name="apellido"
                  placeholder="Tu apellido"
                  value={form.apellido}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label>Correo electrónico *</label>
            <input
              type="email"
              name="correo"
              placeholder="ejemplo@gmail.com"
              value={form.correo}
              onChange={handleChange}
            />
          </div>

          {/* PREFERENCIAS */}
          <div className="form-section">
            <h2>Preferencias de horario</h2>

            <div className="double-input">
              <div>
                <label>Momento del día *</label>
                <select name="momento" value={form.momento} onChange={handleChange}>
                  <option value="">Elige una opción</option>
                  <option>Mañana</option>
                  <option>Tarde</option>
                  <option>Noche</option>
                </select>
              </div>
              <div>
                <label>Horario preferido *</label>
                <select name="horario" value={form.horario} onChange={handleChange}>
                  <option value="">Elige una opción</option>
                  <option>8:00 AM - 10:00 AM</option>
                  <option>10:00 AM - 12:00 PM</option>
                  <option>2:00 PM - 4:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* DETALLE */}
          <div className="form-section">
            <h2>Detalle de tu caso</h2>

            <label>¿Cómo podemos ayudarte? *</label>
            <textarea
              name="caso"
              rows="5"
              placeholder="Describe tu caso"
              value={form.caso}
              onChange={handleChange}
            />

            <label>Notas adicionales</label>
            <textarea
              name="notas"
              rows="3"
              placeholder="Escribe aquí (opcional)"
              value={form.notas}
              onChange={handleChange}
            />
          </div>

          <button type="submit">📲 Reservar por WhatsApp</button>

        </form>
      </div>
    </div>
  );
}

export default Reserva;