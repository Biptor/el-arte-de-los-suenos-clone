/**
 * Modernismo Humanista - What We Do Section
 * Presenta la misión y visión de la fundación
 * Layout asimétrico con imagen y texto
 */

export default function WhatWeDo() {
  return (
    <section id="que-hacemos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 md:order-1">
            <img
              src="/el-arte-de-los-suenos-clone/images/section-arts.jpg"
              alt="Jóvenes participando en actividades artísticas"
              className="w-full rounded-lg shadow-lg object-cover h-96"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <h2 className="text-primary mb-2 text-sm font-sans font-semibold uppercase tracking-wide">
                Nuestra Misión
              </h2>
              <h3 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                ¿Qué hacemos?
              </h3>
            </div>

            <p className="text-foreground/80 font-sans text-lg leading-relaxed">
              Descripción
            </p>

            <p className="text-foreground/80 font-sans text-lg leading-relaxed">
              Parrafo
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <p className="text-accent font-display text-3xl font-bold">6</p>
                <p className="text-foreground/70 font-sans text-sm">Disciplinas Artísticas</p>
              </div>
              <div className="space-y-2">
                <p className="text-accent font-display text-3xl font-bold">1000+</p>
                <p className="text-foreground/70 font-sans text-sm">Soñadores Transformados</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#como-ayudar"
              className="inline-block mt-8 px-6 py-3 bg-primary text-white font-sans font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:translate-x-1"
            >
              Sé Parte del Cambio →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
