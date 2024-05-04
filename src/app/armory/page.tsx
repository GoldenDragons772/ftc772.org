import "./page.css";
import Script from 'next/script';
import React from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
        'model-viewer': any;
        }
    }
}

export default function page() {
    return (
      <>
        <div className="armory">
          <Script
            type="module"
            src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
          />
          <div className="centerstage flex items-center m-20 border-[1px] rounded-lg hover:border-opacity-95">
            <div className="model flex justify-start">
              <model-viewer
                className="w-[500px] h-[500px]"
                src="/cad.glb"
                camera-controls
                camera-orbit="-40deg 80deg 2m"
                loading="auto"
                powerPreference="low-power"
                exposure="0.65"
                shadow-softness="0"
                disable-tap
								poster="https://github.com/GoldenDragons772.png"
                disable-pan
                tone-mapping="neutral"
                shadow-intensity="1"
              />
            </div>
            <div className="info w-full h-full flex-col items-center">
              <h3 className="text-3xl flex justify-evenly mt-5 items-center">
                Giles Correy (2023-24)
              </h3>
              <p className="text-xl flex justify-center mt-5 text-center m-20 items-center">
                Giles Correy is the 2023-24 robot from the Golden Dragons. It is
                designed to be a fast and efficient robot that can score quickly
                and accurately. Giles was named after a character from the Crucible
								since initially it needed weights to keep it from drifting.
              </p>
            </div>
          </div>
        </div>
      </>
    );
}