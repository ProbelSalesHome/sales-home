import { MessageCircle, Phone, Star, CheckCircle, Truck } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToStores = () => {
    document.getElementById("lojas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-institutional text-primary-foreground py-16 md:py-28 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.img
          src="/images/logo-probel.png"
          alt="Sales Home – Probel Exclusiva"
          className="h-20 md:h-28 mx-auto mb-10 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <div className="overflow-hidden">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Durma Melhor. Escolha com{" "}
            <motion.span
              className="text-gold inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Segurança.
            </motion.span>
          </motion.h1>
        </div>

        <motion.p
          className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
          Atendimento especializado, 10 noites de adaptação e lojas físicas com
          avaliação 4,9 no Google.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
        >
          <motion.button
            onClick={scrollToStores}
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg shadow-gold/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </motion.button>
          <motion.button
            onClick={scrollToStores}
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/80 text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-colors hover:bg-primary-foreground/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-5 h-5" />
            Ligar Agora
          </motion.button>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[
            { icon: Star, text: "Avaliação média 4,9 no Google", fill: true },
            { icon: CheckCircle, text: "10 Noites de Adaptação", fill: false },
            { icon: Truck, text: "Entrega até o quarto", fill: false },
          ].map((item, i) => (
            <motion.span
              key={i}
              className="inline-flex items-center gap-1.5"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.15, duration: 0.5 }}
            >
              <item.icon className={`w-4 h-4 text-gold ${item.fill ? "fill-gold" : ""}`} />
              {item.text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
