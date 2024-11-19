import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import BackDialog from "./BackDialog";
import { HeaderTemplateType } from "../../_types/CarType";

const HeaderTemplate = ({total, router}:HeaderTemplateType) => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className="flex flex-col gap-5">
      <p
        className={`text-[#11975D] flex items-center gap-3 font-square text-[14px] font-[700] leading-[22px] tracking-[0.25px]`}
      >
        <ArrowLeft onClick={()=> total > 0 ? setVisible(true) : router()} width={16} className={`cursor-pointer`} /> ADD NEW CAR
      </p>
      <p
        className={`text-[#777777] font-inter text-[14px] font-[600] leading-[22px] tracking-[0.25px]`}
      >
        ADD VEHICLE IMAGES {total !== 0 && (<span>{total} images added</span>)}
      </p>
      <BackDialog router={router} visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default HeaderTemplate;
