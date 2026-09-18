import Link from "next/link";
import Image from "next/image";
import {
  Cpu,
  Stethoscope,
  ClipboardList,
  MapPin,
  Bone,
  Brain,
  Bot,
  Dumbbell,
  HeartPulse,
  Heart,
  Users,
  Zap,
  Phone,
  MessageCircle,
  ArrowRight,
  Clock,
  CheckCircle2,
  Star,
} from "lucide-react";
import { CLINIC, getWhatsAppUrl, getCallUrl } from "@/lib/constants";
import AnimateIn from "@/components/AnimateIn";
import Counter from "@/components/Counter";

const whyUs = [
  {
    icon: Cpu,
    title: "Technology-Led Care",
    text: "Robotic rehabilitation systems that most clinics in Pune simply do not have. Precise, data-driven, and measurably faster recovery.",
  },
  {
    icon: Stethoscope,
    title: "One Doctor, Full Attention",
    text: "Dr. Nileema sees every patient herself. No rotating staff, no rushed 10-minute slots. She knows your case inside out.",
  },
  {
    icon: ClipboardList,
    title: "Your Plan, Not a Template",
    text: "Every treatment plan is built from scratch for your body, your injury, and your goals. We do not recycle exercise sheets.",
  },
  {
    icon: MapPin,
    title: "10 Minutes from Baner",
    text: "Balewadi, right off the main road. Easy to get to from Baner, Pashan, Aundh, Wakad, and Bavdhan. Open six days a week.",
  },
];

const services = [
  { icon: Bone, title: "Orthopedic Physiotherapy", color: "bg-blue-50 text-blue-600" },
  { icon: Brain, title: "Neurological Rehab", color: "bg-purple-50 text-purple-600" },
  { icon: Bot, title: "Robotic Rehab Therapy", color: "bg-teal-light text-teal-dark" },
  { icon: Dumbbell, title: "Sports Injury Rehab", color: "bg-orange-50 text-orange-600" },
  { icon: HeartPulse, title: "Post-Surgery Rehab", color: "bg-red-50 text-red-600" },
  { icon: Heart, title: "Women's Health", color: "bg-pink-50 text-pink-600" },
  { icon: Users, title: "Geriatric Physio", color: "bg-amber-50 text-amber-600" },
  { icon: Zap, title: "Pain Management", color: "bg-emerald-50 text-emerald-600" },
];

const steps = [
  {
    num: "01",
    title: "Reach out",
    text: "Send us a WhatsApp message or call. Tell us what is going on. No forms, no waiting.",
  },
  {
    num: "02",
    title: "Get assessed",
    text: "Dr. Nileema does a thorough evaluation, not a 5-minute glance. You will understand exactly what is wrong and what the plan is.",
  },
  {
    num: "03",
    title: "Start recovering",
    text: "Hands-on therapy, robotic rehab, targeted exercises. You will feel the difference within the first few sessions.",
  },
];

const testimonials = [
  {
    quote:
      "Three years of back pain. Six weeks here and I am playing with my kids again. Dr. Nileema actually figured out what was going on, instead of handing me painkillers.",
    name: "Rajesh M.",
    area: "Baner",
    condition: "Chronic Back Pain",
  },
  {
    quote:
      "After my knee replacement, I was terrified of rehab. The robotic equipment made it manageable. Three months later, no cane. I did not think that was possible this soon.",
    name: "Sneha K.",
    area: "Aundh",
    condition: "Knee Replacement",
  },
  {
    quote:
      "Tore my ACL playing football. The combo of manual therapy and robotic rehab got me back on the field in five months. My knee feels stronger than before.",
    name: "Amit D.",
    area: "Balewadi",
    condition: "ACL Tear",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-90" />
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80"
            alt="Physiotherapy treatment session"
            fill
            priority
            sizes="50vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 lg:py-40">
          <AnimateIn from="left" duration={0.8}>
            <p className="text-teal font-medium tracking-wide uppercase text-sm">
              Balewadi, Pune
            </p>
          </AnimateIn>
          <AnimateIn from="left" delay={0.1} duration={0.8}>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-2xl">
              The clinic people switch to when nothing else has worked
            </h1>
          </AnimateIn>
          <AnimateIn from="left" delay={0.2} duration={0.8}>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              Robotic rehabilitation combined with hands-on physiotherapy.
              Precise. Measurable. And it actually works.
            </p>
          </AnimateIn>
          <AnimateIn from="up" delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-white font-medium rounded-[var(--radius)] hover:bg-teal-dark transition-all hover:scale-[1.02] shadow-lg shadow-teal/20"
              >
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a
                href={getCallUrl()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white font-medium rounded-[var(--radius)] hover:bg-white/10 transition-colors"
              >
                <Phone size={18} />
                Call {CLINIC.phone}
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: 500, suffix: "+", label: "Patients treated" },
              { value: 8, suffix: "+", label: "Years of experience" },
              { value: 6, suffix: "", label: "Days a week" },
              { value: 4.8, suffix: "★", label: "Patient rating", isDecimal: true },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-navy">
                  {stat.isDecimal ? (
                    <span>4.8<span className="text-teal">★</span></span>
                  ) : (
                    <Counter target={stat.value} suffix={stat.suffix} />
                  )}
                </p>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why patients switch to us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
            Why patients switch to us
          </h2>
          <p className="mt-3 text-center text-text-muted max-w-lg mx-auto">
            Most of our patients tried other clinics first. Here is why they stayed.
          </p>
        </AnimateIn>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.1} from="up">
              <div className="h-full bg-white border border-border rounded-[var(--radius-lg)] p-6 hover:border-teal/40 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon size={22} className="text-teal-dark" />
                </div>
                <h3 className="mt-4 font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
              How it works
            </h2>
            <p className="mt-3 text-center text-text-muted max-w-lg mx-auto">
              From first message to feeling better. Here is what the process actually looks like.
            </p>
          </AnimateIn>
          <div className="mt-14 grid md:grid-cols-3 gap-8 md:gap-6 relative">
            <div className="hidden md:block absolute top-16 left-[16.6%] right-[16.6%] h-0.5 bg-gradient-to-r from-teal/20 via-teal to-teal/20" />
            {steps.map((step, i) => (
              <AnimateIn key={step.num} delay={i * 0.15} from="up">
                <div className="relative text-center">
                  <div className="relative z-10 w-14 h-14 mx-auto rounded-full bg-teal text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-teal/20">
                    {step.num}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                    {step.text}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
            What we treat
          </h2>
          <p className="mt-3 text-center text-text-muted max-w-lg mx-auto">
            If it hurts, if it is stiff, if it is not moving the way it should, we probably treat it.
          </p>
        </AnimateIn>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 0.05} from="up">
              <Link
                href="/services"
                className="group bg-white border border-border rounded-[var(--radius-lg)] p-5 md:p-6 text-center hover:border-teal/40 hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 mx-auto rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <service.icon size={22} />
                </div>
                <h3 className="mt-3 text-sm font-medium text-text">
                  {service.title}
                </h3>
              </Link>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn delay={0.3}>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-teal-dark font-medium hover:text-teal transition-colors group"
            >
              See detailed descriptions
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateIn>
      </section>

      {/* Meet the Doctor */}
      <section className="bg-bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <AnimateIn from="left">
              <div className="relative h-[360px] md:h-[480px]">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
                  alt="Dr. Nileema Chaudhary"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover rounded-[var(--radius-lg)]"
                />
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white border border-border rounded-[var(--radius-lg)] p-4 shadow-lg">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="text-teal fill-teal" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-text-muted">
                    &ldquo;She actually listens.&rdquo;
                  </p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn from="right" delay={0.1}>
              <div>
                <p className="text-teal-dark font-medium text-sm uppercase tracking-wide">
                  Your physiotherapist
                </p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy">
                  Dr. Nileema Chaudhary
                </h2>
                <p className="mt-1 text-text-muted">Physiotherapist (PT)</p>
                <p className="mt-5 text-text-secondary leading-relaxed">
                  Most consultations feel rushed. You explain your pain, get a
                  generic exercise sheet, and leave wondering if anyone actually
                  understood what you are going through.
                </p>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  Dr. Nileema takes a different approach. She spends real time
                  with every patient, figures out the root cause (not just the
                  symptom), and builds a recovery plan that is specific to you.
                  She trained in robotic rehabilitation because she saw how much
                  faster and more precisely her patients could recover with the
                  right technology backing up her clinical judgment.
                </p>
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-2 text-teal-dark font-medium hover:text-teal transition-colors group"
                >
                  More about Dr. Nileema
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Technology teaser */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&q=80"
            alt="Robotic rehabilitation"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <AnimateIn from="left">
              <p className="text-teal font-medium text-sm uppercase tracking-wide">
                What makes us different
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                Robotic rehab is not the future. We have it now.
              </h2>
              <p className="mt-5 text-white/70 leading-relaxed">
                Most physiotherapy clinics in Pune rely entirely on manual
                therapy. It works, but it has limits. Our robotic rehabilitation
                systems deliver precise, repeatable movements that retrain your
                muscles and nerves faster. Every session is tracked. Every
                improvement is measured. You can see your progress on screen,
                session after session.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-6">
                {[
                  "Precise, repeatable therapy",
                  "Real-time progress data",
                  "Faster recovery timelines",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-teal shrink-0" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/technology"
                className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-teal text-white font-medium rounded-[var(--radius)] hover:bg-teal-dark transition-all hover:scale-[1.02] shadow-lg shadow-teal/20"
              >
                See How It Works
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
            Real patients. Real results.
          </h2>
          <p className="mt-3 text-center text-text-muted max-w-lg mx-auto">
            We could tell you we are good. Or you could hear it from the people who actually came in with pain and walked out without it.
          </p>
        </AnimateIn>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.1} from="up">
              <div className="h-full bg-white border border-border rounded-[var(--radius-lg)] p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="text-teal fill-teal" />
                  ))}
                </div>
                <p className="text-text-secondary leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-navy text-sm">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.area}</p>
                  </div>
                  <span className="text-xs font-medium text-teal-dark bg-teal-light px-3 py-1 rounded-full">
                    {t.condition}
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn delay={0.3}>
          <div className="mt-8 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-teal-dark font-medium hover:text-teal transition-colors group"
            >
              Read more patient stories
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateIn>
      </section>

      {/* Location */}
      <section className="bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-start">
          <AnimateIn from="left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Easy to find. Easy to reach.
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                We are in Balewadi, Pune, right off the main road. If you are
                coming from Baner, Pashan, Aundh, Wakad, or Bavdhan, you are
                less than 15 minutes away.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-teal-dark mt-0.5 shrink-0" />
                  <p className="text-text-secondary">{CLINIC.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-teal-dark mt-0.5 shrink-0" />
                  <a
                    href={getCallUrl()}
                    className="text-text-secondary hover:text-navy transition-colors"
                  >
                    +91 {CLINIC.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-teal-dark mt-0.5 shrink-0" />
                  <p className="text-text-secondary">
                    {CLINIC.days}, {CLINIC.timings}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
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
          </AnimateIn>
          <AnimateIn from="right" delay={0.1}>
            <div className="w-full h-[300px] md:h-[400px] rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-sm">
              <iframe
                src={CLINIC.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Smart Physio location map"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-teal to-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Tired of living with the pain?
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-white/80 leading-relaxed">
              Send us a WhatsApp message right now. Tell us what is going on.
              We will get back to you within a few hours and help you figure out
              the best next step. No cost for the initial consultation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-teal-dark font-semibold rounded-[var(--radius)] hover:bg-bg-off transition-all hover:scale-[1.02] shadow-lg"
              >
                <MessageCircle size={18} />
                Message on WhatsApp
              </a>
              <a
                href={getCallUrl()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white font-medium rounded-[var(--radius)] hover:bg-white/10 transition-colors"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
