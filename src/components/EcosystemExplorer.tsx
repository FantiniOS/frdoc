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
  Syringe,
  TrendingUp,
} from "lucide-react";

type SurfaceMode = "web" | "app";
type WebModuleId = "prontuario" | "glicemia" | "dietas" | "gestao";
type AppModuleId = "dieta-app" | "glicemia-app" | "checkins-app" | "evolucao-app";

interface ModuleItem<T extends string> {
  id: T;
  title: string;
  subtitle: string;
  iconBg: string;
  activeBorder: string;
  railColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const WEB_MODULES: readonly ModuleItem<WebModuleId>[] = [
  {
    id: "prontuario",
    title: "Prontuário Visual",
    subtitle:
      "Toda a evolução do paciente em uma única tela, antes mesmo dele entrar na sala.",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    activeBorder: "border-emerald-300",
    railColor: "bg-gradient-to-b from-emerald-500 to-sky-500",
    icon: Activity,
  },
  {
    id: "glicemia",
    title: "Mapa de Glicemia & Insulina",
    subtitle:
      "Curvas claras por horário e relatório em PDF bonito para entregar ao paciente.",
    iconBg: "bg-rose-50 text-rose-600 border-rose-200/80",
    activeBorder: "border-rose-300",
    railColor: "bg-gradient-to-b from-rose-500 to-indigo-500",
    icon: Syringe,
  },
  {
    id: "dietas",
    title: "Dietas Inteligentes (Tabela TACO)",
    subtitle:
      "Prescreva em minutos com medidas caseiras e trocas automáticas de alimentos.",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200/80",
    activeBorder: "border-amber-300",
    railColor: "bg-gradient-to-b from-amber-500 to-violet-500",
    icon: Apple,
  },
  {
    id: "gestao",
    title: "Agenda, Pacotes e Equipe",
    subtitle:
      "Controle consultas, pacotes de acompanhamento e acessos da recepção sem complicação.",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    activeBorder: "border-indigo-300",
    railColor: "bg-gradient-to-b from-indigo-500 to-sky-500",
    icon: CalendarClock,
  },
];

const APP_MODULES: readonly ModuleItem<AppModuleId>[] = [
  {
    id: "dieta-app",
    title: "Dieta no Bolso",
    subtitle:
      "Refeições claras e troca de alimentos em um toque, sem mandar mensagem toda hora.",
    iconBg: "bg-violet-50 text-violet-600 border-violet-200/80",
    activeBorder: "border-violet-300",
    railColor: "bg-gradient-to-b from-violet-500 to-amber-500",
    icon: Repeat,
  },
  {
    id: "glicemia-app",
    title: "Glicemia em Segundos",
    subtitle:
      "Registro rápido com cores que mostram na hora se o paciente está no alvo.",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    activeBorder: "border-emerald-300",
    railColor: "bg-gradient-to-b from-sky-500 via-emerald-500 to-rose-500",
    icon: LineChart,
  },
  {
    id: "checkins-app",
    title: "Rotina que Motiva",
    subtitle:
      "Check-ins rápidos de água, treino e intestino que mantêm o paciente engajado.",
    iconBg: "bg-sky-50 text-sky-600 border-sky-200/80",
    activeBorder: "border-sky-300",
    railColor: "bg-gradient-to-b from-sky-500 to-orange-500",
    icon: Droplets,
  },
  {
    id: "evolucao-app",
    title: "Evolução & Recepção",
    subtitle:
      "Gráficos que mostram o progresso real e atalho direto para falar com a clínica.",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    activeBorder: "border-indigo-300",
    railColor: "bg-gradient-to-b from-emerald-500 via-sky-500 to-indigo-500",
    icon: TrendingUp,
  },
];

const GLYCEMIA_TABLE_ROWS = [
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
  },
  {
    id: "tilapia",
    name: "Filé de tilápia assada",
    measure: "1 posta média (140g)",
    carb: "0g",
    prot: "36g",
    fat: "3g",
  },
  {
    id: "patinho",
    name: "Patinho moído refogado",
    measure: "4 col. sopa (115g)",
    carb: "0g",
    prot: "35g",
    fat: "6g",
  },
] as const;

const GLYCEMIA_RULER_SAMPLES = [
  {
    value: 64,
    context: "Pré-Treino",
    status: "Abaixo do alvo",
    positionPct: 12,
    badgeClass: "bg-sky-100 text-sky-800 border-sky-200",
    valueClass: "text-sky-600",
    note: "Abaixo de 70 mg/dL. Siga a orientação de correção.",
  },
  {
    value: 96,
    context: "Jejum",
    status: "No alvo ideal",
    positionPct: 38,
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
    valueClass: "text-emerald-600",
    note: "Ótimo controle dentro da faixa de 70 a 139 mg/dL.",
  },
  {
    value: 148,
    context: "Pós-refeição",
    status: "Atenção",
    positionPct: 66,
    badgeClass: "bg-amber-100 text-amber-800 border-amber-200",
    valueClass: "text-amber-600",
    note: "Um pouco acima do ideal. Já salvo para sua consulta.",
  },
  {
    value: 176,
    context: "Pós-refeição",
    status: "Pico alto",
    positionPct: 89,
    badgeClass: "bg-rose-100 text-rose-800 border-rose-200",
    valueClass: "text-rose-600",
    note: "Acima de 160 mg/dL. Destacado no painel do médico.",
  },
] as const;

function getGlycemiaCellStyle(val: number): string {
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

  const [showPdfPreview, setShowPdfPreview] = useState(false);
  const [selectedTacoIndex, setSelectedTacoIndex] = useState(0);
  const [selectedAppSwapIndex, setSelectedAppSwapIndex] = useState(0);
  const [selectedGlycemiaIndex, setSelectedGlycemiaIndex] = useState(1);
  const [hydrationMl, setHydrationMl] = useState(2000);
  const [selectedBristol, setSelectedBristol] = useState(4);

  const selectedTaco = TACO_SWAPS[selectedTacoIndex];
  const selectedAppSwap = APP_PROTEIN_SWAPS[selectedAppSwapIndex];
  const selectedGlycemia = GLYCEMIA_RULER_SAMPLES[selectedGlycemiaIndex];

  // Gráfico de rosca de macronutrientes
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
      id="recursos"
      className="relative scroll-mt-20 border-b border-slate-200/80 bg-[#F8FAFC] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Limpo + Seletor Para o Médico vs Para o Paciente */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              O sistema na prática.
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              Veja como funciona no seu computador e no celular do paciente.
            </p>
          </div>

          <div
            className="inline-flex w-full rounded-2xl border border-slate-200/90 bg-white p-1.5 shadow-xs sm:w-auto"
            role="tablist"
            aria-label="Alternar entre painel do médico e app do paciente"
          >
            <button
              type="button"
              role="tab"
              aria-selected={surface === "web"}
              onClick={() => setSurface("web")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-150 sm:flex-none ${
                surface === "web"
                  ? "bg-gradient-to-r from-emerald-600 to-sky-600 text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Monitor className="h-4 w-4" aria-hidden="true" />
              <span>Para o Médico</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={surface === "app"}
              onClick={() => setSurface("app")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-150 sm:flex-none ${
                surface === "app"
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              <span>Para o Paciente</span>
            </button>
          </div>
        </div>

        {/* Menu de Recursos + Palco Visual Colorido */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Menu Esquerdo: 4 Cards Ultra-Enxutos */}
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
                  className={`group relative flex w-full items-start gap-3.5 rounded-2xl border p-5 text-left transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isActive
                      ? `${mod.activeBorder} bg-white shadow-clinical`
                      : "border-slate-200/80 bg-white/60 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <span
                    className={`absolute top-4 bottom-4 left-0 w-1 rounded-r-full transition-opacity ${
                      isActive
                        ? `${mod.railColor} opacity-100`
                        : "bg-slate-200 opacity-0 group-hover:opacity-100"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${mod.iconBg}`}
                  >
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold text-slate-900">
                      {mod.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {mod.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Palco Visual Interativo (Direita) */}
          <div className="flex flex-col rounded-3xl border border-slate-200/90 bg-white p-5 shadow-clinical-lg sm:p-7 lg:col-span-7">
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex gap-1" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                </span>
                <span className="text-xs font-semibold text-slate-600">
                  {surface === "web"
                    ? "Painel Web do Médico"
                    : "Aplicativo com a marca da sua clínica"}
                </span>
              </div>
              <span className="font-mono text-[11px] font-medium text-slate-400">
                {surface === "web" ? "Exemplo ao vivo" : "iOS & Android"}
              </span>
            </div>

            {/* ================= WEB 01: PRONTUÁRIO VISUAL ================= */}
            {surface === "web" && activeWebModule === "prontuario" ? (
              <div className="mt-5 flex flex-1 flex-col justify-between gap-4">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Rafael M. Almeida{" "}
                      <span className="font-normal text-slate-400">· 44 anos</span>
                    </h4>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Acompanhamento de 6 meses · Glicemia e composição corporal
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl border border-emerald-200/80 bg-white px-3 py-1.5">
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
                      <p className="text-[10px] font-semibold text-emerald-700">Consistência</p>
                    </div>
                  </div>
                </div>

                {/* Gráfico Combinado Colorido */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      Glicemia média vs. Gordura corporal
                    </span>
                    <div className="flex items-center gap-3 text-[11px] font-semibold">
                      <span className="inline-flex items-center gap-1 text-emerald-700">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Glicemia
                      </span>
                      <span className="inline-flex items-center gap-1 text-indigo-700">
                        <span className="h-2 w-2 rounded-sm bg-indigo-500" />
                        Gordura (%)
                      </span>
                    </div>
                  </div>

                  <svg
                    viewBox="0 0 480 170"
                    className="h-auto w-full"
                    role="img"
                    aria-label="Evolução de glicemia e gordura corporal em 6 meses"
                  >
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

                    {[
                      { x: 46, h: 98, label: "Jun", bf: "28%" },
                      { x: 118, h: 88, label: "Jul", bf: "26%" },
                      { x: 190, h: 78, label: "Ago", bf: "24%" },
                      { x: 262, h: 68, label: "Set", bf: "23%" },
                      { x: 334, h: 60, label: "Out", bf: "21%" },
                      { x: 406, h: 52, label: "Nov", bf: "20%" },
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

                <div className="grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl border border-emerald-200/70 bg-emerald-50/35 p-3">
                    <p className="text-[11px] text-slate-600">HbA1c</p>
                    <p className="mt-0.5 font-mono text-base font-extrabold text-emerald-700">
                      5,6%
                    </p>
                  </div>
                  <div className="rounded-xl border border-indigo-200/70 bg-indigo-50/35 p-3">
                    <p className="text-[11px] text-slate-600">Gordura</p>
                    <p className="mt-0.5 font-mono text-base font-extrabold text-indigo-700">
                      -8,0%
                    </p>
                  </div>
                  <div className="rounded-xl border border-sky-200/70 bg-sky-50/35 p-3">
                    <p className="text-[11px] text-slate-600">Registros</p>
                    <p className="mt-0.5 font-mono text-base font-extrabold text-sky-700">
                      142
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            {/* ================= WEB 02: MAPA DE GLICEMIA & INSULINA ================= */}
            {surface === "web" && activeWebModule === "glicemia" ? (
              <div className="mt-5 flex flex-1 flex-col justify-between gap-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-base font-bold text-slate-900">
                    Glicemia por horário &amp; Insulina
                  </h4>
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
                    <span>{showPdfPreview ? "Voltar ao Mapa" : "Ver PDF para o Paciente"}</span>
                  </button>
                </div>

                {showPdfPreview ? (
                  <div className="rounded-2xl border border-indigo-200/80 bg-[#F8FAFC] p-5">
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                      <div className="flex items-start justify-between border-b border-slate-100 pb-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 font-mono text-xs font-bold text-white">
                            IM
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">
                              Instituto Metabo
                            </p>
                            <p className="text-xs text-slate-500">
                              Relatório de Glicemia &amp; Insulina
                            </p>
                          </div>
                        </div>
                        <span className="font-mono text-[11px] text-slate-400">21/11/2026</span>
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-2.5 font-mono text-xs">
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3">
                          <p className="text-[10px] font-semibold text-emerald-700">NO ALVO</p>
                          <p className="mt-0.5 text-base font-extrabold text-emerald-800">85%</p>
                        </div>
                        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3">
                          <p className="text-[10px] font-semibold text-amber-700">ATENÇÃO</p>
                          <p className="mt-0.5 text-base font-extrabold text-amber-800">10%</p>
                        </div>
                        <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-3">
                          <p className="text-[10px] font-semibold text-indigo-700">INSULINA</p>
                          <p className="mt-0.5 text-base font-extrabold text-indigo-800">14 UI</p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                        <span>Dra. Camila Nogueira · CRM-SP 148.920</span>
                        <span className="font-semibold text-emerald-700">
                          Com a marca da clínica
                        </span>
                      </div>
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
                          <th className="px-3.5 py-2.5">Insulina</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-mono text-xs">
                        {GLYCEMIA_TABLE_ROWS.map((row) => (
                          <tr key={row.day}>
                            <td className="px-3.5 py-2.5 font-semibold text-slate-700">{row.day}</td>
                            {[row.jejum, row.cafe, row.almoco, row.jantar].map((val, i) => (
                              <td key={i} className="px-1.5 py-2 text-center">
                                <span
                                  className={`inline-block min-w-[48px] rounded-lg border px-2 py-1 font-bold ${getGlycemiaCellStyle(
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

                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                  <span className="inline-flex items-center gap-1.5 text-emerald-700">
                    <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500" />
                    No alvo (70–139)
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-amber-700">
                    <span className="h-2.5 w-2.5 rounded-sm bg-amber-500" />
                    Atenção (140–159)
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-rose-700">
                    <span className="h-2.5 w-2.5 rounded-sm bg-rose-500" />
                    Pico (≥ 160)
                  </span>
                </div>
              </div>
            ) : null}

            {/* ================= WEB 03: DIETAS INTELIGENTES (TACO) ================= */}
            {surface === "web" && activeWebModule === "dietas" ? (
              <div className="mt-5 flex flex-1 flex-col justify-between gap-4">
                <div className="grid grid-cols-1 items-center gap-5 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-4 sm:grid-cols-[136px_1fr]">
                  <div className="relative mx-auto h-32 w-32 shrink-0">
                    <svg
                      viewBox="0 0 112 112"
                      className="h-32 w-32 -rotate-90"
                      role="img"
                      aria-label="Distribuição de carboidratos, proteínas, gorduras boas e fibras"
                    >
                      <circle cx="56" cy="56" r={donutRadius} fill="none" stroke="#E2E8F0" strokeWidth="12" />
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
                        KCAL
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <p className="text-xs font-bold text-slate-900">
                      Resumo do plano alimentar (Tabela TACO)
                    </p>
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

                {/* Trocas Inteligentes na Dieta */}
                <div className="rounded-2xl border border-amber-200/80 bg-white p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-bold text-slate-900">{selectedTaco.name}</p>
                      <p className="mt-0.5 text-[11px] text-slate-500">
                        {selectedTaco.measure} · {selectedTaco.kcal} kcal
                      </p>
                    </div>
                    <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                      Troca inteligente
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

            {/* ================= WEB 04: AGENDA, PACOTES E EQUIPE ================= */}
            {surface === "web" && activeWebModule === "gestao" ? (
              <div className="mt-5 flex flex-1 flex-col justify-between gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-4">
                    <span className="text-xs font-bold text-slate-900">
                      Pacotes de acompanhamento
                    </span>
                    <div className="mt-3 space-y-3">
                      {[
                        {
                          name: "Plano Semestral",
                          progress: "4 / 6",
                          pct: 67,
                          bar: "from-emerald-500 to-sky-500",
                          track: "bg-emerald-50",
                        },
                        {
                          name: "Nutrologia 8 sessões",
                          progress: "5 / 8",
                          pct: 63,
                          bar: "from-indigo-500 to-violet-500",
                          track: "bg-indigo-50",
                        },
                        {
                          name: "Acompanhamento Trimestral",
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

                  <div className="rounded-2xl border border-slate-200/80 bg-white p-4">
                    <span className="text-xs font-bold text-slate-900">Agenda do dia</span>
                    <ul className="mt-3 space-y-2 text-xs">
                      {[
                        { time: "09:00", patient: "Mariana S. Ribeiro", tag: "Retorno", pill: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                        { time: "10:30", patient: "Rafael M. Almeida", tag: "Revisão", pill: "bg-sky-50 text-sky-700 border-sky-200" },
                        { time: "14:00", patient: "Clara P. Mendes", tag: "Exames", pill: "bg-violet-50 text-violet-700 border-violet-200" },
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
                          <span className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${slot.pill}`}>
                            {slot.tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] px-4 py-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Shield className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                    <span>Acesso separado:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-bold">
                    <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 text-violet-700">
                      Diretoria
                    </span>
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-emerald-700">
                      Médico
                    </span>
                    <span className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-sky-700">
                      Recepção
                    </span>
                  </div>
                </div>
              </div>
            ) : null}

            {/* ================= PALCOS APP DO PACIENTE ================= */}
            {surface === "app" ? (
              <div className="mt-5 grid flex-1 grid-cols-1 items-center gap-6 sm:grid-cols-[282px_1fr]">
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
                          <p className="text-[10px] opacity-85">Plano de hoje</p>
                          <p className="mt-0.5 text-xs font-bold">Almoço · 12h30</p>
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

                          <p className="mt-2.5 text-[10px] font-semibold text-slate-400">
                            Trocar em 1 toque:
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
                            Salada verde + 1 col. azeite
                          </p>
                        </div>
                      </div>
                    ) : null}

                    {/* APP 02: GLICEMIA EM SEGUNDOS */}
                    {activeAppModule === "glicemia-app" ? (
                      <div className="space-y-3 p-3">
                        <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-center">
                          <p className="text-[10px] font-semibold text-slate-400">
                            {selectedGlycemia.context}
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
                            className={`mt-2 inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${selectedGlycemia.badgeClass}`}
                          >
                            {selectedGlycemia.status}
                          </span>

                          {/* Régua Colorida de 4 Faixas */}
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

                          <p className="mt-2.5 text-[10.5px] leading-snug text-slate-600">
                            {selectedGlycemia.note}
                          </p>
                        </div>

                        <div>
                          <p className="mb-1.5 text-[10px] font-semibold text-slate-400">
                            Toque para testar um valor:
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

                    {/* APP 03: ROTINA QUE MOTIVA */}
                    {activeAppModule === "checkins-app" ? (
                      <div className="space-y-2.5 p-3">
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
                            {hydrationMl >= 2500 ? "Meta atingida ✓" : "+250 ml"}
                          </button>
                        </div>

                        <div className="flex items-center justify-between rounded-xl border border-orange-200/80 bg-white p-3">
                          <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                              <Dumbbell className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-[11px] font-bold text-slate-900">Treino</p>
                              <p className="inline-flex items-center gap-1 font-mono text-[10px] text-orange-600">
                                <Flame className="h-3 w-3" aria-hidden="true" />
                                50 min feitos
                              </p>
                            </div>
                          </div>
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        </div>

                        <div className="rounded-xl border border-violet-200/80 bg-white p-3">
                          <p className="text-[11px] font-bold text-slate-900">Intestino</p>
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

                    {/* APP 04: EVOLUÇÃO & RECEPÇÃO */}
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
                              <p className="text-[11px] font-bold text-slate-900">Consistência</p>
                              <p className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text font-mono text-lg font-extrabold text-transparent">
                                86%
                              </p>
                              <p className="text-[10px] text-slate-400">6 semanas seguidas</p>
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
                              Recepção da Clínica
                            </p>
                          </div>
                          <p className="mt-1 text-[10px] text-slate-600">
                            Atalho direto para reagendar consultas.
                          </p>
                          <div className="mt-2 rounded-lg bg-gradient-to-r from-emerald-600 to-sky-600 py-1.5 text-center text-[10px] font-semibold text-white">
                            Falar com a Recepção
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {/* Abas inferiores do celular */}
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

                {/* Resumo direto à direita do celular */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      {APP_MODULES.find((m) => m.id === activeAppModule)?.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {APP_MODULES.find((m) => m.id === activeAppModule)?.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                      <span>Leva apenas o nome e as cores da sua clínica.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                      <span>Fácil de usar por pacientes de qualquer idade.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-600" aria-hidden="true" />
                      <span>Tudo aparece organizado no seu prontuário.</span>
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
