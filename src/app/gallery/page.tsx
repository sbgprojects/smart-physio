import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See inside Smart Physio, our clinic in Balewadi, Pune. Treatment rooms, robotic rehabilitation equipment, and therapy spaces.",
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    label: "Reception Area",
    span: "sm:col-span-2 sm:row-span-2",
    height: "h-64 sm:h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80",
    label: "Treatment Room",
    span: "",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    label: "Therapy Session",
    span: "",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1666214280557-091f403e3e3b?w=600&q=80",
    label: "Exercise Area",
    span: "",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    label: "Rehabilitation Zone",
    span: "sm:col-span-2",
    height: "h-64",
  },
];

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <AnimateIn>
            <p className="text-teal font-medium text-sm uppercase tracking-wide">
              Gallery
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
              Take a look inside
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-white/70 leading-relaxed">
              A clean, well-equipped space designed around one thing: your
              recovery.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <AnimateIn key={img.label} delay={i * 0.08} from="up" className={img.span}>
              <figure className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-border h-full">
                <img
                  src={img.src}
                  alt={img.label}
                  className={`w-full ${img.height} object-cover transition-transform duration-500 group-hover:scale-105`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent px-4 py-4">
                  <span className="text-white font-medium text-sm">
                    {img.label}
                  </span>
                </figcaption>
              </figure>
            </AnimateIn>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-text-muted">
          These are representative images. We will update with actual clinic
          photos soon.
        </p>
      </section>

      <section className="bg-gradient-to-br from-navy to-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Want to visit?
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-white/70 leading-relaxed">
              Come see the clinic and our equipment for yourself. Message us and
              we will set up a time.
            </p>
            <div className="mt-8">
              <a
                href={getWhatsAppUrl("Hi, I would like to visit the clinic.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-white font-semibold rounded-[var(--radius)] hover:bg-teal-dark transition-all hover:scale-[1.02] shadow-lg shadow-teal/20"
              >
                <MessageCircle size={18} />
                Schedule a Visit
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
