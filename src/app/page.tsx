import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { EcosystemDimensions } from "@/components/EcosystemDimensions";
import { EcosystemExplorer } from "@/components/EcosystemExplorer";
import { PrivacyAndOnboarding } from "@/components/PrivacyAndOnboarding";
import { ExecutiveFaq } from "@/components/ExecutiveFaq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />
      <main className="flex-1">
        {/* Bloco 1 — Hero Editorial + Telas Reais */}
        <HeroSection />
        {/* Bloco 2 — A Dimensão Completa do FRdoc */}
        <EcosystemDimensions />
        {/* Bloco 3 — O Ecossistema na Prática (Clínica Web vs. Paciente App) */}
        <EcosystemExplorer />
        {/* Bloco 4 — Privacidade e Implantação */}
        <PrivacyAndOnboarding />
        {/* Bloco 5 — Dúvidas Rápidas + CTA Final */}
        <ExecutiveFaq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
