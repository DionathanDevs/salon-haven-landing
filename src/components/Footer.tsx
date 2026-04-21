import { siteConfig } from "@/config/site";

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="bg-background border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-foreground/70 text-sm">
        <p className="font-heading text-foreground text-lg">{siteConfig.salonName}</p>
        <p>&copy; {new Date().getFullYear()} {siteConfig.salonFullName}. {footer.copyrightText}</p>
      </div>
    </footer>
  );
}
