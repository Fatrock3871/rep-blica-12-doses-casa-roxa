import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    city: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Inscrição enviada!",
      description: "Em breve um morador entrará em contato com você.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          Inscrição Recebida!
        </h3>
        <p className="text-muted-foreground mb-6">
          Obrigado pelo interesse! Um morador da 12 Doses entrará em contato em breve.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Enviar Nova Inscrição
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground font-medium">
            Nome Completo
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
            className="h-12 bg-background border-border focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="course" className="text-foreground font-medium">
            Curso
          </Label>
          <Input
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Ex: Administração"
            required
            className="h-12 bg-background border-border focus:border-primary"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="city" className="text-foreground font-medium">
            Cidade de Origem
          </Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="De onde você vem?"
            required
            className="h-12 bg-background border-border focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground font-medium">
            WhatsApp
          </Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            required
            className="h-12 bg-background border-border focus:border-primary"
          />
        </div>
      </div>
      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            Enviar Inscrição
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
      <p className="text-muted-foreground text-xs text-center">
        Ao enviar, você concorda em receber contato dos moradores da 12 Doses.
      </p>
    </form>
  );
};

export default ApplicationForm;
