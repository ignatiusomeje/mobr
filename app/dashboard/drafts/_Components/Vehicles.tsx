import React from "react";
import VehicleCard from "./VehicleCard";
import { carResponseType } from "../../car-listing/_types/CarType";

const Vehicles = ({cars}:{cars:carResponseType[]}) => {
  return (
    <div className={`${ cars.length > 0 && `grid grid-cols-4 xl:grid-cols-5`} gap-[12px]`}>
      {cars.length > 0 ? cars.map((vehicle) => (
        <VehicleCard key={vehicle.vehicleId} vehicle={vehicle} />
      )): <p className={`flex justify-center items-center`}>No Car Found</p>}
    </div>
  );
};

export default Vehicles;
