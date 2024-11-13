import { AccountAPI } from "@/store/AccountAPI";
import {
  loginInputType,
  loginResponseType,
  otpInputType,
  otpResponseType,
} from "./../_types/loginTypes";

const LoginApi = AccountAPI.injectEndpoints({
  endpoints: (build) => ({
    loginAdmin: build.mutation<loginResponseType, loginInputType>({
      query: ({ ...admin }) => ({
        url: `/authenticate`,
        method: "Post",
        body: admin,
      }),
    }),

    loginOtp: build.mutation<otpResponseType, otpInputType>({
      query: ({ ...otp }) => ({
        url: `/verify-otp`,
        method: "Post",
        body: otp,
      }),
    }),
  }),
});

export const { useLoginAdminMutation, useLoginOtpMutation } = LoginApi;
export const { loginAdmin, loginOtp } = LoginApi.endpoints;
