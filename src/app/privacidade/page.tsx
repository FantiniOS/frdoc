import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lock, Mail, ShieldCheck } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade institucional e diretrizes de proteção de dados pessoais (LGPD) do site comercial do FRdoc — Tecnologia Clínica.",
  alternates: {
    canonical: "/privacidade",
  },
};

const POLICY_SECTIONS = [
  {
    number: "01",
    title: "Identificação e Escopo de Aplicação",
    paragraphs: [
      "Esta Política de Privacidade descreve como o FRdoc — Tecnologia Clínica (“FRdoc”) trata dados pessoais coletados exclusivamente no âmbito de seu site institucional e comercial (https://frdoc.com.br), em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).",
      "É fundamental distinguir dois contextos distintos: (i) este site comercial, no qual o FRdoc atua como Controlador dos dados de contato fornecidos por gestores, médicos e representantes de clínicas interessados em conhecer a solução; e (ii) as instâncias dedicadas (Single-Tenant) contratadas por clínicas clientes, nas quais cada clínica atua como Controladora exclusiva dos prontuários e dados clínicos de seus pacientes, cabendo ao FRdoc o papel estritamente técnico de Operador de infraestrutura e software, sob contrato específico e sigilo profissional.",
    ],
  },
  {
    number: "02",
    title: "Dados Coletados neste Site Institucional",
    paragraphs: [
      "O site institucional frdoc.com.br não exige cadastro prévio nem coleta dados clínicos ou sensíveis de pacientes. Os únicos dados pessoais eventualmente tratados decorrem de iniciativa voluntária do visitante ao entrar em contato com a nossa equipe comercial por WhatsApp ou e-mail institucional — tais como nome, cargo, nome da clínica, telefone comercial e endereço de e-mail.",
      "De forma estritamente técnica e necessária para a segurança, prevenção a abusos e disponibilidade do portal, servidores de hospedagem podem registrar logs básicos de requisição (como endereço IP, data/hora de acesso e agente de navegador), mantidos pelo prazo mínimo necessário à segurança da informação e cumprimento de obrigações legais (Marco Civil da Internet — Lei nº 12.965/2014).",
    ],
  },
  {
    number: "03",
    title: "Finalidades e Bases Legais do Tratamento",
    paragraphs: [
      "Os dados pessoais enviados voluntariamente em canais comerciais são utilizados exclusivamente para: (a) responder solicitações de informações técnicas e comerciais; (b) agendar e conduzir demonstrações executivas do ecossistema FRdoc; (c) elaborar propostas comerciais e minutas contratuais sob demanda; e (d) cumprir obrigações legais ou regulatórias aplicáveis.",
      "O tratamento fundamenta-se nas hipóteses legais previstas no Art. 7º da LGPD, em especial a execução de procedimentos preliminares relacionados a contrato do qual seja parte o titular ou a clínica representada (Art. 7º, V), o legítimo interesse para atendimento comercial solicitado (Art. 7º, IX) e o cumprimento de obrigação legal ou regulatória (Art. 7º, II). O FRdoc não comercializa, aluga ou cede bases de contatos para terceiros.",
    ],
  },
  {
    number: "04",
    title: "Arquitetura Single-Tenant, Sigilo Médico e Conformidade CFM",
    paragraphs: [
      "Nas contratações do ecossistema FRdoc (Painel Web + Aplicativo Mobile White-Label), cada clínica opera em ambiente computacional e banco de dados 100% dedicados e isolados. Nenhum dado clínico de paciente transita pelo site comercial frdoc.com.br nem é compartilhado entre instâncias de diferentes clientes.",
      "As instâncias dedicadas incorporam criptografia em trânsito (TLS 1.3), criptografia em repouso (AES-256), controle granular de acesso por perfil (Diretoria Clínica, Médico e Secretária) e trilha imutável de auditoria, alinhando-se às exigências da LGPD para dados sensíveis de saúde e às resoluções do Conselho Federal de Medicina (CFM) sobre guarda e sigilo de prontuários eletrônicos.",
    ],
  },
  {
    number: "05",
    title: "Compartilhamento, Retenção e Segurança da Informação",
    paragraphs: [
      "Os dados comerciais coletados via canais de atendimento podem ser processados apenas por provedores estritamente necessários à operação de infraestrutura web e comunicação corporativa, sempre vinculados a compromissos contratuais de confidencialidade e segurança compatíveis com a LGPD.",
      "Mantemos registros de contato comercial apenas pelo período necessário ao atendimento da solicitação, relacionamento pré-contratual ou cumprimento de prazos legais aplicáveis. Adotamos medidas técnicas e administrativas proporcionais para proteger informações contra acessos não autorizados, destruição, perda ou alteração indevida.",
    ],
  },
  {
    number: "06",
    title: "Direitos dos Titulares e Canal do Encarregado (DPO)",
    paragraphs: [
      "Nos termos do Art. 18 da LGPD, qualquer titular de dados tratados no âmbito deste site institucional pode solicitar, a qualquer momento: confirmação da existência de tratamento, acesso aos dados, correção de informações incompletas ou desatualizadas, anonimização, bloqueio ou eliminação de dados desnecessários, bem como informações sobre eventual compartilhamento.",
      `Para exercer seus direitos ou encaminhar dúvidas relacionadas à privacidade e proteção de dados, entre em contato diretamente pelo canal oficial: ${siteConfig.contactEmail}. As solicitações serão analisadas e respondidas dentro dos prazos estabelecidos pela legislação vigente.`,
    ],
  },
  {
    number: "07",
    title: "Atualizações desta Política",
    paragraphs: [
      "Esta Política de Privacidade poderá ser atualizada periodicamente para refletir aprimoramentos técnicos, operacionais ou adequações regulatórias. A versão vigente estará sempre disponível publicamente em https://frdoc.com.br/privacidade, com indicação clara da data de revisão.",
    ],
  },
] as const;

export default function PrivacidadePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* Cabeçalho Translúcido Consistente */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            aria-label="FRdoc — Voltar à página inicial"
          >
            <BrandMark />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-2xs transition-colors hover:border-slate-300 hover:bg-slate-50 sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            <span>Voltar à página inicial</span>
          </Link>
        </div>
      </header>

      {/* Cabeçalho Institucional do Documento */}
      <main className="flex-1">
        <section className="relative border-b border-slate-200/80 bg-[#F8FAFC] py-14 sm:py-18">
          <div
            className="bg-clinical-grid clinical-grid-mask pointer-events-none absolute inset-0"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-wider text-emerald-800 shadow-2xs">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
              <span>CONFORMIDADE LGPD · LEI Nº 13.709/2018</span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              Política de Privacidade
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Diretrizes oficiais de privacidade, transparência e proteção de dados pessoais aplicáveis ao site institucional{" "}
              <span className="font-mono text-sm font-semibold text-slate-800">
                frdoc.com.br
              </span>{" "}
              e aos esclarecimentos sobre a nossa arquitetura dedicada Single-Tenant.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5">
                <Lock className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                Última revisão: Novembro de 2026
              </span>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-700 transition-colors hover:border-emerald-300 hover:text-emerald-700"
              >
                <Mail className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </section>

        {/* Corpo Editorial da Política */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-clinical sm:p-10">
              <div className="space-y-10 divide-y divide-slate-100">
                {POLICY_SECTIONS.map((sec, idx) => (
                  <article
                    key={sec.number}
                    className={idx === 0 ? "" : "pt-9"}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-bold text-emerald-700">
                        {sec.number}
                      </span>
                      <h2 className="text-lg font-bold tracking-[-0.02em] text-slate-900 sm:text-xl">
                        {sec.title}
                      </h2>
                    </div>

                    <div className="mt-3.5 space-y-3.5 pl-0 text-sm leading-relaxed text-slate-600 sm:pl-7 sm:text-[15px]">
                      {sec.paragraphs.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              {/* Rodapé do Documento com Retorno */}
              <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200/80 pt-8 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Dúvidas sobre privacidade ou segurança técnica?
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Escreva para{" "}
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="font-mono font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-4 hover:decoration-emerald-500"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </p>
                </div>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-emerald-700"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Retornar ao site FRdoc</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
