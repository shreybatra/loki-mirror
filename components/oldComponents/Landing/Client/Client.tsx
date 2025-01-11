"use client";

import { ClientLogos } from "@/constants/Clients";
import Image from "next/image";
import React from "react";

export const Client = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-12 items-center  ">
      <div className="flex flex-col gap-4 items-center md:gap-[12px]">
        <h3 className="text-primary-pink uppercase tracking-[2px] text-[12px] md:text-[16px] font-medium">
          Loved by Companies
        </h3>
        <div className="flex flex-col gap-[12px] items-center">
          <h2 className="font-[700] text-[20px] md:text-[32px] text-center">
            Our Clients
          </h2>
          {/* <p className="text-muted text-[12px] md:text-[14px] text-center">
            We believe in building strong, long-lasting relationships with our
            clients, and their success is our success.
          </p> */}
        </div>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-10 items-center justify-center w-4/5">
        {ClientLogos.map((client) => {
          return (
            <div
              key={client?.name}
              className="flex items-center justify-center w-[85px] md:w-[170px] h-auto"
              // style={{backgroundColor:"red"}}
            >
              <Image
                className="w-[195] rounded-lg"
                src={client?.image_src}
                alt={client?.name || "image"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
