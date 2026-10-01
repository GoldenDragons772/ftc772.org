"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const robots = [
  {
    name: "Botsune Miku I",
    season: "2025-26",
    id: "botsune",
    image: "/images/robot/render/Miku1.png",
    accentColor: "rgba(34, 211, 238, 0.35)",
    borderHover: "hover:border-cyan-400/40",
  },
  {
    name: "Botsune Miku II",
    season: "2025-26",
    id: "miku2",
    image: "/images/robot/render/Miku2.png",
    accentColor: "rgba(220, 38, 38, 0.35)",
    borderHover: "hover:border-red-500/40",
  },
  {
    name: "Hydra",
    season: "2024-25",
    id: "hydra",
    image: "/images/robot/render/HydraBlack.png",
    accentColor: "rgba(255, 186, 36, 0.35)",
    borderHover: "hover:border-[#FFBA24]/40",
  },
];

const RecentRobots = () => {
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
        {/* Section Header */}
        <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          <span className="text-[#FFBA24]">02</span> The Build
        </div>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2
            className="text-4xl lowercase leading-[0.95] tracking-[0.06em] md:text-5xl lg:text-6xl"
            style={{ fontFamily: '"Supercharge Expand", sans-serif' }}
          >
            <span className="text-white">Our latest</span>
            <br />
            <span className="text-[#FFBA24]">creations.</span>
          </h2>
          <Link href="/robot/" className="glass-btn-ghost mb-2">
            All Robots <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Robot Cards */}
        <div className="reveal-stagger mt-12 grid gap-6 md:grid-cols-3">
          {robots.map((robot, index) => (
            <Link
              key={index}
              href={`/robot#${robot.id}`}
              className={`liquid-glass-card glass-panel group flex flex-col overflow-hidden rounded-[26px] p-8 transition-all duration-500 hover:-translate-y-2 ${robot.borderHover}`}
            >
              {/* Image */}
              <div className="mb-8 flex flex-grow items-center justify-center">
                <div className="relative h-52 w-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[-2deg]">
                  <Image
                    src={robot.image}
                    alt={robot.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                    {robot.season}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-[#FFBA24] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <h3
                  className="text-xl lowercase tracking-[0.1em] text-white transition-colors duration-300 group-hover:text-[#FFBA24]"
                  style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
                >
                  {robot.name.toLowerCase()}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-white/50 transition-colors duration-300 group-hover:text-white/70">
                  <span>View Details</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: robot.accentColor }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentRobots;
