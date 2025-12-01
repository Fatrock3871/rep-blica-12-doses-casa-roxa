import { Play, BookOpen, Briefcase, Scale, Smile, Dumbbell } from "lucide-react";

const courses = [
  {
    id: 1,
    name: "Economia & Finanças",
    faculty: "FEA-RP",
    icon: Briefcase,
    videoId: "rOENTqFANLg", // Placeholder - using tour video
    description: "Dicas para sua jornada na Faculdade de Economia e Administração",
  },
  {
    id: 2,
    name: "Direito",
    faculty: "FDRP",
    icon: Scale,
    videoId: "rOENTqFANLg",
    description: "Tudo sobre a vida na Faculdade de Direito de Ribeirão Preto",
  },
  {
    id: 3,
    name: "Odontologia",
    faculty: "FORP",
    icon: Smile,
    videoId: "rOENTqFANLg",
    description: "Guia completo para calouros de Odontologia",
  },
  {
    id: 4,
    name: "Outros Cursos",
    faculty: "USP-RP",
    icon: BookOpen,
    videoId: "rOENTqFANLg",
    description: "Psicologia, Ed. Física e mais - seu lugar na 12 Doses",
  },
];

const ManualSection = () => {
  return (
    <section id="manual" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Manual dos Bixos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Seu Curso na{" "}
            <span className="text-primary">12 Doses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passou na melhor faculdade da América Latina e não sabe por onde começar? 
            Nossos moradores de cada área prepararam guias especiais para você.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-muted">
                <iframe
                  src={`https://www.youtube.com/embed/${course.videoId}`}
                  title={`Manual dos Bixos - ${course.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <course.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">
                      {course.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-2">
                      {course.faculty}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {course.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-2">
            Não encontrou seu curso? Sem problemas!
          </p>
          <p className="text-foreground font-medium">
            Na 12 Doses, todas as áreas são bem-vindas. 
            <a href="#contato" className="text-primary hover:underline ml-1">
              Entre em contato
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManualSection;
