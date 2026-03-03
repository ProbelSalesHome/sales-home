import { Heart, Baby, Activity, Weight, Package } from "lucide-react";
import { motion } from "framer-motion";

const mattresses = [
  { icon: Heart, title: "Colchões para Casal", desc: "Conforto compartilhado com independência de movimentos para noites tranquilas." },
  { icon: Baby, title: "Colchões Infantis", desc: "Suporte adequado para o crescimento saudável das crianças." },
  { icon: Activity, title: "Colchões Ortopédicos", desc: "Alívio de dores e alinhamento postural para quem precisa de cuidado extra." },
  { icon: Weight, title: "Suporte até 200kg", desc: "Modelos reforçados com tecnologia para suportar até 200kg por pessoa." },
  { icon: Package, title: "Conjuntos com Base e Baú", desc: "Praticidade e organização com conjuntos completos para seu quarto." },
];

const MattressSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Colchões para cada fase da vida
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mattresses.map((m, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 bg-institutional/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <m.icon className="w-7 h-7 text-institutional" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MattressSection;
