"use client";
import { ArrowRight, Asterisk } from "lucide-react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState } from "react";
import OTP from "./_Components/OTP";

export default function Home() {
  const [value, setValue] = useState<string>("");
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="max-w-[540Px] text-center">
        <h1 className="font-square text-[32px] mb-4 font-[700] leading-8 text-[#11975D]">
          MOBR
        </h1>

        <h2 className="text-[24px] font-[700] leading-8 text-[#1B2E35]">
          HELLO SUPER ADMIN!
        </h2>

        <p className="text-[14px] font-[400] leading-[22px]">
          Provide the required details below to access the admin account.
        </p>

        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col mt-5 gap-4 text-start"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="flex">
              Enter your email <Asterisk color="red" width={14} />
            </label>
            <InputText
              type="email"
              variant="outlined"
              className="p-inputtext-sm py-[12px] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="flex">
              Enter your password
              <Asterisk width={14} color="red" />
            </label>

            <Password
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-[20px]  border border-[#C6C6C6]"
              inputClassName={`w-full py-[12px] focus:ring-0 px-[14px] rounded-[20px]`}
              toggleMask
              placeholder="Enter your password"
              promptLabel="Choose a password"
              weakLabel="Too simple"
              mediumLabel="Average complexity"
              strongLabel="Complex password"
              mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
              strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
            />
          </div>

          <Button
            // loading={true}
            onClick={() => setVisible(true)}
            className="bg-[#11975D] rounded-[20px] focus:ring-0 mt-4 font-[400] text-[12px] font-square text-white py-[14px] px-[24px] hover:scale-105 flex items-center justify-center gap-2"
          >
            LOG INTO YOUR ACCOUNT <ArrowRight width={14} />
          </Button>
          <OTP visible={visible} setVisible={setVisible} />
        </form>
      </div>
    </div>
  );
}
