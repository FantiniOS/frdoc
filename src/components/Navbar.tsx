"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { getWhatsAppUrl } from "@/config/site";

const NAV_LINKS = [
  { label: "O Ecossistema", href: "#ecossistema" },
  { label: "Na Prática", href: "#na-pratica" },
  { label: "Privacidade", href: "#privacidade" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          aria-label="FRdoc — Página inicial"
        >
          <BrandMark />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-100/80 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Ação Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-all duration-150 hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          >
            <span>Agendar Demonstração</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Botão Menu Mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Painel Mobile */}
      {mobileOpen ? (
        <div
          id="mobile-nav-panel"
          className="border-t border-slate-200/80 bg-white/95 backdrop-blur-md md:hidden"
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Navegação mobile"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 border-t border-slate-200/80 pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:from-emerald-700 hover:to-teal-700"
              >
                <span>Agendar Demonstração</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
