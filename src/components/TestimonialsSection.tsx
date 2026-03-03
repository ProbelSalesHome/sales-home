import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mariana S.",
    text: "Atendimento incrível! Me ajudaram a escolher o colchão perfeito. Durmo muito melhor agora.",
  },
  {
    name: "Carlos R.",
    text: "Entrega rápida, montaram tudo no quarto. Equipe super educada e prestativa.",
  },
  {
    name: "Fernanda L.",
    text: "Melhor experiência de compra que já tive. O café na loja foi um charme! Recomendo demais.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          O que nossos clientes dizem
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">
          Avaliação média <span className="font-bold text-foreground">4,9</span> no Google
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
              <p className="font-semibold text-sm text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
