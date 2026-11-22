import React from "react";
import { Palette, Rocket, ShieldCheck } from "lucide-react";

const START_STEPS = [
  {
    number: "01",
    title: "Personalizamos com a sua marca",
    description: "Aplicamos logo, cores e o jeito da sua clínica trabalhar.",
    badgeClass: "border-emerald-200 text-emerald-700 bg-white",
    iconClass: "border-emerald-200 bg-emerald-50 text-emerald-600",
    railGradient: "from-emerald-500 to-sky-500",
    icon: Palette,
  },
  {
    number: "02",
    title: "Deixamos tudo pronto no ar",
    description:
      "Preparamos seu ambiente exclusivo e seguro, sem você mexer em nada técnico.",
    badgeClass: "border-sky-200 text-sky-700 bg-white",
    iconClass: "border-sky-200 bg-sky-50 text-sky-600",
    railGradient: "from-sky-500 to-indigo-500",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Treinamos sua equipe",
    description:
      "Entregamos o painel e o app prontos para encantar seus pacientes desde o primeiro dia.",
    badgeClass: "border-indigo-200 text-indigo-700 bg-white",
    iconClass: "border-indigo-200 bg-indigo-50 text-indigo-600",
    railGradient: "",
    icon: Rocket,
  },
] as const;

export function DeploymentTimeline() {
  return (
    <section className="relative border-b border-slate-200/80 bg-[#F8FAFC] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Comece em 3 passos simples.
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Nossa equipe cuida de tudo para você atender sem interrupções.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Linha vertical em gradiente no mobile */}
          <div
            className="pointer-events-none absolute top-6 bottom-6 left-6 w-0.5 bg-gradient-to-b from-emerald-500 via-sky-500 to-indigo-500 lg:hidden"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
            {START_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === START_STEPS.length - 1;
              return (
                <li key={step.number} className="relative pl-16 lg:pl-0">
                  {!isLast ? (
                    <span
                      className={`pointer-events-none absolute top-7 right-[-1.5rem] left-14 hidden h-0.5 bg-gradient-to-r ${step.railGradient} lg:block`}
                      aria-hidden="true"
                    />
                  ) : null}

                  <div
                    className={`absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-2xl border font-mono text-sm font-extrabold shadow-xs lg:relative lg:z-10 lg:mb-6 lg:h-14 lg:w-14 lg:text-base ${step.badgeClass}`}
                  >
                    {step.number}
                  </div>

                  <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-clinical sm:p-7">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${step.iconClass}`}
                    >
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold tracking-[-0.02em] text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
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
