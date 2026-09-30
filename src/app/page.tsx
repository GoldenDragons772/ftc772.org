import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import PathCards from "@/components/PathCards";
import RecentRobots from "@/components/RecentRobots";
import TeamsNetwork from "@/components/TeamsNetwork";
import OutreachSection from "@/components/OutreachSection";
import SponsorBand from "@/components/SponsorBand";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golden Dragons — FTC 772",
  description:
    "Official website of the FTC 772 Golden Dragons Robotics Team from the SC Governor's School for Science & Mathematics.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <div className="relative overflow-hidden bg-transparent">
        {/* Background Grid Hill matching other pages */}
        <div className="pointer-events-none absolute inset-0 bg-triangle-mesh bg-cover bg-top opacity-40 blur-[2px] scale-[1.02]" />

        <div className="relative z-10">
          <Hero />
          <PathCards />
          <RecentRobots />
          <TeamsNetwork />
          <OutreachSection />
          <SponsorBand />
        </div>
      </div>
    </>
  );
}
