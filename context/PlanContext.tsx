// PlanContext.tsx
"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// Define the type for your plan
type Plan = {
  cloud: string;
  region: string;
  currency: string;
};

// // Define the type for your context
type PlanContextType = {
  plan: Plan;
  setPlan: Dispatch<SetStateAction<Plan>>;
};

const PlanContext = createContext<PlanContextType>({} as PlanContextType);
const PlanContextProvider: React.FC = ({ children }) => {
  const [plan, setPlan] = useState({
    cloud: "aws",
    region: "mumbai",
    currency: "usd",
  });

  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export { PlanContext, PlanContextProvider };
