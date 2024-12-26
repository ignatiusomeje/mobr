import React from "react";
import Vehicles from "./Vehicles";
import { Plus } from "lucide-react";
import Tab from "./Tab";
import Link from "next/link";
import VehicleCardLoader from "./VehicleCardLoader";
import { Skeleton } from "primereact/skeleton";
import { carListingTempType } from "../_types/CarType";
import { useAppSelector } from "@/store/hooks";

const CarListingTemp = ({
  activeTab,
  setActiveTab,
  cars,
  getAllCarsLoading,
}: carListingTempType) => {
  const changeCarBookingStateLoading = useAppSelector(
    (state) => state.cars.changeCarBookingStateLoading
  );
  return (
    <div className={`h-full flex-grow flex-1 overflow-y-scroll noScroll `}>
      {getAllCarsLoading || changeCarBookingStateLoading ? (
        <div className="flex gap-5 pt-[24px] pb-[16px] px-[20px]">
          {[1, 2, 3, 4].map((btn) => (
            <Skeleton width="100px" height="37px" key={btn} />
          ))}
        </div>
      ) : (
        <div className="flex gap-5 pt-[24px] pb-[16px] px-[20px]">
          {["Available", "Awaiting Approval", "Booked", "Cancelled"].map(
            (btn) => (
              <Tab
                key={btn}
                name={btn}
                activeTab={activeTab}
                selected={(tab) => setActiveTab(tab)}
              />
            )
          )}
        </div>
      )}
      <div className={`flex flex-col gap-[24px]`}>
        {getAllCarsLoading || changeCarBookingStateLoading ? (
          <div
            className={`py-[16px] flex items-center justify-between w-full border-b-[0.6px] border-[#C6C6C6]`}
          >
            <Skeleton width="135px" />
            <Skeleton width="146px" height="44px" />
          </div>
        ) : (
          <div
            className={`py-[16px] flex items-center justify-between w-full border-b-[0.6px] border-[#C6C6C6]`}
          >
            <h3
              className={`text-[#3A494F] uppercase font-inter text-[14px] font-[600] `}
            >
              {activeTab} CARS
            </h3>
            {activeTab.toLowerCase() === "available" && (
              <Link
                href={`/dashboard/car-listing/upload`}
                className={`font-square text-[#FFFFFF] rounded-[20px] flex items-center gap-2 bg-[#1B2E35] py-[8px] px-[16px] text-[12px] font-[400]`}
              >
                ADD NEW CAR <Plus width={14} />
              </Link>
            )}
          </div>
        )}
        {getAllCarsLoading || changeCarBookingStateLoading ? (
          <div className={`grid grid-cols-4 gap-[12px]`}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((car) => (
              <VehicleCardLoader key={car} />
            ))}
          </div>
        ) : (
          <Vehicles vehicles={cars} />
        )}
      </div>
    </div>
  );
};

export default CarListingTemp;
