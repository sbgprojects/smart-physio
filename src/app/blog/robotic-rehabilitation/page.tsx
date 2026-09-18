import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Understanding Robotic Rehabilitation",
  description:
    "Robotic rehabilitation has changed how physiotherapy works. Here is what it is, how it works, and who benefits from it, from Smart Physio, Balewadi, Pune.",
};

export default function RoboticRehabilitationPost() {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 md:pt-14">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark hover:text-navy transition-colors"
        >
          <ArrowLeft size={15} />
          Back to blog
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <AnimateIn from="left">
          <h1 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Understanding robotic rehabilitation
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              September 10, 2026
            </span>
            <span>·</span>
            <span>By Dr. Nileema Chaudhary</span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="relative mt-8 h-64 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80"
              alt="Robotic rehabilitation equipment"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover rounded-[var(--radius-lg)]"
            />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
            <p>
              Robotic rehabilitation has changed how physiotherapy works in the
              last decade, but most people have never heard of it. Robotic
              rehab uses computer-guided devices to help patients perform
              therapeutic movements with a level of precision and consistency
              that manual therapy cannot match on its own.
            </p>
            <p>
              These systems are especially effective for patients recovering
              from stroke, spinal cord injuries, and complex orthopedic
              surgeries. The technology tracks your movement in real time and
              adjusts to your progress, making each session targeted and
              efficient.
            </p>
            <p>
              At Smart Physio in Balewadi, we have integrated robotic
              rehabilitation into our treatment protocols because the results
              speak for themselves. Patients recover faster, regain more
              function, and stay motivated when they can see their progress
              measured and displayed during every session.
            </p>
            <p>
              If you are curious about whether robotic rehab is right for your
              condition, reach out to us for a consultation.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn from="up" delay={0.3}>
          <div className="mt-12 bg-bg-off border border-border rounded-[var(--radius-lg)] p-8 text-center">
            <h2 className="text-xl font-semibold text-navy">
              Curious if robotic rehab could help you?
            </h2>
            <p className="mt-2 text-text-secondary leading-relaxed">
              Reach out and we will help you understand your options.
            </p>
            <div className="mt-6">
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
        </AnimateIn>
      </article>
    </div>
  );
}
