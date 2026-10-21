import { useState } from "react";
import { Send, User, Mail, Phone, Building2, MessageSquare, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { syncLeadToTwenty } from "@/services/crm";
import { siteConfig } from "@/data/siteConfig";
import { combosData } from "@/data/combos";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    combo: "",
    message: "",
  });

  const combos = [
    ...combosData.map((c) => ({ value: c.id, label: c.title })),
    { value: "software", label: "Solo Software" },
    { value: "otro", label: "Otro / Consulta general" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Intenta sincronizar con Twenty CRM (con timeout de 800ms para asegurar fluidez)
    try {
      await Promise.race([
        syncLeadToTwenty(formData),
        new Promise((resolve) => setTimeout(resolve, 800))
      ]);
    } catch (err) {
      console.warn("CRM sync warning:", err);
    }

    const phoneNumber = siteConfig.whatsappNumber;
    const selectedCombo = combos.find((c) => c.value === formData.combo)?.label || formData.combo || "Consulta general";
    const message = `*Nueva Solicitud desde la Web* 🚀\n\n*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*Teléfono:* ${formData.phone}\n*Negocio:* ${formData.business || "No especificado"}\n*Combo de Interés:* ${selectedCombo}\n\n*Mensaje:* ${formData.message || "Sin comentarios adicionales"}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: "¡Solicitud procesada!",
      description: "Te estamos conectando con un asesor por WhatsApp...",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      business: "",
      combo: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              ¿Listo para empezar?
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Solicita tu cotización sin compromiso
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cuéntanos sobre tu negocio y te enviaremos una propuesta personalizada
              adaptada a tus necesidades específicas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Llámanos</p>
                  <a href={`tel:${siteConfig.phoneTel}`} className="font-display font-semibold text-foreground hover:text-accent transition-colors">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Escríbenos</p>
                  <a href={`mailto:${siteConfig.email}`} className="font-display font-semibold text-foreground hover:text-accent transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background rounded-2xl p-8 shadow-xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    Nombre completo
                  </label>
                  <Input
                    required
                    name="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    Correo electrónico
                  </label>
                  <Input
                    type="email"
                    required
                    name="email"
                    placeholder="tu@negocio.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    Teléfono / WhatsApp
                  </label>
                  <Input
                    type="tel"
                    required
                    name="phone"
                    placeholder="Ej. 300 123 4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    Nombre del negocio
                  </label>
                  <Input
                    placeholder="Mi Negocio o Razón Social"
                    name="business"
                    value={formData.business}
                    onChange={(e) => handleInputChange("business", e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Package className="w-4 h-4 text-muted-foreground" />
                  ¿Qué combo o producto te interesa?
                </label>
                <div className="relative">
                  <Input
                    type="hidden"
                    name="combo"
                    value={formData.combo}
                  />
                  <Select value={formData.combo} onValueChange={(value) => handleInputChange("combo", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecciona un combo o servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {combos.map((combo) => (
                        <SelectItem key={combo.value} value={combo.value}>
                          {combo.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  Mensaje (opcional)
                </label>
                <Textarea
                  placeholder="Cuéntanos más sobre tu negocio, ciudad o necesidades específicas..."
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                {isSubmitting ? (
                  "Procesando solicitud..."
                ) : (
                  <>
                    Solicitar Cotización por WhatsApp
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
