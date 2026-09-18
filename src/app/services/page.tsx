import type { Metadata } from "next";
import Image from "next/image";
import {
  Bone,
  Brain,
  Bot,
  Dumbbell,
  HeartPulse,
  Heart,
  Users,
  Zap,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Physiotherapy services in Balewadi, Pune. Orthopedic, neurological, robotic rehab, sports injury, post-surgery, women's health, and pain management.",
};

const services = [
  {
    icon: Bone,
    title: "Orthopedic Physiotherapy",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    desc: "Joint pain, fractures, arthritis, frozen shoulder, back pain. If something in your musculoskeletal system is not working right, this is where we start. We combine manual therapy with targeted exercises and modalities to get you moving without pain again.",
    conditions: ["Joint Pain", "Fractures", "Arthritis", "Frozen Shoulder", "Back Pain"],
  },
  {
    icon: Brain,
    title: "Neurological Rehabilitation",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    desc: "Stroke recovery, Parkinson's, spinal cord injuries, nerve damage. These conditions need a therapist who understands how to retrain the nervous system. We combine clinical expertise with robotic rehab systems to help patients regain coordination, balance, and independence faster.",
    conditions: ["Stroke Recovery", "Parkinson's", "Spinal Cord Injury", "Nerve Damage"],
  },
  {
    icon: Bot,
    title: "Robotic Rehab Therapy",
    color: "bg-teal-light text-teal-dark border-teal/20",
    desc: "This is what makes Smart Physio different. Our robotic systems provide precise, repeatable movement therapy that retrains muscles and nerves after injury or surgery. The technology adapts to your progress in real time. Especially effective for stroke recovery, spinal injuries, and complex orthopedic cases.",
    conditions: ["Stroke Recovery", "Spinal Injuries", "Complex Orthopedic Cases"],
    featured: true,
  },
  {
    icon: Dumbbell,
    title: "Sports Injury Rehabilitation",
    color: "bg-orange-50 text-orange-600 border-orange-100",
    desc: "ACL tears, rotator cuff injuries, muscle strains, stress fractures. Athletes do not just need pain relief. They need to get back to full performance. We focus on complete recovery so you return to your sport stronger, not just pain-free.",
    conditions: ["ACL Tears", "Rotator Cuff", "Muscle Strains", "Stress Fractures"],
  },
  {
    icon: HeartPulse,
    title: "Post-Surgery Rehabilitation",
    color: "bg-red-50 text-red-600 border-red-100",
    desc: "Your surgeon fixed the structural problem. What happens in the weeks after determines how much function you actually get back. We work with your surgeon's guidelines and use our robotic equipment to get you moving sooner and recovering more completely.",
    conditions: ["Joint Replacement", "Spinal Surgery", "Ligament Repair"],
  },
  {
    icon: Heart,
    title: "Women's Health Physiotherapy",
    color: "bg-pink-50 text-pink-600 border-pink-100",
    desc: "Prenatal and postnatal care, pelvic floor rehab, osteoporosis management. These are conditions many women live with silently, assuming nothing can be done. With the right physiotherapy, significant improvement is absolutely possible.",
    conditions: ["Prenatal Care", "Postnatal Recovery", "Pelvic Floor", "Osteoporosis"],
  },
  {
    icon: Users,
    title: "Geriatric Physiotherapy",
    color: "bg-amber-50 text-amber-600 border-amber-100",
    desc: "Reduced mobility, balance problems, joint degeneration, fall risk. Getting older does not mean you have to accept losing your independence. Our geriatric program helps older adults stay active, stay safe, and maintain their quality of life.",
    conditions: ["Mobility Issues", "Balance Problems", "Joint Degeneration", "Fall Prevention"],
  },
  {
    icon: Zap,
    title: "Pain Management",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    desc: "Lower back pain, neck pain, sciatica, fibromyalgia. If chronic pain is running your life, we can help. Our approach combines manual therapy, electrotherapy, dry needling, and targeted exercises to treat the root cause, not just mask the symptoms.",
    conditions: ["Lower Back Pain", "Neck Pain", "Sciatica", "Fibromyalgia"],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80"
            alt="Smart Physio clinic"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <AnimateIn>
            <p className="text-teal font-medium text-sm uppercase tracking-wide">
              Services
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
              We probably treat what you have
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-white/70 leading-relaxed">
              From sports injuries to stroke recovery, from chronic back pain to
              post-surgery rehab. If it involves pain, stiffness, or lost
              mobility, this is what we do. Not sure which service fits? Just
              message us and describe what is going on.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="space-y-6">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 0.05} from="up">
              <div
                className={`bg-white border rounded-[var(--radius-lg)] p-6 md:p-8 hover:shadow-md transition-all ${
                  service.featured
                    ? "border-teal/30 ring-1 ring-teal/10"
                    : "border-border"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className={`w-14 h-14 shrink-0 rounded-2xl border ${service.color} flex items-center justify-center`}>
                    <service.icon size={26} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-navy">
                        {service.title}
                      </h3>
                      {service.featured && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-dark bg-teal-light px-2.5 py-0.5 rounded-full">
                          Our specialty
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-text-secondary leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.conditions.map((condition) => (
                        <span
                          key={condition}
                          className="text-xs font-medium text-text-muted bg-bg-muted px-3 py-1 rounded-full"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-teal to-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <AnimateIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Not sure what you need?
              </h2>
              <p className="mt-5 text-white/80 leading-relaxed">
                Describe what you are dealing with and Dr. Nileema will tell you
                exactly what is going on and what the treatment options are. No
                commitment, no pressure.
              </p>
              <div className="mt-8">
                <a
                  href={getWhatsAppUrl("Hi, I need help figuring out the right treatment. Here is what I am dealing with: ")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-teal-dark font-semibold rounded-[var(--radius)] hover:bg-bg-off transition-all hover:scale-[1.02] shadow-lg"
                >
                  <MessageCircle size={18} />
                  Describe Your Condition
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}
