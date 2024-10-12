"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import React from "react";
import SettingsTemp from "./_Components/SettingsTemp";
import NavBar from "@/Components/NavBar";

const page = () => {
  return (
    <DashboardWrapper>
      <NavBar routeName="Settings" />
      <div className={`px-[20px] overflow-hidden mb-9`}>
        <SettingsTemp />
      </div>
    </DashboardWrapper>
  );
};

export default page;
