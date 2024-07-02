import Hero from "@/components/Startups/Hero";
import Features from "@/components/Startups/StartupFeatures";
import React from "react";
import accel from "@/assets/png/accel.png";
import startups from "@/assets/png/startups-slalom.png";
import StartUpBanner from  "@/assets/svg/startup/Cosmocloud for startup right 1.svg"
import StartUpBannerSmallScreen from  "@/assets/svg/startup/Cosmocloud for startup Center 1.svg"
import Pointers from "@/components/Startups/Pointers";
import {
  WhyIncubatorsChooseCosmocloud,
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
        variant="right"
        image="https://assets-global.website-files.com/5ee2a460548fc323155ffd49/60349d2b5d61ccc7463945a6_Pair%20Programming%20with%20CoScreen%20(1).svg"
      />
      <Hero
        heading="Supporting next-gen founders"
        desc="Cosmocloud for Startups supports founders with the right set of resources, from getting started upto all the way to your IPO."
        cta="Apply for free"
        image={startups}
      />
      <Features />
      <Pointers
        title="Why startups choose Cosmocloud"
        pointers={WhyStartupsChooseCosmocloud}
      />

      <Hero
        heading="Are you a startup, or incubator?"
        desc="Make sure your founders have access to the best data platform, connections, and education for their rapidly scaling ventures."
        variant="right"
        cta="Get in touch"
        image={accel}
      />
      {/* <Pointers
        title="Why VCs and accelerators partner with Cosmocloud for Startups"
        pointers={WhyIncubatorsChooseCosmocloud}
      /> */}
      {/*banner */}
      <section className="w-full my-16 py-12 md:py-24 lg:py-32 background-gradient rounded-2xl">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-[#fff] md:text-4xl/tight">
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
