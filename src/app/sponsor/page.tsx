import SponsorPageClient from "@/components/Sponsor/SponsorPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsorship Packages — Golden Dragons (772)",
  description:
    "Explore our sponsorship packages (Silver $100-$499, Gold $500-$1,499, Platinum $1,500-$2,499, Mythic $2,500+) and support the FTC 772 Golden Dragons robotics team.",
};

export default function SponsorsPage() {
  return <SponsorPageClient />;
}
