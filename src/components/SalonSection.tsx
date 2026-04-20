import salon1 from "@/assets/salon-interior-1.jpg";
import salon2 from "@/assets/salon-interior-2.jpg";
import salon3 from "@/assets/salon-interior-3.jpg";

export function SalonSection() {
  return (
    <section id="salon" className="section-padding bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Nosso Espaço
          </p>
          <h2 className="text-4xl md:text-5xl text-foreground mb-6">
            Um refúgio para você
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Projetado para acolher e encantar — cada detalhe do nosso salão foi
            pensado para que seu momento de beleza seja também um momento de paz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl aspect-[16/11]">
            <img
              src={salon1}
              alt="Área de estilização do salão SoHo com cadeiras elegantes e mármore"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl text-primary-foreground mb-1">
                Estúdio principal
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Onde a magia acontece
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
            <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3]">
              <img
                src={salon2}
                alt="Recepção elegante do salão com flores"
                loading="lazy"
                width={896}
                height={1024}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl text-primary-foreground mb-0.5">
                  Recepção
                </h3>
                <p className="text-primary-foreground/80 text-xs">
                  Bem-vinda ao SoHo
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3]">
              <img
                src={salon3}
                alt="Sala de spa e tratamentos faciais com iluminação suave"
                loading="lazy"
                width={896}
                height={1024}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl text-primary-foreground mb-0.5">
                  Spa & Skincare
                </h3>
                <p className="text-primary-foreground/80 text-xs">
                  Tranquilidade absoluta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
