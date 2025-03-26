import "./model.css";
import SectionTitle from "../Common/SectionTitle";
import Script from "next/script";

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

const HydraDeepDive = () => {
    const bulletPoints = [
        "4 specimen auto (83 points)",
        "2 sample auto",
        "<3s hang",
        "14 x 12 in",
        "~23 lbs"
    ];

    return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
            <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap-reverse items-center">
                <div className="w-full px-4 lg:w-1/2">
                    <SectionTitle
                        title="Hydra"
                        mb="44px"
                    />
                    <ul className="list-disc pl-5 space-y-2">
                        {bulletPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                    <div className="relative mx-auto aspect-[25/24] sm:mb-5 max-w-[500px] lg:mr-0 flex justify-center">
                        <div className="model">
                            <model-viewer
                                className="w-full h-[500px]"
                                src="/images/robot/model/2025_V2.glb"
                                camera-controls
                                camera-orbit="320deg 80deg 25m"
                                loading="auto"
                                powerPreference="low-power"
                                exposure="0.65"
                                shadow-softness="0"
                                disable-tap
                                //poster="images/robot/2025.png"
                                disable-pan
                                tone-mapping="neutral"
                                shadow-intensity="1"
                                alt="Model Loading Failed"
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

export default HydraDeepDive;