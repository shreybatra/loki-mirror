import "./vericalNavbar2.css";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const VerticalNavbar2 = () => {
  const [selectSize, setSelectSize] = useState(0);
  const router = useRouter();

  const handleFocus = () => {
    setSelectSize(10);
  };

  const handleBlur = () => {
    setSelectSize(0);
  };

  const handleChange = (e: any) => {
    e.target.size = 1;
    e.target.blur();
    router.push(`/pricing/${e.target.value}`);
  };
  return (
    <div className="ml-[auto] mr-[auto] mb-[42px]  md:hidden  navBar-container2 plan--dropdown plan--dropdown--select w-[90%] ">
      <select
        name="languages"
        id="language-select"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        size={selectSize}
        className="text-muted"
      >
        <option value={"#"} className="navBar-container2-item">
          Application Environment
        </option>
        <option value={"databases"} className="navBar-container2-item">
          Databases
        </option>
        <option value={"object-storage"} className="navBar-container2-item">
          Object Storage
        </option>

        <option value={"full-text-search"} className="navBar-container2-item">
          Full text Search
        </option>
        {/* 
        <option disabled value={"#"} className="navBar-container2-item">
          Secrets (Coming Soon)
        </option>
        <option disabled value={"#"} className="navBar-container2-item">
          Background Jobs (Coming Soon)
        </option>
        <option disabled value={"#"} className="navBar-container2-item">
          Cache (Coming Soon)
        </option>
        <option disabled value={"#"} className="navBar-container2-item">
          Data Bandwidth (Coming Soon)
        </option>
        <option disabled value={"#"} className="navBar-container2-item">
          Logs (Coming Soon)
        </option>
        <option disabled value={"#"} className="navBar-container2-item">
          Event Streams (Coming Soon)
        </option>
         */}
      </select>
    </div>
  );
};
