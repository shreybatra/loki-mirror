"use client";
import { useState } from "react";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Separator } from "../../ui/separator";
import ComputeTable from "./ComputeTable";
import { IoCloseCircle } from "react-icons/io5";
import { ChevronsDown, ChevronsUp } from "lucide-react";

const ComputeCost = () => {
  const [isOpen, setIsopen] = useState(false);
  const mainPricing = [
    {
      title: "Memory",
      price: "$10",
      unit: "Per GB / month",
      subPrice: "$0.000231 / GB / minute",
    },
    {
      title: "CPU",
      price: "$20",
      unit: "Per vCPU core / month",
      subPrice: "$0.000463 / vCPU / minute",
    },
    {
      title: "Network Egress",
      price: "$0.10",
      unit: "Per GB used",
      subPrice: "$0.000000095367432 / KB",
    },
  ];

  const addOns = [
    {
      title: "Optional Add-ons",
      price:
        "          Supercharge your application with these additions. Billed monthly.",
    },
    {
      title: "Backups",
      price: (
        <h2 className="text-[16px] text-white md:text-[18px] lg:text-[20px] font-[700]">
          $0.25
          <span className="text-sm text-muted font-normal">
            {"  "}per GB/month
          </span>
        </h2>
      ),
    },
    {
      title: "Premium Support",
      price: (
        <h2 className="text-[16px] text-white md:text-[18px] lg:text-[20px] font-[700]">
          $0.25
          <span className="text-sm text-muted font-normal">
            {"  "}per GB/month
          </span>
        </h2>
      ),
    },
    {
      title: "Persistent Volume",
      price: (
        <h2 className="text-[16px] text-white md:text-[18px] lg:text-[20px] font-[700]">
          $0.25
          <span className="text-sm text-muted font-normal">
            {"  "}per GB/month
          </span>
        </h2>
      ),
    },
  ];
  const features = [
    {
      header: <h1 className="text-primary text-xl">MEMORY</h1>,
      name: (
        <>
          $10{" "}
          <span className="text-base text-muted-foreground font-medium">
            per GB/month
          </span>
        </>
      ),
      description: (
        <div className="flex flex-col justify-between gap-6 my-5">
          <Separator />
          <div className="text-sm text-muter-foreground">
            $0.000231 / GB / minute
          </div>
        </div>
      ),
    },
    {
      header: <h1 className="text-primary text-xl">CPU</h1>,
      name: (
        <>
          $20{" "}
          <span className="text-base text-muted-foreground font-medium">
            per vCPU core/month
          </span>
        </>
      ),
      description: (
        <div className="flex flex-col justify-between gap-6 my-5">
          <Separator />
          <div className="text-sm text-muter-foreground">
            $0.000463 / vCPU / minute
          </div>
        </div>
      ),
    },
    {
      header: <h1 className="text-primary text-xl">NETWORK EGRESS</h1>,
      name: (
        <>
          $0.10{" "}
          <span className="text-base text-muted-foreground font-medium">
            per GB used
          </span>
        </>
      ),
      description: (
        <div className="flex flex-col justify-between gap-6 my-5">
          <Separator />
          <div className="text-sm text-muter-foreground">
            $0.000000095367432 / KB
          </div>
        </div>
      ),
    },
  ];

  const extras = [
    {
      header: "Optional Add-ons",
      desc: (
        <p className="text-sm text-muted">
          Supercharge your application with these additions. Billed monthly.
        </p>
      ),
    },
    {
      header: "Persistent Volume",
      desc: (
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-[700]">
          $0.25
          <span className="text-sm text-muted font-normal">
            {"  "}per GB/month
          </span>
        </h2>
      ),
    },
    {
      header: "Premium Support",
      desc: (
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-[700]">
          Custom
          <span className="text-sm text-muted font-normal">
            {"  "}per Team/month
          </span>
        </h2>
      ),
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-[24px] w-full">
        <div className="flex flex-col gap-[24px] w-full">
          <div className="flex flex-col gap-[24px]">
            <h3 className="text-primary-pink uppercase tracking-[5px] text-start text-[12px] md:text-[16px] md:text-center">
              COMPUTE COST
            </h3>
            <div className="flex flex-row gap-[12px] justify-between items-center md:flex-col">
              <h2 className="font-[700] w-[250px] text-[20px] text-start md:text-[32px] md:w-[100vw] md:text-center">
                Usage Pricing
              </h2>
              <div className="cursor-pointer flex gap-2 items-center text-muted">
                Pick a plan then pay for the resource you use
              </div>
            </div>
          </div>
        </div>
        {/* <div className="my-5 mx-auto grid grid-cols-3 justify-center items-center gap-5">
          {features.map((feature, idx) => (
            <div
              className={`flex flex-col items-center gap-[16px] 
                p-[24px] rounded-lg backdrop-blur-2xl bg-[#282828dc] w-full h-auto max-w-sm min-h-fit `}
            >
              <div>{feature.header}</div>
              <div className="flex flex-col gap-[8px]">
                <div className=" flex flex-col text-xl gap-2 items-center mt-2 md:text-4xl font-[700]">
                  {feature.name}
                </div>
                <p className="text-muted text-[12px] md:text-[14px] lg:text-[18px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>{" "} */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center mb-16 overflow-x-auto pb-4">
            <div className="flex gap-8">
              {mainPricing.map((item, index) => (
                <Card
                  key={index}
                  className="flex flex-col justify-between 
                  shadow-lg hover:shadow-xl border-none transition-shadow duration-300 w-64 py-5 rounded-lg backdrop-blur-2xl bg-[#282828dc] flex-shrink-0"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primary font-semibold text-center">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-bold">{item.price}</p>
                    <p className="text-sm text-gray-600 mt-2">{item.unit}</p>
                  </CardContent>
                  <CardFooter className="border-t border-muted-foreground p-4 pb-0">
                    <p className="text-xs text-gray-500 text-center w-full">
                      {item.subPrice}
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center overflow-x-auto ">
            <div
              className="flex gap-4"
              style={{ width: "calc(3 * 256px + 2 * 32px)" }}
            >
              {addOns.map((addon, index) => (
                <Card
                  key={index}
                  className="shadow-md hover:shadow-lg transition-shadow justify-between duration-300 flex-shrink-0 !bg-none bg-transparent  border-muted-foreground text-white"
                  style={{ width: "calc(25% - 12px)" }}
                >
                  <CardHeader>{addon.title}</CardHeader>
                  <CardContent>
                    <p className="  text-xs text-muted-foreground">
                      {addon.price}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="my-5 mx-auto grid grid-cols-3 justify-center gap-5">
          {extras.map((item) => [
            <Card className="!bg-none bg-transparent !max-w-[15rem] border-muted-foreground text-white">
              <CardHeader className="p-3">{item.header}</CardHeader>
              <CardContent className="p-3">{item.desc}</CardContent>
            </Card>,
          ])}
        </div> */}
        <div className="flex w-full justify-center">
          <Button
            className="text-white max-w-sm px-12 py-4 my-5 "
            onClick={() => {
              setIsopen(!isOpen);
            }}
          >
            {" "}
            Compare all Features{" "}
            {!isOpen ? (
              <ChevronsDown className="w-6 h-6 ml-6" />
            ) : (
              <ChevronsUp className="w-6 h-6 ml-6" />
            )}
          </Button>
        </div>
        {isOpen && (
          <div className="flex flex-col gap-6 my-8">
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl text-white">Compare Plans</h1>
                <p className="text-sm text-muted">
                  Comparison with existing PaaS Platforms
                </p>
              </div>
            </div>

            <ComputeTable />
          </div>
        )}
      </div>
    </>
  );
};

export default ComputeCost;
