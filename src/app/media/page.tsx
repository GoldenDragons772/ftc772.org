"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Script from "next/script";

const ContactPage = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-transparent">
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
              <div className="w-full">
                <iframe 
                  id="mirror-app-iframe"
                  src="https://app.mirror-app.com/feed-socialmix/56b5d7cf-b1b9-4f26-9d10-e48c9c528f54/preview" 
                  style={{ width: '100%', minHeight: '800px', border: 'none', overflow: 'hidden', background: 'transparent', colorScheme: 'dark' }} 
                  scrolling="no"
                  onLoad={(e) => {
                    if (typeof window !== 'undefined' && (window as any).iFrameSetup) {
                      (window as any).iFrameSetup(e.target);
                    }
                  }}
                ></iframe>
                <Script src="https://cdn.jsdelivr.net/npm/@mirrorapp/iframe-bridge@latest/dist/index.umd.js" onLoad={() => {
                  const iframe = document.getElementById('mirror-app-iframe');
                  if (iframe && typeof window !== 'undefined' && (window as any).iFrameSetup) {
                    (window as any).iFrameSetup(iframe);
                  }
                }} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
