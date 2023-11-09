"use client";
import { ClientLogos } from "@/constants/Clients";
import Image from "next/image";
import React from "react";

export const Client = () => {
  return (
    <div className="flex flex-col gap-[100px] items-center">
      <div className="flex flex-col gap-[24px] items-center">
        <h3 className="text-primary-pink uppercase tracking-[5px]">
          Our Clients
        </h3>
        <div className="flex flex-col gap-[12px] items-center">
          <h2 className="text-[32px] font-[700]">Loved by Companies</h2>
          <p className="text-muted">
            We believe in building strong, long-lasting relationships with our
            clients, and their success is our success.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 items-center w-[1064px]">
        {ClientLogos.map((client) => {
          return (
            <div
              key={client.name}
              className="w-[170px] h-[96px] flex items-center"
            >
              <Image src={client.icon} alt={client.name} />
            </div>
          );
        })}
        {ClientLogos.map((client) => {
          return (
            <div
              key={client.name}
              className="w-[170px] h-[96px] flex items-center"
            >
              <Image src={client.icon} alt={client.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
