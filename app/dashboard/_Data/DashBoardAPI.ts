import { CarAPI } from "@/store/CarAPI";
import { getBookingInfoResponseType, getBookingStatsInputType, getBookingStatsResponseType, getCustomerInfoResponseType } from "../_Types/DashboardTypes";

const DashBoardApi = CarAPI.injectEndpoints({
  endpoints: (build) => ({
    getBookingStats: build.query<getBookingStatsResponseType[], getBookingStatsInputType>({
      query: ({ ...year }) => ({
        url: `/dashBoard`,
        method: "Get",
        params: year,
      }),
    }),

    getBookingInfo: build.query<getBookingInfoResponseType[], void>({
      query: () => ({
        url: `/dashBoard/get-bookings-stat`,
        method: "Get",
      }),
    }),

    getCustomerInfo: build.query<getCustomerInfoResponseType[], void>({
      query: () => ({
        url: `/dashBoard/get-customer-stat`,
        method: "Get",
      }),
    }),
  }),
});

export const {useGetBookingInfoQuery, useGetBookingStatsQuery, useGetCustomerInfoQuery} = DashBoardApi;
export const {getBookingInfo, getBookingStats, getCustomerInfo} = DashBoardApi.endpoints;
