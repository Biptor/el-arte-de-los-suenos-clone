import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

/**
 * Modernismo Humanista - Testimonials Section
 * Historias inspiradoras de soñadores transformados
 * Carousel interactivo con navegación
 */

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState<number[]>([]);

  const testimonials = [
    {
      id: 1,
      quote: 'Texto descriptivo',
      author: 'Nombre',
      location: 'Nombre ubicación',
      likes: 1,
    },
    {
      id: 2,
      quote: 'Texto descriptivo.',
      author: 'Nombre',
      location: 'Nombre Ubicación',
      likes: 2,
    },
  ];

  const toggleLike = (id: number) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((item) => item !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];
  const isLiked = liked.includes(current.id);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary text-sm font-sans font-semibold uppercase tracking-wide">
            Lorem Ipsun
          </h2>
          <h3 className="font-display text-4xl md:text-5xl text-foreground">
            Lorem Ipsun
          </h3>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white rounded-lg shadow-lg p-8 md:p-12 relative min-h-96 flex flex-col justify-between"
            style={{
              backgroundImage: 'url(https://biptor.github.io/el-arte-de-los-suenos-clone/images/testimonial-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/90 rounded-lg"></div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-sans italic">
                "{current.quote}"
              </blockquote>

              {/* Author */}
              <div className="space-y-1">
                <p className="font-display text-xl font-bold text-primary">{current.author}</p>
                <p className="text-foreground/60 font-sans text-sm">Soñador ({current.location})</p>
              </div>

              {/* Like Button */}
              <div className="flex items-center gap-2 pt-4">
                <button
                  onClick={() => toggleLike(current.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isLiked
                      ? 'bg-accent text-white'
                      : 'bg-secondary text-foreground hover:bg-accent/20'
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isLiked ? 'fill-current' : ''
                    }`}
                  />
                  <span className="font-sans font-semibold">{current.likes + (isLiked ? 1 : 0)}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-border'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
