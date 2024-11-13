import React from "react";
import Tab from "./Tab";
import Customers from "./Customers";
import CustomersLoader from "./CustomersLoader";
import { Skeleton } from "primereact/skeleton";

const CustomerTemp = () => {
  return (
    <div
      className={`h-full flex-grow flex-1 overflow-y-scroll noScroll py-[18px] px-[20px]`}
    >
      {true ? (
        <div className="flex gap-5">
          {[1, 2, 3].map((btn) => (
            <Skeleton width="100px" height="37px" key={btn} />
          ))}
        </div>
      ) : (
        <div className="flex gap-5">
          {[
            { name: "All" },
            { name: "Verified", number: 100 },
            { name: "Unverified", number: 50 },
          ].map((btn, index) =>
            index === 0 ? (
              <Tab key={btn.name} name={btn.name} selected={true} />
            ) : (
              <Tab
                key={btn.name}
                name={btn.name}
                number={btn.number}
                selected={false}
              />
            )
          )}
        </div>
      )}
      <div className={`flex flex-col gap-[24px] mt-5`}>
        {true ? <CustomersLoader /> : <Customers />}
      </div>
    </div>
  );
};

export default CustomerTemp;
