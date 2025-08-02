"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <>
      <div className="team-bg flex mt-10 md:mt-0 min-h-96">
        <section id="home" className="w-full md:h-screen flex items-end overflow-hidden bg-team xl:bg-fixed bg-cover bg-center bg-no-repeat">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[800px] text-center mb-6 sm:mb-8 md:mb-12 xl:mb-16">
              <div className="backdrop-blur-md bg-white/30 dark:bg-black/30 rounded-xl p-4 sm:p-5 md:p-6 border border-white/20">
                <h1 className="mb-2 sm:mb-3 font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-black dark:text-yellow">
                  Golden Dragons (FTC 772)
                </h1>
                <p className="mb-0 text-xs sm:text-sm md:text-base lg:text-lg !leading-relaxed text-body-color dark:text-yellow px-2 sm:px-0">
                  {`from the South Carolina Governor's School for Science and Mathematics`}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
