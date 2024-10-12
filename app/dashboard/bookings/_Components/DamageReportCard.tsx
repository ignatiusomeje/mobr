import Image from "next/image";
import React from "react";
import DamageImageShow from "./DamageImageShow";

const DamageReportCard = () => {
  return (
    <div className={`flex gap-[16px] flex-col`}>
      <div className={`flex gap-[12px] flex-col`}>
        <h5
          className={`text-[#777777] font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          Images
        </h5>
        <div className={`gap-[4px] flex`}>
          {[1, 2, 3, 4, 5].map((index) => (
            <Image
              src={`/images/acura.svg`}
              alt="Image of a car"
              width={128}
              height={108}
              className={`rounded-[8px]`}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className={`flex gap-[6px] flex-col`}>
        <h5
          className={`text-[#777777] font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          Car Side
        </h5>
        <p
          className={`text-[#303030] font-inter text-[16px] font-[400] leading-[24px] tracking-[0.25px]`}
        >
          Driver seat
        </p>
      </div>
      <div className={`flex gap-[6px] flex-col`}>
        <h5
          className={`text-[#777777] font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          Damage area
        </h5>
        <p
          className={`text-[#303030] font-inter text-[16px] font-[400] leading-[24px] tracking-[0.25px]`}
        >
          Inverter
        </p>
      </div>
      <div className={`flex gap-[6px] flex-col`}>
        <h5
          className={`text-[#777777] font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          Comment
        </h5>
        <p
          className={`text-[#303030] font-inter text-[16px] font-[400] leading-[24px] tracking-[0.25px]`}
        >
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Morem ipsum dolor sit amet, consectetur adipiscing elit. Morem ipsum dolor sit amet, consectetur adipiscing elit.  
        </p>
      </div>
      <DamageImageShow />
    </div>
  );
};

export default DamageReportCard;
