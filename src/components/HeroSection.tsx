"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Maximize2 } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { BrowserFrame, ScreenZoomModal, SmartphoneFrame } from "./screens/DeviceFrames";
import { WebPatientOverviewScreen } from "./screens/WebScreens";
import { AppHomeScreen } from "./screens/AppScreens";

type ZoomTarget = "web" | "app" | null;

export function HeroSection() {
  const [zoomTarget, setZoomTarget] = useState<ZoomTarget>(null);
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="relative overflow-x-clip border-b border-slate-200/80 bg-[#F8FAFC] pt-14 pb-20 sm:pt-20 sm:pb-24">
      {/* Micro-grid sutil + halo colorido suave */}
      <div
        className="bg-clinical-grid clinical-grid-mask pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="bg-telemetry-halo pointer-events-none absolute inset-x-0 top-0 h-[680px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Editorial */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.06em] text-slate-700 shadow-2xs backdrop-blur-sm">
            <span className="inline-flex items-center gap-1" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            <span>FRDOC • ECOSSISTEMA CLÍNICO PARA ENDOCRINOLOGIA</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.06]">
            Endocrinologia é o corpo inteiro,{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
              todos os dias.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            O FRdoc reúne a gestão da sua clínica e a rotina metabólica completa do paciente em uma única central — do consultório ao celular.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 sm:w-auto"
            >
              <span>Agendar Demonstração</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#na-pratica"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-2xs transition-all duration-150 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 sm:w-auto"
            >
              <span>Ver na prática</span>
              <ArrowRight className="h-4 w-4 text-sky-600" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Telas Reais: Painel Web (desktop) + Aplicativo (smartphone sobreposto) */}
        <div className="relative mx-auto mt-12 max-w-6xl">
          <div
            className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10 rounded-[2.5rem] opacity-90"
            style={{
              background:
                "radial-gradient(ellipse 65% 55% at 32% 45%, rgba(16, 185, 129, 0.13), transparent 70%), radial-gradient(ellipse 55% 55% at 72% 50%, rgba(14, 165, 233, 0.12), transparent 70%), radial-gradient(ellipse 45% 45% at 55% 75%, rgba(99, 102, 241, 0.1), transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="mb-3.5 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/95 px-3.5 py-1 text-xs font-semibold text-slate-600 shadow-2xs">
              <Maximize2 className="h-3 w-3 text-emerald-600" aria-hidden="true" />
              <span>Telas fiéis ao sistema • Clique para ampliar</span>
            </span>
          </div>

          <div className="relative lg:min-h-[630px] lg:pb-12">
            <div className="lg:pr-52">
              <BrowserFrame
                url="app.institutometabo.com.br/pacientes"
                onExpand={() => setZoomTarget("web")}
                expandLabel="Ampliar tela do Painel Web da Clínica"
              >
                <WebPatientOverviewScreen compact />
              </BrowserFrame>
            </div>

            <div className="mx-auto mt-6 w-full max-w-[300px] lg:absolute lg:top-14 lg:right-0 lg:mt-0 lg:w-[292px]">
              <SmartphoneFrame
                onExpand={() => setZoomTarget("app")}
                expandLabel="Ampliar tela inicial do Aplicativo do Paciente"
              >
                <AppHomeScreen clinicName="INSTITUTO METABO" />
              </SmartphoneFrame>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Ampliação em Tela Cheia */}
      <ScreenZoomModal
        isOpen={zoomTarget !== null}
        title={
          zoomTarget === "web"
            ? "Painel Web (Clínica) — Visão Completa do Paciente"
            : "Aplicativo (Paciente) — Tela Inicial"
        }
        subtitle="Dados fictícios de demonstração • Instituto Metabo"
        mode={zoomTarget === "app" ? "mobile" : "desktop"}
        onClose={() => setZoomTarget(null)}
      >
        {zoomTarget === "web" ? (
          <BrowserFrame url="app.institutometabo.com.br/pacientes">
            <WebPatientOverviewScreen />
          </BrowserFrame>
        ) : zoomTarget === "app" ? (
          <SmartphoneFrame>
            <AppHomeScreen clinicName="INSTITUTO METABO" />
          </SmartphoneFrame>
        ) : null}
      </ScreenZoomModal>
    </section>
  );
}
