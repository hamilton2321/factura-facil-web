import { FileCheck, BarChart3, Network, Headphones, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    icon: FileCheck,
    title: "Cumplimiento 100% DIAN",
    highlight: "Legalidad Garantizada",
    description: "Emite Factura Electrónica y Documento Equivalente POS con validación previa DIAN, código CUFE/QR y sin costos sorpresa por documento.",
    features: ["Validación previa DIAN", "Documentos ilimitados", "Formato tirilla o PDF"],
  },
  {
    icon: BarChart3,
    title: "Inventarios & Reportes en Vivo",
    highlight: "Control Total",
    description: "Conoce exactamente qué vendes, cuánto ganas y qué productos necesitas reponer. Arqueos de caja precisos para evitar pérdidas.",
    features: ["Kardex y control de stock", "Alertas de productos agotados", "Cierres de caja X y Z"],
  },
  {
    icon: Network,
    title: "Multi-Caja y Comandas en Red",
    highlight: "Velocidad de Despacho",
    description: "Conecta múltiples puntos de pago a una misma base de datos. Envía pedidos directamente a cocina o bodega sin demoras.",
    features: ["Cierres independientes por cajero", "Comanderas para restaurantes", "Sincronización en red local"],
  },
  {
    icon: Headphones,
    title: "Capacitación & Soporte Experto",
    highlight: "Acompañamiento Real",
    description: "No te dejamos solo con una máquina. Instalamos tu sistema, cargamos tu catálogo inicial y capacitamos a tu equipo paso a paso.",
    features: ["Puesta en marcha guiada", "Soporte técnico prioritario", "Sin contratos forzosos"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-24 bg-card border-y border-border/60 relative overflow-hidden w-full max-w-full">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm font-semibold inline-flex items-center gap-1.5">
            <FileCheck className="w-4 h-4" />
            Software Potente & Fácil de Usar
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Todo lo que tu Negocio Necesita para Crecer
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Olvídate de las planillas en papel y los sistemas complicados. Automatiza tus ventas con tranquilidad tributaria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group bg-background rounded-2xl p-6 border border-border/80 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center shadow group-hover:scale-105 transition-transform">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                    {pillar.highlight}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                  {pillar.description}
                </p>
              </div>

              <ul className="space-y-2 pt-4 border-t border-border/60">
                {pillar.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs text-foreground/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
