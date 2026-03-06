import { Phone, MessageCircle, MapPin, Star, Building } from "lucide-react";
import { motion } from "framer-motion";

const stores = [
  {
    name: "Probel Exclusiva – Autonomistas",
    image: "/images/store-autonomista.jpg",
    address: "Av. dos Autonomistas, 3086\nCentro – Osasco\nCEP 06090-015",
    company: "Exclusive Confort Comércio de Colchões Ltda.",
    cnpj: "52.295.028/0002-88",
    phone: "(11) 98814-4671",
    phoneLink: "tel:+5511988144671",
    whatsapp: "https://wa.me/5511988144671",
    maps: "https://www.google.com/maps/place/Probel+Exclusiva+-+Autonomista/@-23.535218,-46.7842654,17z/data=!3m1!4b1!4m6!3m5!1s0x94ceff0932ed118f:0xeea5b47c467841e!8m2!3d-23.5352229!4d-46.7816905!16s%2Fg%2F11f03zxg4h?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
    rating: "4,9",
  },
  {
    name: "Probel Exclusiva – Shopping União",
    image: "/images/store-shopping-uniao.jpg",
    address: "Av. dos Autonomistas, 1400\nArco 326 – Vila Yara\nOsasco – CEP 06020-010",
    company: "Sales Home Comércio de Colchões Ltda.",
    cnpj: "28.333.867/0002-69",
    phone: "(11) 99140-3080",
    phoneLink: "tel:+5511991403080",
    whatsapp: "https://wa.me/5511991403080",
    maps: "https://www.google.com/maps/place/Probel+Exclusiva+-+Shopping+Uni%C3%A3o/@-23.5369738,-46.7672379,17z/data=!3m1!4b1!4m6!3m5!1s0x94ceff40ffdf2849:0xfc8012c141631b3a!8m2!3d-23.5369787!4d-46.764663!16s%2Fg%2F11c6qhqqvq?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
    rating: "4,9",
  },
  {
    name: "Probel Exclusiva – Internacional Guarulhos",
    image: "/images/store-guarulhos.jpg",
    address: "Rua Eng. Camilo Olivetti, 295\nLoja D13 e D14\nItapegica – Guarulhos\nCEP 07042-040",
    company: "Imperial Sleep Comércio de Colchões Ltda.",
    cnpj: "42.551.524/0002-00",
    phone: "(11) 94521-3145",
    phoneLink: "tel:+5511945213145",
    whatsapp: "https://wa.me/5511945213145",
    maps: "https://www.google.com/maps/place/Probel+Exclusiva+Shopping+Internacional+Guarulhos/@-23.4897768,-46.5515392,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5f66ec2fa535:0x315c7c21862fe5de!8m2!3d-23.4897817!4d-46.5489643!16s%2Fg%2F11k9z9jzym?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
    rating: "4,9",
  },
];

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
          Escolha a unidade mais próxima de você
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stores.map((store, index) => (
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

                <div className="flex flex-col gap-2 mt-4">
                  <a
                    href={store.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-primary-foreground font-semibold px-4 py-3 rounded-xl transition-all text-sm hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href={store.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-institutional text-institutional font-semibold px-4 py-3 rounded-xl transition-all text-sm hover:bg-institutional hover:text-primary-foreground active:scale-[0.98]"
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
