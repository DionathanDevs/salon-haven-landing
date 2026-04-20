import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl">
          <p className="text-lavender font-body tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
            {hero.tagline}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-6 animate-fade-up-delay-1">
            {hero.title}
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md animate-fade-up-delay-2">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Button variant="hero" size="lg" className="rounded-full px-10 py-6" onClick={() => window.open(siteConfig.whatsappLink, '_blank')}>
              {hero.primaryButtonText}
            </Button>
            <Button variant="heroOutline" size="lg" className="rounded-full px-10 py-6 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {hero.secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
