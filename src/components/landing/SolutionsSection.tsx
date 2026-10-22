import { useState } from "react";
import {
  Calculator,
  Package,
  Cpu,
  Printer,
  HardDrive,
  ScanBarcode,
  Scale,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Cotizador from "@/components/landing/Cotizador";
import { combosData } from "@/data/combos";
import { hardwareData } from "@/data/hardware";
import { siteConfig } from "@/data/siteConfig";

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState<string>("cotizador");

  const getItemIcon = (item: string) => {
    if (item.includes("Software")) return Package;
    if (item.includes("Impresora")) return Printer;
    if (item.includes("Computador") || item.includes("PC")) return HardDrive;
    if (item.includes("Lector")) return ScanBarcode;
    if (item.includes("Balanza")) return Scale;
    return Package;
  };

  return (
    <section id="soluciones" className="py-16 sm:py-20 lg:py-24 bg-muted/30 overflow-hidden w-full max-w-full relative">
      <div className="section-container relative z-10 w-full max-w-full min-w-0">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-2">
          <Badge className="mb-3 bg-accent/15 text-accent-foreground border-accent/20 px-3 py-1 text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5">
            <Package className="w-3.5 h-3.5 text-accent" />
            Catálogo & Soluciones POS Oficiales
          </Badge>
          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4">
            Arma tu Solución POS a la Medida
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg">
            Selecciona tu sector, personaliza tus terminales con precios oficiales de Factura Fácil Colombia u obtén combos pre-armados listos para operar.
          </p>
        </div>

        {/* Tab Selector - Responsive 3-column grid without overflow */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-full min-w-0">
          <div className="flex justify-center mb-8 w-full max-w-full px-2">
            <TabsList className="bg-background border border-border p-1 rounded-2xl shadow-sm h-auto grid grid-cols-3 w-full max-w-lg mx-auto">
              <TabsTrigger
                value="cotizador"
                id="cotizador-tab"
                className="rounded-xl py-2 sm:py-2.5 px-1 sm:px-3 font-display font-semibold text-xs sm:text-sm data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center min-w-0 truncate"
              >
                <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">Cotizador</span>
              </TabsTrigger>

              <TabsTrigger
                value="combos"
                id="combos-populares"
                className="rounded-xl py-2 sm:py-2.5 px-1 sm:px-3 font-display font-semibold text-xs sm:text-sm data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center min-w-0 truncate"
              >
                <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">Combos (4)</span>
              </TabsTrigger>

              <TabsTrigger
                value="hardware"
                className="rounded-xl py-2 sm:py-2.5 px-1 sm:px-3 font-display font-semibold text-xs sm:text-sm data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center min-w-0 truncate"
              >
                <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">Hardware</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* TAB 1: Cotizador Interactivo */}
          <TabsContent value="cotizador" className="mt-0 focus-visible:outline-none w-full max-w-full min-w-0">
            <Cotizador isEmbedded />
          </TabsContent>

          {/* TAB 2: Combos Populares */}
          <TabsContent value="combos" className="mt-0 focus-visible:outline-none animate-fade-in w-full max-w-full min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-full">
              {combosData.map((combo) => (
                <div
                  key={combo.id}
                  className={`relative group rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between ${
                    combo.featured
                      ? "bg-primary text-primary-foreground shadow-xl ring-2 ring-accent"
                      : "bg-background border border-border shadow-sm hover:shadow-xl"
                  }`}
                >
                  {combo.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold shadow whitespace-nowrap">
                      {combo.badge}
                    </div>
                  )}

                  <div>
                    {/* Sector Tag */}
                    {combo.sectorTag && (
                      <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-3 ${
                        combo.featured ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                      }`}>
                        {combo.sectorTag}
                      </span>
                    )}

                    <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-4 bg-white p-3 sm:p-4 flex items-center justify-center border border-border/50">
                      <img
                        src={combo.image}
                        alt={combo.title}
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={225}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <h3
                      className={`font-display font-bold text-lg mb-1 ${
                        combo.featured ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {combo.title}
                    </h3>

                    {/* Official Price & Savings */}
                    <div className="my-2">
                      <div className={`font-display font-extrabold text-2xl tracking-tight leading-none ${
                        combo.featured ? "text-accent" : "text-primary"
                      }`}>
                        {combo.price}
                      </div>
                      {combo.savings && (
                        <span className={`inline-block mt-1.5 text-[11px] font-bold px-2 py-0.5 rounded ${
                          combo.featured ? "bg-accent/20 text-accent" : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}>
                          {combo.savings}
                        </span>
                      )}
                    </div>

                    <p
                      className={`text-xs mt-2 mb-4 line-clamp-2 ${
                        combo.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      {combo.subtitle}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {combo.items.map((item) => {
                        const ItemIcon = getItemIcon(item);
                        return (
                          <li key={item} className="flex items-center gap-2 text-xs">
                            <ItemIcon className="w-3.5 h-3.5 flex-shrink-0 text-accent" />
                            <span className={combo.featured ? "text-primary-foreground/90" : "text-foreground/80"}>
                              {item}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <Button
                    asChild
                    className={`w-full font-display font-semibold text-sm h-11 ${
                      combo.featured
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                        `¡Hola Factura Fácil! 🚀 Me interesa ordenar el ${combo.title} por ${combo.price} con Licencia Vitalicia. ¿Me confirman disponibilidad y tiempos de entrega?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Pedir por WhatsApp
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            {/* Hint to use Cotizador */}
            <div className="mt-10 text-center p-5 sm:p-6 bg-card rounded-2xl border border-border/60 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">¿Buscas algo diferente o varios equipos?</p>
                <p className="text-xs text-muted-foreground">Usa nuestro cotizador para armar una propuesta exacta con 10% de descuento en multicajas.</p>
              </div>
              <Button
                variant="outline"
                onClick={() => setActiveTab("cotizador")}
                className="font-semibold text-xs border-primary/30 hover:border-primary shrink-0"
              >
                Ir al Cotizador
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </TabsContent>

          {/* TAB 3: Hardware y Periféricos */}
          <TabsContent value="hardware" className="mt-0 focus-visible:outline-none animate-fade-in w-full max-w-full min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-full">
              {hardwareData.map((product) => (
                <div
                  key={product.title}
                  className="group bg-background rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-full h-40 bg-white rounded-xl overflow-hidden mb-4 border border-border/40 flex items-center justify-center p-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        decoding="async"
                        width={300}
                        height={160}
                        className="h-full w-auto object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-xs text-secondary bg-primary/5 px-2.5 py-0.5 rounded-full">
                        {product.tag}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Disponible
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base mb-1.5 text-foreground">
                      {product.title}
                    </h3>

                    <p className="text-muted-foreground text-xs mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-medium">Precio Unitario</span>
                      <span className="font-display font-bold text-lg text-primary">
                        {product.price}
                      </span>
                    </div>
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold h-9 px-3"
                    >
                      <a
                        href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                          `¡Hola Factura Fácil! 🚀 Quiero consultar disponibilidad y comprar: ${product.title} (${product.price})`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Cotizar</span>
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
