import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import BackDialog from "./BackDialog";

const HeaderTemplate = ({total}:{total:number}) => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className="flex flex-col gap-5">
      <p
        className={`text-[#11975D] flex items-center gap-3 font-square text-[14px] font-[700] leading-[22px] tracking-[0.25px]`}
      >
        <ArrowLeft onClick={()=> setVisible(true)} width={16} className={`cursor-pointer`} /> ADD NEW CAR
      </p>
      <p
        className={`text-[#777777] font-inter text-[14px] font-[600] leading-[22px] tracking-[0.25px]`}
      >
        ADD VEHICLE IMAGES {total !== 0 && (<span>{total} images added</span>)}
      </p>
      <BackDialog visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default HeaderTemplate;
