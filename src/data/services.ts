import { FileCheck, BarChart3, Network, Headphones, ShieldCheck, Globe, type LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  highlight: string;
  features: string[];
}

/**
 * Catálogo Oficial de Software y Servicios DIAN Factura Fácil Colombia (Sincronizado con Stitch).
 */
export const servicesData: ServiceItem[] = [
  {
    icon: FileCheck,
    title: "Software con Facturación Electrónica DIAN",
    description: "Cumplimiento fiscal DIAN completo bajo la Resolución 000042 y Anexo 1.9. Genera documentos electrónicos y POS ilimitados.",
    price: "$799.000 COP",
    highlight: "100% Homologado DIAN",
    features: [
      "Validación previa CUFE en tiempo real",
      "Documentos y tirillas ilimitadas",
      "Firma y certificado digital incluido",
    ],
  },
  {
    icon: BarChart3,
    title: "Software Facturación POS Básico",
    description: "Ideal para control interno de ventas, caja e inventarios antes de pasar a la obligatoriedad electrónica.",
    price: "$649.000 COP",
    highlight: "Gestión Interna",
    features: [
      "Kardex y control de stock en vivo",
      "Cierres de caja (X y Z)",
      "Reportes de ganancias por producto",
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
