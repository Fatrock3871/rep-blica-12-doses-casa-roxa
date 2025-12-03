import { Heart, Users, GraduationCap, Home } from "lucide-react";
import familyBbq from "@/assets/family-bbq.jpg";
import logo12Doses from "@/assets/logo-12-doses.png";
const HistorySection = () => {
  const features = [{
    icon: GraduationCap,
    title: "Diversidade de Cursos",
    description: "Começamos na FEA, mas hoje abrigamos estudantes de Direito, Economia, Psicologia, Odontologia, Educação Física, Medicina, Nutrição e muito mais."
  }, {
    icon: Users,
    title: "Organização de Eventos",
    description: "Aprendemos organização, negociação e marketing criando eventos memoráveis que marcam a vida universitária de Ribeirão."
  }, {
    icon: Home,
    title: "Tradição Histórica",
    description: "Uma das Repúblicas mais antigas de Ribeirão Preto. Aqui mantemos vivas as tradições que integram a casa e unem as gerações."
  }, {
    icon: Heart,
    title: "Família Longe de Casa",
    description: "Aqui, estranhos viram irmãos. Um lar feito de apoio real e amizades leais, onde construímos juntos as melhores memórias da sua vida."
  }];
  return <section id="historia" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content - Manifesto */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Nossa História
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Uma Família de{" "}
              <span className="text-primary">20 Anos</span>
            </h2>
            
            {/* Manifesto */}
            <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4 mb-8">
              <p>
                Tudo começou em 2005, quando quatro amigos da universidade decidiram dividir uma casa. A ideia não era criar uma república, mas um espaço para viver, rir e aproveitar a vida universitária. O tempo passou, a casa virou o embrião de uma Família Roxa e, duas décadas depois, aquele endereço se transformou em um lar de tradição e integração.
              </p>
              <p className="font-semibold text-foreground">
                Mas, afinal, o que é morar na 12 Doses?
              </p>
              <p>
                Somos suspeitos para falar, mas acreditamos que é a melhor escolha da sua faculdade. Viver com mais de 20 pessoas que você não conhece pode parecer desafiador no início, mas a mágica acontece quando esses estranhos se tornam sua família longe de casa.
              </p>
              <p>
                Aqui, a história se renova a cada dia. Desde a ajuda nas matérias da faculdade até a parceria nas festas; de ver um filme na sala a curtir uma piscininha com churrasco. Todo momento vira resenha. É um "caos organizado" onde, entre inovações e tradições, você encontra apoio para dividir seus quatro ou cinco anos de graduação.
              </p>
              <p className="font-medium text-primary">
                Na 12 Doses, mais do que morar, a gente constrói memórias. #MoreEmRep #12Doses
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => <div key={index} className="group p-5 rounded-xl bg-muted/50 border border-transparent hover:border-primary/20 hover:bg-accent/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>)}
            </div>
          </div>

          {/* Right Images */}
          <div className="relative space-y-6">
            {/* Decorative Background */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

            {/* Main Image - Churrasco das Famílias */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <img alt="Churrasco das Famílias - Integração total entre pais e moradores" className="w-full h-full object-cover" src="/lovable-uploads/7f29600c-93fa-42e3-9b5e-a253d50bd496.jpg" />
              </div>
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

            {/* Second Image - Churrasco de Ex-Moradores */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                {/* Placeholder for ex-moradores image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                  <span className="text-primary/40 text-sm">Foto em breve</span>
                </div>
              </div>
              {/* Image Overlay Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-4">
                <p className="text-primary-foreground font-medium text-sm">
                  🎉 Churrasco de Ex-Moradores
                </p>
                <p className="text-primary-foreground/70 text-xs">
                  O retorno de quem fez história
                </p>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute top-1/3 -left-6 bg-background rounded-xl shadow-xl p-5 border border-border max-w-xs animate-float z-10">
              <div className="flex items-center gap-3">
                <img src={logo12Doses} alt="República 12 Doses" className="w-12 h-12 object-contain" />
                <div>
                  <p className="font-semibold text-foreground">Califórnia Brasileira</p>
                  <p className="text-muted-foreground text-sm">USP Ribeirão Preto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HistorySection;