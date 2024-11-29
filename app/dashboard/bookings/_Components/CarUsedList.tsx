import React from "react";
import CarUsedListVehicleCard from "./CarUsedListVehicleCard";
import { bookingResponseType } from "../_Types/BookingTypes";
import { Loader } from "lucide-react";

const CarUsedList = ({
  getAllBookingsByAUser,
  getAllBookingsByAUserLoading,
}: {
  getAllBookingsByAUser: bookingResponseType[];
  getAllBookingsByAUserLoading: boolean;
}) => {
  return getAllBookingsByAUserLoading ? (
    <div
      className={`max-w-[430px] w-full h-full flex justify-center items-center`}
    >
      <Loader className={`animate-spin w-[50px] h-[50px]`} />
    </div>
  ) : (
    <div className="className={`max-w-[430px] gap-[8px] w-full`} grid grid-cols-2">
      {getAllBookingsByAUser.length > 0 &&
        getAllBookingsByAUser.map((booking) => (
          <CarUsedListVehicleCard key={booking.bookingId} booking={booking} />
        ))}
    </div>
  );
};

export default CarUsedList;
