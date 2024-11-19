// import { CarAPI } from "@/store/CarAPI";

// const BookingApi = CarAPI.injectEndpoints({
//   endpoints: (build) => ({
//     createBenefit: build.mutation<benefitResponseType, createBenefitInputType>({
//       query: ({ ...benefit }) => ({
//         url: `/benefit`,
//         method: "Post",
//         body: benefit,
//       }),
//     }),

//     editBenefit: build.mutation<benefitResponseType, editBenefitInputType>({
//       query: ({ ...benefit }) => ({
//         url: `/benefit`,
//         method: "Put",
//         body: benefit,
//       }),
//     }),

//     getAllBenefits: build.query<getAllBenefitsResponseType, void>({
//       query: () => ({
//         url: `/benefit/get-all-benefits`,
//         method: "Get",
//       }),
//       providesTags:["benefits"]
//     }),

//     getOneBenefit: build.query<benefitResponseType, benefitIDInputType>({
//       query: ({ ...benefit }) => ({
//         url: `/benefit/${benefit.benefitId}`,
//         method: "Get",
//       }),
//     }),

//     deleteBenefit: build.mutation<void, benefitIDInputType>({
//       query: ({ ...benefit }) => ({
//         url: `/benefit`,
//         method: "Delete",
//         body: benefit,
//       }),
//       invalidatesTags: ["benefits"],
//     }),
//   }),
// });

// export const {
//   useCreateBenefitMutation,
//   useDeleteBenefitMutation,
//   useEditBenefitMutation,
//   // useGetAllBenefitsQuery,
//   useLazyGetAllBenefitsQuery,
//   useGetOneBenefitQuery,
// } = BookingApi;
// export const {
//   createBenefit,
//   deleteBenefit,
//   editBenefit,
//   getAllBenefits,
//   getOneBenefit,
// } = BookingApi.endpoints;
