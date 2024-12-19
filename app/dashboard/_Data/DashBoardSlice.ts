import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { returnError } from "@/store/ErrorHandler";
import {
  getBookingInfo,
  getBookingStats,
  getCustomerInfo,
} from "./DashBoardAPI";
import {
  getBookingInfoResponseType,
  getBookingStatsResponseType,
  getCustomerInfoResponseType,
  initialDashboard,
} from "../_Types/DashboardTypes";

const initialState: initialDashboard = {
  getBookingInfoLoading: false,
  getBookingInfoError: "",
  getBookingInfo: [],
  getBookingStatsLoading: false,
  getBookingStatsError: "",
  getBookingStats: [],
  getCustomerInfoLoading: false,
  getCustomerInfoError: "",
  getCustomerInfo: [],
  year: new Date().getFullYear(),
};

const DashBoardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    clearDashboardError: (state) => {
      state.getBookingInfoError = initialState.getBookingInfoError;
      state.getBookingStatsError = initialState.getBookingStatsError;
    },

    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
  },
  extraReducers: (builder) => {
    /* clear everything on logout */
    builder.addCase("logout", () => {
      return initialState;
    });

    /* get all the booking info needed */
    builder.addMatcher(getBookingInfo.matchPending, (state) => {
      state.getBookingInfoLoading = true;
    });

    builder.addMatcher(
      getBookingInfo.matchFulfilled,
      (state, action: PayloadAction<getBookingInfoResponseType[]>) => {
        state.getBookingInfoLoading = false;
        state.getBookingInfo = action.payload;
      }
    );

    builder.addMatcher(
      getBookingInfo.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.getBookingInfoLoading = false;
        state.getBookingInfo = initialState.getBookingInfo;
        state.getBookingInfoError = returnError(action);
      }
    );

    /* get all the booking statistics needed  */
    builder.addMatcher(getBookingStats.matchPending, (state) => {
      state.getBookingStatsLoading = true;
    });

    builder.addMatcher(
      getBookingStats.matchFulfilled,
      (state, action: PayloadAction<getBookingStatsResponseType[]>) => {
        state.getBookingStatsLoading = false;
        state.getBookingStats = action.payload;
      }
    );

    builder.addMatcher(
      getBookingStats.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.getBookingStatsLoading = false;
        state.getBookingStats = initialState.getBookingStats;
        state.getBookingStatsError = returnError(action);
      }
    );

    /* get all the customer info needed */
    builder.addMatcher(getCustomerInfo.matchPending, (state) => {
      state.getCustomerInfoLoading = true;
    });

    builder.addMatcher(
      getCustomerInfo.matchFulfilled,
      (state, action: PayloadAction<getCustomerInfoResponseType[]>) => {
        state.getCustomerInfoLoading = false;
        state.getCustomerInfo = action.payload;
      }
    );

    builder.addMatcher(
      getCustomerInfo.matchRejected,
      (
        state,
        action: PayloadAction<
          (FetchBaseQueryError & { data?: unknown }) | undefined
        >
      ) => {
        state.getCustomerInfoLoading = false;
        state.getCustomerInfo = state.getCustomerInfo;
        state.getCustomerInfoError = returnError(action);
      }
    );
  },
});

export const { clearDashboardError, setYear } = DashBoardSlice.actions;

export default DashBoardSlice.reducer;
