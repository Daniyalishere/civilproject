"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "12", label: "States Covered" },
  { value: "100%", label: "Client Satisfaction" },
]

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-construction.jpg"
          alt="Highway interchange under construction at golden hour"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/40 to-secondary" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <span
            className={`mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            Premier Infrastructure Partner
          </span>
          <h1
            className={`font-serif text-4xl font-bold leading-tight text-secondary-foreground text-balance md:text-6xl lg:text-7xl transition-all duration-700 delay-200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            Building{" "}
            <span className="text-primary">Tomorrow&apos;s</span>{" "}
            Infrastructure, Today
          </h1>
          <p
            className={`mt-6 max-w-xl text-lg leading-relaxed text-secondary-foreground/70 transition-all duration-700 delay-[400ms] ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            From highways to hospitals, bridges to schools — we deliver
            world-class civil engineering solutions with precision, quality,
            and unwavering commitment.
          </p>
          <div
            className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-[600ms] ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3.5 text-sm font-semibold text-secondary transition-all hover:brightness-110"
            >
              View Our Work
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
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded border border-secondary-foreground/20 px-8 py-3.5 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary hover:text-primary"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 transition-all duration-700 delay-[800ms] ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-primary/40 pl-4">
              <span className="text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-widest text-secondary-foreground/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
