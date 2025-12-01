import { Heart, Users, GraduationCap, Home } from "lucide-react";
import familyBbq from "@/assets/family-bbq.jpg";
import logo12Doses from "@/assets/logo-12-doses.png";

const HistorySection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Diversidade de Cursos",
      description:
        "Começamos na FEA, mas hoje abrigamos estudantes de Direito, Economia, Psicologia, Odontologia, Educação Física e muito mais.",
    },
    {
      icon: Users,
      title: "Organização de Eventos",
      description:
        "Aprendemos organização, negociação e marketing criando eventos memoráveis que marcam a vida universitária de Ribeirão.",
    },
    {
      icon: Home,
      title: "Tradição Histórica",
      description:
        "Uma das repúblicas mais antigas da Califórnia Brasileira, levamos tradições que integram e unem gerações.",
    },
    {
      icon: Heart,
      title: "Família Longe de Casa",
      description:
        "Mais do que colegas, somos irmãos. Aqui você encontra apoio, amizade e memórias para toda a vida.",
    },
  ];

  return (
    <section id="historia" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Nossa História
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Uma Família de{" "}
              <span className="text-primary">20 Anos</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Somos uma tradicional república universitária localizada em Ribeirão Preto, 
              São Paulo. Com quase 20 anos de história, buscamos promover integração, 
              amizade e diversão entre os universitários da USP. Aqui, a diferença 
              entre o veneno e o remédio é realmente a dose.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-xl bg-muted/50 border border-transparent hover:border-primary/20 hover:bg-accent/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={familyBbq}
                alt="Churrasco das Famílias - Integração total entre pais e moradores"
                className="w-full h-auto object-cover"
              />
              {/* Image Overlay Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-6">
                <p className="text-primary-foreground font-medium">
                  🍖 Churrasco das Famílias
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Integração total: pais e moradores juntos
                </p>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-xl p-5 border border-border max-w-xs animate-float">
              <div className="flex items-center gap-3">
                <img 
                  src={logo12Doses} 
                  alt="República 12 Doses" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="font-semibold text-foreground">Califórnia Brasileira</p>
                  <p className="text-muted-foreground text-sm">USP Ribeirão Preto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
