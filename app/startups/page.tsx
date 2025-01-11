import Hero from "@/components/oldComponents/Startups/Hero";
import Features from "@/components/oldComponents/Startups/StartupFeatures";
import React from "react";
import StartUpBanner from "@/assets/svg/startup/Cosmocloud for startup right 1.svg";
import StartUpBannerSmallScreen from "@/assets/svg/startup/Cosmocloud for startup Center 1.svg";
import Pointers from "@/components/oldComponents/Startups/Pointers";
import GrowthBanner from "@/assets/svg/startup/Growth.svg";
import IncubatorBanner from "@/assets/svg/startup/Incubator.svg";
import NextGenDeveloperBanner from "@/assets/svg/startup/Next Gen Developer.svg";
import { WhyStartupsChooseCosmocloud } from "@/components/oldComponents/Startups/constants";
import FAQs from "@/components/oldComponents/Startups/FAQs";
import Link from "next/link";
import HeroBanner from "@/components/oldComponents/Startups/HeroBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosmocloud for Startups",
  description:
    "Build your next pluggable backend microservice, fully no-code. From complex APIs to background jobs to search, everything in one single platform.",
  metadataBase: new URL("https://cosmocloud.io"),
  openGraph: {
    images: [{ url: "https://public.cosmocloud.io/Startups-Banner.png" }],
  },
};

const page = () => {
  return (
    <div className="md:px-20 px-2">
      <HeroBanner
        heading={
          <span>
            Cosmocloud for <span className="text-gradient">Startups</span>
          </span>
        }
        badge="Credits upto $2000"
        desc="Give your team the toolkit to start innovating your ideas for growth.
        Securely build, deploy, and scale the best web experiences and build the most robust applications."
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
        desc="Cosmocloud for Startups supports founders with the right set of resources, from getting started upto all the way to your IPO. From access to platform, to credits and networking opportunities, we have got you covered."
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
      <section
        className={`mx-4 my-20 py-12 md:py-24 lg:py-16 background-gradient rounded-2xl saturate-200`}
      >
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-4 px-2">
            <h2 className="text-2xl font-semibold text-[#fff] md:text-4xl/tight">
              Ready to take your business to the next level?
            </h2>
            <p className="text-[#fcfcfc] md:text-xl/relaxed">
              Sign up today and unlock the power of our platform.
            </p>
            <Link
              href="https://forms.gle/hiN5rSM8KCFUfceH8"
              target="_blank"
              className="w-fit"
            >
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
