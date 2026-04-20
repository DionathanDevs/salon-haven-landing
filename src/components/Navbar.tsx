import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 border-b ${isScrolled
          ? "bg-background/95 border-border shadow-sm text-foreground"
          : "bg-foreground/10 border-primary-foreground/10 text-primary-foreground"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-2xl">
          {siteConfig.salonName}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm tracking-wide transition-colors ${isScrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="hero"
            size="sm"
            className={`rounded-full px-6 ${isScrolled ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
              }`}
            onClick={() => window.open(siteConfig.whatsappLink, '_blank')}
          >
            {siteConfig.bookNowText}
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
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
        <div className={`md:hidden backdrop-blur-lg border-t px-6 py-6 space-y-4 ${isScrolled
            ? "bg-background/95 border-border shadow-md"
            : "bg-foreground/95 border-primary-foreground/10"
          }`}>
          {siteConfig.navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block text-sm tracking-wide ${isScrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="hero"
            size="sm"
            className={`rounded-full px-6 w-full mt-2 ${isScrolled ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
              }`}
            onClick={() => window.open(siteConfig.whatsappLink, '_blank')}
          >
            {siteConfig.bookNowText}
          </Button>
        </div>
      )}
    </nav>
  );
}
