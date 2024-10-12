import React from "react";

const StatusCard = ({ name }: { name: string }) => {
  return (
    <div
      className={`rounded-[20px] px-[12px] py-[6px] capitalize font-inter font-[400] text-[12px] leading-[20px] tracking-[0.3px] ${
        name.toLowerCase() === "booked"
          ? `text-[#00552E] bg-[#C6EBD7]`
          : name.toLowerCase() === "abandoned"
          ? `text-[#475960] bg-[#E2E2E2]`
          : name.toLowerCase() === "cancelled" && `text-[#8D1510] bg-[#FFD5C9]`
      }`}
    >
      {name}
    </div>
  );
};

export default StatusCard;
