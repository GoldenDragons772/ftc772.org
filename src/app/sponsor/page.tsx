import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors",
  description: "Help us robot more by becoming a sponsor!",
  // other metadata
};

const Sponsors = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Sponsors"
        description="We are grateful for the support of our sponsors since their generosity helps us to continue to compete in FTC (FIRST Tech Challenge) and provide students with hands-on experience using robotics and engineering."
        titleClassName="text-white text-4xl sm:text-5xl tracking-[0.08em]"
        subtitle="Powered by partnership"
        subtitleClassName="text-xs text-yellow tracking-[0.4em]"
      />
      <section className="relative overflow-hidden bg-[#171717] pb-[60px] pt-[20px]">
        <div className="absolute inset-0 bg-dragon-grid bg-[size:32px_32px] opacity-15 [mask-image:radial-gradient(70%_60%_at_50%_0%,rgba(0,0,0,1),transparent)]" />
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="list min-w-80 w-full">
              <li className="gssm mt-8 mb-12 grid w-full grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 xl:grid-cols-3">

                
                {/* Platinum Sponsors */}
                <div className="foundation h-[18rem] w-full max-w-[32rem] rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] flex items-center p-6 hover:border-yellow/50 transition">
                  <a href="https://www.duke-energy.com/home" target="_blank">
                    <img
                      src="/images/brands/dukeEnergy.png"
                      className="h-full w-full rounded-xl invert brightness-0 object-contain"
                    />
                  </a>
                </div>

                <div className="gssm h-[18rem] w-full max-w-[32rem] rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] flex items-center p-6 hover:border-yellow/50 transition">
                  <a href="https://www.scgssm.org" target="_blank">
                    <img
                      src="/images/brands/gssm.png"
                      className="h-full w-full rounded-xl invert brightness-0 object-contain"
                    />
                  </a>
                </div>

                <div className="foundation h-[18rem] w-full max-w-[32rem] rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] flex items-center p-6 hover:border-yellow/50 transition">
                  <a href="https://www.uscb.edu/academics/honors/index.html" target="_blank">
                    <img
                      src="/images/brands/USCBH.png"
                      className="h-full w-full rounded-l invert brightness-0 object-contain"
                    />
                  </a>
                </div>
              </li>

              <li className="gssm mt-6 flex justify-center gap-10 flex-wrap">


                {/* Everyone Else */}
                <div className="foundation w-64 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] hover:border-yellow/50 transition">
                  <a href="https://www.scgssm.org/who-we-are/gssm-foundation" target="_blank">
                    <img
                      src="/images/brands/foundation.png"
                      className="h-32 rounded-xl invert brightness-0 px-5 py-4"
                    />
                  </a>
                </div>

                <div className="scadmin w-64 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] hover:border-yellow/50 transition">
                  <a href="https://www.admin.sc.gov/" target="_blank">
                    <img
                      src="/images/brands/scadmin.png"
                      className="h-32 rounded-xl invert brightness-0 px-5 py-4"
                    />
                  </a>
                </div>

                <div className="sarjilaw w-64 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] hover:border-yellow/50 transition">
                  <a href="https://sarjilawfirm.com" target="_blank">
                    <img
                      src="/images/brands/sarjilaw.png"
                      className="h-32 rounded-xl invert brightness-0 px-5 py-4"
                    />
                  </a>
                </div>

                <div className="andersonbrass w-64 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] hover:border-yellow/50 transition">
                  <a href="https://www.andersonbrass.com/products" target="_blank">
                    <img
                      src="/images/brands/andersonbrass.png"
                      className="h-32 rounded-xl invert brightness-0 px-5 py-4"
                    />
                  </a>
                </div>

                <div className="isi w-64 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] hover:border-yellow/50 transition">
                  <a href="https://isirobots.com/" target="_blank">
                    <img
                      src="/images/brands/isi.png"
                      className="h-28 w-full rounded-xl invert brightness-0 object-contain px-8 py-4"
                    />
                  </a>
                </div>

                <div className="goldendragon w-64 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] hover:border-yellow/50 transition">
                  <a href="https://www.goldendragon2hartsville.com/" target="_blank">
                    <img
                      src="/images/brands/gdlogo.png"
                      className="h-32 rounded-xl invert brightness-0 px-5 py-4"
                    />
                  </a>
                </div>

              </li>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
