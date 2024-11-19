import { AccountAPI } from "@/store/AccountAPI";
import {
  changePasswordInputType,
  loginInputType,
  loginResponseType,
  otpInputType,
  otpResponseType,
  ResponseType,
} from "./../_types/loginTypes";
import { AccountProtectedAPI } from "@/store/AccountProtected";

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

const accountProtectedApi = AccountProtectedAPI.injectEndpoints({
  endpoints: (build) => ({
    changePassword: build.mutation<ResponseType, changePasswordInputType>({
      query: ({ ...password }) => ({
        url: `/changePassword`,
        method: "Put",
        params: {
          id: password.id,
        },
        body: {
          confirmPassword: password.confirmPassword,
          newPassword: password.newPassword,
          oldPassword: password.oldPassword,
        },
      }),
    }),
  }),
});

export const { useChangePasswordMutation } = accountProtectedApi;
export const { changePassword } = accountProtectedApi.endpoints;
