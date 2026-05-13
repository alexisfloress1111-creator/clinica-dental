import { useState } from "react"
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa"

function Home() {

  const [menuOpen, setMenuOpen] = useState(false)

return (
    <div className="app">
      
      <nav className="navbar">
        <button
  className="menu-btn"
  onClick={() => setMenuOpen(true)}
>
  <FaBars />
</button>
        <h1>DentalCare</h1>

        <a
          href="https://wa.me/573223988067"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </nav>

     <section className="hero" id="inicio">

        <div className="hero-text">

          <h2>
            Sonrisas modernas con atención profesional.
          </h2>

          <p>
            Especialistas en diseño de sonrisa, ortodoncia y odontología estética.
          </p>

          <a href="/reserva">
  Agenda tu cita
</a>
          <div className={menuOpen ? "sidebar active" : "sidebar"}>

  <div className="sidebar-top">

    <h2>DentalCare</h2>

    <button
      className="close-btn"
      onClick={() => setMenuOpen(false)}
    >
      <FaTimes />
    </button>

  </div>

  <ul>

  <li>
    <a href="#inicio">Inicio</a>
  </li>

  <li>
  <a href="/servicios">Servicios</a>
</li>

  <li>
    <a href="#nosotros">Nosotros</a>
  </li>

  <li>
    <a href="#testimonios">Testimonios</a>
  </li>

  <li>
    <a href="#galeria">Galería</a>
  </li>

</ul>

</div>
        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1200&auto=format&fit=crop"
            alt="Dentista"
          />

        </div>

      </section>

      <section className="services" id="servicios">
       <section className="about" id="nosotros">

  <div className="about-image">

    <img
      src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop"
      alt="Clinica"
    />

  </div>

  <div className="about-text">

    <span>NOSOTROS</span>

    <h2>
      Tecnología moderna y atención profesional.
    </h2>

    <p>
      En DentalCare trabajamos con tecnología avanzada y especialistas
      altamente capacitados para brindar tratamientos modernos,
      seguros y personalizados.
    </p>

    <div className="stats">

      <div>
        <h3>+5K</h3>
        <p>Pacientes felices</p>
      </div>

      <div>
        <h3>15+</h3>
        <p>Años de experiencia</p>
      </div>

      <div>
        <h3>24/7</h3>
        <p>Atención rápida</p>
      </div>

    </div>

  </div>

</section>
<section className="testimonials" id="testimonios">

  <div className="section-title">

    <span>TESTIMONIOS</span>

    <h2>
      Lo que dicen nuestros pacientes
    </h2>

  </div>

  <div className="testimonial-grid">

    <div className="testimonial-card">

      <div className="stars">
        ⭐⭐⭐⭐⭐
      </div>

      <p>
        “Excelente atención y resultados increíbles.
        Mi sonrisa cambió completamente.”
      </p>

      <h3>María Gómez</h3>

    </div>

    <div className="testimonial-card">

      <div className="stars">
        ⭐⭐⭐⭐⭐
      </div>

      <p>
        “La clínica transmite mucha confianza y profesionalismo.”
      </p>

      <h3>Carlos Pérez</h3>

    </div>

    <div className="testimonial-card">

      <div className="stars">
        ⭐⭐⭐⭐⭐
      </div>

      <p>
        “La mejor experiencia dental que he tenido.”
      </p>

      <h3>Laura Sánchez</h3>

    </div>

  </div>

</section>
<section className="gallery" id="galeria">

  <div className="section-title">

    <span>GALERÍA</span>

    <h2>
      Nuestra Clínica
    </h2>

  </div>

  <div className="gallery-grid">

    <img
      src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop"
      alt="Dental"
    />

    <img
      src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop"
      alt="Dental"
    />

    <img
      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
      alt="Dental"
    />

    <img
      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
      alt="Dental"
    />

  </div>

</section>
<section className="cta">

  <div className="cta-content">

    <span>AGENDA TU CITA</span>

    <h2>
      Tu nueva sonrisa comienza hoy.
    </h2>

    <p>
      Nuestro equipo está listo para brindarte una atención moderna,
      profesional y totalmente personalizada.
    </p>

   <a href="/reserva">
  Agenda tu cita
</a>

  </div>

</section>

        <h2>Servicios</h2>

        <a href="/diseno-sonrisa" className="card">

  <h3>Diseño de Sonrisa</h3>

  <p>
    Tratamientos modernos y profesionales.
  </p>

</a>

<a href="/blanqueamiento" className="card">

  <h3>Blanqueamiento</h3>

  <p>
    Recupera el brillo natural de tus dientes.
  </p>

</a>

<a href="/ortodoncia" className="card">

  <h3>Ortodoncia</h3>

  <p>
    Corrección dental moderna y personalizada.
  </p>

</a>

      </section>
     <a
  href="/reserva"
  className="whatsapp"
>
  <FaWhatsapp />
</a>
<footer className="footer">

  <div className="footer-grid">

    <div>

      <h2>DentalCare</h2>

      <p>
        Clínica dental moderna especializada en diseño de sonrisa
        y odontología estética.
      </p>

    </div>

    <div>

      <h3>Servicios</h3>

      <ul>
        <li>Diseño de sonrisa</li>
        <li>Ortodoncia</li>
        <li>Blanqueamiento</li>
        <li>Implantes</li>
      </ul>

    </div>

    <div>

      <h3>Contacto</h3>

      <ul>
        <li>+57 322 398 8067</li>
        <li>contacto@dentalcare.com</li>
        <li>Villavicencio, Colombia</li>
      </ul>

    </div>

    <div>

      <h3>Horarios</h3>

      <ul>
        <li>Lunes - Viernes</li>
        <li>8:00 AM - 6:00 PM</li>
        <li>Sábados</li>
        <li>8:00 AM - 2:00 PM</li>
      </ul>

    </div>

  </div>

  <div className="footer-bottom">
    © 2026 DentalCare — Todos los derechos reservados.
  </div>

</footer>
    </div>
  )
}

export default Home
