import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/config/site";

export function FinalCta() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="relative bg-[#F8FAFC] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white p-8 shadow-clinical-lg sm:p-14 lg:p-16">
          <div
            className="bg-clinical-grid-fine pointer-events-none absolute inset-0 opacity-55"
            aria-hidden="true"
          />
          <div
            className="bg-telemetry-halo pointer-events-none absolute inset-0 opacity-75"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-[2.85rem] lg:leading-[1.08]">
              Encante seus pacientes desde a{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                primeira consulta.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Agende uma demonstração rápida de 15 minutos e veja o FRdoc ao vivo com o nome da sua clínica.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:from-emerald-700 hover:via-teal-700 hover:to-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 sm:w-auto"
              >
                <span>Agendar Demonstração no WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
                  "Demonstração do FRdoc"
                )}`}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                <Mail className="h-4 w-4 text-sky-600" aria-hidden="true" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
