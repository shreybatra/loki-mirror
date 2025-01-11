import { Footer } from "@/components/oldComponents/Footer";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/oldComponents/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

import WebAnalytics from "@/components/oldComponents/WebAnalytics";
const inter = Inter({ subsets: ["latin"] });

export const DefaultPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className={`${inter.className} body-background`}>
      <div className="flex flex-col gap-[32px] md:gap-0">
        <Navbar />
        {children}
      </div>
      <Footer />
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
