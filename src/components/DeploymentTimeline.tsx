import React from "react";
import { CheckCircle2, Palette, Rocket, ServerCog } from "lucide-react";

const DEPLOYMENT_STEPS = [
  {
    number: "01",
    phase: "Etapa 1 · Identidade",
    title: "Diagnóstico e Personalização Visual",
    description:
      "Mapeamos o fluxo clínico da sua equipe, aplicamos a identidade visual completa da clínica (logotipo, paleta, cabeçalhos de PDF), configuramos o domínio próprio e definimos cada perfil de acesso.",
    deliverables: [
      "Mapeamento do fluxo assistencial",
      "Identidade visual e domínio próprio",
      "Perfis Diretoria, Médico e Secretária",
    ],
    badgeClass: "border-emerald-200 text-emerald-700 bg-white",
    iconClass: "border-emerald-200 bg-emerald-50 text-emerald-600",
    checkClass: "text-emerald-600",
    railGradient: "from-emerald-500 to-sky-500",
    icon: Palette,
  },
  {
    number: "02",
    phase: "Etapa 2 · Engenharia",
    title: "Provisionamento do Ambiente Dedicado",
    description:
      "Nossa equipe sobe o servidor exclusivo e o banco de dados isolado da sua clínica com certificados SSL, criptografia AES-256/TLS 1.3, rotina de backups automatizados e compliance técnico LGPD/CFM.",
    deliverables: [
      "Servidor e banco de dados exclusivos",
      "Criptografia e trilha de auditoria",
      "Conformidade técnica LGPD & CFM",
    ],
    badgeClass: "border-sky-200 text-sky-700 bg-white",
    iconClass: "border-sky-200 bg-sky-50 text-sky-600",
    checkClass: "text-sky-600",
    railGradient: "from-sky-500 to-indigo-500",
    icon: ServerCog,
  },
  {
    number: "03",
    phase: "Etapa 3 · Ativação",
    title: "Entrega do Painel + App e Treinamento",
    description:
      "Ativamos o Painel Web e o Aplicativo Mobile prontos para encantar seus pacientes e conduzimos o treinamento prático para médicos, nutricionistas e recepção — com suporte próximo no início da operação.",
    deliverables: [
      "Painel Web + App White-Label no ar",
      "Treinamento prático da equipe clínica",
      "Acompanhamento assistido pós-ativação",
    ],
    badgeClass: "border-indigo-200 text-indigo-700 bg-white",
    iconClass: "border-indigo-200 bg-indigo-50 text-indigo-600",
    checkClass: "text-indigo-600",
    railGradient: "",
    icon: Rocket,
  },
] as const;

export function DeploymentTimeline() {
  return (
    <section
      id="implantacao"
      className="relative scroll-mt-20 border-b border-slate-200/80 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold tracking-[0.12em] text-indigo-600 uppercase">
              05 / Implantação Chave-na-Mão
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Zero dor de cabeça para a clínica. Nossa engenharia entrega tudo pronto.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600 lg:text-right">
            Sua clínica <strong className="font-semibold text-slate-900">não precisa de equipe de TI interna</strong>. Conduzimos a personalização, o provisionamento dedicado e o treinamento sem interromper a agenda do consultório.
          </p>
        </div>

        {/* Timeline Horizontal (Desktop) e Vertical com Gradiente Esmeralda -> Ciano -> Índigo (Mobile) */}
        <div className="relative mt-14">
          {/* Linha guia vertical em gradiente (Mobile / Tablet) */}
          <div
            className="pointer-events-none absolute top-6 bottom-6 left-6 w-0.5 bg-gradient-to-b from-emerald-500 via-sky-500 to-indigo-500 lg:hidden"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
            {DEPLOYMENT_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === DEPLOYMENT_STEPS.length - 1;
              return (
                <li key={step.number} className="relative pl-16 lg:pl-0">
                  {/* Trilho horizontal em gradiente conectando 01 -> 02 -> 03 sem sobra após 03 */}
                  {!isLast ? (
                    <span
                      className={`pointer-events-none absolute top-7 right-[-1.5rem] left-14 hidden h-0.5 bg-gradient-to-r ${step.railGradient} lg:block`}
                      aria-hidden="true"
                    />
                  ) : null}

                  {/* Marcador numérico em fonte mono */}
                  <div
                    className={`absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-2xl border font-mono text-sm font-extrabold shadow-xs lg:relative lg:z-10 lg:mb-6 lg:h-14 lg:w-14 lg:text-base ${step.badgeClass}`}
                  >
                    {step.number}
                  </div>

                  {/* Card do Passo */}
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-clinical transition-colors duration-150 hover:border-slate-300">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                          {step.phase}
                        </span>
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-xl border ${step.iconClass}`}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-bold tracking-[-0.02em] text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>

                    <ul className="mt-5 space-y-2 border-t border-slate-200/80 pt-4">
                      {step.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs font-medium text-slate-700"
                        >
                          <CheckCircle2
                            className={`h-3.5 w-3.5 shrink-0 ${step.checkClass}`}
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
