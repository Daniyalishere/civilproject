import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6 text-secondary"
                  aria-hidden="true"
                >
                  <path d="M3 21h18M3 21V7l9-4 9 4v14M9 21V11h6v10" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-secondary-foreground">
                  APEX INFRA
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-primary">
                  Group
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/60">
              Building tomorrow&apos;s infrastructure with precision,
              integrity, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Civil Construction",
                "Highway & Bridges",
                "Solar Installations",
                "Irrigation Systems",
                "Government Projects",
              ].map((service) => (
                <li
                  key={service}
                  className="text-sm text-secondary-foreground/60"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-secondary-foreground/60">
              <li>+91 98765 43210</li>
              <li>info@apexinfra.com</li>
              <li>
                Sector 12, Infrastructure Hub,
                <br />
                New Delhi, India 110001
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/10 pt-8 text-center">
          <p className="text-xs text-secondary-foreground/40">
            &copy; {new Date().getFullYear()} Apex Infra Group. All rights
            reserved. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
