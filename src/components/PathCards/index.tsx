"use client";

import Link from "next/link";
import { useEffect } from "react";

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
    <section className="relative overflow-hidden py-20 md:py-28">
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
              className="path-card glass-panel group flex min-h-[320px] flex-col justify-between rounded-[26px] p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40 path-muted transition-colors duration-500">
                  {path.tag}
                </span>
                <div className="path-arrow flex h-11 w-11 items-center justify-center rounded-full border border-current text-white/60">
                  →
                </div>
              </div>
              <div>
                <h3
                  className="mb-3 text-3xl lowercase tracking-[0.06em] md:text-4xl"
                  style={{ fontFamily: '"Supercharge Expand", sans-serif' }}
                >
                  {path.title.toLowerCase()}
                </h3>
                <p className="path-muted text-sm leading-relaxed text-white/60 transition-colors duration-500">
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
