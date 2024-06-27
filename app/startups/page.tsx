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
        // bg={true}
        isFirst={true}
        // heading={
        //   <span>
        //     The <span className="text-gradient">complete platform</span> for
        //     building your app's backend
        //   </span>
        // }
        heading={
          <span>
            Cosmocloud for <span className="text-gradient">Startups</span>
          </span>
        }
        badge="Cosmocloud for Startups"
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
        title="Why startups choose Cosmocloud"
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
      {/*banner */}
      <section className="w-full my-16 py-12 md:py-24 lg:py-32 background-gradient rounded-2xl">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-[#fff] md:text-4xl/tight">
              Ready to take your business to the next level?
            </h2>
            <p className="text-[#fcfcfc] md:text-xl/relaxed">
              Sign up today and unlock the power of our platform. Get started
              with a free trial.
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
