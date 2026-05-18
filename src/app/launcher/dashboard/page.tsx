"use client";

import Link from "next/link";
import Image from "next/image";

const adminLinks = [
  {
    title: "GD FMS",
    url: "https://fablab.ftc772.org/",
  },
  {
    title: "DragonScouter",
    url: "https://scout.ftc772.org/",
  },
  {
    title: "DragonHours",
    url: "https://hours.ftc772.org/",
  },
];

export default function LauncherDashboard() {
  return (
    <div className="relative min-h-screen bg-transparent pt-28 pb-16 md:pb-20 lg:pb-28 lg:pt-[150px] overflow-hidden">
      <div className="container relative z-10">
        <h1 
          className="text-5xl lowercase text-[#FFBA24] mb-12 text-center md:text-left drop-shadow-[0_0_15px_rgba(255,186,36,0.3)] font-names"
          style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
        >
          launcher
        </h1>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {adminLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-[32px] border border-[#FFBA24]/20 bg-[#0c0c0c]/60 p-10 text-center backdrop-blur-[2px] shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#FFBA24]/50 hover:shadow-[0_20px_60px_rgba(251,186,36,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] font-body"
            >
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-black/40 p-4 transition-transform duration-300 group-hover:scale-110 shadow-inner">
                <Image
                  src="/images/logo/logo.png"
                  alt="Golden Dragons Logo"
                  width={64}
                  height={64}
                  className="block brightness-0 saturate-100 invert-[80%] sepia-[40%] saturate-[1500%] hue-rotate-[340deg] drop-shadow-[0_0_10px_rgba(255,186,36,0.4)]"
                  style={{ filter: "brightness(0) saturate(100%) invert(83%) sepia(48%) saturate(1215%) hue-rotate(338deg) brightness(101%) contrast(103%)" }}
                />
              </div>
              <h2 
                className="text-2xl lowercase text-white transition-colors duration-300 group-hover:text-[#FFBA24] font-names"
                style={{ fontFamily: '"Supercharge Straight Expand", sans-serif', letterSpacing: '1px' }}
              >
                {link.title}
              </h2>
            </Link>
          ))}
          
          <Link
            href="https://docs.ftc772.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-3 group flex flex-col items-center justify-center rounded-[32px] border border-[#FFBA24]/20 bg-[#0c0c0c]/60 p-10 text-center backdrop-blur-[2px] shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#FFBA24]/50 hover:shadow-[0_20px_60px_rgba(251,186,36,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] font-body"
          >
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-black/40 p-4 transition-transform duration-300 group-hover:scale-110 shadow-inner">
              <Image
                src="/images/logo/logo.png"
                alt="Golden Dragons Logo"
                width={64}
                height={64}
                className="block brightness-0 saturate-100 invert-[80%] sepia-[40%] saturate-[1500%] hue-rotate-[340deg] drop-shadow-[0_0_10px_rgba(255,186,36,0.4)]"
                style={{ filter: "brightness(0) saturate(100%) invert(83%) sepia(48%) saturate(1215%) hue-rotate(338deg) brightness(101%) contrast(103%)" }}
              />
            </div>
            <h2 
              className="text-2xl lowercase text-white transition-colors duration-300 group-hover:text-[#FFBA24] font-names"
              style={{ fontFamily: '"Supercharge Straight Expand", sans-serif', letterSpacing: '1px' }}
            >
              gdocs
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
