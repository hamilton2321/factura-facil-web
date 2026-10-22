import { useState, useMemo } from "react";
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Send,
  Sparkles,
  HelpCircle,
  Plus,
  Minus,
  Check,
  User,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Eye,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/data/siteConfig";
import { cotizadorData } from "@/data/cotizador";
import { syncLeadToTwenty } from "@/services/crm";

const formatCOP = (amount: number) => {
  return "$" + amount.toLocaleString("es-CO");
};

export interface CotizadorProps {
  isEmbedded?: boolean;
}

export default function Cotizador({ isEmbedded = false }: CotizadorProps) {
  const { toast } = useToast();

  // State
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>("supermercados");
  const [selectedBaseId, setSelectedBaseId] = useState<string>("allinone");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "impresora-58",
    "cajon",
    "lector",
  ]);
  const [cajasCount, setCajasCount] = useState<number>(1);

  // Modal State for CRM lead submission
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  // Derived current selections
  const currentBusiness = useMemo(
    () => cotizadorData.businessTypes.find((b) => b.id === selectedBusinessType) || cotizadorData.businessTypes[0],
    [selectedBusinessType]
  );

  const currentBase = useMemo(
    () => cotizadorData.baseOptions.find((b) => b.id === selectedBaseId) || cotizadorData.baseOptions[0],
    [selectedBaseId]
  );

  // Calculations with 10% Multicaja discount (from Stitch specs)
  const addonsTotal = useMemo(() => {
    return selectedAddons.reduce((sum, addonId) => {
      const item = cotizadorData.addons.find((a) => a.id === addonId);
      return sum + (item ? item.price : 0);
    }, 0);
  }, [selectedAddons]);

  const unitBasePrice = currentBase.price;
  const unitTotal = unitBasePrice + addonsTotal;
  const subtotalAll = unitTotal * cajasCount;
  
  // 10% discount starting at 2 cash registers
  const discountRate = cajasCount >= 2 ? 0.10 : 0.0;
  const discountAmount = Math.round(subtotalAll * discountRate);
  const grandTotal = subtotalAll - discountAmount;

  // Handlers
  const handleSelectBusiness = (businessId: string) => {
    setSelectedBusinessType(businessId);
    const target = cotizadorData.businessTypes.find((b) => b.id === businessId);
    if (target && target.defaultBaseId) {
      setSelectedBaseId(target.defaultBaseId);
    }
  };

  const handleToggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  // WhatsApp Message Generator
  const generateWhatsAppMessage = () => {
    const addonsListText = selectedAddons.length > 0
      ? selectedAddons
          .map((id) => {
            const item = cotizadorData.addons.find((a) => a.id === id);
            return item ? `  • ${item.name} (${formatCOP(item.price)})` : "";
          })
          .filter(Boolean)
          .join("\n")
      : "  • Ninguno adicional";

    const discountText = discountRate > 0
      ? `\n🎉 Descuento Multicaja (10%): -${formatCOP(discountAmount)} COP`
      : "";

    const text =
      `¡Hola ${siteConfig.name}! 🚀 Acabo de armar mi cotización oficial en la página web:\n\n` +
      `🏢 Tipo de negocio: ${currentBusiness.name}\n` +
      `💻 Equipo base: ${currentBase.name} (${formatCOP(currentBase.price)})\n` +
      `🖨️ Periféricos seleccionados:\n${addonsListText}\n` +
      `📦 Puntos de venta (cajas): ${cajasCount} ${cajasCount === 1 ? "caja" : "cajas"}\n` +
      `🎁 Incluye: Software POS Licencia Vitalicia ($0) + Certificado DIAN ($0)${discountText}\n` +
      `💰 Total inversión estimada: ${formatCOP(grandTotal)} COP\n\n` +
      `¿Me podrían confirmar disponibilidad, medios de pago y tiempos de entrega? Gracias.`;

    return encodeURIComponent(text);
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${generateWhatsAppMessage()}`;
    window.open(url, "_blank");
  };

  // Submit Lead to CRM (Twenty CRM)
  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!leadForm.name || !leadForm.phone) {
      toast({
        title: "Campos requeridos",
        description: "Por favor ingresa al menos tu nombre y número de teléfono.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const quotationSummary =
      `Cotización Oficial Web:\n` +
      `- Negocio: ${currentBusiness.name}\n` +
      `- Base: ${currentBase.name} (${formatCOP(currentBase.price)})\n` +
      `- Periféricos: ${selectedAddons.join(", ")}\n` +
      `- Cajas: ${cajasCount}\n` +
      `- Descuento Multicaja: ${discountRate > 0 ? `-${formatCOP(discountAmount)} COP (10%)` : "No aplica"}\n` +
      `- Total Final: ${formatCOP(grandTotal)} COP\n` +
      `- Ciudad: ${leadForm.city || "No especificada"}`;

    try {
      await syncLeadToTwenty({
        name: leadForm.name,
        email: leadForm.email || "sin_correo@cliente.com",
        phone: leadForm.phone,
        business: `${leadForm.city ? `[${leadForm.city}] ` : ""}${currentBusiness.name}`,
        combo: `Cotizador (${currentBase.name})`,
        message: quotationSummary,
      });

      toast({
        title: "¡Cotización enviada con éxito!",
        description: "Un asesor comercial se comunicará contigo en breve para brindarte atención personalizada.",
      });

      setIsModalOpen(false);

      const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${generateWhatsAppMessage()}`;
      window.open(url, "_blank");
    } catch {
      toast({
        title: "Atención",
        description: "Se guardó tu información. Abriendo WhatsApp para coordinar tu atención...",
      });
      const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${generateWhatsAppMessage()}`;
      window.open(url, "_blank");
      setIsModalOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSummary = () => {
    const el = document.getElementById("resumen-cotizacion");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const content = (
    <div className={`w-full max-w-full min-w-0 relative ${isEmbedded ? "pb-24 lg:pb-0" : "section-container pb-24 lg:pb-0"}`}>
      {/* Section Header (Solo si no está embebido) */}
      {!isEmbedded && (
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in px-2">
          <Badge className="mb-4 bg-accent/15 text-accent-foreground border-accent/20 px-3 py-1 text-sm font-semibold inline-flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-accent" />
            Configurador Oficial a la Medida
          </Badge>
          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            {cotizadorData.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg">
            {cotizadorData.subtitle}
          </p>
        </div>
      )}

      {/* Main Grid: Steps (Left/Top) & Live Summary (Right/Bottom) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full max-w-full min-w-0">
        {/* Steps Column */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-8 w-full max-w-full min-w-0">
          {/* STEP 1: Tipo de Negocio */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-7 border border-border shadow-sm w-full max-w-full min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full gradient-primary text-primary-foreground font-bold flex items-center justify-center text-xs sm:text-sm shrink-0">
                  1
                </span>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-foreground truncate">
                    ¿Cuál es tu tipo de negocio?
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">
                    Auto-configuramos el hardware y módulos DIAN recomendados
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold text-[11px] self-start sm:self-auto">
                <Sparkles className="w-3 h-3 text-accent" /> Preconfiguración Activa
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 w-full min-w-0">
              {cotizadorData.businessTypes.map((biz) => {
                const Icon = biz.icon;
                const isSelected = selectedBusinessType === biz.id;
                return (
                  <button
                    key={biz.id}
                    type="button"
                    onClick={() => handleSelectBusiness(biz.id)}
                    className={`text-left p-3 sm:p-4 rounded-xl border transition-all flex flex-col justify-between relative min-w-0 ${
                      isSelected
                        ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-sm"
                        : "border-border/80 hover:border-primary/50 hover:bg-muted/50 bg-background"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </div>
                    )}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2.5 shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 w-full">
                      <div className="font-semibold text-xs sm:text-sm text-foreground leading-snug line-clamp-2">
                        {biz.name}
                      </div>
                      <span className="inline-block mt-1 text-[10px] font-bold text-accent bg-accent/10 px-1.5 py-0.2 rounded">
                        {biz.tag}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: Equipo Base & Software */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-7 border border-border shadow-sm w-full max-w-full min-w-0">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full gradient-primary text-primary-foreground font-bold flex items-center justify-center text-xs sm:text-sm shrink-0">
                2
              </span>
              <div className="min-w-0">
                <h3 className="font-display font-semibold text-lg sm:text-xl text-foreground truncate">
                  Selecciona tu Equipo Base
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">
                  Arquitectura industrial diseñada para operación comercial ininterrumpida
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full min-w-0">
              {cotizadorData.baseOptions.map((base) => {
                const Icon = base.icon;
                const isSelected = selectedBaseId === base.id;
                return (
                  <div
                    key={base.id}
                    onClick={() => setSelectedBaseId(base.id)}
                    className={`cursor-pointer rounded-xl border p-4 sm:p-5 transition-all relative flex flex-col justify-between min-w-0 ${
                      isSelected
                        ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-md"
                        : "border-border/80 hover:border-primary/50 bg-background"
                    }`}
                  >
                    {base.popular && (
                      <Badge className="absolute -top-2.5 right-3 bg-accent text-accent-foreground font-semibold text-[10px] sm:text-xs border-0 shadow">
                        Más Vendido
                      </Badge>
                    )}

                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span className="font-display font-bold text-base sm:text-lg text-primary shrink-0">
                          {formatCOP(base.price)}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-sm sm:text-base text-foreground leading-snug">
                        {base.name}
                      </h4>
                      <span className="text-[11px] sm:text-xs font-medium text-accent inline-block mb-1.5">
                        {base.tagline}
                      </span>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {base.description}
                      </p>

                      <ul className="space-y-1 mb-3">
                        {base.includes.map((inc, i) => (
                          <li key={i} className="text-[11px] sm:text-xs text-foreground/90 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-accent flex-shrink-0" />
                            <span className="truncate">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-border/50 flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground font-medium">
                        {isSelected ? "Seleccionado" : "Toca para elegir"}
                      </span>
                      <div
                        className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border shrink-0 ${
                          isSelected
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-muted-foreground/40"
                        }`}
                      >
                        {isSelected && <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STEP 3: Periféricos y Hardware adicional */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-7 border border-border shadow-sm w-full max-w-full min-w-0">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full gradient-primary text-primary-foreground font-bold flex items-center justify-center text-xs sm:text-sm shrink-0">
                3
              </span>
              <div className="min-w-0">
                <h3 className="font-display font-semibold text-lg sm:text-xl text-foreground truncate">
                  Añade Periféricos Modulares
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">
                  Componentes certificados que operan en sincronía nativa con Factura Fácil DIAN
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full min-w-0">
              {cotizadorData.addons.map((addon) => {
                const Icon = addon.icon;
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => handleToggleAddon(addon.id)}
                    className={`cursor-pointer p-3 sm:p-4 rounded-xl border transition-all flex items-start gap-2.5 sm:gap-3 select-none min-w-0 ${
                      isChecked
                        ? "border-primary/80 bg-primary/5 ring-1 ring-primary/20 shadow-xs"
                        : "border-border/80 hover:border-primary/40 bg-background"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 rounded flex items-center justify-center border flex-shrink-0 transition-colors ${
                        isChecked
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-muted-foreground/40 bg-background"
                      }`}
                    >
                      {isChecked && <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1.5">
                        <span className="font-semibold text-xs sm:text-sm text-foreground leading-snug">
                          {addon.name}
                        </span>
                        <span className="font-bold text-xs text-primary flex-shrink-0 whitespace-nowrap ml-1">
                          +{formatCOP(addon.price)}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 line-clamp-2">
                        {addon.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STEP 4: Cantidad de Puntos de Venta */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-7 border border-border shadow-sm w-full max-w-full min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full gradient-primary text-primary-foreground font-bold flex items-center justify-center text-xs sm:text-sm shrink-0">
                  4
                </span>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-foreground">
                    Número de Puntos de Venta / Cajas
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    <span className="text-accent font-bold">¡Descuento del 10%!</span> aplicado automáticamente a partir de 2 cajas.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-center sm:self-auto bg-muted p-1.5 rounded-xl border border-border shrink-0">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg"
                  onClick={() => setCajasCount((c) => Math.max(1, c - 1))}
                  disabled={cajasCount <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="font-display font-bold text-base sm:text-lg min-w-14 text-center text-foreground">
                  {cajasCount} {cajasCount === 1 ? "caja" : "cajas"}
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg"
                  onClick={() => setCajasCount((c) => Math.min(10, c + 1))}
                  disabled={cajasCount >= 10}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Sticky Summary Card */}
        <div id="resumen-cotizacion" className="lg:col-span-4 lg:sticky lg:top-24 w-full max-w-full min-w-0 scroll-mt-24">
          <div className="bg-card rounded-2xl border-2 border-primary/20 shadow-xl p-5 sm:p-7 relative overflow-hidden w-full max-w-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                  Presupuesto en Tiempo Real
                </span>
                <Badge className="bg-primary/10 text-primary border-primary/20 font-bold text-xs mt-0.5">
                  Resumen de tu Cotización
                </Badge>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] flex items-center gap-1 border border-emerald-200">
                <Check className="w-3 h-3 text-emerald-600" /> DIAN OK
              </span>
            </div>

            {/* Items Breakdown */}
            <div className="space-y-3 pb-4 border-b border-border/80">
              <div className="flex justify-between items-start text-sm">
                <div className="min-w-0 pr-2">
                  <span className="font-medium text-foreground block truncate">
                    {cajasCount}x {currentBase.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Para: {currentBusiness.name}
                  </span>
                </div>
                <span className="font-semibold text-foreground shrink-0">
                  {formatCOP(currentBase.price * cajasCount)}
                </span>
              </div>

              {selectedAddons.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Periféricos ({selectedAddons.length})
                  </span>
                  {selectedAddons.map((id) => {
                    const item = cotizadorData.addons.find((a) => a.id === id);
                    if (!item) return null;
                    return (
                      <div key={id} className="flex justify-between text-xs text-muted-foreground">
                        <span className="truncate pr-2">• {cajasCount}x {item.name}</span>
                        <span className="flex-shrink-0 text-foreground/80 font-medium">
                          {formatCOP(item.price * cajasCount)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Free Bonuses Included (from Stitch design) */}
              <div className="pt-2 space-y-1 border-t border-border/50 text-[11px]">
                <div className="flex items-center justify-between text-secondary font-medium">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Software POS Licencia Vitalicia
                  </span>
                  <span className="font-bold text-secondary">INCLUIDO ($0)</span>
                </div>
                <div className="flex items-center justify-between text-secondary font-medium">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Certificado & Homologación DIAN
                  </span>
                  <span className="font-bold text-secondary">INCLUIDO ($0)</span>
                </div>
              </div>

              {/* Multicaja Discount Row */}
              {discountRate > 0 && (
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 p-2 rounded-lg border border-emerald-200">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" /> Descuento Multicaja (10%):
                  </span>
                  <span>-{formatCOP(discountAmount)} COP</span>
                </div>
              )}
            </div>

            {/* Total Calculation */}
            <div className="py-4">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-semibold">
                Total Inversión Estimada
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-primary">
                  {formatCOP(grandTotal)}
                </span>
                <span className="text-xs font-bold text-muted-foreground">COP / Factura Lista</span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                {cotizadorData.disclaimer}
              </p>
            </div>

            {/* Included Benefits Badges */}
            <div className="bg-muted/60 rounded-xl p-3 mb-5 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Garantías de tu compra:</span>
              </div>
              {cotizadorData.includedBenefits.slice(0, 3).map((benefit, i) => (
                <div key={i} className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-accent flex-shrink-0" />
                  <span className="truncate">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-sm sm:text-base h-12 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar Cotización a WhatsApp
              </Button>

              <Button
                onClick={() => setIsModalOpen(true)}
                variant="outline"
                size="lg"
                className="w-full font-display font-semibold text-xs sm:text-sm h-11 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-primary" />
                Solicitar Asesoría por CRM / Correo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CRM Lead Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display font-bold text-xl text-foreground">
              Enviar Cotización a un Asesor
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Ingresa tus datos de contacto para que nuestro equipo prepare tu propuesta formal DIAN en PDF con ficha técnica y descuentos.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmitLead} className="space-y-4 mt-2">
            <div>
              <Label htmlFor="cot-name" className="text-xs font-medium">
                Nombre Completo o Razón Social *
              </Label>
              <div className="relative mt-1">
                <User className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
                <Input
                  id="cot-name"
                  placeholder="Ej: Carlos Gómez / Inversiones SAS"
                  className="pl-9"
                  required
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="cot-phone" className="text-xs font-medium">
                Celular / WhatsApp *
              </Label>
              <div className="relative mt-1">
                <Phone className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
                <Input
                  id="cot-phone"
                  type="tel"
                  placeholder="Ej: 300 123 4567"
                  className="pl-9"
                  required
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="cot-email" className="text-xs font-medium">
                Correo Electrónico (Opcional)
              </Label>
              <div className="relative mt-1">
                <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
                <Input
                  id="cot-email"
                  type="email"
                  placeholder="tuempresa@gmail.com"
                  className="pl-9"
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="cot-city" className="text-xs font-medium">
                Ciudad o Municipio
              </Label>
              <div className="relative mt-1">
                <MapPin className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
                <Input
                  id="cot-city"
                  placeholder="Ej: Bogotá, Medellín, Cali..."
                  className="pl-9"
                  value={leadForm.city}
                  onChange={(e) => setLeadForm({ ...leadForm, city: e.target.value })}
                />
              </div>
            </div>

            {/* Quick summary preview in modal */}
            <div className="bg-muted p-3 rounded-lg text-xs space-y-1 text-muted-foreground">
              <div className="flex justify-between font-medium text-foreground">
                <span>{cajasCount}x {currentBase.name}</span>
                <span className="font-bold text-primary">{formatCOP(grandTotal)}</span>
              </div>
              <p>Periféricos: {selectedAddons.length} seleccionados • {cajasCount} {cajasCount === 1 ? "caja" : "cajas"}{discountRate > 0 ? " • 10% OFF incluido" : ""}</p>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-primary text-primary-foreground font-display font-semibold h-11"
            >
              {isSubmitting ? "Enviando cotización..." : "Confirmar y Recibir Asesoría"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* MOBILE STICKY PRICE BAR (Visible solo en celulares y tablets < lg) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border shadow-[0_-4px_25px_rgba(0,0,0,0.12)] p-2.5 sm:p-3 px-3 sm:px-4 flex items-center justify-between gap-2.5">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
              Total estimado:
            </span>
            <span className="text-[10px] bg-accent/20 text-accent-foreground font-bold px-1.5 py-0.2 rounded-full">
              {cajasCount} {cajasCount === 1 ? "caja" : "cajas"}
            </span>
            {discountRate > 0 && (
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1 py-0.2 rounded">
                10% OFF
              </span>
            )}
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-display font-black text-lg sm:text-xl text-primary leading-none">
              {formatCOP(grandTotal)}
            </span>
            <span className="text-[10px] font-bold text-muted-foreground">COP</span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            type="button"
            onClick={scrollToSummary}
            variant="outline"
            size="sm"
            className="h-9 px-2.5 sm:px-3 text-xs font-semibold border-primary/30 hover:border-primary flex items-center gap-1"
          >
            <Eye className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Detalle</span>
          </Button>

          <Button
            type="button"
            onClick={handleWhatsAppClick}
            size="sm"
            className="bg-[#25D366] hover:bg-[#20ba59] text-white font-display font-bold text-xs h-9 px-3 shadow-md flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Cotizar</span>
          </Button>
        </div>
      </div>
    </div>
  );

  if (isEmbedded) {
    return content;
  }

  return (
    <section id="cotizador" className="py-16 sm:py-20 bg-muted/40 relative overflow-hidden w-full max-w-full">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      {content}
    </section>
  );
}
