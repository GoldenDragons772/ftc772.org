"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";

import { useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { YouTubeEmbed } from "react-social-media-embed";


const ContactPage = () => {

  let p = [
    {type: "instagram", url: "https://www.instagram.com/p/CzRU35kO7_5/"},
    {type: "instagram", url: "https://www.instagram.com/p/Czhn9aLsp78/"},
    {type: "instagram", url: "https://www.instagram.com/p/C0pVx7zOAFL/"},
    {type: "youtube", url: "https://youtu.be/77LNDrU7I0w?si=upTANsVLW8DTrngf"},
    {type: "youtube", url: "https://youtu.be/wEBE9C3Y9bo?si=2hFgnhgpqBE1jGpl"},
    {type: "instagram", url: "https://www.instagram.com/p/C2RDT5XMk0e/"},
    {type: "instagram", url: "https://www.instagram.com/p/C2REDtqsn2D/"},
    {type: "instagram", url: "https://www.instagram.com/p/C2qbYnjM6sv/"},
    {type: "instagram", url: "https://www.instagram.com/reel/C3BYP4VulLL/"},
    {type: "instagram", url: "https://www.instagram.com/p/C3CIGuau9Ye/"},
    {type: "youtube", url: "https://youtu.be/R2PmAsVfoOc?si=5z51e-Kn6Ak_rYf6"},
    {type: "instagram", url: "https://www.instagram.com/p/C4Gppk6u0-o/"},
    {type: "youtube", url: "https://youtube.com/shorts/7tUxkZLAY2M?si=SpFC0e3ROvMh1y7t"},
    {type: "youtube", url: "https://youtube.com/shorts/mkdUE6tY9xI?si=IM-KvlignnZ3IHc9"},
    {type: "youtube", url:"https://youtube.com/shorts/hp08BIl_H_0?si=kwA0zjOJW6EmXTI-"},
    {type: "instagram", url: "https://www.instagram.com/p/C46-stpOn1t/"},
    {type: "instagram", url: "https://www.instagram.com/p/C5FSeGgrqOV/"},
    {type: "youtube", url: "https://youtu.be/rgMk_qIcpiM?si=N8XpWnUWu0YH0qFt"},
    {type: "instagram", url: "https://www.instagram.com/reel/C5J8XyoOuLN/"},
    {type: "instagram", url: "https://www.instagram.com/p/C5KXJ5qrqjN/"},
    {type: "youtube", url: "https://youtu.be/Qn3xoH4k7p8?si=v3U5AGVl7B2SPGge"},
    {type: "instagram", url: "https://www.instagram.com/p/C517mUHrIgS/"},
    {type: "instagram", url: "https://www.instagram.com/p/C58gUrxrbay/"},
    {type: "instagram", url: "https://www.instagram.com/p/C6OrADrrsp4/"},
    {type: "youtube", url: "https://youtu.be/lP0ZFmX9jYk?si=VHmevD-sgrpkWlg_"},
    {type: "instagram", url: "https://www.instagram.com/p/C7KZvQ9OBEo/"},
    {type: "instagram", url: "https://www.instagram.com/p/C871lHBPLtc/"},
    {type: "instagram", url: "https://www.instagram.com/p/C9G4PoHgGNP/"},
    {type: "instagram", url: "https://www.instagram.com/p/DAL2q0dOYWZ/"},
    {type: "instagram", url: "https://www.instagram.com/p/DAgw8RQSP2h/"},
    {type: "instagram", url: "https://www.instagram.com/p/DAj8ryqu6e0/"},
    {type: "instagram", url: "https://www.instagram.com/p/DBwozPNSktg/"},
    {type: "instagram", url: "https://www.instagram.com/p/DB41ueRxIm4/"},
    {type: "instagram", url: "https://www.instagram.com/p/DCpzm9SRlKj/"},
    {type: "instagram", url: "https://www.instagram.com/p/DCxB3Vxy9cn/"},
    {type: "youtube", url: "https://youtu.be/R9iVv4WKt9c?si=_OPmi7fMM8FGFj0i"},
    {type: "instagram", url: "https://www.instagram.com/p/DFCT6y9uN4W/?img_index=1"}
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
                {render.map((link) => {
                  if (link.type === "instagram"){
                    return(
                      <InstagramEmbed
                        captioned
                        url={link.url}
                        key={link.url}
                      />
                    );
                  }
                  else if(link.type === "youtube"){
                    return(
                      <YouTubeEmbed
                        url={link.url}
                        key={link.url}
                      />
                    );
                  }
                }).reverse()}
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
