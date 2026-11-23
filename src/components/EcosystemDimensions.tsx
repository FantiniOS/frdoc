import React from "react";
import {
  Activity,
  CalendarClock,
  Droplets,
  Dumbbell,
  FileText,
  HeartPulse,
  Moon,
  Scale,
  Utensils,
} from "lucide-react";

const ECOSYSTEM_MODULES = [
  {
    icon: Scale,
    iconStyle: "bg-teal-50 text-teal-700 border-teal-200/80",
    topLine: "from-teal-500 to-emerald-500",
    title: "Controle de Peso e Medidas",
    description:
      "Evolução clara do peso e do progresso corporal ao longo do acompanhamento.",
  },
  {
    icon: Activity,
    iconStyle: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    topLine: "from-emerald-500 to-cyan-500",
    title: "Saúde Intestinal (Escala de Bristol)",
    description:
      "Registro prático das evacuações e consistência intestinal sem constrangimento na consulta.",
  },
  {
    icon: Droplets,
    iconStyle: "bg-sky-50 text-sky-700 border-sky-200/80",
    topLine: "from-sky-500 to-cyan-500",
    title: "Hidratação Diária",
    description:
      "Acompanhamento real das metas e do consumo diário de água.",
  },
  {
    icon: Moon,
    iconStyle: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    topLine: "from-indigo-500 to-violet-500",
    title: "Qualidade do Sono",
    description:
      "Registro das noites e horas dormidas para avaliar impacto metabólico e hormonal.",
  },
  {
    icon: Dumbbell,
    iconStyle: "bg-orange-50 text-orange-700 border-orange-200/80",
    topLine: "from-orange-500 to-amber-500",
    title: "Atividade Física e Treinos",
    description:
      "Histórico real de exercícios integrado à evolução de peso e dieta.",
  },
  {
    icon: Utensils,
    iconStyle: "bg-amber-50 text-amber-700 border-amber-200/80",
    topLine: "from-amber-500 to-emerald-500",
    title: "Plano Alimentar (Tabela TACO)",
    description:
      "Prescrição com medidas caseiras e substituições inteligentes no bolso do paciente.",
  },
  {
    icon: HeartPulse,
    iconStyle: "bg-rose-50 text-rose-700 border-rose-200/80",
    topLine: "from-rose-500 to-amber-500",
    title: "Glicemia, Insulina e Medicações",
    description:
      "Curvas claras por horário e relatório em PDF pronto para a consulta.",
  },
  {
    icon: FileText,
    iconStyle: "bg-violet-50 text-violet-700 border-violet-200/80",
    topLine: "from-violet-500 to-sky-500",
    title: "Receituário, Exames e Atestados",
    description:
      "Emissão rápida de receitas, pedidos de exames e documentos clínicos em PDF.",
  },
  {
    icon: CalendarClock,
    iconStyle: "bg-cyan-50 text-cyan-700 border-cyan-200/80",
    topLine: "from-cyan-500 to-indigo-500",
    title: "Gestão Completa da Clínica",
    description:
      "Prontuário, agenda, pacotes de consultas, canal com a recepção e acessos da equipe.",
  },
] as const;

export function EcosystemDimensions() {
  return (
    <section
      id="ecossistema"
      className="relative scroll-mt-20 border-b border-slate-200/80 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            A central de informações que sua clínica sempre precisou.
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Hormônios e metabolismo respondem à rotina inteira. Tudo o que o paciente vive entre consultas chega organizado na sua tela.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ECOSYSTEM_MODULES.map((mod) => {
            const Icon = mod.icon;
            return (
              <article
                key={mod.title}
                className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 shadow-clinical transition-colors hover:border-slate-300"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${mod.topLine}`}
                  aria-hidden="true"
                />
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${mod.iconStyle}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold tracking-[-0.015em] text-slate-900 sm:text-[17px]">
                  {mod.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {mod.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
