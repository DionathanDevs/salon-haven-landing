import { siteConfig } from "@/config/site";

export function GallerySection() {
  const { gallerySection } = siteConfig;

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            {gallerySection.tagline}
          </p>
          <h2 className="text-4xl md:text-5xl text-foreground mb-6">
            {gallerySection.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {gallerySection.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {gallerySection.images.map((image, index) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-2xl bg-muted aspect-[3/4]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={768}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block bg-primary-foreground/90 backdrop-blur-sm text-primary text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                  {image.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
