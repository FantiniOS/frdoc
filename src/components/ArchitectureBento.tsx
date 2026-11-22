import React from "react";
import {
  AlertTriangle,
  Check,
  Database,
  FileText,
  Globe,
  Lock,
  RefreshCw,
  Server,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";

const RBAC_MATRIX = [
  {
    role: "Diretoria Clínica",
    badgeClass: "border-violet-200 bg-violet-50 text-violet-700",
    prontuario: true,
    auditoria: true,
    agendaPacotes: true,
  },
  {
    role: "Médico",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
    prontuario: true,
    auditoria: false,
    agendaPacotes: true,
  },
  {
    role: "Secretária",
    badgeClass: "border-sky-200 bg-sky-50 text-sky-700",
    prontuario: false,
    auditoria: false,
    agendaPacotes: true,
  },
] as const;

export function ArchitectureBento() {
  return (
    <section
      id="soberania"
      className="relative scroll-mt-20 border-b border-slate-200/80 bg-[#F8FAFC] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold tracking-[0.12em] text-emerald-700 uppercase">
            04 / Arquitetura de Soberania
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Sua marca na frente. Servidor e banco exclusivos nos bastidores.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            O FRdoc não mistura seus pacientes com os de milhares de outras clínicas. Cada operação roda em uma cápsula dedicada (Single-Tenant + White-Label) que blinda seu sigilo médico e valoriza sua marca.
          </p>
        </div>

        {/* Bento Grid Assimétrico (12 colunas no Desktop) */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {/* CARD 1 (Principal - 7 de 12): Isolamento Single-Tenant (Coral/Âmbar vs Esmeralda/Ciano) */}
          <article className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-clinical sm:p-8 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-[11px] font-bold text-emerald-800">
                  <Server className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                  ISOLAMENTO SINGLE-TENANT
                </span>
                <span className="font-mono text-[11px] font-semibold text-sky-700">
                  SOBERANIA TOTAL DOS DADOS
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-slate-900 sm:text-2xl">
                Servidor e banco de dados 100% exclusivos da sua clínica
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Enquanto softwares genéricos empilham dezenas de milhares de consultórios no mesmo banco, o FRdoc provisiona servidor próprio, banco isolado e chaves criptográficas exclusivas para o seu patrimônio clínico.
              </p>
            </div>

            {/* Diagrama Comparativo: Coral/Âmbar (SaaS Comum) vs Esmeralda/Ciano (FRdoc) */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Lado A: SaaS Comum (Coral/Âmbar de Alerta) */}
              <div className="rounded-2xl border border-rose-200/90 bg-gradient-to-b from-rose-50/50 to-amber-50/30 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">SaaS Comum</span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-rose-100 px-2 py-0.5 font-mono text-[10px] font-bold text-rose-700">
                    <AlertTriangle className="h-3 w-3" aria-hidden="true" />
                    MULTI-TENANT
                  </span>
                </div>

                <div className="mt-4 flex flex-col items-center">
                  <div className="grid w-full grid-cols-3 gap-1.5">
                    {["Clínica A", "Clínica B", "Clínica C"].map((clinic) => (
                      <div
                        key={clinic}
                        className="rounded-lg border border-amber-200/90 bg-white py-1.5 text-center font-mono text-[10px] font-semibold text-amber-800"
                      >
                        {clinic}
                      </div>
                    ))}
                  </div>

                  <svg viewBox="0 0 220 34" className="h-8 w-full text-rose-400" aria-hidden="true">
                    <path
                      d="M36 0 V14 L110 28 M110 0 V28 M184 0 V14 L110 28"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeDasharray="3 3"
                      fill="none"
                    />
                  </svg>

                  <div className="w-full rounded-xl border border-dashed border-rose-300 bg-white px-3 py-2.5 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-rose-700">
                      <Database className="h-3.5 w-3.5 text-rose-500" aria-hidden="true" />
                      <span>Banco Compartilhado</span>
                    </div>
                    <p className="mt-1 font-mono text-[10px] text-rose-600/80">
                      Dados misturados no mesmo pool
                    </p>
                  </div>
                </div>
              </div>

              {/* Lado B: FRdoc Cápsula Dedicada (Esmeralda/Ciano) */}
              <div className="rounded-2xl border border-emerald-300/90 bg-gradient-to-b from-emerald-50/60 to-sky-50/50 p-4 ring-1 ring-emerald-500/15">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">Cápsula FRdoc</span>
                  <span className="rounded-md bg-gradient-to-r from-emerald-600 to-sky-600 px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                    SINGLE-TENANT
                  </span>
                </div>

                <div className="mt-4 flex flex-col items-center">
                  <div className="w-full rounded-lg border border-emerald-200 bg-white py-1.5 text-center font-mono text-[10px] font-extrabold text-emerald-700 shadow-2xs">
                    SUA CLÍNICA · AMBIENTE ISOLADO
                  </div>

                  <svg viewBox="0 0 220 34" className="h-8 w-full" aria-hidden="true">
                    <defs>
                      <linearGradient id="bentoDrop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                      </linearGradient>
                    </defs>
                    <line x1="110" y1="0" x2="110" y2="30" stroke="url(#bentoDrop)" strokeWidth="2.4" />
                    <circle cx="110" cy="15" r="3.5" fill="#0EA5E9" />
                  </svg>

                  <div className="grid w-full grid-cols-2 gap-2">
                    <div className="rounded-xl border border-emerald-200 bg-white px-2.5 py-2 text-center shadow-2xs">
                      <Server className="mx-auto h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                      <p className="mt-1 text-[11px] font-bold text-slate-900">
                        Servidor Próprio
                      </p>
                    </div>
                    <div className="rounded-xl border border-sky-200 bg-white px-2.5 py-2 text-center shadow-2xs">
                      <Database className="mx-auto h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
                      <p className="mt-1 text-[11px] font-bold text-slate-900">
                        Banco Exclusivo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* CARD 2 (5 de 12): Marca 100% da Clínica (White-Label) */}
          <article className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-clinical sm:p-8 lg:col-span-5">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 font-mono text-[11px] font-bold text-sky-700">
                <Globe className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
                WHITE-LABEL INTEGRAL
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-slate-900">
                Marca 100% da sua clínica em cada tela e PDF
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Do endereço de acesso ao ícone colorido no celular do paciente e aos mapas glicêmicos impressos — sua marca brilha sem referências de terceiros.
              </p>
            </div>

            <div className="mt-6 space-y-2.5">
              <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-[#F8FAFC] px-3.5 py-2.5">
                <div className="flex min-w-0 items-center gap-2 font-mono text-xs text-slate-700">
                  <Lock className="h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span className="truncate font-semibold text-slate-900">
                    app.suaclinica.com.br
                  </span>
                </div>
                <span className="shrink-0 rounded-md bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700">
                  SSL TLS 1.3
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3">
                  <p className="font-mono text-[10px] font-semibold text-slate-400 uppercase">
                    Ícone no Celular
                  </p>
                  <div className="mt-2.5 flex items-center gap-2.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-sky-500 to-indigo-500 font-mono text-xs font-extrabold text-white shadow-xs">
                      SC
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-bold text-slate-900">Sua Clínica</p>
                      <p className="truncate text-[10px] text-slate-500">iOS &amp; Android</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3">
                  <p className="font-mono text-[10px] font-semibold text-slate-400 uppercase">
                    PDF Institucional
                  </p>
                  <div className="mt-2.5 rounded-lg border border-slate-200/80 bg-white p-2">
                    <div className="flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 shrink-0 text-indigo-600" aria-hidden="true" />
                      <span className="truncate text-[10px] font-bold text-slate-800">
                        Cabeçalho Próprio
                      </span>
                    </div>
                    <div className="mt-2 flex items-end gap-1" aria-hidden="true">
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

          {/* CARD 3 (5 de 12): Sigilo Médico, LGPD & CFM com Badges Coloridos */}
          <article className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-clinical sm:p-8 lg:col-span-5">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 font-mono text-[11px] font-bold text-violet-700">
                <ShieldCheck className="h-3.5 w-3.5 text-violet-600" aria-hidden="true" />
                SIGILO MÉDICO, LGPD &amp; CFM
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-slate-900">
                Criptografia, auditoria e governança por perfil
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Trilha imutável de acessos e separação rigorosa entre gestão administrativa e sigilo assistencial do prontuário.
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] font-bold">
                <span className="rounded-lg border border-violet-200 bg-violet-50 px-2.5 py-1 text-violet-700">
                  AES-256
                </span>
                <span className="rounded-lg border border-sky-200 bg-sky-50 px-2.5 py-1 text-sky-700">
                  TLS 1.3
                </span>
                <span className="rounded-lg border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-indigo-700">
                  AUDIT LOG
                </span>
                <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-emerald-700">
                  LGPD &amp; CFM
                </span>
              </div>
            </div>

            {/* Matriz de Permissões com Badges Coloridos Solicitados */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC]">
              <div className="grid grid-cols-[1.55fr_1fr_1fr_1fr] border-b border-slate-200/80 bg-white px-3 py-2 font-mono text-[10px] font-semibold text-slate-500">
                <span>Perfil</span>
                <span className="text-center">Prontuário</span>
                <span className="text-center">Auditoria</span>
                <span className="text-center">Agenda</span>
              </div>
              <div className="divide-y divide-slate-200/60">
                {RBAC_MATRIX.map((item) => (
                  <div
                    key={item.role}
                    className="grid grid-cols-[1.55fr_1fr_1fr_1fr] items-center bg-white/70 px-3 py-2.5 text-xs"
                  >
                    <div>
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold ${item.badgeClass}`}
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
                          <X className="h-3.5 w-3.5" aria-label="Bloqueado por sigilo" />
                        </span>
                      )}
                    </span>
                    <span className="flex justify-center">
                      {item.auditoria ? (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                          <Check className="h-3.5 w-3.5" aria-label="Permitido" />
                        </span>
                      ) : (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                          <X className="h-3.5 w-3.5" aria-label="Restrito" />
                        </span>
                      )}
                    </span>
                    <span className="flex justify-center">
                      {item.agendaPacotes ? (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                          <Check className="h-3.5 w-3.5" aria-label="Permitido" />
                        </span>
                      ) : (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                          <X className="h-3.5 w-3.5" aria-label="Restrito" />
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* CARD 4 (7 de 12): Sincronia em Tempo Real (Gradiente Ciano -> Esmeralda -> Índigo) */}
          <article className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-clinical sm:p-8 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 font-mono text-[11px] font-bold text-sky-700">
                  <RefreshCw className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
                  SINCRONIA EM TEMPO REAL
                </span>
                <span className="font-mono text-[11px] font-semibold text-indigo-600">
                  WEB ↔ APP · LATÊNCIA &lt; 250ms
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-slate-900 sm:text-2xl">
                Lançou no aplicativo. Refletiu no prontuário.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Cada registro de glicemia, dose de insulina, hidratação ou substituição alimentar trafega criptografado direto para a instância da clínica — pronto para o médico agir com precisão.
              </p>
            </div>

            {/* Fluxo Contínuo com Linhas em Gradiente Ciano -> Esmeralda -> Índigo */}
            <div className="mt-7 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 sm:p-5">
              <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
                {/* Nó Esquerdo: App do Paciente */}
                <div className="rounded-xl border border-sky-200/80 bg-white p-3.5 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-sky-600" aria-hidden="true" />
                    <span className="text-xs font-bold text-slate-900">
                      App do Paciente
                    </span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between rounded-lg border border-emerald-200/70 bg-emerald-50/50 px-2.5 py-1.5">
                      <span className="text-[11px] font-semibold text-slate-700">
                        Glicemia Pós-Almoço
                      </span>
                      <span className="font-mono text-[11px] font-bold text-emerald-700">
                        112 mg/dL
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-sky-200/70 bg-sky-50/50 px-2.5 py-1.5">
                      <span className="text-[11px] font-semibold text-slate-700">
                        Hidratação
                      </span>
                      <span className="font-mono text-[11px] font-bold text-sky-700">
                        +500 ml
                      </span>
                    </div>
                  </div>
                </div>

                {/* Conector SVG Gradiente Ciano -> Esmeralda -> Índigo */}
                <div className="flex flex-col items-center justify-center px-1">
                  <div className="hidden items-center md:flex">
                    <svg width="96" height="36" viewBox="0 0 96 36" aria-hidden="true">
                      <defs>
                        <linearGradient id="syncFlowGrad" x1="0" y1="0" x2="96" y2="0" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#0EA5E9" />
                          <stop offset="50%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#6366F1" />
                        </linearGradient>
                      </defs>
                      <line x1="2" y1="18" x2="94" y2="18" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
                      <line
                        x1="2"
                        y1="18"
                        x2="94"
                        y2="18"
                        stroke="url(#syncFlowGrad)"
                        strokeWidth="3"
                        strokeDasharray="8 10"
                        strokeLinecap="round"
                        className="animate-telemetry-flow"
                      />
                      <circle cx="48" cy="18" r="5.5" fill="#FFFFFF" stroke="url(#syncFlowGrad)" strokeWidth="2.5" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 to-indigo-500 px-2.5 py-0.5 font-mono text-[10px] font-bold text-white shadow-2xs">
                    SYNC · TLS 1.3
                  </span>
                </div>

                {/* Nó Direito: Prontuário Web */}
                <div className="rounded-xl border border-indigo-200/80 bg-white p-3.5 shadow-2xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      Prontuário Web
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-indigo-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      EM TEMPO REAL
                    </span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="rounded-lg border border-indigo-100 bg-indigo-50/40 px-2.5 py-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-slate-800">
                          Curva &amp; Mapa Atualizados
                        </span>
                        <span className="font-mono text-[10px] font-bold text-indigo-700">
                          14:16
                        </span>
                      </div>
                      <p className="mt-0.5 text-[10px] text-slate-500">
                        Pronto para decisão na próxima consulta
                      </p>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-emerald-200/70 bg-emerald-50/40 px-2.5 py-1.5 font-mono text-[10px]">
                      <span className="text-slate-600">Consistência</span>
                      <span className="font-bold text-emerald-700">84% → 87%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
