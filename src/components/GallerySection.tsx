import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Balayage loiro com ondas suaves", label: "Coloração" },
  { src: gallery2, alt: "Penteado de noiva elegante", label: "Noivas" },
  { src: gallery3, alt: "Skincare e produtos premium", label: "Skincare" },
  { src: gallery4, alt: "Cabelo ruivo vibrante", label: "Cor Fashion" },
  { src: gallery5, alt: "Manicure rosa nude elegante", label: "Manicure" },
  { src: gallery6, alt: "Cabelo liso brilhante longo", label: "Hair Styling" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Portfólio
          </p>
          <h2 className="text-4xl md:text-5xl text-foreground mb-6">
            Resultados que falam por si
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cada transformação é uma assinatura. Conheça alguns dos nossos
            trabalhos mais recentes — feitos com técnica, cuidado e arte.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${
                index === 0 || index === 5 ? "md:row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-[3/4]"
              }`}
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
