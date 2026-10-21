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
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">FF</span>
              </div>
              <span className="font-display font-bold text-xl">{siteConfig.name}</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
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
            <h4 className="font-display font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {isHomePage && link.href.startsWith("#") ? (
                    <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-primary-foreground/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${siteConfig.phoneTel}`} className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {currentYear} {siteConfig.name}. Todos los derechos reservados.</p>
            <div className="flex gap-6">
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
