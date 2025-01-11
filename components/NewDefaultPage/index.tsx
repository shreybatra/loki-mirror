import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

import WebAnalytics from "@/components/oldComponents/WebAnalytics";
import { NavBar } from "@/components/newComponents/NavBar";
import { Footer } from "../oldComponents/Footer";
const inter = Inter({ subsets: ["latin"] });

export const NewDefaultPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className={`${inter.className} bg-black`}>
      <div className="flex flex-col gap-[32px] md:gap-0">
        <NavBar />
        {children}
        <div className="w-full">
          <Footer />
        </div>
      </div>
      {/* <Footer /> */}
      {!process.env.DEBUG && (
        <>
          <WebAnalytics />
          <Analytics />
        </>
      )}
      <Toaster />
    </body>
  );
};
