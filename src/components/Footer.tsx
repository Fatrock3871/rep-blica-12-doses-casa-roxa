import { Instagram, Youtube, MapPin, Heart } from "lucide-react";
import logo12Doses from "@/assets/logo-12-doses.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#historia", label: "Nossa História" },
    { href: "#festas", label: "Festas" },
    { href: "#manual", label: "Manual dos Bixos" },
    { href: "#aplicar", label: "Aplicar para Vaga" },
  ];

  return (
    <footer id="contato" className="bg-footer text-footer-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo12Doses} alt="República 12 Doses" className="w-12 h-12 object-contain" />
              <div>
                <p className="font-display font-bold text-lg leading-tight">República</p>
                <p className="font-display font-bold text-lg leading-tight text-primary-glow">12 Doses</p>
              </div>
            </div>
            <p className="text-footer-foreground/70 max-w-md mb-6">
              A diferença entre o veneno e o remédio é a dose. Desde 2005, 
              formando amizades e memórias que duram para toda a vida na 
              Califórnia Brasileira.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/rep12doses"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCVTwBqWihgTqBYRTUR-bUBQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-footer-foreground/70 hover:text-primary-glow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Localização</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-glow shrink-0 mt-0.5" />
              <div>
                <p className="text-footer-foreground/90 font-medium">Ribeirão Preto, SP</p>
                <p className="text-footer-foreground/70 text-sm">Califórnia Brasileira</p>
                <p className="text-footer-foreground/70 text-sm mt-2">USP - Campus Ribeirão Preto</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-footer-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-footer-foreground/60 text-sm text-center md:text-left">
            © {currentYear} República 12 Doses. Todos os direitos reservados.
          </p>
          <p className="text-footer-foreground/60 text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> pela família 12 Doses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
