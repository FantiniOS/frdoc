"use client";

import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  Building2,
  Calendar,
  CheckCircle2,
  Droplets,
  Flame,
  Lock,
  RefreshCw,
  Smartphone,
  TrendingUp,
  UserCheck,
  Users,
  Utensils,
  X,
} from "lucide-react";

type ClinicPresetId = "metabo" | "lumina" | "vitalle";
type DayScenario = "target" | "peak";

interface ClinicPreset {
  id: ClinicPresetId;
  name: string;
  specialty: string;
  domainSlug: string;
  doctor: string;
  crm: string;
  primary: string;
  secondary: string;
  softBg: string;
  softBorder: string;
  textDark: string;
}

const CLINIC_PRESETS: readonly ClinicPreset[] = [
  {
    id: "metabo",
    name: "Instituto Metabo",
    specialty: "Endocrinologia",
    domainSlug: "institutometabo",
    doctor: "Dra. Camila Nogueira",
    crm: "CRM-SP 148.920",
    primary: "#059669",
    secondary: "#0EA5E9",
    softBg: "#ECFDF5",
    softBorder: "#A7F3D0",
    textDark: "#065F46",
  },
  {
    id: "lumina",
    name: "Clínica Lumina",
    specialty: "Nutrologia",
    domainSlug: "clinicalumina",
    doctor: "Dr. Henrique Prado",
    crm: "CRM-MG 61.402",
    primary: "#2563EB",
    secondary: "#0EA5E9",
    softBg: "#EFF6FF",
    softBorder: "#BFDBFE",
    textDark: "#1E40AF",
  },
  {
    id: "vitalle",
    name: "Núcleo Vitalle",
    specialty: "Saúde Integrativa",
    domainSlug: "nucleovitalle",
    doctor: "Dra. Beatriz Lemos",
    crm: "CRM-RJ 92.310",
    primary: "#7C3AED",
    secondary: "#F59E0B",
    softBg: "#F5F3FF",
    softBorder: "#DDD6FE",
    textDark: "#5B21B6",
  },
] as const;

interface GlycemiaPoint {
  x: number;
  y: number;
  value: number;
  time: string;
  zone: "target" | "warning" | "spike";
}

const WEEKLY_HABITS = [
  { label: "Hidratação", pct: 92, color: "#0EA5E9", bg: "#E0F2FE", text: "#0369A1" },
  { label: "Glicemia", pct: 96, color: "#10B981", bg: "#D1FAE5", text: "#047857" },
  { label: "Dieta", pct: 86, color: "#8B5CF6", bg: "#EDE9FE", text: "#6D28D9" },
  { label: "Treino", pct: 78, color: "#F97316", bg: "#FFEDD5", text: "#C2410C" },
] as const;

const DAY_SCENARIOS: Record<
  DayScenario,
  {
    badgeLabel: string;
    latestMgDl: number;
    latestTime: string;
    timeInRange: string;
    insulinDose: string;
    updatedLabel: string;
    mobileNote: string;
    linePath: string;
    areaPath: string;
    miniCurvePath: string;
    miniTrendPath: string;
    points: readonly GlycemiaPoint[];
  }
> = {
  target: {
    badgeLabel: "Dia no alvo",
    latestMgDl: 104,
    latestTime: "21:05",
    timeInRange: "89%",
    insulinDose: "14 UI",
    updatedLabel: "há 1 min",
    mobileNote: "Dentro da faixa ideal hoje.",
    linePath:
      "M 38 110 C 68 108, 98 86, 128 85 C 158 84, 188 107, 218 107 C 248 107, 278 80, 308 79 C 338 78, 368 102, 398 102 C 428 102, 462 101, 496 101",
    areaPath:
      "M 38 110 C 68 108, 98 86, 128 85 C 158 84, 188 107, 218 107 C 248 107, 278 80, 308 79 C 338 78, 368 102, 398 102 C 428 102, 462 101, 496 101 L 496 154 L 38 154 Z",
    miniCurvePath:
      "M 6 34 C 28 32, 46 22, 70 23 C 94 24, 118 30, 142 22 C 166 18, 190 26, 214 24",
    miniTrendPath: "M 2 18 L 12 15 L 22 17 L 32 11 L 42 13 L 54 10",
    points: [
      { x: 38, y: 110, value: 92, time: "07h", zone: "target" },
      { x: 128, y: 85, value: 124, time: "10h", zone: "target" },
      { x: 218, y: 107, value: 96, time: "12h", zone: "target" },
      { x: 308, y: 79, value: 131, time: "14h", zone: "target" },
      { x: 398, y: 102, value: 102, time: "18h", zone: "target" },
      { x: 496, y: 101, value: 104, time: "21h", zone: "target" },
    ],
  },
  peak: {
    badgeLabel: "Alerta de pico",
    latestMgDl: 178,
    latestTime: "14:15",
    timeInRange: "74%",
    insulinDose: "16 UI",
    updatedLabel: "agora",
    mobileNote: "Pico após o almoço enviado ao médico.",
    linePath:
      "M 38 108 C 68 105, 98 76, 128 74 C 158 72, 188 96, 218 96 C 248 96, 278 40, 308 40 C 338 40, 368 64, 398 64 C 428 64, 462 82, 496 82",
    areaPath:
      "M 38 108 C 68 105, 98 76, 128 74 C 158 72, 188 96, 218 96 C 248 96, 278 40, 308 40 C 338 40, 368 64, 398 64 C 428 64, 462 82, 496 82 L 496 154 L 38 154 Z",
    miniCurvePath:
      "M 6 34 C 30 30, 52 24, 78 26 C 102 28, 122 8, 146 9 C 170 10, 192 20, 214 23",
    miniTrendPath: "M 2 18 L 12 16 L 22 14 L 32 17 L 42 5 L 54 9",
    points: [
      { x: 38, y: 108, value: 96, time: "07h", zone: "target" },
      { x: 128, y: 74, value: 138, time: "10h", zone: "warning" },
      { x: 218, y: 96, value: 109, time: "12h", zone: "target" },
      { x: 308, y: 40, value: 178, time: "14h", zone: "spike" },
      { x: 398, y: 64, value: 148, time: "18h", zone: "warning" },
      { x: 496, y: 82, value: 128, time: "21h", zone: "target" },
    ],
  },
};

function slugifyClinicName(raw: string): string {
  const normalized = raw
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 24);
  return normalized.length >= 2 ? normalized : "suaclinica";
}

function getClinicInitials(name: string): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  if (parts.length === 0) return "CL";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

function getPointColors(zone: GlycemiaPoint["zone"]) {
  if (zone === "spike") {
    return { stroke: "#F43F5E", halo: "#F43F5E", text: "#BE123C" };
  }
  if (zone === "warning") {
    return { stroke: "#F59E0B", halo: "#F59E0B", text: "#B45309" };
  }
  return { stroke: "#10B981", halo: "#10B981", text: "#047857" };
}

export function WhiteLabelSimulator() {
  const [selectedPresetId, setSelectedPresetId] = useState<ClinicPresetId>("metabo");
  const [customClinicName, setCustomClinicName] = useState("");
  const [scenario, setScenario] = useState<DayScenario>("target");

  const activePreset =
    CLINIC_PRESETS.find((p) => p.id === selectedPresetId) ?? CLINIC_PRESETS[0];

  const trimmedCustom = customClinicName.trim();
  const displayName = trimmedCustom.length > 0 ? trimmedCustom : activePreset.name;
  const displayDomain =
    trimmedCustom.length > 0
      ? `app.${slugifyClinicName(trimmedCustom)}.com.br`
      : `app.${activePreset.domainSlug}.com.br`;
  const initials = getClinicInitials(displayName);
  const dayData = DAY_SCENARIOS[scenario];
  const isPeak = scenario === "peak";

  const concentricRings = [
    { label: "Geral", pct: 84, r: 35, stroke: "url(#frdocRingMain)", track: "#E2E8F0" },
    { label: "Hidratação", pct: 92, r: 27, stroke: "#0EA5E9", track: "#E0F2FE" },
    { label: "Dieta", pct: 86, r: 19, stroke: "#8B5CF6", track: "#EDE9FE" },
    { label: "Treino", pct: 78, r: 11, stroke: "#F97316", track: "#FFEDD5" },
  ] as const;

  return (
    <div className="relative mx-auto mt-12 max-w-6xl">
      {/* Convite direto e simples */}
      <p className="mb-3 text-center text-sm font-semibold text-slate-700">
        Digite o nome da sua clínica e veja como fica:
      </p>

      {/* Barra de Controle Enxuta */}
      <div className="mb-6 rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 shadow-clinical backdrop-blur-md sm:p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            {/* Campo para digitar o nome da clínica em destaque */}
            <div className="relative flex-1 sm:w-60 sm:flex-none">
              <Building2
                className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="text"
                value={customClinicName}
                onChange={(e) => setCustomClinicName(e.target.value)}
                maxLength={30}
                placeholder="Nome da sua clínica..."
                aria-label="Digite o nome da sua clínica"
                className={`w-full rounded-xl border py-2 pr-8 pl-9 text-xs font-medium text-slate-900 placeholder:text-slate-400 transition-colors focus:border-sky-500 focus:bg-white focus:outline-none ${
                  trimmedCustom.length > 0
                    ? "border-sky-500 bg-white ring-2 ring-sky-500/15"
                    : "border-slate-200 bg-slate-50/70"
                }`}
              />
              {customClinicName.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setCustomClinicName("")}
                  aria-label="Limpar nome"
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-md p-0.5 text-slate-400 hover:bg-slate-200/70 hover:text-slate-700"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              ) : null}
            </div>

            {/* 3 Botões rápidos de cores / clínicas exemplo */}
            <div
              className="flex flex-wrap items-center gap-1.5"
              role="group"
              aria-label="Exemplos de clínicas e cores"
            >
              {CLINIC_PRESETS.map((preset) => {
                const isColorSelected = selectedPresetId === preset.id;
                const isPresetActive = isColorSelected && trimmedCustom.length === 0;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => {
                      setSelectedPresetId(preset.id);
                      setCustomClinicName("");
                    }}
                    className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                      isPresetActive
                        ? "border-slate-900 bg-slate-900 text-white shadow-xs"
                        : isColorSelected
                          ? "border-slate-300 bg-white text-slate-900 ring-1 ring-slate-200"
                          : "border-slate-200 bg-slate-50/80 text-slate-700 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-white/80"
                      style={{
                        background: `linear-gradient(135deg, ${preset.primary}, ${preset.secondary})`,
                      }}
                      aria-hidden="true"
                    />
                    <span>{preset.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Botão simples: Dia no alvo vs Alerta de pico */}
          <div
            className="grid w-full grid-cols-2 rounded-xl border border-slate-200 bg-slate-100/80 p-1 sm:inline-flex sm:w-auto"
            role="group"
            aria-label="Alternar exemplo do dia"
          >
            <button
              type="button"
              onClick={() => setScenario("target")}
              className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-150 sm:py-1 ${
                !isPeak
                  ? "bg-white text-emerald-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>Dia no alvo</span>
            </button>
            <button
              type="button"
              onClick={() => setScenario("peak")}
              className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-150 sm:py-1 ${
                isPeak
                  ? "bg-white text-rose-600 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" aria-hidden="true" />
              <span>Alerta de pico</span>
            </button>
          </div>
        </div>
      </div>

      {/*
        ===========================================================================
        SIMULADOR INTERATIVO: PAINEL DO MÉDICO + APP DO PACIENTE
        ---------------------------------------------------------------------------
        OPCIONAL FUTURO:
        Caso deseje substituir esta interface interativa por capturas reais de tela
        (<Image />), basta substituir o grid abaixo preservando o container.
        ===========================================================================
      */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:items-center lg:gap-5">
        {/* PAINEL DO MÉDICO (Colunas 1–8 no Desktop) */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-clinical-lg lg:col-span-8">
          {/* Barra do Navegador com o endereço da clínica */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 bg-slate-50/90 px-4 py-2.5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>

            <div className="flex max-w-full items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] text-slate-600 shadow-2xs">
              <Lock className="h-3 w-3 shrink-0 text-emerald-600" aria-hidden="true" />
              <span className="truncate font-semibold text-slate-900">{displayDomain}</span>
            </div>

            <div className="hidden items-center gap-1.5 text-[11px] font-semibold text-emerald-700 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Espaço exclusivo</span>
            </div>
          </div>

          {/* Corpo do Painel */}
          <div className="grid grid-cols-1 sm:grid-cols-[192px_1fr]">
            {/* Menu Lateral com a marca da clínica */}
            <aside className="hidden flex-col justify-between border-r border-slate-100 bg-slate-50/50 p-3.5 sm:flex">
              <div>
                <div className="flex items-center gap-2.5 border-b border-slate-200/70 pb-3.5">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold text-white shadow-xs transition-all duration-200"
                    style={{
                      background: `linear-gradient(135deg, ${activePreset.primary}, ${activePreset.secondary})`,
                    }}
                  >
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-slate-900">
                      {displayName}
                    </p>
                    <p className="truncate text-[10px] text-slate-500">
                      {activePreset.specialty}
                    </p>
                  </div>
                </div>

                <ul className="mt-3.5 space-y-1 text-xs">
                  <li
                    className="flex items-center gap-2 rounded-lg px-2.5 py-2 font-semibold transition-colors duration-200"
                    style={{
                      backgroundColor: activePreset.softBg,
                      color: activePreset.textDark,
                    }}
                  >
                    <Activity className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>Prontuário</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-lg px-2.5 py-2 font-medium text-slate-500">
                    <TrendingUp className="h-3.5 w-3.5 shrink-0 text-rose-500" aria-hidden="true" />
                    <span>Glicemia</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-lg px-2.5 py-2 font-medium text-slate-500">
                    <Utensils className="h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden="true" />
                    <span>Dietas</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-lg px-2.5 py-2 font-medium text-slate-500">
                    <Calendar className="h-3.5 w-3.5 shrink-0 text-indigo-500" aria-hidden="true" />
                    <span>Agenda &amp; Pacotes</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-lg px-2.5 py-2 font-medium text-slate-500">
                    <Users className="h-3.5 w-3.5 shrink-0 text-sky-500" aria-hidden="true" />
                    <span>Equipe</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200/80 bg-white p-2.5">
                <div className="flex items-center gap-2">
                  <UserCheck
                    className="h-3.5 w-3.5 shrink-0"
                    style={{ color: activePreset.primary }}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-semibold text-slate-900">
                      {activePreset.doctor}
                    </p>
                    <p className="font-mono text-[9px] text-slate-500">
                      {activePreset.crm}
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Área Principal do Paciente */}
            <div className="p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold text-white sm:hidden"
                    style={{
                      background: `linear-gradient(135deg, ${activePreset.primary}, ${activePreset.secondary})`,
                    }}
                  >
                    {initials}
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">
                      Mariana S. Ribeiro{" "}
                      <span className="font-normal text-slate-400">· 38 anos</span>
                    </h2>
                    <p className="mt-0.5 text-[11px] text-slate-500">
                      {displayName} · Acompanhamento diário
                    </p>
                  </div>
                </div>

                <div
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold transition-colors duration-200 ${
                    isPeak
                      ? "border-rose-200 bg-rose-50 text-rose-700"
                      : "border-emerald-200 bg-emerald-50 text-emerald-700"
                  }`}
                >
                  {isPeak ? (
                    <AlertTriangle className="h-3.5 w-3.5 text-rose-500" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                  )}
                  <span>{dayData.badgeLabel}</span>
                </div>
              </div>

              {/* 4 Indicadores Coloridos com Mini-Curvas */}
              <div className="mt-3.5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-2.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-medium text-slate-500">Glicemia hoje</p>
                    <svg width="34" height="14" viewBox="0 0 56 22" aria-hidden="true">
                      <path
                        d={dayData.miniTrendPath}
                        fill="none"
                        stroke={isPeak ? "#F43F5E" : "#10B981"}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    className={`mt-1 font-mono text-base font-bold tracking-tight ${
                      isPeak ? "text-rose-600" : "text-emerald-700"
                    }`}
                  >
                    {dayData.latestMgDl}{" "}
                    <span className="text-[10px] font-normal text-slate-500">mg/dL</span>
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-2.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-medium text-slate-500">No alvo</p>
                    <svg width="34" height="14" viewBox="0 0 56 22" aria-hidden="true">
                      <path
                        d="M 2 16 L 14 14 L 26 11 L 38 12 L 54 6"
                        fill="none"
                        stroke="#0EA5E9"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="mt-1 font-mono text-base font-bold tracking-tight text-sky-700">
                    {dayData.timeInRange}{" "}
                    <span className="text-[10px] font-normal text-slate-500">14 dias</span>
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-2.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-medium text-slate-500">Insulina</p>
                    <svg width="34" height="14" viewBox="0 0 56 22" aria-hidden="true">
                      <path
                        d="M 2 12 L 16 12 L 28 10 L 40 12 L 54 11"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="mt-1 font-mono text-base font-bold tracking-tight text-indigo-700">
                    {dayData.insulinDose}{" "}
                    <span className="text-[10px] font-normal text-slate-500">noite</span>
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-2.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-medium text-slate-500">Atualizado</p>
                    <span className="h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                  </div>
                  <p className="mt-1 flex items-center gap-1 font-mono text-xs font-bold text-slate-800">
                    <RefreshCw className="h-3 w-3 shrink-0 text-sky-600" aria-hidden="true" />
                    <span>{dayData.updatedLabel}</span>
                  </p>
                </div>
              </div>

              {/* Curva Glicêmica Colorida em SVG */}
              <div className="mt-3.5 rounded-xl border border-slate-200/80 bg-white p-3.5">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      Glicemia do dia
                    </span>
                    <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-700">
                      Alvo 70–140
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[10px] font-semibold">
                    <span className="inline-flex items-center gap-1 text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Ideal
                    </span>
                    <span className="inline-flex items-center gap-1 text-amber-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Atenção
                    </span>
                    <span className="inline-flex items-center gap-1 text-rose-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                      Pico
                    </span>
                  </div>
                </div>

                <div className="w-full overflow-hidden">
                  <svg
                    viewBox="0 0 540 178"
                    className="h-auto w-full"
                    role="img"
                    aria-label={`Curva de glicemia no cenário ${dayData.badgeLabel}`}
                  >
                    <defs>
                      <linearGradient
                        id="frdocGlycemicStroke"
                        x1="0"
                        y1="32"
                        x2="0"
                        y2="136"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#F43F5E" />
                        <stop offset="30%" stopColor="#EC4899" />
                        <stop offset="44%" stopColor="#F59E0B" />
                        <stop offset="62%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                      </linearGradient>

                      <linearGradient
                        id="frdocGlycemicArea"
                        x1="0"
                        y1="32"
                        x2="0"
                        y2="154"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0%"
                          stopColor={isPeak ? "#F43F5E" : "#10B981"}
                          stopOpacity={isPeak ? "0.24" : "0.18"}
                        />
                        <stop
                          offset="42%"
                          stopColor={isPeak ? "#F59E0B" : "#0EA5E9"}
                          stopOpacity="0.12"
                        />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.01" />
                      </linearGradient>
                    </defs>

                    <rect
                      x="34"
                      y="72"
                      width="494"
                      height="56"
                      rx="5"
                      fill="#10B981"
                      fillOpacity="0.085"
                    />

                    <line
                      x1="34"
                      y1="40"
                      x2="528"
                      y2="40"
                      stroke="#FDA4AF"
                      strokeOpacity="0.65"
                      strokeWidth="1"
                      strokeDasharray="3 4"
                    />
                    <line
                      x1="34"
                      y1="72"
                      x2="528"
                      y2="72"
                      stroke="#10B981"
                      strokeOpacity="0.55"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="34"
                      y1="128"
                      x2="528"
                      y2="128"
                      stroke="#0EA5E9"
                      strokeOpacity="0.5"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <line x1="34" y1="154" x2="528" y2="154" stroke="#E2E8F0" strokeWidth="1" />

                    <text x="4" y="43" fill="#E11D48" fontSize="9.5" fontWeight="600" fontFamily="var(--font-mono)">
                      180
                    </text>
                    <text x="4" y="75" fill="#059669" fontSize="9.5" fontWeight="600" fontFamily="var(--font-mono)">
                      140
                    </text>
                    <text x="10" y="131" fill="#0284C7" fontSize="9.5" fontWeight="600" fontFamily="var(--font-mono)">
                      70
                    </text>

                    <path d={dayData.areaPath} fill="url(#frdocGlycemicArea)" />
                    <path
                      d={dayData.linePath}
                      fill="none"
                      stroke="url(#frdocGlycemicStroke)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {isPeak ? (
                      <g>
                        <line
                          x1="308"
                          y1="40"
                          x2="308"
                          y2="154"
                          stroke="#F43F5E"
                          strokeWidth="1.3"
                          strokeDasharray="3 3"
                        />
                        <rect
                          x="320"
                          y="14"
                          width="138"
                          height="24"
                          rx="6"
                          fill="#FFF1F2"
                          stroke="#FDA4AF"
                          strokeWidth="1"
                        />
                        <text
                          x="330"
                          y="29"
                          fill="#BE123C"
                          fontSize="10"
                          fontWeight="700"
                          fontFamily="var(--font-mono)"
                        >
                          178 mg/dL · Pico 14h
                        </text>
                      </g>
                    ) : null}

                    {dayData.points.map((pt) => {
                      const colors = getPointColors(pt.zone);
                      return (
                        <g key={pt.time}>
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={pt.zone === "spike" ? 10 : 7.5}
                            fill={colors.halo}
                            fillOpacity={pt.zone === "spike" ? "0.22" : "0.14"}
                          />
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={pt.zone === "spike" ? 5 : 4}
                            fill="#FFFFFF"
                            stroke={colors.stroke}
                            strokeWidth="2.4"
                          />
                          <text
                            x={pt.x}
                            y={pt.y - 11}
                            textAnchor="middle"
                            fill={colors.text}
                            fontSize="9.5"
                            fontWeight="700"
                            fontFamily="var(--font-mono)"
                          >
                            {pt.value}
                          </text>
                          <text
                            x={pt.x}
                            y="170"
                            textAnchor="middle"
                            fill="#64748B"
                            fontSize="9.5"
                            fontFamily="var(--font-mono)"
                          >
                            {pt.time}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Barras coloridas de rotina semanal */}
                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 sm:grid-cols-4">
                  {WEEKLY_HABITS.map((bar) => (
                    <div key={bar.label} className="space-y-1">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-semibold text-slate-600">{bar.label}</span>
                        <span className="font-mono font-bold" style={{ color: bar.text }}>
                          {bar.pct}%
                        </span>
                      </div>
                      <div
                        className="h-1.5 w-full overflow-hidden rounded-full"
                        style={{ backgroundColor: bar.bg }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{ width: `${bar.pct}%`, backgroundColor: bar.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SMARTPHONE DO PACIENTE (Anéis Coloridos + Curva de Glicemia) */}
        <div className="relative mx-auto w-full max-w-[312px] lg:col-span-4 lg:max-w-none">
          <div className="mb-2.5 flex items-center justify-center lg:justify-start">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 shadow-xs">
              <Smartphone
                className="h-3.5 w-3.5"
                style={{ color: activePreset.primary }}
                aria-hidden="true"
              />
              <span>App próprio da sua clínica</span>
            </span>
          </div>

          <div className="rounded-[2.25rem] border border-slate-300/90 bg-white p-2.5 shadow-clinical-lg ring-4 ring-slate-100/80">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-[#F8FAFC]">
              {/* Barra superior */}
              <div className="flex items-center justify-between bg-white px-5 pt-3 pb-2 font-mono text-[10px] font-semibold text-slate-600">
                <span>14:18</span>
                <div className="h-3.5 w-16 rounded-full bg-slate-200/80" aria-hidden="true" />
                <span>94%</span>
              </div>

              {/* Cabeçalho com a marca da clínica */}
              <div
                className="border-b px-4 py-3 transition-colors duration-200"
                style={{
                  backgroundColor: activePreset.softBg,
                  borderColor: activePreset.softBorder,
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-mono text-[11px] font-bold text-white shadow-xs transition-all duration-200"
                    style={{
                      background: `linear-gradient(135deg, ${activePreset.primary}, ${activePreset.secondary})`,
                    }}
                  >
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-slate-900">
                      {displayName}
                    </p>
                    <p className="truncate text-[10px] text-slate-600">
                      Olá, Mariana
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 p-3.5">
                {/* Anéis Concêntricos Coloridos */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Consistência</span>
                    <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text font-mono text-xs font-extrabold text-transparent">
                      84%
                    </span>
                  </div>

                  <div className="mt-2.5 flex items-center gap-3">
                    <svg
                      viewBox="0 0 84 84"
                      className="h-[82px] w-[82px] shrink-0 -rotate-90"
                      role="img"
                      aria-label="Consistência 84%, Hidratação 92%, Dieta 86% e Treino 78%"
                    >
                      <defs>
                        <linearGradient id="frdocRingMain" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#0EA5E9" />
                        </linearGradient>
                      </defs>
                      {concentricRings.map((ring) => {
                        const circ = 2 * Math.PI * ring.r;
                        const dashOffset = circ * (1 - ring.pct / 100);
                        return (
                          <g key={ring.label}>
                            <circle
                              cx="42"
                              cy="42"
                              r={ring.r}
                              fill="none"
                              stroke={ring.track}
                              strokeWidth="5.2"
                            />
                            <circle
                              cx="42"
                              cy="42"
                              r={ring.r}
                              fill="none"
                              stroke={ring.stroke}
                              strokeWidth="5.2"
                              strokeLinecap="round"
                              strokeDasharray={circ}
                              strokeDashoffset={dashOffset}
                            />
                          </g>
                        );
                      })}
                    </svg>

                    <div className="grid flex-1 grid-cols-1 gap-1.5 text-[10.5px]">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
                          <Droplets className="h-3 w-3 text-sky-500" aria-hidden="true" />
                          Hidratação
                        </span>
                        <span className="font-mono font-bold text-sky-600">92%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
                          <Utensils className="h-3 w-3 text-violet-500" aria-hidden="true" />
                          Dieta
                        </span>
                        <span className="font-mono font-bold text-violet-600">86%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
                          <Flame className="h-3 w-3 text-orange-500" aria-hidden="true" />
                          Treino
                        </span>
                        <span className="font-mono font-bold text-orange-600">78%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glicemia Hoje + Mini-Curva Colorida */}
                <div
                  className={`rounded-2xl border p-3 transition-colors duration-200 ${
                    isPeak
                      ? "border-rose-200 bg-rose-50/75"
                      : "border-emerald-200/80 bg-emerald-50/45"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-slate-700">Glicemia hoje</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                        isPeak
                          ? "bg-rose-100 text-rose-700"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {dayData.badgeLabel}
                    </span>
                  </div>

                  <div className="mt-1.5 flex items-baseline justify-between">
                    <p
                      className={`font-mono text-2xl font-extrabold tracking-tight ${
                        isPeak ? "text-rose-600" : "text-emerald-700"
                      }`}
                    >
                      {dayData.latestMgDl}{" "}
                      <span className="text-xs font-medium text-slate-500">mg/dL</span>
                    </p>
                    <span className="font-mono text-[10px] text-slate-500">
                      {dayData.latestTime}
                    </span>
                  </div>

                  <svg viewBox="0 0 220 42" className="mt-1.5 h-10 w-full" aria-hidden="true">
                    <defs>
                      <linearGradient id="frdocMiniMobile" x1="0" y1="6" x2="0" y2="36" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#F43F5E" />
                        <stop offset="48%" stopColor="#F59E0B" />
                        <stop offset="72%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                      </linearGradient>
                    </defs>
                    <rect x="4" y="16" width="212" height="18" rx="3" fill="#10B981" fillOpacity="0.1" />
                    <path
                      d={dayData.miniCurvePath}
                      fill="none"
                      stroke="url(#frdocMiniMobile)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                    />
                    <circle
                      cx={isPeak ? 146 : 214}
                      cy={isPeak ? 9 : 24}
                      r="4"
                      fill="#FFFFFF"
                      stroke={isPeak ? "#F43F5E" : "#10B981"}
                      strokeWidth="2.2"
                    />
                  </svg>

                  <p className="mt-1 text-[11px] text-slate-600">{dayData.mobileNote}</p>
                </div>

                {/* Próxima Refeição */}
                <div className="rounded-2xl border border-slate-200/80 bg-white p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-900">
                      Lanche · 16h00
                    </span>
                    <span className="rounded-md bg-violet-50 px-1.5 py-0.5 text-[10px] font-bold text-violet-700">
                      Troca fácil
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-600">
                    Iogurte natural + chia + morangos
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1 font-mono text-[9px] font-bold">
                    <span className="rounded bg-amber-50 px-1.5 py-0.5 text-amber-700">C 18g</span>
                    <span className="rounded bg-violet-50 px-1.5 py-0.5 text-violet-700">P 14g</span>
                    <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-emerald-700">G 6g</span>
                    <span className="rounded bg-sky-50 px-1.5 py-0.5 text-sky-700">F 5g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
