import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/10 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-2xl text-primary-foreground">
          SoHo
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-primary-foreground/70 hover:text-primary-foreground text-sm tracking-wide transition-colors"
            >
              {item}
            </a>
          ))}
          <Button variant="hero" size="sm" className="rounded-full px-6">
            Book Now
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-lg border-t border-primary-foreground/10 px-6 py-6 space-y-4">
          {["Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/70 hover:text-primary-foreground text-sm tracking-wide"
            >
              {item}
            </a>
          ))}
          <Button variant="hero" size="sm" className="rounded-full px-6 w-full mt-2">
            Book Now
          </Button>
        </div>
      )}
    </nav>
  );
}
