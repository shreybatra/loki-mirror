"use client";

import "./pricing.css";
import Image from "next/image";
import PricingBg from "@/assets/svg/pricingBg.svg";
import { PricingHorizontalCards } from "@/components/PricingDataTemplate/PricingHorizontalCards";
import { PricingHeader } from "@/components/Pricing/PricingHeader/PricingHeader";
import { PricingTitle } from "@/components/Pricing/PricingTitle/PricingTitle";
import { ReactNode, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

const tierDocLink =
  "https://docs.cosmocloud.io/concepts-and-in-depth/resources/environments/environment-tier-types";

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: React.ReactNode;
  buttonText: string;
  benefitList: React.ReactNode[];
}

const plans: PlanProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 0,
    description:
      "For individuals and small teams to get started with Cosmocloud.",
    buttonText: "Contact Sales",
    benefitList: [
      "1 Project",
      <span>
        1 Production Env (
        <Link href={tierDocLink} className="underline" target="_blank">
          Shared-2
        </Link>
        )
      </span>,
      "1 Development Env",
      "Unlimited API calls",
      "Upto 10 team members",
      "Standard support",
    ],
  },
  {
    title: "Professional",
    popular: 1,
    price: 45,
    description: "For medium teams working on project with higher traffic.",
    buttonText: "Contact Sales",
    benefitList: [
      "1 Project",
      <span>
        1 Production Env (
        <Link href={tierDocLink} className="underline" target="_blank">
          Low-1
        </Link>
        )
      </span>,
      <span>
        1 Staging Env (
        <Link href={tierDocLink} className="underline" target="_blank">
          Shared-1
        </Link>
        )
      </span>,
      "1 Development Env",
      "Unlimited API calls",
      "Upto 25 team members",
      "Dedicated support",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 120,
    description:
      "For large teams working on multiple projects with high traffic.",
    buttonText: "Contact Sales",
    benefitList: [
      "Multiple Projects",
      "Custom Environments",
      "Unlimited API calls",
      "Unlimited team members",
      "Unlimited scaling",
      "High availability",
      "Priority support",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="md:container py-16 sm:py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                {/* <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div> */}
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="default" className="w-full">
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="hidden md:block bg-pricing">
        <Image src={PricingBg} alt="contact-bg" />
      </div>
      <PricingHeader />
      <PricingTitle />

      {/* Old Granular pricing
      <PlanContextProvider>
        <div className="flex flex-col md:flex-row mt-[42px]  md:mt-[84px]">
          <VerticalNavbar />
          <VerticalNavbar2 />
          {children}
        </div>
      </PlanContextProvider> */}

      <div className="flex justify-center">
        <div className="flex flex-col max-w-screen-2xl px-[6vw] justify-center items-center">
          <PricingHorizontalCards
            label="Get started with"
            span="Free Tier"
            description="Start for free to build your personal projects."
            buttonLabel={"Start for free"}
            linkUrl="https://dashboard.cosmocloud.io/sign-up"
          />

          <div className="flex w-full md:flex-row gap-12 flex-col justify-between items-center">
            <PricingSection />
          </div>
          <PricingHorizontalCards
            label="Looking to create "
            span="end-to-end"
            label2="projects?"
            description="Cosmocloud helps startups and companies build their projects using an amazing dev team."
            buttonLabel={"Reach out to us"}
            linkUrl="/contact"
          />
        </div>
      </div>
    </div>
  );
}
