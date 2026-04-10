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
    {type: "instagram", url: "https://www.instagram.com/p/DFCT6y9uN4W/?img_index=1"},
    {type: "instagram", url: "https://www.instagram.com/reel/DFbdEzqRFz2/"},
    {type: "instagram", url: "https://www.instagram.com/reel/DFdTk1WRPRL/"},
    {type: "instagram", url: "https://www.instagram.com/p/DFiopt9RE0v/"},
    {type: "instagram", url: "https://www.instagram.com/reel/DFjln0WOlHf/"},
    {type: "instagram", url: "https://www.instagram.com/reel/DFqvEN4SV6o/"},
    {type: "instagram", url: "https://www.instagram.com/p/DFwNnwHRr6Y/"},
    {type: "instagram", url: "https://www.instagram.com/p/DF6L57XyrSv/"},
    {type: "instagram", url: "https://www.instagram.com/reel/DF9J9eKuQoM/"},
    {type: "instagram", url: "https://www.instagram.com/reel/DGEkLgnuwOz/"},
    {type: "instagram", url: "https://www.instagram.com/p/DGIDOqzOwpD/"},
    {type: "instagram", url: "https://www.instagram.com/p/DGZREjQxeEm/"},
    {type: "instagram", url: "https://www.instagram.com/p/DGtKJQexXs8/"},
    {type: "instagram", url: "https://www.instagram.com/p/DIh2RlLxDEG/"},
    {type: "instagram", url: "https://www.instagram.com/p/DIh2RlLxDEG/"},
    {type: "instagram", url: "https://www.instagram.com/p/DIndYwJMAm2/"},
    {type: "instagram", url: "https://www.instagram.com/p/DIrU3Nxxly_/"},
    {type: "instagram", url: "https://www.instagram.com/p/DNWzEV7O6sX/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="},
    {type: "instagram", url: "https://www.instagram.com/p/DOSGpkpjBXI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {type: "instagram", url: "https://www.instagram.com/p/DOjq-yaESr-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {type: "instagram", url: "https://www.instagram.com/p/DOuDVzlkU3P/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {type: "instagram", url: "https://www.instagram.com/p/DRFTo4FkUiC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {type: "instagram", url: "https://www.instagram.com/p/DRJAx1tjGQP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {type: "instagram", url: "https://www.instagram.com/p/DRLJNFiEWIs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {type: "instagram", url: "https://www.instagram.com/p/DRcpk5MkSBU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {type: "instagram", url: "https://www.instagram.com/reel/DRfYbP2EorN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {type: "instagram", url: "https://www.instagram.com/p/DRrpdgdkeqK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
    {type: "instagram", url: "https://www.instagram.com/reel/DSBYjcQkeAx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  ]

  const initialCount = 9;
  const [render, setRender] = useState(p.slice(Math.max(0, p.length - initialCount), p.length))

  return (
    <>
      <Breadcrumb
        pageName="Media"
        description="You can see here what we're up to!"
        titleClassName="text-white text-4xl sm:text-5xl tracking-[0.08em]"
        subtitle="Latest highlights"
        subtitleClassName="text-xs text-yellow tracking-[0.4em]"
      />
      <section className="relative overflow-hidden bg-[#171717] pb-16 pt-6">
        <div className="absolute inset-0 bg-dragon-grid bg-[size:32px_32px] opacity-15 [mask-image:radial-gradient(70%_60%_at_50%_0%,rgba(0,0,0,1),transparent)]" />
        <div className="container relative z-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm font-normal text-white/70">
              Showing {render.length} of {p.length} posts
            </div>
            <div className="flex flex-wrap gap-3">
              {render.length < p.length && (
                <button
                  className="rounded-sm border border-yellow/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow transition hover:bg-[#FFBA24]/10"
                  onClick={() => setRender(p)}
                >
                  Show all
                </button>
              )}
              {render.length < p.length && (
                <button
                  className="rounded-sm bg-yellow px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-[0_10px_30px_rgba(251,176,64,0.25)] transition hover:-translate-y-0.5"
                  onClick={() => {
                    const increment = 6;
                    const newLength = render.length + increment;
                    setRender(p.slice(Math.max(0, p.length - newLength), p.length));
                  }}
                >
                  Load more
                </button>
              )}
            </div>
          </div>
          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {render
              .map((link) => {
                if (link.type === "instagram") {
                  return (
                    <div
                      key={link.url}
                      className="overflow-hidden rounded-xl border border-white/10 bg-[#101010] shadow-[0_0_30px_rgba(0,0,0,0.35)]"
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                        <div className="h-full w-full scale-[0.98]">
                          <InstagramEmbed captioned={false} url={link.url} />
                        </div>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[#101010]/90 backdrop-blur-lg [mask-image:linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0.75),rgba(0,0,0,0))]" />
                      </div>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow transition hover:bg-white/5"
                      >
                        <span>View on Instagram</span>
                        <span className="text-white/70">→</span>
                      </a>
                    </div>
                  );
                }
                if (link.type === "youtube") {
                  return (
                    <div
                      key={link.url}
                      className="overflow-hidden rounded-xl border border-white/10 bg-[#101010] shadow-[0_0_30px_rgba(0,0,0,0.35)]"
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                        <YouTubeEmbed url={link.url} />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[#101010]/90 backdrop-blur-lg [mask-image:linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0.75),rgba(0,0,0,0))]" />
                      </div>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow transition hover:bg-white/5"
                      >
                        <span>Watch on YouTube</span>
                        <span className="text-white/70">→</span>
                      </a>
                    </div>
                  );
                }
                return null;
              })
              .reverse()}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
