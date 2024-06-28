import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TestimonialsData } from "@/constants/Testimonials";
import { TestimonialCard } from "../Landing/Testimonials/TestimonialCard";
import { ClientLogos } from "@/constants/Clients";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
const TestimonialCarousel = () => {
  return (
    <div className=" flex flex-col justify-center md:py-12 items-center gap-5">
      <div className="flex flex-col border-b-[1px] border-spacing-7 border-gray-600">
        <h3 className="text-primary-pink text-center tracking-tight text-lg font-medium">
          What our clients say
        </h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-sm ml-4"
        >
          <CarouselContent>
            {TestimonialsData.map((testimonial, testimonialsIndex) => (
              <CarouselItem key={testimonialsIndex}>
                <TestimonialCard
                  key={testimonialsIndex}
                  description={testimonial.description}
                  customerName={testimonial.customerName}
                  companyName={testimonial.companyName}
                  image={testimonial.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex flex-col gap-4 ">
        <h3 className="text-primary-pink text-center tracking-tight text-lg font-medium">
          Rated by the best
        </h3>
        <div className="flex flex-wrap gap-x-5 gap-y-5 items-center justify-center">
          {ClientLogos.map((client, idx) => {
            return (
              idx < 4 && (
                <div
                  key={client?.name}
                  className="flex items-center justify-center w-[85px]  h-auto"
                >
                  <Image
                    className="w-[95] rounded-lg"
                    src={client?.image_src}
                    alt={client?.name || "image"}
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
