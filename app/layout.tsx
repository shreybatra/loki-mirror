import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./blocks.css";
import "./text.css";
import "./border.css";
import "./components.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cosmocloud",
  description: "Backend as a service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col gap-[32px] md:gap-0 overflow-hidden">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
