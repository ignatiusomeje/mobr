import React from "react";
import Tab from "./Tab";
import Customers from "./Customers";

const CustomerTemp = () => {
  return (
    <div
      className={`h-full flex-grow flex-1 overflow-y-scroll noScroll py-[18px] px-[20px]`}
    >
      <div className="flex gap-5">
        {[
          { name: "All" },
          { name: "Verified", number: 100 },
          { name: "Unverified", number: 50 },
        ].map((btn, index) =>
          index === 0 ? (
            <Tab
              key={btn.name}
              name={btn.name}
              selected={true}
            />
          ) : (
            <Tab key={btn.name} name={btn.name} number={btn.number} selected={false} />
          )
        )}
      </div>
      <div className={`flex flex-col gap-[24px] mt-5`}>
        <Customers />
      </div>
    </div>
  );
};

export default CustomerTemp;
