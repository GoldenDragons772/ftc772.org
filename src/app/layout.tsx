import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import { Montserrat } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import AnimatedBackground from "@/components/AnimatedBackground";

import ChunkLoadRecovery from "@/components/Common/ChunkLoadRecovery";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" data-scroll-behavior="smooth">
      <head />

      <body
        className={`${montserrat.variable} bg-[#080808] text-white antialiased`}
      >
        <ChunkLoadRecovery />
        <AnimatedBackground />
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
