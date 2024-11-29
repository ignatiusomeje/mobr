import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllBookings, getAllBookingsByAUser } from "./BookingAPI";
import {
  bookingResponseType,
  bookingState,
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
  getAllBookingsByAUser: [],
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
    clearBookingError: (state) => {
      state.getAllBookingsError = initialState.getAllBookingsError;
      state.getACarByIdError = initialState.getACarByIdError;
      state.featuresError = initialState.featuresError;
      state.getAllBookingsByAUserError =
        initialState.getAllBookingsByAUserError;
      state.getOneCustomerError = initialState.getOneCustomerError;
    },
  },
  extraReducers: (builder) => {
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
        state.getOneCustomerError = returnError(action);
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
      }
    );

    // builder.addMatcher(
    //   deleteBenefit.matchRejected,
    //   (
    //     state,
    //     action: PayloadAction<
    //       (FetchBaseQueryError & { data?: unknown }) | undefined
    //     >
    //   ) => {
    //     state.benefitsError = returnError(action);
    //   }
    // );

    // builder.addMatcher(
    //   editBenefit.matchFulfilled,
    //   (state, action: PayloadAction<benefitResponseType>) => {
    //     const indexofEdit = state.benefits.findIndex(
    //       (benefit) => benefit.benefitId === action.payload.benefitId
    //     );
    //     const notUpdatedOnes = state.benefits.filter(
    //       (val) => val.benefitId !== action.payload.benefitId
    //     );
    //     notUpdatedOnes.splice(indexofEdit, 0, action.payload);
    //     state.benefits = [...notUpdatedOnes];
    //   }
    // );

    // builder.addMatcher(
    //   editBenefit.matchRejected,
    //   (
    //     state,
    //     action: PayloadAction<
    //       (FetchBaseQueryError & { data?: unknown }) | undefined
    //     >
    //   ) => {
    //     state.benefitsError = returnError(action);
    //   }
    // );

    // builder.addMatcher(editBenefit.matchPending, (state) => {
    //   state.benefitsLoading = true;
    // });

    // builder.addMatcher(
    //   editBenefit.matchFulfilled,
    //   (state, action: PayloadAction<benefitResponseType>) => {
    //     state.benefitsLoading = false;
    //     const indexofEdit = state.benefits.findIndex(
    //       (benefit) => benefit.benefitId === action.payload.benefitId
    //     );
    //     const notUpdatedOnes = state.benefits.filter(
    //       (val) => val.benefitId !== action.payload.benefitId
    //     );
    //     notUpdatedOnes.splice(indexofEdit, 0, action.payload);
    //     state.benefits = [...notUpdatedOnes];
    //   }
    // );

    // builder.addMatcher(
    //   editBenefit.matchRejected,
    //   (
    //     state,
    //     action: PayloadAction<
    //       (FetchBaseQueryError & { data?: unknown }) | undefined
    //     >
    //   ) => {
    //     state.benefitsLoading = false;
    //     state.benefitsError = returnError(action);
    //   }
    // );

    // builder.addMatcher(getAllBenefits.matchPending, (state) => {
    //   state.benefitsLoading = true;
    // });

    // builder.addMatcher(
    //   getAllBenefits.matchFulfilled,
    //   (state, action: PayloadAction<benefitResponseType[]>) => {
    //     state.benefitsLoading = false;
    //     state.benefits = action.payload;
    //   }
    // );

    // builder.addMatcher(
    //   getAllBenefits.matchRejected,
    //   (
    //     state,
    //     action: PayloadAction<
    //       (FetchBaseQueryError & { data?: unknown }) | undefined
    //     >
    //   ) => {
    //     state.benefitsLoading = false;
    //     state.benefitsError = returnError(action);
    //   }
    // );

    // builder.addMatcher(getOneBenefit.matchPending, (state) => {
    //   state.benefitsLoading = true;
    // });

    // builder.addMatcher(
    //   getOneBenefit.matchFulfilled,
    //   (state, action: PayloadAction<benefitResponseType>) => {
    //     state.benefitsLoading = false;
    //     // state.benefits = action.payload;
    //   }
    // );

    // builder.addMatcher(
    //   getOneBenefit.matchRejected,
    //   (
    //     state,
    //     action: PayloadAction<
    //       (FetchBaseQueryError & { data?: unknown }) | undefined
    //     >
    //   ) => {
    //     state.benefitsLoading = false;
    //     state.benefitsError = returnError(action);
    //   }
    // );
  },
});

export const {
  setCurrentBooking,
  showLicense,
  showBookingHistory,
  showBookingPop,
  clearBookingError,
} = BookingSlice.actions;

export default BookingSlice.reducer;
