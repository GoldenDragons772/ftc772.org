import Breadcrumb from "@/components/Common/Breadcrumb";
import {Document} from 'react-pdf';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Newsletter",
    description: "Keep up with our team!",
    // other metadata
  };

  const BlogPage = () => {
    return (
      <>
        <Breadcrumb
          pageName="Newsletter"
          description="This is a place to keep up with our team as we continue the DECODE season."
        />

      </>
    );
  };







  export default BlogPage;