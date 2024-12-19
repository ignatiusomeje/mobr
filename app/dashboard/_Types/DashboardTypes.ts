import { bookingState } from "../bookings/_Types/BookingTypes";

export type initialDashboard = {
  getBookingInfoLoading: boolean;
  getBookingInfoError: string;
  getBookingInfo: getBookingInfoResponseType[];
  getBookingStatsLoading: boolean;
  getBookingStatsError: string;
  getBookingStats: getBookingStatsResponseType[];
  getCustomerInfoLoading: boolean;
  getCustomerInfoError: string;
  getCustomerInfo: getCustomerInfoResponseType[];
  year: number;
};

export type getBookingStatsInputType = {
  year: number;
};
export type getBookingStatsResponseType = {
  month: number;
  totalBooking: number;
};

export type getBookingInfoResponseType = {
  state: bookingState;
  totalCount: number;
};

export type getCustomerInfoResponseType = {
  state: customerStatus;
  totalCount: number;
};

export enum customerStatus {
  UNVERIFIED = "UNVERIFIED",
  VERIFIED = "VERIFIED",
}
