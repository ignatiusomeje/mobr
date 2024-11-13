// import { PayloadAction } from "@reduxjs/toolkit";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

// export const returnError = (
//   action: PayloadAction<(FetchBaseQueryError & { data?: unknown }) | undefined>
// ): string => {
//   // Check if action.payload is not undefined and contains data
//   if (action.payload && "data" in action.payload) {
//     const data = action.payload.data;

//     // Check if data is of type ILoginError
//     if (
//       typeof data !== "undefined" &&
//       data !== null &&
//       typeof data === "object" &&
//       "message" in data &&
//       typeof data.message === "string"
//     ) {
//       return data.message;
//     } else {
//       return "An unknown error occurred";
//     }
//   } else if (action.payload && "error" in action.payload) {
//     return action.payload.error;
//   }

//   return "";
// };

import { PayloadAction } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const returnError = (
  action: PayloadAction<
    | (FetchBaseQueryError & {
        data?: unknown;
      })
    | undefined
  >
): string => {
  // Check if action.payload is not undefined
  if (action.payload) {
    const { data, status } = action.payload;

    // Check if there's a network-related error
    if (status === "FETCH_ERROR") {
      return "Network error: Please check your internet connection.";
    }

    // Check if the payload contains data with a message (error response from API)
    if (
      data &&
      typeof data === "object" &&
      "message" in data &&
      typeof data.message === "string"
    ) {
      return (data as { message: string }).message;
    }
  }
  // Return a generic message if no specific error message is found
  return "An unknown error occurred";
};

// {
//   "type": "accountApi/executeQuery/rejected",
//   "meta": {
//       "arg": {
//           "type": "query",
//           "subscribe": true,
//           "forceRefetch": true,
//           "subscriptionOptions": {
//               "pollingInterval": 0,
//               "skipPollingIfUnfocused": false
//           },
//           "endpointName": "duplicateNumber",
//           "originalArgs": {
//               "phoneNumber": "+234816762333"
//           },
//           "queryCacheKey": "duplicateNumber({\"phoneNumber\":\"+234816762333\"})"
//       },
//       "requestId": "gPxfVbudyD1Pc3eaHcdkd",
//       "rejectedWithValue": false,
//       "requestStatus": "rejected",
//       "aborted": true,
//       "condition": false
//   },
//   "error": {
//       "name": "AbortError",
//       "message": "Aborted"
//   }
// }
