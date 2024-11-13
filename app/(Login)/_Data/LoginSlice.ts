import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { loginAdmin, loginOtp } from "./LoginApi";
import { adminInitialState, otpResponseType } from "../_types/loginTypes";
import { returnError } from "@/store/ErrorHandler";

const initialState: adminInitialState = {
  loginAdminLoading: false,
  loginAdminError: "",
  loginOtpLoading: false,
  loginOtpError: "",
  loginEmail: "",
  admin: {
    id: 0,
    fullName: "",
    email: "",
    role: "",
    created: undefined,
    updated: undefined,
    isVerified: false,
    jwtToken: "",
  },
};
const LoginAdminSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    clearLoginError: (state) => {
      state.loginAdminError = "";
      state.loginOtpError = "";
    },

    setEmail: (state, action: PayloadAction<string>) => {
      state.loginEmail = action.payload;
    },

    clearEmail: (state) => {
      state.loginEmail = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(loginAdmin.matchPending, (state) => {
      state.loginAdminLoading = true;
    });

    builder.addMatcher(loginAdmin.matchFulfilled, (state) => {
      state.loginAdminLoading = false;
    });

    builder.addMatcher(
      loginAdmin.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.loginAdminLoading = false;
        state.loginAdminError = returnError(action);
      }
    );

    builder.addMatcher(loginOtp.matchPending, (state) => {
      state.loginOtpLoading = true;
    });

    builder.addMatcher(
      loginOtp.matchFulfilled,
      (state, action: PayloadAction<otpResponseType>) => {
        state.loginOtpLoading = false;
        state.admin.id = action.payload.id;
        state.admin.created = action.payload.created;
        state.admin.email = action.payload.email;
        state.admin.fullName = action.payload.fullName;
        state.admin.isVerified = action.payload.isVerified;
        state.admin.jwtToken = action.payload.jwtToken;
        state.admin.role = action.payload.role;
        state.admin.updated = action.payload.updated;
      }
    );

    builder.addMatcher(
      loginOtp.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.loginOtpLoading = false;
        state.loginOtpError = returnError(action);
      }
    );
  },
});

export const { clearLoginError, setEmail, clearEmail } =
  LoginAdminSlice.actions;

export default LoginAdminSlice.reducer;
