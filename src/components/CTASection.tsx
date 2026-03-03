import { motion } from "framer-motion";

const CTASection = () => {
  const scrollToStores = () => {
    document.getElementById("lojas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-institutional text-primary-foreground">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Está na hora de voltar a dormir bem.
        </motion.h2>

        <motion.button
          onClick={scrollToStores}
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-primary-foreground font-semibold px-10 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          👉 Escolher Minha Loja
        </motion.button>
      </div>
    </section>
  );
};

export default CTASection;
