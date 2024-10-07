import React from "react";
import Vehicles from "./Vehicles";

const DraftTemp = () => {
  return (
    <div className={`h-full flex-grow flex-1 overflow-y-scroll noScroll py-[18px] px-[20px]`}>
      <div className={`flex flex-col gap-[24px]`}>
        <Vehicles />
      </div>
    </div>
  );
};

export default DraftTemp;
