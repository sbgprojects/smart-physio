import type { Metadata } from "next";
import { Quote, Star, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

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
    quote:
      "I had been living with lower back pain for almost three years. I tried multiple clinics and even considered surgery. A friend recommended Smart Physio, and within six weeks of treatment, the difference was remarkable. Dr. Nileema actually listened to me, figured out what was going on, and built a plan that worked. I am back to playing with my kids without wincing.",
  },
  {
    name: "Sneha K.",
    area: "Aundh",
    condition: "Post Knee Replacement",
    quote:
      "After my knee replacement, I was anxious about rehab. Dr. Nileema and the team at Smart Physio made the whole process manageable. The robotic equipment helped me regain my range of motion much faster than I expected. Three months in, and I am walking without a cane. Cannot recommend this place enough.",
  },
  {
    name: "Amit D.",
    area: "Balewadi",
    condition: "Sports Injury (ACL Tear)",
    quote:
      "Tore my ACL playing football. As someone who is active, being told I needed months of rehab was tough to hear. But the team at Smart Physio got me through it. The combination of manual therapy and robotic rehab made a huge difference. I am back on the field now, and my knee feels solid.",
  },
  {
    name: "Meera P.",
    area: "Pashan",
    condition: "Stroke Recovery",
    quote:
      "My father had a stroke last year and lost significant movement on his left side. We started robotic rehabilitation at Smart Physio, and the progress has been incredible. He can now use his left hand to eat and write again. Dr. Nileema's patience and expertise gave our family hope when we really needed it.",
  },
  {
    name: "Vikram S.",
    area: "Wakad",
    condition: "Post Spinal Surgery",
    quote:
      "I had spinal surgery and was told recovery would be long and painful. Smart Physio made it less of both. The robotic rehab sessions were something I actually looked forward to because I could see my progress on screen. Dr. Nileema adjusted my plan every few weeks based on real data. Very professional, very effective.",
  },
  {
    name: "Priya R.",
    area: "Bavdhan",
    condition: "Chronic Neck and Shoulder Pain",
    quote:
      "Working from home gave me terrible neck and shoulder pain that just would not go away. I tried painkillers, hot packs, YouTube exercises. Nothing stuck. At Smart Physio, they found the actual root cause and treated it properly. Six weeks later, I can sit through a full workday without pain. Should have come here first.",
  },
];

export default function TestimonialsPage() {
  return (
    <div>
      <section className="bg-bg-off">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Patient stories
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-text-secondary leading-relaxed">
            Here is what some of our patients have shared about their
            experience at Smart Physio.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-border rounded-[var(--radius-lg)] p-6 shadow-sm flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center">
                  <Quote size={18} className="text-teal-dark" />
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-teal fill-teal"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-text-secondary leading-relaxed flex-1">
                {t.quote}
              </p>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-semibold text-navy">
                  {t.name}
                  <span className="font-normal text-text-muted"> · {t.area}</span>
                </p>
                <span className="mt-2 inline-block text-xs font-medium text-teal-dark bg-teal-light px-3 py-1 rounded-full">
                  {t.condition}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Have a question about your condition?
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/80 leading-relaxed">
            Tell us what you are dealing with and we will help you understand
            what recovery could look like for you.
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
