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
        pageName="Robot"
        description="Robot Page for 772 Golden Dragons"
      />
      <Hydra />
      <Viper />
      <GilesCorey />
    </>
  );
};

export default AboutPage;
