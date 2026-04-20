import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const { contactSection } = siteConfig;

  return (
    <section id="contact" className="section-padding bg-foreground">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lavender tracking-[0.3em] uppercase text-sm mb-3">{contactSection.tagline}</p>
        <h2 className="text-4xl md:text-5xl text-primary-foreground mb-6">
          {contactSection.title}
        </h2>
        <p className="text-primary-foreground/60 max-w-lg mx-auto mb-10 leading-relaxed">
          {contactSection.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="lg" className="rounded-full px-10 py-6" onClick={() => window.open(siteConfig.whatsappLink, '_blank')}>
            {contactSection.primaryButtonText}
          </Button>
          <Button variant="heroOutline" size="lg" className="rounded-full px-10 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => window.open(siteConfig.whatsappLink, '_blank')}>
            {contactSection.secondaryButtonText}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/70 text-sm">
          {contactSection.infoBlocks.map((block) => (
            <div key={block.title}>
              <p className="font-heading text-primary-foreground text-lg mb-2">{block.title}</p>
              {block.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
