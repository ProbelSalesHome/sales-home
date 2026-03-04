import HeroSection from "@/components/HeroSection";
import StoresSection from "@/components/StoresSection";
import AboutSection from "@/components/AboutSection";
import MattressSection from "@/components/MattressSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StoresSection />
      <AboutSection />
      <MattressSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
