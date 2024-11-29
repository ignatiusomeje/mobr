"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import NavBar from "@/Components/NavBar";
import React from "react";
import DashboardTemp from "./_Components/DashboardTemp";
import { dashboardTempData } from "@/utils/data";
import { useGetAllBookingsQuery } from "./bookings/_Data/BookingAPI";

const Page = () => {
  useGetAllBookingsQuery({});
  return (
    <DashboardWrapper>
      <NavBar routeName="Dashboard" />
      <div className={`px-[20px] .h-screen overflow-y-scroll noScroll`}>
        <DashboardTemp loading={false} data={dashboardTempData} />
      </div>
    </DashboardWrapper>
  );
};

export default Page;
