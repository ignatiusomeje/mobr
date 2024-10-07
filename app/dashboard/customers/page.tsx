"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import React from "react";
import CustomerTemp from "./_Components/CustomerTemp";
import NavBar from "@/Components/NavBar";

const page = () => {
  return (
    <DashboardWrapper>
      <NavBar routeName="Customers" />
      <div className={`px-[20px] overflow-hidden mb-9`}>
        <CustomerTemp />
      </div>
    </DashboardWrapper>
  );
};

export default page;
