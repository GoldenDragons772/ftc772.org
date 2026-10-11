"use client";

import { useState, useEffect, useRef } from "react";
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

// Clean 2x3 Grid with 6 FTC-relevant funding items
const fundingPurposes = [
  {
    amount: "$50,000+ USD",
    title: "Travel & Lodging",
    desc: "Transportation, lodging/hotels, food and nutrition for State and World Championships.",
    iconType: "travel",
  },
  {
    amount: "$15,000 USD",
    title: "Mechanical Parts",
    desc: "Precision vendor hardware from GoBilda, MiSUMI, Rev Robotics, and Amazon.",
    iconType: "mechanical",
  },
  {
    amount: "$3,000 USD",
    title: "Team Merchandise & Accessories",
    desc: "Team jerseys, stickers, hats, safety gear, and collectible competition pins.",
    iconType: "merchandise",
  },
  {
    amount: "$2,500 USD",
    title: "Field & Game Elements",
    desc: "Official FIRST competition perimeter tiles, game pieces, and scoring arena hardware.",
    iconType: "field",
  },
  {
    amount: "$1,250 USD",
    title: "Handouts & Posters",
    desc: "Outreach documentation, advertisements for 772, and flyers for international competitions.",
    iconType: "handouts",
  },
  {
    amount: "$500 USD",
    title: "Filming Equipment",
    desc: "Microphones, match cameras, and mounts/tripods for scouting and outreach media.",
    iconType: "filming",
  },
];

const renderPurposeIcon = (iconType: string) => {
  switch (iconType) {
    case "travel":
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      );
    case "mechanical":
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "merchandise":
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      );
    case "field":
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4M5 4h14a1 1 0 011 1v4a6 6 0 01-6 6h-4a6 6 0 01-6-6V5a1 1 0 011-1zm-2 2H2a1 1 0 00-1 1v1a4 4 0 004 4h.5M21 6h1a1 1 0 011 1v1a4 4 0 01-4 4h-.5" />
        </svg>
      );
    case "handouts":
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case "filming":
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
};

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

const TIER_RGB: [number, number, number][] = [
  [226, 232, 240], // Silver #E2E8F0
  [255, 186, 36],  // Gold #FFBA24
  [0, 221, 255],   // Platinum #00DDFF
  [168, 85, 247],  // Mythic #A855F7
];

function lerpVal(a: number, b: number, t: number): number {
  return Math.round(a + (b - a) * t);
}

function buildThemeFromRgb(r: number, g: number, b: number) {
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  const rgba = (alpha: number) => `rgba(${r}, ${g}, ${b}, ${alpha})`;

  const rHigh = Math.min(255, Math.round(r * 1.15 + 20));
  const gHigh = Math.min(255, Math.round(g * 1.15 + 20));
  const bHigh = Math.min(255, Math.round(b * 1.15 + 20));
  const rLow = Math.max(0, Math.round(r * 0.72));
  const gLow = Math.max(0, Math.round(g * 0.72));
  const bLow = Math.max(0, Math.round(b * 0.72));

  const gradient = `linear-gradient(135deg, rgb(${rLow}, ${gLow}, ${bLow}) 0%, rgb(${r}, ${g}, ${b}) 50%, rgb(${rHigh}, ${gHigh}, ${bHigh}) 100%)`;
  const glow = `rgba(${r}, ${g}, ${b}, 0.45)`;
  const bgGradient = `radial-gradient(circle 750px at 50% 15%, rgba(${r}, ${g}, ${b}, 0.18) 0%, rgba(${rLow}, ${gLow}, ${bLow}, 0.05) 50%, transparent 80%)`;

  return { hex, r, g, b, rgba, gradient, glow, bgGradient };
}

/* ─── SLIDER DRAGON SPARKS & TIER FLAMES ─── */
function SliderDragonEffects({ tierIndex, color }: { tierIndex: number; color: string }) {
  // Silver: clean minimal, absolutely no effects
  if (tierIndex === 0) return null;

  const isGold = tierIndex === 1;
  const isPlatinum = tierIndex === 2;
  const isMythic = tierIndex === 3;

  return (
    <>
      {/* ─── GOLD: SLIGHT SPARK EFFECT LOOP (Gold matching sparks, no flame) ─── */}
      {isGold && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
          {/* Subtle micro-sparks crackling around dragon crest */}
          <div
            className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
            style={{
              top: "-2px",
              left: "18%",
              background: "#FFBA24",
              boxShadow: "0 0 3px #FFFFFF, 0 0 7px #FFBA24, 0 0 10px rgba(255, 186, 36, 0.7)",
              animation: "sparkCrackle 1.3s infinite 0.1s",
            }}
          />
          <div
            className="absolute w-1 h-1 rounded-full pointer-events-none"
            style={{
              top: "20%",
              right: "-3px",
              background: "#FFE58F",
              boxShadow: "0 0 3px #FFFFFF, 0 0 6px #FFBA24",
              animation: "sparkCrackle 1.1s infinite 0.4s",
            }}
          />
          <div
            className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
            style={{
              bottom: "-2px",
              right: "22%",
              background: "#FFD876",
              boxShadow: "0 0 3px #FFFFFF, 0 0 7px #FFBA24",
              animation: "sparkCrackle 1.4s infinite 0.7s",
            }}
          />
          <div
            className="absolute w-1 h-1 rounded-full pointer-events-none"
            style={{
              bottom: "24%",
              left: "-3px",
              background: "#FFBA24",
              boxShadow: "0 0 3px #FFFFFF, 0 0 6px #FFBA24",
              animation: "sparkCrackle 1.2s infinite 0.25s",
            }}
          />

          {/* Gentle orbiting spark loop */}
          <div
            className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
            style={{
              background: "#FFE58F",
              boxShadow: "0 0 3px #FFFFFF, 0 0 8px #FFBA24",
              animation: "goldSparkOrbit 3.5s linear infinite",
            }}
          />

          {/* 3 gentle floating gold sparks */}
          {[
            { x: "-8px", delay: "0s", size: "1.5px" },
            { x: "10px", delay: "0.9s", size: "1.8px" },
            { x: "-4px", delay: "1.8s", size: "1.4px" },
          ].map((spk, idx) => (
            <div
              key={idx}
              className="absolute rounded-full pointer-events-none"
              style={{
                ['--g-x' as any]: spk.x,
                width: spk.size,
                height: spk.size,
                bottom: "28px",
                left: "50%",
                background: "#FFE58F",
                boxShadow: "0 0 2px #FFFFFF, 0 0 6px #FFBA24",
                animation: `goldSparkFloat 2.4s ease-in infinite ${spk.delay}`,
              }}
            />
          ))}
        </div>
      )}

      {/* ─── PLATINUM: SMALL FLAME (Cyan / Electric Ice-Blue) ─── */}
      {isPlatinum && (
        <div className="absolute -top-9 sm:-top-11 left-1/2 -translate-x-1/2 w-16 h-20 sm:w-18 sm:h-22 pointer-events-none z-0 flex items-center justify-center">
          {/* Subtle Cyan Heat Shimmer Aura */}
          <div
            className="absolute inset-x-2 top-4 bottom-2 rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at 50% 65%, rgba(0, 221, 255, 0.5) 0%, rgba(2, 132, 199, 0.18) 50%, transparent 80%)",
              animation: "platFireAuraPulse 1.5s ease-in-out infinite",
            }}
          />

          {/* Small Cyan Flame Silhouette */}
          <svg
            viewBox="0 0 100 120"
            className="absolute inset-0 w-full h-full overflow-visible"
            style={{
              filter: "drop-shadow(0 0 10px rgba(0, 221, 255, 0.85)) drop-shadow(0 0 3px rgba(102, 234, 255, 0.6))",
            }}
          >
            <defs>
              <linearGradient id="platOuterGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#0099DD" stopOpacity="0.88" />
                <stop offset="85%" stopColor="#00DDFF" />
                <stop offset="100%" stopColor="#66EAFF" />
              </linearGradient>
              <linearGradient id="platMidGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0099DD" stopOpacity="0.85" />
                <stop offset="45%" stopColor="#00DDFF" />
                <stop offset="80%" stopColor="#66EAFF" />
                <stop offset="100%" stopColor="#E0F9FF" />
              </linearGradient>
              <linearGradient id="platCoreGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#66EAFF" />
                <stop offset="55%" stopColor="#E0F9FF" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>

            {/* Outer Flame Tongue */}
            <path
              d="M50 14 C34 38 24 58 26 82 C27 96 36 106 50 106 C64 106 73 96 74 82 C76 58 66 38 50 14 Z"
              fill="url(#platOuterGrad)"
              style={{
                transformOrigin: "50px 106px",
                animation: "platFlameTongue1 1.4s ease-in-out infinite",
              }}
            />

            {/* Left Licking Flame Wing */}
            <path
              d="M48 26 C32 44 20 62 22 78 C24 88 30 96 38 98 C33 84 37 72 44 62 C48 54 50 38 48 26 Z"
              fill="url(#platOuterGrad)"
              style={{
                transformOrigin: "35px 98px",
                animation: "platFlameTongue2 1.2s ease-in-out infinite",
              }}
            />

            {/* Right Licking Flame Wing */}
            <path
              d="M52 26 C68 44 80 62 78 78 C76 88 70 96 62 98 C67 84 63 72 56 62 C52 54 50 38 52 26 Z"
              fill="url(#platOuterGrad)"
              style={{
                transformOrigin: "65px 98px",
                animation: "platFlameTongue2 1.3s ease-in-out infinite 0.15s",
              }}
            />

            {/* Mid Vibrant Cyan Flame */}
            <path
              d="M50 24 C40 44 32 62 34 80 C36 92 42 100 50 100 C58 100 64 92 66 80 C68 62 60 44 50 24 Z"
              fill="url(#platMidGrad)"
              style={{
                transformOrigin: "50px 100px",
                animation: "platFlameTongue2 1.1s ease-in-out infinite 0.1s",
              }}
            />

            {/* White-Hot Core Flame */}
            <path
              d="M50 44 C45 58 42 70 43 84 C44 92 47 96 50 96 C53 92 56 92 57 84 C58 70 55 58 50 44 Z"
              fill="url(#platCoreGrad)"
              style={{
                transformOrigin: "50px 96px",
                animation: "platFlameCore 0.9s ease-in-out infinite",
              }}
            />
          </svg>

          {/* Floating Cyan Sparks */}
          {[
            { x: "-8px", delay: "0s", size: "1.5px" },
            { x: "10px", delay: "0.4s", size: "1.4px" },
            { x: "-12px", delay: "0.8s", size: "1.8px" },
            { x: "5px", delay: "1.2s", size: "1.3px" },
          ].map((emb, eIdx) => (
            <div
              key={eIdx}
              className="absolute rounded-full pointer-events-none"
              style={{
                ['--emb-x' as any]: emb.x,
                width: emb.size,
                height: emb.size,
                bottom: "26px",
                left: "50%",
                background: "#FFFFFF",
                boxShadow: "0 0 2px #FFFFFF, 0 0 5px #66EAFF, 0 0 8px rgba(0, 221, 255, 0.85)",
                animation: `platEmberFloat 1.8s ease-in infinite ${emb.delay}`,
              }}
            />
          ))}
        </div>
      )}

      {/* ─── MYTHIC: LARGE FLAME (Deep Violet & Royal Purple) ─── */}
      {isMythic && (
        <div className="absolute -top-12 sm:-top-14 left-1/2 -translate-x-1/2 w-24 h-28 sm:w-28 sm:h-32 pointer-events-none z-0 flex items-center justify-center">
          {/* Subtle Heat Shimmer Aura */}
          <div
            className="absolute inset-x-3 top-6 bottom-3 rounded-full opacity-65"
            style={{
              background:
                "radial-gradient(ellipse at 50% 65%, rgba(168, 85, 247, 0.65) 0%, rgba(124, 58, 237, 0.25) 50%, transparent 80%)",
              animation: "mythicFireAuraPulse 1.8s ease-in-out infinite",
            }}
          />

          {/* Large Luminous Organic Flame Silhouette */}
          <svg
            viewBox="0 0 100 120"
            className="absolute inset-0 w-full h-full overflow-visible"
            style={{
              filter: "drop-shadow(0 0 14px rgba(168, 85, 247, 0.85)) drop-shadow(0 0 4px rgba(232, 121, 249, 0.5))",
            }}
          >
            <defs>
              <linearGradient id="mythicOuterGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#4C1D95" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.88" />
                <stop offset="85%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#C084FC" />
              </linearGradient>
              <linearGradient id="mythicMidGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.85" />
                <stop offset="45%" stopColor="#A855F7" />
                <stop offset="80%" stopColor="#E879F9" />
                <stop offset="100%" stopColor="#F5D0FE" />
              </linearGradient>
              <linearGradient id="mythicCoreGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="55%" stopColor="#F5D0FE" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>

            {/* Outer Flame Tongue */}
            <path
              d="M50 14 C34 38 24 58 26 82 C27 96 36 106 50 106 C64 106 73 96 74 82 C76 58 66 38 50 14 Z"
              fill="url(#mythicOuterGrad)"
              style={{
                transformOrigin: "50px 106px",
                animation: "mythicFlameTongue1 1.7s ease-in-out infinite",
              }}
            />

            {/* Left Licking Flame Wing */}
            <path
              d="M48 26 C32 44 20 62 22 78 C24 88 30 96 38 98 C33 84 37 72 44 62 C48 54 50 38 48 26 Z"
              fill="url(#mythicOuterGrad)"
              style={{
                transformOrigin: "35px 98px",
                animation: "mythicFlameTongue2 1.4s ease-in-out infinite",
              }}
            />

            {/* Right Licking Flame Wing */}
            <path
              d="M52 26 C68 44 80 62 78 78 C76 88 70 96 62 98 C67 84 63 72 56 62 C52 54 50 38 52 26 Z"
              fill="url(#mythicOuterGrad)"
              style={{
                transformOrigin: "65px 98px",
                animation: "mythicFlameTongue2 1.5s ease-in-out infinite 0.2s",
              }}
            />

            {/* Mid Vibrant Violet Flame */}
            <path
              d="M50 24 C40 44 32 62 34 80 C36 92 42 100 50 100 C58 100 64 92 66 80 C68 62 60 44 50 24 Z"
              fill="url(#mythicMidGrad)"
              style={{
                transformOrigin: "50px 100px",
                animation: "mythicFlameTongue2 1.25s ease-in-out infinite 0.15s",
              }}
            />

            {/* White-Hot Core Flame */}
            <path
              d="M50 44 C45 58 42 70 43 84 C44 92 47 96 50 96 C53 92 56 92 57 84 C58 70 55 58 50 44 Z"
              fill="url(#mythicCoreGrad)"
              style={{
                transformOrigin: "50px 96px",
                animation: "mythicFlameCore 1.0s ease-in-out infinite",
              }}
            />
          </svg>

          {/* Floating Purple Embers */}
          {[
            { x: "-10px", delay: "0s", size: "2px" },
            { x: "14px", delay: "0.35s", size: "1.5px" },
            { x: "-18px", delay: "0.7s", size: "2.2px" },
            { x: "6px", delay: "1.05s", size: "1.5px" },
            { x: "-6px", delay: "1.4s", size: "1.8px" },
            { x: "20px", delay: "1.75s", size: "1.5px" },
            { x: "-14px", delay: "2.1s", size: "2px" },
          ].map((emb, eIdx) => (
            <div
              key={eIdx}
              className="absolute rounded-full pointer-events-none"
              style={{
                ['--emb-x' as any]: emb.x,
                width: emb.size,
                height: emb.size,
                bottom: "36px",
                left: "50%",
                background: "#FFFFFF",
                boxShadow: "0 0 2px #FFFFFF, 0 0 5px #E879F9, 0 0 10px rgba(168, 85, 247, 0.85)",
                animation: `mythicEmberFloat 2.0s ease-in infinite ${emb.delay}`,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default function SponsorPageClient() {
  const [activeTierIndex, setActiveTierIndexState] = useState(1); // Default to Tier 1 (Gold)
  const [currentRgb, setCurrentRgb] = useState<[number, number, number]>(TIER_RGB[1]);
  const [showMatrix, setShowMatrix] = useState(false);
  const animFrameRef = useRef<number | null>(null);
  const activeIndexRef = useRef(1);

  // Smoothly lerp RGB theme color ONLY when transitioning between tiers
  const setActiveTierIndex = (action: number | ((prev: number) => number)) => {
    const nextIdx = typeof action === "function" ? action(activeIndexRef.current) : action;
    const clampedIdx = Math.max(0, Math.min(tiers.length - 1, nextIdx));
    if (clampedIdx === activeIndexRef.current) return;

    const fromRgb = [...currentRgb] as [number, number, number];
    const toRgb = TIER_RGB[clampedIdx];
    activeIndexRef.current = clampedIdx;
    setActiveTierIndexState(clampedIdx);

    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const duration = 500; // ms smooth gradient transition
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Cosine ease in-out
      const ease = 0.5 - 0.5 * Math.cos(progress * Math.PI);
      const r = lerpVal(fromRgb[0], toRgb[0], ease);
      const g = lerpVal(fromRgb[1], toRgb[1], ease);
      const b = lerpVal(fromRgb[2], toRgb[2], ease);
      setCurrentRgb([r, g, b]);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        setCurrentRgb(toRgb);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  const lerpedTheme = buildThemeFromRgb(currentRgb[0], currentRgb[1], currentRgb[2]);
  const currentTier = tiers[activeTierIndex];

  // Dynamically update site header active pill to reflect the currently selected/lerped tier color
  useEffect(() => {
    document.documentElement.style.setProperty("--header-active-bg", lerpedTheme.gradient);
    document.documentElement.style.setProperty(
      "--header-active-shadow",
      `0 4px 25px ${lerpedTheme.rgba(0.5)}`
    );
    document.documentElement.style.setProperty("--header-active-text", "#080808");

    return () => {
      document.documentElement.style.removeProperty("--header-active-bg");
      document.documentElement.style.removeProperty("--header-active-shadow");
      document.documentElement.style.removeProperty("--header-active-text");
    };
  }, [lerpedTheme]);

  return (
    <div
      className="relative min-h-screen overflow-hidden transition-all duration-300 ease-out"
      style={{
        background: lerpedTheme.bgGradient,
      }}
    >
      {/* Background Grid Hill matching other pages */}
      <div className="pointer-events-none absolute inset-0 bg-triangle-mesh bg-cover bg-top opacity-35 blur-[2px] scale-[1.02]" />

      {/* Dynamic ambient orb matching current lerped tier theme */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full blur-[140px] transition-all duration-300 opacity-60"
        style={{
          background: `radial-gradient(circle, ${lerpedTheme.hex} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <Breadcrumb
          pageName="Our Packages"
          description="Invest in the next generation of engineers, designers, and STEM pioneers. Explore our tiered sponsorship opportunities below."
          titleClassName="text-white text-4xl sm:text-5xl md:text-6xl tracking-[0.08em]"
          subtitle="Partnership Opportunities"
          subtitleClassName="text-xs tracking-[0.4em] transition-colors duration-300"
          style={{ color: lerpedTheme.hex }}
        />

        <div className="container pb-28 pt-4">
          {/* Quick CTA banner */}
          <div className="mb-14 flex justify-center">
            <a
              href="#how-to-sponsor"
              className="group flex items-center gap-4 rounded-full border px-8 py-3.5 backdrop-blur-xl transition-all duration-300 hover:scale-105"
              style={{
                borderColor: `${lerpedTheme.hex}55`,
                backgroundColor: "rgba(10, 10, 10, 0.7)",
                boxShadow: `0 10px 30px -10px ${lerpedTheme.glow}`,
              }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: lerpedTheme.hex }}
              />
              <span className="text-sm font-semibold tracking-wider uppercase text-white">
                Become a Sponsor — 501(c)(3) Tax Deductible
              </span>
              <span
                className="text-lg transition-transform group-hover:translate-x-1"
                style={{ color: lerpedTheme.hex }}
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
                    {/* Glowing Progress Fill interpolated */}
                    <div
                      className="absolute left-0 top-0 bottom-0 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        width: `${(activeTierIndex / (tiers.length - 1)) * 100}%`,
                        background: lerpedTheme.gradient,
                        boxShadow: `0 0 16px ${lerpedTheme.glow}`,
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
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full transition-all duration-300"
                          style={{
                            left: `${pct}%`,
                            backgroundColor: isPassed ? lerpedTheme.hex : "rgba(255,255,255,0.25)",
                            boxShadow: isPassed ? `0 0 10px ${lerpedTheme.glow}` : "none",
                          }}
                        />
                      );
                    })}
                  </div>

                  {/* Golden Dragons Logo Slider Thumb */}
                  <div
                    className="absolute top-5 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 flex flex-col items-center"
                    style={{
                      left: `${(activeTierIndex / (tiers.length - 1)) * 100}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Animated Tier Sparks & Realistic Purple Mythic Fire */}
                    <SliderDragonEffects tierIndex={activeTierIndex} color={lerpedTheme.hex} />

                    <div
                      className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0a0a0c]/95 border backdrop-blur-xl transition-all duration-150 hover:scale-110 z-10 ${
                        activeTierIndex === 3 ? "shadow-[0_0_36px_rgba(168,85,247,0.85)]" : activeTierIndex === 2 ? "shadow-[0_0_24px_rgba(0,221,255,0.7)]" : ""
                      }`}
                      style={{
                        borderColor: `${lerpedTheme.hex}99`,
                        boxShadow: `0 0 24px -2px ${lerpedTheme.glow}, 0 8px 18px rgba(0,0,0,0.85), inset 0 1px 1px rgba(255,255,255,0.3)`,
                      }}
                    >
                      {/* Subtle ambient tier glow inside disk */}
                      <div
                        className="absolute inset-1 rounded-full opacity-25 blur-sm transition-colors duration-150"
                        style={{ background: lerpedTheme.hex }}
                      />
                      {/* Golden Dragon Masked Silhouette changing color continuously with lerp */}
                      <div
                        className="relative w-7 h-7 sm:w-8 sm:h-8 transition-all duration-150"
                        style={{
                          background: lerpedTheme.gradient,
                          WebkitMaskImage: "url('/images/logo/logo.png')",
                          maskImage: "url('/images/logo/logo.png')",
                          WebkitMaskSize: "contain",
                          maskSize: "contain",
                          WebkitMaskRepeat: "no-repeat",
                          maskRepeat: "no-repeat",
                          WebkitMaskPosition: "center",
                          maskPosition: "center",
                          filter: `drop-shadow(0 0 8px ${lerpedTheme.glow})`,
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
                className="relative overflow-hidden rounded-[32px] border p-8 md:p-12 transition-all duration-300 shadow-2xl backdrop-blur-2xl"
                style={{
                  backgroundColor: "rgba(12, 12, 12, 0.75)",
                  borderColor: `${lerpedTheme.hex}55`,
                  boxShadow: `0 30px 80px -20px ${lerpedTheme.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                }}
              >
                {/* Glowing Corner Ambient */}
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-40 transition-all duration-300"
                  style={{ backgroundColor: lerpedTheme.hex }}
                />

                {/* Tier Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-8 border-b border-white/10">
                  <div className="min-w-0 flex-1">
                    <span
                      className="inline-block rounded-full px-3.5 py-1 text-xs font-black uppercase tracking-widest text-black mb-3 shadow-md transition-all duration-300"
                      style={{ background: lerpedTheme.gradient }}
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
                      className="tier-price-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight whitespace-nowrap lowercase"
                      style={{
                        ['--tier-gradient' as any]: lerpedTheme.gradient,
                        ['--tier-color' as any]: lerpedTheme.hex,
                      }}
                    >
                      {activeTierIndex === 0 && "$1oo"}
                      {activeTierIndex === 1 && "$5oo"}
                      {activeTierIndex === 2 && "$1,5oo"}
                      {activeTierIndex === 3 && "$2,5oo+"}
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
                            className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-black transition-all duration-300 ${
                              isIncluded
                                ? "text-black shadow-md"
                                : "border border-white/20 text-white/30"
                            }`}
                            style={{
                              background: isIncluded ? lerpedTheme.gradient : "transparent",
                              boxShadow: isIncluded ? `0 0 16px ${lerpedTheme.glow}` : "none",
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
                      background: lerpedTheme.gradient,
                      boxShadow: `0 10px 25px -5px ${lerpedTheme.glow}`,
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

              {/* Full Comparison Matrix (Side-by-Side Table) */}
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
              <span
                className="text-xs font-semibold uppercase tracking-[0.3em] transition-colors duration-300"
                style={{ color: lerpedTheme.hex }}
              >
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

            {/* 2x3 Grid: 2 columns on medium/large displays, 3 rows (6 total items) */}
            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              {fundingPurposes.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel group relative overflow-hidden rounded-[28px] p-6 sm:p-7 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    boxShadow: "0 8px 30px -10px rgba(0,0,0,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${lerpedTheme.hex}88`;
                    e.currentTarget.style.boxShadow = `0 12px 35px -10px ${lerpedTheme.rgba(0.25)}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.boxShadow = "0 8px 30px -10px rgba(0,0,0,0.5)";
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white/[0.05] border border-white/10 transition-colors duration-300"
                      style={{ color: lerpedTheme.hex }}
                    >
                      {renderPurposeIcon(item.iconType)}
                    </div>
                    <span
                      className="text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300"
                      style={{ color: lerpedTheme.hex }}
                    >
                      {item.amount}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════ */}
          {/* CURRENT SPONSORS / PARTNERS WALL                     */}
          {/* ═══════════════════════════════════════════════════════ */}
          <section className="mb-24">
            <div className="mb-10 text-center">
              <span
                className="text-xs font-semibold uppercase tracking-[0.3em] transition-colors duration-300"
                style={{ color: lerpedTheme.hex }}
              >
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
                      className="glass-panel group relative col-span-2 sm:col-span-2 md:col-span-2 h-40 sm:h-44 p-5 sm:p-6 bg-black/75 flex flex-col items-center justify-between rounded-[24px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                      style={{
                        borderColor: `${lerpedTheme.hex}44`,
                        boxShadow: `0 10px 30px -10px ${lerpedTheme.rgba(0.2)}`,
                      }}
                    >
                      {/* Subtle inner hover glow */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Featured badge */}
                      <span
                        className="absolute top-3 left-4 rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest transition-colors duration-300"
                        style={{
                          backgroundColor: `${lerpedTheme.hex}22`,
                          borderColor: `${lerpedTheme.hex}44`,
                          color: lerpedTheme.hex,
                        }}
                      >
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
                          className="text-white/70 hover:text-white transition-colors"
                        >
                          GSSM
                        </a>
                        <span className="text-white/30">·</span>
                        <a
                          href={(s as any).foundationHref || s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-white transition-colors"
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
                    className="glass-panel group relative flex flex-col items-center justify-between rounded-[24px] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden h-36 sm:h-40 p-4 sm:p-5"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${lerpedTheme.hex}66`;
                      e.currentTarget.style.boxShadow = `0 10px 25px -10px ${lerpedTheme.rgba(0.25)}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
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
                    <span className="mt-1 font-semibold uppercase tracking-wider text-center line-clamp-1 w-full px-1 transition-colors text-[11px] text-white/50 group-hover:text-white">
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
                <span
                  className="text-xs font-semibold uppercase tracking-[0.3em] transition-colors duration-300"
                  style={{ color: lerpedTheme.hex }}
                >
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

              <ol
                className="relative border-l space-y-8 ml-3 md:ml-6 mb-10 transition-colors duration-300"
                style={{ borderColor: `${lerpedTheme.hex}44` }}
              >
                {[
                  <span key="1">
                    Navigate to the official GSSM donation portal at{" "}
                    <a
                      href="https://scgssm.org/donate/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold hover:underline underline-offset-4 transition"
                      style={{ color: lerpedTheme.hex }}
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
                    <span className="font-bold transition-colors duration-300" style={{ color: lerpedTheme.hex }}>&quot;Team #772 Golden Dragons&quot;</span> as the designated
                    recipient of your contribution.
                  </span>,
                  <span key="6">Enter your contact and billing information to complete your payment!</span>,
                ].map((step, idx) => (
                  <li key={idx} className="pl-8 relative">
                    <span
                      className="absolute -left-[18px] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-black border text-sm font-bold font-sans tabular-nums leading-none select-none text-center transition-all duration-300"
                      style={{
                        borderColor: lerpedTheme.hex,
                        color: lerpedTheme.hex,
                        boxShadow: `0 0 15px ${lerpedTheme.rgba(0.35)}`,
                      }}
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-xs font-black uppercase tracking-[0.15em] text-black transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{
                    background: lerpedTheme.gradient,
                    boxShadow: `0 8px 25px -4px ${lerpedTheme.glow}`,
                  }}
                >
                  Open Donation Portal <span className="text-lg">↗</span>
                </a>
                <a
                  href="/docs/sponsorship-packet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto glass-btn-ghost justify-center inline-flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4 transition-colors duration-300"
                    style={{ color: lerpedTheme.hex }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
