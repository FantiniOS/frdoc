import React from "react";
import { HeartHandshake, HeartPulse, Utensils } from "lucide-react";

const ESSENCE_CARDS = [
  {
    icon: HeartPulse,
    iconStyle: "bg-rose-50 text-rose-600 border-rose-200/80",
    topLine: "from-rose-500 to-emerald-500",
    title: "Consultas com dados reais, não lembranças",
    description:
      "Curvas de glicemia, insulina e evolução já chegam organizadas antes do paciente entrar na sala.",
  },
  {
    icon: Utensils,
    iconStyle: "bg-amber-50 text-amber-600 border-amber-200/80",
    topLine: "from-amber-500 to-teal-500",
    title: "Dieta que o paciente realmente segue",
    description:
      "Plano alimentar pela Tabela TACO no bolso, com medidas caseiras e trocas inteligentes.",
  },
  {
    icon: HeartHandshake,
    iconStyle: "bg-sky-50 text-sky-600 border-sky-200/80",
    topLine: "from-sky-500 to-indigo-500",
    title: "Continuidade fora do consultório",
    description:
      "Acompanhamento diário de hábitos e evolução que fortalece a adesão e o vínculo com a clínica.",
  },
] as const;

export function EndocrinologyEssence() {
  return (
    <section className="relative border-b border-slate-200/80 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Feito para servir à rotina do endocrinologista.
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            O FRDOC não é medicina — é uma ferramenta exclusiva para ampliar a qualidade do seu cuidado.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {ESSENCE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-7 shadow-clinical transition-colors hover:border-slate-300"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.topLine}`}
                  aria-hidden="true"
                />
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${card.iconStyle}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-[-0.02em] text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
