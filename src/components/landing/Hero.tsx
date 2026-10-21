import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";

const Hero = () => {
  const benefits = [
    "Facturación electrónica DIAN",
    "Gestión de inventarios en tiempo real",
    "Reportes detallados de ventas",
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden w-full max-w-full">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-primary opacity-5 pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none max-w-full" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none max-w-full" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Sistema POS #1 en Colombia</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6 break-words">
              Transforma tu negocio con la eficiencia de{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                {siteConfig.name}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl">
              Gestiona ventas, inventarios y empleados de manera centralizada con nuestro
              sistema POS basado en tecnología líder. Todo lo que tu negocio necesita en un solo lugar.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all">
                <a href="#cotizador">
                  ¡Cotiza a tu Medida!
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-display font-semibold text-lg h-14 px-8 border-2">
                <a href="#combos">Ver Combos</a>
              </Button>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-to-br from-secondary to-muted rounded-2xl p-8 aspect-square lg:aspect-[4/3] flex items-center justify-center overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />

              {/* Placeholder Content */}
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 gradient-primary rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-5xl font-display font-bold text-primary-foreground">POS</span>
                </div>
                <p className="text-muted-foreground font-medium">
                  Sistema POS Completo
                </p>
                <p className="text-sm text-muted-foreground/70 mt-1">
                  Software + Hardware Integrado
                </p>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-8 left-8 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium">Venta registrada</span>
                </div>
              </div>

              <div className="absolute bottom-12 right-8 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">+15%</span>
                  </div>
                  <span className="text-sm font-medium">Ventas del día</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
