import {
  Utensils,
  ShoppingCart,
  Shirt,
  Pill,
  Wrench,
  Store,
  Monitor,
  Laptop,
  Smartphone,
  Sparkles,
  Printer,
  Barcode,
  Layers,
  Scale,
  type LucideIcon,
} from "lucide-react";

export interface BusinessType {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  defaultBaseId: string;
}

export interface BaseOption {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  popular?: boolean;
  icon: LucideIcon;
  includes: string[];
}

export interface HardwareAddon {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: LucideIcon;
  recommendedFor?: string[];
  defaultSelected?: boolean;
}

export const cotizadorData = {
  title: "Cotizador Interactivo de Sistemas POS",
  subtitle: "Personaliza tu solución a la medida en 3 simples pasos. Obtén una estimación instantánea y envíala a nuestros asesores.",
  disclaimer: "* Precios de referencia estimados en pesos colombianos (COP). La cotización final puede incluir descuentos por volumen o promociones vigentes al momento del contacto con un asesor.",

  businessTypes: [
    {
      id: "restaurante",
      name: "Restaurantes & Cafeterías",
      description: "Manejo de comandas, mesas y propinas",
      icon: Utensils,
      defaultBaseId: "touch",
    },
    {
      id: "minimercado",
      name: "Minimercados & Supermercados",
      description: "Alta rotación de productos e inventarios",
      icon: ShoppingCart,
      defaultBaseId: "escritorio",
    },
    {
      id: "retail",
      name: "Ropa, Calzado & Accesorios",
      description: "Control de tallas, colores y marcas",
      icon: Shirt,
      defaultBaseId: "allinone",
    },
    {
      id: "drogueria",
      name: "Droguerías & Farmacias",
      description: "Fechas de vencimiento y lotes",
      icon: Pill,
      defaultBaseId: "allinone",
    },
    {
      id: "ferreteria",
      name: "Ferreterías & Repuestos",
      description: "Múltiples referencias y medidas",
      icon: Wrench,
      defaultBaseId: "escritorio",
    },
    {
      id: "otro",
      name: "Comercio General",
      description: "Servicios y ventas minoristas",
      icon: Store,
      defaultBaseId: "allinone",
    },
  ] as BusinessType[],

  baseOptions: [
    {
      id: "solo-software",
      name: "Solo Software POS DIAN",
      tagline: "Si ya tienes computador",
      description: "Licencia de software POS en la nube o local con módulo de Facturación Electrónica DIAN e inventarios.",
      price: 490000,
      icon: Sparkles,
      includes: [
        "Software POS Factura Fácil",
        "Módulo DIAN Documento Equivalente",
        "Instalación y configuración remota",
        "Capacitación inicial",
      ],
    },
    {
      id: "escritorio",
      name: "Combo PC Torre Corporativa",
      tagline: "Resistencia y durabilidad",
      description: "Computador corporativo de alta durabilidad con monitor, teclado, mouse y software configurado.",
      price: 1190000,
      icon: Monitor,
      includes: [
        "Computador Torre + Monitor",
        "Software POS DIAN configurado",
        "Garantía 1 año en hardware",
        "Capacitación y soporte",
      ],
    },
    {
      id: "allinone",
      name: "Combo PC All-In-One",
      tagline: "Elegancia y ahorro de espacio",
      description: "Equipo todo en uno moderno, ideal para mostradores de atención al cliente y boutiques.",
      price: 1490000,
      popular: true,
      icon: Laptop,
      includes: [
        "Computador All In One integrado",
        "Software POS DIAN configurado",
        "Garantía 1 año en hardware",
        "Capacitación y soporte",
      ],
    },
    {
      id: "touch",
      name: "Combo Terminal Táctil Touch",
      tagline: "Velocidad total de atención",
      description: "Terminal punto de venta con pantalla táctil capacitiva, diseñada para trabajo pesado y rapidez.",
      price: 1890000,
      icon: Smartphone,
      includes: [
        "Pantalla Táctil Industrial POS",
        "Software POS DIAN optimizado touch",
        "Garantía 1 año en hardware",
        "Capacitación y soporte",
      ],
    },
  ] as BaseOption[],

  addons: [
    {
      id: "impresora-58",
      name: "Impresora Térmica 58mm",
      description: "Recibos y tirillas rápidas de bajo costo",
      price: 160000,
      icon: Printer,
      defaultSelected: true,
    },
    {
      id: "impresora-80",
      name: "Impresora Térmica 80mm (Auto-corte)",
      description: "Corte automático de papel, ideal para comandas",
      price: 290000,
      icon: Printer,
    },
    {
      id: "cajon",
      name: "Cajón Monedero Metálico",
      description: "Apertura automática con cerradura de seguridad",
      price: 190000,
      icon: Layers,
      defaultSelected: true,
    },
    {
      id: "lector",
      name: "Lector Código de Barras + Base",
      description: "Escaneo láser automático manos libres",
      price: 140000,
      icon: Barcode,
      defaultSelected: true,
    },
    {
      id: "balanza",
      name: "Balanza Comercial Digital",
      description: "Pesaje conectado directamente al sistema POS",
      price: 390000,
      icon: Scale,
      recommendedFor: ["minimercado", "fruver"],
    },
  ] as HardwareAddon[],

  includedBenefits: [
    "Cumplimiento 100% normativa DIAN (Documento Equivalente POS)",
    "Instalación y puesta en marcha personalizada",
    "Garantía de 1 año con respaldo en Colombia",
    "Capacitación guiada para ti y tu equipo",
  ],
};
