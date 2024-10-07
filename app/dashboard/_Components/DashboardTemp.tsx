import React from "react";
import DashboardBookings from "./DashboardBookings";
import { Button } from "primereact/button";
import { ArrowRight } from "lucide-react";
import StatFigure from "./StatFigure";
import Chart from "./Chart";

const DashboardTemp = () => {
  return (
    <div className="flex flex-col mb-9 flex-grow flex-1 gap-9 px-[20px]">
      <div className="flex gap-4 w-full">
        {[
          {
            name: "CUSTOMERS STATISTIC",
            url: "/dashboard/customers",
            Totalbooking: 150,
            box: [
              {
                name: "verified",
                total: 100,
                color: "#C6EBD7",
              },
              {
                name: "unverified",
                total: 50,
                color: "#FFD5C9",
              },
            ],
          },
          {
            name: "CAR BOOKINGS STATISTIC",
            url: "/dashboard/bookings",
            Totalbooking: 100,
            box: [
              {
                name: "Booked",
                total: 50,
                color: "#C6EBD7",
              },
              {
                name: "pending",
                total: 30,
                color: "#DDE4E6",
              },
              {
                name: "cancelled",
                total: 20,
                color: "#FFD5C9",
              },
            ],
          },
        ].map((card) => (
          <StatFigure
            name={card.name}
            url={card.url}
            Totalbooking={card.Totalbooking}
            box={card.box}
            key={card.name}
          />
        ))}
      </div>
      <div className="flex justify-between items-center gap-4">
        {["booking statistics", "payment statistics"].map((chart) => (
          <Chart key={chart} name={chart} />
        ))}
      </div>
      <div className={`p-[20px] bg-[#F1F1F1]`}>
        <div
          className={`flex justify-between items-center mb-9 py-[16px] border-b-[0.4px] border-[#C6C6C6]`}
        >
          <h3
            className={`font-inter text-[14px] font-[600] leading-[22px] tracking-[0.25px]`}
          >
            BOOKINGS
          </h3>
          <Button
            className={`py-[10px] px-[18px] border border-[#11975D] rounded-[20px] font-square text-[12px] font-[400] tracking-[0.30000001192092896px] leading-[16px] text-[#11975D] flex items-center justify-center gap-2`}
          >
            VIEW ALL <ArrowRight width={14} />
          </Button>
        </div>
        <DashboardBookings />
      </div>
    </div>
  );
};

export default DashboardTemp;
