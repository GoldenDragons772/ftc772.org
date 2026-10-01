"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

interface Tier {
  id: string;
  name: string;
  price: string;
  shortDesc: string;
  badge: string;
  primaryColor: string;
  accentColor: string;
  glowColor: string;
  gradient: string;
  bgGradient: string;
  benefits: boolean[];
}

const benefitsList = [
  "Socials Story Shoutout",
  "Logo on Website",
  "Portfolio Acknowledgement",
  "Logo on Robot",
  "Logo on Team Merch",
  "Monthly Updates",
  "End of Season Report",
  "Golden Dragons Gift Bags!",
  "Custom Engraved Metal Thank You!",
];

const tiers: Tier[] = [
  {
    id: "silver",
    name: "Silver",
    price: "$100 – $499",
    shortDesc: "Foundational robotics support including team socials shoutout, website placement, and portfolio acknowledgement.",
    badge: "Tier 01",
    primaryColor: "#E2E8F0",
    accentColor: "#94A3B8",
    glowColor: "rgba(226, 232, 240, 0.35)",
    gradient: "linear-gradient(135deg, #94A3B8 0%, #CBD5E1 50%, #FFFFFF 100%)",
    bgGradient: "radial-gradient(circle 650px at 50% 15%, rgba(226, 232, 240, 0.15) 0%, rgba(148, 163, 184, 0.05) 50%, transparent 80%)",
    benefits: [true, true, true, false, false, false, false, false, false],
  },
  {
    id: "gold",
    name: "Gold",
    price: "$500 – $1,499",
    shortDesc: "Major robotics support directly funding precision parts, featuring your logo on our competition robot and team merchandise.",
    badge: "Tier 02 · Best Value",
    primaryColor: "#FFBA24",
    accentColor: "#FFD876",
    glowColor: "rgba(255, 186, 36, 0.45)",
    gradient: "linear-gradient(135deg, #D97706 0%, #FFBA24 50%, #FFE58F 100%)",
    bgGradient: "radial-gradient(circle 650px at 50% 15%, rgba(255, 186, 36, 0.18) 0%, rgba(206, 141, 0, 0.06) 50%, transparent 80%)",
    benefits: [true, true, true, true, true, false, false, false, false],
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "$1,500 – $2,499",
    shortDesc: "Championship partnership featuring your logo on the robot and merch, plus exclusive monthly progress updates and end-of-season reports.",
    badge: "Tier 03",
    primaryColor: "#00DDFF",
    accentColor: "#66EAFF",
    glowColor: "rgba(0, 221, 255, 0.45)",
    gradient: "linear-gradient(135deg, #0099DD 0%, #00DDFF 50%, #E0F9FF 100%)",
    bgGradient: "radial-gradient(circle 650px at 50% 15%, rgba(0, 221, 255, 0.22) 0%, rgba(0, 153, 221, 0.07) 50%, transparent 80%)",
    benefits: [true, true, true, true, true, true, true, false, false],
  },
  {
    id: "mythic",
    name: "Mythic",
    price: "$2,500+",
    shortDesc: "Premier title sponsorship featuring all deliverables, exclusive Golden Dragons gift bags, and a custom engraved metal thank you plaque.",
    badge: "Tier 04 · Ultimate",
    primaryColor: "#A855F7",
    accentColor: "#C084FC",
    glowColor: "rgba(168, 85, 247, 0.45)",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #E9D5FF 100%)",
    bgGradient: "radial-gradient(circle 650px at 50% 15%, rgba(168, 85, 247, 0.2) 0%, rgba(124, 58, 237, 0.07) 50%, transparent 80%)",
    benefits: [true, true, true, true, true, true, true, true, true],
  },
];

const fundingPurposes = [
  {
    amount: "$50,000+ USD",
    title: "Travel & Lodging",
    desc: "Transportation, lodging/hotels, food and nutrition for State and World Championships.",
    icon: "✈️",
  },
  {
    amount: "$15,000 USD",
    title: "Mechanical Parts",
    desc: "Precision vendor hardware from GoBilda, MiSUMI, Rev Robotics, and Amazon.",
    icon: "⚙️",
  },
  {
    amount: "$3,000 USD",
    title: "Team Merchandise & Accessories",
    desc: "Team jerseys, stickers, hats, safety gear, and collectible competition pins.",
    icon: "👕",
  },
  {
    amount: "$1,250 USD",
    title: "Handouts & Posters",
    desc: "Outreach documentation, advertisements for 772, and flyers for international competitions.",
    icon: "📄",
  },
  {
    amount: "$500 USD",
    title: "Filming Equipment",
    desc: "Microphones, match cameras, and mounts/tripods for scouting and outreach media.",
    icon: "🎥",
  },
];

const currentSponsors = [
  {
    name: "GSSM & GSSM Foundation",
    href: "https://www.scgssm.org",
    foundationHref: "https://www.scgssm.org/who-we-are/gssm-foundation",
    src: "/images/brands/gssm.png",
    foundationSrc: "/images/brands/foundation.png",
    featured: true,
    badge: "Founding Sponsors",
    padding: "p-2 sm:p-2.5",
  },
  {
    name: "Duke Energy",
    href: "https://www.duke-energy.com/home",
    src: "/images/brands/dukeEnergy.png",
    padding: "p-1.5 sm:p-2",
  },
  { name: "USCB Honors", href: "https://www.uscb.edu/academics/honors/index.html", src: "/images/brands/USCBH.png", padding: "px-2 py-3.5 sm:px-3 sm:py-4" },
  { name: "SC Admin", href: "https://www.admin.sc.gov/", src: "/images/brands/scadmin.png", padding: "p-2 sm:p-2.5" },
  { name: "Sarji Law Firm", href: "https://sarjilawfirm.com", src: "/images/brands/sarjilaw.png", padding: "p-2 sm:p-2.5" },
  { name: "ISI Robots", href: "https://isirobots.com/", src: "/images/brands/isi.png", padding: "p-3 sm:p-4" },
  { name: "Golden Dragon Restaurant", href: "https://www.goldendragon2hartsville.com/", src: "/images/brands/gdlogo.png", padding: "p-2 sm:p-2.5" },
  { name: "Transnetyx", href: "https://transnetyx.com/", src: "/images/brands/transnetyx.png", padding: "p-2 sm:p-2.5" },
  { name: "Anderson Brass", href: "https://andersonbrass.com/", src: "/images/brands/andersonbrass.png", padding: "p-2.5 sm:p-3" },
];

export default function SponsorPageClient() {
  const [activeTierIndex, setActiveTierIndex] = useState(1); // Default to Gold
  const [showMatrix, setShowMatrix] = useState(false);

  const currentTier = tiers[activeTierIndex];

  return (
    <div
      className="relative min-h-screen overflow-hidden transition-all duration-700 ease-out"
      style={{
        background: currentTier.bgGradient,
      }}
    >
      {/* Background Grid Hill matching other pages */}
      <div className="pointer-events-none absolute inset-0 bg-triangle-mesh bg-cover bg-top opacity-35 blur-[2px] scale-[1.02]" />

      {/* Dynamic ambient orb matching current tier theme */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full blur-[140px] transition-all duration-700 opacity-60"
        style={{
          background: `radial-gradient(circle, ${currentTier.primaryColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <Breadcrumb
          pageName="Our Packages"
          description="Invest in the next generation of engineers, designers, and STEM pioneers. Explore our tiered sponsorship opportunities below."
          titleClassName="text-white text-4xl sm:text-5xl md:text-6xl tracking-[0.08em]"
          subtitle="Partnership Opportunities"
          subtitleClassName="text-xs tracking-[0.4em] transition-colors duration-500"
          style={{ color: currentTier.primaryColor }}
        />

        <div className="container pb-28 pt-4">
          {/* Quick CTA banner */}
          <div className="mb-14 flex justify-center">
            <a
              href="#how-to-sponsor"
              className="group flex items-center gap-4 rounded-full border px-8 py-3.5 backdrop-blur-xl transition-all duration-300"
              style={{
                borderColor: `${currentTier.primaryColor}55`,
                backgroundColor: "rgba(10, 10, 10, 0.7)",
                boxShadow: `0 10px 30px -10px ${currentTier.glowColor}`,
              }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full animate-ping"
                style={{ backgroundColor: currentTier.primaryColor }}
              />
              <span className="text-sm font-semibold tracking-wider uppercase text-white">
                Become a Sponsor — 501(c)(3) Tax Deductible
              </span>
              <span
                className="text-lg transition-transform group-hover:translate-x-1"
                style={{ color: currentTier.primaryColor }}
              >
                ↓
              </span>
            </a>
          </div>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* INTERACTIVE SPONSOR TIER SLIDER                       */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section className="mb-24">
            <div className="mx-auto max-w-4xl">
              {/* Slider Header */}
              <div className="mb-8 text-center">
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lowercase tracking-wider text-white"
                  style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
                >
                  choose your tier
                </h2>
                <p className="mt-2 text-sm text-white/60">
                  Slide or click through the tiers to preview benefits, branding opportunities, and package perks.
                </p>
              </div>

              {/* Tier Navigation Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-1.5 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl mb-6 shadow-2xl">
                {tiers.map((tier, idx) => {
                  const isActive = idx === activeTierIndex;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setActiveTierIndex(idx)}
                      className={`relative flex flex-col items-center justify-center rounded-xl py-3 px-2 text-center transition-all duration-300 ${
                        isActive
                          ? "text-black shadow-lg"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                      style={{
                        background: isActive ? tier.gradient : "transparent",
                        boxShadow: isActive ? `0 8px 24px -6px ${tier.glowColor}` : "none",
                      }}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                        {tier.id === "silver" && "Entry"}
                        {tier.id === "gold" && "Best Value"}
                        {tier.id === "platinum" && "Premier"}
                        {tier.id === "mythic" && "Ultimate"}
                      </span>
                      <span
                        className="text-base sm:text-lg font-bold lowercase tracking-wider mt-0.5"
                        style={{ fontFamily: '"Supercharge Straight", sans-serif' }}
                      >
                        {tier.name.toLowerCase()}
                      </span>
                      <span className="text-[11px] font-semibold tracking-tight mt-0.5 opacity-90 lowercase">
                        {tier.price.replace(/0/g, "o")}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Range Slider Track with Golden Dragons Logo Thumb */}
              <div className="mb-12 px-2 sm:px-4">
                <div className="relative mx-5 sm:mx-6 pt-5 pb-3">
                  {/* Track Background Bar */}
                  <div className="relative h-2.5 w-full rounded-full bg-white/10 backdrop-blur-md overflow-hidden border border-white/10">
                    {/* Glowing Progress Fill */}
                    <div
                      className="absolute left-0 top-0 bottom-0 rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: `${(activeTierIndex / (tiers.length - 1)) * 100}%`,
                        background: currentTier.gradient,
                        boxShadow: `0 0 16px ${currentTier.glowColor}`,
                      }}
                    />
                  </div>

                  {/* Step Nodes along the track */}
                  <div className="absolute top-5 left-0 right-0 h-2.5 pointer-events-none">
                    {tiers.map((t, idx) => {
                      const isPassed = idx <= activeTierIndex;
                      const pct = (idx / (tiers.length - 1)) * 100;
                      return (
                        <div
                          key={t.id}
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full transition-all duration-500"
                          style={{
                            left: `${pct}%`,
                            backgroundColor: isPassed ? t.primaryColor : "rgba(255,255,255,0.25)",
                            boxShadow: isPassed ? `0 0 10px ${t.glowColor}` : "none",
                          }}
                        />
                      );
                    })}
                  </div>

                  {/* Golden Dragons Logo Slider Thumb */}
                  <div
                    className="absolute top-5 pointer-events-none transition-all duration-500 ease-out z-20"
                    style={{
                      left: `${(activeTierIndex / (tiers.length - 1)) * 100}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0a0a0c]/95 border backdrop-blur-xl transition-all duration-500 hover:scale-110"
                      style={{
                        borderColor: `${currentTier.primaryColor}99`,
                        boxShadow: `0 0 24px -2px ${currentTier.glowColor}, 0 8px 18px rgba(0,0,0,0.85), inset 0 1px 1px rgba(255,255,255,0.3)`,
                      }}
                    >
                      {/* Subtle ambient tier glow inside disk */}
                      <div
                        className="absolute inset-1 rounded-full opacity-25 blur-sm transition-colors duration-500"
                        style={{ background: currentTier.primaryColor }}
                      />
                      {/* Golden Dragon Masked Silhouette changing color per tier */}
                      <div
                        className="relative w-7 h-7 sm:w-8 sm:h-8 transition-all duration-500"
                        style={{
                          background: currentTier.gradient,
                          WebkitMaskImage: "url('/images/logo/logo.png')",
                          maskImage: "url('/images/logo/logo.png')",
                          WebkitMaskSize: "contain",
                          maskSize: "contain",
                          WebkitMaskRepeat: "no-repeat",
                          maskRepeat: "no-repeat",
                          WebkitMaskPosition: "center",
                          maskPosition: "center",
                          filter: `drop-shadow(0 0 8px ${currentTier.glowColor})`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Native Transparent Slider for full Drag & Keyboard Accessibility */}
                  <input
                    type="range"
                    min="0"
                    max="3"
                    step="1"
                    value={activeTierIndex}
                    onChange={(e) => setActiveTierIndex(Number(e.target.value))}
                    aria-label="Sponsorship Tier Slider"
                    className="absolute top-0 left-0 w-full h-12 opacity-0 cursor-pointer z-30"
                  />

                  {/* Milestone Clickable Labels below slider - Perfectly Centered to Slider Positions */}
                  <div className="relative h-11 mt-6">
                    {tiers.map((tier, idx) => {
                      const isActive = idx === activeTierIndex;
                      const pct = (idx / (tiers.length - 1)) * 100;
                      return (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setActiveTierIndex(idx)}
                          className={`absolute top-0 -translate-x-1/2 flex flex-col items-center text-center transition-all duration-300 ${
                            isActive
                              ? "font-bold scale-105"
                              : "text-white/40 hover:text-white/80"
                          }`}
                          style={{
                            left: `${pct}%`,
                            color: isActive ? tier.primaryColor : undefined,
                          }}
                        >
                          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                            {tier.name}
                          </span>
                          <span className="text-[10px] opacity-75 tracking-tight lowercase whitespace-nowrap">
                            {tier.id === "silver"
                              ? "$1oo+"
                              : tier.id === "gold"
                              ? "$5oo+"
                              : tier.id === "platinum"
                              ? "$1,5oo+"
                              : "$2,5oo+"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Active Tier Interactive Card */}
              <div
                className="relative overflow-hidden rounded-[32px] border p-8 md:p-12 transition-all duration-500 shadow-2xl backdrop-blur-2xl"
                style={{
                  backgroundColor: "rgba(12, 12, 12, 0.75)",
                  borderColor: `${currentTier.primaryColor}55`,
                  boxShadow: `0 30px 80px -20px ${currentTier.glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                }}
              >
                {/* Glowing Corner Ambient */}
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-40 transition-all duration-500"
                  style={{ backgroundColor: currentTier.primaryColor }}
                />

                {/* Tier Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-8 border-b border-white/10">
                  <div className="min-w-0 flex-1">
                    <span
                      className="inline-block rounded-full px-3.5 py-1 text-xs font-black uppercase tracking-widest text-black mb-3 shadow-md"
                      style={{ background: currentTier.gradient }}
                    >
                      {currentTier.badge}
                    </span>
                    <h3
                      className="text-3xl sm:text-4xl md:text-5xl lowercase tracking-wider text-white"
                      style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
                    >
                      {currentTier.name.toLowerCase()} package
                    </h3>
                    <p className="mt-2 max-w-xl text-sm sm:text-base text-white/70 leading-relaxed">
                      {currentTier.shortDesc}
                    </p>
                  </div>

                  {/* Compact Right-Aligned Investment Box */}
                  <div className="flex flex-col items-end text-right flex-shrink-0 self-start sm:self-center">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-white/40 mb-1">
                      Investment
                    </span>
                    <div
                      className="tier-price-display text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-bold tracking-tight whitespace-nowrap lowercase"
                      style={{
                        ['--tier-gradient' as any]: currentTier.gradient,
                        ['--tier-color' as any]: currentTier.primaryColor,
                      }}
                    >
                      {currentTier.price.replace(/0/g, "o")}
                    </div>
                  </div>
                </div>

                {/* Benefits List for Current Tier */}
                <div className="py-8">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50 mb-6">
                    Package Benefits &amp; Deliverables
                  </h4>
                  <div className="grid gap-3.5 sm:grid-cols-1 md:grid-cols-2">
                    {benefitsList.map((benefit, bIdx) => {
                      const isIncluded = currentTier.benefits[bIdx];
                      return (
                        <div
                          key={bIdx}
                          className={`flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 ${
                            isIncluded
                              ? "bg-white/[0.04] border border-white/10"
                              : "bg-white/[0.01] border border-white/5 opacity-35"
                          }`}
                        >
                          <div
                            className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-black transition-all ${
                              isIncluded
                                ? "text-black shadow-md"
                                : "border border-white/20 text-white/30"
                            }`}
                            style={{
                              background: isIncluded ? currentTier.gradient : "transparent",
                              boxShadow: isIncluded ? `0 0 16px ${currentTier.glowColor}` : "none",
                            }}
                          >
                            {isIncluded ? "✓" : "—"}
                          </div>
                          <span
                            className={`text-sm leading-relaxed ${
                              isIncluded ? "text-white font-medium" : "text-white/40 line-through"
                            }`}
                          >
                            {benefit}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTierIndex((prev) => Math.max(0, prev - 1))}
                      disabled={activeTierIndex === 0}
                      className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white hover:border-white/40 disabled:opacity-30 disabled:pointer-events-none transition-all"
                    >
                      ← Previous Tier
                    </button>
                    <button
                      onClick={() => setActiveTierIndex((prev) => Math.min(tiers.length - 1, prev + 1))}
                      disabled={activeTierIndex === tiers.length - 1}
                      className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white hover:border-white/40 disabled:opacity-30 disabled:pointer-events-none transition-all"
                    >
                      Next Tier →
                    </button>
                  </div>

                  <a
                    href="#how-to-sponsor"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-xs font-black uppercase tracking-[0.15em] text-black transition-all duration-300 hover:scale-105 shadow-lg"
                    style={{
                      background: currentTier.gradient,
                      boxShadow: `0 10px 25px -5px ${currentTier.glowColor}`,
                    }}
                  >
                    Select {currentTier.name} Tier <span className="text-base">→</span>
                  </a>
                </div>
              </div>

              {/* Full Comparison Matrix Toggle */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowMatrix(!showMatrix)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                >
                  <span>{showMatrix ? "Hide" : "View"} Full Side-by-Side Comparison Table</span>
                  <span className="text-base">{showMatrix ? "▲" : "▼"}</span>
                </button>
              </div>

              {/* Full Comparison Matrix (Side-by-Side Table from Packet Image) */}
              {showMatrix && (
                <div className="mt-6 overflow-x-auto rounded-[24px] border border-white/10 bg-black/80 backdrop-blur-xl p-4 sm:p-6 shadow-2xl">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/15">
                        <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-white/50 w-2/5">
                          BENEFIT
                        </th>
                        {tiers.map((t) => (
                          <th
                            key={t.id}
                            className="py-4 px-3 text-center text-xs font-bold uppercase tracking-wider"
                            style={{ color: t.primaryColor }}
                          >
                            <div>{t.name}</div>
                            <div className="text-[10px] font-normal opacity-70 lowercase">{t.price}</div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {benefitsList.map((benefit, bIdx) => (
                        <tr
                          key={bIdx}
                          className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="py-3.5 px-4 text-xs text-white/80 uppercase tracking-wide">
                            {benefit}
                          </td>
                          {tiers.map((t) => (
                            <td key={t.id} className="py-3.5 px-3 text-center">
                              {t.benefits[bIdx] ? (
                                <span
                                  className="inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-black text-black shadow-sm"
                                  style={{ background: t.gradient }}
                                >
                                  ✓
                                </span>
                              ) : (
                                <span className="inline-block h-1 w-3 rounded-full bg-white/20" />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* FUNDING PURPOSES / WHERE YOUR DONATION GOES          */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section className="mb-24">
            <div className="mb-10 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFBA24]">
                ● Team Budget &amp; Resource Allocation
              </span>
              <h2
                className="mt-2 text-3xl sm:text-4xl md:text-5xl lowercase tracking-wider text-white"
                style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
              >
                where your funds go
              </h2>
              <p className="mt-3 mx-auto max-w-2xl text-sm sm:text-base text-white/70">
                Our team needs a variety of funds that serve a lot of different purposes to sustain a
                world-class competitive FTC robotics program.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fundingPurposes.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel group relative overflow-hidden rounded-[28px] p-6 transition-all duration-300 hover:border-[#FFBA24]/50 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span
                      className="text-xl font-bold tracking-tight text-[#FFBA24] lowercase"
                      style={{ fontFamily: '"Supercharge Straight", sans-serif' }}
                    >
                      {item.amount.toLowerCase().replace(/0/g, "o")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* CURRENT SPONSORS / PARTNERS WALL                     */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section className="mb-24">
            <div className="mb-10 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFBA24]">
                ● Our Generous Partners
              </span>
              <h2
                className="mt-2 text-3xl sm:text-4xl md:text-5xl lowercase tracking-wider text-white"
                style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
              >
                current sponsors
              </h2>
              <p className="mt-3 mx-auto max-w-xl text-sm text-white/70">
                We are immensely grateful to the organizations whose ongoing support powers our robot designs,
                machining, and outreach initiatives.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {currentSponsors.map((s, idx) => {
                const isFeatured = (s as any).featured;

                if (isFeatured && (s as any).foundationSrc) {
                  return (
                    <div
                      key={idx}
                      className="glass-panel group relative col-span-2 sm:col-span-2 md:col-span-2 h-40 sm:h-44 p-5 sm:p-6 border-[#FFBA24]/30 bg-black/75 shadow-[0_10px_30px_-10px_rgba(255,186,36,0.15)] flex flex-col items-center justify-between rounded-[24px] transition-all duration-300 hover:border-[#FFBA24]/50 hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(255,186,36,0.25)] overflow-hidden"
                    >
                      {/* Subtle inner hover glow */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Featured badge */}
                      <span className="absolute top-3 left-4 rounded-full bg-[#FFBA24]/15 border border-[#FFBA24]/30 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#FFBA24]">
                        ★ {(s as any).badge || "Founding Sponsors"}
                      </span>

                      {/* Logo Container for both GSSM and GSSM Foundation */}
                      <div className="relative flex-1 w-full flex items-center justify-center my-auto min-h-[82px] sm:min-h-[96px] max-h-[104px] px-2 sm:px-4">
                        <div className="flex w-full h-full items-center justify-center gap-3 sm:gap-6">
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit GSSM website"
                            className="relative flex-1 h-full max-h-[72px] sm:max-h-[84px] transition-transform duration-200 hover:scale-105"
                          >
                            <Image
                              src={s.src}
                              alt="GSSM"
                              fill
                              sizes="(max-width: 640px) 160px, 220px"
                              className="object-contain object-center brightness-0 invert opacity-80 transition-all duration-300 hover:opacity-100 p-1"
                            />
                          </a>
                          <div className="h-10 w-px bg-white/10 flex-shrink-0" />
                          <a
                            href={(s as any).foundationHref || s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit GSSM Foundation website"
                            className="relative flex-1 h-full max-h-[72px] sm:max-h-[84px] transition-transform duration-200 hover:scale-105"
                          >
                            <Image
                              src={(s as any).foundationSrc}
                              alt="GSSM Foundation"
                              fill
                              sizes="(max-width: 640px) 160px, 220px"
                              className="object-contain object-center brightness-0 invert opacity-80 transition-all duration-300 hover:opacity-100 p-1"
                            />
                          </a>
                        </div>
                      </div>

                      {/* Label with dual links */}
                      <div className="mt-1 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-center line-clamp-1 w-full px-1">
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-[#FFBA24] transition-colors"
                        >
                          GSSM
                        </a>
                        <span className="text-white/30">·</span>
                        <a
                          href={(s as any).foundationHref || s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-[#FFBA24] transition-colors"
                        >
                          GSSM Foundation
                        </a>
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel group relative flex flex-col items-center justify-between rounded-[24px] transition-all duration-300 hover:border-[#FFBA24]/50 hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(255,186,36,0.25)] overflow-hidden h-36 sm:h-40 p-4 sm:p-5"
                  >
                    {/* Subtle inner hover glow */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Logo Container */}
                    <div className="relative flex-1 w-full flex items-center justify-center my-auto min-h-[64px] max-h-[76px] px-2">
                      <div className="relative w-full h-full">
                        <Image
                          src={s.src}
                          alt={s.name}
                          fill
                          sizes="(max-width: 640px) 140px, 200px"
                          className={`object-contain object-center brightness-0 invert opacity-80 transition-all duration-300 group-hover:opacity-100 ${s.padding}`}
                        />
                      </div>
                    </div>

                    {/* Label */}
                    <span className="mt-1 font-semibold uppercase tracking-wider text-center line-clamp-1 w-full px-1 transition-colors text-[11px] text-white/50 group-hover:text-[#FFBA24]">
                      {s.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* HOW TO SPONSOR / 6-STEP DONATION GUIDE               */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section id="how-to-sponsor" className="scroll-mt-32">
            <div className="mx-auto max-w-3xl glass-panel-strong relative overflow-hidden rounded-[32px] p-8 md:p-14">
              <div className="mb-8 text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFBA24]">
                  ● Step-by-Step Instructions
                </span>
                <h2
                  className="mt-2 text-3xl sm:text-4xl lowercase tracking-wider text-white"
                  style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
                >
                  how to donate
                </h2>
                <p className="mt-2 text-sm text-white/70">
                  All donations are tax-deductible through the South Carolina Governor&apos;s School for
                  Science &amp; Mathematics Foundation (501(c)(3) nonprofit).
                </p>
              </div>

              <ol className="relative border-l border-[#FFBA24]/30 space-y-8 ml-3 md:ml-6 mb-10">
                {[
                  <span key="1">
                    Navigate to the official GSSM donation portal at{" "}
                    <a
                      href="https://scgssm.org/donate/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#FFBA24] hover:underline underline-offset-4 transition"
                    >
                      https://scgssm.org/donate/
                    </a>
                  </span>,
                  <span key="2">Select your desired donation amount and billing type (one-time or recurring).</span>,
                  <span key="3">
                    Click the &quot;I want to support&quot; dropdown menu, and select{" "}
                    <span className="font-bold text-white">GSSM Robotics</span>.
                  </span>,
                  <span key="4">Select whether you are donating on behalf of an organization or prefer to remain anonymous.</span>,
                  <span key="5">
                    In the &quot;Comment&quot; field, specify{" "}
                    <span className="font-bold text-[#FFBA24]">&quot;Team #772 Golden Dragons&quot;</span> as the designated
                    recipient of your contribution.
                  </span>,
                  <span key="6">Enter your contact and billing information to complete your payment!</span>,
                ].map((step, idx) => (
                  <li key={idx} className="pl-8 relative">
                    <span
                      className="absolute -left-[18px] top-0 flex items-center justify-center w-9 h-9 rounded-full bg-black border border-[#FFBA24] text-[#FFBA24] text-sm font-bold shadow-[0_0_15px_rgba(255,186,36,0.3)]"
                      style={{ fontFamily: '"Supercharge Straight", sans-serif' }}
                    >
                      {idx + 1}
                    </span>
                    <p className="text-base text-white/85 leading-relaxed pt-1">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-white/10">
                <a
                  href="https://scgssm.org/donate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto glass-btn-solid justify-center"
                >
                  Open Donation Portal <span className="text-lg">↗</span>
                </a>
                <a
                  href="/docs/sponsorship-packet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto glass-btn-ghost justify-center inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-[#FFBA24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Open Sponsorship Packet (PDF)</span>
                  <span className="text-sm">↗</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
