import CompanyDataImpactSection from "@/components/home/company-data-impact-section";
import HeroSection from "@/components/home/hero-section";
import MissionVisionValuesSection from "@/components/home/mission-vision-values-section";
import NewsSection from "@/components/home/news-section";
import PartnersSection from "@/components/home/partners-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | CVM",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionVisionValuesSection />
      <CompanyDataImpactSection />
      <NewsSection />
      <PartnersSection />
    </>
  );
}
