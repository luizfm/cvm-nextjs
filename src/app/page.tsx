"use client";

import CompanyDataImpactSection from "@/components/company-data-impact-section";
import { HelpSection } from "@/components/help-section";
import HeroSection from "@/components/hero-section";
import MissionVisionValuesSection from "@/components/mission-vision-values-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionVisionValuesSection />
      <CompanyDataImpactSection />
      <HelpSection />
    </>
  );
}
