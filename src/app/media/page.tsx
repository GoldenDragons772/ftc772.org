"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";

import { useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";


const ContactPage = () => {

  let p = [
    "https://www.instagram.com/p/CzRU35kO7_5/",
    "https://www.instagram.com/p/Czhn9aLsp78/",
    "https://www.instagram.com/p/C0pVx7zOAFL/",
    "https://youtu.be/77LNDrU7I0w?feature=shared",
    "https://youtu.be/wEBE9C3Y9bo?feature=shared",
    "https://www.instagram.com/p/C2RDT5XMk0e/",
    "https://www.instagram.com/p/C2REDtqsn2D/",
    "https://www.instagram.com/p/C2qbYnjM6sv/",
    "https://www.instagram.com/reel/C3BYP4VulLL/",
    "https://www.instagram.com/p/C3CIGuau9Ye/",
    "https://youtu.be/R2PmAsVfoOc?feature=shared",
    "https://www.instagram.com/p/C4Gppk6u0-o/",
    "https://www.instagram.com/p/C46-stpOn1t/",
    "https://www.instagram.com/p/C5FSeGgrqOV/",
    "https://youtu.be/rgMk_qIcpiM?feature=shared",
    "https://www.instagram.com/reel/C5J8XyoOuLN/",
    "https://www.instagram.com/p/C5KXJ5qrqjN/",
    "https://youtu.be/Qn3xoH4k7p8?feature=shared",
    "https://www.instagram.com/p/C517mUHrIgS/",
    "https://www.instagram.com/p/C58gUrxrbay/",
    "https://www.instagram.com/p/C6OrADrrsp4/",
    "https://youtu.be/lP0ZFmX9jYk?feature=shared",
    "https://www.instagram.com/p/C7KZvQ9OBEo/",
    "https://www.instagram.com/p/C871lHBPLtc/",
    "https://www.instagram.com/p/C9G4PoHgGNP/",
    "https://www.instagram.com/p/DAL2q0dOYWZ/?img_index=1",
    "https://www.instagram.com/p/DAgw8RQSP2h/?img_index=1",
    "https://www.instagram.com/p/DBwozPNSktg/?img_index=1",
    "https://www.instagram.com/p/DB41ueRxIm4/?img_index=1"
  ]

  const [render, setRender] = useState(p.slice(p.length - 3, p.length))

  return (
    <>
      <Breadcrumb
        pageName="Media"
        description="You can see here what we're up to!"
      />
        <div className="media mt-10">
          <div className="media-containter flex justify-center overflow-hidden">
            <div className="media flex-col justify-center space-y-5 sm:w-[650px]">
                {render.map((link) => (
                    <InstagramEmbed
                      captioned
                      url={link}
                      key={link}
                    />
                )).reverse()}
            </div>
          </div>
          <div className="loadmore flex justify-center pt-4 pb-12">
              {render.length != p.length &&
                <button 
                className='bg-blue-500 rounded-xl hover:opacity-80 transition-colors py-4 px-6 flex justify-center space-x-2' 
                onClick={() => {
                  const increment = 3;
                  const newLength = render.length + increment;
                  setRender(p.slice(Math.max(0, p.length - newLength), p.length));
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-rotate"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" /></svg>
                  <p>Load more</p>
                </button>
              }
          </div>
      </div>
    </>
  );
};

export default ContactPage;
