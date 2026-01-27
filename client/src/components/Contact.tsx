import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

/**
 * Modernismo Humanista - Contact Section
 * Formulario de contacto y información de la fundación
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary text-sm font-sans font-semibold uppercase tracking-wide">
            Ponte en Contacto
          </h2>
          <h3 className="font-display text-4xl md:text-5xl text-foreground">
            Lorem Ipsun
          </h3>
          <p className="text-foreground/70 font-sans text-lg max-w-2xl mx-auto">
            Lorem Ipsun
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-foreground mb-1">Email</h4>
                <a
                  href="mailto:contactanos@gmail.com"
                  className="text-foreground/70 hover:text-primary font-sans transition-colors"
                >
                  contactanos@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              {/*
              <div>
                <h4 className="font-display text-lg font-bold text-foreground mb-1">Ubicación</h4>
                <p className="text-foreground/70 font-sans">
                  Antioquia, Colombia
                </p>
              </div>
              */}
            </div>

            {/* Image */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://biptor.github.io/el-arte-de-los-suenos-clone/images/cta-help.jpg"
                alt="Comunidad unida"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <h4 className="font-display text-2xl font-bold text-foreground">
              Envíanos un Mensaje
            </h4>

            {submitted ? (
              <div className="bg-accent/10 border border-accent rounded-lg p-6 text-center space-y-2">
                <p className="font-display text-lg font-bold text-accent">¡Gracias!</p>
                <p className="text-foreground/70 font-sans">
                  Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-sans font-semibold text-foreground mb-2">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-sans transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-sans font-semibold text-foreground mb-2">
                    Tu correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-sans transition-all"
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-sans font-semibold text-foreground mb-2">
                    Tu mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-sans resize-none transition-all"
                    placeholder="Cuéntanos cómo quieres ayudar..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-sans font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
