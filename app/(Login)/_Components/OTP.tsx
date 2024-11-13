import React from "react";
import { Dialog } from "primereact/dialog";
import { indexInput } from "@/types/indexPage";
import { ArrowRight, Asterisk } from "lucide-react";
import { Button } from "primereact/button";
// import { useRouter } from "next/navigation";
import { InputNumber } from "primereact/inputnumber";

const OTP = ({
  visible,
  setVisible,
  otpFormik,
  loginOtpLoading,
  loginOtpError,
}: indexInput) => {
  return (
    <div className="card flex justify-content-center">
      <Dialog
        visible={visible}
        className="rounded-[20px]"
        modal
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        content={() => (
          <div className="bg-white max-w-[520px] w-full p-[32px] rounded-[20px]">
            <h2
              className={`font-square text-[24px] font-[700] tracking-[-0.10000000149011612px]`}
            >
              OTP VERIFICATION
            </h2>
            <p
              className={`font-inter text-[14px] font-[400] tracking-[0.25px] leading-[22px]`}
            >
              An email containing a code has been sent to your email. Input the
              code in the field below.
            </p>
            <form action="" onSubmit={otpFormik?.handleSubmit}>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="email" className="flex">
                  Enter OTP <Asterisk color="red" width={14} />
                </label>
                <InputNumber
                  id="otp"
                  name="otp"
                  useGrouping={false}
                  value={otpFormik.initialValues.otp === 0 ? null : otpFormik?.values.otp
                    // otpFormik?.values.otp === 0 && otpFormik?.values.otp.toString().length !== 1 ? null : otpFormik?.values.otp
                  }
                  onBlur={otpFormik?.handleBlur}
                  onValueChange={otpFormik?.handleChange}
                  type="text"
                  variant="outlined"
                  inputClassName={`w-full py-[5px] focus:ring-0 ${
                    otpFormik.values.otp &&
                    otpFormik.touched.otp &&
                    !otpFormik.errors.otp &&
                    `bg-[#DDE4E6]`
                  } ${
                    ((otpFormik.touched.otp && otpFormik.errors.otp) ||
                      loginOtpError) &&
                    `bg-[#FFD5C9]`
                  } px-[14px] rounded-[20px]`}
                  className={`${
                    otpFormik?.values.otp &&
                    otpFormik?.touched.otp &&
                    !otpFormik?.errors.otp &&
                    `bg-[#DDE4E6]`
                  } ${
                    ((otpFormik?.touched.otp && otpFormik?.errors.otp) ||
                      loginOtpError) &&
                    `bg-[#FFD5C9]`
                  } hover:border hover:border-[#474747] focus:border focus:border-[#474747] p-inputtext-sm py-[8px] focus:ring-0 px-[14px] rounded-[20px] border border-[#C6C6C6]`}
                  placeholder="Enter code"
                />
              </div>
              <Button
                loading={loginOtpLoading}
                // onClick={(e) => {
                //   setVisible(true);
                //   hide(e);
                //   route.push("/dashboard");
                // }}
                className="bg-[#11975D] w-full rounded-[20px] focus:ring-0 mt-5 font-[400] text-[12px] font-square text-white py-[14px] px-[24px] hover:bg-[#3A494F] flex items-center justify-center gap-2"
              >
                VERIFY IT’S YOU <ArrowRight width={14} />
              </Button>
            </form>
          </div>
        )}
      ></Dialog>
    </div>
  );
};

export default OTP;
