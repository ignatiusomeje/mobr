import React, { useState } from "react";
import Vehicles from "./Vehicles";
import { Plus } from "lucide-react";
import Tab from "./Tab";
import Link from "next/link";

const CarListingTemp = () => {
  const [activeTab, setActiveTab] = useState<string>("available")
  return (
    <div
      className={`h-full flex-grow flex-1 overflow-y-scroll noScroll py-[18px] px-[20px]`}
    >
      <div className="flex gap-5">
        {["Available", "Booked", "Cancelled"].map((btn) =>
            <Tab key={btn} name={btn} activeTab={activeTab} selected={(tab) => setActiveTab(tab)} />
          
        )}
      </div>
      <div className={`flex flex-col gap-[24px]`}>
        <div
          className={`py-[16px] flex items-center justify-between w-full border-b-[0.6px] border-[#C6C6C6]`}
        >
          <h3 className={`text-[#3A494F] font-inter text-[14px] font-[600] `}>
            {activeTab.toUpperCase()} CARS
          </h3>
          {activeTab.toLowerCase() === 'available' &&<Link
            href={`/dashboard/car-listing/upload`}
            className={`font-square text-[#FFFFFF] rounded-[20px] flex items-center gap-2 bg-[#1B2E35] py-[8px] px-[16px] text-[12px] font-[400]`}
          >
            ADD NEW CAR <Plus width={14} />
          </Link>}
        </div>
        <Vehicles />
      </div>
    </div>
  );
};

export default CarListingTemp;
