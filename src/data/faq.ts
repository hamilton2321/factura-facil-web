export interface FAQItem {
  question: string;
  answer: string;
  value: string;
}

/**
 * Preguntas Frecuentes.
 * Edita o añade preguntas y respuestas según las dudas más comunes de tus clientes.
 */
export const faqsData: FAQItem[] = [
  {
    question: "¿Es obligatoria la Facturación Electrónica?",
    answer: "Sí, la DIAN exige la facturación electrónica para la mayoría de comercios y profesionales en Colombia. Factura Fácil te ayuda a cumplir con este requisito de manera automática y sencilla.",
    value: "item-1",
  },
  {
    question: "¿El sistema funciona sin internet?",
    answer: "Nuestro sistema POS de escritorio puede funcionar offline para ventas básicas, y se sincroniza automáticamente con la nube cuando recuperas la conexión. Sin embargo, para emitir facturas electrónicas a la DIAN en tiempo real, se requiere internet.",
    value: "item-2",
  },
  {
    question: "¿Qué incluye el soporte técnico?",
    answer: "Incluimos soporte prioritario por WhatsApp y teléfono en horario laboral. Te ayudamos con la instalación, capacitación inicial de tu personal y resolución de dudas del día a día.",
    value: "item-3",
  },
  {
    question: "¿Puedo usar mi propio computador?",
    answer: "¡Sí! Factura Fácil es compatible con cualquier computador con Windows 10/11. Puedes adquirir solo la licencia del software o comprar uno de nuestros combos con hardware incluido.",
    value: "item-4",
  },
  {
    question: "¿Tienen planes mensuales o es un pago único?",
    answer: "Manejamos ambas modalidades según tu necesidad. Licencias anuales muy económicas o planes mensuales con todo incluido. Cotiza para darte la mejor opción.",
    value: "item-5",
  },
];
