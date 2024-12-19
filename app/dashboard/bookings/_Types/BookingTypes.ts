import {
  getAllCarFeatureResonseTypes,
  getByIdFormikFormat,
} from "../../car-listing/_types/CarType";
import { customerResponse } from "../../customers/_types/CustomerTypes";

export type initialStateBookings = {
  bookings: bookingResponseType[];
  getAllBookingsLoading: boolean;
  getAllBookingsError: string;
  carFetchedById: getByIdFormikFormat;
  getACarByIdLoading: boolean;
  getACarByIdError: string;
  // getOneCustomerLoading: boolean;
  customer: customerResponse;
  getOneCustomerError: string;
  currentBooking: bookingResponseType;
  showLicense: boolean;
  licenseURL: string;
  features: getAllCarFeatureResonseTypes[];
  featuresError: string;
  showBookingHistory: boolean;
  showBookingPop: boolean;
  getAllBookingsByAUserLoading: boolean;
  getAllBookingsByAUserError: string;
  changeBookingStateLoading: boolean;
  getAVehicleDamageReportError: string;
  getAVehicleDamageReportLoading: boolean;
  showDamageReport: boolean;
  changeBookingStateError: string;
  getAllBookingsByAUser: bookingResponseType[];
  vehicleDamageReport: damageReportsResponse[];
  // createBenefitLoading: boolean;
};

export type bookingInputType = {
  name: string;
};

export enum bookingState {
  Pending = "Pending",
  Booked = "Booked",
  Cancelled = "Cancelled",
}

export type bookingResponseType = {
  bookingId: number;
  vehichleId: string;
  customerName: string;
  email: string;
  phoneNumber: string;
  bookingState: bookingState;
  isActive: boolean;
  isPaid: boolean;
  startDate: string;
  returnDate: string;
  customerId: number;
  amountToPay: number;
  totalDistance: number;
};

export type changeBookingStateInput = {
  vehichleId: string;
  bookingState: string;
};

export type damageReportsResponse = {
  damageReportId: number;
  damageReporComment: string;
  damageAreas: string;
  vehicleSides: string;
  damageImages: damageImage[];
  vehichleId: string;
  accountId: number;
  created: string;
  updated: string;
};

export type damageImage = {
  damageImageId: number;
  damageImageUrl: string;
};

export type getDamageReportInput = {
  vehicleId: string;
};
