import React from "react";
import {
  AlertCircle,
  CheckCircle2,
  FileWarning,
  HeartHandshake,
  MessageSquareOff,
  ServerOff,
  Sparkles,
  Smartphone,
  TrendingUp,
  Utensils,
} from "lucide-react";

const COMMON_PAINS = [
  {
    icon: AlertCircle,
    title: "Consultório às cegas entre retornos",
    description:
      "Pacientes somem por 30 a 60 dias e voltam sem dados confiáveis — obrigando o médico a ajustar condutas com base no “acho que segui a dieta”.",
  },
  {
    icon: MessageSquareOff,
    title: "PDFs estáticos perdidos no WhatsApp",
    description:
      "Planos alimentares estáticos viram dezenas de mensagens fora de hora perguntando sobre substituições simples de alimentos.",
  },
  {
    icon: FileWarning,
    title: "Glicemias em papel ou fotos desorganizadas",
    description:
      "Caderninhos rasurados e prints soltos consomem minutos preciosos da consulta que deveriam ser dedicados ao raciocínio clínico.",
  },
  {
    icon: ServerOff,
    title: "Softwares genéricos que apagam sua marca",
    description:
      "Seu paciente enxerga a marca de um SaaS terceiro enquanto os dados da sua clínica dividem o mesmo banco com milhares de outros consultórios.",
  },
] as const;

const FRDOC_GAINS = [
  {
    icon: TrendingUp,
    accentClass: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    title: "Telemetria viva antes da consulta começar",
    description:
      "Você abre o prontuário e enxerga curvas glicêmicas, adesão semanal, hidratação e evolução corporal em segundos — pronto para decisões de alto nível.",
  },
  {
    icon: Smartphone,
    accentClass: "bg-sky-50 text-sky-600 border-sky-200/80",
    title: "Sua marca na tela inicial do paciente",
    description:
      "Um aplicativo exclusivo com o nome e as cores da sua clínica que transmite padrão superior e reforça autoridade médica todos os dias.",
  },
  {
    icon: Utensils,
    accentClass: "bg-violet-50 text-violet-600 border-violet-200/80",
    title: "Autonomia inteligente com Tabela TACO 1:N",
    description:
      "O paciente consulta a dieta no bolso e realiza trocas equivalentes aprovadas em um toque — elevando a adesão sem sobrecarregar sua equipe.",
  },
  {
    icon: HeartHandshake,
    accentClass: "bg-amber-50 text-amber-600 border-amber-200/80",
    title: "Mais resultado clínico, mais retenção natural",
    description:
      "Pacientes que se sentem acompanhados evoluem muito mais rápido, indicam sua clínica espontaneamente e renovam pacotes com naturalidade.",
  },
] as const;

export function TransformationCompare() {
  return (
    <section
      id="transformacao"
      className="relative scroll-mt-20 border-b border-slate-200/80 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Editorial */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold tracking-[0.12em] text-rose-600 uppercase">
            01 / A Transformação na Prática
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            O fim do <span className="text-slate-500">“entre consultas”</span> às cegas.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            O tratamento metabólico não pode pausar quando o paciente fecha a porta do consultório. Compare a rotina que trava clínicas tradicionais com a experiência de cuidado contínuo do FRdoc.
          </p>
        </div>

        {/* Grade Comparativa 2 Colunas */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Coluna 1: O Padrão Comum */}
          <div className="relative overflow-hidden rounded-3xl border border-rose-200/75 bg-gradient-to-b from-rose-50/40 via-white to-white p-6 shadow-clinical sm:p-8">
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-400 via-amber-400 to-rose-300"
              aria-hidden="true"
            />

            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 font-mono text-[11px] font-bold text-rose-700">
                O PADRÃO COMUM
              </span>
              <span className="font-mono text-[11px] font-medium text-slate-400">
                O QUE TRAVA O CRESCIMENTO
              </span>
            </div>

            <h3 className="mt-4 text-xl font-bold tracking-[-0.02em] text-slate-900 sm:text-2xl">
              Fricção silenciosa entre cada retorno
            </h3>

            <ul className="mt-6 space-y-4">
              {COMMON_PAINS.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="flex items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-white/90 p-4"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-rose-200/80 bg-rose-50 text-rose-600">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Coluna 2: A Experiência FRdoc */}
          <div className="relative overflow-hidden rounded-3xl border border-emerald-200/90 bg-gradient-to-b from-emerald-50/35 via-white to-sky-50/25 p-6 shadow-clinical-lg ring-1 ring-emerald-500/10 sm:p-8">
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500"
              aria-hidden="true"
            />

            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-[11px] font-bold text-emerald-700">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                A EXPERIÊNCIA FRDOC
              </span>
              <span className="font-mono text-[11px] font-semibold text-sky-700">
                O QUE ENCANTA MÉDICOS E PACIENTES
              </span>
            </div>

            <h3 className="mt-4 text-xl font-bold tracking-[-0.02em] text-slate-900 sm:text-2xl">
              Presença clínica diária e autoridade imediata
            </h3>

            <ul className="mt-6 space-y-4">
              {FRDOC_GAINS.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="flex items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
                  >
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${item.accentClass}`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                        <CheckCircle2
                          className="h-3.5 w-3.5 shrink-0 text-emerald-600"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
