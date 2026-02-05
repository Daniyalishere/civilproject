"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const categories = [
  {
    title: "Bridges & Flyovers",
    count: "45+ Projects",
    image: "/images/project-bridge.jpg",
    description:
      "Cable-stayed bridges, flyovers, and overpasses designed for heavy traffic loads and seismic resistance.",
  },
  {
    title: "Schools & Colleges",
    count: "80+ Projects",
    image: "/images/project-school.jpg",
    description:
      "Modern educational institutions with smart classrooms, laboratories, and sustainable campus designs.",
  },
  {
    title: "Hospitals & Healthcare",
    count: "35+ Projects",
    image: "/images/project-hospital.jpg",
    description:
      "State-of-the-art medical facilities with advanced HVAC, sterile environments, and patient-centric layouts.",
  },
  {
    title: "Highways & Roads",
    count: "120+ Projects",
    image: "/images/project-highway.jpg",
    description:
      "Multi-lane highways, expressways, and road networks built for durability and smooth traffic flow.",
  },
  {
    title: "Commercial Buildings",
    count: "60+ Projects",
    image: "/images/project-building.jpg",
    description:
      "Office complexes, malls, and commercial hubs with modern architecture and energy-efficient systems.",
  },
  {
    title: "Irrigation & Water",
    count: "50+ Projects",
    image: "/images/project-irrigation.jpg",
    description:
      "Canal systems, dams, water treatment plants, and irrigation networks for agricultural regions.",
  },
]

const whyChooseUs = [
  {
    number: "01",
    title: "Government-Approved Contractor",
    description:
      "Registered Class-A contractor with all necessary licenses, certifications, and approvals for executing government infrastructure projects of any scale.",
  },
  {
    number: "02",
    title: "Advanced Equipment Fleet",
    description:
      "We own and maintain a fleet of 150+ heavy machinery units including cranes, excavators, pavers, and concrete batching plants for efficient execution.",
  },
  {
    number: "03",
    title: "In-House Engineering Team",
    description:
      "Our team of 50+ licensed engineers handle design, structural analysis, and project management entirely in-house, ensuring quality control at every stage.",
  },
  {
    number: "04",
    title: "Proven Track Record",
    description:
      "500+ successfully completed projects across 12 states with zero major structural defects. Our reputation is built on results, not promises.",
  },
  {
    number: "05",
    title: "Comprehensive Warranties",
    description:
      "Every project comes with a comprehensive structural warranty and post-completion maintenance support, giving you long-term peace of mind.",
  },
  {
    number: "06",
    title: "Sustainable Practices",
    description:
      "We integrate green construction methods, recycled materials, and energy-efficient designs to minimize environmental impact without compromising strength.",
  },
]

function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[0]
  index: number
}) {
  const { ref, isVisible } = useAnimateOnScroll(0.1)

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-lg opacity-0",
        isVisible && "animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <span className="mb-1 text-xs font-semibold text-primary">
            {category.count}
          </span>
          <h3 className="mb-2 text-xl font-bold text-secondary-foreground">
            {category.title}
          </h3>
          <p className="text-sm leading-relaxed text-secondary-foreground/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {category.description}
          </p>
        </div>
      </div>
    </div>
  )
}

function WhyChooseCard({
  item,
  index,
}: {
  item: (typeof whyChooseUs)[0]
  index: number
}) {
  const { ref, isVisible } = useAnimateOnScroll(0.1)

  return (
    <div
      ref={ref}
      className={cn(
        "flex gap-6 rounded-lg border border-border bg-card p-8 opacity-0 transition-shadow duration-300 hover:shadow-lg hover:border-primary/30",
        isVisible && "animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span className="text-4xl font-bold text-primary/20">{item.number}</span>
      <div>
        <h3 className="mb-2 text-lg font-bold text-card-foreground">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex items-center justify-center bg-secondary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Portfolio
          </span>
          <h1 className="font-serif text-4xl font-bold text-secondary-foreground text-balance md:text-5xl lg:text-6xl">
            Our Work Speaks <br />
            <span className="text-primary">For Itself</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/60">
            Explore the diverse range of infrastructure projects we have
            delivered across India, from national highways to community
            healthcare centers.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Work Categories"
            title="What We Build"
            description="Our expertise spans across all major infrastructure sectors, delivering projects that transform communities and drive economic growth."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => (
              <CategoryCard
                key={category.title}
                category={category}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Why Choose Us"
            title="The Danish Advantage"
            description="Here is why leading government agencies and private enterprises trust us with their most critical infrastructure projects."
            light
          />
          <div className="grid gap-6 md:grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <WhyChooseCard key={item.number} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
