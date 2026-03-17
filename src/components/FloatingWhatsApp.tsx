import { MessageCircle } from "lucide-react";
import { LOJA } from "@/config/config-loja";

const FloatingWhatsApp = () => {
  return (
    <a
      href={LOJA.whatsappFlutuante}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gold hover:bg-gold-dark text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingWhatsApp;