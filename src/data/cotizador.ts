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
  tag: string;
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
  subtitle: "Personaliza tu solución a la medida en tiempo real con precios oficiales de Factura Fácil Colombia.",
  disclaimer: "* Precios oficiales en pesos colombianos (COP). Aplica 10% de descuento automático en compras a partir de 2 cajas.",

  businessTypes: [
    {
      id: "supermercados",
      name: "Supermercados & Tiendas",
      description: "Venta rápida con código de barras, báscula y tirillas POS",
      icon: ShoppingCart,
      defaultBaseId: "allinone",
      tag: "Alto Flujo",
    },
    {
      id: "restaurantes",
      name: "Restaurantes & Cafés",
      description: "Gestión de comandas a cocina, mesas, propinas y cuentas separadas",
      icon: Utensils,
      defaultBaseId: "touch",
      tag: "Comanderas",
    },
    {
      id: "moda",
      name: "Moda & Calzado",
      description: "Control de tallas, colores, marcas y catálogo visual",
      icon: Shirt,
      defaultBaseId: "allinone",
      tag: "Tallas & Colores",
    },
    {
      id: "droguerias",
      name: "Droguerías & Farmacias",
      description: "Control estricto de lotes, fechas de vencimiento y recetas",
      icon: Pill,
      defaultBaseId: "allinone",
      tag: "Lotes & Vencimiento",
    },
    {
      id: "ferreterias",
      name: "Ferreterías & Repuestos",
      description: "Múltiples referencias técnicas, metros, kilos y unidades",
      icon: Wrench,
      defaultBaseId: "escritorio",
      tag: "Multi-Referencias",
    },
    {
      id: "servicios",
      name: "Servicios & Comercio General",
      description: "Atención al público, comisiones, agendas y ventas minoristas",
      icon: Store,
      defaultBaseId: "allinone",
      tag: "Comercio Ágil",
    },
  ] as BusinessType[],

  baseOptions: [
    {
      id: "solo-software",
      name: "Software con Facturación DIAN",
      tagline: "Si ya tienes tu propio computador",
      description: "Licencia completa de Software POS Factura Fácil con Facturación Electrónica DIAN y soporte ilimitado.",
      price: 799000,
      icon: Sparkles,
      includes: [
        "Software POS Licencia Vitalicia",
        "Módulo Facturación Electrónica DIAN",
        "Instalación y configuración remota",
        "Capacitación inicial para cajeros",
      ],
    },
    {
      id: "escritorio",
      name: "PC Escritorio Usado Corporativo",
      tagline: "Resistencia para trabajo continuo",
      description: "Torre corporativa remanufacturada clase A + Monitor LED + Teclado y mouse configurados.",
      price: 689000,
      icon: Monitor,
      includes: [
        "PC Torre Corporativo Remanufacturado",
        "Monitor LED + Teclado y Mouse",
        "Software POS DIAN configurado",
        "1 año de garantía en hardware",
      ],
    },
    {
      id: "allinone",
      name: "PC All in One Usado Corporativo",
      tagline: "Elegancia limpia sin cables en mostrador",
      description: "Equipo todo en uno remanufacturado clase A. Estética profesional ideal para boutiques y droguerías.",
      price: 979000,
      popular: true,
      icon: Laptop,
      includes: [
        "PC All In One Corporativo Integrado",
        "Software POS DIAN configurado",
        "1 año de garantía en hardware",
        "Capacitación y soporte incluido",
      ],
    },
    {
      id: "touch",
      name: "Computador Touch Nuevo",
      tagline: "Velocidad total para restaurantes y bares",
      description: "Terminal punto de venta con pantalla táctil capacitiva grado industrial, totalmente nueva.",
      price: 2299000,
      icon: Smartphone,
      includes: [
        "Pantalla Táctil Touch POS 100% Nueva",
        "Software POS optimizado para toque",
        "1 año de garantía en hardware",
        "Soporte técnico prioritario",
      ],
    },
  ] as BaseOption[],

  addons: [
    {
      id: "impresora-58",
      name: "Impresora Térmica 58mm",
      description: "Recibos y tirillas de venta rápida de bajo costo",
      price: 179000,
      icon: Printer,
      defaultSelected: true,
    },
    {
      id: "impresora-80",
      name: "Impresora Térmica 80mm (Auto-corte)",
      description: "Corte automático de papel, conexión USB y Red LAN para comandas",
      price: 389000,
      icon: Printer,
    },
    {
      id: "cajon",
      name: "Cajón Monedero Metálico RJ11",
      description: "Estructura de acero con apertura automática por tirilla",
      price: 239000,
      icon: Layers,
      defaultSelected: true,
    },
    {
      id: "lector",
      name: "Lector Código de Barras + Base",
      description: "Láser de alta velocidad con base manos libres automática",
      price: 199000,
      icon: Barcode,
      defaultSelected: true,
    },
    {
      id: "balanza",
      name: "Balanza Comercial HY918",
      description: "Conexión directa serial al sistema POS para venta por peso",
      price: 649000,
      icon: Scale,
      recommendedFor: ["supermercados"],
    },
    {
      id: "impresora-portatil",
      name: "Impresora Térmica Portátil",
      description: "Conexión Bluetooth para cobro móvil y preventistas",
      price: 249000,
      icon: Printer,
    },
  ] as HardwareAddon[],

  includedBenefits: [
    "Cumplimiento 100% DIAN (Resolución 000042 y Anexo 1.9)",
    "Software POS Licencia Vitalicia (Sin cobro por factura)",
    "Garantía de 1 año con respaldo en Colombia",
    "Capacitación guiada para ti y tu equipo",
  ],
};
