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
    id: "dados-separados",
    question: "Os dados dos meus pacientes ficam misturados com os de outras clínicas?",
    answer:
      "Não. Cada clínica contratante opera com ambiente e banco de dados separados, protegidos pela LGPD e pelo sigilo médico.",
    accentText: "text-emerald-700",
  },
  {
    id: "equipe-ti",
    question: "Preciso ter equipe de TI na clínica?",
    answer:
      "Não. Nossa equipe cuida de toda a configuração, entrega e suporte técnico para você focar no atendimento.",
    accentText: "text-sky-700",
  },
  {
    id: "uso-pacientes",
    question:
      "Pacientes de todas as idades conseguem registrar peso, sono, água, intestino e glicemia no aplicativo?",
    answer:
      "Sim. O aplicativo foi desenhado para ser leve e direto: em poucos toques o paciente acompanha o plano e registra a rotina diária.",
    accentText: "text-indigo-700",
  },
  {
    id: "inicio-treinamento",
    question: "Como funciona o início e o treinamento da equipe?",
    answer:
      "Configuramos o ambiente da clínica e conduzimos um treinamento prático com médicos e recepção para usarem tudo com fluidez desde o primeiro dia.",
    accentText: "text-teal-700",
  },
];

export function ExecutiveFaq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="duvidas"
      className="relative scroll-mt-20 bg-[#F8FAFC] pt-20 pb-12 sm:pt-28 sm:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Esquerda */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
                Dúvidas rápidas.
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Respostas diretas sobre privacidade, uso diário e implantação na clínica.
              </p>

              <div className="mt-7 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs">
                <p className="text-sm font-bold text-slate-900">
                  Prefere conversar diretamente com nossa equipe?
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:from-emerald-700 hover:to-teal-700"
                  >
                    <span>Falar no WhatsApp</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 font-mono text-[11px] font-medium text-slate-700 transition-colors hover:border-slate-300"
                  >
                    <Mail className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
                    <span>{siteConfig.contactEmail}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Accordion */}
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
                      ? "border-emerald-200/90 shadow-clinical"
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
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-inset sm:px-6"
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
                            ? "rotate-180 border-emerald-200 bg-emerald-50 text-emerald-700"
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
