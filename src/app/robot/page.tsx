import Botsune1 from "@/components/About/Botsune1";
import Clanky from "@/components/About/Clanky";
import GilesCorey from "@/components/About/GilesCorey";
import Hydra from "@/components/About/Hydra";
import Viper from "@/components/About/Viper";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robots | Golden Dragons (772)",
  description: "Learn more about our Robots!",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="our robots"
        description="Robot Page for 772 Golden Dragons"
        titleClassName="text-yellow text-3xl sm:text-4xl tracking-[0.14em]"
        subtitle="Built for competition"
        subtitleClassName="text-xs text-[#CE8D00] tracking-[0.45em]"
      />
      <Botsune1 />
      <Clanky />
      <Hydra />
      <Viper />
      <GilesCorey />
    </>
  );
};

export default AboutPage;
