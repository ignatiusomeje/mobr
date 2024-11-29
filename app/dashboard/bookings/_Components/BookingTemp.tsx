import React from "react";
import Tab from "./Tab";
import Bookings from "./Bookings";
import BookingsLoader from "./BookingsLoader";
import { Skeleton } from "primereact/skeleton";
import { useAppSelector } from "@/store/hooks";

const BookingTemp = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (text: string) => void;
}) => {
  const getAllBookingLoading = useAppSelector(
    (state) => state.bookings.getAllBookingsLoading
  );
  const getAllBookings = useAppSelector((state) => state.bookings.bookings);
  return (
    <div
      className={`h-full flex-grow flex-1 overflow-y-scroll noScroll py-[18px] px-[20px]`}
    >
      {getAllBookingLoading ? (
        <div className="flex gap-5">
          {[1, 2, 3, 4].map((btn) => (
            <Skeleton width="100px" height="37px" key={btn} />
          ))}
        </div>
      ) : (
        <div className="flex gap-5">
          {[
            { name: "All" },
            { name: "Booked" },
            { name: "Pending" },
            { name: "Cancelled" },
            // { name: "Booked", number: 50 },
            // { name: "Pending", number: 30 },
            // { name: "Cancelled", number: 20 },
          ].map((btn) => (
            <Tab key={btn.name} name={btn.name} setSelected={setSelected} selected={selected === btn.name} />
          ))}
        </div>
      )}
      <div className={`flex flex-col gap-[24px] mt-5`}>
        {getAllBookingLoading ? (
          <BookingsLoader />
        ) : (
          <Bookings bookings={getAllBookings} />
        )}
      </div>
    </div>
  );
};

export default BookingTemp;
