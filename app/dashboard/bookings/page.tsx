"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import React from "react";
import BookingTemp from "./_Components/BookingTemp";
import NavBar from "@/Components/NavBar";

const page = () => {
  return (
    <DashboardWrapper>
      <NavBar routeName="Bookings" />
      <div className={`px-[20px] overflow-hidden mb-9`}>
        <BookingTemp />
      </div>
    </DashboardWrapper>
  );
};

export default page;
