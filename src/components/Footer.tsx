import React from "react";
import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { getWhatsAppUrl, siteConfig } from "@/config/site";

export function Footer() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2">
            <Link
              href="/"
              className="inline-flex rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              aria-label="FRdoc — Início"
            >
              <BrandMark size="sm" showStatus={false} />
            </Link>
            <p className="text-xs text-slate-500">
              © 2026 {siteConfig.brandName} — {siteConfig.brandTagline}. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-mono transition-colors hover:text-emerald-700"
            >
              {siteConfig.contactEmail}
            </a>
            <span className="hidden text-slate-300 sm:inline" aria-hidden="true">
              ·
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-emerald-700"
            >
              WhatsApp Comercial
            </a>
            <span className="hidden text-slate-300 sm:inline" aria-hidden="true">
              ·
            </span>
            <Link
              href="/privacidade"
              className="transition-colors hover:text-emerald-700"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
