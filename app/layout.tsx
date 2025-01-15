import "./globals.css";
import "./blocks.css";
import "./text.css";
import "./border.css";
import "./components.css";

import type { Metadata } from "next";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

// export const metadata: Metadata = {
//   title: "Cosmocloud",
//   description:
//     "Build your next pluggable backend microservice, fully no-code. From complex APIs to background jobs to search, everything in one single platform.",
//   metadataBase: new URL("https://cosmocloud.io"),
// };

export const metadata: Metadata = {
  title: "Cosmocloud",
  description:
    "Build, Deploy and Scale your applications with Cosmocloud. Deploy your applications with Cosmocloud Deploy superfast, with managed Devops and Deployments.",
  metadataBase: new URL("https://cosmocloud.io"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {children}
      {process.env.NEXT_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_GA_ID} />
      )}
      {process.env.NEXT_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_GTM_ID} />
      )}
    </html>
  );
}
