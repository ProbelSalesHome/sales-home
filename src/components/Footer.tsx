import { MapPin, Facebook, Instagram } from "lucide-react";
import { LOJA, LOJAS_RODAPE } from "@/config/config-loja";

const Footer = () => {
  return (
    <footer className="bg-institutional-dark text-primary-foreground py-14 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {/* Coluna 1 - Sobre */}
          <div>
            <img src={LOJA.logoSrc} alt={LOJA.logoAlt} className="h-14 mb-5" />
            <p className="text-sm opacity-80 leading-relaxed">
              {LOJA.descricaoRodape}
            </p>
          </div>

          {/* Coluna 2 - Lojas */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Nossas Lojas</h4>
            <div className="space-y-4 text-sm opacity-90">
              {LOJAS_RODAPE.map((store, index) => (
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
          <p>© {new Date().getFullYear()} {LOJA.nome}. Todos os direitos reservados.</p>
          <p className="mt-2">{LOJA.creditoSite.texto} <a href={LOJA.creditoSite.url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">{LOJA.creditoSite.autor}</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;