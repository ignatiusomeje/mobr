import React from "react";
import CarImages from "./CarImages";
import VehicleInfo from "./VehicleInfo";
import { Button } from "primereact/button";
import { ArrowRight } from "lucide-react";

const CarInfo = () => {
  const slides = [
    "/images/acura.svg",
    "/images/customer.jpg",
    "/images/acura.svg",
    "/images/acura.svg",
  ];
  return (
    <div className={`max-w-[430px] w-full`}>
      <CarImages images={slides} />
      <VehicleInfo />
      <Button
        className={`text-[#350F04] flex items-center gap-[4px] py-[12px] focus:ring-0 font-square font-[400] text-[14px] leading-[22px] tracking-[0.25px]`}
      >
        View car damage reports (5) <ArrowRight color="#350F04" width={12} />
      </Button>
      <Button
        className={`text-[#350F04] py-[12px] flex items-center gap-[4px] focus:ring-0 font-square font-[400] text-[14px] leading-[22px] tracking-[0.25px]`}
      >
        View customer booking history <ArrowRight color="#350F04" width={12} />
      </Button>
    </div>
  );
};

export default CarInfo;
