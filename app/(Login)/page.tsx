"use client";
import { ArrowRight, Asterisk } from "lucide-react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState } from "react";
import OTP from "./_Components/OTP";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Home() {
  // const [value, setValue] = useState<string>("");
  const [visible, setVisible] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup.string().email().trim().required(),
    password: yup.string().trim().required(),
  });

  const otpSchema = yup.object().shape({
    otp: yup.string().trim().required(),
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    enableReinitialize: true,
    onSubmit: () => {},
  });

  const otpFormik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: otpSchema,
    enableReinitialize: true,
    onSubmit: () => {},
  });

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="max-w-[540Px] flex flex-col gap-[22px] w-full text-center">
        <h1 className="font-square text-[32px] font-[700] leading-8 text-[#11975D]">
          MOBR
        </h1>

        <div>
          <h2 className="text-[24px] font-[700] leading-8 text-[#1B2E35]">
            HELLO SUPER ADMIN!
          </h2>

          <p className="text-[14px] font-[400] leading-[22px]">
            Provide the required details below to access the admin account.
          </p>
        </div>

        <form
          action=""
          onSubmit={loginFormik.handleSubmit}
          className="flex flex-col gap-[28px] text-start"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="flex">
              Enter your email <Asterisk color="red" width={14} />
            </label>
            <InputText
              type="email"
              name="email"
              id="email"
              value={loginFormik.values.email}
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
              variant="outlined"
              className={`p-inputtext-sm py-[12px] ${
                loginFormik.values.email &&
                loginFormik.touched.email &&
                !loginFormik.errors.email &&
                `bg-[#DDE4E6]`
              } ${
                loginFormik.touched.email &&
                loginFormik.errors.email &&
                `bg-[#FFD5C9]`
              } hover:border hover:border-[#474747] focus:border focus:border-[#474747] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]`}
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="flex">
              Enter your password
              <Asterisk width={14} color="red" />
            </label>

            <Password
              value={loginFormik.values.password}
              onChange={loginFormik.handleChange}
              onBlur={loginFormik.handleBlur}
              name="password"
              id="password"
              className={`w-full rounded-[20px] hover:border hover:border-[#474747] focus:border focus:border-[#474747]  border border-[#C6C6C6]`}
              inputClassName={`w-full py-[12px] focus:ring-0 ${
                loginFormik.values.password &&
                loginFormik.touched.password &&
                !loginFormik.errors.password &&
                `bg-[#DDE4E6]`
              } ${
                loginFormik.touched.password &&
                loginFormik.errors.password &&
                `bg-[#FFD5C9]`
              } px-[14px] rounded-[20px]`}
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
            className="bg-[#11975D] rounded-[20px] focus:ring-0 mt-4 font-[400] text-[12px] font-square text-white py-[14px] px-[24px] hover:bg-[#3A494F] flex items-center justify-center gap-2"
          >
            LOG INTO YOUR ACCOUNT <ArrowRight width={14} />
          </Button>
          <OTP
            otpFormik={otpFormik}
            visible={visible}
            setVisible={setVisible}
          />
        </form>
      </div>
    </div>
  );
}
