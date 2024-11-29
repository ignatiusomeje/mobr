import React from "react";
import VehicleCard from "./VehicleCard";
import { VehiclesData } from "../_types/CarType";

const Vehicles = ({ vehicles }: VehiclesData) => {
  return (
    <div className={`${vehicles.length > 0 && `grid grid-cols-4 xl:grid-cols-5`} gap-[12px]`}>
      {vehicles.length > 0 ? (
        vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.vehicleId} vehicle={vehicle} />
        ))
      ) : (
        <p className={`flex justify-center items-center`}>No Car Found</p>
      )}
    </div>
  );
};

export default Vehicles;
