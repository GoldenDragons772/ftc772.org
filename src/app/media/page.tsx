"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";

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
              {/* Mirror App Social Feed */}
              <div dangerouslySetInnerHTML={{ __html: `
                <iframe onload="iFrameSetup(this)" src="https://app.mirror-app.com/feed-socialmix/56b5d7cf-b1b9-4f26-9d10-e48c9c528f54/preview" style="width:100%;border:none;overflow:hidden;background:transparent;color-scheme:dark;" scrolling="no"></iframe>
                <script src="https://cdn.jsdelivr.net/npm/@mirrorapp/iframe-bridge@latest/dist/index.umd.js"></script>
              `}} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
