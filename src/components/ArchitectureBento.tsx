import React from "react";
import {
  Award,
  Check,
  Database,
  FileText,
  Lock,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const TEAM_ACCESS = [
  {
    role: "Diretoria Clínica",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    prontuario: true,
    agenda: true,
  },
  {
    role: "Médico",
    badgeClass: "border-sky-200 bg-sky-50 text-sky-700",
    prontuario: true,
    agenda: true,
  },
  {
    role: "Recepção",
    badgeClass: "border-amber-200 bg-amber-50 text-amber-700",
    prontuario: false,
    agenda: true,
  },
] as const;

export function ArchitectureBento() {
  return (
    <section
      id="exclusividade"
      className="relative scroll-mt-20 border-b border-slate-200/80 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Sereno de Exclusividade e Origem */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Uma criação única e registrada para a sua clínica.
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Desenvolvemos uma ferramenta sob medida para a endocrinologia — com a privacidade e o padrão que seus pacientes merecem.
          </p>
        </div>

        {/* Bento Grid Assimétrico — 4 Pilares Serenos de Exclusividade e Origem */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {/* CARD 1 (7 de 12): A sua clínica em primeiro plano */}
          <article className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-clinical sm:p-8 lg:col-span-7">
            <div>
              <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-900 sm:text-2xl">
                A sua clínica em primeiro plano
              </h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-[15px]">
                Painel, aplicativo e PDFs levam exclusivamente o nome, a logo e as cores da sua clínica.
              </p>
            </div>

            <div className="mt-7 space-y-3">
              <div className="flex items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-2xs">
                <div className="flex min-w-0 items-center gap-2 font-mono text-xs text-slate-800">
                  <Lock className="h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span className="truncate font-semibold">app.suaclinica.com.br</span>
                </div>
                <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  Endereço próprio
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-[10.5px] font-semibold text-slate-400">
                    No celular do paciente
                  </p>
                  <div className="mt-2.5 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500 font-mono text-xs font-extrabold text-white shadow-xs">
                      SC
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-slate-900">
                        Sua Clínica
                      </p>
                      <p className="truncate text-xs text-slate-500">
                        iOS &amp; Android com a sua marca
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-[10.5px] font-semibold text-slate-400">
                    Relatórios e prescrições
                  </p>
                  <div className="mt-2.5 rounded-xl border border-slate-100 bg-slate-50 p-2.5">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 shrink-0 text-indigo-600" aria-hidden="true" />
                      <span className="truncate text-xs font-bold text-slate-800">
                        PDF com o seu cabeçalho
                      </span>
                    </div>
                    <div className="mt-2 flex items-end gap-1.5" aria-hidden="true">
                      <span className="h-2.5 w-3 rounded-xs bg-emerald-400" />
                      <span className="h-4 w-3 rounded-xs bg-sky-400" />
                      <span className="h-3 w-3 rounded-xs bg-indigo-400" />
                      <span className="h-4.5 w-3 rounded-xs bg-amber-400" />
                      <span className="ml-auto text-[10px] font-semibold text-emerald-700">
                        Dieta &amp; Glicemia
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* CARD 2 (5 de 12): Um espaço privado e só seu */}
          <article className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-clinical sm:p-8 lg:col-span-5">
            <div>
              <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-900">
                Um espaço privado e só seu
              </h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-[15px]">
                Os dados dos seus pacientes ficam em um ambiente exclusivo da sua clínica, com sigilo médico e LGPD.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200/90 bg-gradient-to-b from-emerald-50/55 via-white to-sky-50/40 p-5">
              <div className="rounded-xl border border-emerald-200 bg-white px-3.5 py-2.5 text-center text-xs font-bold text-emerald-800 shadow-2xs">
                Sua Clínica · Espaço Privado
              </div>

              <svg viewBox="0 0 220 30" className="h-7 w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="exclusiveFlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#0EA5E9" />
                  </linearGradient>
                </defs>
                <line
                  x1="110"
                  y1="0"
                  x2="110"
                  y2="28"
                  stroke="url(#exclusiveFlow)"
                  strokeWidth="2.4"
                />
                <circle cx="110" cy="14" r="3.5" fill="#0EA5E9" />
              </svg>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-200/90 bg-white px-2.5 py-2.5 text-xs font-bold text-slate-800">
                  <Database className="h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span>Banco exclusivo</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 rounded-xl border border-sky-200/90 bg-white px-2.5 py-2.5 text-xs font-bold text-slate-800">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-sky-600" aria-hidden="true" />
                  <span>Sigilo &amp; LGPD</span>
                </div>
              </div>
            </div>
          </article>

          {/* CARD 3 (5 de 12): Tecnologia original e registrada — Somos FRDOC */}
          <article className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-clinical sm:p-8 lg:col-span-5">
            <div>
              <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-900">
                Tecnologia original e registrada
              </h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-[15px]">
                Criado do zero para a rotina real da endocrinologia, com identidade própria.{" "}
                <strong className="font-bold text-slate-900">Somos FRDOC.</strong>
              </p>
            </div>

            <div className="mt-6 relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5">
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-sm font-extrabold tracking-wide text-slate-900">
                      FRDOC
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      Tecnologia Clínica Registrada
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 text-[10px] font-bold text-indigo-700">
                  Autoral
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
                <span>Feito para endocrinologistas</span>
                <span className="font-bold text-slate-900">Somos FRDOC.</span>
              </div>
            </div>
          </article>

          {/* CARD 4 (7 de 12): Entregue pronto, sem equipe de TI */}
          <article className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-clinical sm:p-8 lg:col-span-7">
            <div>
              <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-900 sm:text-2xl">
                Entregue pronto, sem equipe de TI
              </h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-[15px]">
                Cuidamos da personalização, da segurança e do treinamento da sua equipe para você focar no atendimento.
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-slate-100 bg-slate-50/90 px-4 py-2.5 text-[11px] font-semibold text-slate-500">
                <span>Acesso por função</span>
                <span className="text-center">Prontuário</span>
                <span className="text-center">Agenda &amp; Pacotes</span>
              </div>
              <div className="divide-y divide-slate-100">
                {TEAM_ACCESS.map((item) => (
                  <div
                    key={item.role}
                    className="grid grid-cols-[1.4fr_1fr_1fr] items-center px-4 py-2.5 text-xs"
                  >
                    <div>
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${item.badgeClass}`}
                      >
                        {item.role}
                      </span>
                    </div>
                    <span className="flex justify-center">
                      {item.prontuario ? (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                          <Check className="h-3.5 w-3.5" aria-label="Permitido" />
                        </span>
                      ) : (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                          <X className="h-3.5 w-3.5" aria-label="Protegido por sigilo médico" />
                        </span>
                      )}
                    </span>
                    <span className="flex justify-center">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="h-3.5 w-3.5" aria-label="Permitido" />
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                Sigilo médico respeitado
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-sky-600" aria-hidden="true" />
                Entregamos tudo pronto para usar
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
