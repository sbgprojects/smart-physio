import type { Metadata } from "next";
import { MapPin, Phone, Clock, MessageCircle, PhoneCall } from "lucide-react";
import { CLINIC, getWhatsAppUrl, getCallUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Smart Physio in Balewadi, Pune. Book appointments via WhatsApp or call. Open Monday to Saturday, 10 AM to 8:30 PM.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Get in touch
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-text-secondary leading-relaxed">
            We would love to hear from you. Whether you have a question about
            our services, want to know if we can help with your condition, or
            are ready to book your first appointment, reaching out is easy.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-5">
            <div className="bg-white border border-border rounded-[var(--radius-lg)] p-6 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-teal-light flex items-center justify-center">
                <MapPin size={20} className="text-teal-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-navy">Address</h3>
                <p className="mt-1 text-text-secondary leading-relaxed">
                  {CLINIC.address}
                </p>
              </div>
            </div>

            <div className="bg-white border border-border rounded-[var(--radius-lg)] p-6 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-teal-light flex items-center justify-center">
                <Phone size={20} className="text-teal-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-navy">Phone</h3>
                <a
                  href={getCallUrl()}
                  className="mt-1 block text-text-secondary hover:text-teal-dark transition-colors"
                >
                  +91 {CLINIC.phone}
                </a>
              </div>
            </div>

            <div className="bg-white border border-border rounded-[var(--radius-lg)] p-6 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-teal-light flex items-center justify-center">
                <Clock size={20} className="text-teal-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-navy">Timings</h3>
                <p className="mt-1 text-text-secondary leading-relaxed">
                  {CLINIC.days}, {CLINIC.timings}
                </p>
              </div>
            </div>

            <div className="bg-white border border-border rounded-[var(--radius-lg)] p-6 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-teal-light flex items-center justify-center">
                <MessageCircle size={20} className="text-teal-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-navy">WhatsApp</h3>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-text-secondary hover:text-teal-dark transition-colors"
                >
                  Message us anytime
                </a>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="font-semibold text-navy mb-3">Areas we serve</h3>
              <div className="flex flex-wrap gap-2">
                {CLINIC.areas.map((area) => (
                  <span
                    key={area}
                    className="text-xs font-medium text-teal-dark bg-teal-light px-3 py-1 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border">
              <iframe
                src={CLINIC.mapUrl}
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Smart Physio location"
              />
            </div>
            <p className="mt-4 text-sm text-text-muted">{CLINIC.address}</p>
          </div>
        </div>
      </section>

      <section className="bg-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Book your appointment
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/90 leading-relaxed">
            The fastest way to reach us is through WhatsApp. Send us a
            message with your name and what you are dealing with, and we will
            get back to you within a few hours. You can also call us directly
            during clinic hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-teal-dark font-medium rounded-[var(--radius)] hover:bg-bg-off transition-colors"
            >
              <MessageCircle size={18} />
              Message on WhatsApp
            </a>
            <a
              href={getCallUrl()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white text-white font-medium rounded-[var(--radius)] hover:bg-white/10 transition-colors"
            >
              <PhoneCall size={18} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
