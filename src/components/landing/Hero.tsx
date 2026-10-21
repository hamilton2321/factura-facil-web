import { ArrowRight, CheckCircle2, ShieldCheck, Headphones, Truck, FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";

const Hero = () => {
  const benefits = [
    "Facturación electrónica y documento equivalente POS DIAN",
    "Gestión de inventarios y reportes de ventas en tiempo real",
    "Capacitación inicial y soporte técnico permanente",
  ];

  const trustBadges = [
    {
      icon: FileCheck2,
      title: "100% Homologado DIAN",
      subtitle: "Resolución vigente POS electrónico",
    },
    {
      icon: ShieldCheck,
      title: "1 Año de Garantía",
      subtitle: "En todos los equipos de hardware",
    },
    {
      icon: Headphones,
      title: "Soporte & Capacitación",
      subtitle: "Acompañamiento a tu equipo",
    },
    {
      icon: Truck,
      title: "Envíos a Toda Colombia",
      subtitle: "Instalación remota o presencial",
    },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden w-full max-w-full">
      {/* Background Gradients */}
      <div className="absolute inset-0 gradient-primary opacity-5 pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none max-w-full" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none max-w-full" />

      <div className="section-container relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-semibold">Sistema POS & Facturación Electrónica DIAN</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6 break-words">
              Transforma tu negocio con la eficiencia de{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                {siteConfig.name}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl">
              Gestiona ventas, inventarios y clientes de manera centralizada. Software intuitivo y hardware robusto listo para operar desde el primer día.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-foreground text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all">
                <a href="#soluciones">
                  ¡Cotiza a tu Medida!
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-display font-semibold text-lg h-14 px-8 border-2">
                <a href="#combos-populares">Ver Combos Listos</a>
              </Button>
            </div>
          </div>

          {/* Hero Visual Presentation */}
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-to-br from-card via-background to-muted/60 rounded-3xl p-6 sm:p-8 border border-border shadow-2xl flex flex-col items-center justify-center overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl pointer-events-none" />

              {/* Hardware Preview Image */}
              <div className="relative z-10 w-full aspect-[4/3] max-w-md mx-auto flex items-center justify-center p-2">
                <img
                  src="/images/combo-allinone.webp"
                  alt="Sistema POS Factura Fácil"
                  width={500}
                  height={375}
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Live Badges */}
              <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-border/60 animate-float flex items-center gap-2.5">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-foreground">Resolución DIAN</p>
                  <p className="text-[11px] text-muted-foreground">Documento POS Homologado</p>
                </div>
              </div>

              <div
                className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-border/60 animate-float flex items-center gap-2.5"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">⚡</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-foreground">Listo para Vender</p>
                  <p className="text-[11px] text-muted-foreground">Software + Hardware</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Trust Bar */}
        <div className="mt-14 pt-8 border-t border-border/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2 rounded-xl bg-card/50 border border-border/40">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-xs sm:text-sm text-foreground truncate">
                  {badge.title}
                </p>
                <p className="text-[11px] text-muted-foreground truncate">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
