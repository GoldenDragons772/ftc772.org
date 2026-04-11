"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    const existingScript = document.getElementById("EmbedSocialHashtagScript");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "EmbedSocialHashtagScript";
    script.src = "https://embedsocial.com/cdn/ht.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const currentScript = document.getElementById("EmbedSocialHashtagScript");
      if (currentScript) currentScript.remove();
    };
  }, []);
  return (
    <>
      <div className="relative overflow-hidden bg-[#171717]">
        <div className="absolute inset-0 bg-triangle-mesh bg-cover bg-center opacity-40 blur-[2px] scale-[1.02]" />
        <div className="relative z-10">
          <Breadcrumb
            pageName="Media"
            description="You can see here what we're up to!"
            titleClassName="text-white text-4xl sm:text-5xl tracking-[0.08em]"
            subtitle="Latest highlights"
            subtitleClassName="text-xs text-yellow tracking-[0.4em]"
          />
          <section className="relative overflow-hidden pb-16 pt-6">
            <div className="container relative z-10">
              <div
                className="embedsocial-hashtag"
                data-ref="65e93b24e83aec2878a844c6dd8b4f8faa9d3096"
              >
                <a
                  className="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding"
                  href="https://embedsocial.com/instagram-widget/"
                  target="_blank"
                  title="Instagram widget"
                >
                  <Image
                    src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp"
                    alt="EmbedSocial"
                    width={100}
                    height={20}
                  />
                  <div className="es-widget-branding-text">Instagram widget</div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
