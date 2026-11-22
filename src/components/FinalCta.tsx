import React from "react";
import { ArrowUpRight, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/config/site";

export function FinalCta() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Card Arquitetônico Claro com Detalhe Multicolorido (Esmeralda/Ciano/Índigo) */}
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-300/80 bg-[#F8FAFC] p-8 shadow-clinical-lg sm:p-12 lg:p-16">
          <div
            className="bg-clinical-grid-fine pointer-events-none absolute inset-0 opacity-65"
            aria-hidden="true"
          />
          <div
            className="bg-telemetry-halo pointer-events-none absolute inset-0 opacity-85"
            aria-hidden="true"
          />

          {/* Filete superior de precisão em gradiente esmeralda -> ciano -> índigo */}
          <div
            className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-wider text-slate-700 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
              <span>DEMONSTRAÇÃO AO VIVO COM A MARCA DA SUA CLÍNICA</span>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-[2.95rem] lg:leading-[1.06]">
              Veja sua clínica operar{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                em outro nível.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Em uma apresentação exclusiva de 30 minutos, mostramos o Painel Web, o Aplicativo do Paciente e a arquitetura dedicada simulados para a realidade da sua clínica — sem compromisso e direto com quem constrói a tecnologia.
            </p>

            {/* Botões de Ação */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:from-emerald-700 hover:via-teal-700 hover:to-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 sm:w-auto"
              >
                <span>Agendar Demonstração Personalizada</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
                  "Demonstração Exclusiva — Ecossistema FRdoc"
                )}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-900 shadow-2xs transition-all duration-150 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 sm:w-auto"
              >
                <Mail className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>

            {/* Garantias operacionais */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-slate-200/90 pt-6 font-mono text-[11px] font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                Instância 100% exclusiva
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
                App &amp; Web White-Label
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
                Implantação chave-na-mão
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
