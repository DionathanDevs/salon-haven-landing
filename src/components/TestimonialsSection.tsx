const testimonials = [
  {
    name: "Sophia M.",
    text: "SoHo transformed not just my hair, but my entire confidence. The team is incredibly talented and so warm.",
    service: "Hair & Color",
  },
  {
    name: "Elena R.",
    text: "My bridal experience was pure magic. Every detail was perfect — I felt like the most beautiful version of myself.",
    service: "Bridal Package",
  },
  {
    name: "Ava T.",
    text: "I've been coming here for 3 years and I'll never go anywhere else. The facials are heavenly.",
    service: "Skincare",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl text-foreground">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl bg-blush/30 border border-border"
            >
              <div className="text-lavender text-4xl font-heading mb-4">"</div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                {t.text}
              </p>
              <div>
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
