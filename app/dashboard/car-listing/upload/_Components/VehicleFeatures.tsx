import React from "react";
import Feature from "./Feature";

const VehicleFeatures = () => {
  const data = [
    {
      name: "Availability",
      items: [],
    },
    {
      name: "Make",
      items: [
        "acura",
        "Audi",
        "BMW",
        "Cadillac",
        "Cadillac",
        "Cadillac",
        "Cadillac",
        "Cadillac",
        "Cadillac",
        "Chevrolet",
        "Cadillac",
      ],
    },
    {
      name: "Model",
      items: [
        "1 series",
        "1 series M",
        "2 Series",
        "2 series Gran Coupe",
        "2 series Gran Coupe",
        "2 series Gran Coupe",
        "2002",
      ],
    },
    {
      name: "Type",
      items: [
        "COmpact",
        "car",
        "Mini van",
        "SUV",
        "Truck",
        "Truck",
        "Truck",
        "Truck",
        "Truck",
        "Truck",
        "Truck",
      ],
    },
    {
      name: "Seats",
      items: [
        "4 or more",
        "5 or more",
        "6 or more",
        "7 or more",
        "8 or more",
        "9 or more",
        "10 or more",
        "11 or more",
      ],
    },
    {
      name: "Transmission",
      items: ["Manual", "Automatic"],
    },
    {
      name: "Fuel Tank Capacity",
      items: [
        "30-60L",
        "60-90L",
        "90-120L",
        "120-150L",
        "1150-180L",
        "180-210L",
      ],
    },
    {
      name: "Energy",
      items: ["Electric", "Hybrid", "Petrol", "Diesel"],
    },
    {
      name: "Other Features",
      items: [
        "Apple CarPlay",
        "Backup Camera",
        "Blid spot warning",
        "bluetooth",
        "GPS",
        "heated seats",
        "Sunroof",
      ],
    },
  ];
  return (
    <div>
      <h3
        className={`font-inter font-[600] text-[14px] leading-[22px] tracking-[0.25px] text-[#777777]`}
      >
        ADD VEHICLE FEATURES
      </h3>
      <div className={`flex flex-col gap-[16px]`}>
        {data.map((datum) => (
          <Feature
            key={datum.name}
            name={datum.name}
            popupItems={datum.items}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleFeatures;
