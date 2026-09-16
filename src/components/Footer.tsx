import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { CLINIC } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="text-lg font-bold mb-2">{CLINIC.name}</h3>
            <p className="text-sm text-white/60 mb-4">{CLINIC.tagline}</p>
            <p className="text-sm text-white/80">
              Advanced Robotic Rehab &amp; Physiotherapy Center
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white/60">
              Quick links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/technology", label: "Technology" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/contact", label: "Contact" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-teal transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white/60">
              Services
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                "Orthopedic Physiotherapy",
                "Neurological Rehabilitation",
                "Robotic Rehab Therapy",
                "Sports Injury Rehab",
                "Post-Surgery Rehab",
                "Pain Management",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="text-sm text-white/80 hover:text-teal transition-colors"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white/60">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-teal mt-0.5 shrink-0" />
                <p className="text-sm text-white/80">{CLINIC.address}</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-teal shrink-0" />
                <a
                  href={`tel:+91${CLINIC.phone}`}
                  className="text-sm text-white/80 hover:text-teal transition-colors"
                >
                  {CLINIC.phone}
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock size={16} className="text-teal mt-0.5 shrink-0" />
                <div className="text-sm text-white/80">
                  <p>{CLINIC.timings}</p>
                  <p>{CLINIC.days}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
