"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import NavBar from "@/Components/NavBar";
import React, { useRef } from "react";
import DashboardTemp from "./_Components/DashboardTemp";
import { useGetAllBookingsQuery } from "./bookings/_Data/BookingAPI";
import {
  useGetBookingInfoQuery,
  useGetBookingStatsQuery,
  useGetCustomerInfoQuery,
} from "./_Data/DashBoardAPI";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Toast } from "primereact/toast";
import { clearDashboardError } from "./_Data/DashBoardSlice";

const Page = () => {
  const toast = useRef<Toast>(null);
  const year = useAppSelector((state) => state.dashBoard.year);
  const getBookingInfoError = useAppSelector(
    (state) => state.dashBoard.getBookingInfoError
  );
  const getBookingStatsError = useAppSelector(
    (state) => state.dashBoard.getBookingStatsError
  );
  const getCustomerInfoError = useAppSelector(
    (state) => state.dashBoard.getCustomerInfoError
  );
  const dispatch = useAppDispatch();
  
  useGetAllBookingsQuery({});
  useGetBookingInfoQuery();
  useGetCustomerInfoQuery();
  useGetBookingStatsQuery({ year });

  const showError = (message: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };

  if (getBookingInfoError) {
    showError(getBookingInfoError);
    dispatch(clearDashboardError());
  } else if (getBookingStatsError) {
    showError(getBookingStatsError);
    dispatch(clearDashboardError());
  } else if (getCustomerInfoError) {
    showError(getCustomerInfoError);
    dispatch(clearDashboardError());
  }

  return (
    <DashboardWrapper>
      <NavBar routeName="Dashboard" />
      <Toast ref={toast} />
      <div className={`px-[20px] .h-screen overflow-y-scroll noScroll`}>
        <DashboardTemp loading={false} />
      </div>
    </DashboardWrapper>
  );
};

export default Page;
