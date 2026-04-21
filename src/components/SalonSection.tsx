import { siteConfig } from "@/config/site";

export function SalonSection() {
  const { salonSection } = siteConfig;

  return (
    <section id="salon" className="section-padding bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            {salonSection.tagline}
          </p>
          <h2 className="text-4xl md:text-5xl text-foreground mb-6">
            {salonSection.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {salonSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl aspect-[16/11]">
            <img
              src={salonSection.images[0].src}
              alt={salonSection.images[0].alt}
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <h3 className="text-2xl md:text-3xl text-primary font-heading tracking-wide mb-1">
                {salonSection.images[0].title}
              </h3>
              <p className="text-foreground/90 text-sm">
                {salonSection.images[0].subtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
            <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3]">
              <img
                src={salonSection.images[1].src}
                alt={salonSection.images[1].alt}
                loading="lazy"
                width={896}
                height={1024}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="text-xl text-primary font-heading tracking-wide mb-0.5">
                  {salonSection.images[1].title}
                </h3>
                <p className="text-foreground/90 text-xs">
                  {salonSection.images[1].subtitle}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3]">
              <img
                src={salonSection.images[2].src}
                alt={salonSection.images[2].alt}
                loading="lazy"
                width={896}
                height={1024}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="text-xl text-primary font-heading tracking-wide mb-0.5">
                  {salonSection.images[2].title}
                </h3>
                <p className="text-foreground/90 text-xs">
                  {salonSection.images[2].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
