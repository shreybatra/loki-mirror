"use client";
import { TestimonialsData } from "@/constants/Testimonials";
import React, { useEffect, useRef } from "react";
import { HorizontalScroller } from "@/blocks";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  useEffect(() => {
    const scrollers = document.getElementsByClassName(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    }
  }, []);

  return (
    <div className="flex flex-col gap-[24px] w-full">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[28px] font-[700]">Don’t take our word for it</h3>
        <h2 className="text-gradient text-[32px] font-[700]">
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
