"use client"

import { cn } from "@/lib/utils"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: "left" | "center"
  light?: boolean
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const { ref, isVisible } = useAnimateOnScroll(0.2)

  return (
    <div
      ref={ref}
      className={cn(
        "mb-16 opacity-0",
        isVisible && "animate-fade-in-up",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      <span
        className={cn(
          "mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em]",
          light ? "text-primary" : "text-primary"
        )}
      >
        {label}
      </span>
      <h2
        className={cn(
          "font-serif text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl",
          light ? "text-secondary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-base leading-relaxed",
            light
              ? "text-secondary-foreground/60"
              : "text-muted-foreground",
            align === "left" && "mx-0"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
