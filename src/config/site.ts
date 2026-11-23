export const siteConfig = {
  brandName: "FRdoc",
  brandTagline: "Tecnologia Clínica Registrada",
  domain: "https://frdoc.com.br",
  // Número oficial de WhatsApp comercial no formato DDI + DDD + número (apenas dígitos): (31) 99694-4540
  whatsappNumber: "5531996944540",
  whatsappMessage:
    "Olá! Gostaria de agendar uma demonstração do FRDOC para a minha clínica de endocrinologia.",
  contactEmail: "contato@frdoc.com.br",
  seo: {
    title:
      "FRDOC — Tecnologia Clínica Registrada para Clínicas de Endocrinologia",
    description:
      "Um painel clínico visual para o endocrinologista e um aplicativo com a marca da sua clínica para o paciente. Clareza real sobre glicemia, insulina, dieta pela Tabela TACO e evolução entre consultas.",
    shortDescription:
      "O cuidado da sua clínica de endocrinologia, vivo entre uma consulta e outra. Painel clínico visual e aplicativo com a sua marca.",
  },
  navLinks: [
    { label: "Na Prática", href: "#na-pratica" },
    { label: "Exclusividade", href: "#exclusividade" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Dúvidas", href: "#duvidas" },
  ],
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(customMessage ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
}
