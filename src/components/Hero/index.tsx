"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";

const stats = [
  { value: "2o", label: "Years Competing" },
  { value: "7,5oo+", label: "Outreach Hours" },
  { value: "14", label: "Competition Awards" },
  { value: "772", label: "FTC Team Number" },
];

const honours = [
  { award: "SC State Champion + INSPIRE Award Winner", year: "2025 Decode" },
  { award: "Canadian Rockies Premier Event + Control Award Winner", year: "2025 Decode Offseason" },
  { award: "SC State Champion + INSPIRE Award Winner", year: "2024 Into the Deep" },
];

const Hero = () => {
  const shineRef = useRef<HTMLHeadingElement>(null);

  // Seamless interactive cursor-follow gold shine directly on text
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = shineRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--shine-x", `${x}px`);
    el.style.setProperty("--shine-y", `${y}px`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = shineRef.current;
    if (!el) return;
    el.style.setProperty("--shine-x", "-9999px");
    el.style.setProperty("--shine-y", "-9999px");
  }, []);

  useEffect(() => {
    const el = shineRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove as any);
    el.addEventListener("mouseleave", handleMouseLeave as any);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove as any);
      el.removeEventListener("mouseleave", handleMouseLeave as any);
    };
  }, [handleMouseMove, handleMouseLeave]);

  // Intersection Observer for reveal animations
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
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36 pb-8">
      <div className="container relative z-10">
        {/* Eyebrow */}
        <div className="mb-4 flex items-center gap-4 text-base font-light uppercase tracking-[0.4em] text-[#FFD876]">
          <span className="h-px w-12 bg-[#FFBA24]/50" />
          FTC 772 · Hartsville, South Carolina
          <span className="h-px w-12 bg-[#FFBA24]/50" />
        </div>

        {/* Wordmark Title with Seamless Direct Cursor Shine */}
        <h1
          ref={shineRef}
          className="wordmark-hero text-5xl lowercase leading-[0.9] tracking-[0.08em] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]"
          style={{ fontFamily: '"Supercharge Expand", sans-serif' }}
          aria-label="golden dragons"
        >
          golden
          <br />
          dragons
        </h1>

        {/* Hero Grid: Copy + Media */}
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[5fr_7fr]">
          {/* Left: Copy */}
          <div className="reveal-up">
            <p className="max-w-xl text-lg font-normal leading-relaxed text-white/80">
              A student-led FIRST Tech Challenge team from the SC Governor&apos;s School for
              Science &amp; Mathematics. We build competitive robots,{" "}
              <span className="text-[#FFBA24] font-medium">grow STEM leaders</span>, and
              design with purpose.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/robot/" className="glass-btn-solid">
                See Our Robots <span className="text-lg">→</span>
              </Link>
              <Link href="/sponsor/" className="glass-btn-ghost">
                Sponsor the Season
              </Link>
            </div>

            {/* Honours List */}
            <ul className="mt-10 border-t border-white/10">
              {honours.map((h, i) => (
                <li
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 border-b border-white/10 py-3 text-sm"
                >
                  <span className="text-white/90 leading-snug">{h.award}</span>
                  <span className="text-xs font-mono uppercase tracking-[0.08em] text-white/40 text-right sm:text-right flex-shrink-0 sm:ml-auto self-end sm:self-auto whitespace-nowrap">
                    {h.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Large Team Photo */}
          <div className="reveal-up relative" style={{ animationDelay: "200ms" }}>
            <div className="glass-panel rounded-[28px] p-3 overflow-hidden">
              <div className="relative overflow-hidden rounded-[22px]" style={{ aspectRatio: "16/10" }}>
                <Image
                  src="/images/team/team_2026_alt.jpg"
                  alt="Golden Dragons team photo"
                  fill
                  className="object-cover transition-transform duration-[1.5s] hover:scale-105"
                  priority
                  sizes="(max-width: 992px) 100vw, 58vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="reveal-stagger mt-16 grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`py-6 ${i > 0 ? "border-l border-white/10 pl-6" : ""} ${i === 2 ? "max-lg:border-l-0 max-lg:pl-0" : ""}`}
            >
              <div className="stat-num text-4xl md:text-5xl lg:text-[3.5rem]">{stat.value}</div>
              <span className="mt-2 block text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
