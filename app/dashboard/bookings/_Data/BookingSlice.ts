import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  changeBookingState,
  getAllBookings,
  getAllBookingsByAUser,
  getAVehicleDamageReport,
} from "./BookingAPI";
import {
  bookingResponseType,
  bookingState,
  damageReportsResponse,
  initialStateBookings,
} from "../_Types/BookingTypes";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { returnError } from "@/store/ErrorHandler";
import {
  carBookingState,
  EnergyType,
  getAllCarFeatureResonseTypes,
  getByIdResponse,
  savedState,
  TransmissionType,
} from "../../car-listing/_types/CarType";
import { getACarById, getAllCarFeature } from "../../car-listing/_Data/CarAPI";
import { getOneCustomer } from "../../customers/_Data/customerAPI";
import { customerResponse } from "../../customers/_types/CustomerTypes";

const initialState: initialStateBookings = {
  bookings: [],
  getAllBookingsLoading: false,
  getAllBookingsError: "",
  carFetchedById: {
    averageVehicleRating: 0,
    carBookingState: carBookingState.Available,
    energyType: EnergyType.Petrol,
    reviewCount: 0,
    savedState: savedState.Active,
    transmissionType: TransmissionType.Auto,
    vehicleAvaliableDate: new Date().toISOString(),
    vehicleCondition: "",
    vehicleDescription: "",
    vehicleId: "",
    vehicleImages: [],
    vehicleLocation: "",
    vehicleName: "",
    vehicleRentalPrice: 0,
    vehicleYear: 0,
  },
  getACarByIdLoading: false,
  getACarByIdError: "",
  customer: {
    created: new Date().toISOString(),
    email: "",
    fullName: "",
    id: 0,
    isVerified: false,
    countryCode: "",
    dateValidated: new Date().toISOString(),
    dob: new Date().toISOString(),
    isValidated: false,
    phoneNumber: 0,
    streetAddress: "",
    title: "",
    role: "",
    backDriverLisenceImagePublicId: "",
    backDriverLisenceImageUrl: "",
    frontDriverLisenceImageUrl: "",
    frontDriverLisencePublicId: "",
    profileImagePublicId: "",
    profileImageUrl: "",
    isActive: true,
  },
  // getOneCustomerLoading: false,
  getOneCustomerError: "",
  currentBooking: {
    bookingId: 0,
    vehichleId: "",
    customerName: "",
    email: "",
    phoneNumber: "",
    bookingState: bookingState.Pending,
    isActive: false,
    isPaid: false,
    startDate: "",
    returnDate: "",
    customerId: 0,
    amountToPay: 0,
    totalDistance: 0,
  },
  showLicense: false,
  licenseURL: "",
  features: [],
  featuresError: "",
  showBookingHistory: false,
  showBookingPop: false,
  getAllBookingsByAUserLoading: false,
  getAllBookingsByAUserError: "",
  changeBookingStateLoading: false,
  changeBookingStateError: "",
  getAVehicleDamageReportLoading: false,
  getAVehicleDamageReportError: "",
  vehicleDamageReport: [],
  getAllBookingsByAUser: [],
  showDamageReport: false,
};
const BookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setCurrentBooking: (state, action: PayloadAction<bookingResponseType>) => {
      state.currentBooking = action.payload;
    },

    showLicense: (
      state,
      action: PayloadAction<{ show: boolean; url?: string }>
    ) => {
      state.showLicense = action.payload.show;
      if (action.payload.url) state.licenseURL = action.payload.url;
    },

    showBookingHistory: (state, action: PayloadAction<{ show: boolean }>) => {
      state.showBookingHistory = action.payload.show;
      // state.showBookingPop=false
    },

    showBookingPop: (state, action: PayloadAction<{ show: boolean }>) => {
      state.showBookingPop = action.payload.show;
    },

    showDamageReportPop: (state, action: PayloadAction<{ show: boolean }>) => {
      state.showDamageReport = action.payload.show;
    },

    clearBookingError: (state) => {
      state.getAllBookingsError = initialState.getAllBookingsError;
      state.getACarByIdError = initialState.getACarByIdError;
      state.featuresError = initialState.featuresError;
      state.getAllBookingsByAUserError =
        initialState.getAllBookingsByAUserError;
      state.getOneCustomerError = initialState.getOneCustomerError;
      state.getAVehicleDamageReportError =
        initialState.getAVehicleDamageReportError;
    },
  },
  extraReducers: (builder) => {
    /* clear everything on logout */
    builder.addCase("logout", () => {
      return initialState;
    });

    builder.addMatcher(getAllBookings.matchPending, (state) => {
      state.getAllBookingsLoading = true;
    });

    builder.addMatcher(
      getAllBookings.matchFulfilled,
      (state, action: PayloadAction<bookingResponseType[]>) => {
        state.getAllBookingsLoading = false;
        state.bookings = action.payload;
      }
    );

    builder.addMatcher(
      getAllBookings.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.getAllBookingsLoading = false;
        state.bookings = initialState.bookings;
        state.getAllBookingsError = returnError(action);
      }
    );

    /* handles fetching a particular User's booking history */
    builder.addMatcher(getAllBookingsByAUser.matchPending, (state) => {
      state.getAllBookingsByAUserLoading = true;
    });

    builder.addMatcher(
      getAllBookingsByAUser.matchFulfilled,
      (state, action: PayloadAction<bookingResponseType[]>) => {
        state.getAllBookingsByAUserLoading = false;
        state.getAllBookingsByAUser = action.payload;
      }
    );

    builder.addMatcher(
      getAllBookingsByAUser.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.getAllBookingsByAUserLoading = false;
        state.getAllBookingsByAUser = initialState.getAllBookingsByAUser;
        state.getAllBookingsByAUserError = returnError(action);
      }
    );

    /* get a car by Id */
    builder.addMatcher(getACarById.matchPending, (state) => {
      state.getACarByIdLoading = true;
    });

    builder.addMatcher(
      getACarById.matchFulfilled,
      (state, action: PayloadAction<getByIdResponse>) => {
        state.getACarByIdLoading = false;
        state.carFetchedById = {
          ...action.payload,
          vehicleAvaliableDate: new Date(
            action.payload.vehicleAvaliableDate
          ).toISOString(),
        };
      }
    );

    builder.addMatcher(
      getACarById.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.getACarByIdLoading = false;
        state.carFetchedById = initialState.carFetchedById;
        state.getACarByIdError = returnError(action);
      }
    );

    /* get a User by Id */
    // builder.addMatcher(getOneCustomer.matchPending, (state) => {
    //   state.getOneCustomerLoading = true;
    // });

    builder.addMatcher(
      getOneCustomer.matchFulfilled,
      (state, action: PayloadAction<customerResponse>) => {
        // state.getOneCustomerLoading = false;
        state.customer = action.payload;
      }
    );

    builder.addMatcher(
      getOneCustomer.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        // state.getOneCustomerLoading = false;
        state.customer = initialState.customer;
        state.getOneCustomerError = returnError(action);
      }
    );

    /* get DamageReports of a vehicle */
    builder.addMatcher(getAVehicleDamageReport.matchPending, (state) => {
      state.getAVehicleDamageReportLoading = true;
    });

    builder.addMatcher(
      getAVehicleDamageReport.matchFulfilled,
      (state, action: PayloadAction<damageReportsResponse[]>) => {
        state.getAVehicleDamageReportLoading = false;
        state.vehicleDamageReport = action.payload;
      }
    );

    builder.addMatcher(
      getAVehicleDamageReport.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.getAVehicleDamageReportLoading = false;
        state.vehicleDamageReport = initialState.vehicleDamageReport;
        state.getAVehicleDamageReportError = returnError(action);
      }
    );

    /* change booking state of a vehicle */
    builder.addMatcher(changeBookingState.matchPending, (state) => {
      state.changeBookingStateLoading = true;
    });

    builder.addMatcher(changeBookingState.matchFulfilled, (state) => {
      state.changeBookingStateLoading = false;
    });

    builder.addMatcher(
      changeBookingState.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.changeBookingStateLoading = false;
        state.bookings = initialState.bookings;
        state.changeBookingStateError = returnError(action);
      }
    );

    /* get all car features for a car section */

    builder.addMatcher(
      getAllCarFeature.matchFulfilled,
      (state, action: PayloadAction<getAllCarFeatureResonseTypes[]>) => {
        state.features = action.payload;
      }
    );

    builder.addMatcher(
      getAllCarFeature.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.featuresError = returnError(action);
        state.features = initialState.features;
      }
    );
  },
});

export const {
  setCurrentBooking,
  showLicense,
  showBookingHistory,
  showBookingPop,
  clearBookingError,
  showDamageReportPop,
} = BookingSlice.actions;

export default BookingSlice.reducer;
