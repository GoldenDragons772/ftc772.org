import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golden Dragons (772)",
  description: "FTC 772 Golden Dragons Team Website.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <div className="relative overflow-hidden bg-[#171717]">
        <div className="absolute inset-0 bg-triangle-mesh bg-cover bg-center opacity-40" />
        <div className="relative z-10">
          <Hero />
          <Team />
        </div>
      </div>
    </>
  );
}
