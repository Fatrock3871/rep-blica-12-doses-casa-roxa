import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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

    try {
      // 1. Save to Supabase
      const { error: dbError } = await supabase
        .from("applications")
        .insert({
          name: formData.name,
          course: formData.course,
          city: formData.city,
          phone: formData.phone,
        });

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Erro ao salvar inscrição");
      }

      // 2. Send email notification
      const { error: emailError } = await supabase.functions.invoke(
        "send-application-notification",
        {
          body: {
            name: formData.name,
            course: formData.course,
            city: formData.city,
            phone: formData.phone,
          },
        }
      );

      if (emailError) {
        console.error("Email error:", emailError);
        // Don't throw - application was saved, just email failed
      }

      setIsSubmitted(true);
      toast({
        title: "Inscrição enviada!",
        description: "Em breve um morador entrará em contato com você.",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            maxLength={100}
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
            maxLength={100}
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
            maxLength={100}
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
            maxLength={20}
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
