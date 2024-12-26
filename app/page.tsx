import Image from "next/image";
import Frame1Img from "@/assets/svg/cardBg.svg";
import Frame2Img from "@/assets/svg/cardBg2.svg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
export default function Page() {
  return (
    <main className="flex flex-col items-center gap-[120px] mt-12 md:gap-[190px]">
      <div className="flex flex-col items-center gap-[90px] w-[90%] md:gap-[190px]">
        <div className="flex flex-col gap-[56px] relative">
          <div className="flex flex-col items-center gap-[24px] w-full">
            <div className="text-[22px] max-w-xl md:text-[32px] lg:text-[48px] font-[700]">
              <h2 className="text-center">
                Seamless and fastest way to
                <span className="text-gradient font-[800]">Production</span>
              </h2>
            </div>
            <p className="text-muted text-center">
              Build, deploy, and scale your apps with unparalleled ease – from
              your first user to your billionth.
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/deploy">
              <Card
                className="md:w-[500px]
                  hover:shadow-lg dark:bg-gray-800 dark:hover:shadow-gray-700/50 dark:border-gray-700 hover:border-primary"
              >
                <CardHeader className="pb-0">
                  <CardTitle className="text-4xl">
                    Deploy in Seconds
                    <h1 className="text-lg my-5 font-medium">
                      Your own effortless Auto-DevOps tool
                    </h1>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex p-0 items-center justify-end">
                  <Image
                    src={Frame2Img}
                    alt="Nature illustration"
                    width={350}
                    height={200}
                    className="w-[260px] h-[228px]"
                  />
                </CardContent>
              </Card>
            </Link>
            <Link href="/build">
              <Card
                className=" md:w-[500px]
                  hover:shadow-lg dark:bg-gray-800 dark:hover:shadow-gray-700/50 dark:border-gray-700 hover:border-primary"
              >
                <CardHeader className="pb-0">
                  <CardTitle className="text-4xl">
                    Backend-as-a-service
                    <h1 className="text-lg my-5 font-medium">
                      Building APIs in just 5 minutes
                    </h1>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex p-0 items-center justify-end">
                  <Image
                    src={Frame1Img}
                    alt="Nature illustration"
                    width={350}
                    className="w-[260px] h-[228px]"
                    height={200}
                  />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
