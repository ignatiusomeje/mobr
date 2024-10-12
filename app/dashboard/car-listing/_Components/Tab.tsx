import { Button } from "primereact/button";
import React from "react";

const Tab = ({
  name,
  activeTab,
  selected,
}: {
  name: string;
  activeTab: string;
  selected: (tab: string) => void;
}) => {
  return (
    <Button
      onClick={() => selected(name)}
      className={`font-inter text-[12px] font-[500] focus:ring-0 rounded-[16px] py-[12px] px-[24px] ${
        name.toLowerCase() === activeTab.toLowerCase()
          ? "bg-[#1B2E35] text-[#C6C6C6]"
          : "bg-[#E8E8E8] text-[#1B2E35]"
      }`}
    >
      {name}
    </Button>
  );
};

export default Tab;
