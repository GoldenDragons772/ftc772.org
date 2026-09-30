"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const sponsors = [
  { name: "GSSM", src: "/images/brands/gssm.png" },
  { name: "Duke Energy", src: "/images/brands/dukeEnergy.png" },
  { name: "Anderson Brass", src: "/images/brands/andersonbrass.png" },
  { name: "Foundation", src: "/images/brands/foundation.png" },
  { name: "ISI", src: "/images/brands/isi.png" },
  { name: "Sarji Law", src: "/images/brands/sarjilaw.png" },
  { name: "SC Admin", src: "/images/brands/scadmin.png" },
  { name: "Transnetyx", src: "/images/brands/transnetyx.png" },
  { name: "USCBH", src: "/images/brands/USCBH.png" },
];

const SponsorBand = () => {
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

    document.querySelectorAll(".reveal-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sponsor Marquee */}
      <div className="border-y border-white/5 py-8 bg-transparent">
        <div className="container mb-4 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFBA24]">
            ● Our Partners &amp; Sponsors
          </p>
          <Link
            href="/sponsor"
            className="text-xs font-medium uppercase tracking-[0.15em] text-white/50 hover:text-[#FFBA24] transition-colors"
          >
            Become a Partner →
          </Link>
        </div>
        <div className="marquee-viewport py-2">
          <div className="marquee-track items-center">
            {[...sponsors, ...sponsors].map((s, i) => (
              <div
                key={i}
                className="flex h-14 w-36 flex-shrink-0 items-center justify-center px-4"
              >
                <Image
                  src={s.src}
                  alt={s.name}
                  width={120}
                  height={48}
                  className="max-h-10 w-auto object-contain brightness-0 invert opacity-75 transition-all duration-300 hover:opacity-100 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsor CTA Band */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container relative z-10">
          <div className="reveal-up glass-panel-strong flex flex-col items-center gap-10 rounded-[32px] px-8 sm:px-12 py-16 md:py-20 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Image
                src="/images/logo/logo.png"
                alt="Golden Dragons logo"
                width={64}
                height={64}
                className="flex-shrink-0"
              />
              <div>
                <div className="mb-4 sm:mb-5 flex items-center justify-center md:justify-start gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  <span className="text-[#FFBA24]">04</span> Sponsor the season
                </div>
                <h2
                  className="text-3xl lowercase leading-[1.05] tracking-[0.06em] md:text-4xl lg:text-5xl mb-3 md:mb-0"
                  style={{ fontFamily: '"Supercharge Expand", sans-serif' }}
                >
                  <span className="text-white">fund our journey</span>
                  <br />
                  <span className="text-[#FFBA24]">around the world.</span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-3 md:mt-0">
              <Link href="/sponsor" className="glass-btn-solid">
                Become a Sponsor <span className="text-lg">→</span>
              </Link>
              <Link
                href="mailto:contact@ftc772.org"
                target="_blank"
                className="glass-btn-ghost"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SponsorBand;
