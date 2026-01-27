import { Heart, Hand, Lightbulb } from 'lucide-react';

/**
 * Modernismo Humanista - How to Help Section
 * Presenta las formas en que se puede contribuir a la fundación
 * Tres opciones principales: Orar, Donar, Voluntariado
 */

export default function HowToHelp() {
  const ways = [
    {
      id: 1,
      icon: Lightbulb,
      title: 'Nombre Commo',
      description: 'Descripción',
      color: 'from-primary to-primary/70',
      action: 'Acción',
    },
    {
      id: 2,
      icon: Heart,
      title: 'Nombre Commo',
      description: 'Descripción',
      color: 'from-primary to-primary/70',
      action: 'Acción',
    },
    {
      id: 3,
      icon: Hand,
      title: 'Nombre Commo',
      description: 'Descripción',
      color: 'from-primary to-primary/70',
      action: 'Acción',
    },
  ];

  return (
    <section id="como-ayudar" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary text-sm font-sans font-semibold uppercase tracking-wide">
            Lorem Ipsun
          </h2>
          <h3 className="font-display text-4xl md:text-5xl text-foreground">
            Lorem Ipsun
          </h3>
          <p className="text-foreground/70 font-sans text-lg max-w-2xl mx-auto">
            Lorem Ipsun
          </p>
        </div>

        {/* Ways to Help Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ways.map((way) => {
            const Icon = way.icon;
            return (
              <div
                key={way.id}
                className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:translate-y-[-4px]"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${way.color}`}></div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${way.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-2xl font-bold text-foreground">
                    {way.title}
                  </h4>

                  {/* Description */}
                  <p className="text-foreground/70 font-sans text-base leading-relaxed">
                    {way.description}
                  </p>

                  {/* CTA Button */}
                  <a
                    href="#contacto"
                    className={`inline-block px-6 py-3 bg-gradient-to-r ${way.color} text-white font-sans font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    {way.action}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg shadow-lg p-8 md:p-12 text-center space-y-6">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white">
            Lorem Ipsun
          </h3>
          <p className="text-white/90 font-sans text-lg max-w-2xl mx-auto">
            Lorem Ipsun
          </p>
          <a
            href="#contacto"
            className="inline-block px-8 py-3 bg-white text-primary font-sans font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          >
            Contactanos
          </a>
        </div>
      </div>
    </section>
  );
}
