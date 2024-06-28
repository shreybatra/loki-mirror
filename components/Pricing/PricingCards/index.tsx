import React from "react";
import PricingCard from "./PricingCard";
import Link from "next/link";

const PricingCards = () => {
  const PricingPlans = [
    {
      heading: "Starter Plan",
      price: "₹10000",
      tagLine: "(For small scale projects)",
      features: [
        {
          desc: <p>1 Project</p>,
        },
        {
          desc: (
            <p>
              1 Production env (
              <Link
                href="https://docs.cosmocloud.io/concepts-and-in-depth/resources/environments/environment-tier-types"
                target="_blank"
                className="underline"
              >
                Shared-2
              </Link>
              )
            </p>
          ),
        },
        {
          desc: (
            <p>
              1{" "}
              <Link
                href="https://docs.cosmocloud.io/concepts-and-in-depth/resources/environments/environment-tier-types"
                target="_blank"
                className="underline"
              >
                Development
              </Link>{" "}
              env
            </p>
          ),
        },
        {
          desc: "Unlimited API calls",
        },
        {
          desc: "Upto 10 users",
        },
        {
          desc: "Standard support",
        },
      ],
    },
    {
      heading: "Professional Plan",
      price: "₹45000",
      color: "text-blue-300",
      tagLine: "(For medium scale projects)",
      features: [
        {
          desc: <p>1 Project</p>,
        },
        {
          desc: (
            <p>
              1 Production env (
              <Link
                href="https://docs.cosmocloud.io/concepts-and-in-depth/resources/environments/environment-tier-types"
                target="_blank"
                className="underline"
              >
                Low-1
              </Link>
              )
            </p>
          ),
        },
        {
          desc: (
            <p>
              1 Satging env (
              <Link
                href="https://docs.cosmocloud.io/concepts-and-in-depth/resources/environments/environment-tier-types"
                target="_blank"
                className="underline"
              >
                Shared-1
              </Link>
              )
            </p>
          ),
        },
        {
          desc: (
            <p>
              1{" "}
              <Link
                href="https://docs.cosmocloud.io/concepts-and-in-depth/resources/environments/environment-tier-types"
                target="_blank"
                className="underline"
              >
                Development
              </Link>{" "}
              Env
            </p>
          ),
        },
        {
          desc: "Unlimited API calls",
        },
        {
          desc: "Upto 25 users",
        },
        {
          desc: "Dedicated support",
        },
      ],
    },
    {
      heading: "Custom Plan",
      price: "Contact sales for pricing",
      isMontly: true,
      custom: true,
      tagLine: "(Unlimited scale)",
      features: [
        {
          desc: "Multiple projects",
        },
        {
          desc: "Custom environments",
        },
        {
          desc: "Unlimited Users",
        },
        {
          desc: "Unlimited scaling",
        },
        {
          desc: "High availability",
        },
        {
          desc: "Dedicated support",
        },
      ],
    },
  ];
  return (
    <>
      {PricingPlans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </>
  );
};

export default PricingCards;
