import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
    const posts = [
        {
            title: "¿Qué es la Facturación Electrónica y por qué es obligatoria?",
            excerpt: "Descubre todo lo que necesitas saber sobre la normativa de la DIAN y cómo evitar sanciones en tu negocio.",
            date: "15 Oct 2024",
            author: "Equipo Factura Fácil",
            category: "Normativa",
            image: "gradient-primary"
        },
        {
            title: "5 Tips para mejorar el inventario de tu ferretería",
            excerpt: "La gestión de inventarios es clave para la rentabilidad. Aprende las mejores prácticas para evitar pérdidas.",
            date: "12 Oct 2024",
            author: "Carlos Pérez",
            category: "Gestión",
            image: "bg-secondary"
        },
        {
            title: "Cómo elegir el mejor sistema POS para restaurantes",
            excerpt: "No todos los sistemas son iguales. Conoce las características esenciales que debe tener tu software.",
            date: "08 Oct 2024",
            author: "Ana López",
            category: "Tecnología",
            image: "bg-accent"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-16">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                            Blog y Recursos
                        </span>
                        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
                            Aprende con Factura Fácil
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Noticias, consejos y guías para hacer crecer tu negocio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-border/50">
                                <div className={`h-48 w-full ${post.image} opacity-80`} />
                                <CardHeader>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                        </span>
                                    </div>
                                    <CardTitle className="font-display text-xl mb-2">
                                        {post.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                        {post.category}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <a
                                        href={`https://wa.me/573219087397?text=${encodeURIComponent(`Hola Factura Fácil 🚀, leí su artículo "${post.title}" y me gustaría recibir asesoría sobre este tema.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                                    >
                                        Consultar con un asesor <ArrowRight className="w-4 h-4 ml-1" />
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Blog;
