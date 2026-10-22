import {
  Printer,
  Scale,
  Monitor,
  Laptop,
  Smartphone,
  Barcode,
  Layers,
  type LucideIcon,
} from "lucide-react";

export interface HardwareItem {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  rawPrice: number;
  image: string;
  tag: string;
}

/**
 * Catálogo Oficial de Hardware y Periféricos Individuales Factura Fácil Colombia.
 * Sincronizado con los precios unitarios reales de Stitch.
 */
export const hardwareData: HardwareItem[] = [
  {
    icon: Scale,
    title: "Balanza Comercial HY918",
    description: "Balanza digital homologada con conexión serial directa al POS para venta por peso sin digitar.",
    price: "$649.000 COP",
    rawPrice: 649000,
    image: "/images/scale.webp",
    tag: "Fruvers & Carnicerías",
  },
  {
    icon: Smartphone,
    title: "Computador Touch Nuevo",
    description: "Terminal táctil capacitiva grado industrial para trabajo continuo en caja y comandas.",
    price: "$2.299.000 COP",
    rawPrice: 2299000,
    image: "/images/combo-touch.webp",
    tag: "Restaurantes & Bares",
  },
  {
    icon: Laptop,
    title: "Computador All in One Usado",
    description: "Equipo todo en uno corporativo remanufacturado clase A. Estética limpia sin cables.",
    price: "$979.000 COP",
    rawPrice: 979000,
    image: "/images/combo-allinone.webp",
    tag: "Ropa & Droguerías",
  },
  {
    icon: Monitor,
    title: "Computador Escritorio Usado",
    description: "Torre corporativa remanufacturada clase A con monitor LED, teclado y mouse.",
    price: "$689.000 COP",
    rawPrice: 689000,
    image: "/images/combo-desktop.webp",
    tag: "Comercio General",
  },
  {
    icon: Printer,
    title: "Impresora Térmica 80mm",
    description: "Conexión USB y Red LAN con corte automático de tirilla. Ideal para comandas de cocina y alto flujo.",
    price: "$389.000 COP",
    rawPrice: 389000,
    image: "/images/printer.webp",
    tag: "Auto-corte / Comandas",
  },
  {
    icon: Printer,
    title: "Impresora Térmica 58mm",
    description: "Impresora térmica compacta y económica para recibos de venta rápida. Incluye rollo de obsequio.",
    price: "$179.000 COP",
    rawPrice: 179000,
    image: "/images/printer.webp",
    tag: "Económica",
  },
  {
    icon: Printer,
    title: "Impresora Térmica Portátil",
    description: "Impresora inalámbrica Bluetooth para cobro móvil, preventistas y repartos.",
    price: "$249.000 COP",
    rawPrice: 249000,
    image: "/images/printer.webp",
    tag: "Inalámbrica Bluetooth",
  },
  {
    icon: Layers,
    title: "Cajón Monedero Metálico",
    description: "Cajón de trabajo pesado con apertura automática por impresora RJ11 y llave de 3 posiciones.",
    price: "$239.000 COP",
    rawPrice: 239000,
    image: "/images/drawer.webp",
    tag: "Estructura Acero",
  },
  {
    icon: Barcode,
    title: "Lector Código de Barras",
    description: "Lector láser rápido con base manos libres automática para lectura de códigos 1D y productos.",
    price: "$199.000 COP",
    rawPrice: 199000,
    image: "/images/scanner.webp",
    tag: "Con Base Manos Libres",
  },
];
