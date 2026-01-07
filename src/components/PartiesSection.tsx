import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock, Music, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import carnadozeImg from "@/assets/carnadoze.jpg";
import larBarImg from "@/assets/lar-bar.jpg";
import diaZeroImg from "@/assets/dia-zero.jpg";
import arraiaImg from "@/assets/arraia-da-12.jpg";

const parties = [
  {
    id: 1,
    name: "CarnaDoze",
    tagline: "A Maior Micareta Universitária",
    description:
      "Prepare-se para 12 HORAS de OPEN BAR e as melhores atrações no MAIOR CARNAVAL FORA DE ÉPOCA de SP!",
    image: carnadozeImg,
    highlight: "12h de Open Bar",
    icon: Music,
  },
  {
    id: 2,
    name: "Lar 12 Bar",
    tagline: "Nossa Tradicional Festa no Quintal",
    description:
      "No sábado recebemos todos no quintal da nossa casa roxa para o melhor Open food do semestre! 🤩",
    image: larBarImg,
    highlight: "Ambiente Exclusivo",
    icon: Calendar,
  },
  {
    id: 3,
    name: "Dia Zero",
    tagline: "A Recepção Lendária dos Bixos",
    description:
      "O primeiro dia de aula merece ser memorável. Recebemos os calouros com toda energia e tradição que só a 12 Doses tem.",
    image: diaZeroImg,
    highlight: "Tradição Anual",
    icon: Clock,
  },
  {
    id: 4,
    name: "Arraiá da 12",
    tagline: "A Melhor Tradição Junina",
    description:
      "Comidas típicas, fogueira e a melhor tradição junina na Casa Roxa. Quadrilha, quentão e muito forró para celebrar São João.",
    image: arraiaImg,
    highlight: "Festa Junina",
    icon: Flame,
  },
];

const PartiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % parties.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + parties.length) % parties.length);
  };

  return (
    <section id="festas" className="py-20 md:py-28 bg-muted overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Nossas Festas
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Eventos que Fazem{" "}
            <span className="text-primary">História</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De micaretas épicas a festas, nossos eventos são referência na vida universitária de Ribeirão Preto.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Card */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/10 rounded-3xl blur-2xl opacity-50" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {parties[activeIndex].image ? (
                  <img
                    src={parties[activeIndex].image}
                    alt={parties[activeIndex].name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      {(() => {
                        const Icon = parties[activeIndex].icon;
                        return <Icon className="w-16 h-16 text-primary/40 mx-auto mb-4" />;
                      })()}
                      <p className="text-muted-foreground">Imagem em breve</p>
                    </div>
                  </div>
                )}
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg">
                  {parties[activeIndex].highlight}
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              {/* Party Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6 shadow-lg">
                {(() => {
                  const Icon = parties[activeIndex].icon;
                  return <Icon className="w-7 h-7 text-primary-foreground" />;
                })()}
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {parties[activeIndex].name}
              </h3>
              <p className="text-primary font-semibold mb-4">
                {parties[activeIndex].tagline}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {parties[activeIndex].description}
              </p>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Festa anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Próxima festa"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex gap-2 ml-4">
                  {parties.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-8 bg-primary"
                          : "bg-border hover:bg-primary/50"
                      }`}
                      aria-label={`Ir para festa ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aftermovie CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Quer ver mais? Confira nosso aftermovie do CarnaDoze
          </p>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.instagram.com/p/DKiI6OQyNld/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aftermovie 2025
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartiesSection;