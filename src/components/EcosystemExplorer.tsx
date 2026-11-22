"use client";

import React, { useState } from "react";
import {
  Activity,
  Apple,
  CalendarClock,
  Check,
  CheckCircle2,
  Droplets,
  Dumbbell,
  FileDown,
  Flame,
  LineChart,
  MessageSquare,
  Monitor,
  Repeat,
  Shield,
  Smartphone,
  Sparkles,
  Syringe,
  TrendingUp,
} from "lucide-react";

type SurfaceMode = "web" | "app";
type WebModuleId = "prontuario" | "glicemia" | "dietas" | "gestao";
type AppModuleId = "dieta-app" | "glicemia-app" | "checkins-app" | "evolucao-app";

interface ModuleItem<T extends string> {
  id: T;
  code: string;
  title: string;
  subtitle: string;
  metric: string;
  iconBg: string;
  activeBorder: string;
  railColor: string;
  metricClass: string;
  icon: React.ComponentType<{ className?: string }>;
}

const WEB_MODULES: readonly ModuleItem<WebModuleId>[] = [
  {
    id: "prontuario",
    code: "W-01",
    title: "Prontuário com Telemetria",
    subtitle:
      "A jornada metabólica completa em uma única tela — sem abrir 5 abas nem decifrar papéis antes de atender.",
    metric: "Curva + Composição + Adesão",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    activeBorder: "border-emerald-300",
    railColor: "bg-gradient-to-b from-emerald-500 to-sky-500",
    metricClass: "bg-emerald-50 text-emerald-700",
    icon: Activity,
  },
  {
    id: "glicemia",
    code: "W-02",
    title: "Mapa Glicêmico & Insulina",
    subtitle:
      "Heatmap colorido por horário e refeição com doses de insulina e exportação de PDF institucional pronto para o paciente.",
    metric: "Heatmap + PDF White-Label",
    iconBg: "bg-rose-50 text-rose-600 border-rose-200/80",
    activeBorder: "border-rose-300",
    railColor: "bg-gradient-to-b from-rose-500 to-indigo-500",
    metricClass: "bg-rose-50 text-rose-700",
    icon: Syringe,
  },
  {
    id: "dietas",
    code: "W-03",
    title: "Biblioteca de Dietas (Tabela TACO)",
    subtitle:
      "Prescrição precisa com distribuição visual de macros, medidas caseiras e trocas inteligentes 1:N que liberam sua equipe.",
    metric: "Donut Macros + Trocas 1:N",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200/80",
    activeBorder: "border-amber-300",
    railColor: "bg-gradient-to-b from-amber-500 to-violet-500",
    metricClass: "bg-amber-50 text-amber-700",
    icon: Apple,
  },
  {
    id: "gestao",
    code: "W-04",
    title: "Pacotes de Consultas, Agenda & Perfis",
    subtitle:
      "Controle visual de sessões que impulsiona renovações, agenda categorizada por cor e governança de acesso por cargo.",
    metric: "Diretoria · Médico · Secretária",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    activeBorder: "border-indigo-300",
    railColor: "bg-gradient-to-b from-indigo-500 to-sky-500",
    metricClass: "bg-indigo-50 text-indigo-700",
    icon: CalendarClock,
  },
];

const APP_MODULES: readonly ModuleItem<AppModuleId>[] = [
  {
    id: "dieta-app",
    code: "A-01",
    title: "Dieta Estruturada no Bolso",
    subtitle:
      "Refeições organizadas com pílulas coloridas de macros e substituições equivalentes aprovadas em um único toque.",
    metric: "Autonomia com Tabela TACO",
    iconBg: "bg-violet-50 text-violet-600 border-violet-200/80",
    activeBorder: "border-violet-300",
    railColor: "bg-gradient-to-b from-violet-500 to-amber-500",
    metricClass: "bg-violet-50 text-violet-700",
    icon: Repeat,
  },
  {
    id: "glicemia-app",
    code: "A-02",
    title: "Lançamento Rápido de Glicemia",
    subtitle:
      "Registro capilar em segundos com régua visual colorida de faixas-alvo que educa, orienta e motiva o paciente.",
    metric: "Régua 4 Faixas em Tempo Real",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    activeBorder: "border-emerald-300",
    railColor: "bg-gradient-to-b from-sky-500 via-emerald-500 to-rose-500",
    metricClass: "bg-emerald-50 text-emerald-700",
    icon: LineChart,
  },
  {
    id: "checkins-app",
    code: "A-03",
    title: "Check-ins Diários",
    subtitle:
      "Gauges e barras vibrantes de hidratação, treino e ritmo intestinal que transformam disciplina em hábito diário.",
    metric: "Água · Treino · Ritmo Intestinal",
    iconBg: "bg-sky-50 text-sky-600 border-sky-200/80",
    activeBorder: "border-sky-300",
    railColor: "bg-gradient-to-b from-sky-500 to-orange-500",
    metricClass: "bg-sky-50 text-sky-700",
    icon: Droplets,
  },
  {
    id: "evolucao-app",
    code: "A-04",
    title: "Evolução & Canal Direto",
    subtitle:
      "Anéis multicoloridos de consistência, tendência clara de resultados e atalho direto para a recepção da clínica.",
    metric: "Fidelização & Renovação Natural",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    activeBorder: "border-indigo-300",
    railColor: "bg-gradient-to-b from-emerald-500 via-sky-500 to-indigo-500",
    metricClass: "bg-indigo-50 text-indigo-700",
    icon: TrendingUp,
  },
];

const HEATMAP_ROWS = [
  { day: "17/11", jejum: 92, cafe: 124, almoco: 136, jantar: 118, insulin: 14 },
  { day: "18/11", jejum: 96, cafe: 146, almoco: 174, jantar: 129, insulin: 16 },
  { day: "19/11", jejum: 94, cafe: 128, almoco: 149, jantar: 121, insulin: 14 },
  { day: "20/11", jejum: 89, cafe: 119, almoco: 131, jantar: 112, insulin: 14 },
  { day: "21/11", jejum: 91, cafe: 122, almoco: 127, jantar: 109, insulin: 14 },
] as const;

const TACO_SWAPS = [
  {
    id: "arroz",
    name: "Arroz integral cozido",
    measure: "4 col. sopa (100g)",
    kcal: 124,
    carbG: 162,
    protG: 138,
    fatG: 58,
    fiberG: 34,
  },
  {
    id: "batata",
    name: "Batata-doce cozida",
    measure: "1 unid. média (130g)",
    kcal: 118,
    carbG: 165,
    protG: 136,
    fatG: 57,
    fiberG: 38,
  },
  {
    id: "quinoa",
    name: "Quinoa em grão cozida",
    measure: "3 col. sopa (95g)",
    kcal: 120,
    carbG: 155,
    protG: 143,
    fatG: 60,
    fiberG: 36,
  },
] as const;

const APP_PROTEIN_SWAPS = [
  {
    id: "frango",
    name: "Filé de frango grelhado",
    measure: "1 filé médio (120g)",
    carb: "0g",
    prot: "38g",
    fat: "4g",
    fiber: "0g",
  },
  {
    id: "tilapia",
    name: "Filé de tilápia assada",
    measure: "1 posta média (140g)",
    carb: "0g",
    prot: "36g",
    fat: "3g",
    fiber: "0g",
  },
  {
    id: "patinho",
    name: "Patinho moído refogado",
    measure: "4 col. sopa cheias (115g)",
    carb: "0g",
    prot: "35g",
    fat: "6g",
    fiber: "0g",
  },
] as const;

const GLYCEMIA_RULER_SAMPLES = [
  {
    value: 64,
    context: "Pré-Treino",
    status: "Hipoglicemia",
    positionPct: 12,
    badgeClass: "bg-sky-100 text-sky-800 border-sky-200",
    valueClass: "text-sky-600",
    note: "Abaixo de 70 mg/dL. Siga o protocolo de correção rápida.",
  },
  {
    value: 96,
    context: "Jejum",
    status: "No Alvo Ideal",
    positionPct: 38,
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
    valueClass: "text-emerald-600",
    note: "Excelente controle metabólico dentro da faixa 70–139 mg/dL.",
  },
  {
    value: 148,
    context: "Pós-2h",
    status: "Atenção Limítrofe",
    positionPct: 66,
    badgeClass: "bg-amber-100 text-amber-800 border-amber-200",
    valueClass: "text-amber-600",
    note: "Levemente acima do alvo pós-prandial. Registrado no mapa.",
  },
  {
    value: 176,
    context: "Pós-2h",
    status: "Pico Elevado",
    positionPct: 89,
    badgeClass: "bg-rose-100 text-rose-800 border-rose-200",
    valueClass: "text-rose-600",
    note: "Fora do alvo (≥ 160 mg/dL). Alerta sincronizado ao prontuário.",
  },
] as const;

function getHeatmapCellStyle(val: number): string {
  if (val >= 160) {
    return "border-rose-200 bg-rose-50 text-rose-700";
  }
  if (val >= 140) {
    return "border-amber-200 bg-amber-50 text-amber-800";
  }
  return "border-emerald-200/80 bg-emerald-50/80 text-emerald-800";
}

export function EcosystemExplorer() {
  const [surface, setSurface] = useState<SurfaceMode>("web");
  const [activeWebModule, setActiveWebModule] = useState<WebModuleId>("prontuario");
  const [activeAppModule, setActiveAppModule] = useState<AppModuleId>("dieta-app");

  // Micro-interações locais dentro dos palcos
  const [showPdfPreview, setShowPdfPreview] = useState(false);
  const [selectedTacoIndex, setSelectedTacoIndex] = useState(0);
  const [selectedAppSwapIndex, setSelectedAppSwapIndex] = useState(0);
  const [selectedGlycemiaIndex, setSelectedGlycemiaIndex] = useState(1);
  const [hydrationMl, setHydrationMl] = useState(2000);
  const [selectedBristol, setSelectedBristol] = useState(4);

  const selectedTaco = TACO_SWAPS[selectedTacoIndex];
  const selectedAppSwap = APP_PROTEIN_SWAPS[selectedAppSwapIndex];
  const selectedGlycemia = GLYCEMIA_RULER_SAMPLES[selectedGlycemiaIndex];

  // Cálculo determinístico do gráfico de rosca (Donut SVG) de Macronutrientes TACO
  const totalMacros =
    selectedTaco.carbG + selectedTaco.protG + selectedTaco.fatG + selectedTaco.fiberG;
  const donutRadius = 42;
  const donutCirc = 2 * Math.PI * donutRadius;
  const macroSegments = [
    {
      label: "Carboidratos",
      grams: selectedTaco.carbG,
      color: "#F59E0B",
      bg: "#FEF3C7",
      textClass: "text-amber-700",
    },
    {
      label: "Proteínas",
      grams: selectedTaco.protG,
      color: "#8B5CF6",
      bg: "#EDE9FE",
      textClass: "text-violet-700",
    },
    {
      label: "Gorduras boas",
      grams: selectedTaco.fatG,
      color: "#10B981",
      bg: "#D1FAE5",
      textClass: "text-emerald-700",
    },
    {
      label: "Fibras",
      grams: selectedTaco.fiberG,
      color: "#0EA5E9",
      bg: "#E0F2FE",
      textClass: "text-sky-700",
    },
  ];

  let cumulativeFraction = 0;
  const donutArcs = macroSegments.map((seg) => {
    const fraction = seg.grams / totalMacros;
    const length = Math.max(0, fraction * donutCirc - 3.5);
    const offset = -cumulativeFraction * donutCirc;
    cumulativeFraction += fraction;
    return { ...seg, pct: Math.round(fraction * 100), length, offset };
  });

  return (
    <section
      id="ecossistema"
      className="relative scroll-mt-20 border-b border-slate-200/80 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho + Seletor Superior Web vs App */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold tracking-[0.12em] text-sky-600 uppercase">
              03 / Explorador do Ecossistema
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Duas superfícies cirúrgicas. Uma experiência inesquecível.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Clique nos módulos e veja como cada gráfico, prescrição e check-in trabalha junto para elevar os resultados clínicos e o encantamento dos seus pacientes.
            </p>
          </div>

          {/* Seletor Superior: Para a Clínica (Web) vs Para o Paciente (App) */}
          <div
            className="inline-flex w-full rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-1.5 shadow-xs sm:w-auto"
            role="tablist"
            aria-label="Alternar superfície do ecossistema FRdoc"
          >
            <button
              type="button"
              role="tab"
              aria-selected={surface === "web"}
              onClick={() => setSurface("web")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-150 sm:flex-none ${
                surface === "web"
                  ? "bg-gradient-to-r from-emerald-600 to-sky-600 text-white shadow-xs"
                  : "text-slate-600 hover:bg-white hover:text-slate-900"
              }`}
            >
              <Monitor className="h-4 w-4" aria-hidden="true" />
              <span>Para a Clínica (Web)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={surface === "app"}
              onClick={() => setSurface("app")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-150 sm:flex-none ${
                surface === "app"
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:bg-white hover:text-slate-900"
              }`}
            >
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              <span>Para o Paciente (App)</span>
            </button>
          </div>
        </div>

        {/* Dois Painéis: Menu (Esquerda) + Palco Visual Interativo (Direita) */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Coluna Esquerda: Menu Clicável com Ícones Coloridos */}
          <div className="flex flex-col gap-3 lg:col-span-5" role="list">
            {(surface === "web" ? WEB_MODULES : APP_MODULES).map((mod) => {
              const Icon = mod.icon;
              const isActive =
                surface === "web"
                  ? activeWebModule === mod.id
                  : activeAppModule === mod.id;

              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => {
                    if (surface === "web") {
                      setActiveWebModule(mod.id as WebModuleId);
                    } else {
                      setActiveAppModule(mod.id as AppModuleId);
                    }
                  }}
                  className={`group relative flex w-full flex-col rounded-2xl border p-4 text-left transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:p-5 ${
                    isActive
                      ? `${mod.activeBorder} bg-white shadow-clinical`
                      : "border-slate-200/80 bg-[#F8FAFC]/80 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <span
                    className={`absolute top-4 bottom-4 left-0 w-1 rounded-r-full transition-opacity ${
                      isActive ? `${mod.railColor} opacity-100` : "bg-slate-200 opacity-0 group-hover:opacity-100"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${mod.iconBg}`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-400">
                        {mod.code}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 sm:text-[15px]">
                        {mod.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                    {mod.subtitle}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span
                      className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-bold ${
                        isActive ? mod.metricClass : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {mod.metric}
                    </span>
                    <span
                      className={`font-mono text-[11px] font-semibold transition-transform ${
                        isActive
                          ? "translate-x-0 text-slate-900"
                          : "text-slate-400 group-hover:translate-x-0.5"
                      }`}
                    >
                      {isActive ? "Em exibição" : "Explorar →"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Coluna Direita: Palco Visual Multicolorido */}
          <div className="flex flex-col rounded-3xl border border-slate-200/90 bg-[#F8FAFC]/70 p-5 shadow-clinical-lg sm:p-7 lg:col-span-7">
            {/* Barra superior do Palco */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex gap-1" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                </span>
                <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-600 uppercase">
                  {surface === "web"
                    ? "Painel Web da Clínica · Visualização Interativa"
                    : "Aplicativo Mobile do Paciente · Experiência Interativa"}
                </span>
              </div>
              <span className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 font-mono text-[10px] font-semibold text-slate-600">
                {surface === "web" ? "DESKTOP & TABLET" : "IOS & ANDROID"}
              </span>
            </div>

            {/* ================= WEB 01: PRONTUÁRIO COM TELEMETRIA ================= */}
            {surface === "web" && activeWebModule === "prontuario" ? (
              <div className="mt-5 flex flex-1 flex-col justify-between gap-4">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900">
                        Rafael M. Almeida
                      </h4>
                      <span className="rounded-md bg-indigo-50 px-2 py-0.5 font-mono text-[10px] font-bold text-indigo-700">
                        44a · Resistência Insulínica
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      Telemetria integrada de 90 dias · Glicemia + Composição Corporal + Adesão
                    </p>
                  </div>

                  {/* Gauge Circular de Adesão */}
                  <div className="flex items-center gap-2.5 rounded-xl border border-emerald-200/80 bg-emerald-50/50 px-3 py-1.5">
                    <svg viewBox="0 0 40 40" className="h-9 w-9 -rotate-90" aria-hidden="true">
                      <defs>
                        <linearGradient id="ecoGauge1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="55%" stopColor="#0EA5E9" />
                          <stop offset="100%" stopColor="#6366F1" />
                        </linearGradient>
                      </defs>
                      <circle cx="20" cy="20" r="15" fill="none" stroke="#E2E8F0" strokeWidth="4" />
                      <circle
                        cx="20"
                        cy="20"
                        r="15"
                        fill="none"
                        stroke="url(#ecoGauge1)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="94.2"
                        strokeDashoffset="13.2"
                      />
                    </svg>
                    <div>
                      <p className="font-mono text-xs font-extrabold text-slate-900">86%</p>
                      <p className="font-mono text-[9px] font-semibold text-emerald-700">ADESÃO</p>
                    </div>
                  </div>
                </div>

                {/* Gráfico Combinado Multissérie: Curva Glicêmica + Barras de Composição Corporal */}
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      Evolução Combinada · Glicemia Média vs. Massa Gorda (%)
                    </span>
                    <div className="flex items-center gap-3 font-mono text-[10px] font-semibold">
                      <span className="inline-flex items-center gap-1 text-emerald-700">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Glicemia (mg/dL)
                      </span>
                      <span className="inline-flex items-center gap-1 text-indigo-700">
                        <span className="h-2 w-2 rounded-sm bg-indigo-500" />
                        Gordura (%)
                      </span>
                    </div>
                  </div>

                  <svg viewBox="0 0 480 170" className="h-auto w-full" role="img" aria-label="Gráfico multissérie combinando curva glicêmica e barras de composição corporal ao longo de 6 meses">
                    <defs>
                      <linearGradient id="ecoMultiBar" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.45" />
                      </linearGradient>
                      <linearGradient id="ecoMultiLine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#F43F5E" />
                        <stop offset="38%" stopColor="#F59E0B" />
                        <stop offset="72%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                      </linearGradient>
                    </defs>

                    {/* Linhas guia */}
                    {[34, 72, 110, 144].map((y) => (
                      <line
                        key={y}
                        x1="20"
                        y1={y}
                        x2="464"
                        y2={y}
                        stroke="#E2E8F0"
                        strokeWidth="1"
                        strokeDasharray={y === 144 ? undefined : "3 4"}
                      />
                    ))}

                    {/* Barras de composição corporal (índigo -> ciano) */}
                    {[
                      { x: 46, h: 98, label: "Jun", bf: "28%", gl: 152, gy: 32, dot: "#F43F5E" },
                      { x: 118, h: 88, label: "Jul", bf: "26%", gl: 138, gy: 52, dot: "#F59E0B" },
                      { x: 190, h: 78, label: "Ago", bf: "24%", gl: 124, gy: 68, dot: "#10B981" },
                      { x: 262, h: 68, label: "Set", bf: "23%", gl: 114, gy: 82, dot: "#10B981" },
                      { x: 334, h: 60, label: "Out", bf: "21%", gl: 106, gy: 92, dot: "#0EA5E9" },
                      { x: 406, h: 52, label: "Nov", bf: "20%", gl: 98, gy: 102, dot: "#0EA5E9" },
                    ].map((col) => (
                      <g key={col.label}>
                        <rect
                          x={col.x}
                          y={144 - col.h}
                          width="32"
                          height={col.h}
                          rx="7"
                          fill="url(#ecoMultiBar)"
                        />
                        <text
                          x={col.x + 16}
                          y={138}
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontSize="9"
                          fontWeight="700"
                          fontFamily="var(--font-mono)"
                        >
                          {col.bf}
                        </text>
                        <text
                          x={col.x + 16}
                          y="162"
                          textAnchor="middle"
                          fill="#64748B"
                          fontSize="10"
                          fontFamily="var(--font-mono)"
                        >
                          {col.label}
                        </text>
                      </g>
                    ))}

                    {/* Curva glicêmica sobreposta (coral -> âmbar -> esmeralda -> ciano) */}
                    <path
                      d="M 62 32 C 92 40, 108 48, 134 52 C 166 58, 180 64, 206 68 C 238 74, 252 78, 278 82 C 308 87, 324 89, 350 92 C 380 96, 396 99, 422 102"
                      fill="none"
                      stroke="url(#ecoMultiLine)"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />

                    {[
                      { x: 62, y: 32, gl: 152, dot: "#F43F5E" },
                      { x: 134, y: 52, gl: 138, dot: "#F59E0B" },
                      { x: 206, y: 68, gl: 124, dot: "#10B981" },
                      { x: 278, y: 82, gl: 114, dot: "#10B981" },
                      { x: 350, y: 92, gl: 106, dot: "#0EA5E9" },
                      { x: 422, y: 102, gl: 98, dot: "#0EA5E9" },
                    ].map((pt) => (
                      <g key={pt.x}>
                        <circle cx={pt.x} cy={pt.y} r="7.5" fill={pt.dot} fillOpacity="0.18" />
                        <circle cx={pt.x} cy={pt.y} r="4.2" fill="#FFFFFF" stroke={pt.dot} strokeWidth="2.4" />
                        <text
                          x={pt.x}
                          y={pt.y - 10}
                          textAnchor="middle"
                          fill="#0F172A"
                          fontSize="9.5"
                          fontWeight="700"
                          fontFamily="var(--font-mono)"
                        >
                          {pt.gl}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Resumo de Resultados */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl border border-emerald-200/70 bg-white p-3">
                    <p className="text-[10px] font-medium text-slate-500">HbA1c Estimada</p>
                    <p className="mt-0.5 font-mono text-base font-extrabold text-emerald-700">
                      5,6% <span className="text-[10px] font-semibold text-emerald-600">-0,8</span>
                    </p>
                  </div>
                  <div className="rounded-xl border border-indigo-200/70 bg-white p-3">
                    <p className="text-[10px] font-medium text-slate-500">Massa Gorda</p>
                    <p className="mt-0.5 font-mono text-base font-extrabold text-indigo-700">
                      -8,0% <span className="text-[10px] font-semibold text-sky-600">6 meses</span>
                    </p>
                  </div>
                  <div className="rounded-xl border border-sky-200/70 bg-white p-3">
                    <p className="text-[10px] font-medium text-slate-500">Registros App</p>
                    <p className="mt-0.5 font-mono text-base font-extrabold text-sky-700">
                      142 <span className="text-[10px] font-semibold text-slate-500">sincron.</span>
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            {/* ================= WEB 02: MAPA GLICÊMICO & INSULINA ================= */}
            {surface === "web" && activeWebModule === "glicemia" ? (
              <div className="mt-5 flex flex-1 flex-col justify-between gap-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Heatmap Glicêmico &amp; Doses de Insulina
                    </h4>
                    <p className="text-xs text-slate-500">
                      Células codificadas por faixa clínica + barras de insulina basal em índigo
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPdfPreview((prev) => !prev)}
                    className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all ${
                      showPdfPreview
                        ? "border-indigo-300 bg-indigo-600 text-white shadow-xs"
                        : "border-indigo-200 bg-white text-indigo-700 hover:bg-indigo-50"
                    }`}
                  >
                    <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{showPdfPreview ? "Voltar ao Heatmap" : "Exportar PDF Institucional"}</span>
                  </button>
                </div>

                {showPdfPreview ? (
                  <div className="rounded-2xl border border-indigo-200/80 bg-white p-5 shadow-xs">
                    <div className="flex items-start justify-between border-b border-slate-200 pb-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 font-mono text-xs font-bold text-white">
                          IM
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            Instituto Metabo · Relatório Clínico White-Label
                          </p>
                          <p className="font-mono text-[10px] font-semibold text-indigo-600">
                            MAPA GLICÊMICO &amp; INSULINOTERAPIA · PRONTO PARA ENTREGA
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-slate-400">21/11/2026</span>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2.5 font-mono text-xs">
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3">
                        <p className="text-[10px] font-semibold text-emerald-700">NO ALVO</p>
                        <p className="mt-0.5 text-base font-extrabold text-emerald-800">85% TIR</p>
                      </div>
                      <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3">
                        <p className="text-[10px] font-semibold text-amber-700">LIMÍTROFE</p>
                        <p className="mt-0.5 text-base font-extrabold text-amber-800">10%</p>
                      </div>
                      <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-3">
                        <p className="text-[10px] font-semibold text-indigo-700">BASAL MÉDIA</p>
                        <p className="mt-0.5 text-base font-extrabold text-indigo-800">14,4 UI</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                      <span>Dra. Camila Nogueira · CRM-SP 148.920</span>
                      <span className="rounded-md bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700">
                        100% Marca da Clínica
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                    <table className="w-full min-w-[460px] border-collapse text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50/90 font-mono text-[10px] font-semibold text-slate-500 uppercase">
                          <th className="px-3.5 py-2.5">Dia</th>
                          <th className="px-2 py-2.5 text-center">Jejum</th>
                          <th className="px-2 py-2.5 text-center">Pós-Café</th>
                          <th className="px-2 py-2.5 text-center">Pós-Almoço</th>
                          <th className="px-2 py-2.5 text-center">Pós-Jantar</th>
                          <th className="px-3.5 py-2.5">Insulina (UI)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-mono text-xs">
                        {HEATMAP_ROWS.map((row) => (
                          <tr key={row.day}>
                            <td className="px-3.5 py-2.5 font-semibold text-slate-700">{row.day}</td>
                            {[row.jejum, row.cafe, row.almoco, row.jantar].map((val, i) => (
                              <td key={i} className="px-1.5 py-2 text-center">
                                <span
                                  className={`inline-block min-w-[48px] rounded-lg border px-2 py-1 font-bold ${getHeatmapCellStyle(
                                    val
                                  )}`}
                                >
                                  {val}
                                </span>
                              </td>
                            ))}
                            <td className="px-3.5 py-2">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-16 overflow-hidden rounded-full bg-indigo-100">
                                  <div
                                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                                    style={{ width: `${(row.insulin / 20) * 100}%` }}
                                  />
                                </div>
                                <span className="font-bold text-indigo-700">{row.insulin} UI</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Legenda Colorida */}
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-mono text-[10px] font-semibold">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700">
                      <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500" />
                      Alvo (70–139)
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-amber-700">
                      <span className="h-2.5 w-2.5 rounded-sm bg-amber-500" />
                      Limítrofe (140–159)
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-rose-700">
                      <span className="h-2.5 w-2.5 rounded-sm bg-rose-500" />
                      Pico (≥ 160)
                    </span>
                  </div>
                  <span className="text-indigo-700">Insulina Basal em Índigo</span>
                </div>
              </div>
            ) : null}

            {/* ================= WEB 03: BIBLIOTECA DE DIETAS (TACO) ================= */}
            {surface === "web" && activeWebModule === "dietas" ? (
              <div className="mt-5 flex flex-1 flex-col justify-between gap-4">
                {/* Donut Multicolorido + Barras de Macros */}
                <div className="grid grid-cols-1 items-center gap-5 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[136px_1fr]">
                  <div className="relative mx-auto h-32 w-32 shrink-0">
                    <svg viewBox="0 0 112 112" className="h-32 w-32 -rotate-90" role="img" aria-label="Gráfico de rosca de macronutrientes da dieta TACO">
                      <circle cx="56" cy="56" r={donutRadius} fill="none" stroke="#F1F5F9" strokeWidth="12" />
                      {donutArcs.map((arc) => (
                        <circle
                          key={arc.label}
                          cx="56"
                          cy="56"
                          r={donutRadius}
                          fill="none"
                          stroke={arc.color}
                          strokeWidth="12"
                          strokeLinecap="round"
                          strokeDasharray={`${arc.length} ${donutCirc}`}
                          strokeDashoffset={arc.offset}
                          className="transition-all duration-300"
                        />
                      ))}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="font-mono text-base font-extrabold text-slate-900">
                        1.840
                      </span>
                      <span className="font-mono text-[9px] font-semibold text-slate-400">
                        KCAL/DIA
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">
                        Distribuição de Macronutrientes (Tabela TACO)
                      </span>
                      <span className="rounded-md bg-violet-50 px-2 py-0.5 font-mono text-[10px] font-bold text-violet-700">
                        EQUILIBRADA
                      </span>
                    </div>
                    {donutArcs.map((seg) => (
                      <div key={seg.label} className="space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-slate-700">{seg.label}</span>
                          <span className={`font-mono font-bold ${seg.textClass}`}>
                            {seg.grams}g ({seg.pct}%)
                          </span>
                        </div>
                        <div
                          className="h-2 w-full overflow-hidden rounded-full"
                          style={{ backgroundColor: seg.bg }}
                        >
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{ width: `${seg.pct}%`, backgroundColor: seg.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trocas Inteligentes 1:N */}
                <div className="rounded-2xl border border-amber-200/80 bg-white p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-bold text-slate-900">
                          {selectedTaco.name}
                        </p>
                        <span className="rounded bg-amber-50 px-1.5 py-0.5 font-mono text-[9px] font-bold text-amber-700">
                          TROCA 1:N INTERATIVA
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-slate-500">
                        Medida caseira: {selectedTaco.measure} · {selectedTaco.kcal} kcal
                      </p>
                    </div>
                    <span className="font-mono text-[10px] font-semibold text-emerald-700">
                      Equivalência TACO ✓
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5 border-t border-slate-100 pt-2.5">
                    {TACO_SWAPS.map((opt, idx) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedTacoIndex(idx)}
                        className={`rounded-lg border px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                          selectedTacoIndex === idx
                            ? "border-amber-500 bg-amber-500 text-white"
                            : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-white"
                        }`}
                      >
                        {opt.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {/* ================= WEB 04: PACOTES, AGENDA & PERFIS ================= */}
            {surface === "web" && activeWebModule === "gestao" ? (
              <div className="mt-5 flex flex-1 flex-col justify-between gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Pacotes de Consultas com Barras Coloridas */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <span className="font-mono text-[10px] font-bold text-indigo-600 uppercase">
                      Pacotes de Sessões Ativos
                    </span>
                    <div className="mt-3 space-y-3">
                      {[
                        {
                          name: "Protocolo Metabólico",
                          progress: "4 / 6",
                          pct: 67,
                          bar: "from-emerald-500 to-sky-500",
                          track: "bg-emerald-50",
                        },
                        {
                          name: "Nutrologia Performance",
                          progress: "5 / 8",
                          pct: 63,
                          bar: "from-indigo-500 to-violet-500",
                          track: "bg-indigo-50",
                        },
                        {
                          name: "Saúde Integrativa",
                          progress: "3 / 4",
                          pct: 75,
                          bar: "from-amber-500 to-orange-500",
                          track: "bg-amber-50",
                        },
                      ].map((pkg) => (
                        <div key={pkg.name}>
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-800">{pkg.name}</span>
                            <span className="font-mono text-[11px] font-bold text-slate-700">
                              {pkg.progress}
                            </span>
                          </div>
                          <div className={`mt-1.5 h-2 w-full overflow-hidden rounded-full ${pkg.track}`}>
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${pkg.bar}`}
                              style={{ width: `${pkg.pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Agenda Categorizada por Cor */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <span className="font-mono text-[10px] font-bold text-sky-600 uppercase">
                      Agenda Semanal · Categorizada
                    </span>
                    <ul className="mt-3 space-y-2 text-xs">
                      {[
                        { time: "09:00", patient: "Mariana S. Ribeiro", tag: "Retorno", pill: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                        { time: "10:30", patient: "Rafael M. Almeida", tag: "Telemetria", pill: "bg-sky-50 text-sky-700 border-sky-200" },
                        { time: "14:00", patient: "Clara P. Mendes", tag: "Bioimpedância", pill: "bg-violet-50 text-violet-700 border-violet-200" },
                        { time: "16:00", patient: "Lucas F. Andrade", tag: "1ª Consulta", pill: "bg-amber-50 text-amber-700 border-amber-200" },
                      ].map((slot) => (
                        <li
                          key={slot.time}
                          className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-2.5 py-2"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] font-bold text-slate-800">
                              {slot.time}
                            </span>
                            <span className="font-semibold text-slate-700">{slot.patient}</span>
                          </div>
                          <span className={`rounded-md border px-2 py-0.5 font-mono text-[9.5px] font-bold ${slot.pill}`}>
                            {slot.tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Governança de Perfis Coloridos */}
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                    <span className="text-xs font-bold text-slate-900">
                      Níveis de Acesso &amp; Sigilo Clínico (RBAC)
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <div className="rounded-xl border border-violet-200/80 bg-violet-50/40 p-3">
                      <span className="inline-block rounded-full bg-violet-100 px-2 py-0.5 font-mono text-[10px] font-bold text-violet-800">
                        Diretoria Clínica
                      </span>
                      <p className="mt-1.5 text-[11px] text-slate-600">
                        Visão total, auditoria, equipe e indicadores de retenção.
                      </p>
                    </div>
                    <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-3">
                      <span className="inline-block rounded-full bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800">
                        Médico
                      </span>
                      <p className="mt-1.5 text-[11px] text-slate-600">
                        Prontuário, curvas, insulina, PDFs e dietas TACO.
                      </p>
                    </div>
                    <div className="rounded-xl border border-sky-200/80 bg-sky-50/40 p-3">
                      <span className="inline-block rounded-full bg-sky-100 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-800">
                        Secretária
                      </span>
                      <p className="mt-1.5 text-[11px] text-slate-600">
                        Agenda e pacotes — prontuário médico 100% blindado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {/* ================= PALCOS APP MOBILE ================= */}
            {surface === "app" ? (
              <div className="mt-5 grid flex-1 grid-cols-1 items-center gap-6 sm:grid-cols-[282px_1fr]">
                {/* Moldura do Smartphone */}
                <div className="mx-auto w-full max-w-[282px] rounded-[2.1rem] border border-slate-300/90 bg-white p-2 shadow-clinical ring-4 ring-slate-100/80">
                  <div className="overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-[#F8FAFC]">
                    <div className="flex items-center justify-between bg-white px-4 py-2.5 font-mono text-[10px] font-semibold text-slate-500">
                      <span>09:41</span>
                      <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text font-bold text-transparent">
                        Sua Clínica
                      </span>
                      <span>100%</span>
                    </div>

                    {/* APP 01: DIETA NO BOLSO */}
                    {activeAppModule === "dieta-app" ? (
                      <div className="space-y-2.5 p-3">
                        <div className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 p-3 text-white">
                          <p className="font-mono text-[9px] uppercase opacity-85">
                            Plano Alimentar · Hoje
                          </p>
                          <p className="mt-0.5 text-xs font-bold">
                            Almoço Metabólico · 12h30
                          </p>
                        </div>

                        <div className="rounded-xl border border-violet-200 bg-white p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-slate-900">
                              {selectedAppSwap.name}
                            </span>
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                          </div>
                          <p className="mt-0.5 text-[10px] text-slate-500">
                            {selectedAppSwap.measure}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1 font-mono text-[9px] font-bold">
                            <span className="rounded bg-amber-50 px-1.5 py-0.5 text-amber-700">
                              C {selectedAppSwap.carb}
                            </span>
                            <span className="rounded bg-violet-50 px-1.5 py-0.5 text-violet-700">
                              P {selectedAppSwap.prot}
                            </span>
                            <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-emerald-700">
                              G {selectedAppSwap.fat}
                            </span>
                          </div>

                          <p className="mt-2.5 font-mono text-[9px] font-semibold text-slate-400 uppercase">
                            Troca equivalente em 1 toque:
                          </p>
                          <div className="mt-1.5 flex flex-wrap gap-1">
                            {APP_PROTEIN_SWAPS.map((opt, idx) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => setSelectedAppSwapIndex(idx)}
                                className={`rounded-md px-2 py-1 text-[10px] font-semibold transition-colors ${
                                  selectedAppSwapIndex === idx
                                    ? "bg-violet-600 text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }`}
                              >
                                {opt.name.split(" ")[2] ?? opt.name}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-white p-2.5 text-[11px]">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-slate-800">Arroz integral · 4 col.</p>
                            <span className="rounded bg-amber-50 px-1.5 py-0.5 font-mono text-[9px] font-bold text-amber-700">
                              C 26g
                            </span>
                          </div>
                          <p className="mt-0.5 text-[10px] text-slate-500">
                            Salada verde + 1 col. azeite extravirgem
                          </p>
                        </div>
                      </div>
                    ) : null}

                    {/* APP 02: LANÇAMENTO RÁPIDO DE GLICEMIA (RÉGUA 4 FAIXAS) */}
                    {activeAppModule === "glicemia-app" ? (
                      <div className="space-y-3 p-3">
                        <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-center">
                          <p className="font-mono text-[10px] font-semibold text-slate-400 uppercase">
                            Leitura · {selectedGlycemia.context}
                          </p>
                          <p
                            className={`mt-1 font-mono text-3xl font-extrabold tracking-tight ${selectedGlycemia.valueClass}`}
                          >
                            {selectedGlycemia.value}
                            <span className="ml-1 text-xs font-medium text-slate-400">
                              mg/dL
                            </span>
                          </p>
                          <span
                            className={`mt-2 inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold ${selectedGlycemia.badgeClass}`}
                          >
                            {selectedGlycemia.status}
                          </span>

                          {/* Régua Visual Colorida 4 Faixas (Azul Hipo · Esmeralda Alvo · Âmbar Atenção · Coral Alta) */}
                          <div className="relative mt-4 pt-2">
                            <div
                              className="absolute top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-slate-900 bg-white shadow-xs transition-all duration-300"
                              style={{ left: `${selectedGlycemia.positionPct}%` }}
                              aria-hidden="true"
                            />
                            <div className="grid grid-cols-4 gap-1">
                              <div className="h-2 rounded-l-full bg-sky-500" />
                              <div className="h-2 bg-emerald-500" />
                              <div className="h-2 bg-amber-400" />
                              <div className="h-2 rounded-r-full bg-rose-500" />
                            </div>
                            <div className="mt-1.5 grid grid-cols-4 font-mono text-[8px] font-semibold">
                              <span className="text-sky-700">&lt;70</span>
                              <span className="text-emerald-700">70–139</span>
                              <span className="text-amber-700">140–159</span>
                              <span className="text-rose-700">≥160</span>
                            </div>
                          </div>

                          <p className="mt-2.5 text-[10px] leading-snug text-slate-600">
                            {selectedGlycemia.note}
                          </p>
                        </div>

                        <div>
                          <p className="mb-1.5 font-mono text-[9px] font-semibold text-slate-400 uppercase">
                            Testar valor na régua:
                          </p>
                          <div className="grid grid-cols-4 gap-1.5">
                            {GLYCEMIA_RULER_SAMPLES.map((sample, idx) => (
                              <button
                                key={sample.value}
                                type="button"
                                onClick={() => setSelectedGlycemiaIndex(idx)}
                                className={`rounded-xl border py-1.5 font-mono text-[11px] font-bold transition-colors ${
                                  selectedGlycemiaIndex === idx
                                    ? "border-slate-900 bg-slate-900 text-white"
                                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                {sample.value}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {/* APP 03: CHECK-INS DIÁRIOS COLORIDOS */}
                    {activeAppModule === "checkins-app" ? (
                      <div className="space-y-2.5 p-3">
                        {/* Hidratação Sky/Ciano */}
                        <div className="rounded-xl border border-sky-200/80 bg-white p-3">
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-900">
                              <Droplets className="h-3.5 w-3.5 text-sky-500" aria-hidden="true" />
                              Hidratação
                            </span>
                            <span className="font-mono text-[11px] font-bold text-sky-600">
                              {(hydrationMl / 1000).toFixed(2)}L / 2,5L
                            </span>
                          </div>
                          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-sky-100">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-500 transition-all duration-200"
                              style={{ width: `${Math.min(100, (hydrationMl / 2500) * 100)}%` }}
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setHydrationMl((prev) => (prev >= 2500 ? 1500 : prev + 250))
                            }
                            className="mt-2.5 w-full rounded-lg border border-sky-200 bg-sky-50 py-1 font-mono text-[10px] font-bold text-sky-700 transition-colors hover:bg-sky-100"
                          >
                            {hydrationMl >= 2500 ? "Meta atingida ✓ (Reiniciar)" : "+250 ml rápido"}
                          </button>
                        </div>

                        {/* Treino Laranja/Âmbar */}
                        <div className="flex items-center justify-between rounded-xl border border-orange-200/80 bg-white p-3">
                          <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                              <Dumbbell className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-[11px] font-bold text-slate-900">Treino de Força</p>
                              <p className="inline-flex items-center gap-1 font-mono text-[10px] text-orange-600">
                                <Flame className="h-3 w-3" aria-hidden="true" />
                                50 min · 410 kcal
                              </p>
                            </div>
                          </div>
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        </div>

                        {/* Ritmo Intestinal Esmeralda/Violeta */}
                        <div className="rounded-xl border border-violet-200/80 bg-white p-3">
                          <p className="text-[11px] font-bold text-slate-900">
                            Ritmo Intestinal (Bristol)
                          </p>
                          <div className="mt-2 grid grid-cols-3 gap-1.5">
                            {[3, 4, 5].map((tipo) => (
                              <button
                                key={tipo}
                                type="button"
                                onClick={() => setSelectedBristol(tipo)}
                                className={`rounded-lg border py-1 font-mono text-[10px] font-bold transition-colors ${
                                  selectedBristol === tipo
                                    ? "border-emerald-500 bg-gradient-to-r from-emerald-500 to-violet-500 text-white"
                                    : "border-slate-200 bg-slate-50 text-slate-600"
                                }`}
                              >
                                Tipo {tipo}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {/* APP 04: EVOLUÇÃO MULTICOLORIDA & CANAL DIRETO */}
                    {activeAppModule === "evolucao-app" ? (
                      <div className="space-y-2.5 p-3">
                        <div className="rounded-xl border border-slate-200 bg-white p-3">
                          <div className="flex items-center gap-3">
                            <svg viewBox="0 0 60 60" className="h-14 w-14 shrink-0 -rotate-90" aria-hidden="true">
                              <circle cx="30" cy="30" r="24" fill="none" stroke="#E2E8F0" strokeWidth="4.5" />
                              <circle cx="30" cy="30" r="24" fill="none" stroke="#10B981" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="150.8" strokeDashoffset="21" />
                              <circle cx="30" cy="30" r="17" fill="none" stroke="#E0F2FE" strokeWidth="4.5" />
                              <circle cx="30" cy="30" r="17" fill="none" stroke="#0EA5E9" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="106.8" strokeDashoffset="14" />
                              <circle cx="30" cy="30" r="10" fill="none" stroke="#EDE9FE" strokeWidth="4.5" />
                              <circle cx="30" cy="30" r="10" fill="none" stroke="#8B5CF6" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="62.8" strokeDashoffset="11" />
                            </svg>
                            <div>
                              <p className="text-[11px] font-bold text-slate-900">
                                Consistência Semanal
                              </p>
                              <p className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text font-mono text-lg font-extrabold text-transparent">
                                86%
                              </p>
                              <p className="font-mono text-[9px] text-slate-400">
                                6 sem. consecutivas
                              </p>
                            </div>
                          </div>

                          <svg viewBox="0 0 210 46" className="mt-2 h-11 w-full" aria-hidden="true">
                            <defs>
                              <linearGradient id="appTrendGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#10B981" />
                                <stop offset="55%" stopColor="#0EA5E9" />
                                <stop offset="100%" stopColor="#6366F1" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M8 38 C 46 34, 78 24, 114 20 C 148 16, 176 12, 202 8"
                              fill="none"
                              stroke="url(#appTrendGrad)"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                            />
                            <circle cx="202" cy="8" r="3.8" fill="#6366F1" />
                          </svg>
                        </div>

                        <div className="rounded-xl border border-indigo-200/80 bg-gradient-to-br from-emerald-50/60 to-sky-50/70 p-3">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                            <p className="text-[11px] font-bold text-slate-900">
                              Canal Direto com a Recepção
                            </p>
                          </div>
                          <p className="mt-1 text-[10px] leading-snug text-slate-600">
                            Reagendamento, exames e renovação de pacotes em um toque.
                          </p>
                          <div className="mt-2 rounded-lg bg-gradient-to-r from-emerald-600 to-sky-600 py-1.5 text-center text-[10px] font-semibold text-white">
                            Falar com a Recepção
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {/* Barra inferior interativa do Smartphone */}
                    <div className="grid grid-cols-4 border-t border-slate-200/80 bg-white px-2 py-2 text-center font-mono text-[9px] font-bold">
                      {[
                        { id: "dieta-app" as const, label: "Dieta", activeClass: "bg-violet-50 text-violet-700" },
                        { id: "glicemia-app" as const, label: "Glicemia", activeClass: "bg-emerald-50 text-emerald-700" },
                        { id: "checkins-app" as const, label: "Rotina", activeClass: "bg-sky-50 text-sky-700" },
                        { id: "evolucao-app" as const, label: "Evolução", activeClass: "bg-indigo-50 text-indigo-700" },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveAppModule(tab.id)}
                          className={`rounded-md py-1 transition-colors ${
                            activeAppModule === tab.id
                              ? tab.activeClass
                              : "text-slate-400 hover:text-slate-700"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Painel Lateral de Benefício Clínico */}
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-4">
                    <p className="font-mono text-[10px] font-bold tracking-wider text-violet-600 uppercase">
                      Por que o paciente usa todos os dias
                    </p>
                    <h4 className="mt-1.5 text-base font-bold text-slate-900">
                      {APP_MODULES.find((m) => m.id === activeAppModule)?.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {APP_MODULES.find((m) => m.id === activeAppModule)?.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-white p-3">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-slate-900">Efeito UAU imediato:</strong>{" "}
                        logo na primeira consulta o paciente percebe que está em uma clínica de outro patamar.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-white p-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-slate-900">Zero ruído no WhatsApp:</strong>{" "}
                        substituições alimentares e registros acontecem dentro do app da clínica.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-white p-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-slate-900">Retorno produtivo:</strong>{" "}
                        os dados chegam prontos no prontuário para decisões clínicas de alta precisão.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
