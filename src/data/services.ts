import { FileCheck, BarChart3, Network, Globe, type LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  highlight: string;
  features: string[];
}

/**
 * Catálogo Oficial de Software y Servicios Factura Fácil Colombia.
 * - Software POS Vitalicio: $650.000 COP (pago único)
 * - Facturación Electrónica DIAN: $750.000 COP / año (o promo +$100.000 COP primer año en combos)
 */
export const servicesData: ServiceItem[] = [
  {
    icon: BarChart3,
    title: "Software POS Licencia Vitalicia",
    description: "Ideal para el control completo de tu negocio: ventas rápidas, inventarios, kardex y arqueos de caja sin mensualidades obligatorias.",
    price: "$650.000 COP",
    highlight: "Pago Único Vitalicio",
    features: [
      "Licencia de por vida sin mensualidades",
      "Control de stock, kardex y alertas de inventario",
      "Cierres de caja diarios (X y Z)",
    ],
  },
  {
    icon: FileCheck,
    title: "Facturación Electrónica DIAN (Anualidad)",
    description: "Cumplimiento fiscal completo bajo Resolución DIAN vigente. Documentos ilimitados. (¡Llévalo por solo +$100.000 el 1er año al comprar tu combo!).",
    price: "$750.000 COP / año",
    highlight: "100% Homologado DIAN",
    features: [
      "Promo en combo: solo +$100.000 COP primer año",
      "Validación previa CUFE y XML en tiempo real",
      "Firma digital y soporte técnico DIAN incluido",
    ],
  },
  {
    icon: Network,
    title: "Conexiones Multi-Caja",
    description: "Habilita múltiples cajas de cobro sincronizadas a una misma base de datos con cierres independientes por cajero.",
    price: "$349.000 COP",
    highlight: "Multi-Usuario",
    features: [
      "Base de datos centralizada",
      "Cajas simultáneas de despacho",
      "Permisos por perfil de empleado",
    ],
  },
  {
    icon: Globe,
    title: "Conexiones Remotas & Comandas",
    description: "Monitoreo y administración a distancia. Enlace de comandas a cocina y control entre sucursales.",
    price: "$99.000 COP",
    highlight: "Control a Distancia",
    features: [
      "Comanderas digitales para meseros",
      "Monitoreo desde celular o tablet",
      "Informes consolidados de sucursales",
    ],
  },
];
