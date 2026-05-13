function Servicios() {

  return (

    <div className="services-page">

      <div className="services-hero">

        <h1>Nuestros Servicios</h1>

        <p>
          Tratamientos modernos diseñados para transformar tu sonrisa.
        </p>

      </div>

      <div className="services-grid">

        <div className="service-box">

          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

          <h2>Diseño de Sonrisa</h2>

          <p>
            Mejora estética completa para una sonrisa armónica y moderna.
          </p>

          <a href="/diseno-sonrisa">
            Ver más
          </a>

        </div>

        <div className="service-box">

          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

          <h2>Ortodoncia</h2>

          <p>
            Corrección dental profesional para alinear tu sonrisa.
          </p>

          <a href="/ortodoncia">
            Ver más
          </a>

        </div>

        <div className="service-box">

          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

          <h2>Blanqueamiento</h2>

          <p>
            Recupera el color natural y brillante de tus dientes.
          </p>

          <a href="/blanqueamiento">
            Ver más
          </a>

        </div>

      </div>

    </div>

  )
}

export default Servicios