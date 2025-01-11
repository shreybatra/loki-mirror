"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import Link from "next/link";
enum PopularPlan {
  NO = 0,
  YES = 1,
}
import React from "react";
const CosmoBased = () => {
  const PricingPlans = [
    {
      title: "Starter Plan",
      popular: 0,
      price: 0,
      description: (
        <>
          <h1 className="text-2xl font-bold text-primary mr-4">$100</h1>
          per month
        </>
      ),
      buttonText: "Contact Sales",
      benefitList: [
        "1 Project",
        <span key={1}>
          1 Production Env (
          <Link href={"tierDocLink"} className="underline" target="_blank">
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
      description: (
        <>
          <h1 className="text-2xl font-bold text-primary mr-4">$500</h1>
          per month
        </>
      ),
      buttonText: "Contact Sales",
      benefitList: [
        "1 Project",
        <span key={2}>
          1 Production Env (
          <Link href={"tierDocLink"} className="underline" target="_blank">
            Low-1
          </Link>
          )
        </span>,
        <span key={3}>
          1 Staging Env (
          <Link href={"tierDocLink"} className="underline" target="_blank">
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
      description: (
        <>
          <h1 className="text-2xl font-bold text-primary mr-4">$1000</h1>
          per month
        </>
      ),
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
  return (
    <>
      <section className="md:container py-16 sm:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
          {PricingPlans.map(
            ({ title, popular, description, buttonText, benefitList }) => (
              <Card
                key={title}
                className={
                  popular === PopularPlan?.YES
                    ? "drop-shadow-xl w-[350px] shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                    : ""
                }
              >
                <CardHeader>
                  <CardTitle className="pb-2 text-2xl">{title}</CardTitle>

                  <CardDescription className="pb-4">
                    <div className="flex items-end">{description}</div>
                    <div className="flex text-white">+ Compute usage</div>
                    <Separator className="mt-4 bg-white" />
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex">
                  <div className="space-y-4">
                    {benefitList.map((benefit, idx) => (
                      <span className="flex" key={idx}>
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
    </>
  );
};

export default CosmoBased;
