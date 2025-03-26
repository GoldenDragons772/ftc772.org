import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import RobotIcons from "@/components/RobotIcons";
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
      <Hero />
      <RobotIcons />
      <Team />
    </>
  );
}
