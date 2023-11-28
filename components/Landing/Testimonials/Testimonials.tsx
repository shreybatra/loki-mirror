"use client";

import React, { useEffect, useRef } from "react";

import { HorizontalScroller } from "@/blocks";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialsData } from "@/constants/Testimonials";

export const Testimonials = () => {
  useEffect(() => {
    const scrollers = document.getElementsByClassName(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    }
  }, []);

  return (
    <div className="flex flex-col gap-[20px] w-full md:gap-[24px]">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[12px] font-[600] md:text-[28px] ">Don’t take our word for it</h3>
        <h2 className="text-gradient text-[16px] font-[600] md:text-[32px] ">
          Trust our Customers
        </h2>
      </div>
      <div className="w-full flex gap-[24px]">
        <HorizontalScroller direction="left" speed="slow">
          {TestimonialsData.map((testimonial, testimonialsIndex) => {
            return (
              <TestimonialCard
                key={testimonialsIndex}
                description={testimonial.description}
                customerName={testimonial.customerName}
                companyName={testimonial.companyName}
                image={testimonial.image}
              />
            );
          })}
        </HorizontalScroller>
      </div>
      <div className="flex overflow-hidden gap-[24px]">
        <HorizontalScroller direction="right" speed="slow">
          {TestimonialsData.map((testimonial, testimonialsIndex) => {
            return (
              <TestimonialCard
                key={testimonialsIndex}
                description={testimonial.description}
                customerName={testimonial.customerName}
                companyName={testimonial.companyName}
                image={testimonial.image}
              />
            );
          })}
        </HorizontalScroller>
      </div>
    </div>
  );
};
