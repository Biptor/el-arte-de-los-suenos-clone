import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

/**
 * Modernismo Humanista - Footer
 * Pie de página con información, enlaces y redes sociales
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="font-display font-bold">A</span>
              </div>
              <div>
                <h3 className="font-display font-bold">Fundación</h3>
                <p className="text-xs text-white/70">el arte</p>
              </div>
            </div>
            <p className="text-white/70 font-sans text-sm leading-relaxed">
              Lorem Ipsun
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Enlaces</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a href="#inicio" className="text-white/70 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#que-hacemos" className="text-white/70 hover:text-white transition-colors">
                  Qué hacemos
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-white/70 hover:text-white transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#como-ayudar" className="text-white/70 hover:text-white transition-colors">
                  Cómo ayudar
                </a>
              </li>
            </ul>
          </div>

          {/* Disciplines */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Disciplinas</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Composición
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Danza
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Artes Gráficas
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Canto
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-sm text-white/70">
            <p>
              © {currentYear} Fundacion Arte. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Términos de uso
              </a>
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-6 text-white/60 font-sans text-xs flex items-center justify-center gap-1">
            Lorem Ipsun
            <Heart className="w-4 h-4 text-accent fill-current" />
            Lorem Ipsun
          </div>
        </div>
      </div>
    </footer>
  );
}
