import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo12Doses from "@/assets/logo-12-doses.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#historia",
    label: "Nossa História"
  }, {
    href: "#rotina",
    label: "Rotina na Rep"
  }, {
    href: "#festas",
    label: "Festas"
  }, {
    href: "#manual",
    label: "Manual dos Bixos"
  }, {
    href: "#depoimentos",
    label: "Depoimentos"
  }, {
    href: "#faq",
    label: "FAQ"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo12Doses} alt="República 12 Doses" className="w-12 h-12 object-contain" />
          <div className="hidden sm:block">
            <p className={`font-display font-bold text-lg leading-tight ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              República
            </p>
            <p className={`font-display font-bold text-lg leading-tight ${isScrolled ? "text-primary" : "text-primary-foreground"}`}>
              12 Doses
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => <a key={link.href} href={link.href} className={`font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              {link.label}
            </a>)}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button variant="hero" size="lg" asChild>
            <a href="#aplicar"> Seja um 12 Doses</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-xl border-t border-border animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-foreground font-medium py-2 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>)}
            <Button variant="hero" size="lg" className="mt-4" asChild>
              <a href="#aplicar">Aplicar para Vaga</a>
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Header;