import { MessageCircle, Star, CheckCircle, Truck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const avatars = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/90.jpg",
];

const HeroSection = () => {
  const scrollToStores = () => {
    document.getElementById("lojas")?.scrollIntoView({ behavior: "smooth" });
  };

  const pills = [
    { icon: CheckCircle, text: "10 noites de teste" },
    { icon: Star, text: "4,9 ⭐ no Google" },
    { icon: Truck, text: "Entrega no seu quarto" },
  ];

  return (
    <section className="bg-institutional text-primary-foreground py-24 md:py-36 px-4 relative overflow-hidden">
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
          className="h-20 md:h-28 mx-auto mb-14 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* H1 */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Durma bem toda noite.
          <br />
          <span className="text-gold">Escolha o colchão certo pra você.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
          Nossos especialistas te ajudam a escolher, você tem 10 noites para testar em casa e se não gostar, a gente troca. Simples assim.
        </motion.p>

        {/* Proof Pills */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {pills.map((pill, i) => (
            <motion.span
              key={i}
              className="inline-flex items-center gap-2 bg-primary-foreground/95 text-institutional font-medium text-sm px-5 py-2.5 rounded-full border border-institutional/20 shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1 }}
            >
              <pill.icon className="w-4 h-4 text-institutional" />
              {pill.text}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
        >
          <motion.button
            onClick={scrollToStores}
            className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark text-primary-foreground font-semibold px-10 py-4.5 rounded-xl text-lg transition-colors shadow-lg shadow-gold/30 active:scale-[0.98]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span className="whitespace-nowrap">Falar com especialista agora</span>
          </motion.button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="flex flex-col items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <div className="flex items-center -space-x-3">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Cliente satisfeito"
                className="w-10 h-10 rounded-full border-2 border-primary-foreground object-cover"
                style={{ zIndex: avatars.length - i }}
              />
            ))}
          </div>
          <p className="text-base md:text-lg font-medium opacity-95">
            +2.400 famílias já dormem melhor com a Probel Sales Home
          </p>
        </motion.div>

        {/* Security Micro-copy */}
        <motion.div
          className="flex flex-wrap gap-x-4 gap-y-1 justify-center text-sm opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Sem compromisso
          </span>
          <span>·</span>
          <span>Atendimento humanizado</span>
          <span>·</span>
          <span>Troca garantida</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
