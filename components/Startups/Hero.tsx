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
  "aspect-square overflow-hidden rounded-xl object-contain sm:w-full",
  {
    variants: {
      variant: {
        default: "",
        main: "scale-[1.5] md:scale-[1.5]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const containerVariant = cva(
  "flex items-center flex-col-reverse space-between gap-4 md:gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12",
  {
    variants: {
      variant: {
        left: "md:flex-row",
        right: "md:flex-row-reverse",
      },
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
  main = false,
  bg = false,
  variant = "left",
}: IHeroProps) => {
  return (
    <section
      className={`w-full ${
        bg
          ? "background-gradient rounded-2xl px-4 md:px-8 py-8 md:py-10"
          : "py-8 md:py-12"
      }`}
    >
      <div
        className={cn(
          containerVariant({ variant: variant })
        )}
      >
        <div className={`space-y-4 md:w-1/2`}>
          {badge && (
            <div className="inline-block rounded-full tracking-tight button-gradient font-medium px-4 py-2 text-md">
              {badge}
            </div>
          )}
          <h1
            className={`${
              main
                ? "text-[22px] md:text-[32px] lg:text-[48px] font-[700] "
                : "text-[22px] md:text-[32px] lg:text-[48px] font-[600]"
            } tracking-tight`}
          >
            {heading}
          </h1>
          <p className="text-neutral-300 tracking-tight text-[18px] md:text-[22px] py-4">
            {desc}
          </p>
          <div className="flex min-w-fit">
            <Link href={"linkUrl"}>
              <button className="button-dark border-background px-[18px] py-[9px]  md:py-[12px] md:px-[24px]">
                {cta}
              </button>
            </Link>
          </div>
        </div>
        <div className={`flex items-center md:w-1/2 justify-center`}>
          <Image
            src={image}
            width={695}
            height={550}
            alt="Hero"
            className={cn(
              heroBannerVariant({ variant: main ? "main" : "default" })
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
