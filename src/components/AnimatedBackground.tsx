"use client";

import { usePathname } from "next/navigation";

export default function AnimatedBackground() {
  const pathname = usePathname();
  const isMediaPage = pathname?.startsWith("/media");

  return (
    <div
      className="animated-fluid-bg"
      style={{
        opacity: isMediaPage ? 0 : 1,
        transition: "opacity 1.5s ease-in-out",
      }}
    />
  );
}
