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
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cosmocloud: No-Code, Backend-as-a-Service",
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
      {/* <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DKTWR39RSJ" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-DKTWR39RSJ');
        `}
        </Script>
      </head> */}
      <body className={inter.className}>
        <div className="flex flex-col gap-[32px] md:gap-0">
          <Navbar />
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-DKTWR39RSJ" />
    </html>
  );
}
