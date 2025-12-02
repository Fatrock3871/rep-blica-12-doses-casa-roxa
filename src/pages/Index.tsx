import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TourSection from "@/components/TourSection";
import HistorySection from "@/components/HistorySection";
import PartiesSection from "@/components/PartiesSection";
import ManualSection from "@/components/ManualSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TourSection />
      <HistorySection />
      <PartiesSection />
      <ManualSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
