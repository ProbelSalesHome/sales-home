import { Shield, Truck, Headphones, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const GuaranteeSection = () => {
  const scrollToStores = () => {
    document.getElementById("lojas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-institutional text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          10 Noites para Testar. <span className="text-gold">Sem Risco.</span>
        </motion.h2>

        <motion.p
          className="text-lg opacity-90 mb-10 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Se não se adaptar, você pode trocar por outro modelo.
          <br />
          Porque acreditamos no que vendemos.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { icon: Shield, text: "Marca com mais de 85 anos" },
            { icon: Truck, text: "Entrega responsável" },
            { icon: Headphones, text: "Atendimento especializado" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 justify-center">
              <item.icon className="w-5 h-5 text-gold" />
              <span className="text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.button
          onClick={scrollToStores}
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-primary-foreground font-semibold px-10 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <MessageCircle className="w-5 h-5" />
          Falar com Especialista
        </motion.button>
      </div>
    </section>
  );
};

export default GuaranteeSection;
