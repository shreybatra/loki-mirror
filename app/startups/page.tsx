import Hero from "@/components/Startups/Hero";
import Features from "@/components/Startups/StartupFeatures";
import React from "react";
import accel from "@/assets/png/accel.png";
import startups from "@/assets/png/startups-slalom.png";
import Pointers from "@/components/Startups/Pointers";
import {
  WhyIncubatorsChooseCosmocloud,
  WhyStartupsChooseCosmocloud,
} from "@/components/Startups/constants";
import FAQs from "@/components/Startups/FAQs";
import Link from "next/link";

const page = () => {
  return (
    <div className="md:px-20 px-6">
      <Hero
        bg={true}
        isFirst={true}
        heading="The complete platform for building the Backend"
        badge="COSMOCLOUD FOR STARTUPS"
        desc=" Give your team the toolkit to stop configuring and start innovating.
        Securely build, deploy, and scale the best web experiences."
        image_src="https://mambaui.com/assets/svg/Business_SVG.svg"
        cta="Let's get started"
      />
      <Hero
        heading="Join our community of game-changing startups"
        desc="We are proud of every founder in our community. Let's partner together to accelerate your startup's success."
        cta="Join Us"
        order="2"
        image_src="https://assets-global.website-files.com/5ee2a460548fc323155ffd49/60349d2b5d61ccc7463945a6_Pair%20Programming%20with%20CoScreen%20(1).svg"
      />
      <Hero
        heading="Support for the next generation of founders"
        desc="Cosmocloud for Startups supports founders with the right resources at the right time, whether you’re getting started or are already on your way to IPO."
        cta="Apply for free"
        image_src={startups}
      />
      <Features />
      <Pointers
        title="Why startups choose MongoDB Atlas"
        pointers={WhyStartupsChooseCosmocloud}
      />

      <Hero
        heading="Are you a startup, or incubator?"
        desc="Make sure your founders have access to the best data platform, connections, and education for their rapidly scaling ventures."
        order="2"
        cta="Get in touch"
        image_src={accel}
      />
      <Pointers
        title="Why VCs and accelerators partner with Cosmocloud for Startups"
        pointers={WhyIncubatorsChooseCosmocloud}
      />
      <div className="flex flex-col justify-center gap-6 py-28 items-center bg-black rounded-xl">
        <h1 className="text-3xl  sm:text-4xl md:text-5xl font-bold tracking-tight">
          Ready to get started?
        </h1>
        <div className="flex min-w-fit mt-12">
          <Link href={"linkUrl"}>
            <button className="button-dark border-background px-[18px] py-[9px]  md:py-[12px] md:px-[24px]">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
      <FAQs />
    </div>
  );
};

export default page;
