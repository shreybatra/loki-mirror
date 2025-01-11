import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import SchedulingModal from "@/components/oldComponents/Scheduling/SchedulingModal";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: React.ReactNode;
  buttonText: string;
  benefitList: React.ReactNode[];
  priceSubtitle?: string;
}

export const PricingSection = ({ plans }: { plans: PlanProps[] }) => {
  return (
    <section className="md:container py-16 sm:py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({
            title,
            popular,
            price,
            description,
            buttonText,
            benefitList,
            priceSubtitle,
          }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                {price !== 0 && (
                  <div>
                    <span className="text-3xl font-bold">${price}</span>
                    <span className="text-muted-foreground"> /month</span>
                  </div>
                )}
                {priceSubtitle && (
                  <div className="text-muted-foreground">{priceSubtitle}</div>
                )}
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit, idx) => (
                    <span className="flex" key={idx}>
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <SchedulingModal
                  btnText={buttonText}
                  cName="button-gradient px-4 py-2 w-full"
                />
                {/* <Button variant="default" className="w-full">
                    
                  </Button> */}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
