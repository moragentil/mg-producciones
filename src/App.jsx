import logo from "./assets/mg-producciones-logo.webp"

function App() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-neutral-darker text-white overflow-hidden px-6 md:px-12 lg:px-16 py-16 md:py-12 flex justify-center">
        <div className="absolute inset-0">
          <div className="absolute -left-32 h-72 w-72 bg-gold/15 blur-3xl" />
          <div className="absolute right-[-5rem] top-10 h-80 w-80 rounded-full border border-gold/25" />
          <div className="absolute right-6 bottom-10 h-56 w-56 bg-gold/10 blur-3xl" />
        </div>

        <div className="relative max-w-6xl justify-center grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-7">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/90 flex items-center justify-center shadow-lg shadow-gold/25 overflow-hidden ring-2 ring-gold/60">
                <img src={logo} alt="MG Producciones" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.2em] md:tracking-[0.25em] text-gold">MG Producciones</p>
                <p className="text-xs md:text-sm text-neutral-light/80">Eventos y espectáculos en vivo</p>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl leading-[1.1] font-bold">
              La productora que hace vibrar tus <span className="text-gold"> Eventos y Espectáculos</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-light/80 max-w-2xl">
              Producimos momentos que se sienten: energía en escena, emoción en el público y cada detalle cuidado para que disfrutes de principio a fin.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-neutral-dark font-semibold px-6 md:px-12 py-3 md:py-4 text-base md:text-lg rounded-lg shadow-lg shadow-gold/25 transition-all hover:-translate-y-0.5">
                Contactanos - contacto@mgproducciones.com.ar
              </button>
              <div className="flex items-center gap-2 text-neutral-light/80 text-sm">
                <span className="h-px w-10 bg-gold/60" />
                <span>Nos ocupamos de todo: idea, escena y público</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 text-xs md:text-sm text-neutral-light/70">
              <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/15 bg-white/5 text-center">Producción profesional de shows y eventos</div>
              <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/15 bg-white/5 text-center">Equipo creativo, técnico y artístico in-house</div>
              <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/15 bg-white/5 text-center">Experiencias a medida de principio a fin</div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-neutral-dark/40 border border-white/10 rounded-2xl p-6 backdrop-blur shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-neutral-light/70">Experiencias únicas</p>
                  <p className="text-2xl font-bold text-gold">Producción integral</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-sm font-semibold">Premium</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                  <div>
                    <p className="font-semibold text-white">Dirección artística</p>
                    <p className="text-neutral-light/70 text-sm">Curamos la puesta, ritmo y relato de cada show.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                  <div>
                    <p className="font-semibold text-white">Producción técnica en vivo</p>
                    <p className="text-neutral-light/70 text-sm">Sonido, luces y pantallas sincronizadas para emocionar.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                  <div>
                    <p className="font-semibold text-white">Backstage y logística</p>
                    <p className="text-neutral-light/70 text-sm">Coordinamos talentos, tiempos y proveedores sin sobresaltos.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm text-neutral-light/80">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-2xl font-bold text-gold">100%</p>
                  <p>Compromiso</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-2xl font-bold text-gold">Full</p>
                  <p>Soporte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 items-center px-6 md:px-8 bg-white flex justify-center">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
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
      <section className="py-20 px-6 md:px-8 bg-neutral-light flex justify-center">
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
                      Creamos eventos exitosos para clientes que confían en nuestra calidad y profesionalismo.
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
              <img src={logo} alt="Imagen del evento" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-8 bg-neutral-dark text-white flex justify-center">
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">Hagamos realidad tu próximo evento</h2>
          <p className="text-lg text-neutral-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Contáctanos hoy y descubre cómo podemos transformar tu visión en una experiencia inolvidable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold hover:bg-gold-dark text-neutral-dark font-semibold px-8 py-4 text-lg rounded-lg transition-colors">
              Contactanos - contacto@mgproducciones.com.ar
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-8 bg-neutral-darker text-neutral-light flex justify-center">
        <div className="w-full max-w-6xl text-center">
          <p className="mb-4">© 2025 MG Producciones. Todos los derechos reservados.</p>

          <p className="text-sm text-neutral-medium">Desarrollada por Resguar IT <a href="https://resguarit.com.ar" target="_blank" rel="noopener noreferrer" className="text-gold">resguarit.com.ar</a></p>
        </div>
      </footer>
    </main>
  )
}

export default App
