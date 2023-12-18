"use client";

import { cloudTypes, currencyTypes } from "@/constants/Pricing";

type PlanDropdownProps = {
  selectedRegion: string;
  setSelectedRegion: any;
  selectedCloud: string;
  setSelectedCloud: any;
  selectedCurrency: string;
  setSelectedCurrency: any;
};

const PlanDropdown = ({
  selectedRegion,
  setSelectedRegion,
  selectedCloud,
  setSelectedCloud,
  selectedCurrency,
  setSelectedCurrency,
}: PlanDropdownProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 my-[44px] gap-[20px]">
      <div className="plan--dropdown">
        <p>Cloud</p>
        <select
          name="cloud"
          id="cloud"
          value={selectedCloud}
          onChange={(e) => {
            setSelectedCloud(e.target.value);
          }}
        >
          {cloudTypes.map((val) => {
            return (
              <option key={val.key} value={val.key}>
                {val.displayName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="plan--dropdown">
        <p>Region</p>
        <select
          name="region"
          id="region"
          value={selectedRegion}
          onChange={(e) => {
            setSelectedRegion(e.target.value);
          }}
        >
          {cloudTypes
            .find((val) => val.key === selectedCloud)
            ?.regions.map((val) => (
              <option key={val.key} value={val.key}>
                {val.displayName} ({val.key})
              </option>
            ))}
        </select>
      </div>
      <div className="plan--dropdown">
        <p>Currency</p>
        <select
          name="currency"
          id="currency"
          value={selectedCurrency}
          onChange={(e) => {
            setSelectedCurrency(e.target.value);
          }}
        >
          {currencyTypes.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PlanDropdown;
