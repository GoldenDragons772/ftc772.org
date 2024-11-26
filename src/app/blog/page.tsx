import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Keep up with our team!",
    // other metadata
  };

  const BlogPage = () => {
    return (
      <>
        <Breadcrumb
          pageName="Blog"
          description="This is a place to keep up with our team! We will be posting blog updates here. <<WIP: first blog coming soon!>>"
        />

      </>
    );
  };
  
  export default BlogPage;