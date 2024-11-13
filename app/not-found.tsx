"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import React from "react";

const NotFound = () => {
  return (
    <DashboardWrapper>
      <div className={`relative h-2/3`}>
        <div
          className={` max-w-[520px] w-full leading-snug text-center absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`}
        >
          <div className={`relative h-[240px]`}>
            <h3
              className={`font-square relative text-[16px] font-[700] uppercase text-[#262626] tracking-[3px] ps-[6px]`}
            >
              Oops! Page not found
            </h3>
            <h1
              className={`font-square absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-[252px] font-[900] m-0 text-[#262626] uppercase -tracking-[40px] -ms-[20px]`}
            >
              <span className={`drop-shadow-[-8px_0px_0px_#fff]`}>4</span>
              <span className={`drop-shadow-[-8px_0px_0px_#fff]`}>0</span>
              <span className={`drop-shadow-[-8px_0px_0px_#fff]`}>4</span>
            </h1>
          </div>

          <h2
            className={`font-inter text-[20px] font-[400] uppercase text-[#000] .mb-[25px]`}
          >
            we are sorry, but the page you requested was not found
          </h2>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default NotFound;
