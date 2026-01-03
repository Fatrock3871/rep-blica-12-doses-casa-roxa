import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  courseYear: string;
  quote: string;
  avatar: string;
}

import balizaImg from "@/assets/baliza.jpg";
import a4Img from "@/assets/a4.jpg";
import tigraoImg from "@/assets/tigrao.jpg";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Baliza",
    role: "Assessor de Investimentos | XP Inc.",
    courseYear: "Administração • 2018",
    quote: "Se pudesse dar uma dica pra quem está começando, seria: Participe de tudo que a graduação tem a oferecer; Morem em Rep; Diariamente se esforcem para serem a melhor versão de vocês. Para aqueles que acabaram de ingressar na USP e pensam que já conquistaram o que podiam, saibam que é só o começo!",
    avatar: balizaImg,
  },
  {
    id: 2,
    name: "A4",
    role: "Estudante na USP",
    courseYear: "Finanças e Negócios • 2021",
    quote: "Morar na 12 me ajudou muito na transição da casa dos meus pais para outra cidade. O ambiente me acolheu e me transformou como pessoa. Dividir a casa com outras pessoas te ensina muito sobre a vida e sobre relacionamentos. Realmente não trocaria essa experiência por nada! Minha segunda família.",
    avatar: a4Img,
  },
  {
    id: 3,
    name: "Tigrão",
    role: "Estudante na USP",
    courseYear: "Ciências da Computação • 2022",
    quote: "Ter companhia para tudo e conviver com uma diversidade de pessoas, tanto indo para festas, quanto trocando experiências profissionais e acadêmicas, é a experiência mais marcante da minha vida até o momento. Morar em república é uma grande metamorfose de vivências, e na 12 doses foi onde encontrei as melhores pessoas para me acompanhar durante essa jornada. Hoje é a minha família, que me ensina por meio de todos que já passaram e vão passar.",
    avatar: tigraoImg,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-card rounded-2xl shadow-lg border-2 border-primary p-6 md:p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    {/* Quote Icon */}
    <Quote className="w-10 h-10 text-primary mb-4 flex-shrink-0" />
    
    {/* Testimonial Text */}
    <p className="text-foreground leading-relaxed flex-grow mb-6">
      "{testimonial.quote}"
    </p>
    
    {/* Author Info */}
    <div className="flex items-center gap-4 pt-4 border-t border-border">
      {/* Avatar */}
      <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center overflow-hidden flex-shrink-0">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Name, Role & Course/Year */}
      <div className="min-w-0">
        <p className="font-display font-bold text-primary text-lg">
          {testimonial.name}
        </p>
        <p className="text-muted-foreground text-sm">
          {testimonial.role}
        </p>
        <p className="text-primary/70 text-sm font-medium">
          {testimonial.courseYear}
        </p>
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

        {/* Testimonials Grid - 3 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
