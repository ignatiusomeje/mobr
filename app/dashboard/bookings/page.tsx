"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import React, { useRef, useState } from "react";
import BookingTemp from "./_Components/BookingTemp";
import NavBar from "@/Components/NavBar";
import DamageReport from "./_Components/DamageReportPop";
import { useGetAllBookingsQuery } from "./_Data/BookingAPI";
import { bookingState } from "./_Types/BookingTypes";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Toast } from "primereact/toast";
import { clearBookingError } from "./_Data/BookingSlice";

const Page = () => {
  const toast = useRef<Toast>(null);
  const dispatch = useAppDispatch();
  const getAllBookingsError = useAppSelector(
    (state) => state.bookings.getAllBookingsError
  );
  const getACarByIdError = useAppSelector(
    (state) => state.bookings.getACarByIdError
  );
  const featuresError = useAppSelector((state) => state.bookings.featuresError);
  const getAllBookingsByAUserError = useAppSelector(
    (state) => state.bookings.getAllBookingsByAUserError
  );
  const getOneCustomerError = useAppSelector(
    (state) => state.bookings.getOneCustomerError
  );
  const getAVehicleDamageReportError = useAppSelector(
    (state) => state.bookings.getAVehicleDamageReportError
  );
  const [selected, setSelected] = useState<string>("All");
  let query = {};
  if (selected === "Booked") {
    query = { bookingState: bookingState.Booked };
  } else if (selected === "Pending") {
    query = { BookingState: bookingState.Pending };
  } else if (selected === "Cancelled") {
    query = { BookingState: bookingState.Cancelled };
  }

  const showError = (message: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };

  if (getAllBookingsError) {
    showError(getAllBookingsError);
    dispatch(clearBookingError());
  } else if (getACarByIdError) {
    showError(getACarByIdError);
    dispatch(clearBookingError());
  } else if (featuresError) {
    showError(featuresError);
    dispatch(clearBookingError());
  } else if (getAllBookingsByAUserError) {
    showError(getAllBookingsByAUserError);
    dispatch(clearBookingError());
  } else if (getOneCustomerError) {
    showError(getOneCustomerError);
    dispatch(clearBookingError());
  } else if (getAVehicleDamageReportError) {
    showError(getAVehicleDamageReportError);
    dispatch(clearBookingError());
  }
  useGetAllBookingsQuery(query);
  return (
    <DashboardWrapper>
      <NavBar routeName="Bookings" />
      <div className={`px-[20px] overflow-hidden mb-9`}>
        <Toast ref={toast} />
        <BookingTemp
          selected={selected}
          setSelected={(text) => setSelected(text)}
        />
        <DamageReport />
      </div>
    </DashboardWrapper>
  );
};

export default Page;
