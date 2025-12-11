import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Newsletter",
    description: "Keep up with our team!",
    // other metadata
  };
<iframe
  src="https://your-host.com/newsletter.pdf"
  style={{ width: "100%", height: "100vh" }}
/>

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