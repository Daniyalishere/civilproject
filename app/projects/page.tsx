"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const filters = [
  "All",
  "Civil Works",
  "Highways",
  "Bridges",
  "Solar",
  "Healthcare",
  "Education",
  "Irrigation",
]

const projects = [
  {
    title: "NH-48 Highway Extension",
    category: "Highways",
    location: "Rajasthan",
    year: "2024",
    image: "/images/project-highway.jpg",
  },
  {
    title: "Yamuna River Bridge",
    category: "Bridges",
    location: "Uttar Pradesh",
    year: "2023",
    image: "/images/project-bridge.jpg",
  },
  {
    title: "District General Hospital",
    category: "Healthcare",
    location: "Madhya Pradesh",
    year: "2024",
    image: "/images/project-hospital.jpg",
  },
  {
    title: "Kendriya Vidyalaya Campus",
    category: "Education",
    location: "Gujarat",
    year: "2023",
    image: "/images/project-school.jpg",
  },
  {
    title: "50MW Solar Power Plant",
    category: "Solar",
    location: "Rajasthan",
    year: "2024",
    image: "/images/project-solar.jpg",
  },
  {
    title: "State Irrigation Canal Network",
    category: "Irrigation",
    location: "Maharashtra",
    year: "2023",
    image: "/images/project-irrigation.jpg",
  },
  {
    title: "Government Office Complex",
    category: "Civil Works",
    location: "Delhi",
    year: "2024",
    image: "/images/project-building.jpg",
  },
  {
    title: "Rural Road Connectivity Project",
    category: "Highways",
    location: "Bihar",
    year: "2022",
    image: "/images/project-highway.jpg",
  },
  {
    title: "Community Health Center",
    category: "Healthcare",
    location: "Jharkhand",
    year: "2023",
    image: "/images/project-hospital.jpg",
  },
  {
    title: "Inter-State Bridge Project",
    category: "Bridges",
    location: "West Bengal",
    year: "2024",
    image: "/images/project-bridge.jpg",
  },
  {
    title: "25MW Rooftop Solar Initiative",
    category: "Solar",
    location: "Karnataka",
    year: "2024",
    image: "/images/project-solar.jpg",
  },
  {
    title: "Model School Construction",
    category: "Education",
    location: "Tamil Nadu",
    year: "2022",
    image: "/images/project-school.jpg",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const { ref, isVisible } = useAnimateOnScroll(0.05)

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-lg opacity-0",
        isVisible && "animate-scale-in"
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <span className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
            {project.category}
          </span>
          <h3 className="text-lg font-bold text-secondary-foreground">
            {project.title}
          </h3>
          <div className="mt-2 flex items-center gap-3 text-xs text-secondary-foreground/60">
            <span className="flex items-center gap-1">
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {project.location}
            </span>
            <span>{project.year}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex items-center justify-center bg-secondary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Projects
          </span>
          <h1 className="font-serif text-4xl font-bold text-secondary-foreground text-balance md:text-5xl lg:text-6xl">
            Our Project <span className="text-primary">Gallery</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/60">
            Browse through our completed and ongoing projects across civil
            construction, solar energy, highways, bridges, and more.
          </p>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
                  activeFilter === filter
                    ? "bg-primary text-secondary"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={`${project.title}-${activeFilter}`} project={project} index={i} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
