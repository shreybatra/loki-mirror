import "./vericalNavbar.css";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const VerticalNavbar = () => {
  return (
    <div className="pl-[80px] navBar-container">
      <ul className="text-muted ">
        <li className="navBar-container-item">Secrets</li>
        <li className="navBar-container-item">Background Jobs</li>
        <li className="navBar-container-item">Logs</li>
        <li className="navBar-container-item">Cache</li>
        <li className="navBar-container-item">Event Streams</li>
        <li className="navBar-container-item">Application Environment</li>
        <li className="navBar-container-item">Object Storage</li>
        <li className="navBar-container-item">Databases</li>
        <li className="navBar-container-item">Data Bandwidth</li>
        <li className="navBar-container-item">Full text Search</li>
      </ul>
    </div>
  );
};
