import { Skeleton } from "primereact/skeleton";
import React from "react";

const VehicleCardLoader = () => {
  return (
    <div
      className={`.max-w-[300px] border-2 border-[#E2E2E2] rounded-[12px] w-full py-[16px] px-[18px] vehicleCard`}
    >
      <Skeleton height="140px" className="mb-2" />
      <div className="flex justify-between gap-2">
        <div className={`.max-w-[160px] flex flex-col gap-2 w-full`}>
          <Skeleton width="160px" />
          <Skeleton width="160px" />
          <Skeleton width="160px" />
        </div>
        <Skeleton />
      </div>
      <div className={`flex gap-2 mt-[16px] w-full justify-between`}>
        <Skeleton width="125px" height="34px" />
        <Skeleton width="125px" height="34px" />
      </div>
    </div>
  );
};

export default VehicleCardLoader;
