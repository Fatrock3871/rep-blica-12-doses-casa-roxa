import ApplicationForm from "./ApplicationForm";
import { MapPin, Phone, Instagram, Youtube } from "lucide-react";
const ContactSection = () => {
  return <section id="aplicar" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Aplique Agora
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Faça Parte da{" "}
              <span className="text-primary">Família</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-left">Está procurando um lugar para chamar de lar em Ribeirão Preto? A República 12 Doses está com vagas abertas para 2026! Preencha o formulário ou entre em contato pelo WhatsApp/Instagram e viva os melhores anos da sua vida universitária.</p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Localização</p>
                  <p className="text-muted-foreground text-sm">
                    Ribeirão Preto, SP - Califórnia Brasileira
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <a href="https://wa.me/5516974071720" className="text-primary hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                    +55 (16) 97407-1720
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://www.instagram.com/rep12doses" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCVTwBqWihgTqBYRTUR-bUBQ" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-xl">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Preencha seus dados
            </h3>
            <ApplicationForm />
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;