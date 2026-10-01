"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 pt-16 pb-8 md:pt-20 lg:pt-24">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFBA24]/20 to-transparent" />

      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Brand Column */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-6 flex items-center gap-3">
                <Image
                  src="/images/logo/logo.png"
                  alt="Golden Dragons logo"
                  className="h-12 w-12"
                  width={48}
                  height={48}
                />
                <span
                  className="text-lg lowercase tracking-wider"
                  style={{ fontFamily: '"Supercharge Expand", sans-serif' }}
                >
                  <span className="text-[#FFBA24]">golden</span>{" "}
                  <span className="text-white/80">dragons</span>
                </span>
              </Link>
              <p className="mb-8 text-xs uppercase tracking-[0.12em] leading-relaxed text-white/40">
                FTC 772 · South Carolina Governor&apos;s School
                <br />
                for Science &amp; Mathematics
              </p>
              <div className="flex items-center gap-5">
                <a
                  href="https://www.instagram.com/gssm.golden.dragons/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-all duration-300 hover:text-[#FFBA24] hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@GoldenDragons772"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-all duration-300 hover:text-[#FFBA24] hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/GoldenDragons772"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-all duration-300 hover:text-[#FFBA24] hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                Navigate
              </h2>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "Team", href: "/team" },
                  { label: "Robot", href: "/robot" },
                  { label: "Sponsors", href: "/sponsor" },
                  { label: "Media", href: "/media" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 transition-all duration-300 hover:text-[#FFBA24] hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                FIRST Robotics
              </h2>
              <ul className="space-y-3">
                {[
                  { label: "FIRST", href: "https://www.firstinspires.org/" },
                  { label: "FTC", href: "https://www.firstinspires.org/robotics/ftc" },
                  { label: "BIOBUZZ", href: "https://www.firstinspires.org/robotics/ftc/game-and-season" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      target="_blank"
                      href={link.href}
                      className="text-sm text-white/40 transition-all duration-300 hover:text-[#FFBA24] hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                GSSM
              </h2>
              <ul className="space-y-3">
                {[
                  { label: "Robotics", href: "https://www.scgssm.org/robotics" },
                  { label: "About", href: "https://www.scgssm.org/who-we-are" },
                  { label: "Contact", href: "https://www.scgssm.org/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      target="_blank"
                      href={link.href}
                      className="text-sm text-white/40 transition-all duration-300 hover:text-[#FFBA24] hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
            © 2026 Golden Dragons. All Rights Reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/20">
            Built with 🐉 in Hartsville, SC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
