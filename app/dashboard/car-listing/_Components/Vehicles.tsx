import React from "react";
import VehicleCard from "./VehicleCard";
import { VehiclesData } from "@/types/carlisting";

const Vehicles = ({ vehicles }: VehiclesData) => {
  return (
    <div className={`grid grid-cols-4 xl:grid-cols-5 gap-[12px]`}>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle} />
      ))}
    </div>
  );
};

export default Vehicles;
