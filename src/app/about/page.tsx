import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { CLINIC, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Smart Physio and Dr. Nileema Chaudhary, Pune's trusted physiotherapist specializing in robotic rehabilitation and advanced physiotherapy.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            About Smart Physio
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-text-secondary leading-relaxed">
            Advanced Robotic Rehab &amp; Physiotherapy Center, Balewadi, Pune
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          Our story
        </h2>
        <div className="mt-8 max-w-3xl mx-auto space-y-5">
          <p className="text-text-secondary leading-relaxed">
            Smart Physio was born from a straightforward idea: physiotherapy
            in India deserves an upgrade. Too many clinics rely on outdated
            methods and one-size-fits-all treatment plans. Dr. Nileema
            Chaudhary saw this gap firsthand during her years of clinical
            practice and decided to do something about it.
          </p>
          <p className="text-text-secondary leading-relaxed">
            She opened Smart Physio in Balewadi, Pune, as an advanced robotic
            rehab and physiotherapy center. The goal was never to be the
            biggest clinic. It was to be the most effective one. Every piece
            of equipment, every treatment protocol, and every square foot of
            the clinic was designed with one question in mind: will this help
            our patients recover better?
          </p>
          <p className="text-text-secondary leading-relaxed">
            Today, Smart Physio serves patients from across Pune, including
            Baner, Pashan, Aundh, Wakad, and Bavdhan. We treat everything from
            sports injuries and post-surgical recovery to neurological
            conditions and chronic pain. And we do it with a combination of
            clinical skill and technology that most clinics in the area
            simply do not have.
          </p>
        </div>
      </section>

      <section className="bg-bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
            alt="Dr. Nileema Chaudhary"
            className="w-full h-[360px] md:h-[440px] object-cover rounded-[var(--radius-lg)]"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Dr. Nileema Chaudhary
            </h2>
            <p className="mt-2 text-teal-dark font-medium">
              Physiotherapist (PT)
            </p>
            <div className="mt-5 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                Dr. Nileema Chaudhary is a qualified physiotherapist with
                extensive training in robotic rehabilitation, neurological
                physiotherapy, and orthopedic care. After completing her
                degree in physiotherapy, she pursued advanced certifications
                in robotic rehab systems and evidence-based treatment
                methods.
              </p>
              <p className="text-text-secondary leading-relaxed">
                What drives her is simple. She has seen too many patients
                bounce between clinics without getting real answers or real
                improvement. At Smart Physio, she takes a different approach.
                Every patient gets a thorough assessment, a clear diagnosis,
                and a treatment plan that is specific to their condition and
                their goals. She does not hand you a generic exercise sheet
                and send you home.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Her patients often say the same thing: she listens. Where
                most consultations feel rushed, Dr. Nileema takes the time to
                understand what you are going through and builds a recovery
                plan that actually makes sense for your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Our facility
          </h2>
          <p className="mt-5 text-text-secondary leading-relaxed">
            Our clinic at Balewadi is designed to be both functional and
            comfortable. You will find a clean, well-lit space with dedicated
            treatment rooms, a robotic rehabilitation zone, a therapy
            exercise area, and modern equipment throughout. We have kept the
            environment warm and welcoming because recovery is hard enough
            without a sterile, intimidating setting. Everything here, from
            the layout to the technology, exists to support your healing.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
          alt="Smart Physio clinic facility"
          className="order-1 md:order-2 w-full h-[320px] md:h-[400px] object-cover rounded-[var(--radius-lg)]"
        />
      </section>

      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to visit us?
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/80 leading-relaxed">
            {CLINIC.address}. Open {CLINIC.days}, {CLINIC.timings}. Reach out
            on WhatsApp and we will help you plan your first visit.
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
