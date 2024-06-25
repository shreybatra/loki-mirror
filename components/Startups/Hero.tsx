import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";

export interface IHeroProps {
  badge?: string;
  image_src?: string | StaticImageData | undefined;
  heading?: string;
  desc?: string;
  cta?: string;
  bg?: boolean;
  order?: "1" | "2";
  isFirst?: boolean;
}

const Hero = ({
  badge,
  image_src = "",
  heading,
  desc,
  cta,
  isFirst = false,
  bg = false,
  order = "1",
}: IHeroProps) => {
  return (
    <section
      className={`w-full ${
        bg ? "bg-black rounded-xl  py-12 md:py-24" : "py-12 md:py-20 "
      }`}
    >
      <div className="container grid   items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
        <div className={`space-y-4 order-${order}`}>
          {badge && (
            <div className="inline-block rounded-lg tracking-tight bg-neutral-600 px-3 py-1 text-xs">
              {badge}
            </div>
          )}
          <h1
            className={`${
              isFirst
                ? "text-4xl  sm:text-5xl md:text-6xl "
                : "text-3xl  sm:text-4xl md:text-5xl "
            }font-bold tracking-tight `}
          >
            {heading}
          </h1>
          <p className="text-neutral-300 tracking-tight md:text-lg py-4">
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
        <div className="flex items-center justify-center">
          <Image
            src={image_src}
            width={695}
            height={550}
            alt="Hero"
            className="aspect-square overflow-hidden rounded-xl object-contain sm:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
