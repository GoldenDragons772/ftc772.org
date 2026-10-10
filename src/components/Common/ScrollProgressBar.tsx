"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const scrollable = documentHeight - windowHeight;
      const scrolled = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
      
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-white/10">
      <div 
        className="h-full bg-primary transition-all duration-75 ease-out"
        style={{ width: `${scrollPercentage}%`, boxShadow: "0 0 10px rgba(255, 186, 36, 0.8)" }}
      />
    </div>
  );
}
