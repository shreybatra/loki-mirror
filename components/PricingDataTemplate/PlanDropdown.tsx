"use client";

import { useContext, useEffect, useState } from "react";

import { PlanContext } from "@/context/PlanContext";
import { dropDownData } from "@/constants/Pricing/index";

type PlanDropdownData = {
  cloud: string;
  region: string[];
  currency: string[];
};
const PlanDropdown = () => {
  const { plan, setPlan } = useContext(PlanContext);

  const cloudKeys = Object.keys(dropDownData);
  const selectedCloud: any = dropDownData[plan.cloud]
  const [data, setData] = useState<PlanDropdownData>({
    cloud: plan.cloud,
    region: selectedCloud.region,
    currency: selectedCloud.currency,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 my-[44px] gap-[20px]">
      <div className="plan--dropdown">
        <p>Cloud</p>
        <select
          name="cloud"
          id="cloud"
          value={data.cloud}
          onChange={(e) => {
            setData({
              ...data,
              cloud: e.target.value,
              region: dropDownData[e.target.value].region,
            });
            setPlan({
              ...plan,
              cloud: e.target.value,
              region: dropDownData[e.target.value].region[0],
            });
          }}
        >
          {cloudKeys.map((val) => (
            <option key={val}>{val}</option>
          ))}
        </select>
      </div>
      <div className="plan--dropdown">
        <p>Region</p>
        <select
          name="region"
          id="region"
          value={plan.region}
          onChange={(e) => {
            setPlan({ ...plan, region: e.target.value });
          }}
        >
          {data.region.map((val) => (
            <option key={val}>{val}</option>
          ))}
        </select>
      </div>
      <div className="plan--dropdown">
        <p>Currency</p>
        <select
          name="currency"
          id="currency"
          value={plan.currency}
          onChange={(e) => {
            setPlan({ ...plan, currency: e.target.value });
          }}
        >
          {data.currency.map((val) => (
            <option key={val}>{val}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PlanDropdown;
