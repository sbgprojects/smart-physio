import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See inside Smart Physio, our clinic in Balewadi, Pune. Treatment rooms, robotic rehabilitation equipment, and therapy spaces.",
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    label: "Reception Area",
  },
  {
    src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80",
    label: "Treatment Room",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    label: "Therapy Session",
  },
  {
    src: "https://images.unsplash.com/photo-1666214280557-091f403e3e3b?w=600&q=80",
    label: "Exercise Area",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    label: "Rehabilitation Zone",
  },
  {
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
    label: "Equipment",
  },
];

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Our clinic
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-text-secondary leading-relaxed">
            Take a look inside Smart Physio. Our facility is designed to be
            comfortable, well-equipped, and focused entirely on your
            recovery.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <figure
              key={img.label}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-border"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent px-4 py-3">
                <span className="text-white font-medium text-sm">
                  {img.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-text-muted">
          These are representative images. We will update with actual clinic
          photos soon.
        </p>
      </section>

      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Want to visit us?
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/80 leading-relaxed">
            Come see the clinic for yourself. Reach out and we will help you
            plan your first visit.
          </p>
          <div className="mt-8">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal text-white font-medium rounded-[var(--radius)] hover:bg-teal-dark transition-colors"
            >
              <MessageCircle size={18} />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
