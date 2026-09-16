import type { Metadata } from "next";
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
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Physiotherapy services in Balewadi, Pune. Orthopedic, neurological, robotic rehab, sports injury, post-surgery, women's health, and pain management.",
};

const services = [
  {
    icon: Bone,
    title: "Orthopedic Physiotherapy",
    desc: "Dealing with joint pain, fractures, arthritis, or a stiff shoulder? Orthopedic physiotherapy targets the bones, joints, muscles, and ligaments that keep you moving. We use a combination of manual therapy, therapeutic exercises, and advanced modalities to reduce pain, restore mobility, and strengthen the areas that need it most.",
    conditions: ["Joint Pain", "Fractures", "Arthritis", "Frozen Shoulder", "Back Pain"],
  },
  {
    icon: Brain,
    title: "Neurological Rehabilitation",
    desc: "Conditions like stroke, Parkinson's disease, spinal cord injuries, and nerve damage require specialized care. Our neurological rehabilitation program focuses on retraining the nervous system, improving coordination and balance, and helping patients regain independence in their daily activities. We combine clinical expertise with robotic rehab systems to accelerate neurological recovery.",
    conditions: ["Stroke Recovery", "Parkinson's", "Spinal Cord Injury", "Nerve Damage"],
  },
  {
    icon: Bot,
    title: "Robotic Rehab Therapy",
    desc: "Our robotic rehabilitation systems provide precise, repetitive, and measurable movement therapy that helps retrain muscles and nerves after injury or surgery. The technology adapts to your progress in real time, making each session as effective as possible. It is especially powerful for stroke recovery, spinal injuries, and complex orthopedic cases.",
    conditions: ["Stroke Recovery", "Spinal Injuries", "Complex Orthopedic Cases"],
  },
  {
    icon: Dumbbell,
    title: "Sports Injury Rehabilitation",
    desc: "Athletes and active individuals need more than just pain relief. They need to get back to full performance. Our sports rehab program covers everything from ACL tears and rotator cuff injuries to muscle strains and stress fractures. We focus on complete recovery so you can return to your sport with confidence.",
    conditions: ["ACL Tears", "Rotator Cuff", "Muscle Strains", "Stress Fractures"],
  },
  {
    icon: HeartPulse,
    title: "Post-Surgery Rehabilitation",
    desc: "Surgery fixes the structural problem. What happens in the weeks after determines how much function you actually get back. Our post-surgery rehab programs are designed for patients recovering from joint replacements, spinal surgeries, ligament repairs, and other orthopedic procedures. We work closely with your surgeon's guidelines while using our advanced equipment to speed up your recovery timeline.",
    conditions: ["Joint Replacement", "Spinal Surgery", "Ligament Repair"],
  },
  {
    icon: Heart,
    title: "Women's Health Physiotherapy",
    desc: "From prenatal and postnatal care to pelvic floor rehabilitation and osteoporosis management, we provide physiotherapy services tailored to women's health needs. These are conditions that many women deal with silently, but with the right treatment, significant improvement is absolutely possible.",
    conditions: ["Prenatal Care", "Postnatal Recovery", "Pelvic Floor", "Osteoporosis"],
  },
  {
    icon: Users,
    title: "Geriatric Physiotherapy",
    desc: "Aging brings its own set of challenges, including reduced mobility, balance issues, joint degeneration, and increased fall risk. Our geriatric physiotherapy program helps older adults maintain their independence, manage age-related conditions, and improve their overall quality of life through safe, guided exercise and therapy.",
    conditions: ["Mobility Issues", "Balance Problems", "Joint Degeneration", "Fall Prevention"],
  },
  {
    icon: Zap,
    title: "Pain Management",
    desc: "Chronic pain does not have to run your life. Whether it is lower back pain, neck pain, sciatica, or fibromyalgia, our pain management approach combines manual therapy, electrotherapy, dry needling, and targeted exercises to address the root cause of your pain.",
    conditions: ["Lower Back Pain", "Neck Pain", "Sciatica", "Fibromyalgia"],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Our services
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-text-secondary leading-relaxed">
            At Smart Physio, we treat a wide range of conditions using a mix
            of hands-on therapy, advanced equipment, and robotic
            rehabilitation. Here is an overview of what we offer. If you are
            not sure which service is right for you, just reach out. We will
            point you in the right direction.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-border rounded-[var(--radius-lg)] p-6 md:p-8"
            >
              <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center">
                <service.icon size={22} className="text-teal-dark" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.conditions.map((condition) => (
                  <span
                    key={condition}
                    className="text-xs font-medium text-teal-dark bg-teal-light px-3 py-1 rounded-full"
                  >
                    {condition}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Not sure which service you need?
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/80 leading-relaxed">
            Tell us what you are dealing with and we will help you figure out
            the right treatment path. No pressure, no guesswork.
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
