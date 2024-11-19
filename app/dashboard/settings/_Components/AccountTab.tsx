import { SettingsTabType } from "@/types/Settings";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React from "react";

const AccountTab = ({
  email,
  changePasswordFormik,
  changePasswordLoading,
}: SettingsTabType) => {
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
        <form
          action=""
          onSubmit={changePasswordFormik.handleSubmit}
          className={`flex flex-col gap-[18px]`}
        >
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor="password"
              className={`text-[#1B1B1B] font-inter font-[500] text-[12px] leading-[20px] tracking-[0.3px]`}
            >
              Current password
            </label>

            <Password
              value={changePasswordFormik.values.oldPassword}
              onChange={changePasswordFormik.handleChange}
              onBlur={changePasswordFormik.handleBlur}
              id="oldPassword"
              name="oldPassword"
              className="w-full rounded-[20px]  border border-[#C6C6C6]"
              inputClassName={`w-full py-[12px] focus:ring-0 px-[14px] rounded-[20px] ${
                changePasswordFormik.values.oldPassword &&
                changePasswordFormik.touched.oldPassword &&
                !changePasswordFormik.errors.oldPassword &&
                `bg-[#DDE4E6]`
              } ${
                changePasswordFormik.touched.oldPassword &&
                changePasswordFormik.errors.oldPassword &&
                `bg-[#FFD5C9]`
              }`}
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
              value={changePasswordFormik.values.newPassword}
              onChange={changePasswordFormik.handleChange}
              onBlur={changePasswordFormik.handleBlur}
              id="newPassword"
              name="newPassword"
              className="w-full rounded-[20px]  border border-[#C6C6C6]"
              inputClassName={`w-full py-[12px] focus:ring-0 px-[14px] rounded-[20px] ${
                changePasswordFormik.values.newPassword &&
                changePasswordFormik.touched.newPassword &&
                !changePasswordFormik.errors.newPassword &&
                `bg-[#DDE4E6]`
              } ${
                changePasswordFormik.touched.newPassword &&
                changePasswordFormik.errors.newPassword &&
                `bg-[#FFD5C9]`
              }`}
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
              value={changePasswordFormik.values.confirmPassword}
              onChange={changePasswordFormik.handleChange}
              onBlur={changePasswordFormik.handleBlur}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full rounded-[20px]  border border-[#C6C6C6]"
              inputClassName={`w-full py-[12px] focus:ring-0 px-[14px] rounded-[20px] ${
                changePasswordFormik.values.confirmPassword &&
                changePasswordFormik.touched.confirmPassword &&
                !changePasswordFormik.errors.confirmPassword &&
                `bg-[#DDE4E6]`
              } ${
                changePasswordFormik.touched.confirmPassword &&
                changePasswordFormik.errors.confirmPassword &&
                `bg-[#FFD5C9]`
              }`}
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
            type="submit"
            loading={changePasswordLoading}
            // onClick={() => changePasswordFormik.submitForm()}
            className="bg-[#11975D] gap-2 w-full rounded-[20px] focus:ring-0 mt-4 font-[400] text-[12px] font-square text-white py-[14px] px-[24px] hover:scale-105 flex items-center justify-center leading-[16px] tracking-[0.3px]"
          >
            CHANGE PASSWORD
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AccountTab;
