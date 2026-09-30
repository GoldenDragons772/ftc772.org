import SponsorPageClient from "@/components/Sponsor/SponsorPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsorship Packages — Golden Dragons (772)",
  description:
    "Explore our sponsorship packages (Silver, Gold, Platinum, Mythic) and support the FTC 772 Golden Dragons robotics team.",
};

export default function SponsorsPage() {
  return <SponsorPageClient />;
}
