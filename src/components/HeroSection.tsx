import heroImage from "@/assets/hero-salon.jpg";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="SoHo Salon — luxury beauty experience"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl">
          <p className="text-lavender font-body tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up">
            Beauty & Wellness
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-6 animate-fade-up-delay-1">
            SoHo
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md animate-fade-up-delay-2">
            Where elegance meets artistry. A sanctuary dedicated to revealing your most radiant self.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Button variant="hero" size="lg" className="rounded-full px-10 py-6">
              Book Now
            </Button>
            <Button variant="heroOutline" size="lg" className="rounded-full px-10 py-6 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
