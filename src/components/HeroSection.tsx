import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-background z-0">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="hidden md:block absolute right-0 top-0 w-full md:w-1/2 h-full object-cover object-[center_top]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent w-full md:w-[65%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 md:pt-0">
        <div className="max-w-xl">
          <div className="flex justify-center md:hidden mb-8 animate-fade-up w-full">
            <img
              src={hero.mobileImage || hero.image}
              alt={hero.title}
              className="w-64 h-64 rounded-full border-2 border-primary shadow-2xl shadow-primary/20 object-cover object-top"
            />
          </div>
          <p className="text-primary font-semibold font-body tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
            {hero.tagline}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6 animate-fade-up-delay-1">
            {hero.title}
          </h1>
          <p className="text-foreground/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md animate-fade-up-delay-2">
            {hero.subtitle}
          </p>
          <div className="flex flex-col md:flex-row flex-wrap gap-4 animate-fade-up-delay-3 w-full">
            <Button variant="hero" size="lg" className="rounded-full px-10 py-6 w-full md:w-auto" onClick={() => window.open(siteConfig.whatsappLink, '_blank')}>
              {hero.primaryButtonText}
            </Button>
            <Button variant="heroOutline" size="lg" className="rounded-full px-10 py-6 border-foreground/40 text-foreground hover:bg-foreground/10 w-full md:w-auto" onClick={() => {
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
