export function Footer() {
  return (
    <footer className="bg-foreground border-t border-primary-foreground/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/40 text-sm">
        <p className="font-heading text-primary-foreground/60 text-lg">SoHo</p>
        <p>&copy; {new Date().getFullYear()} SoHo Salon. All rights reserved.</p>
      </div>
    </footer>
  );
}
