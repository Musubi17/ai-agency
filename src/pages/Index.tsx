import HeroSection from "@/components/landing/HeroSection";
import WhatIDoSection from "@/components/landing/WhatIDoSection";
import WhyMeSection from "@/components/landing/WhyMeSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TestimonialsSection from "@/components/landing/ClientResultsSection";
import BookConsultationSection from "@/components/landing/BookConsultationSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatIDoSection />
      <WhyMeSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BookConsultationSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
