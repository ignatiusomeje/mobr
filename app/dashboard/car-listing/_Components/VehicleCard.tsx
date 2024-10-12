import { CircleGauge, PencilLine, X } from "lucide-react";
import Image from "next/image";
import { Button } from "primereact/button";
import React from "react";

const VehicleCard = () => {
  return (
    <div
      className={`max-w-[300px] bg-[#F9F9F9] border border-[#E2E2E2] rounded-[12px] w-full py-[16px] px-[18px]`}
    >
      <div className="h-[140px] max-w-[260px] w-full rounded-[8px] relative mb-2">
        <Image
          src="/images/acura.svg"
          alt="vehicle name"
          height={260}
          width={140}
          className="w-full"
        />
        <span className="absolute flex items-center justify-center m-2 h-[22px] w-[49px] top-0 right-0 bg-[#E8E8E8] border border-[#C6C6C6] rounded-[16px] p-[6px] text-[8px] font-[400] font-inter">
          Compact
        </span>
      </div>

      <div className="flex justify-between">
        <div className={`max-w-[160px] w-full`}>
          <h3 className={`text-[#303030] font-inter text-[14px] font-[600] `}>
            HONDA ACCORD 2023
          </h3>
          <p className={`flex items-center gap-2`}>
            <CircleGauge width={14} />{" "}
            <span
              className={`text-[#303030] font-inter text-[12px] font-[400]`}
            >
              Auto
            </span>
          </p>
          <p className="text-[#777777] text-[14px] font-[400] font-inter">
            Available from Aug 20, 2024
          </p>
        </div>
        <p
          className={`font-square text-[12px] font-[400] text-[#222B2E]`}
        >
          <span className={`font-bold`}>$45</span>/day
        </p>
      </div>

      <div className={`flex gap-2 mt-[16px] w-full justify-between`}>
        <Button
          outlined
          className={`border border-[#8D1510] text-[#8D1510] py-[8px] px-[14px] rounded-[12px] text-[10px] font-[400] font-square w-[125px] flex justify-center items-center gap-3`}
        >
          DELETE <X width={14} />
        </Button>
        <Button
          className={`border bg-[#11975D] text-white w-[125px] py-[8px] px-[14px] rounded-[12px] text-[10px] font-[400] font-square flex justify-center items-center gap-3`}
        >
          EDIT
          <PencilLine width={14} />
        </Button>
      </div>
    </div>
  );
};

export default VehicleCard;
