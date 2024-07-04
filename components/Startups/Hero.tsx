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
  "aspect-square overflow-hidden rounded scale-[0.8] object-contain sm:w-full",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
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
    <section className="w-full mb-8">
      <div className="grid gap-8 px-4 md:px-6">
        {variant === "left" && (
          <div className="grid gap-0 md:grid-cols-2 md:gap-8 lg:gap-12">
            <Image
              src={image}
              width="550"
              height="310"
              alt="Feature 1"
              className={cn(heroBannerVariant({ variant: "default" }))}
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h2 className="text-2xl h font-bold md:text-3xl">{heading}</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {desc}
                </p>
              </div>
              <Link href={"linkUrl"}>
                <button className="button-dark border-background px-[18px] py-2 md:py-4 md:px-[24px]">
                  {cta}
                </button>
              </Link>
            </div>
          </div>
        )}

        {variant === "right" && (
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:gap-12">
            <div className="order-last md:order-first flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold md:text-3xl">{heading}</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {desc}
                </p>
              </div>
              <Link href={"linkUrl"}>
                <button className="button-dark border-background px-[18px] py-2 md:py-4 md:px-[24px]">
                  {cta}
                </button>
              </Link>
            </div>
            <Image
              src={image}
              width="550"
              height="310"
              alt="Feature 2"
              className={cn(heroBannerVariant({ variant: "default" }))}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
