import { Button } from "primereact/button";
import React, { useState } from "react";
import FeaturePop from "./FeaturePop";

const Feature = ({
  name,
  value,
  popupItems,
}: {
  name: string;
  value?: string;
  popupItems: string[];
}) => {
  const [active, setActive] = useState<{name:string, active:boolean}>({name: "", active:false})
  return (
    <div className={`flex items-center justify-between py-[16px]`}>
      <div className={`flex flex-col gap-[12px]`}>
        <h4
          className={`text-[#303030] uppercase font-inter text-[12px] font-[600] leading-[20px] tracking-[0.3px]`}
        >
          {name}
        </h4>
        {value && (
          <p
            className={`font-inter capitalize text-[12px] font-[400] leading-[20px] tracking-[0.3px]`}
          >
            {value}
          </p>
        )}
      </div>
      <Button
        className={`focus:ring-0 text-[#11975D] font-inter text-[12px] font-[500] leading-[20px] tracking-[0.3px]`}
        onClick={()=> setActive({active: true, name})}
      >
        Select
      </Button>
      <FeaturePop items={popupItems} name={active.name} visible={active.active} setVisible={setActive} />
    </div>
  );
};

export default Feature;
