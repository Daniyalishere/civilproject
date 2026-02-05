"use client"

import React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"

const contactInfo = [
  {
    label: "Call Us",
    value: "+91 98765 43210",
    secondaryValue: "+91 11 2345 6789",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: "info@apexinfra.com",
    secondaryValue: "projects@apexinfra.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Our Location",
    value: "Sector 12, Infrastructure Hub",
    secondaryValue: "New Delhi, India 110001",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "Work Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
    secondaryValue: "Sunday: Closed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

function ContactCard({
  info,
  index,
}: {
  info: (typeof contactInfo)[0]
  index: number
}) {
  const { ref, isVisible } = useAnimateOnScroll(0.1)

  return (
    <div
      ref={ref}
      className={cn(
        "flex gap-5 rounded-lg border border-border bg-card p-6 opacity-0 transition-shadow hover:shadow-lg hover:border-primary/30",
        isVisible && "animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
        {info.icon}
      </div>
      <div>
        <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">
          {info.label}
        </h3>
        <p className="text-base font-medium text-card-foreground">
          {info.value}
        </p>
        <p className="text-sm text-muted-foreground">{info.secondaryValue}</p>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    projectType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const { ref: formRef, isVisible: formVisible } = useAnimateOnScroll(0.1)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      projectType: "",
      message: "",
    })
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex items-center justify-center bg-secondary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Contact Us
          </span>
          <h1 className="font-serif text-4xl font-bold text-secondary-foreground text-balance md:text-5xl lg:text-6xl">
            Let&apos;s Build <span className="text-primary">Together</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/60">
            Ready to start your next infrastructure project? Reach out to
            us and schedule a consultation with our engineering team.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, i) => (
              <ContactCard key={info.label} info={info} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form + Map */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div
              ref={formRef}
              className={cn(
                "opacity-0",
                formVisible && "animate-slide-in-left"
              )}
            >
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Schedule Your Appointment
              </span>
              <h2 className="mb-2 font-serif text-3xl font-bold text-secondary-foreground md:text-4xl">
                Get In Touch
              </h2>
              <p className="mb-8 text-secondary-foreground/60">
                Fill out the form below and our team will get back to you
                within 24 hours.
              </p>

              {submitted && (
                <div className="mb-6 rounded-lg border border-primary/30 bg-primary/10 p-4 text-sm font-medium text-primary">
                  Thank you for your inquiry! Our team will contact you
                  within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-secondary-foreground/60"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded border border-secondary-foreground/10 bg-secondary px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-secondary-foreground/60"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded border border-secondary-foreground/10 bg-secondary px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-secondary-foreground/60"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full rounded border border-secondary-foreground/10 bg-secondary px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-secondary-foreground/60"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={formState.projectType}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          projectType: e.target.value,
                        })
                      }
                      className="w-full rounded border border-secondary-foreground/10 bg-secondary px-4 py-3 text-sm text-secondary-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select project type</option>
                      <option value="civil">Civil Construction</option>
                      <option value="highway">Highway & Roads</option>
                      <option value="bridge">Bridge & Flyover</option>
                      <option value="solar">Solar Installation</option>
                      <option value="irrigation">Irrigation</option>
                      <option value="healthcare">Healthcare Facility</option>
                      <option value="education">Educational Institute</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-secondary-foreground/60"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full rounded border border-secondary-foreground/10 bg-secondary px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-secondary-foreground/60"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full resize-none rounded border border-secondary-foreground/10 bg-secondary px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-fit items-center gap-2 rounded bg-primary px-8 py-3.5 text-sm font-semibold text-secondary transition-all hover:brightness-110"
                >
                  Send Message
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
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Map / Info */}
            <div
              className={cn(
                "flex flex-col justify-center opacity-0",
                formVisible && "animate-slide-in-right"
              )}
            >
              <div className="overflow-hidden rounded-lg bg-secondary-foreground/5">
                <div className="aspect-video w-full bg-secondary-foreground/10 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.676855645615!2d67.12781031127192!3d24.909001843220764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339c83dbd998f%3A0x547ebb60a4cd7413!2sBait%20ul%20Hina%20Block%20A!5e0!3m2!1sen!2s!4v1770331051910!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "300px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our office location in New Delhi"
                  />
                </div>
              </div>
              <div className="mt-8 rounded-lg border border-secondary-foreground/10 p-8">
                <h3 className="mb-4 font-serif text-xl font-bold text-secondary-foreground">
                  Office Hours & Availability
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex items-center justify-between border-b border-secondary-foreground/5 pb-3"
                    >
                      <span className="text-sm font-medium text-secondary-foreground">
                        {schedule.day}
                      </span>
                      <span
                        className={cn(
                          "text-sm",
                          schedule.hours === "Closed"
                            ? "text-destructive"
                            : "text-primary"
                        )}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-secondary-foreground/40">
                  Site visits and emergency consultations are available
                  outside regular hours by appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
