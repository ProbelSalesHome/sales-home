import { Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { TEXTOS_HOME } from "@/content/textos-home";

const testimonials = TEXTOS_HOME.depoimentos.lista;

const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = testimonials.length - visibleCount;

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(maxIndex, i + 1));

  const visible = testimonials.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {TEXTOS_HOME.depoimentos.titulo}
        </motion.h2>

        {/* Rating summary */}
        <div className="flex items-center gap-2 mb-10">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, j) => (
              <Star key={j} className="w-5 h-5 text-gold fill-gold" />
            ))}
          </div>
          <span className="text-muted-foreground text-sm font-medium">
            {TEXTOS_HOME.depoimentos.resumo}
          </span>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Nav arrows */}
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            disabled={startIndex >= maxIndex}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-6">
            {visible.map((t, i) => (
              <motion.div
                key={startIndex + i}
                className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between min-h-[280px]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-foreground text-sm">{t.name}</span>
                      <BadgeCheck className="w-4 h-4 text-blue-500" />
                      <span className="text-xs text-muted-foreground">Compra Verificada</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{t.date}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>

                  {/* Title & text */}
                  <h4 className="font-bold text-foreground mb-2">{t.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                </div>

                {/* Product */}
                <div className="mt-5 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{t.product}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;