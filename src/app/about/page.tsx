import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, CheckCircle2, Star } from "lucide-react";
import { CLINIC, getWhatsAppUrl } from "@/lib/constants";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Smart Physio and Dr. Nileema Chaudhary, Pune's trusted physiotherapist specializing in robotic rehabilitation and advanced physiotherapy.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <AnimateIn>
            <p className="text-teal font-medium text-sm uppercase tracking-wide">
              About us
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
              We built the clinic we wished existed
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-white/70 leading-relaxed">
              Too many physiotherapy clinics in Pune run on outdated methods and
              rushed appointments. Smart Physio exists because patients deserve
              better than that.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              The short version
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="mt-8 space-y-5">
              <p className="text-text-secondary leading-relaxed text-lg">
                Dr. Nileema Chaudhary spent years practicing physiotherapy and
                kept running into the same problem. Patients would show up
                having already tried two or three other clinics. They had done
                the generic exercises, sat through the cookie-cutter sessions,
                and given up hope that physiotherapy could actually fix them.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                The issue was not that physiotherapy does not work. It was that
                most clinics were not doing it well enough. Quick assessments,
                templated exercise sheets, no real measurement of progress. She
                wanted to build something different: a clinic where every patient
                gets a thorough assessment, a treatment plan built from scratch,
                and access to technology that makes recovery faster and more
                precise.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                That is Smart Physio. We opened in Balewadi, Pune, with robotic
                rehabilitation equipment that most clinics in the city do not
                have, a treatment philosophy that puts accuracy over volume, and
                a simple promise: if you show up consistently, you will see
                results you can measure.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <AnimateIn from="left">
              <div className="relative h-[400px] md:h-[520px]">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
                  alt="Dr. Nileema Chaudhary"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover rounded-[var(--radius-lg)]"
                />
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white border border-border rounded-[var(--radius-lg)] p-4 shadow-lg">
                  <p className="text-sm font-semibold text-navy">
                    Dr. Nileema Chaudhary
                  </p>
                  <p className="text-xs text-text-muted">Physiotherapist (PT)</p>
                  <div className="flex gap-0.5 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="text-teal fill-teal" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn from="right" delay={0.1}>
              <div>
                <p className="text-teal-dark font-medium text-sm uppercase tracking-wide">
                  The doctor behind it
                </p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">
                  Dr. Nileema Chaudhary
                </h2>
                <div className="mt-6 space-y-5">
                  <p className="text-text-secondary leading-relaxed">
                    Dr. Nileema is a qualified physiotherapist with advanced
                    training in robotic rehabilitation, neurological
                    physiotherapy, and orthopedic care. She is also one of the
                    few physiotherapists in Pune who has trained on robotic rehab
                    systems used in hospitals across Europe and the US.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Ask any of her patients what makes her different and they
                    will tell you the same thing: she listens. Where most
                    consultations are over in ten minutes, she takes the time to
                    understand what you are going through, identify the actual
                    root cause (not just the symptom you walked in with), and
                    build a plan that makes sense for your life.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    She does not hand you a printout and send you home. She
                    works with you, session after session, adjusting the plan as
                    your body responds. That is why her patients recover, and
                    that is why they refer their families.
                  </p>
                </div>
                <div className="mt-8 space-y-3">
                  {[
                    "Specialized in robotic rehabilitation",
                    "Trained in neurological and orthopedic physiotherapy",
                    "Every patient gets her direct attention",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-teal shrink-0" />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <AnimateIn from="left" className="order-2 md:order-1">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                The clinic itself
              </h2>
              <p className="mt-5 text-text-secondary leading-relaxed">
                Our Balewadi clinic is designed for one thing: helping you
                recover. You will find a clean, well-lit space with dedicated
                treatment rooms, a robotic rehabilitation area, and a therapy
                exercise zone with modern equipment. We have kept the
                environment warm and approachable because rehab is hard enough
                without a sterile, hospital-like atmosphere. Everything here,
                from the layout to the machines, exists because it makes your
                treatment better.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Dedicated treatment rooms",
                  "Robotic rehab zone",
                  "Modern therapy equipment",
                  "Clean, comfortable environment",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium text-teal-dark bg-teal-light px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
          <AnimateIn from="right" delay={0.1} className="order-1 md:order-2">
            <div className="relative h-[320px] md:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Smart Physio clinic facility"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover rounded-[var(--radius-lg)]"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-gradient-to-br from-teal to-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Come see it for yourself
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-white/80 leading-relaxed">
              {CLINIC.address}. Open {CLINIC.days}, {CLINIC.timings}. Message us
              on WhatsApp and we will set up your first visit.
            </p>
            <div className="mt-8">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-teal-dark font-semibold rounded-[var(--radius)] hover:bg-bg-off transition-all hover:scale-[1.02] shadow-lg"
              >
                <MessageCircle size={18} />
                Message on WhatsApp
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
