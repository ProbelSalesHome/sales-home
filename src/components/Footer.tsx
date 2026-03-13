import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-institutional-dark text-primary-foreground py-14 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
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
                  <p>Shopping União — Osasco/SP</p>
                  <a href="tel:+5511991403080" className="hover:text-gold transition-colors">(11) 99140-3080</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <div>
                  <p>Av. Autonomistas — Osasco/SP</p>
                  <a href="tel:+5511988144671" className="hover:text-gold transition-colors">(11) 98814-4671</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <div>
                  <p>Shopping Internacional — Guarulhos/SP</p>
                  <a href="tel:+5511945213145" className="hover:text-gold transition-colors">(11) 94521-3145</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} Sales Home – Probel Exclusiva. Todos os direitos reservados.</p>
          <p className="mt-2">Site criado por <a href="https://www.giovannemorais.com.br/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Giovanne Morais</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
