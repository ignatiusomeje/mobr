import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { changePassword, loginAdmin, loginOtp } from "./LoginApi";
import {
  adminInitialState,
  loginResponseType,
  otpResponseType,
} from "../_types/loginTypes";
import { returnError } from "@/store/ErrorHandler";

const initialState: adminInitialState = {
  loginAdminLoading: false,
  loginAdminError: "",
  loginOtpLoading: false,
  changePasswordError: "",
  changePasswordLoading: false,
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
    refreshToken: "",
  },
};
const LoginAdminSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    clearLoginError: (state) => {
      state.loginAdminError = "";
      state.loginOtpError = "";
      state.changePasswordError = "";
    },

    setToken: (state, action: PayloadAction<loginResponseType>) => {
      if (state.admin) {
        state.admin.jwtToken = action.payload.jwtToken;
      }
    },

    clearToken: (state) => {
      state.admin.jwtToken = "";
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
        state.admin.refreshToken = action.payload.refreshToken;
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

    builder.addMatcher(changePassword.matchPending, (state) => {
      state.changePasswordLoading = true;
    });

    builder.addMatcher(changePassword.matchFulfilled, (state) => {
      state.changePasswordLoading = false;
    });

    builder.addMatcher(
      changePassword.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.changePasswordLoading = false;
        state.changePasswordError = returnError(action);
      }
    );
  },
});

export const { clearLoginError, setEmail, clearEmail, setToken, clearToken } =
  LoginAdminSlice.actions;

export default LoginAdminSlice.reducer;
