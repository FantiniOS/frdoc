"use client";

import React, { useState } from "react";
import {
  Activity,
  Apple,
  Building2,
  CalendarClock,
  LineChart,
  Maximize2,
  Monitor,
  Repeat,
  Smartphone,
  Syringe,
  TrendingUp,
} from "lucide-react";
import { BrowserFrame, ScreenZoomModal, SmartphoneFrame } from "./screens/DeviceFrames";
import {
  WebDietPrescriptionScreen,
  WebGlycemicMapScreen,
  WebManagementScreen,
  WebPatientOverviewScreen,
} from "./screens/WebScreens";
import {
  AppClinicBrandScreen,
  AppDietScreen,
  AppEvolutionScreen,
  AppGlycemiaScreen,
} from "./screens/AppScreens";

type SurfaceMode = "web" | "app";
type WebModuleId = "visao-paciente" | "mapa-glicemia" | "dieta-taco" | "gestao-clinica";
type AppModuleId = "plano-bolso" | "registro-glicemia" | "rotina-evolucao" | "marca-clinica";

interface ModuleItem<T extends string> {
  id: T;
  title: string;
  subtitle: string;
  url?: string;
  iconBg: string;
  activeBorder: string;
  railColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const WEB_MODULES: readonly ModuleItem<WebModuleId>[] = [
  {
    id: "visao-paciente",
    title: "Visão Completa do Paciente",
    subtitle:
      "Resumo clínico, termômetro de constância e evolução organizados antes da consulta.",
    url: "app.institutometabo.com.br/pacientes",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    activeBorder: "border-emerald-300",
    railColor: "bg-gradient-to-b from-emerald-500 to-sky-500",
    icon: Activity,
  },
  {
    id: "mapa-glicemia",
    title: "Mapa de Glicemia & Insulina",
    subtitle:
      "Leituras por horário, dose basal diária e relatório em PDF pronto para entrega.",
    url: "app.institutometabo.com.br/pacientes/mapa-glicemico",
    iconBg: "bg-rose-50 text-rose-600 border-rose-200/80",
    activeBorder: "border-rose-300",
    railColor: "bg-gradient-to-b from-rose-500 to-indigo-500",
    icon: Syringe,
  },
  {
    id: "dieta-taco",
    title: "Prescrição de Dietas (Tabela TACO)",
    subtitle:
      "Refeições com medidas caseiras, biblioteca de modelos e trocas rápidas.",
    url: "app.institutometabo.com.br/pacientes/dieta",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200/80",
    activeBorder: "border-amber-300",
    railColor: "bg-gradient-to-b from-amber-500 to-emerald-500",
    icon: Apple,
  },
  {
    id: "gestao-clinica",
    title: "Agenda, Pacotes e Equipe",
    subtitle:
      "Consultas, ciclos de acompanhamento e acesso separado para diretoria, médicos e recepção.",
    url: "app.institutometabo.com.br/agenda",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    activeBorder: "border-indigo-300",
    railColor: "bg-gradient-to-b from-indigo-500 to-sky-500",
    icon: CalendarClock,
  },
];

const APP_MODULES: readonly ModuleItem<AppModuleId>[] = [
  {
    id: "plano-bolso",
    title: "Plano Alimentar no Bolso",
    subtitle:
      "Refeições claras, registro em segundos e troca de alimentos em um toque.",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    activeBorder: "border-emerald-300",
    railColor: "bg-gradient-to-b from-emerald-500 to-teal-500",
    icon: Repeat,
  },
  {
    id: "registro-glicemia",
    title: "Registro Rápido de Glicemia",
    subtitle:
      "Lançamento simples por horário que alimenta automaticamente o mapa do médico.",
    iconBg: "bg-sky-50 text-sky-600 border-sky-200/80",
    activeBorder: "border-sky-300",
    railColor: "bg-gradient-to-b from-sky-500 to-indigo-500",
    icon: LineChart,
  },
  {
    id: "rotina-evolucao",
    title: "Rotina Diária e Evolução",
    subtitle:
      "Peso, medidas, hidratação e hábitos acompanhados de forma leve no dia a dia.",
    iconBg: "bg-violet-50 text-violet-600 border-violet-200/80",
    activeBorder: "border-violet-300",
    railColor: "bg-gradient-to-b from-violet-500 to-sky-500",
    icon: TrendingUp,
  },
  {
    id: "marca-clinica",
    title: "Com a Marca da Sua Clínica",
    subtitle:
      "Nome, cores, próxima consulta e canal direto com a sua recepção.",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200/80",
    activeBorder: "border-amber-300",
    railColor: "bg-gradient-to-b from-amber-500 to-emerald-500",
    icon: Building2,
  },
];

function renderWebScreen(id: WebModuleId, compact = false) {
  switch (id) {
    case "visao-paciente":
      return <WebPatientOverviewScreen compact={compact} />;
    case "mapa-glicemia":
      return <WebGlycemicMapScreen />;
    case "dieta-taco":
      return <WebDietPrescriptionScreen />;
    case "gestao-clinica":
      return <WebManagementScreen />;
  }
}

function renderAppScreen(id: AppModuleId) {
  switch (id) {
    case "plano-bolso":
      return <AppDietScreen />;
    case "registro-glicemia":
      return <AppGlycemiaScreen />;
    case "rotina-evolucao":
      return <AppEvolutionScreen />;
    case "marca-clinica":
      return <AppClinicBrandScreen />;
  }
}

export function EcosystemExplorer() {
  const [surface, setSurface] = useState<SurfaceMode>("web");
  const [activeWebModule, setActiveWebModule] =
    useState<WebModuleId>("visao-paciente");
  const [activeAppModule, setActiveAppModule] =
    useState<AppModuleId>("plano-bolso");
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const currentWebItem =
    WEB_MODULES.find((item) => item.id === activeWebModule) ?? WEB_MODULES[0];
  const currentAppItem =
    APP_MODULES.find((item) => item.id === activeAppModule) ?? APP_MODULES[0];

  const activeTitle =
    surface === "web"
      ? `Painel Web — ${currentWebItem.title}`
      : `Aplicativo do Paciente — ${currentAppItem.title}`;

  return (
    <section
      id="na-pratica"
      className="relative scroll-mt-20 border-b border-slate-200/80 bg-[#F8FAFC] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho + Seletor Para o Médico vs Para o Paciente */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              O sistema na prática.
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              Explore as telas do painel médico e do aplicativo do paciente.
            </p>
          </div>

          <div
            className="inline-flex w-full rounded-2xl border border-slate-200/90 bg-white p-1.5 shadow-xs sm:w-auto"
            role="tablist"
            aria-label="Alternar entre painel do médico e aplicativo do paciente"
          >
            <button
              type="button"
              role="tab"
              aria-selected={surface === "web"}
              onClick={() => setSurface("web")}
              className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-150 sm:flex-none ${
                surface === "web"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs"
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
              className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-150 sm:flex-none ${
                surface === "app"
                  ? "bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              <span>Para o Paciente</span>
            </button>
          </div>
        </div>

        {/* Menu Esquerdo + Vitrine Fiel à Direita */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          {/* Coluna Esquerda: 4 Módulos Reais */}
          <div className="flex flex-col gap-3 lg:col-span-4" role="list">
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
                  className={`group relative flex w-full cursor-pointer items-start gap-3.5 rounded-2xl border p-5 text-left transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                    isActive
                      ? `${mod.activeBorder} bg-white shadow-clinical`
                      : "border-slate-200/80 bg-white/70 hover:border-slate-300 hover:bg-white"
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

          {/* Coluna Direita: Tela Fiel ao Sistema em Moldura + Zoom */}
          <div className="relative lg:col-span-8">
            <div
              className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] opacity-80"
              style={{
                background:
                  surface === "web"
                    ? "radial-gradient(ellipse 65% 55% at 25% 30%, rgba(16, 185, 129, 0.11), transparent 70%), radial-gradient(ellipse 60% 55% at 80% 70%, rgba(14, 165, 233, 0.11), transparent 70%)"
                    : "radial-gradient(ellipse 60% 60% at 50% 45%, rgba(14, 165, 233, 0.12), transparent 70%), radial-gradient(ellipse 50% 50% at 60% 70%, rgba(99, 102, 241, 0.1), transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>
                  {surface === "web"
                    ? currentWebItem.title
                    : currentAppItem.title}
                </span>
              </span>
              <button
                type="button"
                onClick={() => setIsZoomOpen(true)}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-200/90 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 shadow-2xs transition-colors hover:border-emerald-300 hover:text-emerald-800"
              >
                <Maximize2 className="h-3 w-3 text-emerald-600" aria-hidden="true" />
                <span>Ampliar tela</span>
              </button>
            </div>

            {surface === "web" ? (
              <BrowserFrame
                url={currentWebItem.url ?? "app.institutometabo.com.br"}
                onExpand={() => setIsZoomOpen(true)}
                expandLabel={`Ampliar ${currentWebItem.title}`}
              >
                {renderWebScreen(activeWebModule, true)}
              </BrowserFrame>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200/90 bg-white/85 px-4 py-8 shadow-clinical sm:py-10">
                <div className="w-full max-w-[330px]">
                  <SmartphoneFrame
                    onExpand={() => setIsZoomOpen(true)}
                    expandLabel={`Ampliar ${currentAppItem.title}`}
                  >
                    {renderAppScreen(activeAppModule)}
                  </SmartphoneFrame>
                </div>
                <p className="mt-4 text-center text-xs text-slate-500">
                  Dados fictícios de demonstração • Interaja com a tela ou clique em Ampliar
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de Ampliação em Tela Cheia */}
      <ScreenZoomModal
        isOpen={isZoomOpen}
        title={activeTitle}
        subtitle="Dados fictícios de demonstração • Instituto Metabo"
        mode={surface === "web" ? "desktop" : "mobile"}
        onClose={() => setIsZoomOpen(false)}
      >
        {surface === "web" ? (
          <BrowserFrame url={currentWebItem.url ?? "app.institutometabo.com.br"}>
            {renderWebScreen(activeWebModule, false)}
          </BrowserFrame>
        ) : (
          <SmartphoneFrame>{renderAppScreen(activeAppModule)}</SmartphoneFrame>
        )}
      </ScreenZoomModal>
    </section>
  );
}
