"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
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
              DANISH COMPANY
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-primary">
              Group
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded px-4 py-2 text-sm font-medium transition-colors duration-200",
                pathname === link.href
                  ? "bg-primary text-secondary"
                  : "text-secondary-foreground/70 hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-secondary-foreground transition-all duration-300",
              isOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-secondary-foreground transition-all duration-300",
              isOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-secondary-foreground transition-all duration-300",
              isOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden bg-secondary transition-all duration-300 md:hidden",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "rounded px-4 py-3 text-sm font-medium transition-colors duration-200",
                pathname === link.href
                  ? "bg-primary text-secondary"
                  : "text-secondary-foreground/70 hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
