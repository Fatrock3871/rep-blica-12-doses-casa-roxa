import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ApplicationData {
  name: string;
  course: string;
  city: string;
  phone: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, course, city, phone }: ApplicationData = await req.json();

    console.log("Sending notification email for application:", { name, course, city, phone });

    const emailResponse = await resend.emails.send({
      from: "12 Doses <onboarding@resend.dev>",
      to: ["pietrooliveiramarquespp@usp.br"],
      subject: `Nova Inscrição - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #7c3aed, #9333ea); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🏠 Nova Inscrição na 12 Doses!</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 12px 12px;">
            <h2 style="color: #333; margin-top: 0;">Dados do Candidato:</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; color: #7c3aed;">Nome:</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; color: #7c3aed;">Curso:</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${course}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-weight: bold; color: #7c3aed;">Cidade:</td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd;">${city}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; color: #7c3aed;">WhatsApp:</td>
                <td style="padding: 12px;">
                  <a href="https://wa.me/55${phone.replace(/\D/g, '')}" style="color: #25d366; text-decoration: none;">
                    ${phone}
                  </a>
                </td>
              </tr>
            </table>
            
            <div style="margin-top: 24px; padding: 16px; background: #e8f5e9; border-radius: 8px;">
              <p style="margin: 0; color: #2e7d32;">
                <strong>💡 Dica:</strong> Clique no WhatsApp acima para entrar em contato diretamente!
              </p>
            </div>
          </div>
          
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 20px;">
            Este email foi enviado automaticamente pelo sistema da República 12 Doses.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-application-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
