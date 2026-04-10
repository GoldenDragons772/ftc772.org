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
        pageName="Our Robots"
        description="Robot Page for 772 Golden Dragons"
        titleClassName="text-white text-4xl sm:text-5xl tracking-[0.08em]"
        subtitle="Built for competition"
        subtitleClassName="text-xs text-yellow tracking-[0.4em]"
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
