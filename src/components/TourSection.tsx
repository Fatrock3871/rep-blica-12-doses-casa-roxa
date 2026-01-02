import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const TourSection = () => {
  // Load TikTok embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="tour" className="py-20 md:py-28 bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Tour Virtual
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sinta a energia que faz da{" "}
            <span className="text-primary">12 a nossa casa</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça cada canto da nossa casa, desde da sala à beira da piscina. Veja o cenário das suas próximas melhores memórias e descubra o que faz da 12 Doses uma família.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-3xl blur-xl opacity-50" />

          {/* Video Wrapper */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-foreground/5 border border-border">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/rOENTqFANLg"
                title="Tour Virtual República 12 Doses"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Play Button Decoration (behind iframe for visual effect) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-primary/20 animate-ping" />
          </div>
        </div>

        {/* Tour Faculdade - TikTok */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Tour pela <span className="text-primary">Faculdade de Direito</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Veja um pouquinho da nossa vida universitária na Faculdade de Direito da USP! 🏛️✨
          </p>
          
          <div className="flex justify-center px-4">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@rep12doses/video/7585967568976874772"
              data-video-id="7585967568976874772"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            >
              <section>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="@rep12doses"
                  href="https://www.tiktok.com/@rep12doses?refer=embed"
                >
                  @rep12doses
                </a>
              </section>
            </blockquote>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "20", label: "Anos de História" },
            { value: "+204", label: "Ex-moradores" },
            { value: "12+", label: "Cursos Diferentes" },
            { value: "100%", label: "Família" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-background shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Aftermovie CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer ver um pouquinho da energia das nossas festas?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://youtu.be/QhNWAyakB4k?si=VWrVephSw6qz-JGw&t=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aftermovie 2024
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourSection;