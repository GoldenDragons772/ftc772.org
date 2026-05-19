"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(true);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleStickyNavbar);
  // });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  const [pillStyle, setPillStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Wait for fonts/layout to settle
    const updatePill = () => {
      const activeIndex = menuData.findIndex(item => 
        (item.path && ((usePathName === item.path) || (item.path !== '/' && usePathName?.startsWith(item.path)))) ||
        (item.submenu && item.submenu.some(sub => (usePathName === sub.path) || (sub.path !== '/' && usePathName?.startsWith(sub.path))))
      );

      if (activeIndex !== -1 && navRefs.current[activeIndex]) {
        const el = navRefs.current[activeIndex]!;
        // The Link inside the li has the padding, so measure its first child if possible, or just the li.
        // Since Link is the only child and li is flex child, li bounds should match the Link.
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
    // Slight delay to ensure layout is complete
    const timeoutId = setTimeout(updatePill, 100);
    window.addEventListener('resize', updatePill);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updatePill);
    };
  }, [usePathName, navbarOpen]);

  const isLauncher = usePathName.startsWith("/launcher");

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
            ? "fixed z-[9999] bg-[#0c0c0c]/60 shadow-[0_40px_120px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition border-b border-[#FFBA24]/20"
            : "absolute bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-auto max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo flex items-center gap-4 w-full ${sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  height={60}
                  width={60}
                  className={`block ${isLauncher ? "brightness-0 saturate-100 invert-[80%] sepia-[40%] saturate-[1500%] hue-rotate-[340deg]" : ""}`}
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
                  <button
                    onClick={navbarToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                  >
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "
                        }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : " "
                        }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                        }`}
                    />
                  </button>
                  <nav
                    id="navbarCollapse"
                    className={`navbar absolute right-0 z-30 w-[250px] rounded-[24px] border border-[#FFBA24]/20 max-lg:bg-[#0c0c0c]/80 max-lg:backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.85)] px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                      }`}
                  >
                    <ul className="relative block lg:flex lg:space-x-12 lg:h-[72px] lg:items-center z-10">
                      <div 
                        className="hidden lg:block absolute rounded-[16px] bg-[#FFBA24] shadow-[0_0_20px_rgba(255,186,36,0.6)] transition-all duration-300 ease-out -z-10"
                        style={{ 
                          left: `${pillStyle.left}px`, 
                          width: `${pillStyle.width}px`, 
                          top: `${pillStyle.top}px`,
                          height: `${pillStyle.height}px`,
                          opacity: pillStyle.opacity 
                        }}
                      />
                      {menuData.map((menuItem, index) => (
                        <li key={index} className="group relative" ref={(el) => { navRefs.current[index] = el; }}>
                          {menuItem.path ? (
                              <Link
                                href={menuItem.path}
                                className={`flex items-center justify-center py-2 text-sm uppercase tracking-[0.15em] transition-all duration-300 lg:mr-0 lg:inline-flex lg:px-5 lg:py-2.5 rounded-[16px] ${(usePathName === menuItem.path) || (menuItem.path !== '/' && usePathName?.startsWith(menuItem.path))
                                    ? "text-black font-bold bg-[#FFBA24] lg:bg-transparent shadow-[0_0_20px_rgba(255,186,36,0.6)] lg:shadow-none"
                                    : "text-white font-medium hover:text-yellow hover:bg-white/5"
                                  }`}
                              >
                              {menuItem.title}
                            </Link>
                          ) : (
                            <>
                              <p
                                onClick={() => handleSubmenu(index)}
                                className={`flex cursor-pointer items-center justify-between py-2 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 group-hover:text-yellow hover:bg-white/5 lg:mr-0 lg:inline-flex lg:px-5 lg:py-2.5 rounded-[16px] ${menuItem.submenu?.some(sub => (usePathName === sub.path) || (sub.path !== '/' && usePathName?.startsWith(sub.path))) ? "text-black font-bold bg-[#FFBA24] lg:bg-transparent shadow-[0_0_20px_rgba(255,186,36,0.6)] lg:shadow-none" : "text-white"}`}
                              >
                                {menuItem.title}
                                <span className="pl-3">
                                  <svg width="25" height="24" viewBox="0 0 25 24">
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
                                className={`submenu relative left-0 top-full rounded-2xl border border-[#FFBA24]/20 bg-[#0c0c0c]/80 backdrop-blur-[40px] shadow-[0_40px_120px_rgba(0,0,0,0.85)] transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                                  }`}
                              >
                                {menuItem.submenu.map((submenuItem, index) => (
                                  <Link
                                    href={submenuItem.path}
                                    key={index}
                                    className={`block rounded-[12px] py-2.5 text-xs uppercase tracking-[0.15em] transition-all duration-300 lg:px-3 ${(usePathName === submenuItem.path) || (submenuItem.path !== '/' && usePathName?.startsWith(submenuItem.path))
                                      ? "text-black font-bold bg-[#FFBA24] shadow-[0_0_15px_rgba(255,186,36,0.5)]" 
                                      : "text-white/70 font-medium hover:text-yellow hover:bg-white/5"
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
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0c0c0c]/40 backdrop-blur-md border border-white/10 text-white transition-all duration-300 hover:text-yellow hover:border-yellow/50 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </Link>
                  <Link
                    target="_blank"
                    href="mailto:contact@ftc772.org"
                    className="ease-in-up hidden rounded-xl border border-yellow/60 bg-[#0c0c0c]/40 backdrop-blur-md px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-yellow shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(251,176,64,0.35)] md:block md:px-9 lg:px-6 xl:px-9"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
