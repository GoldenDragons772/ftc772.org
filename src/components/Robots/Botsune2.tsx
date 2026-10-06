"use client";
import "./model.css";
import SectionTitle from "../Common/SectionTitle";
import RobotInfoBox from "./RobotInfoBox";
import Script from "next/script";
import { useInView } from "@/hooks/useInView";
import { useMemo } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model_viewer': any;
    }
  }
}

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Botsune1 = () => {
  const observerOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: "-35% 0px -35% 0px"
  }), []);
  const [ref, isInView] = useInView(observerOptions);

  const quickFacts = [
    { label: "Name", value: "Botsune Miku II" },
    { label: "Status", value: "Outreach Mode" },
    { label: "Season", value: "2025-26" },
    { label: "Drive", value: "Custom" },
  ];

  const schedule = [
    { title: "Canadian Rockies Premier Event", detail: "Champion and Control Award Winner" },
    { title: "World Champ.", detail: "Goodall Division, 8th Seed 2nd Pick" },
    { title: "Multinational Tech Invit.", detail: "18th Place (Qualifications)" },
  ];

  const abilities = [
    "Passthrough archetype to promote quick and efficient scoring.",
    "Turreted shooter for flexible autonomous and endgame scoring.",
    "Efficient Close and Far Zone Scoring"
  ];

  return (
    <section id="miku2" className="relative overflow-hidden pt-16 md:pt-20 lg:pt-28">
      <div className="container relative z-10">
        <div className="border-b border-white/10 pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap-reverse items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div ref={ref} className="rounded-md border border-white/10 bg-black/60 p-6 shadow-[0_0_35px_rgba(0,0,0,0.45)] mb-6">
                <SectionTitle
                  title="Botsune Miku II"
                  paragraph="Botsune Miku II is the second iteration robot for Golden Dragons' 2025-26 season. 
                              Miku II was Champion and Control Award Winner at the Canadian Rockies Premier Event, and competed at the World Championship where it was the second pick of the 8th seeded alliance in the Goodall Division. This robot is a complete evolution of Miku I featuring
                              a passthrough archetype to promote quick and efficient scoring."
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
              <div className="relative mx-auto aspect-[25/24] sm:mb-5 max-w-[500px] lg:mr-0 flex justify-center">
                <div className="model relative w-full h-[500px]">
                  <model-viewer
                    className="w-full h-[500px]"
                    src="/images/robot/model/2026_V3.glb"
                    poster="/images/robot/render/Miku2_poster.webp"
                    loading="lazy"
                    reveal="auto"
                    camera-controls
                    camera-orbit="140deg 80deg 20m"
                    powerPreference="high-performance"
                    exposure="0.85"
                    shadow-softness="0.5"
                    disable-tap
                    disable-pan
                    tone-mapping="neutral"
                    shadow-intensity="1"
                    alt="Botsune Miku II 3D CAD Model"
                  />
                  <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium tracking-wider uppercase text-yellow border border-yellow/30 backdrop-blur-sm shadow-md flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow animate-pulse" />
                    <span>3D Model · Drag to Rotate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Botsune1;
