"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
    {/* Clean Gear body */}
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    {/* Inside crossed wrench and hammer, smaller and cleaner to avoid overlap */}
    <path d="M14 10l-4 4M10 10l4 4" strokeWidth="1.2" />
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
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localAuth = localStorage.getItem("gd_admin_authenticated");
      const sessionAuth = sessionStorage.getItem("gd_admin_authenticated");
      if (localAuth === "true" || sessionAuth === "true") {
        setAuthorized(true);
      } else {
        router.push("/launcher");
      }
    }
  }, [router]);

  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("gd_admin_authenticated");
      sessionStorage.removeItem("gd_admin_authenticated");
      router.push("/launcher");
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center font-body text-white">
        <div className="text-center font-semibold text-white/50 tracking-widest uppercase">
          Verifying authorization...
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-transparent pt-28 pb-16 md:pb-20 lg:pb-28 lg:pt-[150px] overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h1 
            className="text-5xl lowercase text-[#FFBA24] text-center md:text-left drop-shadow-[0_0_15px_rgba(255,186,36,0.3)] font-names"
            style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
          >
            77tools suite
          </h1>
          <button
            onClick={handleSignOut}
            className="self-center md:self-auto font-body rounded-xl border border-white/10 bg-white/5 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 px-6 py-2.5 text-xs font-bold uppercase tracking-widest backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
          >
            Sign Out
          </button>
        </div>
        
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
                className="text-2xl lowercase text-[#FFBA24] font-names tracking-wider mb-2"
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
              className="text-2xl lowercase text-[#FFBA24] font-names tracking-wider mb-2"
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
