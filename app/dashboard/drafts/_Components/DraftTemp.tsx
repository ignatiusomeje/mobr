import React from "react";
import Vehicles from "./Vehicles";
import VehicleCardLoader from "./VehicleCardLoader";

const DraftTemp = () => {
  return (
    <div
      className={`h-full flex-grow flex-1 overflow-y-scroll noScroll py-[18px] px-[20px]`}
    >
      <div className={`flex flex-col gap-[24px]`}>
        {true ? (
          <div className={`grid grid-cols-4 gap-[12px]`}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((car) => (
              <VehicleCardLoader key={car} />
            ))}
          </div>
        ) : (
          <Vehicles />
        )}
      </div>
    </div>
  );
};

export default DraftTemp;
