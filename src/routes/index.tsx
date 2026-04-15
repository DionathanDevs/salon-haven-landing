import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SoHo Salon — Beauty & Wellness for Women" },
      { name: "description", content: "SoHo is a luxury salon for women offering hair styling, skincare, bridal packages, and spa treatments in New York." },
      { property: "og:title", content: "SoHo Salon — Beauty & Wellness for Women" },
      { property: "og:description", content: "Where elegance meets artistry. A sanctuary dedicated to revealing your most radiant self." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
