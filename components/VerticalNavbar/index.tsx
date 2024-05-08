import "./vericalNavbar.css";

import Link from "next/link";
import React from "react";

// md:block
export const VerticalNavbar = () => {
  return (
    <div className="pl-[80px] w-[500px] hidden md:block navBar-container">
      <ul className="w-full">
        <div className="text-gradient text-2xl font-bold pb-[32px] pt-[32px] w-fit">
          Resources
        </div>
        <Link href={"/pricing"}>
          <li className="navBar-container-item mb-8">
            Application Environment
          </li>
        </Link>
        <Link href={"/pricing/databases"}>
          <li className="navBar-container-item mb-8">Databases</li>
        </Link>
        <Link href={"/pricing/object-storage"}>
          <li className="navBar-container-item mb-8">Object Storage</li>
        </Link>

        <Link href={"/pricing/full-text-search"}>
          <li className="navBar-container-item mb-8">Full Text Search</li>
        </Link>

        {/* <li className="text-muted mb-8">Background Jobs (Coming Soon)</li>

        <li className="text-muted mb-8">Cache (Coming Soon)</li>

        <li className="text-muted mb-8">Event Streams (Coming Soon)</li>

        <li className="text-muted mb-8">Logs (Coming Soon)</li>

        <li className="text-muted mb-8">Data Bandwidth (Coming Soon)</li>

        <li className="text-muted mb-8">Secrets (Coming Soon)</li>
         */}
      </ul>
    </div>
  );
};
