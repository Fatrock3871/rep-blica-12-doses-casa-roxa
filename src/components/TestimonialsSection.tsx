import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nome do Ex-Morador",
    year: "2015-2019",
    course: "Economia",
    quote: "Placeholder para depoimento. A 12 Doses foi a melhor escolha da minha vida universitária.",
    image: null,
  },
  {
    id: 2,
    name: "Nome do Ex-Morador",
    year: "2017-2021",
    course: "Direito",
    quote: "Placeholder para depoimento. Aqui encontrei amigos para a vida toda.",
    image: null,
  },
  {
    id: 3,
    name: "Nome do Ex-Morador",
    year: "2019-2023",
    course: "Odontologia",
    quote: "Placeholder para depoimento. Uma família de verdade longe de casa.",
    image: null,
  },
];

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
            O Que Dizem os{" "}
            <span className="text-primary">Ex-Moradores</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais de 200 pessoas já passaram pela Casa Roxa. Veja o que eles têm a dizer sobre a experiência.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-background rounded-2xl p-8 shadow-lg border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-muted-foreground leading-relaxed mt-4 mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Profile Picture Placeholder */}
                <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {testimonial.course}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
