"use client";

import Link from "next/link";

const FMSIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-[#FFBA24] drop-shadow-[0_0_10px_rgba(255,186,36,0.4)]"
  >
    {/* Hammer */}
    <path d="M18 3l3 3-9.5 9.5-3-3L18 3zm-6.5 6.5l-6 6a2 2 0 0 0 0 2.8l1.4 1.4a2 2 0 0 0 2.8 0l6-6-4.2-4.2z" strokeWidth="1.2" opacity="0.5" />
    {/* Wrench */}
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeWidth="1.2" opacity="0.5" />
    {/* Gear in center */}
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.1 2.1M16.9 16.9l2.1 2.1M5 19l2.1-2.1M16.9 7.1l2.1-2.1" />
  </svg>
);

const ScouterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-[#FFBA24] drop-shadow-[0_0_10px_rgba(255,186,36,0.4)]"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
    <circle cx="11" cy="11" r="3" opacity="0.5" />
    <path d="M11 8v6M8 11h6" opacity="0.7" />
  </svg>
);

const HoursIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-[#FFBA24] drop-shadow-[0_0_10px_rgba(255,186,36,0.4)]"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
    <path d="M12 2V1m-3 0h6" strokeWidth="2" />
    <path d="M19 5l1.5-1.5" />
  </svg>
);

const GDocsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-[#FFBA24] drop-shadow-[0_0_10px_rgba(255,186,36,0.4)]"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8M16 13H8M16 17H8" opacity="0.7" />
  </svg>
);

const adminLinks = [
  {
    title: "FABLAB MANAGEMENT SYSTEM",
    url: "https://fablab.ftc772.org/",
    icon: FMSIcon,
  },
  {
    title: "DRAGONSCOUTER",
    url: "https://scout.ftc772.org/",
    icon: ScouterIcon,
  },
  {
    title: "DRAGONHOURS",
    url: "https://hours.ftc772.org/",
    icon: HoursIcon,
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
                <link.icon />
              </div>
              <h2 
                className="text-2xl uppercase text-[#FFBA24] font-names tracking-wider mb-2"
                style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
              >
                golden dragons
              </h2>
              <p className="text-sm uppercase text-white/70 font-body tracking-[0.2em] transition-colors duration-300 group-hover:text-white">
                {link.title}
              </p>
            </Link>
          ))}
          
          <Link
            href="https://docs.ftc772.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-3 group flex flex-col items-center justify-center rounded-[32px] border border-[#FFBA24]/20 bg-[#0c0c0c]/60 p-10 text-center backdrop-blur-[2px] shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#FFBA24]/50 hover:shadow-[0_20px_60px_rgba(251,186,36,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] font-body"
          >
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-black/40 p-4 transition-transform duration-300 group-hover:scale-110 shadow-inner">
              <GDocsIcon />
            </div>
            <h2 
              className="text-2xl uppercase text-[#FFBA24] font-names tracking-wider mb-2"
              style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
            >
              golden dragons
            </h2>
            <p className="text-sm uppercase text-white/70 font-body tracking-[0.2em] transition-colors duration-300 group-hover:text-white">
              gdocs
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
