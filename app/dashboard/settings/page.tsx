"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import React from "react";
import SettingsTemp from "./_Components/SettingsTemp";
import NavBar from "@/Components/NavBar";
import { useAppSelector } from "@/store/hooks";

const Page = () => {
  const email = useAppSelector(state => state.login.admin.email)
  return (
    <DashboardWrapper>
      <NavBar routeName="Settings" />
      <div className={`px-[20px] overflow-hidden mb-9`}>
        <SettingsTemp email={email} />
      </div>
    </DashboardWrapper>
  );
};

export default Page;
