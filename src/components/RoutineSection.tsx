import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BookOpen, Heart, Trophy, Dumbbell, HandHeart } from "lucide-react";
import interrepsImage from "@/assets/interreps.jpg";

const routineItems = [
  {
    icon: BookOpen,
    title: "Foco Acadêmico",
    description: "Foco nos estudos e suporte acadêmico.",
    image: null,
  },
  {
    icon: Heart,
    title: "Vida Saudável",
    description: "Saúde em dia no CEFER.",
    image: null,
  },
  {
    icon: Trophy,
    title: "A Paixão",
    description: "Inter-Reps: A raça dentro de quadra.",
    image: interrepsImage,
  },
  {
    icon: Dumbbell,
    title: "Preparação",
    description: "Treino forte para corpo e mente.",
    image: null,
  },
  {
    icon: HandHeart,
    title: "Impacto Social",
    description: "Devolvendo para a comunidade. Campanhas de doação de sangue, alimentos e ações sociais que fazemos durante o ano.",
    image: null,
  },
];

const RoutineSection = () => {
  return (
    <section id="rotina" className="py-20 md:py-28 bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Rotina & Esportes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Além das{" "}
            <span className="text-primary">Festas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A vida de rep não é só festa. Aqui, equilibramos estudos, esportes e saúde para formar profissionais completos.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {routineItems.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:border-primary/30 transition-all duration-300 h-full">
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center relative overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                        <item.icon className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* Mobile hint */}
        <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
          ← Deslize para ver mais →
        </p>
      </div>
    </section>
  );
};

export default RoutineSection;
