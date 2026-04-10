import Breadcrumb from "@/components/Common/Breadcrumb";
//import {Document} from 'react-pdf';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Newsletter",
    description: "Keep up with our team!",
    // other metadata
  };

  const BlogPage = () => {
    return (
      <>
        <div className="relative overflow-hidden bg-[#171717]">
          <div className="absolute inset-0 bg-triangle-mesh bg-cover bg-center opacity-40" />
          <div className="relative z-10">
            <Breadcrumb
              pageName="Newsletter"
              description="This is a place to keep up with our team as we continue the DECODE season."
              titleClassName="text-white text-4xl sm:text-5xl tracking-[0.08em]"
              subtitle="Updates"
              subtitleClassName="text-xs text-yellow tracking-[0.4em]"
            />
          </div>
        </div>

      </>
    );
  };







  export default BlogPage;
