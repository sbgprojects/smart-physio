import type { Metadata } from "next";
import Image from "next/image";
import { Target, BarChart3, Clock, TrendingUp, MessageCircle, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import AnimateIn from "@/components/AnimateIn";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Discover robotic rehabilitation technology at Smart Physio, Balewadi. Faster recovery, precise treatment, real-time progress tracking.",
};

const benefits = [
  {
    icon: Target,
    title: "Precision you cannot get by hand",
    text: "The robotic system delivers the exact same therapeutic movement, every repetition, every session. For neurological recovery and muscle retraining, where hundreds of precise repetitions drive real change, this level of consistency matters enormously.",
  },
  {
    icon: BarChart3,
    title: "Your progress, in numbers",
    text: "Every session generates data. Range of motion, strength, coordination, all of it tracked over time. We adjust your treatment based on what the numbers say, not guesswork. And you can see the improvement on screen.",
  },
  {
    icon: Clock,
    title: "Faster recovery, full stop",
    text: "Research consistently shows that robotic-assisted rehab reduces recovery time compared to manual therapy alone. The combination of precision, intensity, and data-driven adjustments gives your body exactly what it needs to heal.",
  },
  {
    icon: TrendingUp,
    title: "You can see it working",
    text: "Recovery takes months. It is easy to feel stuck. Our systems show your improvement during the session, on screen. When you see the numbers moving week over week, it is much easier to stay committed.",
  },
];

export default function TechnologyPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&q=80"
            alt="Robotic rehabilitation"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-28 text-center">
          <AnimateIn>
            <p className="text-teal font-medium text-sm uppercase tracking-wide">
              Our technology
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">
              The equipment most Pune clinics do not have
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-white/70 leading-relaxed">
              Skilled hands plus precise technology. That is the formula. We
              invested in robotic rehabilitation because the results are not
              subtle: patients recover faster, more completely, and with proof
              they can see.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-navy">
                <Counter target={3} suffix="x" />
              </p>
              <p className="mt-1 text-sm text-text-muted">More repetitions per session</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-navy">
                <Counter target={100} suffix="%" />
              </p>
              <p className="mt-1 text-sm text-text-muted">Movement precision</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-navy">
                <Counter target={40} suffix="%" />
              </p>
              <p className="mt-1 text-sm text-text-muted">Faster recovery reported</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is robotic rehab */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <AnimateIn from="left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                So what is robotic rehab, actually?
              </h2>
              <div className="mt-6 space-y-5">
                <p className="text-text-secondary leading-relaxed">
                  Think of it this way. Traditional physiotherapy relies on the
                  therapist guiding your movement by hand. It works, but human
                  hands have limits. They get tired, they cannot measure force
                  precisely, and they cannot give you the exact same movement
                  500 times in a row.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Robotic rehabilitation uses computer-controlled devices to
                  guide your body through therapeutic movements with a level of
                  precision and consistency that manual therapy cannot match. The
                  equipment tracks everything in real time and adjusts to how
                  your body responds during each session.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  This is not replacing the therapist. Dr. Nileema is in the
                  room, making the clinical decisions. The robot is a tool in
                  her hands, the same way a surgeon uses advanced equipment.
                  Better tools, better outcomes.
                </p>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn from="right" delay={0.1}>
            <div className="relative h-[320px] md:h-[440px]">
              <Image
                src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80"
                alt="Robotic rehabilitation equipment"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover rounded-[var(--radius-lg)]"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
              Why it makes a real difference
            </h2>
          </AnimateIn>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {benefits.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1} from="up">
                <div className="h-full bg-white border border-border rounded-[var(--radius-lg)] p-6 md:p-8 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-teal-light flex items-center justify-center">
                    <item.icon size={22} className="text-teal-dark" />
                  </div>
                  <h3 className="mt-4 font-semibold text-navy text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
            What changes when you add technology
          </h2>
          <p className="mt-4 text-center text-text-muted max-w-xl mx-auto">
            We are not saying traditional therapy is bad. We are saying: why
            settle for one when you can have both?
          </p>
        </AnimateIn>
        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <AnimateIn from="left" delay={0.1}>
            <div className="bg-bg-muted border border-border rounded-[var(--radius-lg)] p-6">
              <h3 className="font-semibold text-navy">Traditional alone</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Therapist-guided movement",
                  "Progress assessed by feel",
                  "Limited repetitions per session",
                  "Hard to see week-over-week improvement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
          <AnimateIn from="right" delay={0.2}>
            <div className="bg-teal-light border border-teal/20 rounded-[var(--radius-lg)] p-6">
              <h3 className="font-semibold text-navy">
                Traditional + robotic rehab
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Precise, repeatable movement",
                  "Progress measured in real numbers",
                  "3x more repetitions per session",
                  "Visual feedback every session",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <CheckCircle2 size={14} className="text-teal-dark mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-gradient-to-br from-navy to-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Curious? Come see it yourself.
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-white/70 leading-relaxed">
              Most people have never seen robotic rehab equipment in person.
              Message us and we will show you around the clinic. No obligation.
            </p>
            <div className="mt-8">
              <a
                href={getWhatsAppUrl("Hi, I would like to visit the clinic and see the robotic rehabilitation equipment.")}
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
