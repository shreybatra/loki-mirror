"use client";

import { ClientLogos } from "@/constants/Clients";
import Image from "next/image";
import React from "react";

export const Client = () => {
  return (
    <div className="flex flex-col gap-[42px] items-center md:gap-[100px] ">
      <div className="flex flex-col gap-[24px] items-center md: gap-[12px]">
        <h3 className="text-primary-pink uppercase tracking-[5px] text-[12px] md:text-[16px] font-medium">
          Our Clients
        </h3>
        <div className="flex flex-col gap-[12px] items-center">
          <h2 className="font-[700] text-[20px] md:text-[32px] text-center">Loved by Companies</h2>
          <p className="text-muted text-[12px] md:text-[14px] text-center">
            We believe in building strong, long-lasting relationships with our
            clients, and their success is our success.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-10 gap-y-5 items-center justify-center">
        {ClientLogos.map((client) => {
          return (
            <div
              key={client.name}
              className="flex items-center w-[85px] h-auto  md:w-[170px] h-auto"
              // style={{backgroundColor:"red"}}
            >
              <Image src={client.icon} alt={client.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
