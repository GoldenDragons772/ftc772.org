import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import RecentRobots from "@/components/RecentRobots";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Golden Dragons (772)",
  description: "Official website of the FTC 772 Golden Dragons Robotics Team.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <div className="relative overflow-hidden bg-[#171717]">
        <div className="absolute inset-0 bg-triangle-mesh bg-cover bg-center opacity-40 blur-[2px] scale-[1.02]" />
        <div className="relative z-10">
          <Hero />
          <RecentRobots />
        </div>
      </div>
    </>
  );
}
