"use client";

import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#171717] pt-28 md:pt-32">
      <div className="absolute inset-0 bg-[#171717]" />
      <div className="absolute inset-0 bg-dragon-grid bg-[size:32px_32px] opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_30%,rgba(0,0,0,1),transparent)]" />
      <div className="absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-yellow/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-[#CE8D00]/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-4 flex items-center gap-4 text-xl font-light uppercase tracking-[0.4em] text-yellow">
              <span className="h-px w-12 bg-yellow/80" />
              FTC 772
            </div>
            <h1 className="font-display text-5xl lowercase leading-[0.9] tracking-[0.08em] text-white sm:text-6xl md:text-7xl">
              golden
              <span className="block text-yellow">dragons</span>
            </h1>
            <p className="mt-4 max-w-xl text-base font-normal text-white/80">
              The South Carolina Governor&apos;s School for Science and Mathematics robotics
              team. We build competitive robots, grow STEM leaders, and design with purpose.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/robot"
                className="rounded-sm bg-yellow px-6 py-3 font-semibold uppercase tracking-wider text-black shadow-[0_10px_30px_rgba(251,176,64,0.25)] transition hover:-translate-y-0.5"
              >
                Our Robots
              </Link>
              <Link
                href="#team"
                className="rounded-sm border border-yellow/60 px-6 py-3 font-semibold uppercase tracking-wider text-yellow transition hover:bg-[#FFBA24]/10"
              >
                Meet the Team
              </Link>
              <Link
                href="/sponsor"
                className="rounded-sm border border-yellow/60 px-6 py-3 font-semibold uppercase tracking-wider text-yellow transition hover:bg-[#FFBA24]/10"
              >
                Sponsor Us
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Years Competing", value: "15+" },
                { label: "Outreach Hours", value: "1,200+" },
                { label: "State Awards", value: "30+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-md border border-white/10 bg-[#171717] px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.35)]"
                >
                  <div className="text-2xl font-semibold text-yellow">{stat.value}</div>
                  <div className="text-xs font-normal uppercase tracking-[0.2em] text-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-md border border-yellow/30 bg-[#171717] p-3 shadow-[0_0_40px_rgba(251,176,64,0.12)]">
              <div className="relative h-[420px] overflow-hidden rounded-md border border-white/10">
                <Image
                  src="/images/team/team_2025.jpg"
                  alt="Golden Dragons team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Design + Strategy",
              detail:
                "Game breakdowns, rapid prototypes, and elegant drive systems.",
            },
            {
              title: "Software Precision",
              detail:
                "Path planning, vision pipelines, and operator-first controls.",
            },
            {
              title: "Community Impact",
              detail:
                "STEM nights, mentorship, and local partnership growth.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-md border border-white/10 bg-[#171717] p-5 shadow-[0_0_30px_rgba(0,0,0,0.35)]"
            >
              <div className="text-lg font-semibold text-white">
                {item.title}
              </div>
              <p className="mt-2 text-sm font-normal text-white/80">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
