import { Heart, Baby, Activity, Weight, Package } from "lucide-react";
import { motion } from "framer-motion";
import { TEXTOS_HOME } from "@/content/textos-home";

const icons = [Heart, Baby, Activity, Weight, Package];

const MattressSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-gray-light">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {TEXTOS_HOME.colchoes.titulo}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEXTOS_HOME.colchoes.itens.map((m, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-institutional/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-institutional" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{m.titulo}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.descricao}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MattressSection;