import { Users, Coffee, Truck, Shield, Star, Heart, Baby, Weight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Sobre o Grupo Sales Home
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Tradição, confiança e compromisso com o seu sono.
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
                <h3 className="text-xl font-semibold text-foreground">História e Tradição</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                O Grupo Sales Home é franqueado da Probel, uma marca com mais de 85 anos de mercado, 
                reconhecida por gerações de brasileiros pela qualidade, conforto e durabilidade de seus colchões.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Atualmente o grupo possui três unidades estratégicas:
              </p>
              <ul className="mt-3 space-y-1.5 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  Autonomistas – Osasco
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  Shopping União – Osasco
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  Internacional Shopping – Guarulhos
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3 text-sm italic">
                Com plano de expansão para novas unidades nos próximos anos.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Diferenciais de Atendimento</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nosso foco não é apenas vender colchões, mas oferecer uma experiência completa de atendimento.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Users, title: "Consultoria especializada", desc: "Nossa equipe entende a necessidade real de cada cliente antes de indicar um produto." },
                  { icon: Coffee, title: "Ambiente acolhedor", desc: "Lojas organizadas, bonitas e confortáveis, onde o cliente é recebido com café, água e atenção." },
                  { icon: Truck, title: "Logística cuidadosa", desc: "Compromisso com a entrega, garantindo que o colchão seja levado até o quarto do cliente." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-4 h-4 text-gold mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
                <h3 className="text-xl font-semibold text-foreground">Segurança e Confiança</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="font-medium text-foreground mb-1">10 noites de adaptação</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    O cliente pode trocar o modelo caso não se adapte ao colchão escolhido.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Avaliações reais</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Nossas lojas mantêm avaliações entre 4.8 e 4.9 estrelas no Google.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Soluções para todos</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Temos colchões para bebês, crianças, adultos e tecnologias para pessoas com sobrepeso com suporte de até 200kg por pessoa.
                  </p>
                </div>
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
                <Counter target={1000} suffix="" />
                <p className="text-muted-foreground mt-2 text-sm">clientes atendidos</p>
              </motion.div>
              <motion.div
                className="bg-gray-light rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-4xl md:text-5xl font-bold text-institutional">4,9</span>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mt-2 text-sm">avaliação no Google</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
