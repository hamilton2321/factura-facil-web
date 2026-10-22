import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  Truck,
  FileCheck2,
  Check,
  Package,
  Calculator,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const trustBadges = [
    {
      icon: FileCheck2,
      title: "Homologado DIAN",
      subtitle: "Certificado digital y emisión 100% legal",
    },
    {
      icon: ShieldCheck,
      title: "1 Año de Garantía",
      subtitle: "En todos los equipos físicos con cambio directo",
    },
    {
      icon: Headphones,
      title: "Soporte Especializado",
      subtitle: "Asesoría técnica y capacitación en Colombia",
    },
    {
      icon: Truck,
      title: "Envíos a Toda Colombia",
      subtitle: "Despachos asegurados a ciudades y municipios",
    },
  ];

  return (
    <section id="inicio" className="relative pt-24 pb-14 sm:pb-20 overflow-hidden w-full max-w-full bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background Soft Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="section-container relative z-10 w-full max-w-full min-w-0">
        {/* Main Hero Grid: 12 Columns (7 left, 5 right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full max-w-full">
          {/* Columna Izquierda: Mensaje Central & Propuesta de Valor (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-6 w-full min-w-0 animate-slide-up">
            {/* Badge DIAN Oficial */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-border shadow-xs max-w-full">
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
              </span>
              <span className="font-semibold text-xs sm:text-sm text-foreground tracking-tight truncate">
                ✅ Homologado DIAN Colombia | Resolución 000042 y Anexo 1.9
              </span>
            </div>

            {/* Titular Principal de Alto Impacto */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground tracking-tight leading-[1.15] break-words">
              Moderniza tu Punto de Venta y Factura Electrónicamente{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 underline decoration-accent decoration-4 underline-offset-8">
                sin Dolores de Cabeza
              </span>
            </h1>

            {/* Subtítulo Descriptivo */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Equipos POS todo-en-uno, software en la nube listo para vender y habilitación técnica ante la DIAN en menos de 24 horas. Evita sanciones y toma el control total de tu negocio desde hoy.
            </p>

            {/* Botones de Acción Inmediata (CTAs) */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-bold text-base h-13 px-7 shadow-lg hover:shadow-xl transition-all"
              >
                <a href="#soluciones" className="flex items-center justify-center gap-2">
                  <span>¡Cotiza a tu Medida!</span>
                  <Calculator className="w-4 h-4 ml-1" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-display font-semibold text-base h-13 px-6 border-2 border-border hover:border-primary/40 bg-card"
              >
                <a href="#soluciones" className="flex items-center justify-center gap-2">
                  <Package className="w-4 h-4 text-primary" />
                  <span>Ver Combos Listos</span>
                </a>
              </Button>
            </div>

            {/* Micro-Trust / Métricas Rápidas */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-muted-foreground border-t border-border/60 w-full">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Activación en &lt; 24h</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Firma Digital Incluida</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Capacitación 1 a 1</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Terminal POS Mockup (Imagen Detrás) + Viñetas Solapadas por Delante (5 Cols) */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center lg:items-end min-w-0 mt-4 lg:mt-0 animate-fade-in">
            {/* Contenedor relativo que sostiene el mockup central y las viñetas solapadas */}
            <div className="relative w-full max-w-md lg:ml-auto">
              {/* Tarjeta Central Mockup Terminal POS (La imagen va por detrás) */}
              <div className="relative w-full bg-card rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden p-3 border border-border/80 transition-transform hover:-translate-y-1 duration-300">
                {/* Pantalla del POS con la imagen oficial de Stitch detrás */}
                <div className="relative w-full h-[250px] sm:h-[330px] rounded-xl overflow-hidden bg-primary">
                  <img
                    src="/images/hero-pos-stitch.jpg"
                    alt="Terminal Táctil POS Factura Fácil Colombia"
                    loading="eager"
                    fetchPriority="high"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay con información clave en la parte inferior de la pantalla */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent flex flex-col justify-end p-4 sm:p-5 text-white">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-accent font-display">
                      Terminal Táctil POS Pro
                    </span>
                    <p className="font-display font-bold text-sm sm:text-base leading-tight mt-0.5 text-white">
                      Combo Impresora Térmica + Pantalla 15.6" + Lector
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="px-2 py-0.5 rounded bg-white/20 text-white font-semibold text-[10px] sm:text-[11px]">
                        Sistema Android / Windows
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-white/80">
                        Corte Automático 80mm
                      </span>
                    </div>
                  </div>
                </div>

                {/* Barra de Estado inferior del POS Físico */}
                <div className="pt-2.5 px-2 pb-1 flex items-center justify-between border-t border-border/40 mt-1">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="text-xs font-bold text-foreground truncate">
                      POS Conectado a Servidores DIAN
                    </span>
                  </div>
                  <span className="font-display font-bold text-xs text-primary shrink-0">
                    100% Online
                  </span>
                </div>
              </div>

              {/* VIÑETAS FLOTANTES POR DELANTE (Desktop: Solapadas en los lados z-20) */}
              {/* Viñeta 1: Superior Derecha (Solapada por delante) */}
              <div className="hidden lg:flex absolute -top-5 -right-5 z-20 bg-background/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-border/80 items-center gap-3 animate-float pointer-events-auto">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col pr-1 text-left">
                  <span className="text-[11px] text-muted-foreground font-medium">Transmisión Inmediata</span>
                  <span className="font-display font-bold text-xs text-foreground">Resolución DIAN Activa</span>
                  <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600" /> Validación CUFE Previa
                  </span>
                </div>
              </div>

              {/* Viñeta 2: Inferior Izquierda (Solapada por delante) */}
              <div
                className="hidden lg:flex absolute -bottom-6 -left-5 z-20 bg-background/95 backdrop-blur-md px-4 py-3.5 rounded-xl shadow-xl border border-border/80 items-center gap-3.5 transition-transform hover:scale-105 duration-200 pointer-events-auto"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center text-accent-foreground shrink-0">
                  <Package className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
                    Solución Todo Incluido
                  </span>
                  <span className="font-display font-bold text-xs text-foreground">
                    Listo para Vender
                  </span>
                  <span className="text-xs text-primary font-medium">
                    Hardware + Software + Certificado
                  </span>
                </div>
              </div>
            </div>

            {/* VIÑETAS EN DISPOSITIVOS MÓVILES (< lg: Ajustadas sin salirse del margen derecho) */}
            <div className="grid grid-cols-2 gap-2.5 w-full max-w-md mt-3 lg:hidden">
              <div className="bg-card p-2.5 rounded-xl shadow-sm border border-border flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-display font-bold text-xs text-foreground truncate">
                    Res. DIAN Activa
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold truncate flex items-center gap-0.5">
                    <Check className="w-3 h-3" /> CUFE Previa
                  </span>
                </div>
              </div>

              <div className="bg-card p-2.5 rounded-xl shadow-sm border border-border flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent-foreground shrink-0">
                  <Package className="w-4 h-4 text-accent-foreground" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-display font-bold text-xs text-foreground truncate">
                    Listo para Vender
                  </span>
                  <span className="text-[10px] text-primary font-medium truncate">
                    Hard + Soft + DIAN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST BAR (4 Pilares Estratégicos perfectamente ajustados de izquierda a derecha) */}
        <div className="mt-14 pt-8 border-t border-border/70 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full max-w-full">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-card border border-border/70 shadow-2xs hover:border-primary/40 transition-colors w-full min-w-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-2xs">
                <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div className="min-w-0 w-full">
                <p className="font-display font-bold text-xs sm:text-sm text-foreground truncate">
                  {badge.title}
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug line-clamp-2">
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
