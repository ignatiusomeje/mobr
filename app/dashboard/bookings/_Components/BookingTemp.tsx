import React from "react";
import Tab from "./Tab";
import Bookings from "./Bookings";
import BookingsLoader from "./BookingsLoader";
import { Skeleton } from "primereact/skeleton";

const BookingTemp = () => {
  return (
    <div
      className={`h-full flex-grow flex-1 overflow-y-scroll noScroll py-[18px] px-[20px]`}
    >
      {false ? (
        <div className="flex gap-5">
          {[1, 2, 3, 4].map((btn) => (
            <Skeleton width="100px" height="37px" key={btn} />
          ))}
        </div>
      ) : (
        <div className="flex gap-5">
          {[
            { name: "all" },
            { name: "Booked", number: 50 },
            { name: "Pending", number: 30 },
            { name: "Cancelled", number: 20 },
          ].map((btn, index) =>
            index === 0 ? (
              <Tab key={btn.name} name={btn.name} selected={true} />
            ) : (
              <Tab
                key={btn.name}
                name={btn.name}
                number={btn.number}
                selected={false}
              />
            )
          )}
        </div>
      )}
      <div className={`flex flex-col gap-[24px] mt-5`}>
        {false ? <BookingsLoader /> : <Bookings />}
      </div>
    </div>
  );
};

export default BookingTemp;
