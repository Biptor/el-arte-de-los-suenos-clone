import { Music, Users, Palette, Mic2, Drum } from 'lucide-react';

/**
 * Modernismo Humanista - Arts Disciplines Section
 * Presenta las 5 disciplinas artísticas principales
 * Grid asimétrico con iconografía y descripciones
 */

export default function ArtsDisciplines() {
  const disciplines = [
    {
      id: 1,
      name: 'Nombre disciplina',
      icon: Music,
      description: 'Lorem Ipsun',
      color: 'from-accent to-accent/70',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
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

        {/* Disciplines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disciplines.map((discipline) => {
            const Icon = discipline.icon;
            return (
              <div
                key={discipline.id}
                className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full hover:translate-y-[-4px]"
              >
                {/* Gradient background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${discipline.color} opacity-10 group-hover:opacity-20 transition-opacity rounded-full -mr-16 -mt-16`}></div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${discipline.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-2xl font-bold text-foreground mb-3">
                    {discipline.name}
                  </h4>

                  {/* Description */}
                  <p className="text-foreground/70 font-sans text-base leading-relaxed flex-grow">
                    {discipline.description}
                  </p>

                  {/* Learn more link */}
                  <a
                    href="#"
                    className="text-primary hover:text-accent font-sans font-semibold text-sm mt-4 inline-flex items-center gap-2 group/link"
                  >
                    Conocer más
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
