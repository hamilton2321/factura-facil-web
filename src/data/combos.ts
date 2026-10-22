import { Monitor, Laptop, Smartphone, Scale, type LucideIcon } from "lucide-react";

export interface ComboItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  regularPrice?: string;
  savings?: string;
  items: string[];
  featured: boolean;
  image: string;
  icon: LucideIcon;
  badge?: string;
  sectorTag?: string;
}

/**
 * Catálogo Oficial de Combos POS Factura Fácil Colombia (Sincronizado con Stitch).
 * Precios reales en pesos colombianos (COP) con Hardware + Software POS Licencia Vitalicia.
 */
export const combosData: ComboItem[] = [
  {
    id: "escritorio",
    icon: Monitor,
    title: "Combo PC Escritorio",
    subtitle: "Incluye computador corporativo remanufacturado, impresora térmica 58mm, cajón monedero, lector de código de barras y software POS Licencia Vitalicia.",
    price: "$1.599.000 COP",
    savings: "Ahorras $51.000",
    sectorTag: "Ferreterías & Comercio General",
    items: [
      "PC de Escritorio Remanufacturado",
      "Software POS Licencia Vitalicia",
      "Impresora Térmica 58mm Nueva",
      "Cajón Monedero Metálico Nuevo",
      "Lector Código de Barras Nuevo",
    ],
    featured: false,
    image: "/images/combo-desktop.webp",
  },
  {
    id: "allinone",
    icon: Laptop,
    title: "Combo PC All in One",
    subtitle: "Incluye computador All in One remanufacturado, impresora térmica 58mm, cajón monedero, lector de código de barras y software POS Licencia Vitalicia.",
    price: "$2.019.000 COP",
    savings: "Ahorras $181.000",
    badge: "Más Popular",
    sectorTag: "Boutiques, Ropa & Droguerías",
    items: [
      "PC All in One Remanufacturado",
      "Software POS Licencia Vitalicia",
      "Impresora Térmica 58mm Nueva",
      "Cajón Monedero Metálico Nuevo",
      "Lector Código de Barras Nuevo",
    ],
    featured: true,
    image: "/images/combo-allinone.webp",
  },
  {
    id: "touch",
    icon: Smartphone,
    title: "Combo PC Touch",
    subtitle: "Incluye computador de pantalla táctil totalmente nuevo, impresora térmica 58mm, cajón monedero, lector de código de barras y software POS Licencia Vitalicia.",
    price: "$3.209.000 COP",
    savings: "Ahorras $236.000",
    badge: "Gastronómico Pro",
    sectorTag: "Restaurantes, Bares & Cafés",
    items: [
      "PC Pantalla Táctil Touch Nuevo",
      "Software POS Licencia Vitalicia",
      "Impresora Térmica 58mm Nueva",
      "Cajón Monedero Metálico Nuevo",
      "Lector Código de Barras Nuevo",
    ],
    featured: false,
    image: "/images/combo-touch.webp",
  },
  {
    id: "balanza",
    icon: Scale,
    title: "Combo PC + Balanza",
    subtitle: "Incluye computador corporativo remanufacturado, balanza comercial HY918 nueva, impresora térmica 58mm, cajón monedero, lector de código de barras y software POS Licencia Vitalicia.",
    price: "$2.029.000 COP",
    savings: "Ahorras $71.000",
    badge: "Venta por Peso",
    sectorTag: "Minimarkets, Fruvers & Carnicerías",
    items: [
      "Computador Corporativo Remanufacturado",
      "Balanza Comercial HY918 Nueva",
      "Software POS Licencia Vitalicia",
      "Impresora Térmica 58mm Nueva",
      "Cajón Monedero + Lector Barras",
    ],
    featured: false,
    image: "/images/combo-scale.webp",
  },
];
