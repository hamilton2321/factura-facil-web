import {
  Printer,
  Calculator,
  ScanBarcode,
  Scale,
  Monitor,
  Laptop,
  type LucideIcon,
} from "lucide-react";

export interface HardwareItem {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  image: string;
}

/**
 * Catálogo de Hardware y Periféricos Comerciales.
 * Puedes modificar nombres, descripciones, precios o fotos aquí.
 */
export const hardwareData: HardwareItem[] = [
  {
    icon: Monitor,
    title: "Computador de Escritorio",
    description: "Equipo de torre con potencia y fácil conexión de periféricos.",
    price: "Consultar",
    image: "/images/combo-desktop.webp",
  },
  {
    icon: Laptop,
    title: "Computador All In One",
    description: "Equipo integrado de diseño elegante y ahorro de espacio.",
    price: "Consultar",
    image: "/images/combo-allinone.webp",
  },
  {
    icon: Printer,
    title: "Impresora Térmica 58mm",
    description: "Imprime en papel térmico de 58mm e incluye un rollo de papel de obsequio.",
    price: "Desde $150.000",
    image: "/images/printer.webp",
  },
  {
    icon: Printer,
    title: "Impresora Térmica 80mm",
    description: "Conexión USB/LAN, ideal para comandas en red y cuenta con corte automático de recibos.",
    price: "Desde $250.000",
    image: "/images/printer.webp",
  },
  {
    icon: Printer,
    title: "Impresora Térmica Portátil",
    description: "Especializada en la impresión de etiquetas adhesivas de 58mm; incluye cargador USB.",
    price: "Desde $180.000",
    image: "/images/printer.webp",
  },
  {
    icon: Calculator,
    title: "Cajón Monedero",
    description: "Estructura metálica con 4 puestos, llave de seguridad y testeado para más de 2 millones de aperturas.",
    price: "Desde $180.000",
    image: "/images/drawer.webp",
  },
  {
    icon: ScanBarcode,
    title: "Lector de Barras",
    description: "Escáner láser con base ajustable y vida útil de hasta 10 millones de escaneos.",
    price: "Desde $120.000",
    image: "/images/scanner.webp",
  },
  {
    icon: Scale,
    title: "Balanza HY918",
    description: "Conexión RS-232/USB con capacidad máxima de 30kg.",
    price: "Desde $450.000",
    image: "/images/scale.webp",
  },
];
