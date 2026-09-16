import type { Metadata } from "next";
import { Quote, Star, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read patient reviews and recovery stories from Smart Physio, Balewadi, Pune. Real results from real patients.",
};

const testimonials = [
  {
    name: "Rajesh M.",
    area: "Baner",
    condition: "Chronic Lower Back Pain",
    duration: "6 weeks",
    quote:
      "Three years. That is how long I lived with lower back pain before someone told me about Smart Physio. I had tried two other clinics, done the exercises they gave me, taken the painkillers. Nothing changed. Dr. Nileema spent 45 minutes on my first assessment. Forty-five minutes. She found the actual problem, explained it in plain language, and built a plan around it. Six weeks later I was playing cricket with my son again.",
  },
  {
    name: "Sneha K.",
    area: "Aundh",
    condition: "Post Knee Replacement",
    duration: "3 months",
    quote:
      "I was terrified of rehab after my knee replacement. Everyone told me it would be painful and slow. At Smart Physio, the robotic equipment made such a difference. I could see my range of motion improving on the screen every session. Dr. Nileema kept adjusting my plan based on the data. Three months in: no cane, no limp. I did not think that was possible this soon.",
  },
  {
    name: "Amit D.",
    area: "Balewadi",
    condition: "ACL Tear (Football)",
    duration: "5 months",
    quote:
      "Tore my ACL on the field. As someone who plays every weekend, being told I needed months of rehab was gutting. But the team here got me through it. The combination of hands-on therapy and robotic rehab was different from anything I had done before. Five months later I was back on the pitch. My physio at my previous clinic told me to expect eight months minimum.",
  },
  {
    name: "Meera P.",
    area: "Pashan",
    condition: "Stroke Recovery (Father)",
    duration: "Ongoing",
    quote:
      "My father had a stroke last year and lost most of the movement on his left side. We started robotic rehab at Smart Physio because we had run out of options. The progress has been incredible. He can now use his left hand to eat and write. He feeds himself again. Dr. Nileema's patience with elderly patients is something I have not seen anywhere else. She gave our family hope when we needed it most.",
  },
  {
    name: "Vikram S.",
    area: "Wakad",
    condition: "Post Spinal Surgery",
    duration: "4 months",
    quote:
      "After spinal surgery, my surgeon told me recovery would be long and difficult. Smart Physio made it significantly less of both. The robotic rehab sessions were the only part of my week I actually looked forward to because I could see real numbers on the screen. Dr. Nileema adjusted my plan every few weeks based on the data, not just her intuition. Professional, precise, and effective.",
  },
  {
    name: "Priya R.",
    area: "Bavdhan",
    condition: "Chronic Neck and Shoulder Pain",
    duration: "6 weeks",
    quote:
      "Two years of working from home gave me neck and shoulder pain that would not go away. I tried painkillers, hot packs, YouTube exercises, a standing desk. None of it lasted. At Smart Physio, they found the root cause in the first session and treated it properly. Six weeks later I can sit through a full workday without pain. Genuinely wish I had come here two years ago instead of trying to fix it myself.",
  },
];

export default function TestimonialsPage() {
  return (
    <div>
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <AnimateIn>
            <p className="text-teal font-medium text-sm uppercase tracking-wide">
              Patient stories
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-3">
              Do not take our word for it
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-white/70 leading-relaxed">
              These are real patients with real conditions who came to Smart
              Physio and saw real results. Their words, not ours.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.08} from="up">
              <div className="h-full bg-white border border-border rounded-[var(--radius-lg)] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center">
                    <Quote size={18} className="text-teal-dark" />
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} className="text-teal fill-teal" />
                    ))}
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-border flex items-end justify-between">
                  <div>
                    <p className="font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{t.area}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-xs font-medium text-teal-dark bg-teal-light px-3 py-1 rounded-full">
                      {t.condition}
                    </span>
                    <p className="text-[11px] text-text-muted mt-1.5">
                      Recovery: {t.duration}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-teal to-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Your recovery story starts here
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-white/80 leading-relaxed">
              Tell us what you are dealing with. We will tell you honestly
              whether we can help, and what the plan would look like.
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
