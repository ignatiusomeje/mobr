import { CarAPI } from "@/store/CarAPI";
import { bookingResponseType } from "../_Types/BookingTypes";

const BookingApi = CarAPI.injectEndpoints({
  endpoints: (build) => ({
    getAllBookings: build.query<bookingResponseType[], Record<string, string>>({
      // bookingInputType
      query: ({ ...name }) => ({
        url: `/booking/get-all-booking`,
        method: "Get",
        params: name,
      }),
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

    /* get the car by ID  */
    // getACarById: build.query<getByIdResponse, deleteCarInputType>({
    //   query: ({ ...carId }) => ({
    //     url: `/vehicle/`,
    //     method: "Get",
    //     params: carId,
    //   }),
    // }),

    // getAUser: build.query<bookingResponseType[], Record<string, string> >({
    //   // bookingInputType
    //   query: ({ ...name }) => ({
    //     url: `/booking/get-all-booking`,
    //     method: "Get",
    //     params: name,
    //   }),
    // }),

    // editBenefit: build.mutation<benefitResponseType, editBenefitInputType>({
    //   query: ({ ...benefit }) => ({
    //     url: `/benefit`,
    //     method: "Put",
    //     body: benefit,
    //   }),
    // }),

    // getAllBenefits: build.query<getAllBenefitsResponseType, void>({
    //   query: () => ({
    //     url: `/benefit/get-all-benefits`,
    //     method: "Get",
    //   }),
    //   providesTags:["benefits"]
    // }),

    // getOneBenefit: build.query<benefitResponseType, benefitIDInputType>({
    //   query: ({ ...benefit }) => ({
    //     url: `/benefit/${benefit.benefitId}`,
    //     method: "Get",
    //   }),
    // }),

    // deleteBenefit: build.mutation<void, benefitIDInputType>({
    //   query: ({ ...benefit }) => ({
    //     url: `/benefit`,
    //     method: "Delete",
    //     body: benefit,
    //   }),
    //   invalidatesTags: ["benefits"],
    // }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useLazyGetAllBookingsByAUserQuery,
  // useLazyGetACarByIdQuery,
} = BookingApi;
export const { getAllBookings, getAllBookingsByAUser } = BookingApi.endpoints;
