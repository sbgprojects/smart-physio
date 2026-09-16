"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC, getCallUrl } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/technology", label: "Technology" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-bold text-navy">{CLINIC.name}</span>
            <span className="text-[10px] tracking-widest text-text-muted uppercase hidden sm:block">
              {CLINIC.tagline}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-text-secondary hover:text-navy transition-colors rounded-lg hover:bg-bg-muted"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={getCallUrl()}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-navy text-white text-sm font-medium rounded-[var(--radius)] hover:bg-navy-dark transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-text-secondary hover:text-navy"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-text-secondary hover:text-navy hover:bg-bg-muted rounded-[var(--radius)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getCallUrl()}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-navy text-white font-medium rounded-[var(--radius)] hover:bg-navy-dark transition-colors"
            >
              <Phone size={16} />
              Call {CLINIC.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
