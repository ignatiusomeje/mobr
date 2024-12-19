import { CarAPI } from "@/store/CarAPI";
import {
  bookingResponseType,
  changeBookingStateInput,
  damageReportsResponse,
  getDamageReportInput,
} from "../_Types/BookingTypes";

const BookingApi = CarAPI.injectEndpoints({
  endpoints: (build) => ({
    getAllBookings: build.query<bookingResponseType[], Record<string, string>>({
      // bookingInputType
      query: ({ ...name }) => ({
        url: `/booking/get-all-booking`,
        method: "Get",
        params: name,
      }),
      providesTags: ["bookings"],
    }),

    getAllBookingsByAUser: build.query<
      bookingResponseType[],
      Record<string, string>
    >({
      // bookingInputType
      query: ({ ...name }) => ({
        url: `/booking/get-all-booking`,
        method: "Get",
        params: name,
      }),
    }),

    changeBookingState: build.mutation<void, changeBookingStateInput>({
      query: ({ ...booking }) => ({
        url: `/booking/`,
        method: "Put",
        body: booking,
      }),
      invalidatesTags: ["bookings"],
    }),

    getAVehicleDamageReport: build.query<
    damageReportsResponse[],
      getDamageReportInput
    >({
      query: ({ ...report }) => ({
        url: `/damageReport/get-all-report`,
        method: "Get",
        params: report,
      }),
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useLazyGetAllBookingsByAUserQuery,
  useChangeBookingStateMutation,
  useGetAVehicleDamageReportQuery,
  useLazyGetAVehicleDamageReportQuery,
  // useLazyGetACarByIdQuery,
} = BookingApi;
export const {
  getAllBookings,
  getAllBookingsByAUser,
  changeBookingState,
  getAVehicleDamageReport,
} = BookingApi.endpoints;
