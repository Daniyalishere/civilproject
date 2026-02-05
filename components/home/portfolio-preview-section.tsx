"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const projects = [
  {
    title: "National Highway Extension",
    category: "Highway",
    image: "/images/project-highway.jpg",
  },
  {
    title: "City General Hospital",
    category: "Healthcare",
    image: "/images/project-hospital.jpg",
  },
  {
    title: "Regional Solar Farm",
    category: "Solar Energy",
    image: "/images/project-solar.jpg",
  },
  {
    title: "River Bridge Construction",
    category: "Bridge",
    image: "/images/project-bridge.jpg",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const { ref, isVisible } = useAnimateOnScroll(0.1)

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-lg opacity-0",
        isVisible && "animate-scale-in"
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-secondary/0 transition-colors duration-300 group-hover:bg-secondary/60" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
            {project.category}
          </span>
          <h3 className="text-lg font-bold text-secondary-foreground">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export function PortfolioPreviewSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Our Portfolio"
          title="Featured Projects"
          description="A selection of landmark projects that showcase our capabilities in delivering infrastructure of national importance."
          light
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3.5 text-sm font-semibold text-secondary transition-all hover:brightness-110"
          >
            View All Projects
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
