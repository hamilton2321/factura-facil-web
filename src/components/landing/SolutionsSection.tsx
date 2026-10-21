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
    <section id="soluciones" className="py-20 lg:py-24 bg-muted/30 overflow-hidden w-full max-w-full relative">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-4 bg-accent/15 text-accent-foreground border-accent/20 px-3 py-1 text-sm font-semibold inline-flex items-center gap-1.5">
            <Package className="w-4 h-4 text-accent" />
            Catálogo & Soluciones POS
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Equipa tu Negocio con lo que Necesitas
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Elige armar tu cotización interactiva paso a paso o explorar nuestros combos pre-configurados listos para operar.
          </p>
        </div>

        {/* Tab Selector */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-background/90 border border-border p-1.5 rounded-2xl shadow-sm h-auto flex flex-wrap gap-1 max-w-2xl justify-center">
              <TabsTrigger
                value="cotizador"
                id="cotizador-tab"
                className="rounded-xl px-5 py-3 font-display font-semibold text-sm sm:text-base data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground transition-all flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Cotizador a tu Medida</span>
                <span className="text-[10px] bg-accent text-accent-foreground px-2 py-0.5 rounded-full uppercase tracking-wider font-bold hidden sm:inline-block">
                  Interactivo
                </span>
              </TabsTrigger>

              <TabsTrigger
                value="combos"
                id="combos-populares"
                className="rounded-xl px-5 py-3 font-display font-semibold text-sm sm:text-base data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground transition-all flex items-center gap-2"
              >
                <Package className="w-4 h-4" />
                <span>Combos Listos</span>
              </TabsTrigger>

              <TabsTrigger
                value="hardware"
                className="rounded-xl px-5 py-3 font-display font-semibold text-sm sm:text-base data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground transition-all flex items-center gap-2"
              >
                <Cpu className="w-4 h-4" />
                <span>Hardware & Periféricos</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* TAB 1: Cotizador Interactivo */}
          <TabsContent value="cotizador" className="mt-0 focus-visible:outline-none">
            <Cotizador isEmbedded />
          </TabsContent>

          {/* TAB 2: Combos Populares */}
          <TabsContent value="combos" className="mt-0 focus-visible:outline-none animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {combosData.map((combo) => (
                <div
                  key={combo.id}
                  className={`relative group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between ${
                    combo.featured
                      ? "bg-primary text-primary-foreground shadow-xl ring-2 ring-accent"
                      : "bg-background border border-border shadow-sm hover:shadow-xl"
                  }`}
                >
                  {combo.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold shadow">
                      Más Popular
                    </div>
                  )}

                  <div>
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-6 bg-white p-4 flex items-center justify-center border border-border/50">
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

                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        combo.featured ? "bg-primary-foreground/20" : "gradient-primary"
                      }`}
                    >
                      <combo.icon className="w-6 h-6 text-primary-foreground" />
                    </div>

                    <h3
                      className={`font-display font-bold text-lg mb-2 ${
                        combo.featured ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {combo.title}
                    </h3>

                    <p
                      className={`text-xs mb-5 line-clamp-2 ${
                        combo.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      {combo.subtitle}
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {combo.items.map((item) => {
                        const ItemIcon = getItemIcon(item);
                        return (
                          <li key={item} className="flex items-center gap-2 text-xs">
                            <ItemIcon className="w-4 h-4 flex-shrink-0 text-accent" />
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
                        `¡Hola Factura Fácil! 🚀 Me interesa cotizar el ${combo.title}. ¿Me podrían dar información de precios y envíos?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Cotizar por WhatsApp
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            {/* Hint to use Cotizador */}
            <div className="mt-10 text-center p-6 bg-card rounded-2xl border border-border/60 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">¿Buscas algo diferente o varios equipos?</p>
                <p className="text-xs text-muted-foreground">Usa nuestro cotizador para armar una propuesta exacta.</p>
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
          <TabsContent value="hardware" className="mt-0 focus-visible:outline-none animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hardwareData.map((product) => (
                <div
                  key={product.title}
                  className="group bg-background rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-full h-36 bg-white rounded-xl overflow-hidden mb-4 border border-border/40 flex items-center justify-center p-3">
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

                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-3">
                      <product.icon className="w-5 h-5 text-primary" />
                    </div>

                    <h3 className="font-display font-bold text-base mb-2 text-foreground">
                      {product.title}
                    </h3>

                    <p className="text-muted-foreground text-xs mb-4 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <span className="font-bold text-sm text-primary">
                      {product.price}
                    </span>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-xs font-semibold text-accent-foreground hover:text-accent p-0 hover:bg-transparent"
                    >
                      <a
                        href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                          `¡Hola Factura Fácil! 🚀 Quiero consultar el precio y disponibilidad de: ${product.title}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Consultar
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
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
