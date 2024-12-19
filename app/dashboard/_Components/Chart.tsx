import { Dropdown } from "primereact/dropdown";
import React from "react";
import { Chart } from "primereact/chart";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setYear } from "../_Data/DashBoardSlice";

const ChartSec = ({ name }: { name: string }) => {
  const dispatch = useAppDispatch();
  const getBookingStats = useAppSelector(
    (state) => state.dashBoard.getBookingStats
  );
  const year = useAppSelector((state) => state.dashBoard.year);
  const dataStats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  if (getBookingStats.length > 0) {
    getBookingStats.map(
      (booking) => (dataStats[booking.month - 1] = booking.totalBooking)
    );
  }

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: dataStats,
        backgroundColor: ["rgba(198, 235, 215, 1)"],
        borderColor: "rgba(198, 235, 215, 1)",
        borderWidth: 0.4,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const dateDifference = moment().diff(moment([2024]), "year");
  const years = [];
  let count = 0;

  do {
    years.push(2024 + count);
    count++;
  } while (count <= dateDifference);

  return (
    <div
      className={` flex flex-col gap-[20px] p-[12px] min-w-[559px] w-full bg-[#F1F1F1]`}
    >
      <div className="flex justify-between items-center gap-[12px]">
        <h4
          className={`font-inter uppercase font-[700] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B2E35]`}
        >
          {name}
        </h4>
        <Dropdown
          value={year}
          onChange={(e) => dispatch(setYear(e.value))}
          options={years}
          // optionLabel="year"
          // showClear
          placeholder="Select year"
          className={`rounded-[6px] p-inputtext-sm hover:border hover:border-[#474747] focus:border focus:border-[#474747] border border-[#C6C6C6] focus-within:ring-0 .py-[12px] .px-[14px] `}
        />
      </div>

      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default ChartSec;
