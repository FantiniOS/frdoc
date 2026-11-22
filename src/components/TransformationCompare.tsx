import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const WITHOUT_FRDOC = [
  "Paciente some entre consultas e volta sem dados reais.",
  "PDF de dieta perdido no WhatsApp e mensagens fora de hora.",
  "Glicemias anotadas no papel que consomem tempo da consulta.",
] as const;

const WITH_FRDOC = [
  "Você abre a consulta já vendo toda a evolução do paciente.",
  "Aplicativo próprio com o nome e as cores da sua clínica.",
  "Dieta interativa no bolso com trocas inteligentes em um toque.",
] as const;

export function TransformationCompare() {
  return (
    <section className="relative border-b border-slate-200/80 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            O fim das consultas no escuro.
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Veja como a rotina do consultório muda já na primeira semana.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Sem o FRdoc */}
          <div className="relative overflow-hidden rounded-3xl border border-rose-200/80 bg-gradient-to-b from-rose-50/40 via-white to-white p-7 shadow-clinical sm:p-8">
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-400 to-amber-400"
              aria-hidden="true"
            />
            <h3 className="text-lg font-bold text-rose-700">Sem o FRdoc</h3>

            <ul className="mt-6 space-y-4">
              {WITHOUT_FRDOC.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-rose-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-slate-700 sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Com o FRdoc */}
          <div className="relative overflow-hidden rounded-3xl border border-emerald-200/90 bg-gradient-to-b from-emerald-50/40 via-white to-sky-50/25 p-7 shadow-clinical-lg ring-1 ring-emerald-500/10 sm:p-8">
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500"
              aria-hidden="true"
            />
            <h3 className="text-lg font-bold text-emerald-700">Com o FRdoc</h3>

            <ul className="mt-6 space-y-4">
              {WITH_FRDOC.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-slate-900 sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
