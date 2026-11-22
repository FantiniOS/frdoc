export const siteConfig = {
  brandName: "FRdoc",
  brandTagline: "Tecnologia Clínica",
  domain: "https://frdoc.com.br",
  // Número oficial de WhatsApp comercial no formato DDI + DDD + número (apenas dígitos): (31) 99694-4540
  whatsappNumber: "5531996944540",
  whatsappMessage:
    "Olá! Gostaria de agendar uma demonstração rápida do FRdoc com o nome da minha clínica.",
  contactEmail: "contato@frdoc.com.br",
  seo: {
    title:
      "FRdoc — Painel Clínico e Aplicativo Próprio para Endocrinologia e Nutrologia",
    description:
      "Sua clínica presente na rotina do paciente todos os dias. Um painel clínico inteligente para o médico e um aplicativo exclusivo com a marca da sua clínica, em espaço 100% privado e adequado à LGPD.",
    shortDescription:
      "Painel clínico inteligente para o médico e aplicativo exclusivo com a marca da sua clínica para acompanhar pacientes todos os dias.",
  },
  navLinks: [
    { label: "Simulador", href: "#simulador" },
    { label: "Recursos", href: "#recursos" },
    { label: "Segurança", href: "#seguranca" },
    { label: "Dúvidas", href: "#duvidas" },
  ],
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(customMessage ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
}
