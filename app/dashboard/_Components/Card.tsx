import { cardType } from "@/types/Dashboard";
import React from "react";

const Card = ({ name, total }: cardType) => {
  return (
    <div
      className={`${
        name.toLowerCase() === "booked"
          ? "bg-[#FFD5C9]"
          : name.toLowerCase() === "pending"
          ? "bg-[#DDE4E6]"
          : name.toLowerCase() === "cancelled"
          ? `bg-[#C6EBD7]`
          : name.toLowerCase() === "unverified"
          ? "bg-[#FFD5C9]"
          : name.toLowerCase() === "verified" && `bg-[#C6EBD7]`
      } w-full mt-4 min-w-[132px] py-[10px] px-[20px] rounded-[8px]`}
    >
      <p
        className={`text-[12px] font-[400] leading-[20px] tracking-[0.30000001192092896px] ${
          (name.toLowerCase() === "unverified" ||
            name.toLowerCase() === "cancelled") &&
          `text-[#8D1510]`
        } font-inter uppercase`}
      >
        {name}
      </p>
      <p
        className={`text-[16px] mt-3 font-[700] leading-[24px] tracking-[0.25px] font-square ${
          (name === "unverified" || name === "cancelled") && `text-[#8D1510]`
        }`}
      >
        {/* 09040681931 */}
        {total}
      </p>
    </div>
  );
};

export default Card;
