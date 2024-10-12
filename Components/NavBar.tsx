import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import React from "react";

const NavBar = ({ routeName }: { routeName: string }) => {
  return (
    <div
      className={`bg-[#F9F9F9] w-full pt-[24px] pb-[16px] border .border-[0.4px] px-[20px] flex items-center justify-between`}
    >
      <h3
        className={`w-full font-[600] text-[18px] font-inter text-[#11975D]`}
      >
        {routeName.toUpperCase()}
      </h3>
      <div className="flex w-full justify-end gap-5  items-center">
        {routeName !== "Dashboard" && routeName !== "Settings" && <form action="" onSubmit={(e) => e.preventDefault()}>
          <IconField className="border max-w-[300px] border-[#C6C6C6] w-full rounded-[20px] overflow-hidden">
            <InputIcon className="pi pi-search"></InputIcon>
            <InputText
              placeholder="Enter your name"
              className={`py-[12px] px-[14px] focus:ring-0 `}
            />
          </IconField>
        </form>}
        <span
          className={`bg-[#1B2E35] w-[40px] h-[40px] flex items-center justify-center rounded-full text-[22px] font-[600] font-inter text-[#C6C6C6]`}
        >
          A
        </span>
      </div>
    </div>
  );
};

export default NavBar;
