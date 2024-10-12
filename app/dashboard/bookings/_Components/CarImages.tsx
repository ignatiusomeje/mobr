import { CircleGauge, Star } from "lucide-react";
import Image from "next/image";
import { Galleria } from "primereact/galleria";
import React from "react";

const CarImages = ({ images }: { images: string[] }) => {
  const slideTemplate = (items: string) => {
    return (
        <div className="h-[240px] w-full overflow-hidden rounded-[20px] .mb-2">
          <Image
            src={items}
            alt="vehicle name"
            height={300}
            width={500}
            className="w-full object-cover"
          />
          <span className="absolute flex items-center justify-center m-2 h-[22px] w-[49px] top-0 right-0 bg-[#E8E8E8] border border-[#C6C6C6] rounded-[16px] p-[6px] text-[8px] font-[400] font-inter">
          Compact
        </span>
        </div>
    );
    
  };

  return (
    <div
      className={`bg-[#F9F9F9] border-b border-b-[#E2E2E2] w-full .py-[16px] .px-[18px]`}
    >
      <Galleria
        className={`w-full rounded-[20px]`}
        value={images}
        autoPlay={true}
        circular
        pt={{
          indicators: { className: "py-1" },
          indicator: {
            className: "border rounded-full h-[10px] w-[10px] border-[#C6EBD7]",
          },
        }}
        numVisible={1}
        showThumbnails={false}
        showIndicatorsOnItem
        showIndicators
        indicatorsPosition="bottom"
        item={slideTemplate}
      />

      <div className="flex gap-[12px] py-[20px] justify-between">
        <div className={`max-w-[372px] w-full`}>
          <h3 className={`text-[#303030] font-inter text-[14px] font-[600] leading-[16px] tracking-[0.25px] `}>
            HONDA ACCORD 2023
          </h3>
          <p className={`flex items-center gap-2`}>
            <CircleGauge width={14} />{" "}
            <span
              className={`text-[#303030] font-square text-[14px] font-[400] leading-[22px] tracking-[0.25px]`}
            >
              Auto
            </span>
          </p>
          <p className="text-[#777777] text-[14px] font-[400] font-inter">
            Available from Aug 20, 2024
          </p>
          <div className={`flex gap-[4px] items-center`}>

          <p className="text-[#303030] text-[12px] font-[300] font-inter leading-[20px] tracking-[0.3px]">
            45 reviews
          </p>
          <div className={`flex gap-[2px] items-center`}>
            <Star width={14} color="#11975D" fill="#11975D" />
            <Star width={14} color="#11975D" fill="#11975D"/>
            <Star width={14} color="#11975D" fill="#11975D" />
            <Star width={14} color="#11975D" fill="#11975D" />
            <Star width={14} color="#8ED5B1" fill="#8ED5B1" />
          </div>
          </div>
        </div>
        <p className={`font-square text-[14px] font-[400] text-[#222B2E] leading-[22px] tracking-[0.25px]`}>
          <span className={`font-[700]`}>$45</span>/day
        </p>
      </div>
    </div>
  );
};

export default CarImages;
