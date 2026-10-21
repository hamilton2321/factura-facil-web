import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const quickLinks = [
    { href: isHomePage ? "#inicio" : "/#inicio", label: "Inicio" },
    { href: isHomePage ? "#combos" : "/#combos", label: "Combos" },
    { href: isHomePage ? "#servicios" : "/#servicios", label: "Servicios" },
    { href: "/blog", label: "Blog" },
    { href: isHomePage ? "#contacto" : "/#contacto", label: "Contacto" },
  ];

  const services = [
    "Software POS",
    "Facturación Electrónica DIAN",
    "Hardware Comercial",
    "Mantenimiento Preventivo",
    "Soporte Técnico",
  ];

  return (
    <footer className="bg-primary text-primary-foreground w-full overflow-hidden">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground font-display font-bold text-xl">FF</span>
              </div>
              <span className="font-display font-bold text-xl">{siteConfig.name}</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed text-sm sm:text-base max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.socialLinks.facebook} className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={siteConfig.socialLinks.instagram} className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.socialLinks.youtube} className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 sm:mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {isHomePage && link.href.startsWith("#") ? (
                    <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm sm:text-base">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm sm:text-base">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 sm:mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-primary-foreground/70 text-sm sm:text-base">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="min-w-0">
            <h4 className="font-display font-bold text-lg mb-4 sm:mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${siteConfig.phoneTel}`} className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm sm:text-base">
                  <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li className="min-w-0">
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm sm:text-base min-w-0">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-primary-foreground/70 text-sm sm:text-base">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-accent" />
                  <span>{siteConfig.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-primary-foreground/60 text-center sm:text-left">
            <p>&copy; {currentYear} {siteConfig.name}. Todos los derechos reservados.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-accent transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
