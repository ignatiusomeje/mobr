import { CarAPI } from "@/store/CarAPI";
import {
  benefitResponseType,
  createBenefitInputType,
  benefitIDInputType,
  editBenefitInputType,
  getAllBenefitsResponseType,
} from "../_types/settingsTypes";

const BenefitApi = CarAPI.injectEndpoints({
  endpoints: (build) => ({
    createBenefit: build.mutation<benefitResponseType, createBenefitInputType>({
      query: ({ ...benefit }) => ({
        url: `/benefit`,
        method: "Post",
        body: benefit,
      }),
    }),

    editBenefit: build.mutation<benefitResponseType, editBenefitInputType>({
      query: ({ ...benefit }) => ({
        url: `/benefit`,
        method: "Put",
        body: benefit,
      }),
    }),

    getAllBenefits: build.query<getAllBenefitsResponseType, void>({
      query: () => ({
        url: `/benefit/get-all-benefits`,
        method: "Get",
      }),
      providesTags:["benefits"]
    }),

    getOneBenefit: build.query<benefitResponseType, benefitIDInputType>({
      query: ({ ...benefit }) => ({
        url: `/benefit/${benefit.benefitId}`,
        method: "Get",
      }),
    }),

    deleteBenefit: build.mutation<void, benefitIDInputType>({
      query: ({ ...benefit }) => ({
        url: `/benefit`,
        method: "Delete",
        body: benefit,
      }),
      invalidatesTags: ["benefits"],
    }),
  }),
});

export const {
  useCreateBenefitMutation,
  useDeleteBenefitMutation,
  useEditBenefitMutation,
  // useGetAllBenefitsQuery,
  useLazyGetAllBenefitsQuery,
  useGetOneBenefitQuery,
} = BenefitApi;
export const {
  createBenefit,
  deleteBenefit,
  editBenefit,
  getAllBenefits,
  getOneBenefit,
} = BenefitApi.endpoints;
