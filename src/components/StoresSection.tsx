import { Phone, MessageCircle, MapPin, Star, Building, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { LOJAS } from "@/config/config-loja";
import { TEXTOS_HOME } from "@/content/textos-home";
import { BOTOES } from "@/config/config-layout";

const StoresSection = () => {
  return (
    <section id="lojas" className="py-20 md:py-28 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {TEXTOS_HOME.lojas.titulo}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOJAS.map((store, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={store.image}
                  alt={`Fachada ${store.name}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-foreground mb-2">{store.name}</h3>

                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="text-sm font-semibold text-foreground">{store.rating}</span>
                  <span className="text-sm text-muted-foreground">no Google</span>
                </div>

                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                    {store.address}
                  </p>
                </div>

                <a
                  href={store.phoneLink}
                  className="inline-flex items-center gap-2 text-sm text-institutional font-medium mb-3 hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  {store.phone}
                </a>

                <div className="flex items-start gap-2 mb-1 text-xs text-muted-foreground">
                  <Building className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gold" />
                  <span>{store.company}</span>
                </div>
                <p className="text-xs text-muted-foreground ml-5.5 mb-4">
                  CNPJ: {store.cnpj}
                </p>

                {/* Spacer to push buttons to bottom */}
                <div className="flex-1" />

                <div className="flex items-center gap-3 mt-4 mb-3">
                  {store.facebook && (
                    <a href={store.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-institutional transition-colors" aria-label="Facebook">
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                  {store.instagram && (
                    <a href={store.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-institutional transition-colors" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={store.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-primary-foreground font-semibold px-4 py-3 rounded-xl transition-all text-sm hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {BOTOES.whatsapp}
                  </a>
                  <a
                    href={store.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-institutional text-institutional font-semibold px-4 py-3 rounded-xl transition-all text-sm hover:bg-institutional hover:text-primary-foreground active:scale-[0.98]"
                  >
                    <MapPin className="w-4 h-4" />
                    {BOTOES.comoChegar}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoresSection;