"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";

interface OutreachImage {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
}

const outreachImages: OutreachImage[] = [
  {
    src: "/images/outreach/outreach-1.jpg",
    alt: "Golden Dragons students collaborating on robotics mechanism with youth in classroom",
    caption: "Hands-On Mentorship & Teamwork",
  },
  {
    src: "/images/outreach/outreach-2.jpg",
    alt: "Guiding young students with interactive gamepad robot driving controls",
    caption: "Inspiring Future Robot Drivers",
  },
  {
    src: "/images/outreach/outreach-3.jpg",
    alt: "Team workshop assembling and prototyping robot hardware components",
    caption: "Hardware Prototyping Workshop",
    objectPosition: "center 35%",
  },
  {
    src: "/images/outreach/outreach-4.jpg",
    alt: "Engineering design process presentation to community audience",
    caption: "Technical Design & Team Presentation",
  },
  {
    src: "/images/outreach/outreach-5.jpg",
    alt: "Golden Dragons community parade celebration with mobile robot",
    caption: "Spreading STEM Joy in the Community",
  },
];

const OutreachSection = () => {
  // Infinite track slides: [last, ...items, first]
  const slides = [
    outreachImages[outreachImages.length - 1],
    ...outreachImages,
    outreachImages[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const goToPrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const goToSlide = (idx: number) => {
    setIsTransitioning(true);
    setCurrentIndex(idx + 1);
  };

  // Moderate pace auto-rotation: 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  // Seamless wrap-around on transition end
  const handleTransitionEnd = () => {
    if (currentIndex >= slides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length - 2);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartXRef.current = null;
  };

  // Reveal animations observer
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

  // Compute active 0-based dot index
  const activeDotIndex =
    (currentIndex - 1 + outreachImages.length) % outreachImages.length;

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

            <Link href="/team/" className="glass-btn-ghost mt-8 inline-flex">
              Meet the Team <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Right Photo Carousel: Rotating selection with slide and bounce */}
          <div className="reveal-up" style={{ transitionDelay: "200ms" }}>
            <div className="glass-panel overflow-hidden rounded-[26px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 hover:border-[#FFBA24]/40 transition-colors duration-300">
              <div
                className="group relative overflow-hidden rounded-[20px] aspect-[4/3] w-full bg-black/40 select-none"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Sliding Carousel Track with Elastic Bounce Physics */}
                <div
                  className="flex h-full w-full"
                  onTransitionEnd={handleTransitionEnd}
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning
                      ? "transform 0.85s cubic-bezier(0.34, 1.42, 0.64, 1)"
                      : "none",
                  }}
                >
                  {slides.map((slide, idx) => (
                    <div
                      key={idx}
                      className="relative min-w-full h-full flex-shrink-0 overflow-hidden"
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        sizes="(max-width: 992px) 100vw, 50vw"
                        className="h-full w-full object-cover"
                        style={
                          slide.objectPosition
                            ? { objectPosition: slide.objectPosition }
                            : { objectPosition: "center" }
                        }
                        priority={idx === 1}
                      />
                      {/* Ambient gradient vignette */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />
                    </div>
                  ))}
                </div>

                {/* Dynamic Floating Caption Pill */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/65 px-3.5 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFBA24] animate-pulse" />
                  <span>{outreachImages[activeDotIndex].caption}</span>
                </div>

                {/* Navigation Chevrons (visible on hover or focus) */}
                <button
                  onClick={goToPrev}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white/80 border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:border-[#FFBA24] hover:text-[#FFBA24] hover:scale-110 active:scale-95 shadow-lg"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white/80 border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:border-[#FFBA24] hover:text-[#FFBA24] hover:scale-110 active:scale-95 shadow-lg"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/55 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                  {outreachImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      aria-label={`Jump to image ${idx + 1}`}
                      className={`h-2 transition-all duration-300 rounded-full ${
                        activeDotIndex === idx
                          ? "w-6 bg-[#FFBA24] shadow-[0_0_10px_rgba(255,186,36,0.7)]"
                          : "w-2 bg-white/40 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutreachSection;
