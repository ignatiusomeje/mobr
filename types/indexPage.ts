import { FormikProps } from "formik";
// import { Dispatch, SetStateAction } from "react";

export type otp = {
  email: string;
  otp: number;
};

export type indexInput = {
  visible: boolean;
  setVisible: (e: boolean) => void;
  otpFormik: FormikProps<otp>;
  loginOtpLoading: boolean;
  loginOtpError: string;
};
