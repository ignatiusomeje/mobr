import {
  blockCustomerInputType,
  customerIDInputType,
} from "@/app/(Login)/_types/loginTypes";
import { AccountProtectedAPI } from "@/store/AccountProtected";
import { customerInput, customerResponse } from "../_types/CustomerTypes";

const BenefitApi = AccountProtectedAPI.injectEndpoints({
  endpoints: (build) => ({
    getAllCustomers: build.query<customerResponse[], customerInput | void>({
      query: ({ ...customer }) => ({
        url: `/`,
        method: "Get",
        params: {
          role: "user",
          ...customer,
        },
      }),
      providesTags: ["customers"],
    }),

    getOneCustomer: build.query<customerResponse, customerIDInputType>({
      query: ({ ...id }) => ({
        url: `/${id.id}`,
        method: "Get",
        // params: id,
      }),
      // providesTags:["customer"]
    }),

    validateOneCustomer: build.mutation<customerResponse, customerIDInputType>({
      query: ({ ...id }) => ({
        url: `/validate`,
        method: "Patch",
        params: id,
      }),
      invalidatesTags: ["customers"],
    }),

    blockOneCustomer: build.mutation<void, blockCustomerInputType>({
      query: ({ ...id }) => ({
        url: `/${id.id}`,
        method: "Patch",
        params: { blockState: id.blockState },
      }),
      invalidatesTags: ["customers"],
    }),
  }),
});

export const {
  useGetAllCustomersQuery,
  useLazyGetOneCustomerQuery,
  useGetOneCustomerQuery,
  useValidateOneCustomerMutation,
  useBlockOneCustomerMutation
} = BenefitApi;
export const { getAllCustomers, getOneCustomer, validateOneCustomer, blockOneCustomer } =
  BenefitApi.endpoints;
