import { Phone, MessageCircle, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

const stores = [
  {
    name: "Probel Exclusiva – Shopping União",
    image: "/images/store-shopping-uniao.jpg",
    address: "Shopping União De Osasco\nAv. dos Autonomistas, 1400 – Loja 326\nVila Yara, Osasco – SP, 06020-010",
    phone: "(11) 99140-3080",
    phoneLink: "tel:+5511991403080",
    whatsapp: "https://wa.me/5511991403080",
    maps: "https://www.google.com/maps/place/Probel+Exclusiva+-+Shopping+Uni%C3%A3o/@-23.5369738,-46.7672379,17z",
    rating: "4,9",
  },
  {
    name: "Probel Exclusiva – Autonomista",
    image: "/images/store-autonomista.jpg",
    address: "Av. dos Autonomistas, 3086\nCentro, Osasco – SP, 06090-015",
    phone: "(11) 98814-4671",
    phoneLink: "tel:+5511988144671",
    whatsapp: "https://wa.me/5511988144671",
    maps: "https://www.google.com/maps/place/Probel+Exclusiva+-+Autonomista/@-23.535218,-46.7842654,17z",
    rating: "4,9",
  },
  {
    name: "Probel Exclusiva – Shopping Internacional Guarulhos",
    image: "/images/store-guarulhos.jpg",
    address: "Rod. Pres. Dutra, 225\nVila Itapegica, Guarulhos – SP, 07034-911",
    phone: "(11) 94521-3145",
    phoneLink: "tel:+5511945213145",
    whatsapp: "https://wa.me/5511945213145",
    maps: "https://www.google.com/maps/place/Probel+Exclusiva+Shopping+Internacional+Guarulhos/@-23.4897768,-46.5515392,17z",
    rating: "4,9",
  },
];

const StoresSection = () => {
  return (
    <section id="lojas" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Escolha a unidade mais próxima de você
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={store.image}
                  alt={`Fachada ${store.name}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2">{store.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="text-sm font-semibold text-foreground">{store.rating}</span>
                  <span className="text-sm text-muted-foreground">no Google</span>
                </div>
                <p className="text-sm text-muted-foreground whitespace-pre-line mb-4 leading-relaxed">
                  {store.address}
                </p>

                <a
                  href={store.phoneLink}
                  className="inline-flex items-center gap-2 text-sm text-institutional font-medium mb-4 hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  {store.phone}
                </a>

                <div className="flex flex-col gap-2">
                  <a
                    href={store.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-primary-foreground font-semibold px-4 py-3 rounded-lg transition-all text-sm hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href={store.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-institutional text-institutional font-semibold px-4 py-3 rounded-lg transition-all text-sm hover:bg-institutional hover:text-primary-foreground"
                  >
                    <MapPin className="w-4 h-4" />
                    Como Chegar
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
