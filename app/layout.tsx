import "./globals.css";
import "./blocks.css";
import "./text.css";
import "./border.css";
import "./components.css";

import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import WebAnalytics from "@/components/WebAnalytics";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cosmocloud",
  description:
    "Build your next pluggable backend microservice, fully no-code. From complex APIs to background jobs to search, everything in one single platform.",
  metadataBase: new URL("https://cosmocloud.io"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col gap-[32px] md:gap-0">
          <Navbar />
          {children}
        </div>
        <Footer />
        <WebAnalytics />
        <Analytics />
        <Toaster />
      </body>

      {process.env.NEXT_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_GA_ID} />
      )}
      {process.env.NEXT_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_GTM_ID} />
      )}
    </html>
  );
}
