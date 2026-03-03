import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-institutional-dark text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/logo-probel.svg" alt="Sales Home – Probel Exclusiva" className="h-10 mb-4" />
            <p className="text-sm opacity-80">Grupo Sales Home – Probel Exclusiva</p>
          </div>

          <div className="space-y-3 text-sm opacity-90">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              <span>Shopping União – Osasco/SP</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              <span>Av. Autonomistas – Osasco/SP</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              <span>Shopping Internacional – Guarulhos/SP</span>
            </div>
          </div>

          <div className="space-y-3 text-sm opacity-90">
            <a href="tel:+5511991403080" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4 text-gold" />
              (11) 99140-3080
            </a>
            <a href="tel:+5511988144671" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4 text-gold" />
              (11) 98814-4671
            </a>
            <a href="tel:+5511945213145" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4 text-gold" />
              (11) 94521-3145
            </a>
            <a
              href="https://www.instagram.com/probelexclusiva"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Instagram className="w-4 h-4 text-gold" />
              @probelexclusiva
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} Sales Home – Probel Exclusiva. Todos os direitos reservados.</p>
          <a href="#" className="hover:underline mt-1 inline-block">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
