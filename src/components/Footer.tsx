import { MapPin, Facebook, Instagram } from "lucide-react";

const footerStores = [
  {
    name: "Shopping União — Osasco/SP",
    phone: "(11) 99140-3080",
    phoneLink: "tel:+5511991403080",
    facebook: "https://www.facebook.com/profile.php?id=61585728404714",
    instagram: "https://www.instagram.com/probelshoppinguniao",
  },
  {
    name: "Outlet Autonomistas — Osasco/SP",
    phone: "(11) 98814-4671",
    phoneLink: "tel:+5511988144671",
    facebook: "https://www.facebook.com/profile.php?id=61585728404714",
    instagram: "https://www.instagram.com/probelosasco",
  },
  {
    name: "Shopping Internacional — Guarulhos/SP",
    phone: "(11) 94521-3145",
    phoneLink: "tel:+5511945213145",
    facebook: "https://www.facebook.com/profile.php?id=61582698658098",
    instagram: "https://www.instagram.com/probelshoppinginternacional",
  },
];

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
              {footerStores.map((store, index) => (
                <div key={index} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                  <div>
                    <p>{store.name}</p>
                    <a href={store.phoneLink} className="hover:text-gold transition-colors">{store.phone}</a>
                    <div className="flex items-center gap-2 mt-1">
                      <a href={store.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Facebook">
                        <Facebook className="w-3.5 h-3.5" />
                      </a>
                      <a href={store.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Instagram">
                        <Instagram className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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
