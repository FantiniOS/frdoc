"use client";

import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowLeftRight,
  Calendar,
  Check,
  CheckCircle2,
  ChevronLeft,
  Circle,
  Clock,
  Droplets,
  Dumbbell,
  HeartPulse,
  Home,
  MessageCircle,
  Plus,
  Ruler,
  Scale,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Target,
  TrendingUp,
  Utensils,
} from "lucide-react";

type AppTabKey = "Hoje" | "Dieta" | "Evolução" | "Clínica";

/**
 * Barra de navegação inferior real do Aplicativo Mobile FRdoc (BottomTabBar.tsx)
 */
function RealAppBottomBar({ activeTab }: { activeTab: AppTabKey }) {
  const tabs: Array<{ key: AppTabKey; icon: React.ComponentType<{ className?: string }> }> = [
    { key: "Hoje", icon: Home },
    { key: "Dieta", icon: Utensils },
    { key: "Evolução", icon: TrendingUp },
    { key: "Clínica", icon: Stethoscope },
  ];

  return (
    <div className="grid grid-cols-4 border-t border-slate-200 bg-white px-2 pt-1.5 pb-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.key;
        return (
          <div key={tab.key} className="flex flex-col items-center gap-0.5">
            <span
              className={`mb-0.5 h-[2.5px] w-5 rounded-full ${
                isActive ? "bg-teal-700" : "bg-transparent"
              }`}
            />
            <Icon
              className={`h-4 w-4 ${isActive ? "text-teal-700" : "text-slate-400"}`}
              aria-hidden="true"
            />
            <span
              className={`text-[9.5px] ${
                isActive ? "font-bold text-teal-700" : "font-medium text-slate-500"
              }`}
            >
              {tab.key}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/**
 * TELA APP 1 — Tela Inicial do Paciente (Hoje)
 * Espelho fiel de mobile/src/screens/HomeScreen.tsx
 */
export function AppHomeScreen({ clinicName = "INSTITUTO METABO" }: { clinicName?: string }) {
  const ringRadius = 21;
  const ringCirc = 2 * Math.PI * ringRadius;
  const ringOffset = ringCirc * (1 - 0.84);

  return (
    <div className="flex flex-col bg-[#F8FAFC] text-left">
      {/* Header Executivo Real (HomeScreen.tsx) */}
      <div className="border-b border-slate-800 bg-[#0f172a] px-4 pt-2.5 pb-3.5 text-white">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate font-mono text-[9.5px] font-bold tracking-[0.14em] text-[#2dd4bf] uppercase">
              {clinicName}
            </p>
            <p className="mt-0.5 truncate text-sm font-bold text-white">
              Boa tarde, Mariana
            </p>
          </div>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal-400/40 bg-slate-800 text-xs font-bold text-[#2dd4bf]">
            M
          </div>
        </div>

        {/* Objetivo + Anel de Consistência real */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <span className="inline-flex items-center gap-1 rounded-full border border-teal-400/30 bg-teal-500/10 px-2 py-0.5 text-[9.5px] font-semibold text-[#2dd4bf]">
              <Target className="h-2.5 w-2.5" aria-hidden="true" />
              Controle Glicêmico
            </span>
            <p className="mt-1 text-[10px] text-slate-300">
              Consistência hoje • 4 de 4 pilares ativos
            </p>
          </div>

          <div className="relative h-12 w-12 shrink-0">
            <svg viewBox="0 0 50 50" className="h-12 w-12 -rotate-90" aria-hidden="true">
              <circle
                cx="25"
                cy="25"
                r={ringRadius}
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="4.5"
              />
              <circle
                cx="25"
                cy="25"
                r={ringRadius}
                fill="none"
                stroke="#2dd4bf"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeDasharray={ringCirc}
                strokeDashoffset={ringOffset}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-mono text-[10.5px] font-extrabold text-white">
              84%
            </span>
          </div>
        </div>
      </div>

      {/* Corpo do Dia (HomeScreen.tsx) */}
      <div className="space-y-2.5 p-3">
        {/* Card Hidratação + Treino */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                <Droplets className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[11px] font-bold text-slate-900">Hidratação</p>
                <p className="text-[9.5px] text-slate-500">2,00 L de 2,5 L</p>
              </div>
            </div>
            <span className="rounded-full bg-sky-50 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-700">
              80%
            </span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-4/5 rounded-full bg-sky-600" />
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <span className="inline-flex items-center justify-center gap-1 rounded-lg border border-sky-200 bg-sky-50/70 py-1 text-[10px] font-bold text-sky-700">
              <Plus className="h-2.5 w-2.5" aria-hidden="true" />
              250 ml
            </span>
            <span className="inline-flex items-center justify-center gap-1 rounded-lg bg-sky-600 py-1 text-[10px] font-bold text-white">
              <Plus className="h-2.5 w-2.5" aria-hidden="true" />
              500 ml
            </span>
          </div>

          <div className="my-2.5 h-px bg-slate-100" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                <Dumbbell className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[11px] font-bold text-slate-900">Treino do Dia</p>
                <p className="text-[9.5px] text-slate-500">Musculação • 50 min</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9.5px] font-bold text-emerald-700">
              Feito ✓
            </span>
          </div>
        </div>

        {/* Trilha Real do Mapa Glicêmico de Hoje (HomeScreen.tsx) */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xs">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                <HeartPulse className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[11px] font-bold text-slate-900">
                  Mapa Glicêmico de Hoje
                </p>
                <p className="text-[9.5px] text-slate-500">3 de 4 horários medidos</p>
              </div>
            </div>
            <span className="rounded-lg border border-teal-200 bg-teal-50 px-1.5 py-0.5 text-[9px] font-bold text-teal-800">
              + Avulsa
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[9.5px] font-bold text-emerald-800">
              <CheckCircle2 className="h-2.5 w-2.5" aria-hidden="true" />
              Jejum · 92
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[9.5px] font-bold text-emerald-800">
              <CheckCircle2 className="h-2.5 w-2.5" aria-hidden="true" />
              Pós-Café · 124
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[9.5px] font-bold text-emerald-800">
              <CheckCircle2 className="h-2.5 w-2.5" aria-hidden="true" />
              Pós-Alm. · 136
              <span className="rounded bg-indigo-100 px-1 text-[8.5px] text-indigo-800">
                4 UI
              </span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-slate-300 bg-slate-50 px-2 py-0.5 text-[9.5px] font-semibold text-slate-500">
              Pós-Jan. · Medir
            </span>
          </div>

          <div className="mt-2 flex items-center gap-1.5 rounded-xl border border-emerald-200/80 bg-emerald-50/70 px-2.5 py-1.5 text-[9.5px] font-bold text-emerald-800">
            <Syringe className="h-3 w-3 shrink-0 text-emerald-700" aria-hidden="true" />
            <span className="truncate">Basal aplicada hoje: 14 UI às 22:00</span>
          </div>
        </div>
      </div>

      <RealAppBottomBar activeTab="Hoje" />
    </div>
  );
}

/**
 * TELA APP 2 — Plano Alimentar no Bolso
 * Espelho fiel de mobile/src/screens/DietaScreen.tsx (Linha do tempo + Trocas + Check-in 3s)
 */
const DIET_SWAPS = [
  { nome: "Peito de frango grelhado", medida: "1 filé médio (120g)" },
  { nome: "Filé de tilápia assada", medida: "1 posta média (140g)" },
  { nome: "Patinho moído refogado", medida: "4 col. sopa (115g)" },
] as const;

export function AppDietScreen() {
  const [swapIdx, setSwapIdx] = useState(0);
  const [checkinStatus, setCheckinStatus] = useState<"SEGUI" | "FIZ_TROCA" | "NAO_FIZ">("SEGUI");
  const currentFood = DIET_SWAPS[swapIdx];

  return (
    <div className="flex flex-col bg-[#F8FAFC] text-left">
      <div className="border-b border-slate-800 bg-[#0f172a] px-4 pt-2.5 pb-3 text-white">
        <p className="font-mono text-[9.5px] font-bold tracking-[0.14em] text-[#2dd4bf] uppercase">
          INSTITUTO METABO
        </p>
        <p className="mt-0.5 text-sm font-bold text-white">Dieta</p>
        <p className="text-[10px] text-slate-400">Plano alimentar de hoje</p>
      </div>

      <div className="space-y-2.5 p-3">
        {/* Barra de progresso do dia */}
        <div className="rounded-xl border border-slate-200/90 bg-white p-2.5">
          <div className="flex items-center justify-between text-[10.5px]">
            <span className="font-semibold text-slate-700">3 de 4 refeições hoje</span>
            <span className="font-mono font-extrabold text-teal-700">75%</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-3/4 rounded-full bg-teal-600" />
          </div>
        </div>

        {/* Linha do tempo horizontal de refeições */}
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { hora: "07:30", nome: "Café", done: true, active: false },
            { hora: "12:30", nome: "Almoço", done: false, active: true },
            { hora: "16:00", nome: "Lanche", done: false, active: false },
            { hora: "20:00", nome: "Jantar", done: false, active: false },
          ].map((m) => (
            <div
              key={m.hora}
              className={`rounded-xl border px-1.5 py-1.5 text-center ${
                m.active
                  ? "border-slate-900 bg-slate-900 text-white"
                  : m.done
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-slate-200 bg-white text-slate-600"
              }`}
            >
              <p className="font-mono text-[9.5px] font-bold">{m.hora}</p>
              <p className="truncate text-[9px] font-semibold opacity-90">{m.nome}</p>
            </div>
          ))}
        </div>

        {/* Card Principal da Refeição */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div>
              <p className="text-xs font-bold text-slate-900">Almoço</p>
              <p className="inline-flex items-center gap-1 text-[9.5px] text-slate-500">
                <Clock className="h-2.5 w-2.5" aria-hidden="true" />
                Horário sugerido: 12:30
              </p>
            </div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9.5px] font-bold text-emerald-700">
              {checkinStatus === "SEGUI"
                ? "✓ Segui"
                : checkinStatus === "FIZ_TROCA"
                  ? "⇄ Fiz troca"
                  : "○ Não fiz"}
            </span>
          </div>

          <div className="divide-y divide-slate-100 py-1.5">
            <div className="py-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[11px] font-bold text-slate-900">
                    {currentFood.nome}
                  </p>
                  <p className="text-[10px] text-slate-500">{currentFood.medida}</p>
                </div>
                {swapIdx > 0 ? (
                  <span className="rounded bg-cyan-50 px-1.5 py-0.5 text-[8.5px] font-bold text-cyan-800">
                    Troca aplicada
                  </span>
                ) : null}
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSwapIdx((prev) => (prev + 1) % DIET_SWAPS.length);
                  setCheckinStatus("FIZ_TROCA");
                }}
                className="mt-1.5 inline-flex items-center gap-1 rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-[9.5px] font-bold text-teal-800 transition-colors hover:bg-teal-100 cursor-pointer"
              >
                <ArrowLeftRight className="h-2.5 w-2.5" aria-hidden="true" />
                <span>Toque para trocar (2 opções)</span>
              </button>
            </div>

            <div className="py-2">
              <p className="text-[11px] font-bold text-slate-900">
                Arroz integral cozido
              </p>
              <p className="text-[10px] text-slate-500">4 colheres de sopa (120g)</p>
            </div>
          </div>

          {/* Rodapé real de Check-in em 3 segundos */}
          <div className="mt-1 border-t border-slate-100 pt-2">
            <p className="mb-1.5 text-[10px] font-semibold text-slate-500">
              Como foi esta refeição?
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCheckinStatus("SEGUI");
                }}
                className={`inline-flex items-center justify-center gap-1 rounded-lg border py-1.5 text-[10px] font-bold cursor-pointer ${
                  checkinStatus === "SEGUI"
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                <Check className="h-3 w-3" aria-hidden="true" />
                Segui
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCheckinStatus("FIZ_TROCA");
                }}
                className={`inline-flex items-center justify-center gap-1 rounded-lg border py-1.5 text-[10px] font-bold cursor-pointer ${
                  checkinStatus === "FIZ_TROCA"
                    ? "border-cyan-600 bg-cyan-600 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                <ArrowLeftRight className="h-3 w-3" aria-hidden="true" />
                Fiz troca
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCheckinStatus("NAO_FIZ");
                }}
                className={`inline-flex items-center justify-center gap-1 rounded-lg border py-1.5 text-[10px] font-bold cursor-pointer ${
                  checkinStatus === "NAO_FIZ"
                    ? "border-slate-600 bg-slate-600 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                <Circle className="h-2.5 w-2.5" aria-hidden="true" />
                Não fiz
              </button>
            </div>
          </div>
        </div>
      </div>

      <RealAppBottomBar activeTab="Dieta" />
    </div>
  );
}

/**
 * TELA APP 3 — Registro Rápido de Glicemia
 * Espelho fiel de mobile/src/screens/GlicemiaCheckinScreen.tsx
 */
const GLYCEMIA_PRESETS = [
  { val: 65, momento: "Em Jejum", status: "Hipoglicemia: abaixo de 70 mg/dL", tone: "hipo" as const },
  { val: 98, momento: "Em Jejum", status: "No alvo (70–130 mg/dL)", tone: "alvo" as const },
  { val: 152, momento: "Pós-Refeição", status: "No alvo pós-refeição (≤180 mg/dL)", tone: "alvo" as const },
  { val: 194, momento: "Pós-Refeição", status: "Acima do alvo (meta ≤180 mg/dL)", tone: "alto" as const },
];

export function AppGlycemiaScreen() {
  const [selectedIdx, setSelectedIdx] = useState(1);
  const current = GLYCEMIA_PRESETS[selectedIdx];

  return (
    <div className="flex flex-col bg-[#F8FAFC] text-left">
      {/* StandardHeader com botão Voltar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-[#0f172a] px-3 pt-2.5 pb-3 text-white">
        <span className="inline-flex items-center gap-0.5 text-[10.5px] font-semibold text-[#2dd4bf]">
          <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Voltar
        </span>
        <div className="text-center">
          <p className="font-mono text-[8.5px] font-bold tracking-[0.14em] text-[#2dd4bf] uppercase">
            INSTITUTO METABO
          </p>
          <p className="text-xs font-bold text-white">Registro de Glicemia</p>
        </div>
        <span className="w-10" aria-hidden="true" />
      </div>

      <div className="space-y-3 p-3.5">
        {/* Card Central Numérico Real */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-4 text-center shadow-2xs">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-1 text-[9.5px] font-extrabold tracking-wider text-rose-700 uppercase">
            <HeartPulse className="h-3 w-3 text-rose-600" aria-hidden="true" />
            <span>Glicemia Capilar (mg/dL)</span>
          </div>

          <div className="mt-3 flex items-baseline justify-center gap-1.5">
            <span
              className={`font-mono text-4xl font-black tracking-tight ${
                current.tone === "alvo" ? "text-slate-900" : "text-rose-600"
              }`}
            >
              {current.val}
            </span>
            <span className="text-xs font-bold text-slate-400">mg/dL</span>
          </div>

          <div
            className={`mt-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold ${
              current.tone === "alvo"
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-rose-200 bg-rose-50 text-rose-700"
            }`}
          >
            {current.tone === "alvo" ? (
              <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
            ) : (
              <AlertTriangle className="h-3 w-3" aria-hidden="true" />
            )}
            <span>{current.status}</span>
          </div>
        </div>

        {/* 3 Chips Reais de Momento da Medição (GlicemiaCheckinScreen.tsx) */}
        <div>
          <p className="mb-1.5 text-[10.5px] font-bold text-slate-700">
            Momento da Medição
          </p>
          <div className="grid grid-cols-3 gap-1.5">
            {["Em Jejum", "Pós-Refeição", "Outro"].map((momento) => {
              const active = current.momento === momento;
              return (
                <div
                  key={momento}
                  className={`rounded-xl border py-2 text-center text-[10px] font-bold ${
                    active
                      ? "border-teal-700 bg-teal-700 text-white"
                      : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  {momento}
                </div>
              );
            })}
          </div>
        </div>

        {/* Seletor interativo para demonstrar o retorno de cores */}
        <div>
          <p className="mb-1.5 text-[10px] font-semibold text-slate-400">
            Toque para simular um valor:
          </p>
          <div className="grid grid-cols-4 gap-1.5">
            {GLYCEMIA_PRESETS.map((p, idx) => (
              <button
                key={p.val}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIdx(idx);
                }}
                className={`rounded-lg border py-1.5 font-mono text-[11px] font-bold cursor-pointer ${
                  selectedIdx === idx
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {p.val}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-teal-700 py-2.5 text-center text-xs font-bold text-white shadow-xs">
          Registrar Glicemia
        </div>
      </div>
    </div>
  );
}

/**
 * TELA APP 4 — Rotina Diária e Evolução
 * Espelho fiel de mobile/src/screens/MetasScreen.tsx
 */
export function AppEvolutionScreen() {
  return (
    <div className="flex flex-col bg-[#F8FAFC] text-left">
      <div className="flex items-center justify-between border-b border-slate-800 bg-[#0f172a] px-4 pt-2.5 pb-3 text-white">
        <div>
          <p className="font-mono text-[9.5px] font-bold tracking-[0.14em] text-[#2dd4bf] uppercase">
            INSTITUTO METABO
          </p>
          <p className="mt-0.5 text-sm font-bold text-white">Evolução</p>
          <p className="text-[10px] text-slate-400">Espelho vivo do seu prontuário</p>
        </div>
        <span className="rounded-full border border-teal-400/30 bg-teal-500/10 px-2 py-0.5 text-[9px] font-bold text-[#2dd4bf]">
          Emagrecimento
        </span>
      </div>

      <div className="space-y-2.5 p-3">
        {/* Bloco 1: Evolução de Peso (MetasScreen.tsx) */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                <Scale className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="text-xs font-bold text-slate-900">Evolução de Peso</span>
            </div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700">
              -3,6 kg
            </span>
          </div>

          <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center">
            <div className="rounded-xl bg-slate-50 py-1.5">
              <p className="text-[9px] text-slate-500">Inicial</p>
              <p className="font-mono text-xs font-bold text-slate-800">72,0 kg</p>
            </div>
            <div className="rounded-xl border border-teal-200 bg-teal-50/70 py-1.5">
              <p className="text-[9px] font-semibold text-teal-700">Atual</p>
              <p className="font-mono text-xs font-extrabold text-teal-900">68,4 kg</p>
            </div>
            <div className="rounded-xl bg-slate-50 py-1.5">
              <p className="text-[9px] text-slate-500">Meta</p>
              <p className="font-mono text-xs font-bold text-slate-800">65,0 kg</p>
            </div>
          </div>

          <svg viewBox="0 0 220 52" className="mt-2 h-12 w-full" aria-hidden="true">
            <polyline
              points="10,12 52,18 94,24 136,30 178,36 210,41"
              fill="none"
              stroke="#0f766e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[
              [10, 12],
              [52, 18],
              [94, 24],
              [136, 30],
              [178, 36],
              [210, 41],
            ].map(([cx, cy], idx) => (
              <circle
                key={idx}
                cx={cx}
                cy={cy}
                r={idx === 5 ? 3.8 : 2.6}
                fill={idx === 5 ? "#0f766e" : "#ffffff"}
                stroke="#0f766e"
                strokeWidth="2"
              />
            ))}
          </svg>
        </div>

        {/* Bloco 2: Medidas & Intestino (Bristol) */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-2.5">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700">
              <Ruler className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
              Medidas
            </div>
            <p className="mt-1.5 font-mono text-xs font-extrabold text-slate-900">
              76,5 cm
            </p>
            <p className="text-[9.5px] font-semibold text-emerald-700">
              Cintura -3,5 cm
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white p-2.5">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700">
              <Activity className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
              Intestino
            </div>
            <p className="mt-1.5 text-xs font-extrabold text-emerald-700">
              Padrão Ideal
            </p>
            <p className="text-[9.5px] text-slate-500">Escala de Bristol</p>
          </div>
        </div>
      </div>

      <RealAppBottomBar activeTab="Evolução" />
    </div>
  );
}

/**
 * TELA APP 5 — Aba Clínica (Com a Marca da Sua Clínica)
 * Espelho fiel de mobile/src/screens/ProfileScreen.tsx
 */
export function AppClinicBrandScreen() {
  return (
    <div className="flex flex-col bg-[#F8FAFC] text-left">
      <div className="flex items-center justify-between border-b border-slate-800 bg-[#0f172a] px-4 pt-2.5 pb-3 text-white">
        <div>
          <p className="font-mono text-[9.5px] font-bold tracking-[0.14em] text-[#2dd4bf] uppercase">
            INSTITUTO METABO
          </p>
          <p className="mt-0.5 text-sm font-bold text-white">Clínica</p>
          <p className="text-[10px] text-slate-400">Consultas, protocolo e sua conta</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-teal-400/30 bg-teal-500/10 px-2 py-0.5 text-[9.5px] font-bold text-[#2dd4bf]">
          <ShieldCheck className="h-3 w-3" aria-hidden="true" />
          Ativo
        </span>
      </div>

      <div className="space-y-2.5 p-3">
        {/* Card Próxima Consulta Real (ProfileScreen.tsx) */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900">Próxima Consulta</p>
                <p className="text-[9.5px] text-slate-500">Agenda Instituto Metabo</p>
              </div>
            </div>
            <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[9.5px] font-bold text-teal-800">
              Em 4 dias
            </span>
          </div>

          <div className="mt-2.5 rounded-xl bg-slate-50 p-2.5">
            <p className="text-xs font-bold text-slate-900">Quinta-feira, 26/11 às 09:00</p>
            <p className="mt-0.5 text-[10px] text-slate-500">
              Dra. Camila Nogueira · Endocrinologia
            </p>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <span className="rounded-lg bg-emerald-600 py-1.5 text-center text-[10px] font-bold text-white">
              Confirmar
            </span>
            <span className="rounded-lg border border-slate-200 bg-white py-1.5 text-center text-[10px] font-bold text-slate-600">
              Cancelar
            </span>
          </div>
        </div>

        {/* Card Meu Plano + Falar com a Recepção */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xs">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-slate-900">Plano Semestral</span>
            <span className="font-mono font-bold text-emerald-700">4 de 6 consultas</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-2/3 rounded-full bg-teal-600" />
          </div>
          <div className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 py-2 text-[10.5px] font-bold text-emerald-800">
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Falar com a Recepção</span>
          </div>
        </div>
      </div>

      <RealAppBottomBar activeTab="Clínica" />
    </div>
  );
}
