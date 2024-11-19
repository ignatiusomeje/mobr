"use client";
import { ArrowRight, Asterisk } from "lucide-react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useRef, useState } from "react";
import OTP from "./_Components/OTP";
import { useFormik } from "formik";
import * as yup from "yup";
import { useLoginAdminMutation, useLoginOtpMutation } from "./_Data/LoginApi";
import { Toast } from "primereact/toast";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearEmail, clearLoginError, setEmail } from "./_Data/LoginSlice";
import { useRouter } from "next/navigation";
// import { otp } from "@/types/indexPage";

export default function Home() {
  // const [value, setValue] = useState<string>("");
  const router = useRouter();
  const toast = useRef<Toast>(null);
  const [visible, setVisible] = useState(false);
  const [loginAdminMutation] = useLoginAdminMutation();
  const [loginOtpMutation] = useLoginOtpMutation();
  const dispatch = useAppDispatch();
  const loginAdminError = useAppSelector(
    (state) => state.login.loginAdminError
  );
  const loginEmail = useAppSelector((state) => state.login.loginEmail);
  const loginAdminLoading = useAppSelector(
    (state) => state.login.loginAdminLoading
  );
  const loginOtpError = useAppSelector((state) => state.login.loginOtpError);
  const loginOtpLoading = useAppSelector(
    (state) => state.login.loginOtpLoading
  );

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
      isAdmin: true,
    },
    validationSchema: loginSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      loginAdminMutation(values)
        .unwrap()
        .then(() => {
          dispatch(setEmail(values.email));
          setVisible(true);
        });
      console.log(values);
    },
  });

  const otpFormik = useFormik({
    initialValues: {
      email: loginEmail,
      otp: 0,
    },
    validationSchema: otpSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      loginOtpMutation(values)
        .unwrap()
        .then(() => {
          setVisible(false);
          showSuccess();
          dispatch(clearEmail());
          router.push("/dashboard");
        });
    },
  });

  const showError = (message: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };

  const showSuccess = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Welcome Admin",
      life: 3000,
    });
  };

  if (loginOtpError) {
    showError(loginOtpError);
    dispatch(clearLoginError());
  } else if (loginAdminError) {
    showError(loginAdminError);
    dispatch(clearLoginError());
  }

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <Toast ref={toast} />
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
                (loginFormik.touched.email && loginFormik.errors.email) ||
                loginAdminError !== ""
                  ? `bg-[#FFD5C9]`
                  : ``
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
                ((loginFormik.touched.password &&
                  loginFormik.errors.password) ||
                  loginAdminError !== "") &&
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
            loading={loginAdminLoading}
            // onClick={() => setVisible(true)}
            className="bg-[#11975D] rounded-[20px] focus:ring-0 mt-4 font-[400] text-[12px] font-square text-white py-[14px] px-[24px] hover:bg-[#3A494F] flex items-center justify-center gap-2"
          >
            LOG INTO YOUR ACCOUNT <ArrowRight width={14} />
          </Button>
          <OTP
            otpFormik={otpFormik}
            visible={visible}
            loginOtpError={loginOtpError}
            loginOtpLoading={loginOtpLoading}
            setVisible={(e) => setVisible(e)}
          />
        </form>
      </div>
    </div>
  );
}
