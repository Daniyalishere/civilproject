"use client"

import React from "react"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const values = [
  {
    title: "Work Quality",
    description:
      "Every project undergoes rigorous quality checks at each phase. We use premium materials and follow the strictest civil engineering standards to ensure structural integrity and longevity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Honest Services",
    description:
      "Transparency is the foundation of our business. From cost estimation to project timelines, we provide honest, accurate information at every step so you can trust the process.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
        <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    ),
  },
  {
    title: "On-Time Delivery",
    description:
      "We understand the importance of project timelines in government and commercial contracts. Our project management ensures consistent on-time completion with zero compromise on quality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Safety First",
    description:
      "Zero accidents is not just a goal, it's our standard. We maintain the highest safety protocols for all workers and stakeholders on every site, following OSHA and national safety guidelines.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

const visionMission = [
  {
    label: "Our Vision",
    text: "To be the most trusted name in civil engineering and infrastructure development, creating landmarks that stand the test of time and serve communities for generations.",
  },
  {
    label: "Our Mission",
    text: "To deliver superior infrastructure solutions through innovative engineering, sustainable practices, and an unwavering commitment to quality, safety, and client satisfaction.",
  },
]

function AnimatedCard({
  children,
  index,
  className,
}: {
  children: React.ReactNode
  index: number
  className?: string
}) {
  const { ref, isVisible } = useAnimateOnScroll(0.1)

  return (
    <div
      ref={ref}
      className={cn("opacity-0", isVisible && "animate-fade-in-up", className)}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {children}
    </div>
  )
}

export default function AboutPage() {
  const { ref: teamRef, isVisible: teamVisible } = useAnimateOnScroll(0.1)
  const { ref: ceoRef, isVisible: ceoVisible } = useAnimateOnScroll(0.1)

  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex items-center justify-center bg-secondary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            About Us
          </span>
          <h1 className="font-serif text-4xl font-bold text-secondary-foreground text-balance md:text-5xl lg:text-6xl">
            Engineering Excellence <br />
            <span className="text-primary">Since 2009</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/60">
            A dedicated team of civil engineers, project managers, and
            construction specialists building India&apos;s infrastructure
            with precision and integrity.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              ref={teamRef}
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-lg opacity-0",
                teamVisible && "animate-slide-in-left"
              )}
            >
              <Image
                src="/images/team-construction.jpg"
                alt="Our team reviewing blueprints at a construction site"
                fill
                className="object-cover"
              />
            </div>
            <div
              className={cn(
                "opacity-0",
                teamVisible && "animate-slide-in-right"
              )}
            >
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Our Team
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                A Team Built on Expertise and Trust
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Our team of over 200 professionals includes licensed civil
                engineers, structural specialists, environmental consultants,
                and experienced construction managers. Every member brings
                years of field experience on government and private-sector
                projects.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We guarantee our works through a multi-tier quality assurance
                process: independent structural audits, real-time progress
                monitoring, and post-completion assessments. Our projects
                carry a comprehensive warranty that reflects our confidence
                in every structure we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Our Purpose"
            title="Vision & Mission"
            light
          />
          <div className="grid gap-8 md:grid-cols-2">
            {visionMission.map((item, i) => (
              <AnimatedCard key={item.label} index={i}>
                <div className="rounded-lg border border-secondary-foreground/10 bg-secondary p-10">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-primary">
                    {item.label}
                  </span>
                  <p className="text-lg leading-relaxed text-secondary-foreground/80">
                    {item.text}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Why Trust Us"
            title="Our Core Values"
            description="These principles guide every project we undertake, from initial planning to final handover."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, i) => (
              <AnimatedCard key={value.title} index={i}>
                <div className="flex gap-5 rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-card-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div
            ref={ceoRef}
            className={cn(
              "grid items-center gap-12 lg:grid-cols-5 opacity-0",
              ceoVisible && "animate-fade-in-up"
            )}
          >
            <div className="lg:col-span-2">
              <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-lg">
                <Image
                  src="/images/ceo-portrait.jpg"
                  alt="Portrait of our CEO at a construction site"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Message from the CEO
              </span>
              <h2 className="font-serif text-3xl font-bold text-secondary-foreground md:text-4xl">
                &ldquo;We Don&apos;t Just Build Structures — We Build
                Trust&rdquo;
              </h2>
              <blockquote className="mt-6 border-l-2 border-primary/40 pl-6">
                <p className="text-lg leading-relaxed text-secondary-foreground/70">
                  For over 15 years, our commitment has remained unchanged:
                  deliver infrastructure that communities can rely on for
                  generations. Every highway we pave, every hospital we
                  construct, and every bridge we engineer carries our
                  promise of excellence.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-secondary-foreground/70">
                  I personally oversee our quality assurance framework
                  because I believe that the leader&apos;s involvement sets the
                  standard for the entire organization. When you choose
                  Apex Infra Group, you choose a partner who stakes their
                  reputation on every project.
                </p>
              </blockquote>
              <div className="mt-8">
                <p className="font-serif text-xl font-bold text-secondary-foreground">
                  Rajesh Kumar Sharma
                </p>
                <p className="text-sm text-primary">
                  Founder & CEO, Apex Infra Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
