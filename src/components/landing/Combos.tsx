import { Package, Printer, HardDrive, ScanBarcode, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { combosData } from "@/data/combos";
import { siteConfig } from "@/data/siteConfig";

const Combos = () => {
  const getItemIcon = (item: string) => {
    if (item.includes("Software")) return Package;
    if (item.includes("Impresora")) return Printer;
    if (item.includes("Computador") || item.includes("PC")) return HardDrive;
    if (item.includes("Lector")) return ScanBarcode;
    if (item.includes("Balanza")) return Scale;
    return Package;
  };

  return (
    <section id="combos" className="py-20 lg:py-28">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nuestros Destacados
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Combos POS Completos
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones integrales diseñadas para cada tipo de negocio. Software + Hardware listo para usar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {combosData.map((combo) => (
            <div
              key={combo.id}
              className={`relative group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                combo.featured
                  ? "bg-primary text-primary-foreground shadow-xl ring-2 ring-accent"
                  : "bg-background border border-border shadow-sm hover:shadow-xl"
              }`}
            >
              {combo.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold">
                  Más Popular
                </div>
              )}

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
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  combo.featured ? "bg-primary-foreground/20" : "gradient-primary"
                }`}
              >
                <combo.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3
                className={`font-display font-bold text-lg mb-2 ${
                  combo.featured ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {combo.title}
              </h3>

              <p
                className={`text-sm mb-5 ${
                  combo.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {combo.subtitle}
              </p>

              <ul className="space-y-3 mb-6">
                {combo.items.map((item) => {
                  const ItemIcon = getItemIcon(item);
                  return (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <ItemIcon className="w-4 h-4 flex-shrink-0 text-accent" />
                      <span className={combo.featured ? "text-primary-foreground/90" : "text-foreground/80"}>
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Button
                asChild
                className={`w-full font-display font-semibold ${
                  combo.featured
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    `Hola Factura Fácil 🚀, estoy interesado en el ${combo.title}. ¿Me podrían asesorar con los precios y disponibilidad?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotizar Este Combo
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Combos;
