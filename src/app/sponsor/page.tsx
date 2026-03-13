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
      />
      <section className="pb-[40px] pt-[10px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="list min-w-80 w-full">
              <li className="gssm mt-5 mb-12 grid w-full grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 xl:grid-cols-3">

                
                {/* Platinum Sponsors */}
                <div className="foundation h-[18rem] w-full max-w-[32rem] invert brightness-0 rounded-lg flex items-center p-6">
                  <a href="https://www.duke-energy.com/home" target="_blank">
                    <img
                      src="/images/brands/dukeEnergy.png"
                      className="h-full w-full rounded-xl invert brightness-0 object-contain"
                    />
                  </a>
                </div>

                <div className="gssm h-[18rem] w-full max-w-[32rem] invert brightness-0 rounded-lg flex items-center p-6">
                  <a href="https://www.scgssm.org" target="_blank">
                    <img
                      src="/images/brands/gssm.png"
                      className="h-full w-full rounded-xl invert brightness-0 object-contain"
                    />
                  </a>
                </div>

                <div className="foundation h-[18rem] w-full max-w-[32rem] invert brightness-0 rounded-lg flex items-center p-6">
                  <a href="https://www.uscb.edu/academics/honors/index.html" target="_blank">
                    <img
                      src="/images/brands/USCBH.png"
                      className="h-full w-full rounded-l invert brightness-0 object-contain"
                    />
                  </a>
                </div>
              </li>

              <li className="gssm mt-5 flex justify-center gap-20 flex-wrap">


                {/* Everyone Else */}
                <div className="foundation w-64 invert brightness-0 rounded-lg">
                  <a href="https://www.scgssm.org/who-we-are/gssm-foundation" target="_blank">
                    <img
                      src="/images/brands/foundation.png"
                      className="h-32 rounded-xl invert brightness-0 px-5 py-4"
                    />
                  </a>
                </div>

                <div className="scadmin w-64 invert brightness-0 rounded-lg">
                  <a href="https://www.admin.sc.gov/" target="_blank">
                    <img
                      src="/images/brands/scadmin.png"
                      className="h-32 rounded-xl invert brightness-0 px-5 py-4"
                    />
                  </a>
                </div>

                <div className="sarjilaw w-64 invert brightness-0 rounded-lg">
                  <a href="https://sarjilawfirm.com" target="_blank">
                    <img
                      src="/images/brands/sarjilaw.png"
                      className="h-32 rounded-xl invert brightness-0 px-5 py-4"
                    />
                  </a>
                </div>

                <div className="andersonbrass w-64 invert brightness-0 rounded-lg">
                  <a href="https://www.andersonbrass.com/products" target="_blank">
                    <img
                      src="/images/brands/andersonbrass.png"
                      className="h-32 rounded-xl invert brightness-0 px-5 py-4"
                    />
                  </a>
                </div>

                <div className="isi w-64 invert brightness-0 rounded-lg">
                  <a href="https://isirobots.com/" target="_blank">
                    <img
                      src="/images/brands/isi.png"
                      className="h-32 rounded-xl invert brightness-0 px-5 py-4"
                    />
                  </a>
                </div>

                <div className="goldendragon w-64 invert brightness-0 rounded-lg">
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
