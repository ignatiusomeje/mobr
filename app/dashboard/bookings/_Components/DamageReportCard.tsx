import Image from "next/image";
import React, { useState } from "react";
import DamageImageShow from "./DamageImageShow";
import { damageReportsResponse } from "../_Types/BookingTypes";

const DamageReportCard = ({ report }: { report: damageReportsResponse }) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className={`flex gap-[16px] flex-col`}>
      <div className={`flex gap-[12px] flex-col`}>
        <h5
          className={`text-[#777777] font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          Images
        </h5>
        {report.damageImages.length > 0 ? (
          <div className={`gap-[4px] flex`}>
            {report.damageImages.map((image) => (
              <Image
                src={image.damageImageUrl || `/images/acura.jpg`}
                alt={`${report.damageAreas} images`}
                width={128}
                height={108}
                className={`rounded-[8px] cursor-pointer`}
                key={image.damageImageId}
                onClick={()=>setVisible(true)}
              />
            ))}
          </div>
        ) : (
          <div
            className={`text-[#303030] font-inter text-[16px] font-[400] leading-[24px] tracking-[0.25px]`}
          >
            No Image for this Damage Report
          </div>
        )}
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
          {report.vehicleSides ? report.vehicleSides : `N/A`}
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
          {report.damageAreas ? report.damageAreas : `N/A`}
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
          {report.damageReporComment ? report.damageReporComment :`N/A`}
        </p>
      </div>
      <DamageImageShow reportImages={report.damageImages} visible={visible} setVisible={(e)=> setVisible(e)} />
    </div>
  );
};

export default DamageReportCard;
