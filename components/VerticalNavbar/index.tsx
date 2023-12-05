import "./vericalNavbar.css";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// md:block
export const VerticalNavbar = () => {
  return (
    <div className="pl-[80px] w-[500px]    navBar-container">
      <ul className="text-muted ">
        <li className="pricingDataTemplate--heading pb-[32px] pt-[32px]">Resources</li>
        <Link href={'/pricing'}  >
          <li className="navBar-container-item">Application Environment</li>
        </Link>
        <Link href={'/pricing/databases'}  >
          <li className="navBar-container-item">Databases</li>
        </Link>
        <Link href={'/pricing/storage-account'}  >
          <li className="navBar-container-item">Storage Account</li>
        </Link>
        <Link href={'/pricing/data-bandwidth'}  >
          <li className="navBar-container-item">Data Bandwidth</li>
        </Link>
        <Link href={'/pricing/full-text-search'}  >
          <li className="navBar-container-item">Full text Search</li>
        </Link>
        <Link href={'/pricing/logs'}  >
          <li className="navBar-container-item">Logs</li>
        </Link>
        <Link href={'/pricing'}  >
          <li className="navBar-container-item">Secrets (Coming Soon)</li>
        </Link>
        <Link href={'/pricing'}  >
          <li className="navBar-container-item">Background Jobs (Coming Soon)</li>
        </Link>
        <Link href={'/pricing'}  >
          <li className="navBar-container-item">Cache (Coming Soon)</li>
        </Link>
        <Link href={'/pricing'}  >
          <li className="navBar-container-item">Event Streams (Coming Soon)</li>
        </Link>

      </ul>
    </div>
  );
};
