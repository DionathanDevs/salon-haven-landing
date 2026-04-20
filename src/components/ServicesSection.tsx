import { siteConfig } from "@/config/site";

export function ServicesSection() {
  const { servicesSection } = siteConfig;

  return (
    <section id="services" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">{servicesSection.tagline}</p>
          <h2 className="text-4xl md:text-5xl text-foreground">{servicesSection.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesSection.services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-lavender transition-all duration-500 hover:shadow-lg hover:shadow-lavender/10"
            >
              <span className="text-3xl block mb-4 text-lavender group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </span>
              <h3 className="text-xl font-heading mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-primary font-medium text-sm">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
