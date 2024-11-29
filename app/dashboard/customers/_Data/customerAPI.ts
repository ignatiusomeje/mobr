import {
  customerIDInputType,
} from "@/app/(Login)/_types/loginTypes";
import { AccountProtectedAPI } from "@/store/AccountProtected";
import { customerInput, customerResponse } from "../_types/CustomerTypes";

const BenefitApi = AccountProtectedAPI.injectEndpoints({
  endpoints: (build) => ({
    getAllCustomers: build.query<customerResponse[], customerInput | void>({
      query: ({...customer}) => ({
        url: `/`,
        method: "Get",
        params:{
          role:"user",
          ...customer
        }
      }),
    }),

    getOneCustomer: build.query<customerResponse, customerIDInputType>({
      query: ({ ...id }) => ({
        url: `/${id.id}`,
        method: "Get",
        // params: id,
      }),
    }),
  }),
});

export const { useGetAllCustomersQuery, useLazyGetOneCustomerQuery, useGetOneCustomerQuery } = BenefitApi;
export const { getAllCustomers, getOneCustomer } = BenefitApi.endpoints;
