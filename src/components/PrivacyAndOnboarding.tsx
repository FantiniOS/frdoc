import React from "react";
import { Database, GraduationCap, ShieldCheck, Wrench } from "lucide-react";

const PRIVACY_PILLARS = [
  {
    icon: ShieldCheck,
    iconStyle: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    topLine: "from-emerald-500 to-teal-500",
    badge: "Banco próprio · LGPD",
    badgeStyle: "border-emerald-200 bg-emerald-50/70 text-emerald-800",
    title: "Ambiente independente e LGPD",
    description:
      "Cada clínica contratante opera com banco de dados próprio e separado, garantindo sigilo médico absoluto.",
  },
  {
    icon: Wrench,
    iconStyle: "bg-sky-50 text-sky-700 border-sky-200/80",
    topLine: "from-sky-500 to-indigo-500",
    badge: "Entrega completa",
    badgeStyle: "border-sky-200 bg-sky-50/70 text-sky-800",
    title: "Sem exigir equipe de TI",
    description:
      "Cuidamos de toda a configuração e entrega técnica para sua equipe focar apenas nos pacientes.",
  },
  {
    icon: GraduationCap,
    iconStyle: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    topLine: "from-indigo-500 to-violet-500",
    badge: "Médicos e recepção",
    badgeStyle: "border-indigo-200 bg-indigo-50/70 text-indigo-800",
    title: "Treinamento prático",
    description:
      "Preparamos médicos e recepção para usar o painel e o aplicativo com fluidez desde o primeiro dia.",
  },
] as const;

export function PrivacyAndOnboarding() {
  return (
    <section
      id="privacidade"
      className="relative scroll-mt-20 border-b border-slate-200/80 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/70 px-3 py-1 text-xs font-semibold text-emerald-800">
            <Database className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
            <span>Privacidade e Implantação</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Dados separados por clínica. Tudo entregue pronto para usar.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRIVACY_PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-7 shadow-clinical transition-colors hover:border-slate-300"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.topLine}`}
                  aria-hidden="true"
                />
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${item.iconStyle}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${item.badgeStyle}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-[-0.02em] text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
