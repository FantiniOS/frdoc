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
    id: "nome-clinica",
    question: "O aplicativo fica mesmo com o nome da minha clínica?",
    answer:
      "Sim. O aplicativo, o endereço de acesso e todos os relatórios em PDF levam exclusivamente o nome, a logo e as cores da sua clínica.",
    accentText: "text-emerald-700",
  },
  {
    id: "dados-seguros",
    question: "Os dados dos meus pacientes ficam seguros e privados?",
    answer:
      "Totalmente. Sua clínica tem um espaço 100% exclusivo e protegido, com sigilo médico absoluto e adequação completa à LGPD.",
    accentText: "text-sky-700",
  },
  {
    id: "precisa-ti",
    question: "Preciso entender de tecnologia ou ter TI na clínica?",
    answer:
      "De jeito nenhum. Nossa equipe personaliza, coloca tudo no ar, cuida da segurança e treina médicos e recepção do zero.",
    accentText: "text-violet-700",
  },
  {
    id: "facil-paciente",
    question: "É fácil para o paciente usar no dia a dia?",
    answer:
      "Sim, foi pensado para todas as idades. Em poucos toques o paciente vê a dieta, faz trocas de alimentos e registra a glicemia em segundos.",
    accentText: "text-amber-700",
  },
  {
    id: "tempo-comecar",
    question: "Em quanto tempo minha clínica começa a usar?",
    answer:
      "Em média, de 7 a 15 dias úteis já entregamos o painel e o aplicativo personalizados no ar, com sua equipe treinada para atender.",
    accentText: "text-indigo-700",
  },
];

export function ExecutiveFaq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="duvidas"
      className="relative scroll-mt-20 border-b border-slate-200/80 bg-white py-24 sm:py-32"
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
                Tudo claro e direto antes da sua demonstração.
              </p>

              <div className="mt-7 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-5">
                <p className="text-sm font-bold text-slate-900">
                  Prefere tirar suas dúvidas ao vivo?
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
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 font-mono text-[11px] font-medium text-slate-700 transition-colors hover:border-slate-300"
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
