// /* 
// settings has the following:
// email: readonly
// password chnage: user can update password using previous and current password

// // benefit creation
// ability to add new benefit
// edit benefit
// delete benefit
// fetch all benefits
// */

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
// import { returnError } from "@/store/ErrorHandler";
// import { createBenefit, deleteBenefit, editBenefit, getAllBenefits } from "./BenefitApi";
// import {
//   benefitResponseType,
//   initialStateBenefits,
// } from "../_types/settingsTypes";

// const initialState: initialStateBenefits = {
//   benefits: [],
//   benefitsLoading: false,
//   createBenefitLoading:false,
//   benefitsError: "",
// };
// const BenefitSlice = createSlice({
//   name: "benefits",
//   initialState,
//   reducers: {
//     clearBenefitError: (state) => {
//       state.benefitsError = "";
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addMatcher(createBenefit.matchPending, (state) => {
//       state.createBenefitLoading = true;
//     });

//     builder.addMatcher(
//       createBenefit.matchFulfilled,
//       (state, action: PayloadAction<benefitResponseType>) => {
//         state.createBenefitLoading = false;
//         state.benefits = [...state.benefits, action.payload];
//       }
//     );

//     builder.addMatcher(
//       createBenefit.matchRejected,
//       (
//         state,
//         action: PayloadAction<
//           (FetchBaseQueryError & { data?: unknown }) | undefined
//         >
//       ) => {
//         state.createBenefitLoading = false;
//         state.benefitsError = returnError(action);
//       }
//     );

//     builder.addMatcher(
//       deleteBenefit.matchRejected,
//       (
//         state,
//         action: PayloadAction<
//           (FetchBaseQueryError & { data?: unknown }) | undefined
//         >
//       ) => {
//         state.benefitsError = returnError(action);
//       }
//     );

//     builder.addMatcher(
//       editBenefit.matchFulfilled,
//       (state, action: PayloadAction<benefitResponseType>) => {
//         const indexofEdit = state.benefits.findIndex(
//           (benefit) => benefit.benefitId === action.payload.benefitId
//         );
//         const notUpdatedOnes = state.benefits.filter(
//           (val) => val.benefitId !== action.payload.benefitId
//         );
//         notUpdatedOnes.splice(indexofEdit, 0, action.payload);
//         state.benefits = [...notUpdatedOnes];
//       }
//     );

//     builder.addMatcher(
//       editBenefit.matchRejected,
//       (
//         state,
//         action: PayloadAction<
//           (FetchBaseQueryError & { data?: unknown }) | undefined
//         >
//       ) => {
//         state.benefitsError = returnError(action);
//       }
//     );

//     builder.addMatcher(editBenefit.matchPending, (state) => {
//       state.benefitsLoading = true;
//     });

//     builder.addMatcher(
//       editBenefit.matchFulfilled,
//       (state, action: PayloadAction<benefitResponseType>) => {
//         state.benefitsLoading = false;
//         const indexofEdit = state.benefits.findIndex(
//           (benefit) => benefit.benefitId === action.payload.benefitId
//         );
//         const notUpdatedOnes = state.benefits.filter(
//           (val) => val.benefitId !== action.payload.benefitId
//         );
//         notUpdatedOnes.splice(indexofEdit, 0, action.payload);
//         state.benefits = [...notUpdatedOnes];
//       }
//     );

//     builder.addMatcher(
//       editBenefit.matchRejected,
//       (
//         state,
//         action: PayloadAction<
//           (FetchBaseQueryError & { data?: unknown }) | undefined
//         >
//       ) => {
//         state.benefitsLoading = false;
//         state.benefitsError = returnError(action);
//       }
//     );

//     builder.addMatcher(getAllBenefits.matchPending, (state) => {
//       state.benefitsLoading = true;
//     });

//     builder.addMatcher(
//       getAllBenefits.matchFulfilled,
//       (state, action: PayloadAction<benefitResponseType[]>) => {
//         state.benefitsLoading = false;
//         state.benefits = action.payload;
//       }
//     );

//     builder.addMatcher(
//       getAllBenefits.matchRejected,
//       (
//         state,
//         action: PayloadAction<
//           (FetchBaseQueryError & { data?: unknown }) | undefined
//         >
//       ) => {
//         state.benefitsLoading = false;
//         state.benefitsError = returnError(action);
//       }
//     );

//     // builder.addMatcher(getOneBenefit.matchPending, (state) => {
//     //   state.benefitsLoading = true;
//     // });

//     // builder.addMatcher(
//     //   getOneBenefit.matchFulfilled,
//     //   (state, action: PayloadAction<benefitResponseType>) => {
//     //     state.benefitsLoading = false;
//     //     // state.benefits = action.payload;
//     //   }
//     // );

//     // builder.addMatcher(
//     //   getOneBenefit.matchRejected,
//     //   (
//     //     state,
//     //     action: PayloadAction<
//     //       (FetchBaseQueryError & { data?: unknown }) | undefined
//     //     >
//     //   ) => {
//     //     state.benefitsLoading = false;
//     //     state.benefitsError = returnError(action);
//     //   }
//     // );
//   },
// });

// export const { clearBenefitError } = BenefitSlice.actions;

// export default BenefitSlice.reducer;

