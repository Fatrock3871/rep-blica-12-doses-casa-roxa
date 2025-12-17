import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <form 
      action="SEU_LINK_DO_FORMSPREE_AQUI" 
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Campo oculto para redirecionamento após envio */}
      <input type="hidden" name="_next" value="https://seusite.com.br/obrigado" />
      
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nome_completo" className="text-foreground font-medium">
            Nome Completo
          </Label>
          <Input
            id="nome_completo"
            name="nome_completo"
            placeholder="Seu nome"
            required
            maxLength={100}
            className="h-12 bg-background border-border focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="curso" className="text-foreground font-medium">
            Curso
          </Label>
          <Input
            id="curso"
            name="curso"
            placeholder="Ex: Administração"
            required
            maxLength={100}
            className="h-12 bg-background border-border focus:border-primary"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="cidade_origem" className="text-foreground font-medium">
            Cidade de Origem
          </Label>
          <Input
            id="cidade_origem"
            name="cidade_origem"
            placeholder="De onde você vem?"
            required
            maxLength={100}
            className="h-12 bg-background border-border focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefone" className="text-foreground font-medium">
            WhatsApp
          </Label>
          <Input
            id="telefone"
            name="telefone"
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
