import "./model.css";
import SectionTitle from "../Common/SectionTitle";
import RobotInfoBox from "./RobotInfoBox";
import Script from "next/script";

declare global {
  namespace JSX {
      interface IntrinsicElements {
      'model-viewer': any;
      }
  }
}

const GilesCorey = () => {
  const quickFacts = [
    { label: "Name", value: "Giles Corey" },
    { label: "Status", value: "Dissassembled" },
    { label: "Season", value: "2023-24" },
    { label: "Drive", value: "GoBilda" },
  ];

  const schedule = [
    { title: "SC Midlands Qual.", detail: "Tournament Finalist" },
    { title: "SC State Champ.", detail: "Tournament Champion" },
    { title: "World Champ.", detail: "Participant" },
    { title: "Maryland Tech Invit.", detail: "Participant" },
  ];

  const abilities = [
    "Fast and efficient scoring",
    "Accurate autonomous routines",
    "Stable drivetrain control",
  ];
  return (
    <section id="about" className="relative overflow-hidden pt-16 md:pt-20 lg:pt-28">
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
      />
      <div className="container relative z-10">
        <div className="border-b border-white/10 pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap-reverse items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Giles Corey"
                paragraph="Giles Corey is the 2023-24 robot from the Golden Dragons. It is designed to be a fast and efficient robot that can score quickly and accurately. Giles was named after a character from the Crucible since initially it needed weights to keep it from drifting."
                mb="44px"
              />
              <RobotInfoBox
                quickFacts={quickFacts}
                schedule={schedule}
                abilities={abilities}
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] sm:mb-5 max-w-[500px] lg:mr-0 flex justify-center">
                  <div className="model">
                    <model-viewer
                      className="w-full h-[500px]"
                      src="/images/robot/model/2024.glb"
                      camera-controls
                      camera-orbit="40deg 80deg 2m"
                      loading="auto"
                      powerPreference="low-power"
                      exposure="0.65"
                      shadow-softness="0"
                      disable-tap
                      //poster="/images/robot/2024.png"
                      disable-pan
                      tone-mapping="neutral"
                      shadow-intensity="1"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GilesCorey;
