import { Monitor, Laptop, Smartphone, Scale, type LucideIcon } from "lucide-react";

export interface ComboItem {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
  featured: boolean;
  image: string;
  icon: LucideIcon;
}

/**
 * Catálogo de Combos POS.
 * Para agregar un combo nuevo o cambiar precios/imágenes, simplemente edita esta lista.
 */
export const combosData: ComboItem[] = [
  {
    id: "escritorio",
    icon: Monitor,
    title: "Combo PC Escritorio",
    subtitle: "Incluye computador corporativo de torre, software, impresora térmica de 58mm, cajón monedero y lector de código de barras.",
    items: ["Computador de Torre", "Software POS", "Impresora Térmica 58mm", "Cajón Monedero", "Lector Código Barras"],
    featured: false,
    image: "/images/combo-desktop.webp",
  },
  {
    id: "allinone",
    icon: Laptop,
    title: "Combo PC All In One",
    subtitle: "Incluye computador corporativo 'todo en uno', software, impresora térmica de 58mm, cajón monedero y lector de código de barras.",
    items: ["PC All In One", "Software POS", "Impresora Térmica 58mm", "Cajón Monedero", "Lector Código Barras"],
    featured: true,
    image: "/images/combo-allinone.webp",
  },
  {
    id: "touch",
    icon: Smartphone,
    title: "Combo PC Touch",
    subtitle: "Incluye computador táctil, software, impresora térmica de 58mm, cajón monedero y lector de código de barras.",
    items: ["PC Táctil", "Software POS", "Impresora Térmica 58mm", "Cajón Monedero", "Lector Código Barras"],
    featured: false,
    image: "/images/combo-touch.webp",
  },
  {
    id: "balanza",
    icon: Scale,
    title: "Combo PC + Balanza",
    subtitle: "Incluye computador corporativo, software, impresora térmica de 58mm, cajón monedero, lector de código de barras y balanza HY918.",
    items: ["Computador Corporativo", "Software POS", "Impresora Térmica 58mm", "Balanza HY918", "Cajón Monedero"],
    featured: false,
    image: "/images/combo-scale.webp",
  },
];
