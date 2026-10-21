import { servicesData } from "@/data/services";

const Services = () => {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Servicios de Software
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Software y Legalidad
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Cumple con todas las regulaciones mientras potencias la productividad de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className="group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>

                <div>
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {service.highlight}
                  </span>

                  <h3 className="font-display font-bold text-xl mb-3">
                    {service.title}
                  </h3>

                  <p className="text-primary-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
