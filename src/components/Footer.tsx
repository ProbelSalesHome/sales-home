import { Instagram, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-institutional-dark text-primary-foreground py-14 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Coluna 1 - Sobre */}
          <div>
            <img src="/images/logo-probel.png" alt="Sales Home – Probel Exclusiva" className="h-14 mb-5" />
            <p className="text-sm opacity-80 leading-relaxed">
              Grupo Sales Home é franqueado da Probel e possui lojas especializadas em colchões nas cidades de Osasco e Guarulhos, oferecendo atendimento consultivo, entrega cuidadosa e produtos de alta qualidade.
            </p>
          </div>

          {/* Coluna 2 - Lojas */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Nossas Lojas</h4>
            <div className="space-y-4 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <div>
                  <p>Shopping União – Osasco/SP</p>
                  <a href="tel:+5511991403080" className="hover:text-gold transition-colors">(11) 99140-3080</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <div>
                  <p>Av. Autonomistas – Osasco/SP</p>
                  <a href="tel:+5511988144671" className="hover:text-gold transition-colors">(11) 98814-4671</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <div>
                  <p>Shopping Internacional – Guarulhos/SP</p>
                  <a href="tel:+5511945213145" className="hover:text-gold transition-colors">(11) 94521-3145</a>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Contato</h4>
            <div className="space-y-3 text-sm opacity-90">
              <a
                href="https://wa.me/5511991403080"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                WhatsApp
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
              <a
                href="#lojas"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold" />
                Como chegar
              </a>
            </div>
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
