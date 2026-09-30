"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const pathname = usePathname();

  const [pillStyle, setPillStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const updatePill = () => {
      const activeIndex = menuData.findIndex(item =>
        (item.path && ((pathname === item.path) || (item.path !== '/' && pathname?.startsWith(item.path)))) ||
        (item.submenu && item.submenu.some(sub => (pathname === sub.path) || (sub.path !== '/' && pathname?.startsWith(sub.path))))
      );

      if (activeIndex !== -1 && navRefs.current[activeIndex]) {
        const el = navRefs.current[activeIndex]!;
        setPillStyle({
          left: el.offsetLeft,
          top: el.offsetTop,
          width: el.offsetWidth,
          height: el.offsetHeight,
          opacity: 1
        });
      } else {
        setPillStyle(p => ({ ...p, opacity: 0 }));
      }
    };

    updatePill();
    const timeoutId = setTimeout(updatePill, 100);
    window.addEventListener('resize', updatePill);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updatePill);
    };
  }, [pathname, navbarOpen]);

  const isLauncher = pathname.startsWith("/launcher");

  return (
    <header
      className={`fixed left-0 top-0 z-[9999] flex w-full items-center transition-all duration-500 border-b backdrop-blur-2xl ${
        scrolled
          ? "bg-[#080808]/85 border-white/10 py-2.5 shadow-2xl"
          : "bg-[#080808]/40 border-white/5 py-4"
      }`}
      style={{
        WebkitBackdropFilter: "blur(24px) saturate(160%)",
        backdropFilter: "blur(24px) saturate(160%)",
      }}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* Logo */}
          <div className="w-auto max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className="flex items-center gap-3 py-2"
            >
              <Image
                src="/images/logo/logo.png"
                alt="Golden Dragons logo"
                height={48}
                width={48}
                className={`block transition-all duration-300 ${isLauncher ? "" : ""}`}
                style={isLauncher ? { filter: "brightness(0) saturate(100%) invert(83%) sepia(48%) saturate(1215%) hue-rotate(338deg) brightness(101%) contrast(103%)" } : {}}
              />
              {isLauncher && (
                <span className="text-xl lowercase tracking-wider mt-1" style={{ fontFamily: '"Supercharge Expand", sans-serif' }}>
                  <span className="text-[#FFBA24]">golden</span> <span className="text-white">dragons</span>
                </span>
              )}
            </Link>
          </div>

          {!isLauncher && (
            <div className="flex w-full items-center justify-between px-4">
              <div>
                {/* Mobile Toggle */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-xl px-3 py-[6px] lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[26px] bg-white transition-all duration-300 ${
                      navbarOpen ? "top-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[26px] bg-white transition-all duration-300 ${
                      navbarOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[26px] bg-white transition-all duration-300 ${
                      navbarOpen ? "top-[-8px] -rotate-45" : ""
                    }`}
                  />
                </button>

                {/* Navigation */}
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[260px] rounded-[24px] glass-panel-strong px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:backdrop-filter-none ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="relative block lg:flex lg:space-x-10 lg:h-[72px] lg:items-center z-10">
                    {/* Active Pill */}
                    <div
                      className="hidden lg:block absolute rounded-full transition-all duration-300 ease-out -z-10"
                      style={{
                        left: `${pillStyle.left}px`,
                        width: `${pillStyle.width}px`,
                        top: `${pillStyle.top}px`,
                        height: `${pillStyle.height}px`,
                        opacity: pillStyle.opacity,
                        background: "linear-gradient(135deg, #FFBA24 0%, #FFD876 100%)",
                        boxShadow: "0 4px 20px rgba(255, 186, 36, 0.4)",
                      }}
                    />
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative" ref={(el) => { navRefs.current[index] = el; }}>
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex items-center justify-center py-2 text-[13px] uppercase tracking-[0.15em] transition-all duration-300 lg:mr-0 lg:inline-flex lg:px-5 lg:py-2.5 rounded-full ${
                              (pathname === menuItem.path) || (menuItem.path !== '/' && pathname?.startsWith(menuItem.path))
                                ? "text-[#080808] font-bold lg:bg-transparent bg-[#FFBA24] lg:shadow-none shadow-[0_0_20px_rgba(255,186,36,0.4)]"
                                : "text-white/80 font-medium hover:text-[#FFBA24]"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className={`flex cursor-pointer items-center justify-between py-2 text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 group-hover:text-[#FFBA24] lg:mr-0 lg:inline-flex lg:px-5 lg:py-2.5 rounded-full ${
                                menuItem.submenu?.some(sub => (pathname === sub.path) || (sub.path !== '/' && pathname?.startsWith(sub.path)))
                                  ? "text-[#080808] font-bold lg:bg-transparent bg-[#FFBA24] lg:shadow-none shadow-[0_0_20px_rgba(255,186,36,0.4)]"
                                  : "text-white/80"
                              }`}
                            >
                              {menuItem.title}
                              <span className="pl-2">
                                <svg width="20" height="20" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-[20px] glass-panel-strong transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[240px] lg:p-4 lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu!.map((submenuItem, subIndex) => (
                                <Link
                                  href={submenuItem.path}
                                  key={subIndex}
                                  className={`block rounded-xl py-2.5 text-xs uppercase tracking-[0.12em] transition-all duration-300 lg:px-3 ${
                                    (pathname === submenuItem.path) || (submenuItem.path !== '/' && pathname?.startsWith(submenuItem.path))
                                      ? "text-[#080808] font-bold bg-[#FFBA24] shadow-[0_0_15px_rgba(255,186,36,0.3)]"
                                      : "text-white/60 font-medium hover:text-[#FFBA24] hover:bg-white/5"
                                  }`}
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0 gap-4">
                <Link
                  href="/launcher"
                  aria-label="77Tools Suite"
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass-panel text-white/70 transition-all duration-300 hover:text-[#FFBA24] hover:border-[#FFBA24]/40"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </Link>
                <Link
                  target="_blank"
                  href="mailto:contact@ftc772.org"
                  className="hidden md:block glass-btn-ghost !py-2.5 !px-6 !text-[11px]"
                >
                  Contact us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
