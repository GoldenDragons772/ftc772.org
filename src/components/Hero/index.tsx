"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useCallback, useState } from "react";
import AnimatedStat from "@/components/Common/AnimatedStat";

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

interface HeroImage {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  objectPosition?: string;
}

const heroImages: HeroImage[] = [
  {
    src: "/images/hero/hero-1.jpg",
    alt: "FTC 772 Golden Dragons team assembled at GSSM Center Lobby",
    title: "2026–2027 Team Roster",
    subtitle: "GSSM Center Lobby · Hartsville, SC",
    objectPosition: "center 30%",
  },
  {
    src: "/images/hero/hero-2.jpg",
    alt: "Golden Dragons team captains in formal attire at GSSM campus",
    title: "Team Captains",
    subtitle: "Student Leadership · 2026 Season",
    objectPosition: "center 25%",
  },
  {
    src: "/images/hero/hero-3.jpg",
    alt: "Golden Dragons travel squad at airport wearing custom team hoodies",
    title: "Championship Travel Squad",
    subtitle: "Charlotte Douglas International Airport",
    objectPosition: "center 38%",
  },
  {
    src: "/images/hero/hero-4.jpg",
    alt: "Canadian Rockies Premier Event Winner banner and team flag celebration",
    title: "Canadian Rockies Champions",
    subtitle: "Premier Event Winner & Control Award",
    objectPosition: "center center",
  },
  {
    src: "/images/hero/hero-5.jpg",
    alt: "Championship competition arena with robots, banners, and trophies",
    title: "Championship Arena & Robots",
    subtitle: "State & Regional Champions 2026",
    objectPosition: "center 55%",
  },
];

const Hero = () => {
  const shineRef = useRef<HTMLHeadingElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  // Auto-advance photos every 5 seconds (pauses on hover or manual interaction)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartXRef.current = null;
  };

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

          {/* Right: Interactive Top Picture Slot (Rotating Team & Competition Photos) */}
          <div
            className="reveal-up relative"
            style={{ animationDelay: "200ms" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="glass-panel rounded-[28px] p-3 relative group overflow-hidden">
              <div
                className="relative overflow-hidden rounded-[22px] bg-black/50"
                style={{ aspectRatio: "16/10" }}
              >
                {/* Image Slide Track */}
                <div
                  className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {heroImages.map((img, i) => (
                    <div key={i} className="relative h-full w-full flex-shrink-0">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        priority={i === 0}
                        className="object-cover"
                        style={{ objectPosition: img.objectPosition || "center center" }}
                        sizes="(max-width: 992px) 100vw, 58vw"
                      />
                    </div>
                  ))}
                </div>

                {/* Top Overlay Badge: Slide Counter */}
                <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-mono tracking-wider text-white/90 border border-white/10 backdrop-blur-md shadow-lg">
                  <span className="text-[#FFBA24] font-semibold">{String(currentSlide + 1).padStart(2, "0")}</span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/60">{String(heroImages.length).padStart(2, "0")}</span>
                </div>

                {/* Left / Right Chevron Controls (visible on hover) */}
                <button
                  type="button"
                  onClick={goToPrev}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white/80 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#FFBA24] hover:text-[#080808] hover:scale-105 focus:opacity-100"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white/80 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#FFBA24] hover:text-[#080808] hover:scale-105 focus:opacity-100"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>

                {/* Bottom Caption & Pagination Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5 pt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pointer-events-none">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFBA24] animate-pulse" />
                      <p className="text-sm sm:text-base font-semibold tracking-wide text-white drop-shadow-sm">
                        {heroImages[currentSlide].title}
                      </p>
                    </div>
                    <p className="text-xs text-white/70 font-normal mt-0.5 pl-3.5">
                      {heroImages[currentSlide].subtitle}
                    </p>
                  </div>

                  {/* Dot Indicators */}
                  <div className="flex items-center gap-1.5 pointer-events-auto self-start sm:self-end">
                    {heroImages.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentSlide === idx
                            ? "w-6 bg-gradient-to-r from-[#FFBA24] to-[#FFD876] shadow-[0_0_10px_rgba(255,186,36,0.5)]"
                            : "w-2 bg-white/30 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
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
              <AnimatedStat value={stat.value} className="stat-num text-4xl md:text-5xl lg:text-[3.5rem]" />
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
