import { CarAPI } from "@/store/CarAPI";
import {
  bookingResponseType,
  changeBookingStateInput,
  damageReportsResponse,
  getDamageReportInput,
  getDestinationLocationInput,
  locationResponseType,
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
        url: `/booking/update_booking_State`,
        method: "Put",
        params: { bookingId: booking.bookingId },
        body: {
          bookingState: booking.bookingState,
          vehichleId: booking.vehichleId,
        },
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

    getDestinationLocation: build.query<
      locationResponseType,
      getDestinationLocationInput
    >({
      query: ({ ...location }) => ({
        url: `/Geolocation/${location.locationId}`,
        method: "Get",
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
  useLazyGetDestinationLocationQuery,
  // useLazyGetACarByIdQuery,
} = BookingApi;
export const {
  getAllBookings,
  getAllBookingsByAUser,
  changeBookingState,
  getAVehicleDamageReport,
  getDestinationLocation,
} = BookingApi.endpoints;
