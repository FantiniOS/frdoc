import React from "react";
import { ArrowRight, ArrowUpRight, ShieldCheck, Layers, Server } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { WhiteLabelSimulator } from "./WhiteLabelSimulator";

export function HeroSection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="experiencia"
      className="relative scroll-mt-20 overflow-x-clip border-b border-slate-200/80 bg-[#F8FAFC] pt-12 pb-16 sm:pt-16 sm:pb-24"
    >
      {/* Micro-grid arquitetônico de telemetria + halo suave multicolorido */}
      <div
        className="bg-clinical-grid clinical-grid-mask pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="bg-telemetry-halo pointer-events-none absolute inset-x-0 top-0 h-[620px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Editorial de Alto Impacto */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.08em] text-slate-700 shadow-2xs backdrop-blur-sm">
            <span className="inline-flex items-center gap-1" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            <span>FRDOC 2.0 • ECOSSISTEMA CLÍNICO DEDICADO</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[3.6rem] lg:leading-[1.05]">
            A tecnologia que faz seus pacientes sentirem o cuidado da sua clínica{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
              todos os dias.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            O FRdoc une um{" "}
            <strong className="font-semibold text-slate-900">
              Painel Web de telemetria metabólica viva
            </strong>{" "}
            a um{" "}
            <strong className="font-semibold text-slate-900">
              Aplicativo Mobile com a marca exclusiva da sua clínica
            </strong>
            , rodando em servidor e banco de dados 100% dedicados. Mais adesão fora do consultório, consultas mais resolutivas e prestígio imediato para Endocrinologia, Nutrologia e Saúde Integrativa.
          </p>

          {/* CTAs Primário e Secundário */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 sm:w-auto"
            >
              <span>Solicitar Demonstração Exclusiva</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#simulador-ao-vivo"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-2xs transition-all duration-150 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 sm:w-auto"
            >
              <span>Ver o Ecossistema em Ação</span>
              <ArrowRight className="h-4 w-4 text-sky-600" aria-hidden="true" />
            </a>
          </div>

          {/* 3 Pílulas Técnicas de Credibilidade */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-white/90 px-3.5 py-1.5 font-mono text-[11px] font-semibold text-slate-700 shadow-2xs">
              <Layers className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
              Marca 100% da sua Clínica
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-white/90 px-3.5 py-1.5 font-mono text-[11px] font-semibold text-slate-700 shadow-2xs">
              <Server className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
              Servidor &amp; Banco Exclusivos
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1.5 font-mono text-[11px] font-semibold text-slate-700 shadow-2xs">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
              Conformidade LGPD &amp; CFM
            </span>
          </div>
        </div>

        {/* Peça Central de Encantamento: Simulador White-Label & Telemetria Multicolorida */}
        <WhiteLabelSimulator />
      </div>
    </section>
  );
}
