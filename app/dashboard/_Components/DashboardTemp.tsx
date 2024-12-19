import React from "react";
import DashboardBookings from "./DashboardBookings";
// import { Button } from "primereact/button";
import { ArrowRight } from "lucide-react";
import StatFigure from "./StatFigure";
import Chart from "./Chart";
import Link from "next/link";
import DashboardLoader from "./DashboardLoader";
import { dashboardTempType } from "@/types/Dashboard";
import { useAppSelector } from "@/store/hooks";

const DashboardTemp = ({ loading }: dashboardTempType) => {
  const getBookingInfo = useAppSelector(
    (state) => state.dashBoard.getBookingInfo
  );
  const getBookingInfoLoading = useAppSelector(
    (state) => state.dashBoard.getBookingInfoLoading
  );
  const getBookingStatsLoading = useAppSelector(
    (state) => state.dashBoard.getBookingStatsLoading
  );
  const getCustomerInfo = useAppSelector(
    (state) => state.dashBoard.getCustomerInfo
  );
  const getCustomerInfoLoading = useAppSelector(
    (state) => state.dashBoard.getCustomerInfoLoading
  );
  return (
    <>
      {loading ||
      getBookingInfoLoading ||
      getBookingStatsLoading ||
      getCustomerInfoLoading ? (
        <DashboardLoader />
      ) : (
        <div className="flex flex-col mb-9 flex-grow flex-1 gap-9 px-[20px]">
          <div className="flex gap-4 w-full">
            {/* {data.map((card) => ( */}
            <StatFigure
              name={`CUSTOMERS STATISTIC`}
              url={`/dashboard/customers`}
              totalbooking={
                getCustomerInfo.length > 0
                  ? getCustomerInfo.reduce(
                      (prev, current) => prev + current.totalCount,
                      0
                    )
                  : 0
              }
              box={getCustomerInfo}
            />
            <StatFigure
              name={`CAR BOOKINGS STATISTIC`}
              url={`/dashboard/bookings`}
              totalbooking={
                getBookingInfo.length > 0
                  ? getBookingInfo.reduce(
                      (prev, current) => prev + current.totalCount,
                      0
                    )
                  : 0
              }
              box={getBookingInfo}
              // key={card.name}
            />

            {/* ))} */}
          </div>
          <div className="flex justify-between items-center gap-4">
          {/* "payment statistics" */}
            {["booking statistics"].map((chart) => (
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
              <Link
                href={`/dashboard/bookings`}
                className={`py-[10px] px-[18px] border border-[#11975D] rounded-[20px] font-square text-[12px] font-[400] tracking-[0.30000001192092896px] leading-[16px] text-[#11975D] flex items-center justify-center gap-2`}
              >
                VIEW ALL <ArrowRight width={14} />
              </Link>
            </div>
            <DashboardBookings />
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardTemp;
