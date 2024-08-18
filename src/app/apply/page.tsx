"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  const redirect = () => {
    router.push("https://forms.microsoft.com/r/SPZXq6T6Ya");
  };

  useEffect(() => {
    redirect();
  }, []);

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="loader animate-spin">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-loader-2">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 9 9" />
          </svg>
        </div>
      </div>
    </>
  );
}
