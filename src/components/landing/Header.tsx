import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { href: isHomePage ? "#inicio" : "/#inicio", label: "Inicio", isRoute: false },
    { href: isHomePage ? "#cotizador" : "/#cotizador", label: "Cotizador", isRoute: false },
    { href: isHomePage ? "#combos" : "/#combos", label: "Combos", isRoute: false },
    { href: isHomePage ? "#servicios" : "/#servicios", label: "Servicios", isRoute: false },
    { href: "/blog", label: "Blog", isRoute: true },
    { href: isHomePage ? "#contacto" : "/#contacto", label: "Contacto", isRoute: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">FF</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-xl text-foreground leading-none">
                {siteConfig.name}
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ) : isHomePage ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${siteConfig.phoneTel}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{siteConfig.phoneDisplay}</span>
            </a>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold">
              {isHomePage ? (
                <a href="#contacto">¡Cotiza Ahora!</a>
              ) : (
                <Link to="/#contacto">¡Cotiza Ahora!</Link>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ) : isHomePage ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold mt-2">
                {isHomePage ? (
                  <a href="#contacto" onClick={() => setIsMenuOpen(false)}>¡Cotiza Ahora!</a>
                ) : (
                  <Link to="/#contacto" onClick={() => setIsMenuOpen(false)}>¡Cotiza Ahora!</Link>
                )}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
