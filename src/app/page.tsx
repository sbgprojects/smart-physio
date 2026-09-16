import Link from "next/link";
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
} from "lucide-react";
import { CLINIC, getWhatsAppUrl, getCallUrl } from "@/lib/constants";

const whyUs = [
  {
    icon: Cpu,
    title: "Technology-Led Care",
    text: "We use robotic rehabilitation systems and advanced therapy equipment that you won't find in most clinics. Better tools mean better outcomes, and faster recovery for you.",
  },
  {
    icon: Stethoscope,
    title: "Experienced Doctor",
    text: "Dr. Nileema Chaudhary brings years of clinical experience in physiotherapy, with specialized training in robotic rehabilitation and neurological recovery. You are in good hands.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Plans",
    text: "No two injuries are the same. Every treatment plan here is built around your body, your goals, and how quickly you want to get back to normal. Cookie-cutter exercises do not work, and we do not use them.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    text: "We are in Balewadi, Pune, with easy access from Baner, Pashan, Aundh, Wakad, and Bavdhan. Open six days a week, 10 AM to 8:30 PM.",
  },
];

const services = [
  { icon: Bone, title: "Orthopedic Physiotherapy" },
  { icon: Brain, title: "Neurological Rehabilitation" },
  { icon: Bot, title: "Robotic Rehab Therapy" },
  { icon: Dumbbell, title: "Sports Injury Rehab" },
  { icon: HeartPulse, title: "Post-Surgery Rehab" },
  { icon: Heart, title: "Women's Health" },
  { icon: Users, title: "Geriatric Physiotherapy" },
  { icon: Zap, title: "Pain Management" },
];

const testimonials = [
  {
    quote:
      "I had been living with lower back pain for almost three years. A friend recommended Smart Physio, and within six weeks the difference was remarkable. Dr. Nileema actually listened to me and built a plan that worked.",
    name: "Rajesh M.",
    area: "Baner",
    condition: "Back Pain",
  },
  {
    quote:
      "After my knee replacement, I was anxious about rehab. The robotic equipment helped me regain my range of motion much faster than I expected. Three months in, and I am walking without a cane.",
    name: "Sneha K.",
    area: "Aundh",
    condition: "Knee Replacement",
  },
  {
    quote:
      "Tore my ACL playing football. The combination of manual therapy and robotic rehab made a huge difference. I am back on the field now.",
    name: "Amit D.",
    area: "Balewadi",
    condition: "Sports Injury",
  },
];

export default function Home() {
  return (
    <div>
      <section className="bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight tracking-tight">
              Your Recovery Starts Here
            </h1>
            <p className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed">
              At Smart Physio, we combine robotic rehabilitation with hands-on
              physiotherapy so you can move without pain again. Whether it is
              a bad back, a sports injury, or recovery after surgery, we will
              build a treatment plan around you and stick with it until you
              are better.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal text-white font-medium rounded-[var(--radius)] hover:bg-teal-dark transition-colors"
              >
                <MessageCircle size={18} />
                Book Appointment
              </a>
              <a
                href={getCallUrl()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-navy text-navy font-medium rounded-[var(--radius)] hover:bg-navy hover:text-white transition-colors"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80"
              alt="Physiotherapy treatment session"
              className="w-full h-[420px] object-cover rounded-[var(--radius-lg)]"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          Why patients choose us
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-border rounded-[var(--radius-lg)] p-6"
            >
              <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center">
                <item.icon size={22} className="text-teal-dark" />
              </div>
              <h3 className="mt-4 font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
            What we treat
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-text-secondary leading-relaxed">
            We offer a full range of physiotherapy services, from post-surgery
            recovery to chronic pain management. Whether you are dealing with
            a sports injury, recovering from a stroke, or just tired of that
            nagging back pain, we have the expertise and the equipment to
            help.
          </p>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="bg-white border border-border rounded-[var(--radius-lg)] p-6 text-center hover:border-teal hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-teal-light flex items-center justify-center">
                  <service.icon size={22} className="text-teal-dark" />
                </div>
                <h3 className="mt-4 text-sm font-medium text-text">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-teal-dark font-medium hover:text-teal transition-colors"
            >
              View all services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
            alt="Dr. Nileema Chaudhary"
            className="w-full h-[360px] md:h-[440px] object-cover rounded-[var(--radius-lg)]"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Meet Dr. Nileema Chaudhary
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Dr. Nileema Chaudhary is a licensed physiotherapist with
              specialized training in robotic rehabilitation and neurological
              recovery. She founded Smart Physio with a simple belief: when
              you pair skilled hands with smart technology, patients recover
              faster. She has helped hundreds of patients across Pune get
              back on their feet, and she would love to help you too.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-teal-dark font-medium hover:text-teal transition-colors"
            >
              Learn more about Dr. Nileema
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Better tools. Better recovery.
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Traditional physiotherapy works. But when you add robotic
              rehabilitation to the process, recovery becomes more precise
              and often faster. Our equipment helps patients regain movement
              and strength in ways that manual therapy alone cannot. If you
              are curious about how it works, come see it for yourself.
            </p>
            <Link
              href="/technology"
              className="mt-7 inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal text-white font-medium rounded-[var(--radius)] hover:bg-teal-dark transition-colors"
            >
              See Our Technology
            </Link>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80"
              alt="Robotic rehabilitation technology"
              className="w-full h-[340px] object-cover rounded-[var(--radius-lg)]"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">
          What our patients say
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-border rounded-[var(--radius-lg)] p-6 flex flex-col"
            >
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 pt-5 border-t border-border">
                <p className="font-semibold text-text">{t.name}</p>
                <p className="text-xs text-text-muted mt-1">
                  {t.area} &middot; {t.condition}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-teal-dark font-medium hover:text-teal transition-colors"
          >
            Read more stories
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Visit our clinic
            </h2>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-teal-dark mt-0.5 shrink-0" />
                <p className="text-text-secondary leading-relaxed">
                  {CLINIC.address}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-teal-dark mt-0.5 shrink-0" />
                <a
                  href={getCallUrl()}
                  className="text-text-secondary hover:text-navy transition-colors"
                >
                  {CLINIC.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-teal-dark mt-0.5 shrink-0" />
                <p className="text-text-secondary leading-relaxed">
                  {CLINIC.days}, {CLINIC.timings}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] md:h-[360px] rounded-[var(--radius-lg)] overflow-hidden border border-border">
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
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy">
          Ready to start feeling better?
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-text-secondary leading-relaxed">
          Whether you have a question or you are ready to begin treatment, we
          are here for you. Reach out on WhatsApp or give us a call, and let
          us figure out the best path forward together.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal text-white font-medium rounded-[var(--radius)] hover:bg-teal-dark transition-colors"
          >
            <MessageCircle size={18} />
            Message on WhatsApp
          </a>
          <a
            href={getCallUrl()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-navy text-navy font-medium rounded-[var(--radius)] hover:bg-navy hover:text-white transition-colors"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
}
