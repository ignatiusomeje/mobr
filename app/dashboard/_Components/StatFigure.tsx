import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Card from "./Card";
import {
  getBookingInfoResponseType,
  getCustomerInfoResponseType,
} from "../_Types/DashboardTypes";

const StatFigure = ({
  name,
  box,
  url,
  totalbooking,
}: {
  name: string;
  box: getCustomerInfoResponseType[] | getBookingInfoResponseType[];
  url: string;
  totalbooking: number;
}) => {
  return (
    <div
      className={`p-[12px] rounded-[16px] mt-9 min-w-[597px] w-full bg-[#F1F1F1]`}
    >
      <div className={`bg-[#E8E8E8] rounded-[12px] py-[16px] px-[20px] `}>
        <div className={`flex justify-between items-center`}>
          <h4
            className={`font-[700] leading-[22px] tracking-[0.25px] text-[14px]`}
          >
            {name}
          </h4>
          <Link
            href={url}
            className={`no-underline flex gap-2 items-center justify-center font-square text-[14px] font-[400] leading-[22px] tracking-[0.25px]  border-b border-b-[#E8E8E8] hover:border-b-[#222B2E] hover:rounded-b-sm pb-[0.4px]`}
          >
            Detailed view <ArrowRight width={14} />
          </Link>
        </div>
        <div className={`mt-5`}>
          <p
            className={`text-[#474747] font-inter text-[12px] font-[400] leading-[20px] tracking-[0.30000001192092896px]`}
          >
            {name.toLowerCase() === "customers statistic"
              ? `Total Customers`
              : `Total Bookings`}
          </p>
          <p
            className={`text-[#222B2E] font-square text-[24px] font-[700] leading-[28.91px] tracking-[0.25px]`}
          >
            {totalbooking}
          </p>
        </div>
      </div>
      <div className={`flex gap-2`}>
        {box.map((bx) => (
          <Card name={bx.state} total={bx.totalCount} key={bx.state} />
        ))}
      </div>
    </div>
  );
};

export default StatFigure;
