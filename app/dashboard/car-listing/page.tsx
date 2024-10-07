"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import React from "react";
import CarListingTemp from "./_Components/CarListingTemp";
import NavBar from "@/Components/NavBar";

const page = () => {
  return (
    <DashboardWrapper>
      <NavBar routeName="Car Listing" />
      <div className={`px-[20px] overflow-hidden mb-9`}>
        <CarListingTemp />
      </div>
    </DashboardWrapper>
  );
};

export default page;
