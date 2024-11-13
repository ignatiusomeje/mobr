import { Dropdown } from "primereact/dropdown";
import React from "react";
import { Chart } from "primereact/chart";


const ChartSec = ({ name }: { name: string }) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov","Dec"],
    datasets: [
      {
        data: [230, 255, 100, 255, 130,250,350,375,230, 110,150,130],
        backgroundColor: [
          "rgba(198, 235, 215, 1)",
        ],
        borderColor: "rgba(198, 235, 215, 1)",
        borderWidth: .4,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins:{
      legend:{
        display: false
      }
    }
  };

  const years = [
    {
      year: 2021,
    },
    {
      year: 2022,
    },
    {
      year: 2023,
    },
    {
      year: 2024,
    },
  ];
  return (
    <div className={` flex flex-col gap-[20px] p-[12px] min-w-[559px] w-full bg-[#F1F1F1]`}>
      <div className="flex justify-between items-center gap-[12px]">
        <h4 className={`font-inter uppercase font-[700] text-[14px] leading-[22px] tracking-[0.25px] text-[#1B2E35]`}>{name}</h4>
        <Dropdown
          value={""}
          // onChange={(e) => ""}
          options={years}
          optionLabel="year"
          // showClear
          placeholder="Select year"
          className={`rounded-[16px] hover:border hover:border-[#474747] focus:border focus:border-[#474747] border border-[#C6C6C6] focus-within:ring-0 .py-[12px] .px-[14px] `}
        />
      </div>

      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default ChartSec;
