import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-foreground">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lavender tracking-[0.3em] uppercase text-sm mb-3">Get In Touch</p>
        <h2 className="text-4xl md:text-5xl text-primary-foreground mb-6">
          Book Your Visit
        </h2>
        <p className="text-primary-foreground/60 max-w-lg mx-auto mb-10 leading-relaxed">
          Ready to experience SoHo? Book your appointment today or drop by our salon. 
          We'd love to welcome you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="lg" className="rounded-full px-10 py-6">
            Book Appointment
          </Button>
          <Button variant="heroOutline" size="lg" className="rounded-full px-10 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            Call Us
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/70 text-sm">
          <div>
            <p className="font-heading text-primary-foreground text-lg mb-2">Location</p>
            <p>123 SoHo Boulevard</p>
            <p>New York, NY 10012</p>
          </div>
          <div>
            <p className="font-heading text-primary-foreground text-lg mb-2">Hours</p>
            <p>Mon – Fri: 9am – 8pm</p>
            <p>Sat – Sun: 10am – 6pm</p>
          </div>
          <div>
            <p className="font-heading text-primary-foreground text-lg mb-2">Contact</p>
            <p>hello@soho-salon.com</p>
            <p>(212) 555-0190</p>
          </div>
        </div>
      </div>
    </section>
  );
}
