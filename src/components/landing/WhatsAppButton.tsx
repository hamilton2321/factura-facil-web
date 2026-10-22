import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.defaultWhatsAppMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 lg:right-auto lg:left-6 z-50 group select-none"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30 pointer-events-none" />

        {/* Circular Button (Bolita) */}
        <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
