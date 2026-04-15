export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-blush/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Our Story</p>
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Crafted with <br />Passion & Care
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At SoHo, we believe beauty is an experience, not just a result. Founded with a vision 
              to create a warm, welcoming space where every woman feels celebrated, our team of 
              award-winning stylists and beauty experts brings decades of combined expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the moment you step through our doors, you'll be enveloped in an atmosphere 
              of calm luxury — soft music, aromatic scents, and the gentle hum of artistry at work.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-2xl p-8 text-center shadow-sm">
              <p className="text-4xl font-heading text-primary mb-1">12+</p>
              <p className="text-muted-foreground text-sm">Years of Excellence</p>
            </div>
            <div className="bg-card rounded-2xl p-8 text-center shadow-sm">
              <p className="text-4xl font-heading text-primary mb-1">5K</p>
              <p className="text-muted-foreground text-sm">Happy Clients</p>
            </div>
            <div className="bg-card rounded-2xl p-8 text-center shadow-sm">
              <p className="text-4xl font-heading text-primary mb-1">15</p>
              <p className="text-muted-foreground text-sm">Expert Stylists</p>
            </div>
            <div className="bg-card rounded-2xl p-8 text-center shadow-sm">
              <p className="text-4xl font-heading text-primary mb-1">4.9</p>
              <p className="text-muted-foreground text-sm">Star Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
