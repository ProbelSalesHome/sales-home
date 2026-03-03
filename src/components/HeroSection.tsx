import { MessageCircle, Phone, Star, CheckCircle, Truck } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToStores = () => {
    document.getElementById("lojas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-institutional text-primary-foreground py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.img
          src="/logo-probel.svg"
          alt="Sales Home – Probel Exclusiva"
          className="h-16 md:h-20 mx-auto mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Durma Melhor. Escolha com{" "}
          <span className="text-gold">Segurança.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Atendimento especializado, 10 noites de adaptação e lojas físicas com
          avaliação 4,9 no Google.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            onClick={scrollToStores}
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </button>
          <button
            onClick={scrollToStores}
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/80 text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:bg-primary-foreground/10 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Ligar Agora
          </button>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm md:text-base opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="inline-flex items-center gap-1.5">
            <Star className="w-4 h-4 text-gold fill-gold" />
            Avaliação média 4,9 no Google
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-gold" />
            10 Noites de Adaptação
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-gold" />
            Entrega até o quarto
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
