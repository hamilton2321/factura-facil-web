export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  initials: string;
  rating: number;
}

/**
 * Testimonios de clientes de Factura Fácil.
 */
export const testimonialsData: TestimonialItem[] = [
  {
    name: "Carlos Rodríguez",
    role: "Gerente",
    company: "Supermercado El Ahorro",
    content: "Desde que implementamos Factura Fácil, nuestros tiempos de cierre de caja se redujeron en un 50%. El soporte es excelente y la facturación electrónica es muy sencilla.",
    avatar: "/placeholder.svg",
    initials: "CR",
    rating: 5,
  },
  {
    name: "Ana María Martínez",
    role: "Propietaria",
    company: "Boutique Estilo",
    content: "La gestión de inventarios es lo que más valoro. Puedo ver en tiempo real qué prendas se venden más y reponer stock a tiempo. ¡Totalmente recomendado!",
    avatar: "/placeholder.svg",
    initials: "AM",
    rating: 5,
  },
  {
    name: "Juan Pablo Gómez",
    role: "Administrador",
    company: "Restaurante La Plaza",
    content: "Un sistema muy intuitivo. Mis meseros aprendieron a usarlo en minutos. La integración con la cocina y la facturación electrónica funciona a la perfección.",
    avatar: "/placeholder.svg",
    initials: "JP",
    rating: 5,
  },
  {
    name: "Diana Torres",
    role: "Dueña",
    company: "Ferretería Central",
    content: "Buscaba algo robusto para manejar miles de referencias y Factura Fácil cumplió con todo. Los reportes son muy detallados y me ayudan a tomar decisiones.",
    avatar: "/placeholder.svg",
    initials: "DT",
    rating: 4,
  },
];
