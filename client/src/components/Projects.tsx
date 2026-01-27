import { MapPin } from 'lucide-react';

/**
 * Modernismo Humanista - Projects Section
 * Proyectos activos en diferentes ubicaciones de Antioquia
 * Grid con información de cada proyecto
 */

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'La Estrella',
      date: 'Fecha o desde',
      description: 'Descripción',
      status: 'Activo',
    },
    {
      id: 2,
      name: 'Nombre ubicación',
      date: 'fecha o desde',
      description: 'Descripción',
      status: 'Activo',
    },
  ];

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary text-sm font-sans font-semibold uppercase tracking-wide">
            Lorem Ipsun
          </h2>
          <h3 className="font-display text-4xl md:text-5xl text-foreground">
            Proyectos Activos
          </h3>
          <p className="text-foreground/70 font-sans text-lg max-w-2xl mx-auto">
            Lorem ipsun
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group hover:translate-y-[-4px]"
            >
              {/* Header with gradient */}
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title with icon */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground">{project.name}</h4>
                    <p className="text-foreground/60 font-sans text-sm">{project.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/70 font-sans text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Status badge */}
                <div className="flex items-center gap-2 pt-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent font-sans text-xs font-semibold rounded-full">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {project.status}
                  </span>
                </div>

                {/* Learn more link */}
                <a
                  href="#"
                  className="text-primary hover:text-accent font-sans font-semibold text-sm inline-flex items-center gap-2 group/link pt-2"
                >
                  Conocer más
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
