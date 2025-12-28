import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsla(263,84%,10%,0.7)] via-[hsla(263,84%,8%,0.8)] to-[hsla(263,84%,5%,0.95)]" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50" />

      {/* Content */}
      <div className="relative container text-center z-10 pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary-foreground/90 text-sm font-medium">#20ANOS12DOSES</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up opacity-0 [animation-delay:200ms]">
          Viva os Melhores Anos
          <br />
          <span className="bg-gradient-to-r from-primary-foreground via-primary-glow to-primary-foreground bg-clip-text text-transparent">
            da Sua Vida.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-4 animate-fade-in-up opacity-0 [animation-delay:400ms]">
          A diferença entre o veneno e o remédio é a dose
        </p>
        <p className="text-primary-foreground/60 mb-10 animate-fade-in-up opacity-0 [animation-delay:500ms]">
          República 12 Doses • USP Ribeirão Preto • Desde 2005
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 [animation-delay:600ms]">
          <Button variant="hero" size="xl" asChild>
            <a href="#aplicar">Quero ser Morador 2026</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#tour"> Tour Virtual</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#tour" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float">
        <ChevronDown size={32} />
      </a>
    </section>;
};
export default HeroSection;