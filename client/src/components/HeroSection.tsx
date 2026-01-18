/**
 * Modernismo Humanista - Hero Section
 * Banner principal con imagen inspiradora y texto centrado
 * Tipografía: Playfair Display para impacto visual
 */

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative h-screen md:h-[600px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-banner.jpg)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay gradient - suave para mantener legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          {/* Main Headline */}
          <h1 className="font-display font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight">
            El Arte y la Música
          </h1>

          {/* Subheading */}
          <p className="font-display text-white text-2xl md:text-3xl font-light italic">
            Salvaron mi vida, me permitieron soñar y crear esperanzas
          </p>

          {/* Attribution */}
          <p className="text-white/90 font-sans text-sm md:text-base">
            ~ Maluma ~
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#que-hacemos"
              className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-white font-sans font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Conoce Más
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
