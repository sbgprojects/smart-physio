import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Physiotherapy tips, robotic rehab insights, and recovery guides from Smart Physio, Balewadi, Pune.",
};

const posts = [
  {
    title: "Understanding robotic rehabilitation",
    slug: "robotic-rehabilitation",
    image:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80",
    excerpt:
      "Robotic rehabilitation has changed how physiotherapy works, but most people have never heard of it. Here is what it is, how it works, and who benefits from it.",
    date: "September 10, 2026",
  },
  {
    title: "5 signs you need physiotherapy",
    slug: "signs-you-need-physiotherapy",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    excerpt:
      "Pain is your body telling you something is wrong. Here are five signs that it is time to see a physiotherapist instead of pushing through it.",
    date: "September 3, 2026",
  },
  {
    title: "Post-surgery recovery tips",
    slug: "post-surgery-recovery-tips",
    image:
      "https://images.unsplash.com/photo-1666214280557-091f403e3e3b?w=600&q=80",
    excerpt:
      "Surgery fixes the structural problem. What happens in the weeks after determines how much function you actually get back.",
    date: "August 28, 2026",
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
          <AnimateIn>
            <p className="text-teal font-medium text-sm uppercase tracking-wide">
              Blog
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white tracking-tight">
              From the clinic
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-white/70 leading-relaxed">
              Physiotherapy tips, robotic rehab insights, and recovery guides
              from Dr. Nileema and the team at Smart Physio.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 0.1} from="up">
              <Link
                href={`/blog/${post.slug}`}
                className="group bg-white border border-border rounded-[var(--radius-lg)] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Calendar size={13} />
                    {post.date}
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-navy group-hover:text-teal-dark transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-text-secondary text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark group-hover:gap-2.5 transition-all">
                    Read more
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>
    </div>
  );
}
