export type loginInputType = {
  email: string;
  password: string;
  isAdmin: boolean;
};

export type loginResponseType = {
  id: number;
  fullName: string;
  email: string;
  role: string;
  created: Date | undefined;
  updated: Date | undefined;
  isVerified: boolean;
  jwtToken: string;
};

export type otpInputType = {
  email: string;
  otp: number;
};

export type otpResponseType = {
  id: number;
  fullName: string;
  email: string;
  role: string;
  created: Date | undefined;
  updated: Date | undefined;
  isVerified: boolean;
  jwtToken: string;
};

export type adminInitialState = {
  loginAdminLoading: boolean;
  loginAdminError: string;
  loginOtpLoading: boolean;
  loginOtpError: string;
  loginEmail: string;
  admin: otpResponseType;
};
