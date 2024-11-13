import { SettingsTabType } from "@/types/Settings";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React from "react";

const AccountTab = ({ value, setValue, email }: SettingsTabType) => {
  return (
    <div className={`flex flex-col gap-[32px] max-w-[740px] w-full`}>
      <div className={`flex flex-col gap-[20px]`}>
        <h3
          className={`text-[#777777] font-inter font-[600] text-[14px] leading-[22px] tracking-[0.25px]`}
        >
          EMAIL INFORMATION
        </h3>
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="email"
            className={`text-[#1B1B1B] font-inter font-[500] text-[12px] leading-[20px] tracking-[0.3px]`}
          >
            Email address
          </label>
          <InputText
            value={email}
            readOnly
            type="email"
            variant="outlined"
            className="p-inputtext-sm py-[12px] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]"
            placeholder="Sample@email.com"
          />
        </div>
      </div>
      <div className={`flex flex-col gap-[20px]`}>
        <h3
          className={`text-[#777777] font-inter font-[600] text-[14px] leading-[22px] tracking-[0.25px]`}
        >
          PASSWORD INFORMATION
        </h3>
        <form action="" className={`flex flex-col gap-[18px]`}>
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="password"
              className={`text-[#1B1B1B] font-inter font-[500] text-[12px] leading-[20px] tracking-[0.3px]`}
            >
              Current password
            </label>

            <Password
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-[20px]  border border-[#C6C6C6]"
              inputClassName={`w-full py-[12px] focus:ring-0 px-[14px] rounded-[20px]`}
              toggleMask
              placeholder="Current password"
              promptLabel="Enter current password"
              weakLabel="Too simple"
              mediumLabel="Average complexity"
              strongLabel="Complex password"
              mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
              strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="password"
              className={`text-[#1B1B1B] font-inter font-[500] text-[12px] leading-[20px] tracking-[0.3px]`}
            >
              Enter new password
            </label>

            <Password
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-[20px]  border border-[#C6C6C6]"
              inputClassName={`w-full py-[12px] focus:ring-0 px-[14px] rounded-[20px]`}
              toggleMask
              placeholder="Enter new password"
              promptLabel="Enter a new password"
              weakLabel="Too simple"
              mediumLabel="Average complexity"
              strongLabel="Complex password"
              mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
              strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="password"
              className={`text-[#1B1B1B] font-inter font-[500] text-[12px] leading-[20px] tracking-[0.3px]`}
            >
              Confirm new password
            </label>

            <Password
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-[20px]  border border-[#C6C6C6]"
              inputClassName={`w-full py-[12px] focus:ring-0 px-[14px] rounded-[20px]`}
              toggleMask
              placeholder="Confirm new password"
              promptLabel="Confirm new password"
              weakLabel="Too simple"
              mediumLabel="Average complexity"
              strongLabel="Complex password"
              mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
              strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
            />
          </div>
          <Button
            // loading={true}
            // onClick={() => setVisible(true)}
            className="bg-[#11975D] w-full rounded-[20px] focus:ring-0 mt-4 font-[400] text-[12px] font-square text-white py-[14px] px-[24px] hover:scale-105 flex items-center justify-center leading-[16px] tracking-[0.3px]"
          >
            CHANGE PASSWORD
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AccountTab;
