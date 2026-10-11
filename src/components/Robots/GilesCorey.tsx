"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import RobotInfoBox from "./RobotInfoBox";
import { useInView } from "@/hooks/useInView";
import { useMemo } from "react";

const GilesCorey = () => {
  const observerOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: "-35% 0px -35% 0px"
  }), []);
  const [ref, isInView] = useInView(observerOptions);

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
    "Capable of scoring on all parts of the backboard.",
    "Machine Vision Algorithms that can detect the starting configuration.",
    "1 of 2 robots that had a Gobilda Archetype at MTI.",
  ];
  return (
    <section id="gilescorey" className="relative overflow-hidden pt-16 md:pt-20 lg:pt-28">
      <div className="container relative z-10">
        <div className="border-b border-white/10 pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap-reverse items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div ref={ref} className="rounded-2xl border border-[#FFBA24]/20 bg-[#0c0c0c]/60 backdrop-blur-[2px] p-6 shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] mb-6">
                <SectionTitle
                  title="Giles Corey"
                  paragraph="Giles Corey is the first ever robot built by the Golden Dragons in the 2023-24 season. It is designed to be a fast and efficient robot that can score quickly and accurately. Giles was named after a character from the Crucible since initially it needed weights to keep it from drifting."
                  mb="0"
                  width="100%"
                  gradientActive={isInView}
                />
                <div className="my-6 border-t border-white/10" />
                <RobotInfoBox
                  quickFacts={quickFacts}
                  schedule={schedule}
                  abilities={abilities}
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] sm:mb-5 max-w-[500px] lg:mr-0 flex items-center justify-center">
                <div className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] flex items-center justify-center transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/robot/render/2024_poster.webp"
                    alt="Giles Corey CAD Preview"
                    fill
                    className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]"
                    sizes="(max-width: 768px) 100vw, 500px"
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
