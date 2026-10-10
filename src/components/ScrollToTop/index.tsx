"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary text-black shadow-[0_0_20px_rgba(255,186,36,0.3)] transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_30px_rgba(255,186,36,0.6)]"
        >
          <span className="mt-1 h-3 w-3 rotate-45 border-l-2 border-t-2 border-black"></span>
        </div>
      )}
    </div>
  );
}
