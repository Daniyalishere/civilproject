"use client"

import { HeroSection } from "@/components/home/hero-section"
import { WorkTypesSection } from "@/components/home/work-types-section"
import { PortfolioPreviewSection } from "@/components/home/portfolio-preview-section"

export default function Page() {
  return (
    <>
      <HeroSection />
      <WorkTypesSection />
      <PortfolioPreviewSection />
    </>
  )
}
