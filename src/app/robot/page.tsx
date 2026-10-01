import Botsune1 from "@/components/Robots/Botsune1";
import Clanky from "@/components/Robots/Clanky";
import GilesCorey from "@/components/Robots/GilesCorey";
import Hydra from "@/components/Robots/Hydra";
import Viper from "@/components/Robots/Viper";
import Breadcrumb from "@/components/Common/Breadcrumb";

import Script from "next/script";
import { Metadata } from "next";
import Botsune2 from "@/components/Robots/Botsune2";

export const metadata: Metadata = {
  title: "Robots | Golden Dragons (772)",
  description: "Learn more about our Robots!",
};

const AboutPage = () => {
  return (
    <>
      {/* CAD & 3D Model Performance Hints */}
      <link rel="preconnect" href="https://ajax.googleapis.com" />
      <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://ajax.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.gstatic.com" />
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
        strategy="afterInteractive"
      />

      <div className="relative overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-triangle-mesh bg-cover bg-center opacity-40 blur-[2px] scale-[1.02]" />
        <div className="relative z-10">
          <Breadcrumb
            pageName="Our Robots"
            description="Robot Page for 772 Golden Dragons"
            titleClassName="text-white text-4xl sm:text-5xl tracking-[0.08em]"
            subtitle="Built for competition"
            subtitleClassName="text-xs text-yellow tracking-[0.4em]"
          />
          <Botsune2 />
          <Botsune1 />
          <Clanky />
          <Hydra />
          <Viper />
          <GilesCorey />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
