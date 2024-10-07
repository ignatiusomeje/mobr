"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import NavBar from "@/Components/NavBar";
import React from "react";
import DashboardTemp from "./_Components/DashboardTemp";

const page = () => {
  return (
    <DashboardWrapper>
      <NavBar routeName="Dashboard" />
      <div className={`px-[20px] .h-screen overflow-y-scroll noScroll`}>
        <DashboardTemp />
      </div>
    </DashboardWrapper>
  );
};

export default page;
