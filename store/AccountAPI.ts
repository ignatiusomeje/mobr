import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AccountAPI = createApi({
  reducerPath: `accountApi`,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL_Accounts,
  }),
  // refetchOnMountOrArgChange: true,
  // refetchOnReconnect: true,
  // tagTypes: ["encounters"],
  endpoints: () => ({}),
});
