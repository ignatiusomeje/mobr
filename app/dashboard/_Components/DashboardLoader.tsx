import React from "react";
import StatFigLoader from "./StatFigLoader";
import { Skeleton } from "primereact/skeleton";

const DashboardLoader = () => {
  return (
    <div className="flex flex-col mb-9 flex-grow flex-1 gap-9 px-[20px] ">
      <div  className="flex gap-4 w-full">
      {[1,2].map(stat => <StatFigLoader key={stat} />)}
      </div>
      <div  className="flex gap-4 w-full">
        {[1,2].map(stat=> <Skeleton  key={stat} height="320px" />)}
      </div>
      <Skeleton height="492px" />
    </div>
  );
};

export default DashboardLoader;
