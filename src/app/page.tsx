import CompanyDataImpactSection from "@/components/home/company-data-impact-section";
import { HelpSection } from "@/components/home/help-section";
import HeroSection from "@/components/home/hero-section";
import MissionVisionValuesSection from "@/components/home/mission-vision-values-section";
import NewsSection from "@/components/home/news-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CVM | Home",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionVisionValuesSection />
      <CompanyDataImpactSection />
      <HelpSection />
      <NewsSection />
    </>
  );
}
