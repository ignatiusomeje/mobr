"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import React, { useRef, useState } from "react";
import CarListingTemp from "./_Components/CarListingTemp";
import NavBar from "@/Components/NavBar";
import { useGetAllCarsQuery } from "./_Data/CarAPI";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCarError } from "./_Data/CarSlice";
import { Toast } from "primereact/toast";
import { carBookingState, savedState } from "./_types/CarType";

const Page = () => {
  const toast = useRef<Toast>(null);
  const cars = useAppSelector((state) => state.cars.cars);
  const dispatch = useAppDispatch();
  const getAllCarsError = useAppSelector((state) => state.cars.getAllCarsError);
  const getAllCarsLoading = useAppSelector(
    (state) => state.cars.getAllCarsLoading
  );
  const [activeTab, setActiveTab] = useState<string>("available");
  useGetAllCarsQuery({
    carBookingState:
      activeTab.toLowerCase() === "available"
        ? carBookingState.Available
        : activeTab.toLowerCase() === "booked"
        ? carBookingState.Booked
        : carBookingState.Cancelled,
    savedState: savedState.Active,
  });

  const showError = (message: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };

  if (getAllCarsError) {
    showError(getAllCarsError);
    dispatch(clearCarError());
  }

  return (
    <DashboardWrapper>
      <NavBar routeName="Car Listing" />
      <div className={`px-[20px] overflow-hidden mb-9`}>
        <Toast ref={toast} />
        <CarListingTemp
          cars={cars}
          getAllCarsLoading={getAllCarsLoading}
          activeTab={activeTab}
          setActiveTab={(e) => setActiveTab(e)}
        />
      </div>
    </DashboardWrapper>
  );
};

export default Page;
