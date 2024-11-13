import { Skeleton } from "primereact/skeleton";
import React from "react";

const StatFigLoader = () => {
  return (
    <div
      className={`p-[12px] rounded-[16px] mt-9 min-w-[597px] w-full bg-[#F1F1F1]`}
    >
      <Skeleton
      height="118px"
        
      ></Skeleton>
      <div className={`flex gap-2`}>
        {[1, 2, 3].map((bx) => (
          <Skeleton
          height="65px"
            key={bx}
            className={`w-full h-40 mt-4 min-w-[132px] py-[10px] px-[20px] rounded-[8px]`}
          ></Skeleton>
        ))}
      </div>
    </div>
  );
};

export default StatFigLoader;
