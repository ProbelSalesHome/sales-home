import { Coffee, Heart, Truck, Headphones, Users, Shield } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const features = [
  { icon: Headphones, text: "Atendimento consultivo e sem pressão" },
  { icon: Heart, text: "Loja organizada e acolhedora" },
  { icon: Coffee, text: "Experiência com café e atenção personalizada" },
  { icon: Truck, text: "Entrega até dentro do quarto" },
  { icon: Shield, text: "Pós-venda responsável" },
  { icon: Users, text: "Grupo consolidado e confiável" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-institutional">
      +{count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gray-light">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mais do que vender colchões.{" "}
          <span className="text-gold-dark">Entregamos tranquilidade.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <f.icon className="w-6 h-6 text-gold shrink-0 mt-0.5" />
              <p className="text-foreground font-medium">{f.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-14 pt-10 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <Counter target={1000} suffix="" />
            <p className="text-muted-foreground mt-1">clientes atendidos</p>
          </div>
          <div className="text-center">
            <span className="text-4xl md:text-5xl font-bold text-institutional">4,9 ⭐</span>
            <p className="text-muted-foreground mt-1">avaliação média no Google</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
