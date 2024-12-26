import Features from "@/components/Deploy/Deploy-Features";
import HowDeployWorks from "@/components/Deploy/Deploy-video";
import FAQSection from "@/components/Deploy/FAQ-deploy";
import Footer from "@/components/Deploy/Footer";
import Header from "@/components/Deploy/Header";
import AutoDevops from "@/components/Deploy/Why-Deploy";
import { Partners } from "@/components/Landing";
import React from "react";

const Page = () => {
  return (
    <main className="flex flex-col items-center gap-[120px] md:gap-[190px]">
      <div className="flex flex-col items-center gap-[90px] w-[90%] md:gap-[190px]">
        <div className="flex items-center flex-col mt-6 gap-[45px]">
          <Header />
        </div>
        <Features />
        <AutoDevops />
        <FAQSection />
        <Partners />
        <HowDeployWorks />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
