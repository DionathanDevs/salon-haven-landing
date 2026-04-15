const services = [
  {
    title: "Hair Styling",
    description: "From precision cuts to flowing waves, our stylists craft looks that turn heads.",
    icon: "✦",
    price: "From $85",
  },
  {
    title: "Color & Highlights",
    description: "Balayage, ombré, or classic color — we bring your vision to vivid life.",
    icon: "◈",
    price: "From $120",
  },
  {
    title: "Skincare",
    description: "Rejuvenating facials and treatments that leave your skin glowing.",
    icon: "❋",
    price: "From $95",
  },
  {
    title: "Nails & Beauty",
    description: "Manicures, pedicures, and nail art with meticulous attention to detail.",
    icon: "✿",
    price: "From $45",
  },
  {
    title: "Bridal",
    description: "Complete bridal packages for your most unforgettable day.",
    icon: "♡",
    price: "From $350",
  },
  {
    title: "Massage & Spa",
    description: "Melt away tension with our signature relaxation treatments.",
    icon: "❁",
    price: "From $110",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">What We Offer</p>
          <h2 className="text-4xl md:text-5xl text-foreground">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
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
