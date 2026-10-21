import { Zap, BarChart3, Headphones } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Zap,
      title: "Agilidad",
      description: "Reduce tiempos de espera y aumenta la satisfacción del cliente con transacciones rápidas y eficientes.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: BarChart3,
      title: "Control Total",
      description: "Reportes detallados para decisiones acertadas y crecimiento real. Visualiza el rendimiento de tu negocio en tiempo real.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Headphones,
      title: "Soporte Técnico",
      description: "Equipo siempre disponible para maximizar el uso de tu sistema. Acompañamiento constante y capacitación incluida.",
      color: "bg-brand-blue-light/20 text-brand-blue-light",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-muted-foreground">
            Más que un software, somos tu aliado estratégico para el crecimiento de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8" />
              </div>
              
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;