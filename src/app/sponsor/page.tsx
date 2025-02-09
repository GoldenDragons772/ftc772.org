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
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="list min-w-80">
              <li className="gssm mt-5 flex justify-center gap-20 flex-wrap">
                <div className="gssm w-64 invert brightness-0 rounded-lg">
                  <a href="https://www.scgssm.org" target="_blank">
                    <img
                        src="/images/brands/gssm.png"
                        className="h-32 rounded-xl invert brightness-0 px-5 py-4"/>
                  </a>
                </div>
                <div className="foundation w-64 invert brightness-0 rounded-lg">
                  <a href="https://www.scgssm.org/who-we-are/gssm-foundation" target="_blank">
                    <img
                        src="/images/brands/foundation.png"
                        className="h-32 rounded-xl invert brightness-0 px-5 py-4"/>
                  </a>
                </div>
                <div className="scadmin w-64 invert brightness-0 rounded-lg">
                  <a href="https://www.admin.sc.gov/" target="_blank">
                    <img
                        src="/images/brands/scadmin.png"
                        className="h-32 rounded-xl invert brightness-0 px-5 py-4"/>
                  </a>
                </div>
                <div className="sarjilaw w-64 invert brightness-0 rounded-lg">
                  <a href="https://sarjilawfirm.com" target="_blank">
                    <img
                        src="/images/brands/sarjilaw.png"
                        className="h-32 rounded-xl invert brightness-0 px-5 py-4"/>
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
