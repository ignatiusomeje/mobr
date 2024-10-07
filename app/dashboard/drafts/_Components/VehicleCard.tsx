import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "primereact/button";
import React from "react";

const VehicleCard = () => {
  return (
    <div
      className={`max-w-[300px] bg-[#F9F9F9] border border-[#E2E2E2] rounded-[12px] w-full py-[16px] px-[18px]`}
    >
      <div className="h-[140px] max-w-[260px] w-full overflow-hidden rounded-[8px] mb-2">
        <Image
          src="/images/acura.svg"
          alt="vehicle name"
          height={260}
          width={140}
          className="w-full"
        />
      </div>

      <div className="flex justify-between">
        <div className={`max-w-[160px] w-full`}>
          <h3 className={`text-[#303030] text-[inter] text-[14px] font-[600] `}>
            HONDA ACCORD 2023
          </h3>
        </div>
        <p
          className={`font-square text-[12px] font-[400] text-[#222B2E]`}
        >
          <span className={`font-bold`}>$45</span>/day
        </p>
      </div>

      <div className={`flex w-full gap-2 mt-3 justify-between`}>
        <Button
          outlined
          className={`border border-[#8D1510] text-[#8D1510] py-[8px] px-[14px] rounded-[12px] text-[10px] font-[400] font-square w-[125px] flex justify-center items-center gap-3`}
        >
          DELETE <X width={14} />
        </Button>
        <Button
          className={`border bg-[#11975D] text-white w-[125px] py-[8px] px-[14px] rounded-[12px] text-[10px] font-[400] font-square flex justify-center items-center gap-3`}
        >
          CONTINUE EDITING
        </Button>
      </div>
    </div>
  );
};

export default VehicleCard;
