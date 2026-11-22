"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, Mail } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/config/site";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  accentText: string;
}

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "armazenamento-dados",
    question: "Onde ficam armazenados os dados dos pacientes?",
    answer:
      "Cada clínica opera em uma instância 100% dedicada (arquitetura Single-Tenant), com servidor de aplicação e banco de dados exclusivos — nunca compartilhados com outras clínicas. Os dados trafegam sob TLS 1.3, permanecem criptografados em repouso (AES-256) e contam com backups automatizados segregados, assegurando soberania absoluta e conformidade rigorosa com a LGPD e as resoluções do CFM.",
    accentText: "text-emerald-700",
  },
  {
    id: "marca-exclusiva",
    question: "O sistema e o aplicativo realmente levam apenas a marca da minha clínica?",
    answer:
      "Sim. A entrega é integralmente White-Label: domínio próprio da clínica (como app.suaclinica.com.br), logotipo, paleta de cores, ícone no celular do paciente e cabeçalhos de mapas glicêmicos e relatórios em PDF exibem exclusivamente a identidade institucional da sua clínica — reforçando prestígio e autoridade médica em cada interação.",
    accentText: "text-sky-700",
  },
  {
    id: "acesso-pacientes",
    question: "Como os pacientes acessam e utilizam o aplicativo no dia a dia?",
    answer:
      "Logo após o cadastro feito pela recepção ou pelo médico, o paciente recebe acesso direto ao aplicativo com a marca da clínica para Android e iOS. Em poucos segundos por dia, consulta sua dieta estruturada com substituições 1:N, registra glicemias com feedback visual colorido, marca hidratação, treino e ritmo intestinal e acompanha sua evolução — tudo sincronizado em tempo real com o prontuário.",
    accentText: "text-violet-700",
  },
  {
    id: "equipe-ti",
    question: "Minha clínica precisa de equipe de TI interna para manter o servidor?",
    answer:
      "Não. Embora o servidor e o banco de dados sejam dedicados exclusivamente à sua clínica, toda a operação de engenharia — monitoramento contínuo, atualizações de segurança, certificados SSL, rotina de backup e suporte técnico — fica sob responsabilidade integral da equipe FRdoc.",
    accentText: "text-amber-700",
  },
  {
    id: "contratacao-prazo",
    question: "Como funciona a contratação e qual é o prazo médio de implantação?",
    answer:
      "Começamos com uma demonstração personalizada para entender o porte da clínica e apresentar o ecossistema com a sua identidade. A contratação combina implantação dedicada (personalização visual, domínio, provisionamento Single-Tenant e treinamento da equipe) com mensalidade previsível de infraestrutura gerenciada e evolução contínua. O prazo médio até o go-live completo é de 7 a 15 dias úteis.",
    accentText: "text-indigo-700",
  },
];

export function ExecutiveFaq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="duvidas"
      className="relative scroll-mt-20 border-b border-slate-200/80 bg-[#F8FAFC] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Esquerda: Editorial + Convite para falar com Especialista */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-semibold tracking-[0.12em] text-emerald-700 uppercase">
                06 / Dúvidas Frequentes
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
                Segurança e transparência para decidir com confiança.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Reunimos as perguntas que diretores clínicos e médicos mais fazem antes de migrar para um ecossistema próprio e dedicado.
              </p>

              <div className="mt-7 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-clinical">
                <p className="text-sm font-bold text-slate-900">
                  Quer conversar com um especialista do FRdoc?
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Agendamos uma demonstração prática mostrando o Painel Web, o App do Paciente e o projeto dedicado desenhado para a rotina da sua clínica.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:from-emerald-700 hover:to-teal-700"
                  >
                    <span>Falar com Especialista</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 font-mono text-[11px] font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-white"
                  >
                    <Mail className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
                    <span>{siteConfig.contactEmail}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Accordion Acessível */}
          <div className="space-y-3 lg:col-span-7">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-button-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border bg-white transition-colors duration-150 ${
                    isOpen
                      ? "border-sky-200/90 shadow-clinical"
                      : "border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-inset sm:px-6"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className={`font-mono text-xs font-bold ${item.accentText}`}>
                          0{idx + 1}
                        </span>
                        <span className="text-sm font-bold text-slate-900 sm:text-base">
                          {item.question}
                        </span>
                      </span>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 ${
                          isOpen
                            ? "rotate-180 border-sky-200 bg-sky-50 text-sky-700"
                            : "border-slate-200 bg-slate-50 text-slate-500"
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-100 px-5 pt-4 pb-5 pl-12 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pl-14">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
