"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import React, { useRef } from "react";
import DraftTemp from "./_Components/DraftTemp";
import NavBar from "@/Components/NavBar";
import { useGetAllCarsQuery } from "../car-listing/_Data/CarAPI";
import { savedState } from "../car-listing/_types/CarType";
import { Toast } from "primereact/toast";
import { clearCarError } from "../car-listing/_Data/CarSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearBookingError } from "../bookings/_Data/BookingSlice";

const Page = () => {
  const toast = useRef<Toast>(null);
  const cars = useAppSelector((state) => state.cars.cars);
  const dispatch = useAppDispatch();
  const getAllCarsError = useAppSelector((state) => state.cars.getAllCarsError);
  const getAllCarsLoading = useAppSelector(
    (state) => state.cars.getAllCarsLoading
  );
  const getACarByIdError = useAppSelector(
    (state) => state.bookings.getACarByIdError
  );
  const featuresError = useAppSelector((state) => state.bookings.featuresError);

  useGetAllCarsQuery({
    savedState: savedState.Draft,
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
  } else if (getACarByIdError) {
    showError(getACarByIdError);
    dispatch(clearBookingError());
  } else if (featuresError) {
    showError(featuresError);
    dispatch(clearBookingError());
  }

  return (
    <DashboardWrapper>
      <Toast ref={toast} />
      <NavBar routeName="Drafts" />
      <div className={`px-[20px] overflow-hidden mb-9`}>
        <DraftTemp cars={cars} getAllCarsLoading={getAllCarsLoading} />
      </div>
    </DashboardWrapper>
  );
};

export default Page;
