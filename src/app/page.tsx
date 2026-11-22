import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TransformationCompare } from "@/components/TransformationCompare";
import { EcosystemExplorer } from "@/components/EcosystemExplorer";
import { ArchitectureBento } from "@/components/ArchitectureBento";
import { DeploymentTimeline } from "@/components/DeploymentTimeline";
import { ExecutiveFaq } from "@/components/ExecutiveFaq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TransformationCompare />
        <EcosystemExplorer />
        <ArchitectureBento />
        <DeploymentTimeline />
        <ExecutiveFaq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
