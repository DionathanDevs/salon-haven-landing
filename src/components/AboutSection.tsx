import { siteConfig } from "@/config/site";

export function AboutSection() {
  const { aboutSection } = siteConfig;

  return (
    <section id="about" className="section-padding bg-blush/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">{aboutSection.tagline}</p>
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 leading-tight whitespace-pre-line">
              {aboutSection.title}
            </h2>
            {aboutSection.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {aboutSection.stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-2xl p-8 text-center shadow-sm">
                <p className="text-4xl font-heading text-primary mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
