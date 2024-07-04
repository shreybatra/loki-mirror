import Hero from "@/components/Startups/Hero";
import Features from "@/components/Startups/StartupFeatures";
import React from "react";
import StartUpBanner from "@/assets/svg/startup/Cosmocloud for startup right 1.svg";
import StartUpBannerSmallScreen from "@/assets/svg/startup/Cosmocloud for startup Center 1.svg";
import Pointers from "@/components/Startups/Pointers";
import getStarted from "@/assets/jpg/getStarted.jpg";
import ScaleYourStartupBanner from "@/assets/svg/startup/scale-your-startup.svg"
import GrowthBanner from "@/assets/svg/startup/Growth.svg";
import IncubatorBanner from "@/assets/svg/startup/Incubator.svg"
import NextGenDeveloperBanner from '@/assets/svg/startup/Next Gen Developer.svg';
import {
  WhyStartupsChooseCosmocloud,
} from "@/components/Startups/constants";
import FAQs from "@/components/Startups/FAQs";
import Link from "next/link";
import HeroBanner from "@/components/Startups/HeroBanner";

const page = () => {
  return (
    <div className="md:px-20 px-2">
      <HeroBanner
        heading={
          <span>
            Cosmocloud for <span className="text-gradient">Startups</span>
          </span>
        }
        badge="Cosmocloud for Startups"
        desc="Give your team the toolkit to stop configuring and start innovating.
        Securely build, deploy, and scale the best web experiences."
        bannerLargeScreen={StartUpBanner}
        bannerSmallScreen={StartUpBannerSmallScreen}
        cta="Apply Now"
      />
      <Hero
        heading="Scale your startup from Ideation to Growth stage"
        desc="This program is meant for early stage startups currently at Series B or earlier, helping them build their product and multiple microservices to boost their feature development productivity."
        cta="Join Us"
        image={GrowthBanner}
      />
      <Hero
        heading="Supporting next-gen founders"
        desc="Cosmocloud for Startups supports founders with the right set of resources, from getting started upto all the way to your IPO."
        cta="Apply Now"
        variant="right"
        image={NextGenDeveloperBanner}
      />
      
      <Features />
      <Pointers
        title="Why startups choose Cosmocloud"
        pointers={WhyStartupsChooseCosmocloud}
      />

      <Hero
        heading="Are you a Startup Accelerator, Incubator or VC?"
        desc="Make sure your founders have access to the best data platform, connections, and education for their rapidly scaling ventures."
        variant="right"
        cta="Apply Now"
        image={IncubatorBanner}
      />
      {/* <Pointers
        title="Why VCs and accelerators partner with Cosmocloud for Startups"
        pointers={WhyIncubatorsChooseCosmocloud}
      /> */}
      {/*banner */}
      <section
        className={`mx-4 my-20 py-12 md:py-24 lg:py-32 background-gradient rounded`}
      >
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-semibold text-[#fff] md:text-4xl/tight">
              Ready to take your business to the next level?
            </h2>
            <p className="text-[#fcfcfc] md:text-xl/relaxed">
              Sign up today and unlock the power of our platform.
            </p>
            <Link href={"linkUrl"}>
              <button className="button-dark border-background mt-4 px-[18px] py-[9px]  md:py-[12px] md:px-[24px]">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </section>
      <FAQs />
    </div>
  );
};

export default page;
