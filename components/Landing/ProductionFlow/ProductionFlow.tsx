"use client";
import React from "react";
import PipelineFlowImage from "@/assets/svg/pipeline1.svg";

import Image from "next/image";
import { ProductionFlowCard } from "./ProductionFlowCard";

export const ProductionFlow = () => {
  const ProductionFlowData = [
    {
      title: "Design",
      description:
        "Design is a pivotal facet of product development. It blends functionality with aesthetics, creating user-friendly and market-ready solutions. Whether digital or physical, design is the essence of innovation and user satisfaction.",
    },
    {
      title: "Integrations",
      description:
        "Integrations are vital in product development, linking diverse systems and services to enhance functionality. They streamline processes, expand capabilities, and provide seamless user experiences.",
    },
    {
      title: "Backend",
      description:
        "Backend is the engine of product development, powering data management and user experiences. It ensures security, performance, and scalability, critical for a seamless, robust product.",
    },
    {
      title: "Deploy",
      description:
        "Deployment is the final product development stage, making the solution accessible to users. It's the bridge from development to production, ensuring a successful and functional launch.",
    },
  ];

  return (
    <div className="flex flex-col gap-[96px] relative w-full">
      <div className="flex flex-col gap-[12px] items-center">
        <h3 className="text-primary-pink uppercase tracking-[5px]">
          Production Flow
        </h3>
        <h2 className="text-[32px] font-[700]">Feature pipeline flow</h2>
      </div>
      <div className="hidden md:block relative  lg:h-[600px]">
        <Image src={PipelineFlowImage} alt="Pipeline" />
        <div className="absolute md:top-[10px] lg:top-0 h-full w-full flex flex-col justify-center gap-[52px]">
          <div className="absolute top-[-15px] lg:top-[-16%] flex h-1/2 mb-[50px] items-end w-full">
            <div className="absolute left-[9%] lg:left-[1%]">
              <ProductionFlowCard
                title={ProductionFlowData[0].title}
                description={ProductionFlowData[0].description}
              />
            </div>
            <div className="absolute left-[50%] lg:left-[42%] lg:bottom-[10px]">
              <ProductionFlowCard
                title={ProductionFlowData[1].title}
                description={ProductionFlowData[1].description}
              />
            </div>
          </div>
          <div className="absolute bottom-[-20px] lg:bottom-0 flex h-1/2  w-full">
            <div className="absolute right-[45%] top-[10px] lg:top-[-25px]">
              <ProductionFlowCard
                title={ProductionFlowData[2].title}
                description={ProductionFlowData[2].description}
              />
            </div>
            <div className="absolute right-[9%] lg:right-[1%] lg:top-[-30px]">
              <ProductionFlowCard
                title={ProductionFlowData[3].title}
                description={ProductionFlowData[3].description}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden relative">
        <div className="flex flex-col items-center gap-[52px] relative">
          <div className="absolute flex flex-col w-[290px] md:w-[170px] lg:w-[280px] h-full">
            <div className="w-[700px] production-flow-border left-[-132.5%] sm:left-[-132%] md:hidden"></div>
          </div>

          <ProductionFlowCard
            title={ProductionFlowData[0].title}
            description={ProductionFlowData[0].description}
            type="pink"
            // showBorder={true}
          />
          <ProductionFlowCard
            title={ProductionFlowData[1].title}
            description={ProductionFlowData[1].description}
            type="pink"
          />

          <ProductionFlowCard
            title={ProductionFlowData[2].title}
            description={ProductionFlowData[2].description}
            type="purple"
          />

          <ProductionFlowCard
            title={ProductionFlowData[3].title}
            description={ProductionFlowData[3].description}
            type="purple"
          />
        </div>
      </div>
    </div>
  );
};
