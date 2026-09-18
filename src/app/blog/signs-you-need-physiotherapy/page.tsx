import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "5 Signs You Need Physiotherapy",
  description:
    "Five signs that it is time to see a physiotherapist instead of pushing through the pain, from Smart Physio, Balewadi, Pune.",
};

export default function SignsYouNeedPhysiotherapyPost() {
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
            5 signs you need physiotherapy
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              September 3, 2026
            </span>
            <span>·</span>
            <span>By Dr. Nileema Chaudhary</span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="relative mt-8 h-64 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
              alt="Physiotherapy treatment session"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover rounded-[var(--radius-lg)]"
            />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
            <p>
              Pain is your body&apos;s way of telling you something is wrong,
              but many of us push through it hoping it will go away on its own.
              Here are five signs that it is time to see a physiotherapist.
            </p>
            <p>
              First, pain that lasts more than a week after rest. If basic rest
              is not fixing it, something deeper is going on. Second, reduced
              range of motion in any joint. If you cannot move your shoulder,
              knee, or neck the way you used to, that is a red flag.
            </p>
            <p>
              Third, recurring pain during specific activities like sitting,
              walking, or lifting. Fourth, numbness or tingling in your arms or
              legs, which could indicate nerve involvement. And fifth,
              difficulty with balance or coordination, especially after an
              injury or as you age.
            </p>
            <p>
              Early intervention almost always leads to better outcomes. The
              longer you wait, the harder recovery becomes. If any of these
              sound familiar, book a consultation at Smart Physio and let us
              take a look.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn from="up" delay={0.3}>
          <div className="mt-12 bg-bg-off border border-border rounded-[var(--radius-lg)] p-8 text-center">
            <h2 className="text-xl font-semibold text-navy">
              Recognize any of these signs?
            </h2>
            <p className="mt-2 text-text-secondary leading-relaxed">
              Reach out and we will help you figure out the right next step.
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
