import { Button } from "@/components/ui/button";
import { hardwareData } from "@/data/hardware";
import { siteConfig } from "@/data/siteConfig";

const HardwareCatalog = () => {
  return (
    <section id="hardware" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Complementos
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Hardware Profesional
          </h2>
          <p className="text-lg text-muted-foreground">
            Equipos robustos diseñados para el trabajo duro de tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hardwareData.map((product) => (
            <div
              key={product.title}
              className="group bg-background rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:-translate-y-2"
            >
              <div className="w-full h-40 bg-white rounded-t-2xl overflow-hidden mb-4 border-b border-border/50 flex items-center justify-center p-4">
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

              <div className="px-6 pb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <product.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                  {product.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="font-semibold text-primary">
                    {product.price}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-accent-foreground hover:text-accent group-hover:translate-x-1 transition-transform p-0 hover:bg-transparent"
                  >
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                        `Hola Factura Fácil 🚀, estoy interesado en el producto "${product.title}". ¿Me podrían asesorar con precio y entrega?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cotizar
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareCatalog;
