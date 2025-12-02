import { Instagram, Youtube, MapPin, Heart, MessageCircle } from "lucide-react";
import logo12Doses from "@/assets/logo-12-doses.png";

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#historia", label: "Nossa História" },
    { href: "#festas", label: "Festas" },
    { href: "#manual", label: "Manual dos Bixos" },
    { href: "#faq", label: "FAQ" },
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
              <img
                src={logo12Doses}
                alt="República 12 Doses"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="font-display font-bold text-lg leading-tight">República</p>
                <p className="font-display font-bold text-lg leading-tight text-primary-glow">
                  12 Doses
                </p>
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
                href="https://www.tiktok.com/@rep12doses"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
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
              <a
                href="https://wa.me/5516999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
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
            <a
              href="https://maps.app.goo.gl/eMnVR2NWN4Q2rDVm7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 group"
            >
              <MapPin className="w-5 h-5 text-primary-glow shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-footer-foreground/90 font-medium group-hover:text-primary-glow transition-colors">
                  Ribeirão Preto, SP
                </p>
                <p className="text-footer-foreground/70 text-sm">Califórnia Brasileira</p>
                <p className="text-footer-foreground/70 text-sm mt-2">
                  Pq. Residencial Cidade Universitária
                </p>
                <p className="text-footer-foreground/50 text-xs mt-1">
                  Clique para abrir no Maps
                </p>
              </div>
            </a>
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
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> pela família 12
            Doses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
