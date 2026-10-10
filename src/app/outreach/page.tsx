"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function OutreachPage() {
  return (
    <>
      {/* Explicit inline font-face declarations ensuring immediate resolution */}
      <style>{`
        @font-face {
          font-family: 'Spicy Sale';
          src: url('/fonts/Spicy%20Sale.ttf') format('truetype'),
               url('/Spicy%20Sale.ttf') format('truetype'),
               url('/fonts/Spicy%20Sale.otf') format('opentype'),
               url('/Spicy%20Sale.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Kelpt A3';
          src: url('/fonts/KelptA3-Regular.ttf') format('truetype'),
               url('/KelptA3-Regular.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Kelpt A3';
          src: url('/fonts/KelptA3-Bold.ttf') format('truetype'),
               url('/KelptA3-Bold.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Kelpt A3';
          src: url('/fonts/KelptA3-ExtraBold.ttf') format('truetype'),
               url('/KelptA3-ExtraBold.ttf') format('truetype');
          font-weight: 800;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      {/* ─── HERO SECTION ─── */}
      <section id="learnfirst" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-[#0A0B0E] pt-28 pb-20 select-none scroll-mt-20">
        
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />

        {/* ─── Top Left Red Fluid Blob & Gears ─── */}
        <motion.div
          initial={{ opacity: 0, x: -160, y: -160 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 w-[550px] h-[550px] pointer-events-none z-0"
        >
          {/* Ambient Red Glow */}
          <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-[#E52243] blur-[110px] opacity-40" />

          {/* Organic Fluid Wavy Red Shape */}
          <svg
            className="absolute top-0 left-0 w-[420px] sm:w-[480px] text-[#E52243] drop-shadow-[0_15px_35px_rgba(229,34,67,0.45)]"
            viewBox="0 0 500 500"
            fill="currentColor"
          >
            <path d="M0,0 L500,0 C450,110 320,60 260,180 C200,300 130,340 0,440 Z" />
          </svg>

          {/* Gear Outlines */}
          <svg
            className="absolute top-6 left-6 w-32 h-32 text-black/35 animate-[spin_40s_linear_infinite]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.3.07-.61.07-.92 0-.31-.03-.62-.07-.92l2.09-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 13.5 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.05 11.66c-.04.3-.07.61-.07.92 0 .31.03.62.07.92L1.96 15.13c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.39 1.06.73 1.69.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.25 1.17-.59 1.69-.98l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.09-1.63Z" />
          </svg>
          <svg
            className="absolute top-24 left-36 w-24 h-24 text-black/30 animate-[spin_30s_linear_infinite_reverse]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.3.07-.61.07-.92 0-.31-.03-.62-.07-.92l2.09-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 13.5 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.05 11.66c-.04.3-.07.61-.07.92 0 .31.03.62.07.92L1.96 15.13c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.39 1.06.73 1.69.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.25 1.17-.59 1.69-.98l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.09-1.63Z" />
          </svg>
        </motion.div>

        {/* ─── Top Right Dark Industrial Gears ─── */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-20 z-0 hidden sm:block"
        >
          <svg className="w-56 h-56 text-white/50 absolute top-4 right-4 animate-[spin_60s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.3.07-.61.07-.92 0-.31-.03-.62-.07-.92l2.09-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 13.5 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.05 11.66c-.04.3-.07.61-.07.92 0 .31.03.62.07.92L1.96 15.13c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.39 1.06.73 1.69.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.25 1.17-.59 1.69-.98l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.09-1.63Z" />
          </svg>
        </motion.div>

        {/* ─── Bottom Right Blue Fluid Blob & Gears ─── */}
        <motion.div
          initial={{ opacity: 0, x: 160, y: 160 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="absolute bottom-0 right-0 w-[550px] h-[550px] pointer-events-none z-0"
        >
          {/* Ambient Blue Glow */}
          <div className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-[#0070D2] blur-[110px] opacity-40" />

          {/* Organic Fluid Wavy Blue Shape */}
          <svg
            className="absolute bottom-0 right-0 w-[420px] sm:w-[480px] text-[#0070D2] drop-shadow-[0_-15px_35px_rgba(0,112,210,0.45)]"
            viewBox="0 0 500 500"
            fill="currentColor"
            style={{ transform: "scaleX(-1) scaleY(-1)" }}
          >
            <path d="M0,0 L500,0 C450,110 320,60 260,180 C200,300 130,340 0,440 Z" />
          </svg>

          {/* Gears in blue blob */}
          <svg
            className="absolute bottom-8 right-8 w-28 h-28 text-black/35 animate-[spin_35s_linear_infinite]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.3.07-.61.07-.92 0-.31-.03-.62-.07-.92l2.09-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 13.5 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.05 11.66c-.04.3-.07.61-.07.92 0 .31.03.62.07.92L1.96 15.13c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.39 1.06.73 1.69.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.25 1.17-.59 1.69-.98l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.09-1.63Z" />
          </svg>
        </motion.div>

        {/* ─── Bottom Left Animated Doodles (Robot, Lightbulb, Share/Nodes) ─── */}
        <div className="absolute bottom-10 left-10 z-0 pointer-events-none hidden md:block w-96 h-96">
          
          {/* Animated Glowing Lightbulb */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              opacity: [0.4, 0.95, 0.4],
              filter: [
                "drop-shadow(0 0 0px rgba(255,186,36,0))",
                "drop-shadow(0 0 18px rgba(255,186,36,0.75))",
                "drop-shadow(0 0 0px rgba(255,186,36,0))",
              ],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-52 left-12"
          >
            <svg className="w-20 h-20 text-[#FFBA24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
          </motion.div>

          {/* Animated Bobbing Robot Mascot */}
          <motion.div
            animate={{
              y: [0, -9, 0],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="absolute bottom-4 left-4"
          >
            <svg className="w-36 h-36 text-white/70 drop-shadow-[0_10px_24px_rgba(0,0,0,0.6)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <circle cx="12" cy="5" r="2" />
              <path d="M12 7v4" />
              <line x1="8" y1="16" x2="8" y2="16.01" />
              <line x1="16" y1="16" x2="16" y2="16.01" />
              {/* Antenna pulsing tip */}
              <circle cx="12" cy="5" r="1.2" fill="#E52243" stroke="none" />
            </svg>
          </motion.div>

          {/* Animated Drifting Share/Network Nodes */}
          <motion.div
            animate={{
              y: [0, -14, 0],
              scale: [1, 1.06, 1],
              opacity: [0.4, 0.85, 0.4],
              filter: [
                "drop-shadow(0 0 0px rgba(0,112,210,0))",
                "drop-shadow(0 0 14px rgba(0,112,210,0.55))",
                "drop-shadow(0 0 0px rgba(0,112,210,0))",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute bottom-40 left-44"
          >
            <svg className="w-[4.5rem] h-[4.5rem] text-[#0070D2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </motion.div>

        </div>

        {/* ─── CENTRAL HERO CONTENT ─── */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
          
          {/* Subtle Tagline Badge with Kelpt A3 Font */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[#E52243] animate-ping" />
            <span 
              className="text-xs uppercase tracking-wider text-white/90"
              style={{ fontFamily: "'Kelpt A3', sans-serif" }}
            >
              FTC 772 Community Initiative
            </span>
          </motion.div>

          {/* ─── ACTUAL CONSTRUCTED LearnFIRST LOGO ─── */}
          {/* Built using the transparent FIRST image + Spicy Sale font aligned to reference */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="group relative flex flex-col items-center justify-center cursor-default pt-14 sm:pt-20"
          >
            {/* Ambient backlight glow */}
            <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-[#E52243]/30 via-white/10 to-[#0070D2]/30 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* The Logo Lockup Container */}
            <div className="relative inline-block select-none w-[300px] sm:w-[450px] md:w-[580px] lg:w-[660px] transition-transform duration-500 group-hover:scale-105">
              
              {/* "LEARN" Text styled in Spicy Sale font and aligned right above "I" and "R" of FIRST */}
              <div 
                className="absolute -top-[46%] left-[5.5%] flex items-baseline tracking-[-0.035em] pointer-events-none z-10"
                style={{
                  fontFamily: "'Spicy Sale', cursive, sans-serif",
                  fontSize: "clamp(2rem, 7.8vw, 4.2rem)",
                  lineHeight: 1,
                  filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.9))",
                }}
              >
                {/* L - Red */}
                <span className="relative inline-block text-[#FF2E4D]">
                  L
                  <span className="absolute top-[12%] left-[20%] right-[20%] h-[24%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75)_0%,transparent_70%)] rounded-full pointer-events-none" />
                </span>
                
                {/* E - Pink */}
                <span className="relative inline-block text-[#FF94A8]">
                  E
                  <span className="absolute top-[12%] left-[20%] right-[20%] h-[24%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75)_0%,transparent_70%)] rounded-full pointer-events-none" />
                </span>

                {/* A - White */}
                <span className="relative inline-block text-white">
                  A
                  <span className="absolute top-[12%] left-[20%] right-[20%] h-[24%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75)_0%,transparent_70%)] rounded-full pointer-events-none" />
                </span>

                {/* R - Light Blue */}
                <span className="relative inline-block text-[#78BDFF]">
                  R
                  <span className="absolute top-[12%] left-[20%] right-[20%] h-[24%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75)_0%,transparent_70%)] rounded-full pointer-events-none" />
                </span>

                {/* N - Blue */}
                <span className="relative inline-block text-[#0077FF]">
                  N
                  <span className="absolute top-[12%] left-[20%] right-[20%] h-[24%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75)_0%,transparent_70%)] rounded-full pointer-events-none" />
                </span>
              </div>

              {/* Transparent FIRST Logo Image */}
              <img
                src="/images/logo/first.png"
                alt="FIRST Logo"
                className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.9)]"
              />
            </div>
          </motion.div>

          {/* Subheading in Kelpt A3 Font (Strictly level with 0 tilt) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-2xl transform-none rotate-0"
            style={{ transform: "none", rotate: "0deg" }}
          >
            <p 
              className="text-2xl sm:text-3xl text-white font-medium tracking-wide drop-shadow-md"
              style={{ fontFamily: "'Spicy Sale', cursive, sans-serif" }}
            >
              <span className="text-[#E52243]">Robotics</span> for Everyone,{" "}
              <span className="text-[#0070D2]">Everywhere</span>.
            </p>
            <p 
              className="mt-3 text-base sm:text-lg text-white/70 leading-relaxed font-normal not-italic transform-none rotate-0"
              style={{ fontFamily: "'Kelpt A3', sans-serif", fontStyle: "normal", transform: "none" }}
            >
              Empowering the next generation of engineers, coders, and makers through hands-on workshops, accessible mentorship, and competitive robotics.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            style={{ fontFamily: "'Kelpt A3', sans-serif" }}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfuT_VqdRqk0dqTzB9s7Z0ofqE1BcNTjCJSkl6wF_Wl5o_LRQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-3 text-sm font-bold text-black shadow-lg shadow-white/10 hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Become an Ambassador
            </a>
            <a
              href="https://instagram.com/learnfirstrobotics"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/[0.05] px-7 py-3 text-sm font-semibold text-white/90 backdrop-blur-md hover:bg-white/[0.1] hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              @learnfirstrobotics
            </a>
          </motion.div>

          {/* ─── Bottom Presentation Badge ─── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-5 py-2.5 backdrop-blur-xl"
            style={{ fontFamily: "'Kelpt A3', sans-serif" }}
          >
            <img
              src="/images/logo/logo.png"
              alt="FTC 772 Golden Dragons"
              className="h-6 w-6 object-contain"
            />
            <span className="text-xs uppercase font-bold tracking-wider text-white/80">
              Presented by FTC 772
            </span>
            <span className="text-white/30">•</span>
            <span className="text-sm font-bold text-[#FFBA24]">
              Golden Dragons
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: OFFICIAL BRAND POSTER & MISSION STATEMENT ─── */}
      <section id="mission-statement" className="relative py-24 bg-[#0E1015] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Left: The Official Poster Image in a Floating Showcase Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                {/* Glow backlight */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#E52243]/30 via-transparent to-[#0070D2]/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card border and image */}
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-2xl p-2 transition-transform duration-500 group-hover:-translate-y-2">
                  <img
                    src="/images/outreach/learnfirst-hero.png"
                    alt="LearnFIRST Official Brand Poster"
                    className="w-full max-w-[380px] h-auto rounded-xl object-cover shadow-inner"
                  />
                  <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs" style={{ fontFamily: "'Kelpt A3', sans-serif" }}>
                    <span className="font-semibold text-white/70">Official Brand Poster</span>
                    <span className="font-bold text-[#FFBA24]">FTC 772</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Mission Statement Beside the Official Brand Poster */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span 
                className="text-sm uppercase tracking-widest text-[#E52243] font-bold mb-2"
                style={{ fontFamily: "'Kelpt A3', sans-serif" }}
              >
                Our Mission
              </span>
              
              <h2 
                className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-wide"
                style={{ fontFamily: "'Kelpt A3', sans-serif" }}
              >
                Raising the Bar for STEM
              </h2>

              {/* Mission Statement Glass Card */}
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-9 backdrop-blur-xl shadow-2xl">
                {/* Decorative quote mark */}
                <div className="absolute top-4 right-6 text-6xl text-white/10 font-serif select-none pointer-events-none">
                  “
                </div>

                <p 
                  className="text-white/90 text-lg sm:text-xl leading-relaxed font-medium relative z-10"
                  style={{ fontFamily: "'Kelpt A3', sans-serif" }}
                >
                  We started an inititiative aimed to help bridge the knowledge gap between FIRST Robotics Teams! We believe that creating unity between the 3 FIRST Programs is vital to everyone's success.
                </p>
              </div>

              {/* Tagline footer badge */}
              <div className="mt-6 flex items-center gap-2 text-sm text-white/60" style={{ fontFamily: "'Kelpt A3', sans-serif" }}>
                <span className="text-[#E52243]">★</span>
                <span>Bridging FLL, FTC, and FRC through open knowledge & community</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: OUR PROGRAMS ─── */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span 
              className="text-sm font-bold uppercase tracking-wider text-[#0070D2]"
              style={{ fontFamily: "'Kelpt A3', sans-serif" }}
            >
              What We Do
            </span>
            <h2 
              className="mt-2 text-4xl sm:text-5xl font-bold text-white tracking-wide"
              style={{ fontFamily: "'Kelpt A3', sans-serif" }}
            >
              Our Programs
            </h2>
            <p 
              className="mt-3 text-white/60 text-base"
              style={{ fontFamily: "'Kelpt A3', sans-serif" }}
            >
              Connecting young engineers across FIRST programs with real-world guidance and hands-on experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Program 1: FLL & FTC Team Mentorship */}
            <div className="group relative rounded-2xl border border-white/10 bg-[#12141A] p-8 transition-all duration-300 hover:border-[#E52243]/50 hover:bg-[#151821] hover:-translate-y-1 shadow-xl">
              <div className="h-14 w-14 rounded-xl bg-[#E52243]/15 flex items-center justify-center text-[#E52243] mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Kelpt A3', sans-serif" }}
              >
                FLL & FTC Team Mentorship
              </h3>
              <p 
                className="text-white/70 text-base leading-relaxed"
                style={{ fontFamily: "'Kelpt A3', sans-serif" }}
              >
                Direct peer-to-peer mentoring for rookie FIRST LEGO League and FTC teams, providing programming guidance, mechanical design reviews, and match strategy.
              </p>
            </div>

            {/* Program 2: Local Community STEM Expos */}
            <div className="group relative rounded-2xl border border-white/10 bg-[#12141A] p-8 transition-all duration-300 hover:border-[#0070D2]/50 hover:bg-[#151821] hover:-translate-y-1 shadow-xl">
              <div className="h-14 w-14 rounded-xl bg-[#0070D2]/15 flex items-center justify-center text-[#0070D2] mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Kelpt A3', sans-serif" }}
              >
                Local Community STEM Expos
              </h3>
              <p 
                className="text-white/70 text-base leading-relaxed"
                style={{ fontFamily: "'Kelpt A3', sans-serif" }}
              >
                Bringing live robot driving stations, interactive STEM games, and engineering showcases to schools, libraries, and public technology festivals.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 4: CALL TO ACTION ─── */}
      <section className="py-20 bg-gradient-to-b from-[#080808] to-[#0D1017] text-center border-t border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Kelpt A3', sans-serif" }}
          >
            Connect With LearnFIRST
          </h2>
          <p 
            className="text-white/70 text-base sm:text-lg mb-8"
            style={{ fontFamily: "'Kelpt A3', sans-serif" }}
          >
            Want to bring a LearnFIRST robotics workshop to your school or partner with FTC 772? Reach out or follow our official social channels.
          </p>
          <div 
            className="flex flex-wrap items-center justify-center gap-4"
            style={{ fontFamily: "'Kelpt A3', sans-serif" }}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfuT_VqdRqk0dqTzB9s7Z0ofqE1BcNTjCJSkl6wF_Wl5o_LRQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-black shadow-lg shadow-white/10 hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Become an Ambassador</span>
            </a>
            <a
              href="https://instagram.com/learnfirstrobotics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-black hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Follow @learnfirstrobotics</span>
            </a>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-7 py-3 text-sm font-semibold text-white hover:bg-white/[0.1] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Meet Team 772</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SMOOTH SCROLL TRANSITION BRIDGE TO #FIRSTLikeaGirl ─── */}
      <section className="relative py-20 bg-[#07080C] overflow-hidden border-t border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E52243]/15 via-transparent to-[#0070D2]/15 pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-white/70 mb-4 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E52243] animate-pulse" />
            <span>Outreach Initiative II</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide mb-3">
            Explore <span className="text-[#E52243]">#FIRST</span><span className="italic"><span className="text-white">Like</span><span className="text-[#CBD5E1]">A</span><span className="text-[#0070D2]">Girl</span></span>
          </h3>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Empowering girls and women in STEM, celebrating role models, and building a united FIRST robotics culture.
          </p>
          <a
            href="#first-like-a-girl"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('first-like-a-girl')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 rounded-full border border-[#E52243]/40 bg-gradient-to-r from-[#E52243]/20 via-white/5 to-[#0070D2]/20 px-8 py-3.5 text-sm font-bold text-white shadow-xl backdrop-blur-md hover:border-white/60 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <span>Scroll to #FIRSTLikeaGirl</span>
            <svg 
              className="w-4 h-4 text-white group-hover:translate-y-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ─── #FIRSTLikeaGirl SECTION ─── */}
      <section id="first-like-a-girl" className="relative py-28 bg-[#090A0E] text-white overflow-hidden scroll-mt-20">
        
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 left-1/4 h-[520px] w-[520px] rounded-full bg-[#E52243]/15 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-[520px] w-[520px] rounded-full bg-[#0070D2]/15 blur-[140px] pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          
          {/* Header & Official Logo Lockup Showcase */}
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
            
            {/* Ambassador Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur-xl mb-8 shadow-lg"
            >
              <span className="text-[#FFBA24]">★</span>
              <span>Official Ambassador Program</span>
              <span className="text-white/30">•</span>
              <span className="text-[#E52243]">FTC 772</span>
            </motion.div>

            {/* Official #FIRSTLikeaGirl Logo Lockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] w-full max-w-lg mb-8 flex flex-col items-center group"
            >
              {/* Backlight glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E52243]/20 via-transparent to-[#0070D2]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Official FULL FIRST Logo */}
              <img 
                src="/images/logo/first-full.png" 
                alt="FIRST Official Logo" 
                className="w-full max-w-[340px] sm:max-w-[400px] h-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.8)] relative z-10 group-hover:scale-105 transition-transform duration-300"
              />

              {/* #LikeAGirl in Default Font */}
              <div 
                className="text-4xl sm:text-5xl md:text-[3.25rem] font-black italic tracking-tight select-none mt-3 drop-shadow-[0_6px_16px_rgba(0,0,0,0.7)] relative z-10 text-center leading-none"
                style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Montserrat', sans-serif" }}
              >
                <span className="text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]">#</span><span className="text-[#E52243] drop-shadow-[0_4px_12px_rgba(229,34,67,0.5)]">Like</span><span className="text-[#CBD5E1] drop-shadow-[0_2px_8px_rgba(203,213,225,0.4)]">A</span><span className="text-[#0070D2] drop-shadow-[0_4px_12px_rgba(0,112,210,0.5)]">Girl</span>
              </div>

              {/* Caption */}
              <div className="mt-5 pt-4 border-t border-white/10 w-full flex items-center justify-between text-xs text-white/50 relative z-10">
                <span>Created by FRC 1902</span>
                <span className="text-[#FFBA24] font-semibold">Championed by 772</span>
              </div>
            </motion.div>

            {/* Tagline & Links */}
            <p className="text-lg sm:text-xl text-white/80 font-medium leading-relaxed max-w-2xl mb-6">
              A global social media movement to inspire, celebrate, and empower girls and women in STEM and FIRST.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://explodingbacon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
              >
                <span>Founding Team Exploding Bacon 1902</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="#learnfirst"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('learnfirst')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Back to LearnFIRST ↑</span>
              </a>
            </div>

          </div>

          {/* ─── MISSION STATEMENTS ─── */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E52243]">
                Our Mission &amp; Purpose
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mt-1">
                Why #FIRSTLikeaGirl Matters
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Mission Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl border border-white/10 bg-[#12141C]/80 p-8 sm:p-10 backdrop-blur-xl shadow-2xl flex flex-col justify-between group hover:border-[#E52243]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E52243]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#E52243]/20 transition-all" />
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-[#E52243]/15 flex items-center justify-center text-[#E52243] mb-6">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Representation &amp; Role Models</h4>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed italic">
                    &ldquo;A social media movement to encourage girls and women in STEM and FIRST. By showcasing the many incredible women of FIRST and their stories, girls can find role models who they identify with and are inspired by.&rdquo;
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#E52243] font-semibold tracking-wider uppercase">
                  <span>★ Inspiring Future Leaders</span>
                </div>
              </motion.div>

              {/* Mission Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative rounded-3xl border border-white/10 bg-[#12141C]/80 p-8 sm:p-10 backdrop-blur-xl shadow-2xl flex flex-col justify-between group hover:border-[#0070D2]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0070D2]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0070D2]/20 transition-all" />
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-[#0070D2]/15 flex items-center justify-center text-[#0070D2] mb-6">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Confidence &amp; Community</h4>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed italic">
                    &ldquo;Through this social media campaign, we empower girls with the confidence to overcome cultural pressures, follow their dreams in STEM, and become active members of the FIRST community.&rdquo;
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#0070D2] font-semibold tracking-wider uppercase">
                  <span>★ Breaking Barriers in STEM</span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* ─── STATEMENT ON HOW 772 IS A #FIRSTLikeAGirl AMBASSADOR ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 rounded-3xl border border-white/10 bg-gradient-to-br from-[#131622] via-[#0F1118] to-[#0A0B10] p-8 sm:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Corner Flare */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFBA24]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-3 w-3 rounded-full bg-[#FFBA24]" />
                <span className="text-xs uppercase font-bold tracking-widest text-[#FFBA24]">
                  Ambassador Program Story
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                Team 772 as a Proud #FIRSTLikeAGirl Ambassador
              </h3>

              <div className="space-y-5 text-white/80 text-base sm:text-lg leading-relaxed">
                <p>
                  Over the years, and even throughout the pandemic, many teams reached out to the founding team,{" "}
                  <a 
                    href="https://explodingbacon.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#FFBA24] font-semibold underline underline-offset-4 hover:text-white transition-colors"
                  >
                    Exploding Bacon 1902,
                  </a>{" "}
                  and asked how they could do more to build the #FIRSTLikeAGirl movement. Their enthusiasm inspired 1902 to create the #FIRSTLikeAGirl Ambassador Program.
                </p>
                <p>
                  Ever since, ambassadors are making this campaign their own by sharing their stories and making buttons/signs for their home regions and competitions, thereby changing the culture in their own countries. As we all strive to build stronger relationships, we develop a more united FIRST community of sustainable teams that support each other.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ─── THE TWO CORE PILLARS ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            
            {/* Left Pillar: Who Ambassadors Are (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 rounded-3xl border border-white/10 bg-[#12141D] p-8 sm:p-10 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#E52243] block mb-2">
                  Role &amp; Qualities
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  #FIRSTLikeAGirl Ambassadors:
                </h4>
                
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-xl bg-[#E52243]/20 flex items-center justify-center text-[#E52243] shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold text-base mb-1">Progression of Programs</h5>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Understand the FIRST progression of programs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-xl bg-[#0070D2]/20 flex items-center justify-center text-[#0070D2] shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold text-base mb-1">Robot &amp; Business Knowledge</h5>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Have knowledge about both the robot and business sides of their team
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-xl bg-[#FFBA24]/20 flex items-center justify-center text-[#FFBA24] shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold text-base mb-1">Passionate Advocates</h5>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Are passionate about sharing their story and encouraging girls in STEM
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <img 
                  src="/images/logo/logo.png" 
                  alt="FTC 772 Logo" 
                  className="h-7 w-7 object-contain"
                />
                <span className="text-xs text-white/60">
                  Golden Dragons active commitment to representation
                </span>
              </div>
            </motion.div>

            {/* Right Pillar: What Ambassadors Can Do in Community (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#12141D] p-8 sm:p-10 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#0070D2] block mb-2">
                  Community Action &amp; Impact
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  In their community, Ambassadors can:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Action 1 */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-[#E52243]/15 text-[#E52243] flex items-center justify-center font-bold text-sm mb-3">
                      01
                    </div>
                    <h5 className="text-white font-semibold text-sm mb-1.5">Competition Outreach</h5>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Work directly with competitions to promote #FIRSTLikeAGirl
                    </p>
                  </div>

                  {/* Action 2 */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-[#0070D2]/15 text-[#0070D2] flex items-center justify-center font-bold text-sm mb-3">
                      02
                    </div>
                    <h5 className="text-white font-semibold text-sm mb-1.5">Signs &amp; Button Templates</h5>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Download signs and button templates and create their own to share at their events
                    </p>
                  </div>

                  {/* Action 3 */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-[#FFBA24]/15 text-[#FFBA24] flex items-center justify-center font-bold text-sm mb-3">
                      03
                    </div>
                    <h5 className="text-white font-semibold text-sm mb-1.5">Regional Event Support</h5>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Contact local FLL Jr. and FLL regional partners about helping events in their area
                    </p>
                  </div>

                  {/* Action 4 */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-[#E52243]/15 text-[#E52243] flex items-center justify-center font-bold text-sm mb-3">
                      04
                    </div>
                    <h5 className="text-white font-semibold text-sm mb-1.5">Robot Demonstrations</h5>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Attend FLL and FLL Jr. competitions with their robot
                    </p>
                  </div>

                  {/* Action 5 */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-[#0070D2]/15 text-[#0070D2] flex items-center justify-center font-bold text-sm mb-3">
                      05
                    </div>
                    <h5 className="text-white font-semibold text-sm mb-1.5">Mentoring &amp; Progression</h5>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Talk to girls about FTC and FRC teams in their area and opportunities for them to continue in FIRST
                    </p>
                  </div>

                  {/* Action 6 */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all">
                    <div className="h-8 w-8 rounded-lg bg-[#FFBA24]/15 text-[#FFBA24] flex items-center justify-center font-bold text-sm mb-3">
                      06
                    </div>
                    <h5 className="text-white font-semibold text-sm mb-1.5">Meetups &amp; Connections</h5>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Visit teams or create #FIRSTLikeAGirl opportunities to connect FIRST girls in their area through social meetups
                    </p>
                  </div>

                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span>Direct community outreach</span>
                <span className="text-[#0070D2] font-semibold">Active in Hartsville &amp; SC</span>
              </div>
            </motion.div>

          </div>

          {/* ─── CALL TO ACTION FOR #FIRSTLikeaGirl ─── */}
          <div className="text-center rounded-3xl border border-white/10 bg-gradient-to-b from-[#131622] to-[#0A0B10] p-10 sm:p-14 shadow-2xl">
            <h4 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Get Involved with #FIRSTLikeaGirl
            </h4>
            <p className="text-white/70 text-base max-w-2xl mx-auto mb-8">
              Join the movement, download campaign materials, or connect with our team to bring #FIRSTLikeaGirl resources to your next FIRST robotics tournament.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://explodingbacon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-black shadow-lg hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Visit Official Campaign (Exploding Bacon 1902)</span>
              </a>
              <a
                href="mailto:contact@ftc772.org"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Contact FTC 772 Ambassadors</span>
              </a>
              <a
                href="#learnfirst"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('learnfirst')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <span>Back to LearnFIRST ↑</span>
              </a>
            </div>
          </div>

          {/* ─── TRADEMARK ATTRIBUTION DISCLAIMER ─── */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-white/40 leading-relaxed max-w-2xl mx-auto">
              All FIRST® logos and trademarks are property of FIRST® (For Inspiration and Recognition of Science and Technology). All rights reserved.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
