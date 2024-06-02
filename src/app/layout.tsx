import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "../components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golden Dragons (772)",
  description: "Team Website for FTC Team 772 Golden Dragons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}
