import { FileCheck, Network, ClipboardList, Wrench, type LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
}

/**
 * Servicios ofrecidos por Factura Fácil.
 */
export const servicesData: ServiceItem[] = [
  {
    icon: FileCheck,
    title: "Software de Facturación",
    description: "Sistema centralizado para gestionar ventas, inventarios y empleados.",
    highlight: "Gestión Total",
  },
  {
    icon: FileCheck,
    title: "Módulo de Facturación Electrónica",
    description: "Permite generar documentos electrónicos ilimitados bajo la normativa de la DIAN.",
    highlight: "Normativa DIAN",
  },
  {
    icon: Network,
    title: "Conexiones Multi Caja",
    description: "Configuración para varios equipos utilizando una misma base de datos SQL, permitiendo diferentes cierres de caja.",
    highlight: "Multi-Usuario",
  },
  {
    icon: ClipboardList,
    title: "Conexiones Remotas",
    description: "Sistema para realizar pedidos de manera ágil desde las mesas (comanderas digitales) y control a distancia.",
    highlight: "Agilidad",
  },
  {
    icon: Wrench,
    title: "Capacitación e Instalación",
    description: "Servicio incluido con la adquisición del software.",
    highlight: "Incluido",
  },
  {
    icon: Wrench,
    title: "Soporte Técnico",
    description: "Equipo disponible para resolución de problemas y maximización del uso del sistema.",
    highlight: "Soporte Experto",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description: "Servicio preventivo para evitar fallos técnicos y optimizar el rendimiento de los sistemas.",
    highlight: "Preventivo",
  },
];
