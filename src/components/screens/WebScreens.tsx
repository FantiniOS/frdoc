"use client";

import React, { useState } from "react";
import {
  Activity,
  ArrowLeftRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  Coffee,
  Download,
  Dumbbell,
  FileText,
  Flame,
  Gauge,
  HeartPulse,
  Plus,
  Ruler,
  Scale,
  Settings2,
  Shield,
  Sparkles,
  Stethoscope,
  Sun,
  Target,
  TrendingDown,
  UserPlus,
  Utensils,
} from "lucide-react";

/**
 * Barra superior real do Painel Web FRdoc (espelhada em src/components/TopMenu.tsx).
 * Usa exclusivamente a clínica fictícia de demonstração "INSTITUTO METABO".
 */
function RealWebTopMenu({
  active = "Pacientes",
}: {
  active?: "Início" | "Pacientes" | "Agenda" | "Configurações";
}) {
  const links: Array<"Início" | "Pacientes" | "Agenda" | "Configurações"> = [
    "Início",
    "Pacientes",
    "Agenda",
    "Configurações",
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 bg-white px-4 py-2.5">
      {/* Marca fictícia da clínica */}
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 font-mono text-[11px] font-extrabold text-white shadow-2xs">
          IM
        </span>
        <span className="text-xs font-extrabold tracking-wider text-slate-800">
          INSTITUTO METABO
        </span>
      </div>

      {/* Links reais do TopMenu */}
      <div className="hidden items-center gap-1 sm:flex">
        {links.map((label) => {
          const isActive = active === label;
          return (
            <span
              key={label}
              className={`rounded-lg border px-2.5 py-1 text-[11px] ${
                isActive
                  ? "border-emerald-200/90 bg-emerald-50 font-bold text-emerald-800"
                  : "border-transparent font-semibold text-slate-500"
              }`}
            >
              {label}
            </span>
          );
        })}
      </div>

      {/* Perfil médico fictício */}
      <div className="flex items-center gap-2">
        <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
          C
          <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-white" />
        </div>
        <div className="hidden leading-tight md:block">
          <p className="text-[11px] font-bold text-slate-900">Dra. Camila Nogueira</p>
          <p className="text-[9.5px] font-semibold text-emerald-600">
            Endocrinologia &amp; Nutrologia
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * TELA WEB 1 — Visão Completa do Paciente
 * Espelho fiel de ProntuarioModal.tsx + TermometroExecutivoCard.tsx
 */
export function WebPatientOverviewScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className="bg-slate-50/70 text-left">
      <RealWebTopMenu active="Pacientes" />

      {/* Cabeçalho do Paciente (ProntuarioModal.tsx) */}
      <div className="relative overflow-hidden border-b border-slate-200/80 bg-white px-4 py-3.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-emerald-300/80 bg-gradient-to-br from-emerald-50 via-teal-50 to-white font-bold text-emerald-700 ring-4 ring-emerald-500/10">
              MC
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-1.5">
                <h3 className="text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
                  Mariana Costa
                </h3>
                <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-700">
                  PR-2048
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Ativo
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-teal-800">
                  <Award className="h-2.5 w-2.5 text-teal-600" aria-hidden="true" />
                  Plano Semestral · 4/6
                </span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] text-slate-500">
                <span>
                  Idade: <strong className="font-bold text-emerald-700">38 anos</strong>
                </span>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1">
                  <Stethoscope className="h-3 w-3 text-teal-600" aria-hidden="true" />
                  <strong className="text-slate-800">Dra. Camila Nogueira</strong>
                </span>
                <span className="hidden text-slate-300 sm:inline">•</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  <Target className="h-3 w-3 text-emerald-600" aria-hidden="true" />
                  Controle Glicêmico &amp; Emagrecimento
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Cards Reais de Evolução com Mini-Curvas (ProntuarioModal.tsx) */}
      <div className="border-b border-slate-200/80 bg-slate-50/90 px-4 py-3">
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {/* Card 1: Peso Atual */}
          <div className="rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs">
            <div className="flex items-center justify-between gap-1">
              <span className="inline-flex items-center gap-1 text-[9.5px] font-bold tracking-wider text-slate-500 uppercase">
                <Scale className="h-3 w-3 text-teal-600" aria-hidden="true" />
                Peso Atual
              </span>
              <span className="inline-flex items-center gap-0.5 rounded-md border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[9.5px] font-extrabold text-emerald-700">
                <TrendingDown className="h-2.5 w-2.5" aria-hidden="true" />
                -3,6 kg
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between gap-1.5">
              <span className="font-mono text-base font-black text-slate-900 sm:text-lg">
                68,4 kg
              </span>
              <svg viewBox="0 0 80 28" className="h-7 w-16 shrink-0" aria-hidden="true">
                <path
                  d="M3 6 L20 9 L38 14 L56 18 L77 23"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="77" cy="23" r="2.8" fill="#0d9488" />
              </svg>
            </div>
            <div className="mt-1 flex items-center justify-between text-[9.5px] text-slate-400">
              <span>vs. consulta anterior</span>
              <span className="inline-flex items-center font-semibold text-teal-600">
                Ver números
                <ChevronRight className="h-2.5 w-2.5" aria-hidden="true" />
              </span>
            </div>
          </div>

          {/* Card 2: IMC */}
          <div className="rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs">
            <div className="flex items-center justify-between gap-1">
              <span className="inline-flex items-center gap-1 text-[9.5px] font-bold tracking-wider text-slate-500 uppercase">
                <Activity className="h-3 w-3 text-emerald-600" aria-hidden="true" />
                IMC
              </span>
              <span className="rounded-md border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[9.5px] font-extrabold text-emerald-700">
                Normal
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between gap-1.5">
              <span className="font-mono text-base font-black text-slate-900 sm:text-lg">
                24,2
              </span>
              <svg viewBox="0 0 80 28" className="h-7 w-16 shrink-0" aria-hidden="true">
                <path
                  d="M3 7 L22 10 L40 15 L58 18 L77 22"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="77" cy="22" r="2.8" fill="#059669" />
              </svg>
            </div>
            <div className="mt-1 flex items-center justify-between text-[9.5px] text-slate-400">
              <span>Alt: 168 cm</span>
              <span className="inline-flex items-center font-semibold text-emerald-600">
                Ver números
                <ChevronRight className="h-2.5 w-2.5" aria-hidden="true" />
              </span>
            </div>
          </div>

          {/* Card 3: Glicemia / Metabolismo */}
          <div className="min-w-0 rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <span className="inline-flex items-center gap-1 text-[9.5px] font-bold tracking-wider text-slate-500 uppercase">
                <HeartPulse className="h-3 w-3 shrink-0 text-rose-500" aria-hidden="true" />
                Glicemia
              </span>
              <div className="flex items-center gap-1">
                <span className="hidden rounded-md border border-indigo-200 bg-indigo-50 px-1 py-0.5 text-[8.5px] font-extrabold text-indigo-700 sm:inline-block">
                  Insulina
                </span>
                <span className="rounded-md border border-teal-200 bg-teal-50 px-1.5 py-0.5 text-[8.5px] font-extrabold text-teal-800">
                  Mapa
                </span>
              </div>
            </div>
            <div className="mt-1 flex items-center justify-between gap-1.5">
              <span className="font-mono text-base font-black text-slate-900 sm:text-lg">
                108 <span className="text-[10px] font-semibold text-slate-400">mg/dL</span>
              </span>
              <svg viewBox="0 0 80 28" className="h-7 w-12 shrink-0 sm:w-14" aria-hidden="true">
                <path
                  d="M3 10 L20 15 L36 7 L56 16 L77 14"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="77" cy="14" r="2.8" fill="#e11d48" />
              </svg>
            </div>
            <div className="mt-1 flex items-center justify-between gap-1 text-[9.5px] text-slate-400">
              <span className="truncate">28 medições</span>
              <span className="inline-flex shrink-0 items-center font-bold text-rose-600">
                Mapa
                <span className="hidden sm:inline">&nbsp;Glicêmico</span>
                <ChevronRight className="h-2.5 w-2.5" aria-hidden="true" />
              </span>
            </div>
          </div>

          {/* Card 4: Circunferência / Medida */}
          <div className="rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs">
            <div className="flex items-center justify-between gap-1">
              <span className="inline-flex items-center gap-1 text-[9.5px] font-bold tracking-wider text-slate-500 uppercase">
                <Ruler className="h-3 w-3 text-sky-600" aria-hidden="true" />
                Medidas
              </span>
              <span className="rounded-md border border-sky-200 bg-sky-50 px-1.5 py-0.5 text-[9px] font-bold text-sky-700">
                + Medida
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between gap-1.5">
              <div className="min-w-0">
                <span className="font-mono text-base font-black text-slate-900 sm:text-lg">
                  26,4%
                </span>
                <p className="truncate text-[9.5px] text-slate-500">
                  Cint: <strong className="font-mono text-slate-700">76,5 cm</strong>
                </p>
              </div>
              <svg viewBox="0 0 80 28" className="h-7 w-14 shrink-0" aria-hidden="true">
                <path
                  d="M3 6 L22 10 L42 15 L60 19 L77 22"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="77" cy="22" r="2.8" fill="#0284c7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Real de Abas do Prontuário (ProntuarioModal.tsx) */}
      <div className="flex items-center gap-1 overflow-x-auto border-b border-slate-200/80 bg-slate-50/90 px-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {[
          { label: "Prontuário & Histórico", icon: FileText, active: true },
          { label: "Dieta", icon: Utensils, active: false },
          { label: "Metas", icon: Target, active: false },
          { label: "Treinos", icon: Dumbbell, active: false },
          { label: "Documentos", icon: ClipboardList, active: false },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <span
              key={tab.label}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-t-xl border-t-2 px-3 py-1.5 text-[11px] font-bold ${
                tab.active
                  ? "border-emerald-600 bg-white text-emerald-800 shadow-2xs"
                  : "border-transparent text-slate-500"
              }`}
            >
              <Icon
                className={`h-3.5 w-3.5 ${tab.active ? "text-emerald-600" : "text-slate-400"}`}
                aria-hidden="true"
              />
              <span>{tab.label}</span>
            </span>
          );
        })}
      </div>

      {/* Termômetro do Paciente · Últimos 30 dias (TermometroExecutivoCard.tsx) */}
      <div className="space-y-3 p-4">
        <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs">
          <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="rounded-lg border border-emerald-200/80 bg-emerald-50 p-1 text-emerald-700">
                <Gauge className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="text-[11px] font-extrabold tracking-wider text-slate-900 uppercase">
                Termômetro do Paciente
              </span>
              <span className="text-[10.5px] font-semibold text-slate-400">
                · Últimos 30 dias
              </span>
            </div>
            <span className="text-[10px] font-semibold text-slate-400">
              Leitura rápida de adesão
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            <div className="rounded-xl border border-slate-200/80 bg-slate-50/75 p-2.5">
              <div className="flex items-center justify-between gap-1">
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-slate-500 uppercase">
                  <Utensils className="h-2.5 w-2.5 text-teal-600" aria-hidden="true" />
                  Dieta
                </span>
                <span className="rounded border border-cyan-200 bg-cyan-50 px-1 text-[9px] font-bold text-cyan-700">
                  6 trocas
                </span>
              </div>
              <p className="mt-1 font-mono text-base font-black text-slate-900">88%</p>
              <p className="truncate text-[10px] font-semibold text-emerald-700">
                Sem gargalos
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-slate-50/75 p-2.5">
              <div className="flex items-center justify-between gap-1">
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-slate-500 uppercase">
                  <HeartPulse className="h-2.5 w-2.5 text-rose-500" aria-hidden="true" />
                  Glicemia
                </span>
                <span className="rounded border border-emerald-200 bg-emerald-50 px-1 text-[9px] font-bold text-emerald-700">
                  86% meta
                </span>
              </div>
              <p className="mt-1 font-mono text-base font-black text-slate-900">
                108 <span className="text-[9.5px] font-semibold text-slate-500">mg/dL</span>
              </p>
              <p className="truncate text-[10px] font-semibold text-slate-500">
                28 med. · na faixa
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-slate-50/75 p-2.5">
              <div className="flex items-center justify-between gap-1">
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-slate-500 uppercase">
                  <Activity className="h-2.5 w-2.5 text-emerald-600" aria-hidden="true" />
                  Intestino
                </span>
                <span className="text-[9px] font-bold text-slate-400">18 reg.</span>
              </div>
              <p className="mt-1 text-xs font-extrabold text-emerald-700">Padrão Ideal</p>
              <p className="truncate text-[10px] text-slate-500">Bristol 3 e 4</p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-slate-50/75 p-2.5">
              <div className="flex items-center justify-between gap-1">
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-slate-500 uppercase">
                  <Dumbbell className="h-2.5 w-2.5 text-teal-600" aria-hidden="true" />
                  Treinos
                </span>
                <span className="text-[9px] font-bold text-slate-400">4x/sem</span>
              </div>
              <p className="mt-1 font-mono text-base font-black text-slate-900">82%</p>
              <p className="truncate text-[10px] font-semibold text-slate-600">
                14 de 17 dias
              </p>
            </div>

            <div className="col-span-2 rounded-xl border border-slate-200/80 bg-slate-50/75 p-2.5 sm:col-span-1">
              <div className="flex items-center justify-between gap-1">
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-slate-500 uppercase">
                  <Ruler className="h-2.5 w-2.5 text-sky-600" aria-hidden="true" />
                  Fita Métrica
                </span>
              </div>
              <p className="mt-1 font-mono text-xs font-black text-emerald-700">
                Cint -3,5 cm
              </p>
              <p className="truncate text-[10px] text-slate-500">Abd -4,0 cm</p>
            </div>
          </div>
        </div>

        {/* Bloco resumido da Evolução Clínica (exibido na versão completa) */}
        {!compact ? (
          <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">
                Último registro na linha do tempo
              </span>
              <span className="font-mono text-[10px] font-semibold text-slate-400">
                18/11/2026 · Consulta de Retorno
              </span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
              Paciente com excelente adesão ao plano alimentar (88%) e redução de 3,6 kg em 60 dias. Glicemias pós-prandiais estáveis com ajuste de insulina basal para 14 UI à noite.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/**
 * TELA WEB 2 — Mapa de Glicemia & Insulina
 * Espelho fiel de MapaGlicemicoModal.tsx (7 momentos clínicos + Basal + linha de Médias)
 */
const REAL_SLOTS = [
  "Jejum",
  "Pós-Café",
  "Pré-Alm.",
  "Pós-Alm.",
  "Pré-Jan.",
  "Pós-Jan.",
  "Ao Deitar",
] as const;

type CellStatus = "ALVO" | "ATENCAO" | "HIPO" | "HIPER";

interface MockMapCell {
  valor: number;
  hora: string;
  status: CellStatus;
  rapidaUI?: number;
}

const REAL_MAP_ROWS: Array<{
  data: string;
  dia: string;
  celulas: Array<MockMapCell | null>;
  basal: { ui: number; hora: string };
}> = [
  {
    data: "21/11",
    dia: "Sáb",
    celulas: [
      { valor: 92, hora: "07:10", status: "ALVO" },
      { valor: 124, hora: "10:05", status: "ALVO" },
      { valor: 98, hora: "12:15", status: "ALVO" },
      { valor: 136, hora: "14:20", status: "ALVO", rapidaUI: 4 },
      null,
      { valor: 118, hora: "21:10", status: "ALVO" },
      { valor: 104, hora: "22:30", status: "ALVO" },
    ],
    basal: { ui: 14, hora: "22:00" },
  },
  {
    data: "20/11",
    dia: "Sex",
    celulas: [
      { valor: 96, hora: "07:05", status: "ALVO" },
      { valor: 146, hora: "09:50", status: "ATENCAO" },
      { valor: 102, hora: "12:10", status: "ALVO" },
      { valor: 174, hora: "14:18", status: "ATENCAO", rapidaUI: 6 },
      { valor: 108, hora: "19:00", status: "ALVO" },
      { valor: 129, hora: "21:15", status: "ALVO" },
      null,
    ],
    basal: { ui: 14, hora: "22:00" },
  },
  {
    data: "19/11",
    dia: "Qui",
    celulas: [
      { valor: 89, hora: "07:15", status: "ALVO" },
      { valor: 119, hora: "10:00", status: "ALVO" },
      null,
      { valor: 131, hora: "14:10", status: "ALVO", rapidaUI: 4 },
      { valor: 95, hora: "19:05", status: "ALVO" },
      { valor: 114, hora: "21:05", status: "ALVO" },
      { valor: 101, hora: "22:40", status: "ALVO" },
    ],
    basal: { ui: 14, hora: "22:00" },
  },
  {
    data: "18/11",
    dia: "Qua",
    celulas: [
      { valor: 95, hora: "07:08", status: "ALVO" },
      { valor: 128, hora: "10:12", status: "ALVO" },
      { valor: 104, hora: "12:20", status: "ALVO" },
      { valor: 148, hora: "14:25", status: "ATENCAO", rapidaUI: 4 },
      null,
      { valor: 121, hora: "21:00", status: "ALVO" },
      { valor: 106, hora: "22:30", status: "ALVO" },
    ],
    basal: { ui: 14, hora: "22:00" },
  },
];

function getRealCellClasses(status: CellStatus): string {
  switch (status) {
    case "HIPO":
      return "bg-rose-100 text-rose-800 border-rose-300";
    case "ALVO":
      return "bg-emerald-50 text-emerald-800 border-emerald-200/90";
    case "ATENCAO":
      return "bg-amber-50 text-amber-800 border-amber-200/90";
    case "HIPER":
      return "bg-rose-600 text-white border-rose-700";
  }
}

export function WebGlycemicMapScreen() {
  return (
    <div className="bg-slate-50/70 text-left">
      <RealWebTopMenu active="Pacientes" />

      <div className="space-y-3 p-4">
        {/* Cabeçalho do Mapa Glicêmico (MapaGlicemicoModal.tsx) */}
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-slate-200/90 bg-white px-4 py-3 shadow-2xs">
          <div className="flex items-center gap-2.5">
            <span className="rounded-xl border border-rose-200 bg-rose-50 p-1.5 text-rose-600">
              <HeartPulse className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-sm font-extrabold text-slate-900">
                Mapa Glicêmico &amp; Insulina · Mariana Costa
              </h3>
              <p className="text-[11px] text-slate-500">
                Período: <strong className="text-teal-800">14 dias</strong> · Alvo Jejum 70–130 · Pós ≤180 mg/dL
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-bold text-slate-700">
              <Settings2 className="h-3.5 w-3.5 text-teal-700" aria-hidden="true" />
              Protocolo
            </span>
            <span className="inline-flex items-center gap-1 rounded-xl bg-teal-600 px-3 py-1.5 text-[11px] font-bold text-white shadow-2xs">
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Exportar PDF
            </span>
          </div>
        </div>

        {/* 5 Resumos Reais do Mapa (MapaGlicemicoModal.tsx) */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          <div className="rounded-xl border border-slate-200/80 bg-white p-2.5">
            <span className="block text-[9.5px] font-bold text-slate-500 uppercase">
              Média Jejum
            </span>
            <p className="mt-0.5 font-mono text-base font-black text-slate-900">
              93 <span className="text-[10px] font-semibold text-slate-400">mg/dL</span>
            </p>
            <span className="text-[9.5px] text-slate-400">Alvo 70–130</span>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-white p-2.5">
            <span className="block text-[9.5px] font-bold text-slate-500 uppercase">
              Média Pós
            </span>
            <p className="mt-0.5 font-mono text-base font-black text-slate-900">
              134 <span className="text-[10px] font-semibold text-slate-400">mg/dL</span>
            </p>
            <span className="text-[9.5px] text-slate-400">Alvo ≤180</span>
          </div>

          <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/70 p-2.5">
            <span className="block text-[9.5px] font-bold text-emerald-700 uppercase">
              No Alvo %
            </span>
            <p className="mt-0.5 font-mono text-base font-black text-emerald-800">
              88% <span className="text-[10px] font-semibold text-emerald-700">(25 med.)</span>
            </p>
            <span className="text-[9.5px] text-emerald-700/80">Média geral: 114</span>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-white p-2.5">
            <span className="block text-[9.5px] font-bold text-slate-500 uppercase">
              Hipo / Hiper
            </span>
            <p className="mt-0.5 font-mono text-base font-black text-slate-900">0 / 0</p>
            <span className="text-[9.5px] text-slate-400">&lt;70 ou &gt;250</span>
          </div>

          <div className="col-span-2 rounded-xl border border-indigo-200/80 bg-indigo-50/60 p-2.5 sm:col-span-1">
            <span className="block text-[9.5px] font-bold text-indigo-700 uppercase">
              Basal Média
            </span>
            <p className="mt-0.5 font-mono text-base font-black text-indigo-900">14 UI</p>
            <span className="text-[9.5px] text-indigo-700/80">Rápida: 4 UI/dia</span>
          </div>
        </div>

        {/* Grade Colorida Real de 7 Momentos + Basal + Rodapé de Médias */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
          <table className="w-full min-w-[620px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/90 text-[10px] font-extrabold tracking-wider text-slate-700 uppercase">
                <th className="border-r border-slate-200/80 px-3 py-2">Data</th>
                {REAL_SLOTS.map((slot) => (
                  <th
                    key={slot}
                    className="border-r border-slate-200/80 px-1.5 py-2 text-center"
                  >
                    <span className="inline-flex items-center gap-1">
                      {slot}
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                    </span>
                  </th>
                ))}
                <th className="bg-indigo-50/70 px-2 py-2 text-center text-indigo-900">
                  Basal
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200/80 text-xs">
              {REAL_MAP_ROWS.map((row) => (
                <tr key={row.data}>
                  <td className="border-r border-slate-200/70 px-3 py-2 whitespace-nowrap">
                    <div className="font-mono text-xs font-extrabold text-slate-900">
                      {row.data}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-400">{row.dia}</div>
                  </td>

                  {row.celulas.map((cel, idx) => (
                    <td
                      key={idx}
                      className="border-r border-slate-200/70 px-1 py-1.5 text-center"
                    >
                      {cel ? (
                        <div
                          className={`mx-auto flex flex-col items-center rounded-lg border px-1.5 py-1 leading-tight ${getRealCellClasses(
                            cel.status
                          )}`}
                        >
                          <span className="font-mono text-[11px] font-black">
                            {cel.valor}
                          </span>
                          <span className="mt-0.5 text-[8.5px] font-semibold opacity-75">
                            {cel.hora}
                          </span>
                          {cel.rapidaUI ? (
                            <span className="mt-0.5 rounded bg-indigo-100 px-1 text-[8.5px] font-extrabold text-indigo-800">
                              {cel.rapidaUI} UI
                            </span>
                          ) : null}
                        </div>
                      ) : (
                        <span className="font-mono text-xs text-slate-300">—</span>
                      )}
                    </td>
                  ))}

                  <td className="bg-indigo-50/25 px-1.5 py-1.5 text-center">
                    <div className="mx-auto flex flex-col items-center rounded-lg border border-indigo-200 bg-indigo-50 px-1.5 py-1 text-indigo-900 leading-tight">
                      <span className="font-mono text-[11px] font-black">
                        {row.basal.ui} UI
                      </span>
                      <span className="mt-0.5 text-[8.5px] font-semibold text-indigo-600">
                        {row.basal.hora}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className="border-t-2 border-teal-200 bg-teal-50/80 text-[10.5px] font-black text-teal-950">
                <td className="border-r border-teal-200/70 px-3 py-2 uppercase">Médias</td>
                <td className="border-r border-teal-200/70 px-1 py-2 text-center font-mono text-teal-900">
                  93
                </td>
                <td className="border-r border-teal-200/70 px-1 py-2 text-center font-mono text-teal-900">
                  129
                </td>
                <td className="border-r border-teal-200/70 px-1 py-2 text-center font-mono text-teal-900">
                  101
                </td>
                <td className="border-r border-teal-200/70 px-1 py-2 text-center font-mono text-amber-700">
                  147
                </td>
                <td className="border-r border-teal-200/70 px-1 py-2 text-center font-mono text-teal-900">
                  102
                </td>
                <td className="border-r border-teal-200/70 px-1 py-2 text-center font-mono text-teal-900">
                  121
                </td>
                <td className="border-r border-teal-200/70 px-1 py-2 text-center font-mono text-teal-900">
                  104
                </td>
                <td className="px-1 py-2 text-center font-mono text-indigo-900">14 UI</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

/**
 * TELA WEB 3 — Prescrição de Dietas (Tabela TACO)
 * Espelho fiel de DietaTab.tsx (Variações, Biblioteca de Modelos, Refeições, Medidas Caseiras e + Troca)
 */
export function WebDietPrescriptionScreen() {
  const [activeVariation, setActiveVariation] = useState<"treino" | "descanso">("treino");

  return (
    <div className="bg-slate-50/70 text-left">
      <RealWebTopMenu active="Pacientes" />

      <div className="space-y-3 p-4">
        {/* Topo do Editor de Dieta (DietaTab.tsx) */}
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-slate-200/90 bg-white px-4 py-3 shadow-2xs">
          <div>
            <h3 className="text-sm font-extrabold text-slate-900">
              Plano Alimentar · Mariana Costa
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500">
              <span>
                P: <strong className="text-emerald-700">138g</strong>
              </span>
              <span className="text-slate-300">•</span>
              <span>
                C: <strong className="text-amber-700">162g</strong>
              </span>
              <span className="text-slate-300">•</span>
              <span>
                G: <strong className="text-rose-700">58g</strong>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-amber-200 bg-amber-50 px-1.5 py-0.5 font-mono text-[10.5px] font-bold text-amber-900">
                <Flame className="h-3 w-3 text-amber-500" aria-hidden="true" />
                1.740 kcal/dia
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-xl border border-teal-200 bg-teal-50 px-2.5 py-1.5 text-[11px] font-bold text-teal-800">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              Biblioteca de Modelos
            </span>
            <span className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 px-3 py-1.5 text-[11px] font-bold text-white shadow-2xs">
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Exportar PDF
            </span>
          </div>
        </div>

        {/* Variações de Cardápio (DietVariations.tsx) */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveVariation("treino");
            }}
            className={`rounded-xl border px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
              activeVariation === "treino"
                ? "border-teal-600 bg-teal-600 text-white shadow-2xs"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            Opção 1 · Dia de Treino
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveVariation("descanso");
            }}
            className={`rounded-xl border px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
              activeVariation === "descanso"
                ? "border-teal-600 bg-teal-600 text-white shadow-2xs"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            Opção 2 · Dia de Descanso
          </button>
        </div>

        {/* Card Real da Refeição: Almoço (DietaTab.tsx) */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 bg-slate-50/75 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="rounded-lg border border-slate-200 bg-white p-1.5 shadow-2xs">
                <Sun className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
              </span>
              <span className="text-xs font-bold text-slate-800">Almoço</span>
              <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10.5px] font-semibold text-slate-600">
                <Clock className="h-2.5 w-2.5 text-slate-400" aria-hidden="true" />
                12:30
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-bold text-slate-500">
                Obrigatória
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-lg border border-teal-200 bg-teal-50/80 px-2 py-0.5 text-[10.5px] font-bold text-teal-700">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                Modelos
              </span>
              <span className="inline-flex items-center gap-1 rounded-lg border border-amber-200 bg-amber-50 px-2 py-0.5 font-mono text-[11px] font-bold text-amber-900">
                <Flame className="h-3 w-3 text-amber-500" aria-hidden="true" />
                {activeVariation === "treino" ? "485 kcal" : "415 kcal"}
              </span>
            </div>
          </div>

          <div className="divide-y divide-slate-100 px-4 py-2">
            {/* Item 1 */}
            <div className="py-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-200/70 bg-amber-50 text-xs font-bold text-amber-700">
                    Fr
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Peito de frango grelhado
                    </p>
                    <p className="text-[10px] text-slate-400">
                      159 kcal / 100g • Tabela TACO
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-[11px] font-bold text-slate-800">
                    120 g
                  </span>
                  <span className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] text-slate-600">
                    1 filé médio
                  </span>
                  <span className="rounded-md border border-amber-200/70 bg-amber-50 px-2 py-0.5 font-mono text-[11px] font-bold text-amber-800">
                    191 kcal
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg border border-teal-200 bg-teal-50 px-2 py-1 text-[10.5px] font-bold text-teal-800">
                    <ArrowLeftRight className="h-3 w-3" aria-hidden="true" />+ Troca
                  </span>
                </div>
              </div>

              {/* Opções de troca prescritas (DietaTab.tsx) */}
              <div className="mt-2 ml-11 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-bold text-teal-700">Trocas no app:</span>
                <span className="rounded-lg border border-cyan-200 bg-cyan-50/70 px-2 py-0.5 text-[10.5px] font-semibold text-cyan-800">
                  Filé de tilápia assada · 140g (1 posta)
                </span>
                <span className="rounded-lg border border-cyan-200 bg-cyan-50/70 px-2 py-0.5 text-[10.5px] font-semibold text-cyan-800">
                  Patinho moído · 115g (4 col. sopa)
                </span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="py-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-200/70 bg-emerald-50 text-xs font-bold text-emerald-700">
                    Ar
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      {activeVariation === "treino"
                        ? "Arroz integral cozido"
                        : "Quinoa em grão cozida"}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      124 kcal / 100g • Tabela TACO
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-[11px] font-bold text-slate-800">
                    {activeVariation === "treino" ? "120 g" : "90 g"}
                  </span>
                  <span className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] text-slate-600">
                    {activeVariation === "treino" ? "4 col. sopa" : "3 col. sopa"}
                  </span>
                  <span className="rounded-md border border-amber-200/70 bg-amber-50 px-2 py-0.5 font-mono text-[11px] font-bold text-amber-800">
                    {activeVariation === "treino" ? "149 kcal" : "108 kcal"}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg border border-teal-200 bg-teal-50 px-2 py-1 text-[10.5px] font-bold text-teal-800">
                    <ArrowLeftRight className="h-3 w-3" aria-hidden="true" />+ Troca
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mini prévia da refeição anterior para contexto real */}
        <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-4 py-2.5 text-xs">
          <div className="flex items-center gap-2">
            <Coffee className="h-3.5 w-3.5 text-amber-600" aria-hidden="true" />
            <span className="font-bold text-slate-800">Café da Manhã · 07:30</span>
            <span className="text-slate-400">Ovos mexidos + pão integral + frutas</span>
          </div>
          <span className="font-mono text-[11px] font-bold text-amber-800">342 kcal</span>
        </div>
      </div>
    </div>
  );
}

/**
 * TELA WEB 4 — Agenda, Pacotes e Equipe
 * Espelho fiel da agenda clínica, pacotes de acompanhamento e gestão de equipe
 */
export function WebManagementScreen() {
  return (
    <div className="bg-slate-50/70 text-left">
      <RealWebTopMenu active="Agenda" />

      <div className="space-y-3 p-4">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          {/* Agenda Real (agenda/page.tsx) */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                <span className="text-xs font-extrabold text-slate-900">
                  Agenda da Clínica · Hoje
                </span>
              </div>
              <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-[10px] font-bold">
                <span className="rounded-md bg-white px-2 py-0.5 text-teal-800 shadow-2xs">
                  Dia
                </span>
                <span className="px-2 py-0.5 text-slate-500">Semana</span>
                <span className="px-2 py-0.5 text-slate-500">Mês</span>
              </div>
            </div>

            <div className="mt-2.5 space-y-2">
              {[
                {
                  hora: "09:00",
                  paciente: "Mariana Costa",
                  tipo: "Retorno · Plano 4/6",
                  status: "Confirmada via App",
                  statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
                  barColor: "bg-emerald-500",
                },
                {
                  hora: "10:00",
                  paciente: "Roberto Almeida",
                  tipo: "Primeira Consulta",
                  status: "Confirmada",
                  statusClass: "bg-sky-50 text-sky-700 border-sky-200",
                  barColor: "bg-sky-500",
                },
                {
                  hora: "11:00",
                  paciente: "Helena Duarte",
                  tipo: "Retorno · Glicemia",
                  status: "Agendada",
                  statusClass: "bg-amber-50 text-amber-800 border-amber-200",
                  barColor: "bg-amber-500",
                },
              ].map((item) => (
                <div
                  key={item.hora}
                  className="flex items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-slate-50/60 p-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`h-8 w-1 rounded-full ${item.barColor}`} />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-extrabold text-slate-900">
                          {item.hora}
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          {item.paciente}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-slate-500">{item.tipo}</p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[9.5px] font-bold ${item.statusClass}`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pacotes de Consultas (dados fictícios de demonstração) */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-900">
                  <Award className="h-4 w-4 text-teal-600" aria-hidden="true" />
                  Pacote de Consultas
                </span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700">
                  4 / 6 usadas
                </span>
              </div>

              <p className="mt-2 text-xs font-bold text-slate-800">
                Plano Semestral · Mariana Costa
              </p>
              <p className="text-[10.5px] text-slate-500">Validade: 180 dias · 2 restantes</p>

              <div className="mt-3 grid grid-cols-6 gap-1.5">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className={`flex h-7 items-center justify-center rounded-lg font-mono text-[11px] font-extrabold ${
                      n <= 4
                        ? "bg-emerald-600 text-white"
                        : "border border-dashed border-slate-300 bg-slate-50 text-slate-400"
                    }`}
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 text-[10.5px]">
              <span className="text-slate-500">Trimestral · Semestral · Anual</span>
              <span className="inline-flex items-center gap-1 font-bold text-teal-700">
                <Plus className="h-3 w-3" aria-hidden="true" />
                Renovar
              </span>
            </div>
          </div>
        </div>

        {/* Gestão da Equipe Real (dashboard/equipe/page.tsx) */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5">
            <span className="text-xs font-extrabold text-slate-900">
              Configurações &amp; Gestão da Equipe
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-[10.5px] font-bold text-white">
              <UserPlus className="h-3 w-3" aria-hidden="true" />
              Novo Membro
            </span>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {[
              {
                nome: "Dra. Camila Nogueira",
                user: "@camilamed",
                cargo: "Diretoria Clínica",
                cargoClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
                extra: "Endocrinologia · CRM-SP 148.920",
                icon: Shield,
              },
              {
                nome: "Dr. Henrique Prado",
                user: "@hprado",
                cargo: "Médico",
                cargoClass: "bg-sky-50 text-sky-800 border-sky-200",
                extra: "Endocrinologia · CRM-MG 61.402",
                icon: Stethoscope,
              },
              {
                nome: "Fernanda Rocha",
                user: "@recepcao",
                cargo: "Secretária",
                cargoClass: "bg-amber-50 text-amber-800 border-amber-200",
                extra: "Agenda e recepção (sem acesso a prontuário)",
                icon: ClipboardList,
              },
            ].map((membro) => {
              const Icon = membro.icon;
              return (
                <div
                  key={membro.user}
                  className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-bold text-slate-900">{membro.nome}</p>
                      <p className="text-[10px] text-slate-500">{membro.extra}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden font-mono text-[10.5px] font-bold text-emerald-700 sm:inline">
                      {membro.user}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${membro.cargoClass}`}
                    >
                      {membro.cargo}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                      <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                      Ativo
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
