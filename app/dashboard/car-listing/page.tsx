"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import React, { useState } from "react";
import CarListingTemp from "./_Components/CarListingTemp";
import NavBar from "@/Components/NavBar";

const Page = () => {
  const [activeTab, setActiveTab] = useState<string>("available");
  return (
    <DashboardWrapper>
      <NavBar routeName="Car Listing" />
      <div className={`px-[20px] overflow-hidden mb-9`}>
        <CarListingTemp vehicles={[1,2,3,4,5,6,7,8]} activeTab={activeTab} setActiveTab={(e)=> setActiveTab(e)} loading={false} />
      </div>
    </DashboardWrapper>
  );
};

export default Page;
