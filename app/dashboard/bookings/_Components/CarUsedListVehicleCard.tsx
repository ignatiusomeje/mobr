import { ArrowRight, CircleGauge, Fuel } from "lucide-react";
import Image from "next/image";
import { Button } from "primereact/button";
import React from "react";

const CarUsedListVehicleCard = () => {
  return (
    <div
      className={`max-w-[200px] flex flex-col gap-[12px] bg-[#F9F9F9] border border-[#E2E2E2] rounded-[8px] w-full p-[8px]`}
    >
      <div className="h-[140px] w-[180px] relative rounded-[6px] mb-2">
        <Image
          src="/images/acura.svg"
          alt="vehicle name"
          height={140}
          width={180}
          className="w-full h-full object-cover"
        />
        <span className="absolute flex items-center justify-center m-2 h-[22px] w-[49px] top-0 right-0 bg-[#E8E8E8] border border-[#C6C6C6] rounded-[16px] p-[6px] text-[8px] font-[400] font-inter">
          Compact
        </span>
      </div>

      <div className={`flex flex-col gap-[16px]`}>
        <div className="flex justify-between">
          <div className={`max-w-[160px] w-full`}>
            <h3
              className={`text-[#303030] font-inter text-[10px] font-[600] leading-[16px] tracking-[0.4px] `}
            >
              HONDA ACCORD 2023
            </h3>
            <div className={`flex gap-[18px]`}>
              <p className={`flex items-center gap-2`}>
                <CircleGauge width={14} color="#11975D" />{" "}
                <span
                  className={`text-[#303030] font-square text-[10px] font-[400] leading-[18px] tracking-[0.4px]`}
                >
                  Auto
                </span>
              </p>
              <p className={`flex items-center gap-2`}>
                <Fuel width={12} color="#11975D" />
                <span
                  className={`text-[#303030] font-square text-[10px] font-[400] leading-[18px] tracking-[0.4px]`}
                >
                  Electronic
                </span>
              </p>
            </div>
          </div>
          <p className={`font-square text-[12px] font-[400] text-[#222B2E]`}>
            <span className={`font-bold`}>$45</span>/day
          </p>
        </div>

        <Button
          outlined
          className={`bg-[#11975D] text-[#FFFFFF] py-[8px] px-[14px] rounded-[10px] text-[10px] font-[400] font-square w-full flex justify-center items-center gap-3`}
        >
          VIEW DETAILS <ArrowRight width={14} color="#FFFFFF" />
        </Button>
      </div>
    </div>
  );
};

export default CarUsedListVehicleCard;
