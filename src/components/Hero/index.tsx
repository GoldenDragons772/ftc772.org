"use client";

import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">

      <div className="container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-4 flex items-center gap-4 text-xl font-light uppercase tracking-[0.4em] text-yellow">
              <span className="h-px w-12 bg-yellow/80" />
              FTC 772
              <span className="h-px w-12 bg-yellow/80" />
            </div>
            <h1 className="text-5xl lowercase leading-[0.9] tracking-[0.08em] text-yellow sm:text-6xl md:text-7xl" style={{ fontFamily: "\"Supercharge Expand\", sans-serif" }}>
              golden
              <span className="block text-white">dragons</span>
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
                href="/team"
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
                { label: "Years Competing", value: "18+" },
                { label: "Outreach Hours", value: "3,000+" },
                { label: "Competition Awards", value: "14" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#FFBA24]/20 bg-[#0c0c0c]/60 backdrop-blur-[2px] px-4 py-3 shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)]"
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
            <div className="rounded-2xl border border-yellow/30 bg-[#0c0c0c]/60 backdrop-blur-[2px] p-3 shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <div className="relative h-[400px] overflow-hidden rounded-md border border-white/10">
                <Image
                  src="/images/team/team_2026_alt.jpg"
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
              title: "Impact",
              detail:
                "Changing the way that students view STEM and robotics on a personal level.",
            },
            {
              title: "Consistency",
              detail:
                "Developing robots that perform well in 80%+ of matches and do not break down at competition.",
            },
            {
              title: "Sustainability",
              detail:
                "A team where our junior members feel confident and prepared enough to fully lead the team independently. ",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#0c0c0c]/60 backdrop-blur-[2px] p-5 shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)]"
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
