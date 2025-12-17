import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-12-doses.png";

const Obrigado = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header simples */}
      <header className="py-4 px-6 border-b border-border">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="12 Doses" className="h-10 w-auto" />
          <span className="font-display text-xl font-bold text-primary">12 Doses</span>
        </Link>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-lg w-full text-center animate-fade-in">
          {/* Ícone de sucesso */}
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>

          {/* Mensagem principal */}
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inscrição Recebida!
          </h1>
          
          <p className="text-lg text-muted-foreground mb-2">
            Obrigado pelo interesse em fazer parte da{" "}
            <span className="text-primary font-semibold">República 12 Doses</span>!
          </p>
          
          <p className="text-muted-foreground mb-8">
            Um morador entrará em contato com você em breve pelo WhatsApp para dar continuidade ao processo.
          </p>

          {/* Card com próximos passos */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8 text-left">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">
              Enquanto isso...
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <span>Confira nosso Instagram para conhecer mais sobre a rotina da rep</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <span>Assista os vídeos do Manual dos Bixos para dicas sobre seu curso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <span>Fique atento ao WhatsApp para o contato de um morador</span>
              </li>
            </ul>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Voltar ao Site
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <a 
                href="https://www.instagram.com/rep12doses/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Seguir no Instagram
              </a>
            </Button>
          </div>

          {/* WhatsApp alternativo */}
          <p className="text-sm text-muted-foreground mt-8">
            Dúvidas urgentes?{" "}
            <a 
              href="https://wa.me/5516981656856" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3" />
              Fale conosco pelo WhatsApp
            </a>
          </p>
        </div>
      </main>

      {/* Footer simples */}
      <footer className="py-6 px-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} República 12 Doses · Família longe de casa desde 2005
        </p>
      </footer>
    </div>
  );
};

export default Obrigado;