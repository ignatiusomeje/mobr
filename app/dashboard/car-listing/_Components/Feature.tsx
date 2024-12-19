import React from "react";

const Feature = ({
  title,
  value,
}: //
{
  title: string;
  value: string;
}) => {
  return (
    <div className={`flex items-center justify-between py-[16px]`}>
      <div className={`flex flex-col gap-[12px]`}>
        <h4
          className={`text-[#303030] uppercase font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          {title}
        </h4>
        {value && (
          <p
            className={`font-inter capitalize text-[12px] font-[400] leading-[20px] tracking-[0.3px]`}
          >
            {value}
          </p>
        )}
      </div>
    </div>
  );
};

export default Feature;
