import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";

interface TestimonialVideo {
  id: number;
  name: string;
  role: string;
  company?: string;
  videoUrl: string | null;
  avatar: string | null;
}

const legacyTestimonials: TestimonialVideo[] = [
  {
    id: 1,
    name: "Nome do Ex-Morador",
    role: "Cargo Atual",
    company: "Empresa",
    videoUrl: null,
    avatar: null,
  },
  {
    id: 2,
    name: "Nome do Ex-Morador",
    role: "Cargo Atual",
    company: "Empresa",
    videoUrl: null,
    avatar: null,
  },
  {
    id: 3,
    name: "Nome do Ex-Morador",
    role: "Cargo Atual",
    company: "Empresa",
    videoUrl: null,
    avatar: null,
  },
];

const currentTestimonials: TestimonialVideo[] = [
  {
    id: 1,
    name: "Nome do Morador",
    role: "Curso",
    videoUrl: null,
    avatar: null,
  },
  {
    id: 2,
    name: "Nome do Morador",
    role: "Curso",
    videoUrl: null,
    avatar: null,
  },
  {
    id: 3,
    name: "Nome do Morador",
    role: "Curso",
    videoUrl: null,
    avatar: null,
  },
];

const VideoCard = ({ testimonial }: { testimonial: TestimonialVideo }) => (
  <div className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:border-primary/30 transition-all duration-300 h-full">
    {/* Video Player Placeholder */}
    <div className="aspect-video bg-muted relative flex items-center justify-center group cursor-pointer">
      {testimonial.videoUrl ? (
        <iframe
          src={testimonial.videoUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30" />
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
            <Play className="w-7 h-7 text-primary-foreground ml-1" />
          </div>
          <span className="absolute bottom-4 left-4 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
            Vídeo em breve
          </span>
        </>
      )}
    </div>

    {/* Author Info */}
    <div className="p-5 flex items-center gap-4">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden flex-shrink-0">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-primary font-bold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        )}
      </div>
      
      {/* Name & Role */}
      <div className="min-w-0">
        <p className="font-display font-semibold text-foreground truncate">
          {testimonial.name}
        </p>
        <p className="text-primary text-sm font-medium truncate">
          {testimonial.role}
        </p>
        {testimonial.company && (
          <p className="text-muted-foreground text-xs truncate">
            {testimonial.company}
          </p>
        )}
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quem Fez e Faz{" "}
            <span className="text-primary">História</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais de 200 pessoas já passaram pela Casa Roxa. Veja o que eles têm a dizer sobre a experiência.
          </p>
        </div>

        {/* Legacy Carousel */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
            Quem já viveu essa história
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {legacyTestimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <VideoCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        {/* Current Carousel */}
        <div>
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
            Quem vive a 12 hoje
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {currentTestimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <VideoCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        {/* Mobile hint */}
        <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
          ← Deslize para ver mais →
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
