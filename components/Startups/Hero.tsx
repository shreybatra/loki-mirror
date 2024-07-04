import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface IHeroProps {
  badge?: string;
  image?: string | StaticImageData | undefined;
  heading?: React.ReactNode;
  desc?: string;
  cta?: string;
  bg?: boolean;
  variant?: "left" | "right";
  main?: boolean;
}

const heroBannerVariant = cva(
  "aspect-square overflow-hidden scale-[0.7] rounded-md object-contain sm:w-full",
  {
    variants: {
      variant: {
        default: "",
        main: "hidden md:block md:left-2 z-[-200] absolute",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const containerVariant = cva(
  "flex relative items-center flex-col-reverse space-between gap-4 md:gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12",
  {
    variants: {
      variant: {
        left: "md:flex-row",
        right: "md:flex-row-reverse",
      }
    },
    defaultVariants: {
      variant: "left",
    },
  }
);

const Hero = ({
  badge,
  image = "",
  heading,
  desc,
  cta,
  variant = "left",
}: IHeroProps) => {
  return (
    <section className={`w-full py-8 md:py-12 `}>
      <div
        className={cn(
          containerVariant({
            variant: variant,
          })
        )}
      >
        <div className={`space-y-4 md:w-1/2`}>
          {badge && (
            <div className="inline-block rounded-full tracking-tight button-gradient font-medium px-4 py-2 text-md">
              {badge}
            </div>
          )}
          <h1
            className={`font-[700] text-[20px] md:text-[32px] tracking-tight`}
          >
            {heading}
          </h1>
          <p className="text-gray-300 tracking-tight md:text-[22px] py-2 md:py-4">
            {desc}
          </p>
          <div className="flex min-w-fit">
            <Link href={"linkUrl"}>
              <button className="button-dark border-background px-[18px] py-2 md:py-4 md:px-[24px]">
                {cta}
              </button>
            </Link>
          </div>
        </div>
        <div className={`flex items-center rounded background-gradient md:w-1/2 justify-center`}>
          <Image
            src={image}
            width={695}
            height={550}
            alt="Hero"
            className={cn(
              heroBannerVariant({ variant: "default" })
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
