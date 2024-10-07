import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import BackDialog from "./BackDialog";

const HeaderTemplate = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const num =14;
  return (
    <div className="flex flex-col gap-10">
      <p
        className={`text-[#11975D] flex items-center gap-3 font-square text-[14px] font-[700] leading-[22px] tracking-[0.25px]`}
      >
        <ArrowLeft onClick={()=> setVisible(true)} width={16} className={`cursor-pointer`} /> ADD NEW CAR
      </p>
      <p
        className={`text-[#777777] font-inter text-[14px] font-[600] leading-[22px] tracking-[0.25px]`}
      >
        ADD VEHICLE IMAGES (<span>{num} images</span>)
      </p>
      <BackDialog visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default HeaderTemplate;
