"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {https://stackoverflow.com/questions/50968731/same-background-image-gets-displayed-multiple-times-on-the-webpage
  return (
    <>
      {/* xl:mt-[28rem] lg-[400px] md:mt-[250px] xs:mt-[200px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]*/}

      <div className="team-bg flex mt-10 md:mt-0 min-h-96">
        <section id="home" className=" w-full md:h-screen flex items-end overflow-hidden bg-team xl:bg-fixed bg-contain xl:bg-cover bg-center bg-no-repeat">
          <div className={"container"}>
            <div className="mx-auto max-w-[800px] text-center xl:mb-24">
              <h1 className="mb-5 font-sans text-3xl font-bold leading-tight text-black dark:text-yellow sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Golden Dragons (FTC 772)
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-yellow sm:text-lg md:text-xl">
                from GSSM
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
