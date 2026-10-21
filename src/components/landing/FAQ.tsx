import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsData } from "@/data/faq";

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="section-container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Resuelve tus dudas
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitas saber antes de empezar con Factura Fácil.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqsData.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value} className="border-border/50">
              <AccordionTrigger className="text-left font-display font-semibold text-lg hover:text-accent transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
