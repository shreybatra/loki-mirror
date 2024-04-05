import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type Plan = {
  cloud: string;
  region: string;
  currency: string;
};

type PlanContextType = {
  plan: Plan;
  setPlan: Dispatch<SetStateAction<Plan>>;
};

interface PlanContextProviderProps {
  children: ReactNode;
}

const initialPlanContext: PlanContextType = {
  plan: {
    cloud: "aws",
    region: "ap-south-1",
    currency: "inr",
  },
  setPlan: () => {},
};

const PlanContext = createContext<PlanContextType>(initialPlanContext);

const PlanContextProvider: React.FC<PlanContextProviderProps> = ({
  children,
}) => {
  const [plan, setPlan] = useState<Plan>({
    cloud: "aws",
    region: "mumbai",
    currency: "inr",
  });

  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export { PlanContext, PlanContextProvider };
