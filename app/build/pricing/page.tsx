"use client";

import "@/components/oldComponents/PricingDataTemplate/pricingDataTemplate.css";

import "./pricing.css";
import Image from "next/image";
import PricingBg from "@/assets/svg/pricingBg.svg";
import { PricingHorizontalCards } from "@/components/oldComponents/PricingDataTemplate/PricingHorizontalCards";
import { PricingHeader } from "@/components/oldComponents/Pricing/PricingHeader/PricingHeader";
import { PricingTitle } from "@/components/oldComponents/Pricing/PricingTitle/PricingTitle";

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
import SchedulingModal from "@/components/oldComponents/Scheduling/SchedulingModal";
import { PricingSection } from "@/components/oldComponents/Pricing/PricingSection";

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
  priceSubtitle?: string;
}

const pricingPlans: PlanProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 0,
    description:
      "For individuals and small teams to get started with Cosmocloud.",
    buttonText: "Contact Sales",
    benefitList: [
      "1 Project",
      <span key={1}>
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
    price: 0,
    description: "For medium teams working on project with higher traffic.",
    buttonText: "Contact Sales",
    benefitList: [
      "1 Project",
      <span key={2}>
        1 Production Env (
        <Link href={tierDocLink} className="underline" target="_blank">
          Low-1
        </Link>
        )
      </span>,
      <span key={3}>
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
    price: 0,
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

export default function Page() {
  return (
    <div>
      <div className="hidden md:block bg-pricing">
        <Image src={PricingBg} alt="contact-bg" />
      </div>
      <PricingHeader />
      <PricingTitle />

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
            <PricingSection plans={pricingPlans} />
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
