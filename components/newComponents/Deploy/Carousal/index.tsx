import banner1 from "@/assets/png/deploy/1.png";
import banner2 from "@/assets/png/deploy/2.png";
import banner3 from "@/assets/png/deploy/5.png";
import banner4 from "@/assets/png/deploy/4.png";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const items = [
  {
    title: "Deploy and monitor",
    image: banner1,
  },
  {
    title: "Release and Rollback",
    image: banner2,
  },
  {
    title: "Logs and Debugging",
    image: banner3,
  },
  {
    title: "Connect your DNS",
    image: banner4,
  },
];

export const Carousal = () => {
  return (
    <div className="w-full md:px-40 px-4">
      <div className="flex flex-col gap-[24px] items-center">
        <h3 className="text-primary-pink uppercase tracking-[5px] text-[12px] md:text-[16px]">
          Cosmocloud Deploy
        </h3>
        <div className="flex flex-col gap-[12px] items-center">
          <h2 className="font-[700] text-[20px] md:text-[32px] text-center">
            Deploy, scale and maintain in{" "}
            <span className="text-gradient">just minutes</span>
          </h2>
          <p className="text-muted-foreground text-[14px] md:text-[16px] text-center">
            Forget hiring expensive devops team, or asking your engineers to
            maintain your cloud deployments.
          </p>
        </div>
      </div>
      <Tabs defaultValue={items[0].title} className="w-full mt-10">
        <TabsList className="grid md:w-full grid-cols-4 bg-gray-900/70 rounded mb-4 h-full">
          {items.map((item, index) => (
            <>
              <TabsTrigger
                key={index + "1"}
                className="hidden md:block"
                value={item.title}
              >
                {item.title}
              </TabsTrigger>
              <TabsTrigger
                key={index + "2"}
                className="block md:hidden"
                value={item.title}
              >
                {index + 1}
              </TabsTrigger>
            </>
          ))}
        </TabsList>
        {items.map((item, index) => (
          <TabsContent key={index} value={item.title} className="w-full">
            <Image src={item.image} alt="" className="rounded border" />
            <div className="md:hidden flex justify-center text-gradient font-semibold mt-2">
              <h1 className="text-lg">{item.title}</h1>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
