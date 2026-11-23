"use client";

import React, { useEffect } from "react";
import { Lock, Maximize2, X } from "lucide-react";

function isInteractiveTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(target.closest("button, a, input, select, textarea, [data-interactive='true']"));
}

interface BrowserFrameProps {
  url: string;
  title?: string;
  children: React.ReactNode;
  onExpand?: () => void;
  expandLabel?: string;
  className?: string;
}

export function BrowserFrame({
  url,
  title,
  children,
  onExpand,
  expandLabel = "Ampliar tela",
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-clinical-lg ${className}`}
    >
      {/* Barra superior do navegador */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 bg-slate-50/95 px-3.5 py-2">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>

        <div className="flex min-w-0 items-center gap-1.5 rounded-lg border border-slate-200/90 bg-white px-2.5 py-0.5 font-mono text-[10.5px] text-slate-600 shadow-2xs">
          <Lock className="h-2.5 w-2.5 shrink-0 text-emerald-600" aria-hidden="true" />
          <span className="truncate font-semibold text-slate-800">{url}</span>
        </div>

        <div className="flex items-center gap-1.5">
          {onExpand ? (
            <button
              type="button"
              onClick={onExpand}
              aria-label={expandLabel}
              className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-semibold text-slate-600 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            >
              <Maximize2 className="h-3 w-3" aria-hidden="true" />
              <span className="hidden sm:inline">Ampliar</span>
            </button>
          ) : title ? (
            <span className="hidden text-[10px] font-semibold text-slate-500 sm:inline">
              {title}
            </span>
          ) : (
            <span className="w-10" aria-hidden="true" />
          )}
        </div>
      </div>

      {/* Área clicável para ampliação (preserva botões internos interativos) */}
      <div
        onClick={
          onExpand
            ? (e) => {
                if (isInteractiveTarget(e.target)) return;
                onExpand();
              }
            : undefined
        }
        className={onExpand ? "cursor-zoom-in" : undefined}
      >
        {children}
      </div>
    </div>
  );
}

interface SmartphoneFrameProps {
  children: React.ReactNode;
  onExpand?: () => void;
  expandLabel?: string;
  className?: string;
}

export function SmartphoneFrame({
  children,
  onExpand,
  expandLabel = "Ampliar tela do aplicativo",
  className = "",
}: SmartphoneFrameProps) {
  return (
    <div
      className={`group relative rounded-[2.2rem] border border-slate-300/90 bg-white p-2 shadow-clinical-lg ring-4 ring-slate-100/80 ${className}`}
    >
      <div
        onClick={
          onExpand
            ? (e) => {
                if (isInteractiveTarget(e.target)) return;
                onExpand();
              }
            : undefined
        }
        className={`relative overflow-hidden rounded-[1.7rem] border border-slate-200/90 bg-[#F8FAFC] ${
          onExpand ? "cursor-zoom-in" : ""
        }`}
      >
        {/* Barra de status discreta do smartphone */}
        <div className="flex items-center justify-between bg-[#0f172a] px-4 pt-2 pb-1 font-mono text-[9.5px] font-semibold text-slate-300">
          <span>14:18</span>
          <div className="h-3 w-14 rounded-full bg-slate-800" aria-hidden="true" />
          <span>94%</span>
        </div>

        {children}
      </div>

      {onExpand ? (
        <div className="mt-1.5 flex justify-center pb-0.5">
          <button
            type="button"
            onClick={onExpand}
            aria-label={expandLabel}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-[10px] font-semibold text-slate-600 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            <Maximize2 className="h-2.5 w-2.5 text-emerald-600" aria-hidden="true" />
            <span>Ampliar tela</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}

interface ScreenZoomModalProps {
  isOpen: boolean;
  title: string;
  subtitle?: string;
  mode: "desktop" | "mobile";
  onClose: () => void;
  children: React.ReactNode;
}

export function ScreenZoomModal({
  isOpen,
  title,
  subtitle,
  mode,
  onClose,
  children,
}: ScreenZoomModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-3 backdrop-blur-xs sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className={`relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-[#F8FAFC] shadow-2xl ${
          mode === "desktop" ? "max-w-6xl" : "max-w-md"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-white px-5 py-3.5">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-slate-900 sm:text-base">
              {title}
            </h3>
            {subtitle ? (
              <p className="truncate text-xs text-slate-500">{subtitle}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar ampliação"
            className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 sm:p-6">
          {mode === "mobile" ? (
            <div className="mx-auto max-w-[340px]">{children}</div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}
