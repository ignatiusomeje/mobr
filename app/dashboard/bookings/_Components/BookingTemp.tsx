import React from "react";
import Tab from "./Tab";
import Bookings from "./Bookings";

const BookingTemp = () => {
  return (
    <div
      className={`h-full flex-grow flex-1 overflow-y-scroll noScroll py-[18px] px-[20px]`}
    >
      <div className="flex gap-5">
        {[
          { name: "all" },
          { name: "Booked", number: 50 },
          { name: "Pending", number: 30 },
          { name: "Cancelled", number: 20 },
        ].map((btn, index) =>
          index === 0 ? (
            <Tab
              key={btn.name}
              name={btn.name}
              selected={true}
            />
          ) : (
            <Tab key={btn.name} name={btn.name} number={btn.number} selected={false} />
          )
        )}
      </div>
      <div className={`flex flex-col gap-[24px] mt-5`}>
        <Bookings />
      </div>
    </div>
  );
};

export default BookingTemp;
