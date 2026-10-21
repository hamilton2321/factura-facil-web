import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30 overflow-hidden w-full">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Cientos de negocios en Colombia confían en nosotros para gestionar sus operaciones diarias.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-background">
                      <CardContent className="flex flex-col p-6 h-full justify-between gap-6">
                        <div>
                          <div className="flex gap-0.5 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < testimonial.rating
                                    ? "fill-accent text-accent"
                                    : "fill-muted text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground italic text-sm leading-relaxed">
                            "{testimonial.content}"
                          </p>
                        </div>

                        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                          <Avatar className="h-10 w-10 border border-border">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback className="bg-primary/10 text-primary font-medium text-xs">
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="font-semibold text-sm text-foreground">
                              {testimonial.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {testimonial.role}, {testimonial.company}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-primary/20 hover:border-primary hover:bg-primary/10 hover:text-primary" />
              <CarouselNext className="-right-12 border-primary/20 hover:border-primary hover:bg-primary/10 hover:text-primary" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
