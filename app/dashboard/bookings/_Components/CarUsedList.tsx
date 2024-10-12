import React from "react";
import CarUsedListVehicleCard from "./CarUsedListVehicleCard";

const CarUsedList = () => {
  return (
    <div className="className={`max-w-[430px] gap-[8px] w-full`} grid grid-cols-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
        <CarUsedListVehicleCard key={index} />
      ))}
    </div>
  );
};

export default CarUsedList;
