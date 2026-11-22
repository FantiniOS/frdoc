export const siteConfig = {
  brandName: "FRdoc",
  brandTagline: "Tecnologia Clínica",
  domain: "https://frdoc.com.br",
  // Número oficial de WhatsApp comercial no formato DDI + DDD + número (apenas dígitos): (31) 99694-4540
  whatsappNumber: "5531996944540",
  whatsappMessage:
    "Olá! Gostaria de agendar uma demonstração exclusiva do ecossistema FRdoc para a minha clínica.",
  contactEmail: "contato@frdoc.com.br",
  seo: {
    title:
      "FRdoc — O Ecossistema Clínico Próprio que Encanta Pacientes e Eleva sua Medicina",
    description:
      "Painel Web de telemetria metabólica avançada e Aplicativo Mobile exclusivo com a marca da sua clínica, em servidor e banco de dados 100% dedicados (Single-Tenant + White-Label). Projetado para Endocrinologia, Nutrologia e Saúde Integrativa com conformidade LGPD e CFM.",
    shortDescription:
      "Painel Web de telemetria viva + Aplicativo Mobile com a marca da sua clínica em instância 100% dedicada (Single-Tenant + White-Label).",
  },
  navLinks: [
    { label: "Experiência", href: "#experiencia" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Ecossistema", href: "#ecossistema" },
    { label: "Soberania", href: "#soberania" },
    { label: "Implantação", href: "#implantacao" },
    { label: "Dúvidas", href: "#duvidas" },
  ],
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(customMessage ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
}
