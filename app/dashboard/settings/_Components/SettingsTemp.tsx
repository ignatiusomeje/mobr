import React, { useState } from "react";
import Tab from "./Tab";
import AccountTab from "./AccountTab";
import BenefitsTab from "./BenefitsTab";

const SettingsTemp = () => {
  const [value, setValue] = useState<string>("");
  const [selected, setSelected] = useState<string>("Account");
  return (
    <div
      className={`h-full flex-grow flex-1 gap-[28px] flex flex-col overflow-y-scroll noScroll py-[18px] px-[20px]`}
    >
      <div className="flex gap-5">
        {["Account", "Benefits"].map((btn) =>
         
            <Tab key={btn} name={btn} selected={selected === btn ? true : false} handleOnclick={() => setSelected(btn) } />
          
        )}
      </div>
      {selected === "Account" ? <AccountTab setValue={setValue} value={value} /> : <BenefitsTab /> }
    </div>
  );
};

export default SettingsTemp;
