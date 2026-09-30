"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const OutreachSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-up, .reveal-stagger").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Left Content */}
          <div className="reveal-up">
            <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              <span className="text-[#FFBA24]">03</span> Outreach
            </div>
            <h2
              className="text-4xl lowercase leading-[0.95] tracking-[0.06em] md:text-5xl lg:text-6xl"
              style={{ fontFamily: '"Supercharge Expand", sans-serif' }}
            >
              <span className="text-white">more than</span>
              <br />
              <span className="text-[#FFBA24]">just robots.</span>
            </h2>

            {/* Key Stats */}
            <div className="mt-10 border-t border-white/10">
              <div className="flex items-baseline gap-6 border-b border-white/10 py-5">
                <span
                  className="text-5xl text-[#FFBA24] lowercase"
                  style={{ fontFamily: '"Supercharge Expand", sans-serif' }}
                >
                  7.5k+
                </span>
                <p className="text-sm leading-relaxed text-white/60">
                  Outreach hours dedicated to spreading STEM education across South Carolina and beyond.
                </p>
              </div>
              <div className="flex items-baseline gap-6 border-b border-white/10 py-5">
                <span
                  className="text-5xl text-[#FFBA24] lowercase"
                  style={{ fontFamily: '"Supercharge Expand", sans-serif' }}
                >
                  5oo+
                </span>
                <p className="text-sm leading-relaxed text-white/60">
                  Students reached through robotics workshops, summer camps, and school visits.
                </p>
              </div>
            </div>

            <Link href="/team" className="glass-btn-ghost mt-8 inline-flex">
              Meet the Team <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Right Photo */}
          <div className="reveal-up" style={{ transitionDelay: "200ms" }}>
            <div className="glass-panel overflow-hidden rounded-[26px] p-3">
              <div className="overflow-hidden rounded-[20px]" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/team/team_2026.jpg"
                  alt="Golden Dragons team outreach event"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutreachSection;
