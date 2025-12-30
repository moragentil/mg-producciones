function App() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-neutral-dark text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight font-bold">
            Transformamos momentos en experiencias inolvidables
          </h1>
          <p className="text-lg md:text-xl text-neutral-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Creamos eventos únicos con atención al detalle, diseño impecable y ejecución perfecta para hacer realidad tu visión.
          </p>
          <button className="bg-gold hover:bg-gold-dark text-neutral-dark font-semibold px-8 py-4 text-lg rounded-lg transition-colors">
            Cotiza tu evento
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="h-[80vh] items-center px-4 bg-white flex justify-center">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-neutral-dark font-bold">Nuestros Servicios</h2>
            <p className="text-neutral-medium text-lg max-w-2xl mx-auto leading-relaxed">
              Especialistas en la producción integral de eventos corporativos, sociales y culturales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Eventos Corporativos */}
            <div className="p-8 border border-gray-200 rounded-lg hover:border-gold transition-colors">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl mb-3 text-neutral-dark font-semibold">Eventos Corporativos</h3>
              <p className="text-neutral-medium leading-relaxed">
                Congresos, conferencias, lanzamientos de productos y team buildings diseñados para impactar.
              </p>
            </div>

            {/* Eventos Sociales */}
            <div className="p-8 border border-gray-200 rounded-lg hover:border-gold transition-colors">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl mb-3 text-neutral-dark font-semibold">Eventos Sociales</h3>
              <p className="text-neutral-medium leading-relaxed">
                Bodas, cumpleaños, aniversarios y celebraciones especiales con producción completa y personalizada.
              </p>
            </div>

            {/* Eventos Culturales */}
            <div className="p-8 border border-gray-200 rounded-lg hover:border-gold transition-colors">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl mb-3 text-neutral-dark font-semibold">Eventos Culturales</h3>
              <p className="text-neutral-medium leading-relaxed">
                Festivales, conciertos, exposiciones y eventos artísticos con producción técnica de primer nivel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-neutral-light flex justify-center">
        <div className="w-full max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-neutral-dark font-bold">
                ¿Por qué elegir MG Producciones?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-neutral-dark">Experiencia comprobada</h3>
                    <p className="text-neutral-medium leading-relaxed">
                      Más de una década creando eventos exitosos para clientes que confían en nuestra calidad.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-neutral-dark">Atención personalizada</h3>
                    <p className="text-neutral-medium leading-relaxed">
                      Cada evento es único. Trabajamos contigo para entender tu visión y hacerla realidad.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-neutral-dark">Producción integral</h3>
                    <p className="text-neutral-medium leading-relaxed">
                      Desde la conceptualización hasta la ejecución, nos encargamos de cada detalle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-neutral-medium flex items-center justify-center text-white">
              <span className="text-xl">Imagen del evento</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-neutral-dark text-white flex justify-center">
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">Hagamos realidad tu próximo evento</h2>
          <p className="text-lg text-neutral-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Contáctanos hoy y descubre cómo podemos transformar tu visión en una experiencia inolvidable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold hover:bg-gold-dark text-neutral-dark font-semibold px-8 py-4 text-lg rounded-lg transition-colors">
              Solicitar cotización
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-neutral-dark px-8 py-4 text-lg bg-transparent rounded-lg transition-colors">
              Ver nuestro portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-neutral-darker text-neutral-light flex justify-center">
        <div className="w-full max-w-6xl text-center">
          <p className="mb-4">© 2025 MG Producciones. Todos los derechos reservados.</p>
          <p className="text-sm text-neutral-medium">Creando experiencias memorables desde 2010</p>
        </div>
      </footer>
    </main>
  )
}

export default App
