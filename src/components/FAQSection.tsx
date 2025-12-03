import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Existe intercâmbio com bolsa na USP?",
    answer:
      "Sim! A USP oferece diversas oportunidades de intercâmbio com bolsas de estudo através de programas como FAPESP, CNPq e convênios internacionais. Muitos dos nossos moradores já fizeram intercâmbio para países como Estados Unidos, França, Alemanha e Canadá durante a graduação.",
  },
  {
    question: 'Por que Ribeirão Preto é chamada de "Califórnia Brasileira"?',
    answer:
      "O apelido vem do grande desenvolvimento econômico da região, especialmente ligado ao agronegócio e à indústria. Além disso, o clima quente e ensolarado durante a maior parte do ano, a qualidade de vida e a vida noturna agitada contribuem para essa comparação com o estado americano.",
  },
  {
    question: "É mais barato morar em República?",
    answer:
      "Sim, com certeza! Morar em república oferece um custo-benefício imbatível. Você divide despesas como aluguel, contas de água, luz, internet e até alimentação. Além disso, a localização privilegiada da 12 Doses (vizinha do campus) economiza transporte. No geral, você paga menos e vive mais.",
  },
  {
    question: "E o trote? Devo ter medo?",
    answer:
      "Na 12 Doses temos uma filosofia de integração, não de humilhação. Nosso lema é: rimos COM você, não DE você. Todas as atividades são pensadas para criar laços de amizade e fazer você se sentir parte da família desde o primeiro dia. Violência e constrangimento não têm espaço aqui.",
  },
  {
    question: "A República 12 Doses fica longe da faculdade?",
    answer:
      "Somos literalmente vizinhos de muro do campus da USP! A 12 Doses fica no Parque Residencial Cidade Universitária, a poucos metros da entrada. Você pode ir a pé em menos de 5 minutos ou de bicicleta em 2. É a localização perfeita para quem quer praticidade sem abrir mão de privacidade. Além disso, estamos localizados a menos de 1km do Bandejão Central, facilitando muito a rotina de almoço e jantar no campus.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Perguntas Frequentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tire Suas{" "}
            <span className="text-primary">Dúvidas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As perguntas mais comuns de quem está chegando em Ribeirão Preto.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-2">
            Ainda tem dúvidas?
          </p>
          <p className="text-foreground font-medium">
            <a href="#contato" className="text-primary hover:underline">
              Entre em contato
            </a>{" "}
            que a gente responde tudo!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
