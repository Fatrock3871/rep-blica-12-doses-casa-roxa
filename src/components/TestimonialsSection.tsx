import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  repYears: string;
  quote: string;
  avatar: string | null;
}

import balizaImg from "@/assets/baliza.jpg";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Baliza",
    role: "Assessor de Investimentos | XP Inc.",
    repYears: "2018",
    quote: "Se pudesse dar uma dica pra quem está começando, seria: Participe de tudo que a graduação tem a oferecer; Morem em Rep; Diariamente se esforcem para serem a melhor versão de vocês. Para aqueles que acabaram de ingressar na USP e pensam que já conquistaram o que podiam, saibam que é só o começo!",
    avatar: balizaImg,
  },
  {
    id: 2,
    name: "Nome do Ex-Morador",
    role: "Cargo Atual na Empresa",
    repYears: "2015-2019",
    quote: "Morar na Casa Roxa me ensinou a viver em comunidade, respeitar diferenças e criar laços que duram até hoje. A rep foi fundamental na minha formação como pessoa e profissional.",
    avatar: null,
  },
  {
    id: 3,
    name: "Nome do Ex-Morador",
    role: "Cargo Atual na Empresa",
    repYears: "2019-2023",
    quote: "As festas, os estudos em grupo, as madrugadas de conversa... Cada momento na 12 Doses contribuiu pra quem sou hoje. A rep é família, e família a gente nunca esquece.",
    avatar: null,
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
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-primary font-bold text-xl">
            {testimonial.name.charAt(0)}
          </span>
        )}
      </div>
      
      {/* Name, Role & Rep Years */}
      <div className="min-w-0">
        <p className="font-display font-bold text-primary text-lg">
          {testimonial.name}
        </p>
        <p className="text-muted-foreground text-sm">
          {testimonial.role}
        </p>
        <p className="text-primary/70 text-sm font-medium">
          Ano de Rep: {testimonial.repYears}
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
