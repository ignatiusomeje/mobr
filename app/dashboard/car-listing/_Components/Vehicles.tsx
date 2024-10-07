import React from "react";
import VehicleCard from "./VehicleCard";

const Vehicles = () => {
  return (
    <div className={`grid grid-cols-4 gap-[12px]`}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((vehicle) => (
        <VehicleCard key={vehicle} />
      ))}
    </div>
  );
};

export default Vehicles;
