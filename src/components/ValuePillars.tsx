import React from "react";
import { Award, Building2, FileDown, HeartPulse, Stethoscope } from "lucide-react";

export function ValuePillars() {
  return (
    <section
      id="diferenciais"
      className="relative scroll-mt-20 border-b border-slate-200/80 bg-[#F8FAFC] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.12em] text-indigo-600 uppercase">
            02 / Três Pilares de Encantamento
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Por que médicos, pacientes e diretores clínicos se apaixonam pelo FRdoc.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Cada detalhe foi desenhado para gerar valor imediato nos três pilares que sustentam uma clínica de referência: excelência assistencial, experiência memorável e posicionamento de alto valor.
          </p>
        </div>

        {/* 3 Cards Editoriais com Micro-Visuais Multicoloridos */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* PILAR 1: PARA O MÉDICO */}
          <article className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-clinical transition-all duration-150 hover:border-emerald-300/90 sm:p-7">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-xs">
                  <Stethoscope className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-[10px] font-bold text-emerald-700">
                  PARA O MÉDICO
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-slate-900">
                Medicina de Precisão, Sem Atrito
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                Consultas mais profundas e resolutivas com dados reais da rotina do paciente. Acesse mapa glicêmico e insulina em um clique, emita PDFs institucionais elegantes e troque burocracia por decisão clínica.
              </p>
            </div>

            {/* Micro-Visual: Mini Curva Multicolorida + PDF Pronto */}
            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-semibold text-slate-500">
                  TELEMETRIA + INSULINA
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-indigo-50 px-2 py-0.5 font-mono text-[10px] font-bold text-indigo-700">
                  <FileDown className="h-3 w-3" aria-hidden="true" />
                  PDF Institucional
                </span>
              </div>
              <svg viewBox="0 0 240 66" className="mt-2.5 h-16 w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="pillarCurve1" x1="0" y1="8" x2="0" y2="56" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F43F5E" />
                    <stop offset="45%" stopColor="#F59E0B" />
                    <stop offset="75%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#0EA5E9" />
                  </linearGradient>
                </defs>
                <rect x="4" y="24" width="232" height="24" rx="4" fill="#10B981" fillOpacity="0.1" />
                <path
                  d="M8 42 C 38 40, 62 28, 92 32 C 122 36, 146 12, 172 15 C 198 18, 214 34, 232 32"
                  fill="none"
                  stroke="url(#pillarCurve1)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <circle cx="92" cy="32" r="3.5" fill="#FFFFFF" stroke="#10B981" strokeWidth="2.2" />
                <circle cx="172" cy="15" r="4.2" fill="#FFFFFF" stroke="#F43F5E" strokeWidth="2.2" />
                <circle cx="232" cy="32" r="3.5" fill="#FFFFFF" stroke="#0EA5E9" strokeWidth="2.2" />
              </svg>
              <div className="mt-1 flex items-center justify-between font-mono text-[10px] text-slate-500">
                <span className="text-emerald-700 font-semibold">89% no alvo</span>
                <span className="text-indigo-700 font-semibold">Basal 14 UI</span>
              </div>
            </div>
          </article>

          {/* PILAR 2: PARA O PACIENTE */}
          <article className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-clinical transition-all duration-150 hover:border-violet-300/90 sm:p-7">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-amber-500 text-white shadow-xs">
                  <HeartPulse className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 font-mono text-[10px] font-bold text-violet-700">
                  PARA O PACIENTE
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-slate-900">
                Sensação de Cuidado Premium
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                Clareza absoluta sobre o que comer e como substituir em um toque, lançamento de glicemia em segundos com feedback visual motivador e um canal direto com a recepção da sua clínica.
              </p>
            </div>

            {/* Micro-Visual: Anéis Concêntricos + Pílulas de Macros */}
            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-4">
              <div className="flex items-center gap-3.5">
                <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0 -rotate-90" aria-hidden="true">
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#E2E8F0" strokeWidth="4.5" />
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#10B981" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="163.3" strokeDashoffset="26" />
                  <circle cx="32" cy="32" r="19" fill="none" stroke="#EDE9FE" strokeWidth="4.5" />
                  <circle cx="32" cy="32" r="19" fill="none" stroke="#8B5CF6" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="119.3" strokeDashoffset="17" />
                  <circle cx="32" cy="32" r="12" fill="none" stroke="#FFEDD5" strokeWidth="4.5" />
                  <circle cx="32" cy="32" r="12" fill="none" stroke="#F97316" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="75.4" strokeDashoffset="16" />
                </svg>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-slate-900">
                    Dieta + Check-ins no Bolso
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Trocas TACO 1:N sem esperar resposta
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1 font-mono text-[9.5px] font-bold">
                    <span className="rounded bg-amber-50 px-1.5 py-0.5 text-amber-700">Carbo</span>
                    <span className="rounded bg-violet-50 px-1.5 py-0.5 text-violet-700">Prot</span>
                    <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-emerald-700">Gord</span>
                    <span className="rounded bg-sky-50 px-1.5 py-0.5 text-sky-700">Água</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* PILAR 3: PARA A DIRETORIA DA CLÍNICA */}
          <article className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-clinical transition-all duration-150 hover:border-indigo-300/90 sm:p-7">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white shadow-xs">
                  <Building2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 font-mono text-[10px] font-bold text-indigo-700">
                  PARA A DIRETORIA
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-slate-900">
                Posicionamento &amp; Retenção
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                Diferenciação imediata que justifica posicionamento premium, controle visual de pacotes de consultas, governança de acessos por perfil e blindagem total do seu patrimônio de dados.
              </p>
            </div>

            {/* Micro-Visual: Pacotes + Perfis Coloridos */}
            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-4">
              <div className="flex items-center justify-between text-[11px]">
                <span className="inline-flex items-center gap-1 font-bold text-slate-800">
                  <Award className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
                  Pacote Semestral
                </span>
                <span className="font-mono font-bold text-emerald-700">4 / 6 sessões</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200/80">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500" />
              </div>

              <div className="mt-3.5 flex flex-wrap gap-1.5 font-mono text-[9.5px] font-bold">
                <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 text-violet-700">
                  Diretoria Clínica
                </span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-emerald-700">
                  Médico
                </span>
                <span className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-sky-700">
                  Secretária
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
