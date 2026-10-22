import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import SolutionsSection from "@/components/landing/SolutionsSection";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background w-full max-w-full">
      <Header />
      <main className="w-full max-w-full">
        {/* 1. Hero con propuesta de valor + Barra de Confianza DIAN */}
        <Hero />

        {/* 2. Centro de Soluciones Unificado con Pestañas (Cotizador a tu Medida, Combos Listos, Hardware) */}
        <SolutionsSection />

        {/* 3. Software & Legalidad DIAN condensados */}
        <Services />

        {/* 4. Prueba Social */}
        <Testimonials />

        {/* 5. Preguntas Frecuentes (FAQ) */}
        <FAQ />

        {/* 6. Contacto y Cierre Express */}
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
