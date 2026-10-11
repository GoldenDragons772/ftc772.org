"use client";

import Link from "next/link";
import { useEffect } from "react";
import HexagonWaterfall from "./HexagonWaterfall";

const paths = [
  {
    tag: "FOR STUDENTS",
    title: "Meet the Team",
    description:
      "15 students from across South Carolina, united by robotics. See who builds the bots and leads the mission.",
    href: "/team",
  },
  {
    tag: "FOR THE CURIOUS",
    title: "See the Robots",
    description:
      "From Hydra to Botsune Miku — every machine we've built, every competition we've entered, and what's coming next.",
    href: "/robot",
  },
  {
    tag: "FOR SPONSORS",
    title: "Fuel the Dragons",
    description:
      "Fund our journey around the world. Tax-deductible tiers, your logo on the robot, and a partnership that inspires the next generation.",
    href: "/sponsor",
  },
];

const PathCards = () => {
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
    <section className="relative overflow-hidden py-12 md:py-16">
      <div className="container relative z-10">
        <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          <span className="text-[#FFBA24]">01</span> Start here
        </div>
        <h2
          className="text-4xl lowercase leading-[0.95] tracking-[0.06em] md:text-5xl lg:text-6xl"
          style={{ fontFamily: '"Supercharge Expand", sans-serif' }}
        >
          <span className="text-white">explore</span>
          <br />
          <span className="text-[#FFBA24]">our team.</span>
        </h2>

        <div className="reveal-stagger mt-12 grid gap-5 md:grid-cols-3">
          {paths.map((path, i) => (
            <Link
              key={i}
              href={path.href}
              className="path-card glass-panel group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[32px] p-8"
            >
              <HexagonWaterfall />

              <div className="relative z-10 flex items-start justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40 transition-colors duration-700 group-hover:text-black/70">
                  {path.tag}
                </span>
                <div className="path-arrow relative z-20 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/70 backdrop-blur-md transition-all duration-700 group-hover:border-black/30 group-hover:bg-black group-hover:text-[#FFBA24] group-hover:shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform origin-center transition-transform duration-500 ease-out group-hover:-rotate-45"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
              <div className="relative z-10">
                <h3
                  className="mb-3 text-3xl lowercase tracking-[0.06em] text-white transition-colors duration-700 md:text-4xl group-hover:text-black drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] group-hover:drop-shadow-none"
                  style={{ fontFamily: '"Supercharge Expand", sans-serif' }}
                >
                  {path.title.toLowerCase()}
                </h3>
                <p className="text-sm leading-relaxed text-white/70 transition-colors duration-700 group-hover:text-black/85 group-hover:font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)] group-hover:drop-shadow-none">
                  {path.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathCards;
