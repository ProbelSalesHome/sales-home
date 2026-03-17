import { Users, Coffee, Truck, Shield, Star, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TEXTOS_SOBRE } from "@/content/textos-sobre";

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

const diferencialIcons = [Users, Coffee, Truck];

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {TEXTOS_SOBRE.titulo}
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {TEXTOS_SOBRE.subtitulo}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Coluna 1 - História */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{TEXTOS_SOBRE.historia.titulo}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {TEXTOS_SOBRE.historia.paragrafo1}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                {TEXTOS_SOBRE.historia.paragrafo2}
              </p>
              <ul className="mt-3 space-y-1.5 text-muted-foreground">
                {TEXTOS_SOBRE.historia.unidades.map((unidade, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {unidade}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3 text-sm italic">
                {TEXTOS_SOBRE.historia.expansao}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{TEXTOS_SOBRE.diferenciais.titulo}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {TEXTOS_SOBRE.diferenciais.subtitulo}
              </p>
              <div className="space-y-4">
                {TEXTOS_SOBRE.diferenciais.itens.map((item, i) => {
                  const Icon = diferencialIcons[i];
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <Icon className="w-4 h-4 text-gold mt-1 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.titulo}</p>
                        <p className="text-muted-foreground text-sm">{item.descricao}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Coluna 2 - Segurança */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-light rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{TEXTOS_SOBRE.seguranca.titulo}</h3>
              </div>

              <div className="space-y-5">
                {TEXTOS_SOBRE.seguranca.itens.map((item, i) => (
                  <div key={i}>
                    <p className="font-medium text-foreground mb-1">{item.titulo}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="bg-gray-light rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Counter target={TEXTOS_SOBRE.contadores.familias.valor} suffix={TEXTOS_SOBRE.contadores.familias.sufixo} />
                <p className="text-muted-foreground mt-2 text-sm">{TEXTOS_SOBRE.contadores.familias.label}</p>
              </motion.div>
              <motion.div
                className="bg-gray-light rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-4xl md:text-5xl font-bold text-institutional">{TEXTOS_SOBRE.contadores.avaliacao.valor}</span>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mt-2 text-sm">{TEXTOS_SOBRE.contadores.avaliacao.label}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;