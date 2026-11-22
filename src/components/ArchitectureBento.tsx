import React from "react";
import {
  Check,
  Database,
  FileText,
  HeartHandshake,
  Lock,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";

const TEAM_ACCESS = [
  {
    role: "Diretoria",
    badgeClass: "border-violet-200 bg-violet-50 text-violet-700",
    prontuario: true,
    agenda: true,
  },
  {
    role: "Médico",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    prontuario: true,
    agenda: true,
  },
  {
    role: "Recepção",
    badgeClass: "border-sky-200 bg-sky-50 text-sky-700",
    prontuario: false,
    agenda: true,
  },
] as const;

export function ArchitectureBento() {
  return (
    <section
      id="seguranca"
      className="relative scroll-mt-20 border-b border-slate-200/80 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Enxuto */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Por que o FRdoc é diferente.
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Sua marca em evidência, dados protegidos e zero preocupação técnica.
          </p>
        </div>

        {/* Bento Grid Assimétrico — 4 Benefícios Claros para Médicos */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {/* CARD 1 (7 de 12): Os dados dos seus pacientes são só seus */}
          <article className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-clinical sm:p-8 lg:col-span-7">
            <div>
              <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-900 sm:text-2xl">
                Os dados dos seus pacientes são só seus
              </h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-[15px]">
                Nada de sistema compartilhado. Sua clínica ganha um espaço exclusivo, privado e protegido pela LGPD.
              </p>
            </div>

            {/* Mini-ilustração comparativa limpa */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-rose-200/90 bg-gradient-to-b from-rose-50/50 to-amber-50/30 p-4">
                <p className="text-xs font-bold text-rose-700">Sistemas comuns</p>
                <div className="mt-3.5 grid grid-cols-3 gap-1.5">
                  {["Clínica A", "Clínica B", "Clínica C"].map((clinic) => (
                    <div
                      key={clinic}
                      className="rounded-lg border border-amber-200/90 bg-white py-1.5 text-center text-[10px] font-semibold text-amber-800"
                    >
                      {clinic}
                    </div>
                  ))}
                </div>
                <svg viewBox="0 0 220 28" className="h-7 w-full text-rose-400" aria-hidden="true">
                  <path
                    d="M36 0 V12 L110 24 M110 0 V24 M184 0 V12 L110 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeDasharray="3 3"
                    fill="none"
                  />
                </svg>
                <div className="rounded-xl border border-dashed border-rose-300 bg-white px-3 py-2 text-center text-xs font-semibold text-rose-700">
                  Tudo misturado no mesmo lugar
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-300/90 bg-gradient-to-b from-emerald-50/60 to-sky-50/50 p-4 ring-1 ring-emerald-500/15">
                <p className="text-xs font-bold text-emerald-700">Com o FRdoc</p>
                <div className="mt-3.5 rounded-lg border border-emerald-200 bg-white py-1.5 text-center text-[11px] font-bold text-emerald-800 shadow-2xs">
                  Sua clínica · Espaço privado
                </div>
                <svg viewBox="0 0 220 28" className="h-7 w-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="bentoDropClean" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#0EA5E9" />
                    </linearGradient>
                  </defs>
                  <line x1="110" y1="0" x2="110" y2="24" stroke="url(#bentoDropClean)" strokeWidth="2.4" />
                  <circle cx="110" cy="12" r="3.5" fill="#0EA5E9" />
                </svg>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-white px-2 py-2 text-[11px] font-bold text-slate-800">
                    <Database className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                    <span>Banco privado</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 rounded-xl border border-sky-200 bg-white px-2 py-2 text-[11px] font-bold text-slate-800">
                    <ShieldCheck className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
                    <span>Sigilo LGPD</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* CARD 2 (5 de 12): A marca da sua clínica em destaque */}
          <article className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-clinical sm:p-8 lg:col-span-5">
            <div>
              <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-900">
                A marca da sua clínica em destaque
              </h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-[15px]">
                Seus pacientes baixam um app com o seu nome e suas cores — elevando o prestígio da sua consulta.
              </p>
            </div>

            <div className="mt-6 space-y-2.5">
              <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5">
                <div className="flex min-w-0 items-center gap-2 font-mono text-xs text-slate-800">
                  <Lock className="h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span className="truncate font-semibold">app.suaclinica.com.br</span>
                </div>
                <span className="shrink-0 rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                  Seguro
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-[10px] font-semibold text-slate-400">No celular</p>
                  <div className="mt-2 flex items-center gap-2.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-sky-500 to-indigo-500 font-mono text-xs font-extrabold text-white shadow-xs">
                      SC
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-bold text-slate-900">Sua Clínica</p>
                      <p className="truncate text-[10px] text-slate-500">iOS &amp; Android</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-[10px] font-semibold text-slate-400">Relatório PDF</p>
                  <div className="mt-2 rounded-lg border border-slate-100 bg-slate-50 p-2">
                    <div className="flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 shrink-0 text-indigo-600" aria-hidden="true" />
                      <span className="truncate text-[10px] font-bold text-slate-800">
                        Sua Logo
                      </span>
                    </div>
                    <div className="mt-1.5 flex items-end gap-1" aria-hidden="true">
                      <span className="h-2.5 w-2 rounded-xs bg-emerald-400" />
                      <span className="h-3.5 w-2 rounded-xs bg-sky-400" />
                      <span className="h-2 w-2 rounded-xs bg-indigo-400" />
                      <span className="h-4 w-2 rounded-xs bg-amber-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* CARD 3 (5 de 12): Pacientes que seguem o plano e voltam */}
          <article className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-clinical sm:p-8 lg:col-span-5">
            <div>
              <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-900">
                Pacientes que seguem o plano e voltam
              </h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-[15px]">
                Quem se sente cuidado todos os dias tem mais resultado, indica amigos e renova o acompanhamento.
              </p>
            </div>

            <div className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 56 56" className="h-14 w-14 shrink-0 -rotate-90" aria-hidden="true">
                    <defs>
                      <linearGradient id="retentionRing" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="55%" stopColor="#0EA5E9" />
                        <stop offset="100%" stopColor="#6366F1" />
                      </linearGradient>
                    </defs>
                    <circle cx="28" cy="28" r="22" fill="none" stroke="#E2E8F0" strokeWidth="5" />
                    <circle
                      cx="28"
                      cy="28"
                      r="22"
                      fill="none"
                      stroke="url(#retentionRing)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray="138.2"
                      strokeDashoffset="18"
                    />
                  </svg>
                  <div>
                    <p className="font-mono text-lg font-extrabold text-slate-900">87%</p>
                    <p className="text-xs font-medium text-slate-500">Acompanhamento diário</p>
                  </div>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <div className="space-y-1.5 border-t border-slate-100 pt-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-600">Retornos e renovações</span>
                  <span className="font-mono font-bold text-emerald-700">92%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-emerald-50">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
                <span className="inline-flex items-center gap-1.5">
                  <Smartphone className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
                  Celular do paciente
                </span>
                <svg width="46" height="12" viewBox="0 0 46 12" aria-hidden="true">
                  <defs>
                    <linearGradient id="miniSync" x1="0" y1="0" x2="46" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0EA5E9" />
                      <stop offset="50%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                  <line
                    x1="2"
                    y1="6"
                    x2="44"
                    y2="6"
                    stroke="url(#miniSync)"
                    strokeWidth="2.5"
                    strokeDasharray="5 5"
                    className="animate-telemetry-flow"
                  />
                </svg>
                <span className="text-indigo-700">Seu prontuário</span>
              </div>
            </div>
          </article>

          {/* CARD 4 (7 de 12): Você não precisa de equipe de TI */}
          <article className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-clinical sm:p-8 lg:col-span-7">
            <div>
              <h3 className="text-xl font-bold tracking-[-0.02em] text-slate-900 sm:text-2xl">
                Você não precisa de equipe de TI
              </h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-[15px]">
                Nós personalizamos, colocamos no ar e treinamos sua equipe. Sua única preocupação é atender.
              </p>
            </div>

            {/* Acesso separado para Diretoria, Médico e Recepção */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-slate-100 bg-slate-50/90 px-4 py-2.5 text-[11px] font-semibold text-slate-500">
                <span>Acesso separado</span>
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
                          <X className="h-3.5 w-3.5" aria-label="Bloqueado por sigilo médico" />
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
                Sigilo médico absoluto
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
