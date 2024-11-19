import { Skeleton } from "primereact/skeleton";
import React from "react";

const BenefitFormLoader = () => {
  return (
    <div className="flex flex-col gap-[10px] max-w-[572px] w-full">
      {/* <Skeleton
        className={`text-[#222B2E] flex items-center gap-1 font-square font-[700] text-[14px] leading-[22px] tracking-[0.25px] border-b border-b-[white] px-1 hover:border-b-[#222B2E] max-w-[170px] w-full rounded-b-md`}
        height="22px"
      /> */}

      <form action="" className={`flex flex-col gap-[18px]`}>
        <div className="flex flex-col gap-[10px]">
          <Skeleton
            className={`text-[#1B1B1B] font-inter font-[600] text-[10px] leading-[16px] tracking-[0.4px] flex items-center`}
            width="70px"
            height="16px"
            
          />
          <Skeleton
            className="py-[12px] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]"
            height="50px"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <Skeleton
            className={`text-[#1B1B1B] font-inter font-[600] text-[10px] leading-[16px] tracking-[0.4px] flex items-center`}
            width="70px"
            height="16px"
          />
          <Skeleton
            className="py-[12px] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]"
            height="192px"
          />
        </div>
        <div className={`flex gap-[12px] ms-auto`}>
          <Skeleton
            className={`border border-[#8D1510] text-[#8D1510] font-square font-[400] text-[12px] leading-[16px] tracking-[0.3px] rounded-[20px] py-[8px] px-[16px]`}
            width="83px"
            height="48px"
          />

          <Skeleton
            className={`border border-[#11975D] text-[#11975D] font-square font-[400] text-[12px] leading-[16px] tracking-[0.3px] rounded-[20px] py-[8px] px-[16px] flex gap-2 `}
            height="48px"
            width="83px"
          />
        </div>
      </form>
    </div>
  );
};

export default BenefitFormLoader;
