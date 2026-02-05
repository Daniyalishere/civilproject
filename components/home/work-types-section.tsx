"use client"

import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const workTypes = [
  {
    title: "Civil Construction",
    description:
      "Buildings, schools, hospitals, and government facilities built to the highest standards of structural integrity and design.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
        <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
      </svg>
    ),
  },
  {
    title: "Highway & Bridges",
    description:
      "Multi-lane highways, flyovers, and bridges engineered for safety, durability, and efficient traffic flow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
        <path d="M4 21V10l4-6h8l4 6v11M4 10h16M8 4v6M16 4v6M12 10v11M8 14h2M14 14h2M8 18h2M14 18h2" />
      </svg>
    ),
  },
  {
    title: "Solar Installations",
    description:
      "Large-scale solar power installations and renewable energy infrastructure for a sustainable future.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
        <path d="M12 3v1M18.36 5.64l-.71.71M21 12h-1M18.36 18.36l-.71-.71M12 21v-1M5.64 18.36l.71-.71M3 12h1M5.64 5.64l.71.71" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Irrigation Systems",
    description:
      "Canal systems, dams, and water management infrastructure designed for agricultural and municipal needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: "Government Projects",
    description:
      "Public sector infrastructure including administrative buildings, community centers, and civic facilities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
        <path d="M3 21h18M3 10h18M12 3l9 7H3l9-7zM5 10v11M19 10v11M9 14v3M15 14v3" />
      </svg>
    ),
  },
  {
    title: "Industrial Works",
    description:
      "Factories, warehouses, and industrial complexes built with efficiency and safety as the core priorities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
        <path d="M2 20h20M4 20V10l4-2v4l4-2v4l4-2v4l4-2v4" />
      </svg>
    ),
  },
]

function WorkTypeCard({
  type,
  index,
}: {
  type: (typeof workTypes)[0]
  index: number
}) {
  const { ref, isVisible } = useAnimateOnScroll(0.1)

  return (
    <div
      ref={ref}
      className={cn(
        "group rounded-lg border border-border bg-card p-8 opacity-0 transition-shadow duration-300 hover:shadow-lg hover:border-primary/30",
        isVisible && "animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-5 inline-flex rounded bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-secondary">
        {type.icon}
      </div>
      <h3 className="mb-3 text-lg font-bold text-card-foreground">
        {type.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {type.description}
      </p>
    </div>
  )
}

export function WorkTypesSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="What We Do"
          title="Our Expertise"
          description="We deliver comprehensive infrastructure solutions across multiple sectors, combining technical excellence with innovative engineering."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workTypes.map((type, i) => (
            <WorkTypeCard key={type.title} type={type} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
