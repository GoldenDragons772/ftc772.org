import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors",
  description: "Help us robot more by becoming a sponsor!",
  // other metadata
};

const Sponsors = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-[#171717]">
        <div className="absolute inset-0 bg-triangle-mesh bg-cover bg-center opacity-40" />
        <div className="relative z-10">
          <Breadcrumb
            pageName="Our Sponsors"
            description="We are grateful for the support of our sponsors since their generosity helps us to continue to compete in FTC (FIRST Tech Challenge) and provide students with hands-on experience using robotics and engineering."
            titleClassName="text-white text-4xl sm:text-5xl tracking-[0.08em]"
            subtitle="Powered by partnership"
            subtitleClassName="text-xs text-yellow tracking-[0.4em]"
          />
          <section className="relative overflow-hidden pb-[60px] pt-[20px]">
            <div className="container relative z-10">

              <div className="mb-12 flex justify-center">
                <a href="#how-to-sponsor" className="w-full max-w-[600px] rounded-md border border-white/10 bg-black px-8 py-5 text-center shadow-[0_0_35px_rgba(0,0,0,0.45)] transition-all hover:border-yellow/30 group">
                  <div className="text-xl md:text-2xl font-names lowercase tracking-widest text-yellow group-hover:text-white transition-colors leading-snug">
                    Become a Sponsor
                  </div>
                  <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.3em] text-white/50 group-hover:text-yellow/80 transition-colors">
                    Click to see donation steps
                  </div>
                </a>
              </div>

              <div className="-mx-4 flex flex-wrap justify-center">
                <div className="list min-w-80 w-full">
                  <li className="gssm mt-8 mb-12 grid w-full grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 xl:grid-cols-3">


                    {/* Platinum Sponsors */}
                    <div className="foundation h-[18rem] w-full max-w-[32rem] rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] flex items-center p-6 hover:border-yellow/50 transition">
                      <a href="https://www.duke-energy.com/home" target="_blank">
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/brands/dukeEnergy.png"
                        alt="Duke Energy"
                        fill
                        className="rounded-xl invert brightness-0 object-contain"
                      />
                    </div>
                      </a>
                    </div>

                    <div className="gssm h-[18rem] w-full max-w-[32rem] rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] flex items-center p-6 hover:border-yellow/50 transition">
                      <a href="https://www.scgssm.org" target="_blank">
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/brands/gssm.png"
                        alt="GSSM"
                        fill
                        className="rounded-xl invert brightness-0 object-contain"
                      />
                    </div>
                      </a>
                    </div>

                    <div className="foundation h-[18rem] w-full max-w-[32rem] rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] flex items-center p-6 hover:border-yellow/50 transition">
                      <a href="https://www.uscb.edu/academics/honors/index.html" target="_blank">
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/brands/USCBH.png"
                        alt="USCB Honors"
                        fill
                        className="rounded-l invert brightness-0 object-contain"
                      />
                    </div>
                      </a>
                    </div>
                  </li>

                  <li className="gssm mt-6 flex justify-center gap-10 flex-wrap">


                    {/* Everyone Else */}
                    <div className="foundation w-64 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] hover:border-yellow/50 transition">
                      <a href="https://www.scgssm.org/who-we-are/gssm-foundation" target="_blank">
                    <div className="relative h-32 w-full">
                      <Image
                        src="/images/brands/foundation.png"
                        alt="GSSM Foundation"
                        fill
                        className="rounded-xl invert brightness-0 object-contain px-5 py-4"
                      />
                    </div>
                      </a>
                    </div>

                    <div className="scadmin w-64 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] hover:border-yellow/50 transition">
                      <a href="https://www.admin.sc.gov/" target="_blank">
                    <div className="relative h-32 w-full">
                      <Image
                        src="/images/brands/scadmin.png"
                        alt="SC Admin"
                        fill
                        className="rounded-xl invert brightness-0 object-contain px-5 py-4"
                      />
                    </div>
                      </a>
                    </div>

                    <div className="sarjilaw w-64 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] hover:border-yellow/50 transition">
                      <a href="https://sarjilawfirm.com" target="_blank">
                    <div className="relative h-32 w-full">
                      <Image
                        src="/images/brands/sarjilaw.png"
                        alt="Sarji Law Firm"
                        fill
                        className="rounded-xl invert brightness-0 object-contain px-5 py-4"
                      />
                    </div>
                      </a>
                    </div>

                    <div className="andersonbrass w-64 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] hover:border-yellow/50 transition">
                      <a href="https://www.andersonbrass.com/products" target="_blank">
                    <div className="relative h-32 w-full">
                      <Image
                        src="/images/brands/andersonbrass.png"
                        alt="Anderson Brass"
                        fill
                        className="rounded-xl invert brightness-0 object-contain px-5 py-4"
                      />
                    </div>
                      </a>
                    </div>

                    <div className="isi w-64 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] hover:border-yellow/50 transition">
                      <a href="https://isirobots.com/" target="_blank">
                    <div className="relative h-28 w-full">
                      <Image
                        src="/images/brands/isi.png"
                        alt="ISI"
                        fill
                        className="rounded-xl invert brightness-0 object-contain px-8 py-4"
                      />
                    </div>
                      </a>
                    </div>

                    <div className="goldendragon w-64 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_30px_rgba(0,0,0,0.35)] hover:border-yellow/50 transition">
                      <a href="https://www.goldendragon2hartsville.com/" target="_blank">
                    <div className="relative h-32 w-full">
                      <Image
                        src="/images/brands/gdlogo.png"
                        alt="Golden Dragon"
                        fill
                        className="rounded-xl invert brightness-0 object-contain px-5 py-4"
                      />
                    </div>
                      </a>
                    </div>

                  </li>
                </div>
              </div>

              {/* How to Sponsor Section */}
              <div id="how-to-sponsor" className="mt-8 mb-16 pt-16 border-t border-white/10 flex flex-col items-center scroll-mt-32">
                <div className="mb-10 rounded-md border border-white/10 bg-black px-6 py-3 text-center shadow-[0_0_35px_rgba(0,0,0,0.45)]">
                  <div className="text-2xl md:text-3xl font-names lowercase tracking-widest text-white leading-snug">
                    Want to help?
                  </div>
                </div>

                <div className="w-full max-w-3xl rounded-md border border-white/10 bg-[#171717] px-8 py-10 shadow-[0_0_30px_rgba(0,0,0,0.35)] transition-all hover:border-yellow/20">
                  <ol className="relative border-l border-yellow/20 space-y-10 ml-3 md:ml-6">
                    {[
                      <span key="1">Go to <a href="https://scgssm.org/donate/" target="_blank" rel="noopener noreferrer" className="font-semibold text-yellow hover:underline decoration-yellow/50 underline-offset-4 transition">https://scgssm.org/donate/</a></span>,
                      <span key="2">Select a donation amount and billing type. (one-time or recurring)</span>,
                      <span key="3">Click the &quot;I want to support&quot; drop-down, and select <span className="font-semibold text-white">GSSM Robotics.</span></span>,
                      <span key="4">Select if you are donating on behalf of an organization or wish to stay anonymous.</span>,
                      <span key="5">In the &quot;Comment&quot; field, specify <span className="font-semibold text-yellow">&quot;Team #772 Golden Dragons&quot;</span> as the team you would like to support with your donation.</span>,
                      <span key="6">Enter your contact information and pay!</span>
                    ].map((step, idx) => (
                      <li key={idx} className="pl-10 relative">
                        <span className="absolute -left-[18px] top-0 flex items-center justify-center w-9 h-9 rounded-full bg-black border border-yellow/50 text-yellow font-straight text-xl shadow-[0_0_15px_rgba(251,176,64,0.3)] pt-[3px] pr-[1px]">
                          {idx + 1}
                        </span>
                        <p className="text-lg text-white/80 leading-relaxed pt-1">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
