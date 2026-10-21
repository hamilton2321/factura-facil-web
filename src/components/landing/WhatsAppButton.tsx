import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.defaultWhatsAppMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group select-none"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30 pointer-events-none" />

        {/* Button */}
        <div className="relative flex items-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 sm:px-5 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-semibold text-sm hidden sm:block">¿Necesitas ayuda?</span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
