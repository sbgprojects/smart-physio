import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Post-Surgery Recovery Tips",
  description:
    "What happens in the weeks after surgery determines how much function you get back. Recovery tips from Smart Physio, Balewadi, Pune.",
};

export default function PostSurgeryRecoveryTipsPost() {
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
            Post-surgery recovery tips
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              August 28, 2026
            </span>
            <span>·</span>
            <span>By Dr. Nileema Chaudhary</span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="relative mt-8 h-64 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1666214280557-091f403e3e3b?w=600&q=80"
              alt="Post-surgery rehabilitation session"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover rounded-[var(--radius-lg)]"
            />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
            <p>
              Surgery can fix a structural problem, but it does not
              automatically restore your strength, mobility, or function. That
              is where post-surgery physiotherapy comes in.
            </p>
            <p>
              In the first few weeks after surgery, the focus is on managing
              pain and swelling, protecting the surgical site, and beginning
              gentle movements to prevent stiffness. As healing progresses,
              your physiotherapist will introduce strengthening exercises,
              balance training, and functional movements tailored to your
              specific surgery.
            </p>
            <p>
              At Smart Physio, we take post-surgery rehab seriously. We
              coordinate with your surgeon&apos;s recommendations and use both
              manual therapy and robotic rehabilitation to help you recover as
              completely and quickly as possible. Most patients start noticing
              meaningful improvement within four to six weeks of consistent
              therapy.
            </p>
            <p>
              The key is starting on time and sticking with the plan. If you
              have an upcoming surgery or recently had one, talk to us about a
              rehab plan before your recovery stalls.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn from="up" delay={0.3}>
          <div className="mt-12 bg-bg-off border border-border rounded-[var(--radius-lg)] p-8 text-center">
            <h2 className="text-xl font-semibold text-navy">
              Have a surgery coming up, or recently had one?
            </h2>
            <p className="mt-2 text-text-secondary leading-relaxed">
              Talk to us about building a recovery plan that works.
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
