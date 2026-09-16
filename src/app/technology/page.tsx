import type { Metadata } from "next";
import { Target, BarChart3, Clock, TrendingUp, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Discover robotic rehabilitation technology at Smart Physio, Balewadi. Faster recovery, precise treatment, real-time progress tracking.",
};

const benefits = [
  {
    icon: Target,
    title: "Precision and Consistency",
    text: "Robotic systems deliver the exact same therapeutic movement, every single repetition. This level of consistency is critical for neurological recovery and muscle retraining, where hundreds of precise repetitions drive real change in the body.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Progress Tracking",
    text: "Every session generates data. We can see exactly how your range of motion, strength, and coordination are improving over time. This takes the guesswork out of recovery and lets us adjust your treatment plan based on hard numbers.",
  },
  {
    icon: Clock,
    title: "Faster Recovery Timelines",
    text: "Studies consistently show that robotic-assisted rehabilitation can reduce recovery time compared to traditional methods alone. The combination of precision, intensity, and data-driven adjustments means your body gets exactly what it needs to heal, session after session.",
  },
  {
    icon: TrendingUp,
    title: "Motivation Through Feedback",
    text: "Recovery takes time, and it is easy to feel stuck. Our robotic systems show you your improvement on screen during your session. When you can see the numbers improving week over week, it is much easier to stay committed to the process.",
  },
];

export default function TechnologyPage() {
  return (
    <div>
      <section className="bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Our technology
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-text-secondary leading-relaxed">
            Physiotherapy has always been a hands-on practice, and that will
            never change. But the tools available to physiotherapists have
            evolved dramatically. At Smart Physio, we have invested in
            advanced robotic rehabilitation systems and modern therapy
            equipment because the evidence is clear: when you combine skilled
            clinical judgment with precise technology, patients recover
            faster and more completely.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            What is robotic rehabilitation?
          </h2>
          <div className="mt-5 space-y-5">
            <p className="text-text-secondary leading-relaxed">
              Robotic rehabilitation uses computer-controlled devices to
              guide patients through therapeutic movements with precision
              that human hands alone cannot achieve. These systems provide
              consistent, repetitive motion therapy that is essential for
              retraining muscles and neural pathways after injury, surgery,
              or neurological events like stroke.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The equipment tracks your progress in real time, adjusting
              resistance, range of motion, and speed based on how your body
              responds during each session. This means your therapy is
              always matched to exactly where you are in your recovery, not
              where the average patient would be.
            </p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80"
          alt="Robotic rehabilitation equipment"
          className="w-full h-[320px] md:h-[400px] object-cover rounded-[var(--radius-lg)]"
        />
      </section>

      <section className="bg-bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
            Why it makes a difference
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-border rounded-[var(--radius-lg)] p-6 md:p-8"
              >
                <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center">
                  <item.icon size={22} className="text-teal-dark" />
                </div>
                <h3 className="mt-4 font-semibold text-navy text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          Traditional therapy vs. technology-assisted therapy
        </h2>
        <div className="mt-8 max-w-3xl mx-auto space-y-5">
          <p className="text-text-secondary leading-relaxed">
            Let us be clear: traditional physiotherapy is not outdated.
            Manual therapy, therapeutic exercises, and clinical assessment
            are the foundation of everything we do. The question is not
            &ldquo;traditional or technology.&rdquo; It is &ldquo;why not
            both?&rdquo;
          </p>
          <p className="text-text-secondary leading-relaxed">
            Traditional therapy relies on the therapist&apos;s skill and the
            patient&apos;s effort. Technology-assisted therapy adds
            precision, data, and consistency on top of that foundation. At
            Smart Physio, your treatment plan will always include hands-on
            care from Dr. Nileema. The technology is there to amplify what
            skilled hands can do, not replace them.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-bg-off border border-border rounded-[var(--radius-lg)] p-6">
            <h3 className="font-semibold text-navy">Traditional therapy</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>Hands-on manual therapy</li>
              <li>Therapist-guided exercises</li>
              <li>Clinical assessment and judgment</li>
              <li>Personalized attention</li>
            </ul>
          </div>
          <div className="bg-teal-light border border-teal/20 rounded-[var(--radius-lg)] p-6">
            <h3 className="font-semibold text-navy">
              Technology-assisted therapy
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>Precise, repeatable movement</li>
              <li>Real-time data on progress</li>
              <li>Adaptive resistance and range</li>
              <li>Visible, measurable feedback</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Want to see our equipment?
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/80 leading-relaxed">
            Come visit our clinic in Balewadi and see the robotic
            rehabilitation systems firsthand. Message us on WhatsApp and we
            will set up a time for you.
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
